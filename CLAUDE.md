# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **OpSight Intelligence** (opsightintel.com), hosted on GitHub Pages with Cloudflare DNS. Four business verticals:

- **Fraud Intelligence** (`intelligence.html`): fraud ecosystem monitoring for financial institutions (vishing networks, mule accounts, image OCR, REST API, evidence-grade reporting). 2 core markets (Korea, Turkey) plus custom client pipelines.
- **Manufacturing Intelligence** (`manufacturing.html`): forensic operational insights for Tier 1 manufacturers, positioned explicitly *against* dashboards — each finding carries root cause, quantified dollar impact, ranked actions, a causal-vs-correlational judgment, and success criteria. Excel-native input, no IT project, cross-industry rather than auto-only.
- **Procurement Intelligence** (`procurement.html`): Korean public procurement — every tender, bidder and winning price against the published estimate (기초금액), collected nightly from 조달청 / 나라장터 open APIs. **Renamed from `maritime.html` on 2026-08-10** — the old name shipped a fishing-industry word and an anchor icon on a Korean public-tender product, which is what a recipient saw first when the link was shared. `maritime.html` remains as a redirect stub (canonical + meta refresh + `noindex, follow`) because links to it are already out in the world; **do not delete it**. GitHub Pages cannot issue a real 301, so the stub is the honest substitute. The SAR/AIS shipbuilding thesis this page used to carry is **not sellable** (detector precision 0.57, 2 of 11 yards SAR-legible, AIS receiving nothing) and was removed on 2026-08-07 — see `opsight-company/strategy/gtm/SELLABILITY_MAP.md` §3 before putting it back. Sub-brand is **OPSIGHT PROCUREMENT**; `drydock` remains the internal package name only and must not appear in customer-facing copy.
- **OpSentry** (`opsentry.html`): AI coding assistant security guardrails. Three-layer enforcement, 157 tests, ISO 27001/EU AI Act/Korean AI Basic Act compliance. Free + Team ($15/dev/mo) + Business ($25/dev/mo) tiers.

## Architecture

- **Astro (static output) from v0.10.0**, built by GitHub Actions
  (`.github/workflows/pages.yml`) and published to GitHub Pages from the build
  artifact. `npm run build` writes `dist/`; nothing in `dist/` is committed.
- **Migration is page by page.** `src/pages/` holds the migrated pages (today:
  the home page, `index.astro` and `ko/index.astro`). Pages not yet migrated —
  `intelligence.html`, `procurement.html`, `manufacturing.html`,
  `opsentry.html`, the `maritime.html` redirect, `demodashboard/` — live
  under `public/` and are served verbatim; on GitHub Pages a `<name>.html`
  file wins over a `<name>/index.html` directory, so a page is migrated by
  adding `src/pages/<name>.astro` and deleting `public/<name>.html` in the
  same PR. `public/index-legacy.html` is the pre-Astro home page, kept until
  the new one has been read in both languages, then deleted.
- **The design layer** is `public/design/`: `tokens.css` (brand, line accents,
  severity/status, surfaces, type, space — light and dark) and
  `components.css` (nav, hero, stat tile, product card, badges, citation chip,
  callout, evidence table, form, footer). `public/design/index.html` renders
  all of it at `/design/` with a theme toggle (`noindex`, unlisted). The Astro
  layout links these files rather than bundling them, so every page and
  `/design/` read the same bytes. Other repos COPY the two files (never link
  at runtime) and carry the same version string.
- **Live numbers never need a build.** `stats.json` and
  `procurement-stats.json` sit at the repo root and are rewritten nightly by
  `opsight-fraud/scripts/deploy_website_stats.py` (pushed to `develop` and
  `main`). Pages fetch them from the repo's raw URL
  (`raw.githubusercontent.com/opsight-intelligence/opsight-website/main/…`),
  and the Pages workflow ignores those paths, so a stats push costs no
  Actions minutes and the figures still move every night. A tile whose file
  cannot be read keeps its dash — nothing stale or invented is shown.
- **Copy lives in `src/i18n/<page>.ts`**, one object per locale (`en`, `ko`),
  rendered by one component (`src/components/Home.astro`) inside
  `src/layouts/Base.astro` (head, hreflang pairs, nav, footer). Korean at
  `/ko/…`, English at `/…`. Korean written by the agent needs a native read
  before the professional launch — correct it in the copy object.
- `CNAME`, `favicon.svg`, `robots.txt`, `sitemap.xml` live in `public/` and
  ship unchanged. `sitemap.xml` is hand-kept and lists extensionless URLs plus
  `/ko/`. `website.md` is the Cloudflare/SEO checklist; not published.

## Development

```
npm ci            # once; Node 22+
npm run dev       # http://localhost:4321, live reload
npm run build     # writes dist/ — what Pages serves
npm run preview   # serve dist/ locally
```

No lint or test commands yet. The one check that matters before a PR is
`npm run build` succeeding and the two home pages rendering in both themes.

## Multi-language Support

The migrated pages are bilingual by construction: `/` (English) and `/ko/`
(Korean) come from the same component and copy object, with `hreflang`
alternates in the head and a language switch in the nav.

The not-yet-migrated `public/intelligence.html` still carries English, Korean
and Turkish inline via `data-lang` attributes; `manufacturing.html`,
`procurement.html` and `opsentry.html` are English-only until they migrate.

## Conventions

Branching, versioning, changelog, and documentation rules are in
[CONTRIBUTING.md](CONTRIBUTING.md). In short:

- Work on `feature/*` off `develop`; never commit to `main` or `develop` directly
- `main` is what GitHub Pages serves — a push to `main` that touches source triggers the
  Pages build; stats-only pushes do not (see `pages.yml`)
- Every commit bumps `VERSION`, adds a `CHANGELOG.md` entry, and updates affected docs
- New pages are `src/pages/<name>.astro` + `src/pages/ko/<name>.astro` with a copy object
  in `src/i18n/`, added to `public/sitemap.xml`, given a nav entry in `Base.astro`, and
  described in the Project Overview above
- Routine `stats.json` refreshes still take a PATCH bump, but are grouped in the
  changelog rather than listed one per refresh
- `main` and `develop` are guarded by a client-side `pre-push` hook that is **not**
  version-controlled — see [README.md](README.md) for the installer to run in a fresh clone
