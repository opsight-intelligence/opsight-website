# opsight-website

The public marketing website for OpSight Intelligence: an Astro site built by
GitHub Actions and served from GitHub Pages. `CLAUDE.md` describes the pages
and architecture; `CONTRIBUTING.md` the branch, version and changelog rules.

## Develop and build

```sh
npm ci            # once; Node 22+
npm run dev       # http://localhost:4321, live reload
npm run build     # sitemap + build + check-dist (links, titles, canonicals)
npm run preview   # serve dist/ exactly as Pages will
```

Live numbers (`stats.json` and the `procurement-*.json` / `agent-demo.json`
files at the repo root) are rewritten nightly by other repos and fetched at
runtime, so they never need a build.

## Branch guard (pre-push hook)

This repo's `main`/`develop` are protected by a client-side `pre-push` hook (the org is on GitHub Free, which has no server-side branch protection on private repos). The hook lives in `.git/hooks/`, so it is **not** version-controlled — **re-run the installer in every fresh clone**, from your `opsight-company` checkout:

```sh
bash scripts/git-hooks/install-hooks.sh /path/to/this-repo
```

It only guards `opsight-intelligence` remotes. For an intentional release push, override with `OPSIGHT_ALLOW_PROTECTED_PUSH=1 git push ...`. All changes go through a `feature/`/`bugfix/` branch → PR into `develop`.
