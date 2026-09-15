// Render one Open Graph image (1200x630 PNG) per page from an SVG card drawn
// on the design tokens: navy ground, the brand wordmark, the page title, a
// line-accent rule, and the lifecycle dots. English only (previews are read
// by link crawlers; the Korean pages share the image). Run `node scripts/og.mjs`
// after changing a title; the PNGs are committed.
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync, mkdirSync } from 'node:fs';

const LINES = { fraud: '#9085e9', procurement: '#199e70', manufacturing: '#d95926', opsentry: '#8fb0d9', home: '#8fb0d9', method: '#8fb0d9', about: '#8fb0d9' };
const PAGES = [
  { id: 'home', title: 'Raw signals in.\nIntelligence products out.', sub: 'Fraud · Procurement · Manufacturing · AI governance' },
  { id: 'fraud', title: 'Telegram intelligence for financial\ninstitutions and compliance teams.', sub: 'Fraud Intelligence' },
  { id: 'procurement', title: 'Korean public procurement,\ncollected nightly and made comparable.', sub: 'Procurement Intelligence' },
  { id: 'manufacturing', title: 'Forensic insights with the dollar\nimpact and the fix attached.', sub: 'Manufacturing Intelligence' },
  { id: 'opsentry', title: 'Three layers of defense\nfor AI coding agents.', sub: 'OpSentry · open source' },
  { id: 'method', title: 'Different data,\none common language.', sub: 'Method' },
  { id: 'about', title: 'A small platform that says\nexactly what it knows.', sub: 'About' },
];

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function card(p) {
  const accent = LINES[p.id];
  const lines = p.title.split('\n');
  const dots = [0, 1, 2, 3, 4].map((i) => `<circle cx="${100 + i * 90}" cy="540" r="${i === 4 ? 12 : 8}" fill="${i === 4 ? accent : 'rgba(255,255,255,0.55)'}"/>`).join('');
  const segs = [0, 1, 2, 3].map((i) => `<line x1="${108 + i * 90}" y1="540" x2="${182 + i * 90}" y2="540" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="4 6"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14294a"/><stop offset="0.55" stop-color="#1e3a5f"/><stop offset="1" stop-color="#0f1f38"/></linearGradient>
    <radialGradient id="r" cx="0.85" cy="-0.1" r="0.9"><stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/><stop offset="0.6" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#r)"/>
  <text x="100" y="120" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="4" fill="#ffffff" opacity="0.85">OPSIGHT INTELLIGENCE</text>
  <rect x="100" y="150" width="64" height="5" rx="2.5" fill="${accent}"/>
  <text x="100" y="240" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="rgba(255,255,255,0.7)">${esc(p.sub)}</text>
  ${lines.map((l, i) => `<text x="100" y="${320 + i * 74}" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="#ffffff">${esc(l)}</text>`).join('')}
  ${segs}${dots}
  <text x="1100" y="548" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">opsightintel.com</text>
</svg>`;
}

mkdirSync('public/og', { recursive: true });
for (const p of PAGES) {
  const png = new Resvg(card(p), { fitTo: { mode: 'width', value: 1200 }, font: { loadSystemFonts: true } }).render().asPng();
  writeFileSync(`public/og/${p.id}.png`, png);
  console.log(`public/og/${p.id}.png ${(png.length / 1024).toFixed(0)} KB`);
}
