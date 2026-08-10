# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **OpSight Intelligence** (opsightintel.com), hosted on GitHub Pages with Cloudflare DNS. Four business verticals:

- **Fraud Intelligence** (`intelligence.html`): fraud ecosystem monitoring for financial institutions (vishing networks, mule accounts, image OCR, REST API, evidence-grade reporting). 2 core markets (Korea, Turkey) plus custom client pipelines.
- **Manufacturing Intelligence** (`manufacturing.html`): forensic operational insights for Tier 1 manufacturers, positioned explicitly *against* dashboards — each finding carries root cause, quantified dollar impact, ranked actions, a causal-vs-correlational judgment, and success criteria. Excel-native input, no IT project, cross-industry rather than auto-only.
- **Procurement Intelligence** (`procurement.html`): Korean public procurement — every tender, bidder and winning price against the published estimate (기초금액), collected nightly from 조달청 / 나라장터 open APIs. **Renamed from `maritime.html` on 2026-08-10** — the old name shipped a fishing-industry word and an anchor icon on a Korean public-tender product, which is what a recipient saw first when the link was shared. `maritime.html` remains as a redirect stub (canonical + meta refresh + `noindex, follow`) because links to it are already out in the world; **do not delete it**. GitHub Pages cannot issue a real 301, so the stub is the honest substitute. The SAR/AIS shipbuilding thesis this page used to carry is **not sellable** (detector precision 0.57, 2 of 11 yards SAR-legible, AIS receiving nothing) and was removed on 2026-08-07 — see `opsight-company/strategy/gtm/SELLABILITY_MAP.md` §3 before putting it back. Sub-brand is **OPSIGHT PROCUREMENT**; `drydock` remains the internal package name only and must not appear in customer-facing copy.
- **OpSentry** (`opsentry.html`): AI coding assistant security guardrails. Three-layer enforcement, 157 tests, ISO 27001/EU AI Act/Korean AI Basic Act compliance. Free + Team ($15/dev/mo) + Business ($25/dev/mo) tiers.

## Architecture

- **No build system, no framework** — plain HTML/CSS/JS served directly via GitHub Pages
- All styling is inline `<style>` blocks within each HTML file (no external CSS)
- `stats.json` — live stats (entities, clusters, members, markets) fetched by `intelligence.html` to display dynamic counters
- `demodashboard/` — standalone demo dashboard pages (capacity, cycle time efficiency, run rate) for the manufacturing vertical
- `CNAME` — points to `opsightintel.com`
- `sitemap.xml` — lists all five public URLs; extensionless (`/procurement`, not `/procurement.html`). The `maritime.html` redirect stub is deliberately absent from it and carries `noindex, follow`
- `website.md` — operational checklist for the Cloudflare/SEO visibility fix; not published

Each vertical page is self-contained and carries its own accent color in a `:root` block
(procurement uses `--mar-accent`, a name kept from the rename), over a shared navy `--primary`. The nav bar markup is
duplicated across pages rather than shared — adding a page means editing the nav in each.

## Development

No build, lint, or test commands. To preview locally, serve the directory with any static file server:

```
python3 -m http.server 8000
```

## Multi-language Support

`intelligence.html` supports English (`en`), Korean (`ko`), and Turkish (`tr`) via `data-lang` attributes toggled by switching `html[lang]`. Content for all languages lives in the same HTML file with CSS-driven visibility.

`manufacturing.html`, `procurement.html`, and `opsentry.html` are English-only. `index.html` is the homepage linking to all four verticals.

## Conventions

Branching, versioning, changelog, and documentation rules are in
[CONTRIBUTING.md](CONTRIBUTING.md). In short:

- Work on `feature/*` off `develop`; never commit to `main` or `develop` directly
- `main` is what GitHub Pages serves — a merge to `main` is a deploy
- Every commit bumps `VERSION`, adds a `CHANGELOG.md` entry, and updates affected docs
- New pages must be added to `sitemap.xml`, linked from `index.html`, given a nav entry
  on every other page, and described in the Project Overview above
- Routine `stats.json` refreshes still take a PATCH bump, but are grouped in the
  changelog rather than listed one per refresh
- `main` and `develop` are guarded by a client-side `pre-push` hook that is **not**
  version-controlled — see [README.md](README.md) for the installer to run in a fresh clone
