// Check the built site: every internal href/src in dist/**/*.html resolves to
// a file in dist (a directory index counts), and every page has a <title>, a
// <meta name="description">, and a canonical link. Exits 1 with the list of
// failures. External links are not fetched: this runs on every PR and must
// not depend on the internet or spend minutes on it.
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, dirname, resolve, sep } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.html') ? [full] : [];
  });
}

function targetExists(url, fromFile) {
  const clean = url.split('#')[0].split('?')[0];
  if (clean === '') return true;
  const base = clean.startsWith('/') ? DIST : dirname(fromFile);
  const path = resolve(base, clean.startsWith('/') ? clean.slice(1) : clean);
  return (
    existsSync(path) ||
    existsSync(`${path}.html`) ||
    existsSync(join(path, 'index.html'))
  );
}

// The pre-Astro home page, kept until the new one has had its native read in
// both languages (company TECHDEBT row 32), links to pages that no longer
// exist under those names. It is not linked from anywhere; skip it.
const SKIP = new Set(['index-legacy.html']);

const failures = [];
const pages = walk(DIST).filter((f) => !SKIP.has(relative(DIST, f).split(sep).join('/')));
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const name = relative(DIST, file).split(sep).join('/');
  // Unlisted pages (noindex: the redirect stubs, the demo dashboards, the
  // design sheet) need no description or canonical; every indexed page does.
  const indexed = !/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${name}: no <title>`);
  if (indexed && !/<meta\s+name="description"\s+content="[^"]+"/.test(html)) failures.push(`${name}: no meta description`);
  if (indexed && !/<link\s+rel="canonical"/.test(html)) failures.push(`${name}: no canonical`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/.test(url)) continue;
    if (!targetExists(url, file)) failures.push(`${name}: broken link ${url}`);
  }
}

if (failures.length) {
  console.error(`check-dist: ${failures.length} problem(s) in ${pages.length} page(s)`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log(`check-dist: ${pages.length} page(s), every internal link resolves`);
