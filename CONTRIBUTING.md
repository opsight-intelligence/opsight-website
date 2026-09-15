# Contributing

Astro site for OpSight Intelligence. GitHub Actions builds `main` and publishes the
result to GitHub Pages, so `main` is production; `dist/` is never committed.

## Branching model (Git Flow)

| Branch | Role |
|--------|------|
| `main` | Production — this is what GitHub Pages serves. Only ever updated by merging `release/*` or `hotfix/*`. |
| `develop` | Integration branch. Default target for PRs. |
| `feature/<name>` | Branched from `develop`, merged back into `develop`. |
| `bugfix/<name>` | Non-urgent fixes. Branched from `develop`. |
| `release/<version>` | Cut from `develop`, merged into `main` **and** back into `develop`. |
| `hotfix/<version>` | Cut from `main` for urgent production fixes, merged into `main` **and** `develop`. |

Never commit directly to `main` or `develop`. Because `main` is live, a broken merge is a
broken site — preview locally before opening the PR.

## Versioning

Semantic Versioning (`MAJOR.MINOR.PATCH`), tracked in the `VERSION` file at the repo root.

- **MAJOR** — site restructure, navigation or URL changes that break existing links
- **MINOR** — new pages, new sections, new vertical or language
- **PATCH** — copy edits, styling fixes, stat corrections, metadata

Every commit bumps `VERSION`. Releases that land on `main` are tagged `v<version>`.

## Required with every change

A change is not complete until all four land in the same commit:

1. **Content** — the change itself
2. **`VERSION`** — bumped per SemVer
3. **`CHANGELOG.md`** — entry under `## [Unreleased]`, in the appropriate
   `### Added` / `### Changed` / `### Removed` / `### Fixed` subsection
4. **Docs** — `CLAUDE.md` updated whenever a page is added or removed or the
   architecture changes; `sitemap.xml` updated for any new page

Routine `stats.json` refreshes still take a PATCH bump, but are grouped in the changelog
rather than listed one per refresh — otherwise the history is unreadable.

## Previewing locally

```bash
npm ci
npm run dev
```

Then open <http://localhost:4321>. `npm run build && npm run preview` serves exactly what
Pages will.

## Adding a page

1. Add `src/pages/<name>.astro` and `src/pages/ko/<name>.astro`, with the copy in
   `src/i18n/<name>.ts` (one object per locale) and the shared layout/components
2. Add both URLs to `public/sitemap.xml`
3. Add the nav entry in `src/layouts/Base.astro`
4. Describe it in the Project Overview section of `CLAUDE.md`
5. Bump `VERSION` (MINOR) and add the changelog entry

## Commit messages

Conventional Commits, with the resulting version in brackets:

```
type(scope): subject [vX.Y.Z]
```

`type` is one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`, `build`,
`ci`. Subject is imperative and under 72 characters. Use the body to explain why, not what.

Examples:

- `feat(site): add logistics vertical page [v0.3.0]`
- `fix(opsentry): correct test count in Community tier [v0.2.10]`

## Releasing

1. Cut `release/<version>` from `develop`
2. Roll `## [Unreleased]` into a `## [<version>] - <YYYY-MM-DD>` section
3. Open a PR into `main`, merge, then tag `v<version>` — the site goes live on merge
4. Merge `main` back into `develop`
5. Delete the release branch locally and on the remote, and close any PRs the release
   supersedes
