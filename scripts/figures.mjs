// Copy the live figure files from the repo root into public/data/ so the
// built site serves them from its own origin (/data/<file>). The nightly
// figures job writes them at the root and pushes to main, which rebuilds the
// site; the pages fetch the same-origin copy, so no visitor's browser calls a
// third-party host. A missing file is reported, not fatal: its tiles and
// charts show their placeholder or "unavailable" message instead.
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public', 'data');

// Every figure file a component reads. Names and root locations are fixed by
// the nightly deploy script; change them there first.
const FIGURE_FILES = [
  'stats.json',
  'procurement-stats.json',
  'procurement-figures.json',
  'procurement-cells.json',
  'procurement-numbers.json',
  'agent-demo.json',
];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const missing = [];
for (const name of FIGURE_FILES) {
  const src = join(ROOT, name);
  if (existsSync(src)) copyFileSync(src, join(OUT, name));
  else missing.push(name);
}
const copied = FIGURE_FILES.length - missing.length;
console.log(`figures: ${copied} file(s) copied to public/data/`);
for (const name of missing) console.warn(`figures: ${name} missing at the repo root; its page section will show its fallback`);
