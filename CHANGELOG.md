# Changelog

All notable changes to this site are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Routine `stats.json` refreshes take a PATCH version bump but are grouped rather than
listed individually.

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
