// Opsight website — Astro configuration.
//
// Static output to dist/, served by GitHub Pages from a GitHub Actions build
// (.github/workflows/pages.yml). The nightly stats push does NOT trigger a
// build: pages fetch stats.json / procurement-stats.json from the repo's raw
// URL, so the numbers move every night while the site is rebuilt only when
// its source changes (the org's Actions minutes are the constraint).
//
// i18n: English at /, Korean at /ko/. Both are first-class; the layout
// renders the same page from one copy object per locale (src/i18n/).
//
// Pages not yet migrated (intelligence, procurement, manufacturing, opsentry,
// maritime redirect, demodashboard/, design/) are served verbatim from public/.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opsightintel.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // <name>/index.html so /ko/ is a real directory. Pages not yet migrated are
    // still <name>.html files under public/ and win on GitHub Pages while both
    // exist; a migrated page replaces its public/ file in the same PR.
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    routing: { prefixDefaultLocale: false },
  },
});
