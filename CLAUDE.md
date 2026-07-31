# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **OpSight Intelligence** (opsightintel.com), hosted on GitHub Pages with Cloudflare DNS. Four business verticals:

- **Fraud Intelligence** (`intelligence.html`): fraud ecosystem monitoring for financial institutions (vishing networks, mule accounts, image OCR, REST API, evidence-grade reporting). 2 core markets (Korea, Turkey) plus custom client pipelines.
- **Manufacturing Intelligence** (`manufacturing.html`): forensic operational insights for Tier 1 manufacturers, positioned explicitly *against* dashboards — each finding carries root cause, quantified dollar impact, ranked actions, a causal-vs-correlational judgment, and success criteria. Excel-native input, no IT project, cross-industry rather than auto-only.
- **Maritime Intelligence / Drydock** (`maritime.html`): Korean shipbuilding yard activity observed from orbit, ahead of the filings. Fuses Sentinel-1 SAR backscatter (dock occupancy), AIS-derived sea-trial events, and OSINT filings into a per-yard activity index and delivery-cadence proxy. Built entirely on public and free-tier sources. **In active development.**
- **OpSentry** (`opsentry.html`): AI coding assistant security guardrails. Three-layer enforcement, 157 tests, ISO 27001/EU AI Act/Korean AI Basic Act compliance. Free + Team ($15/dev/mo) + Business ($25/dev/mo) tiers.

## Architecture

- **No build system, no framework** — plain HTML/CSS/JS served directly via GitHub Pages
- All styling is inline `<style>` blocks within each HTML file (no external CSS)
- `stats.json` — live stats (entities, clusters, members, markets) fetched by `intelligence.html` to display dynamic counters
- `demodashboard/` — standalone demo dashboard pages (capacity, cycle time efficiency, run rate) for the manufacturing vertical
- `CNAME` — points to `opsightintel.com`
- `sitemap.xml` — lists all five public URLs; extensionless (`/maritime`, not `/maritime.html`)
- `website.md` — operational checklist for the Cloudflare/SEO visibility fix; not published

Each vertical page is self-contained and carries its own accent color in a `:root` block
(maritime uses `--mar-accent`), over a shared navy `--primary`. The nav bar markup is
duplicated across pages rather than shared — adding a page means editing the nav in each.

## Development

No build, lint, or test commands. To preview locally, serve the directory with any static file server:

```
python3 -m http.server 8000
```

## Multi-language Support

`intelligence.html` supports English (`en`), Korean (`ko`), and Turkish (`tr`) via `data-lang` attributes toggled by switching `html[lang]`. Content for all languages lives in the same HTML file with CSS-driven visibility.

`manufacturing.html`, `maritime.html`, and `opsentry.html` are English-only. `index.html` is the homepage linking to all four verticals.

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
