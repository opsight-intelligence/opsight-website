// Generate public/sitemap.xml from src/pages — one <url> per page file, the
// last commit date of that file as <lastmod>, and priority by depth (home 1.0,
// product pages 0.9, the rest 0.7). Runs before every build (`prebuild`), so a
// page added under src/pages/ is in the sitemap without anyone editing XML.
// No dependency: a page's URL is its path with index/.astro stripped.
import { execSync } from 'node:child_process';
import { readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const SITE = 'https://opsightintel.com';
const ROOT = new URL('..', import.meta.url).pathname;
const PAGES = join(ROOT, 'src', 'pages');

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.astro') ? [full] : [];
  });
}

function urlFor(file) {
  const rel = relative(PAGES, file).split(sep).join('/').replace(/\.astro$/, '');
  const path = rel === 'index' ? '' : rel.replace(/\/index$/, '/');
  return path === '' ? `${SITE}/` : `${SITE}/${path}`;
}

function lastmod(file) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) return out;
  } catch {
    // not a git checkout (a bare tarball build): fall back to today
  }
  return new Date().toISOString().slice(0, 10);
}

function priority(url) {
  const path = url.slice(SITE.length);
  if (path === '/' || path === '/ko/') return '1.0';
  return /\/(ko\/|tr\/)?(fraud|procurement|manufacturing|opsentry)$/.test(path) ? '0.9' : '0.7';
}

const entries = walk(PAGES)
  .map((file) => ({ url: urlFor(file), lastmod: lastmod(file) }))
  .sort((a, b) => a.url.localeCompare(b.url));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map(
    (e) => `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <priority>${priority(e.url)}</priority>\n  </url>`,
  ),
  '</urlset>',
  '',
].join('\n');

mkdirSync(join(ROOT, 'public'), { recursive: true });
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml);
console.log(`sitemap: ${entries.length} url(s)`);
