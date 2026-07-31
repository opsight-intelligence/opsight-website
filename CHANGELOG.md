# Changelog

All notable changes to this site are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Routine `stats.json` refreshes take a PATCH version bump but are grouped rather than
listed individually.

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
