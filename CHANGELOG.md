# Changelog

All notable changes to this site are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Routine `stats.json` refreshes take a PATCH version bump but are grouped rather than
listed individually.

## [0.20.2] - 2026-09-15

### Changed
- `FORMSPREE_ID` set: the contact form on every page now delivers to the
  operator's inbox via Formspree, with an inline "Sent" confirmation. A
  test submission was accepted (`ok: true`) before release.

## [0.20.1] - 2026-09-15

### Changed
- **Contact panel simplified** on the operator's review: one form in a card
  (email, one line, Send) and under it a single quiet line — "Or write to
  <address>", the address a link that also copies itself on click. The
  Copy-address button, the "open in your mail app" button and the
  fallback sentence are gone. Until `FORMSPREE_ID` is set, Send points at
  the address line instead of composing a mail nobody's browser opens.

## [0.20.0] - 2026-09-15

### Added
- **Formspree delivery for the contact panel.** With `FORMSPREE_ID` set in
  `src/config.ts` (a public form id, not a secret), the one-line form POSTs
  to Formspree in the background and shows "Sent" inline; a honeypot field
  and the page path travel with it. While the id is empty — as shipped —
  the form composes a mail via the visitor's mail app exactly as before,
  and the copy-address and open-in-mail-app options stay either way.
  Labels for sending / sent / failed in EN/KO/TR.

## [0.19.1] - 2026-09-15

### Fixed
- **The "request a sample" buttons did nothing on most desktops.** They were
  bare `mailto:` links, which are silent when the browser has no mail
  handler (anyone reading Gmail in a tab). Every contact section is now a
  `ContactPanel`: the address as a copyable chip with a Copy button, an
  "open in your mail app" link, and the one-line form that composes the
  mail — so a click always leads somewhere visible. No backend, nothing
  stored. Labels in EN/KO/TR (`common.ts`); the address switches to
  `contact@` in one place once the alias exists.

## [0.19.0] - 2026-09-15

### Added
- **Open Graph images, one per page** (`public/og/<page>.png`, 1200×630),
  rendered from an SVG card on the design tokens by `scripts/og.mjs`
  (`@resvg/resvg-js`, dev dependency; run it after changing a title). Every
  page's head now carries `og:image`, its size, `og:site_name` and a
  `summary_large_image` Twitter card, so links preview properly on
  LinkedIn, Slack and KakaoTalk.

### Changed
- **The six manufacturing demo dashboards are on the design tokens.** The
  generated pages keep their markup and Plotly figures; a shared
  `demodashboard/dashboard.css` maps their classes onto the tokens, the
  site nav sits on top with a link back to the manufacturing demos, every
  page opens with the Synthetic badge and sentence, tables scroll on
  phones, and a runtime relayout brings the Plotly figures onto the page's
  ink and surfaces in both themes (trace colours untouched). `noindex`.

## [0.18.0] - 2026-09-15

### Added
- **`/method` and `/about`** (EN/KO), completing the information
  architecture. Method: the five-stage lifecycle, the fields every
  intelligence object carries, the severity ladder that means the same on
  every line, the live/synthetic/pseudonymized rule, sources, and the limits
  we state. About: who, where, how we work, contact, and the honesty
  statement in full. Both in the nav on every page; the home page's second
  action now leads to `/method`.

## [0.17.0] - 2026-09-15

### Added
- **The first live charts**, on the procurement page: the clearing rate
  (낙찰률) by category as a p25–p75 range with the median marked, and the
  last 30 days of notices posted and awards opened as two small multiples.
  Drawn client-side from `procurement-figures.json` (maritime v0.50.0,
  shipped by fraud v1.6.0, refreshed nightly by pipelines v0.20.0), read
  from the repo's raw URL like the counts. Marks in the line accent, text in
  ink, native tooltips, a table view under each chart; empty until the
  first nightly writes the file, never invented. The Pages workflow ignores
  the new file so its nightly push costs no build.

## [0.16.0] - 2026-09-15

### Added
- **One illustration per line in the hero**, inline SVG on the design
  tokens, animated with SMIL and hidden under `prefers-reduced-motion`:
  fraud — channels resolving into clusters with shared wallets and accounts
  linking clusters that looked separate; procurement — one tender's bids
  plotted against the published estimate with the winner lit and the
  예비가격 band drawn; manufacturing — the same shift as a "99%" cycle-time
  row versus the downtime row that shows the stops. All shapes are invented
  and unlabelled: nothing on them is a statistic, a handle or a client.
  Home and OpSentry keep the lifecycle diagram.

## [0.15.0] - 2026-09-15

### Added
- **The visual layer, first pass.** A full-bleed navy hero band on every page
  with an animated lifecycle diagram (signals → observations → findings →
  assessments → intelligence; OpSentry shows tool call → detect → prevent →
  sandbox → execute), lit in the page's line accent, SMIL-animated with no
  script and hidden under `prefers-reduced-motion`. One tinted full-bleed
  section per page for rhythm, card and tile hover lift, and stat tiles
  that count up when their live value lands. `HeroBand.astro` and
  `Lifecycle.astro` are the new components; the design layer is at v0.15.0.

## [0.14.0] - 2026-09-15

### Added
- **The OpSentry page, migrated to Astro at `/opsentry`** (English only; a
  Korean mirror is a follow-up). A faithful port of the dense original onto
  the layout: every section kept, the two tiles that had no value now show
  3 / 8 / 203 / 3, the install commands in a table, plan cards with real
  destinations.

### Changed
- The anonymous testimonial ("Solution Engineering Lead, Korean
  manufacturing intelligence startup") is replaced by the plain fact it
  described: used internally at Opsight, deployed ahead of an ISO 27001
  renewal, the incident log and guardrail config answered the auditor.
  Plan prices unchanged. `public/opsentry.html` deleted — every product page
  is now on Astro; only the two redirect stubs and `demodashboard/` remain
  as static files.

## [0.13.0] - 2026-09-15

### Added
- **The manufacturing page, migrated to Astro at `/manufacturing`** with
  `/ko/manufacturing`. The six "insights, not dashboards" blocks, the
  industries, the three worked insights and the honesty statement carried
  over word for word; the worked insights and the six demo dashboards carry
  the Synthetic badge; severity and confidence rendered with the design
  system's badges.

### Removed
- The unsourced "$2 billion was spent on enterprise AI for manufacturing"
  hero line; the ISO/IATF paragraph cut to one sentence with a link to
  OpSentry. `public/manufacturing.html` deleted.

## [0.12.0] - 2026-09-15

### Added
- **The procurement page, migrated to Astro at `/procurement`** with
  `/ko/procurement`. Hero, "The problem", the six Live blocks and the
  coverage blocks carried over; three live dated tiles from
  `procurement-stats.json` (which today reads 82,729 notices against the
  39,679 the old page had pinned in its HTML).

### Removed
- From the procurement page: the maritime "in development" section (SAR,
  AIS, DART) and the vessel/Copernicus disclaimer — the shipbuilding thesis
  is recorded as unsellable and did not belong on the procurement product
  page; "license-clean, sellable footprint" (internal language while the
  licence question is open).

### Changed
- The procurement call to action is the **aggregate sample** (category /
  agency / size band), not "tell us your 사업자등록번호" — a named-firm record
  is the open naming question. `public/procurement.html` deleted (the
  `maritime.html` stub still redirects to `/procurement`).

## [0.11.0] - 2026-09-15

### Added
- **The fraud page, migrated to Astro at `/fraud`** with `/ko/fraud` and
  `/tr/fraud` (Turkish kept: the line's buyers include Turkish firms). Per the
  copy inventory: the nine capability blocks folded into four (collect /
  connect / warn / deliver), implementation names out of the customer copy,
  Turkey described as monitored rather than as a product, five live dated
  tiles from `stats.json`, no pricing (on request), no client reference, the
  "your current vendor" line kept, one action (sample report).
- `src/i18n/common.ts` (nav, footer, live labels per locale) and a
  page-agnostic `Base.astro` with hreflang for every locale a page has;
  `LiveStats.astro` as the one runtime stats fetch.

### Changed
- `public/intelligence.html` is now a redirect stub to `/fraud`
  (canonical + meta refresh + `noindex, follow`), kept for links already
  shared. Sitemap lists `/fraud`, `/ko/fraud`, `/tr/fraud`.

## [0.10.0] - 2026-09-15

### Added
- **The site moves to Astro, one page at a time, starting with the home page**
  (`src/pages/index.astro`, `src/pages/ko/index.astro`) — the first page
  built on the design layer, bilingual by construction (English at `/`,
  Korean at `/ko/`, `hreflang` pairs, a language switch in the nav), with
  every figure read live and dated (entities and clusters from `stats.json`,
  notices and awards from `procurement-stats.json`), one action (request a
  sample — a mailto with no backend), and the site-wide honesty statement.
  Korean copy needs a native read before the professional launch.
- **GitHub Actions build for Pages** (`.github/workflows/pages.yml`): builds
  `dist/` on source pushes to `main` and deploys it. The nightly stats push
  is excluded by path, so it costs no Actions minutes.

### Changed
- Every not-yet-migrated page (`intelligence`, `procurement`, `manufacturing`,
  `opsentry`, the `maritime` redirect, `demodashboard/`, `design/`, `CNAME`,
  `favicon.svg`, `robots.txt`, `sitemap.xml`) now lives under `public/` and
  is served verbatim, unchanged. The old home page is kept as
  `public/index-legacy.html` until the new one has been read in both
  languages.
- `intelligence.html` and `procurement.html` fetch their live figures from
  the repo's raw URL instead of the site root, so the numbers keep moving
  every night without a site build.
- `sitemap.xml` lists `/ko/`.
- `CLAUDE.md` and `CONTRIBUTING.md` describe the Astro layout, the
  page-by-page migration rule, the raw-URL stats path and the new commands.

## [0.9.1] - 2026-09-15

### Removed
- **The fraud page's pricing section** (Early Warning "from ₩1,000,000",
  wallet feed "from ₩2,000,000"). Operator decision 2026-09-15: no priced
  tiers in public until a price has been tested on a real buyer; pricing is
  quoted on request. The CSS block went with it.
- **"Trusted by a Korean government security agency"** on the fraud page,
  replaced (EN/KR/TR) with a statement about the numbers themselves:
  collected every night, every figure from the live store, dated. A client
  reference stays out of public copy unless the client has agreed to it.

### Added
- The fraud page's "By The Numbers" block now shows the date `stats.json`
  was written (`last written 2026-09-15`), read from the file's `updated`
  field — the first page-level application of the "every number is live or
  labelled" rule.

## [0.9.0] - 2026-09-15

### Added
- **The design system** (`design/tokens.css`, `design/components.css`) and its
  reference page at `/design/`. One shared layer for the site, the hackathon
  copilot, the fraud console, the alert mail and the finding PDF: the navy
  anchor, one accent per intelligence line (fraud / procurement /
  manufacturing — validated as a set for colour-vision separation in both
  themes; OpSentry keeps the brand navy), reserved severity and live/synthetic
  status colours, a dark theme defined from the start, tabular figures
  everywhere, and a deliberately short component list. The page renders every
  token and component in both themes with a toggle, and reads its swatches
  from the live computed tokens so it cannot drift. Unlisted (`noindex`, not
  in the nav or sitemap): it is a reference, not a product page. Phase 1 of
  `opsight-company/strategy/product/website-and-app-ux.md`; no existing page
  changes yet.

### Changed
- Routine `stats.json` refreshes v0.8.1–v0.8.77 (2026-08-10 → 2026-09-15),
  grouped here per the changelog convention.

## [0.8.0] - 2026-08-10

### Added

- **The curated wallet feed is priced: from ₩2,000,000 per month, per market.**
  Sold as a subscription rather than a snapshot, which is the deliberate choice
  here. `SELLABILITY_MAP.md` is explicit that the address count cannot carry a
  volume price and that the feed must never be sold as "thousands of wallets";
  a monthly subscription prices the *maintenance* — nightly collection,
  cross-market corroboration, curation — instead of the row count, and turns
  the one exchange-ready asset into recurring revenue against a company that
  currently has none.

  **No address counts appear on the page**, deliberately. Any published count
  invites a buyer to divide the fee by it, which is precisely the volume framing
  the map warns against; and a count is a snapshot of a list that changes
  nightly, so it would be stale the day after it shipped. The copy carries the
  claim that matters instead — every address is one we would defend
  individually.

  The two cards now sit in a 2-up grid that collapses to one column under 700px.

### Changed

- The note under the pricing cards no longer lists the wallet feed as "scoped
  per buyer" — it has a number now.

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
