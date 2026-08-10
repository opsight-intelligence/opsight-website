# Changelog

All notable changes to this site are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Routine `stats.json` refreshes take a PATCH version bump but are grouped rather than
listed individually.

## [0.7.0] - 2026-08-10

### Added

- **A published price on the fraud page.** Until now only OpSentry carried a
  number and the other three verticals said "email us", which for an unknown
  vendor means no inbound at all — the buyer cannot tell whether they are
  looking at a ₩500k tool or a ₩50M engagement, so they don't write.

  Early Warning is quoted at **from ₩1,000,000 per month**, in all three
  languages the page supports. "From" is deliberate: the figure is a floor that
  filters buyers who were never going to pay, without anchoring a price that
  has never been tested on a real one — every non-OpSentry number in
  `SELLABILITY_MAP.md` is still labelled *proposed*. Final price is stated to
  depend on markets in scope and delivery channel, which is true and leaves
  room upward.

  A note under the card covers the wallet feed, bank risk brief and managed
  package as scoped per buyer, with the promise that asking produces a number
  rather than a discovery call.

  Early Warning was chosen to carry the first public price because it is built,
  runs nightly, needs no new collection, and is the difference between project
  revenue and recurring revenue.

## [0.6.0] - 2026-08-10

Prompted by an outside reader who was sent the link and reported back what they
saw. Everything here is something a first-time visitor notices before reading a
word of the content.

### Changed

- **The procurement page is at `/procurement`, not `/maritime`.** The product is
  Korean public procurement; the URL said maritime, `og:url` said maritime, and
  the homepage card wore an anchor (⚓). Anyone sent the link saw a shipping word
  and a boat icon on a public-tender product before seeing anything else. The
  file is renamed, `og:url` corrected, a `rel=canonical` added, and the card icon
  is now a neutral geometric mark consistent with the other three.
- **The homepage is four domains, not five.** "Defense Intelligence — Coming
  Soon" advertised something unbuilt; on a one-person company it reads as an
  unfinished hobby rather than a roadmap, and it added no value a buyer could
  act on. Removed, along with the now-dead `.group-divider`, `.service-card.soon`
  and `.badge-soon` CSS and the empty section wrapper.
- **The domain cards are a 2x2 grid.** Four cards in a three-column grid left one
  stranded alone on the second row, which reads as a missing card rather than a
  layout.
- The homepage `description` and `keywords` no longer say "maritime"; they name
  Korean public procurement, 나라장터 and KONEPS, which is what the page is about
  and what anyone would search for.

### Added

- **`maritime.html` is now a redirect stub** — `rel=canonical`, a meta refresh,
  `location.replace` so it leaves no back-button trap, and `robots: noindex,
  follow`. Links to the old URL are already out in the world, and GitHub Pages
  serves static files and cannot issue a real 301, so this is the honest
  substitute. **Do not delete this file.**
- **A favicon.** All five pages previously shipped none, so every tab showed the
  browser's blank default page icon — including in the tab of whoever was sent
  the link. `favicon.svg`, referenced from every page.

### Fixed

- `sitemap.xml` pointed at `/maritime` and carried a `lastmod` of 2026-06-11 on
  every URL, two months stale on a site whose selling point is nightly data.
- An HTML comment in the page source named the internal engine repo. The rule
  that internal names stay out of customer-facing copy applies to view-source
  too.

## [0.5.0] - 2026-08-08

### Added

- **The procurement figures are live.** They were hardcoded HTML pinned on
  2026-08-07; two nightlies later the real notice count was ~4,300 higher, so the
  page understated by about 10% and worsened daily. The page's central claim is
  *collected nightly* and the evidence it offered was three numbers that visibly
  never moved.

  `maritime.html` now fetches `procurement-stats.json`, written nightly by
  opsight-maritime and deployed by opsight-fraud's `deploy_website_stats.py`.
  Six elements update from one payload — the three stat blocks and the three
  prose mentions, which previously had to be edited in six places by hand.

- **An "as of" line under the figures.** Undated numbers are what made the stale
  ones misleading rather than merely old. It appears only once real data has
  arrived, so a date is never shown without figures to date.

- `procurement-stats.json` is seeded with the values that were already on the
  page and their true date, so the page gains its "as of" line immediately
  rather than at the next nightly.

### Changed

- **The meta description no longer quotes counts.** JavaScript cannot refresh a
  meta tag for a crawler that does not run it, so a figure there is stale the day
  after it is written with no way to fix it. It describes the product instead.

### Notes

The hardcoded numbers stay in the HTML deliberately, as the fallback: a failed
fetch shows the last known-true values rather than blanks.


## [0.4.1] - 2026-08-08

### Changed

- **Nav labels are consistent: Home · Fraud · Manufacturing · Procurement ·
  OpSentry.** "Fraud Intelligence" was the only two-word entry, which read as
  though that line were the intelligence product and the others something else.
  Opsight Intelligence is the parent brand; repeating it inside one child label
  weakens it rather than reinforcing it.

- **"Maritime" → "Procurement" in the nav**, for the same reason v0.4.0 changed
  the brand line. The label pointed at a page that now reads OPSIGHT PROCUREMENT
  everywhere else on it, so leaving it would have reproduced one level down the
  exact mismatch v0.4.0 fixed. The href stays `maritime.html` — the URL is live
  and the engine repo is `opsight-maritime`.

Applied across all five pages; the per-page `class="active"` state is preserved
on each.

### Not changed

The homepage service cards still read "Fraud Intelligence", "Manufacturing
Intelligence", "Procurement Intelligence", "AI Governance", "Defense
Intelligence". Those are full service names in a context that has room for them,
and they are already consistent with each other. The nav is a different job — it
wants short labels — so the two are not in conflict.


## [0.4.0] - 2026-08-08

### Changed

- **The procurement sub-brand is `OPSIGHT PROCUREMENT`, not `DRYDOCK`.** The page
  content was rewritten for procurement on 2026-08-07 but the product name was
  left behind, so the page said "drydock" — a dock drained of water to work on a
  ship's hull — above an offer about Korean public tenders.

  The site's own convention settles it: sub-brands here are descriptive
  (`OPSIGHT MANUFACTURING`), with one genuine product name (`OPSENTRY`, which is
  actually installable via brew and pip). `DRYDOCK` was the only codename and the
  only one that described the wrong thing.

  Changed in 8 places: page title, meta description, og:title, twitter:title, the
  brand line, the mailto subject, the keyword list, and the card on the index.

- **`drydock` stays internal and stays out of customer-facing copy.** It is the
  Python package, the database, `DRYDOCK_DATABASE_URL`, the venv and CI config
  across two repos — renaming that is real churn for no customer benefit, and an
  internal codename differing from a product name is ordinary. The data path a
  customer touches never carries it either: procurement artifacts publish to the
  bus as `source: koneps`.

- `CLAUDE.md` no longer describes this page as satellite-radar shipbuilding
  intelligence. It records why the filename is still `maritime.html` (the URL is
  live, the engine repo is `opsight-maritime`) and points at the sellability map
  before anyone restores the SAR thesis.


## [0.3.1] - 2026-08-07

### Changed

- **The manufacturing insight examples no longer read as client results.** The
  section was headed *"Real, unedited AI output from a live analysis run"* above
  three cards naming equipment (DCM-401, PRESS-201, STAMP-503) and quoting
  precise figures — 516 stops, 121 hours of downtime, an 18,618-part loss,
  $2,100–$2,520/yr.

  The AI output genuinely is real and unedited. **The data underneath is
  synthetic.** `data/samples/README.md` in opsight-manufacturing states it
  plainly — *"No real customer data; all suppliers / equipment / parts are
  fictitious"* — and DCM-401 is an authored archetype in
  `demo_stories_text.py`, the deliberate "false hero" of the demo tour.

  Named machines beside dollar impacts invite the reading that a real factory
  was analysed, and the word "Real" was doing exactly that work. The subtitle
  now says the run is on our synthetic demo dataset, and a note above the cards
  states outright that these are not client results and the equipment is
  fictitious.

  What the note keeps is the genuine strength: the analysis, the quantified
  impact and the ranked actions are exactly what the engine produces, unedited,
  and it can be rerun live. That is a checkable claim, which an unattributable
  case study is not.

- The Interactive Demos subtitle says the dashboards run on the same synthetic
  dataset, so the two sections agree.

### Notes

Unlike the maritime page, the rest of this page needed no change. It is an
**offer** rather than a claim of observation — "send us one Excel file", 48-hour
first insights, zero IT setup — and a service that runs on the client's data
does not need data of its own. The four lenses, the dashboards and the engine
all exist. The overreach was confined to one subtitle.


## [0.3.0] - 2026-08-07

### Changed

- **The maritime page now leads with what actually collects.** Every headline
  capability it advertised — Dock Occupancy (SAR), Sea-Trial Events (AIS),
  Filings & Contracts (DART) — is backed by **zero rows** in the live database,
  while the one maritime capability that runs nightly appeared as three words
  inside a bullet.

  The page now separates **Live** from **In development**, with a status pill on
  every capability so a reader never has to guess which claims are backed by
  data collecting today:

  - **Live** — 39,679 tender notices, 25,884 awards with winning price and
    낙찰률, 31,174 individual bids named per company, 기초금액 estimates with the
    예비가격 band, agency concentration, and stated data-quality handling.
  - **In development** — SAR occupancy, AIS sea-trials and DART filings, each
    labelled as built-but-not-collecting rather than presented as a service.

  The SAR card says plainly that validation so far does not support it as a
  commercial signal and that we will not sell it until it does. That matches the
  engine's own analysis (occupancy vs revenue pearson −0.57, 2 of 11 yards
  SAR-legible), which the previous copy contradicted.

- **Coverage rewritten from yards to buyers.** "Geoje, Ulsan, Yeongam, Busan
  monitored scene by scene" described monitoring that is not happening; it now
  describes the public bodies actually in the data, nationwide coverage, and why
  공사 is deliberately excluded from bidder enrichment.

- **Meta tags, keywords and the homepage card updated to match.** Search results
  and link previews carried the satellite framing too, and the homepage still
  described maritime as "shipbuilding activity from satellite radar" — the two
  pages would otherwise have contradicted each other.

- The Copernicus attribution is kept but scoped to the in-development satellite
  work rather than implying live use.


## [Unreleased]

## [0.2.10] - 2026-08-01
### Fixed
- **`CLAUDE.md`:** documented `maritime.html`, which shipped in `0.2.0` but was never
  added to the Project Overview. Corrected the `manufacturing.html` description, which
  still described the superseded OEE-dashboard positioning. Vertical count corrected
  from three to four throughout.

### Added
- **`CLAUDE.md`:** notes on the per-page accent-color convention, the duplicated nav
  markup, `sitemap.xml`'s extensionless URLs, and the unversioned `pre-push` branch guard.

## [0.2.9] - 2026-08-01
### Added
- `CHANGELOG.md` and `CONTRIBUTING.md` establishing the Git Flow, semantic versioning,
  changelog, and documentation policy for this repository.

### Changed
- `CLAUDE.md` gains a Conventions section pointing at the contributing guide.

## [0.2.5] - [0.2.8] - 2026-07-27 to 2026-08-01
### Changed
- Routine `stats.json` live-number refreshes.

## [0.2.4] - 2026-07-27
### Changed
- `stats.json` refreshed from the 2026-07-27 run.

## [0.2.0] - 2026-06-11
### Added
- **`maritime.html`:** new maritime vertical page.

### Changed
- Platform reframe across the site.
- Manufacturing positioning repositioned around insights and cross-industry reach.

## [0.1.0] - 2026-06-11
### Added
- `VERSION` file, establishing semantic versioning and the Git Flow branch model for
  the site.

## [0.0.4] - 2026-04-15
### Changed
- **`opsentry.html`:** reframed around the three-layer defense pitch and added the
  sandbox section.

## [0.0.3] - 2026-04-11
### Fixed
- **`opsentry.html`:** corrected a stale "157 automated tests" claim in the Community
  tier; test counts now read 168 (101 functional + 67 adversarial) for OpSentry 1.8.0.

## [0.0.2] - 2026-04-09
### Changed
- Rebranded AgentGuard to **OpSentry** across the entire site.
- Rebranded Fraud Intelligence to Threat Intelligence on the homepage.

### Added
- **`opsentry.html`:** red team section, expanded feature list, and additional install
  methods.

## [0.0.1] - 2026-04-01
### Added
- Initial static site: homepage plus the Intelligence and Manufacturing vertical pages,
  `CNAME`, `robots.txt`, `sitemap.xml`, and the `demodashboard/` demo pages.

[Unreleased]: https://github.com/opsight-intelligence/opsight-website/compare/v0.2.10...HEAD
[0.2.10]: https://github.com/opsight-intelligence/opsight-website/compare/v0.2.9...v0.2.10
[0.2.9]: https://github.com/opsight-intelligence/opsight-website/compare/v0.2.8...v0.2.9
[0.2.4]: https://github.com/opsight-intelligence/opsight-website/compare/v0.2.0...v0.2.4
[0.2.0]: https://github.com/opsight-intelligence/opsight-website/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/opsight-intelligence/opsight-website/releases/tag/v0.1.0
