# opsight-website

The public marketing website for OpSight Intelligence.

## Branch guard (pre-push hook)

This repo's `main`/`develop` are protected by a client-side `pre-push` hook (the org is on GitHub Free, which has no server-side branch protection on private repos). The hook lives in `.git/hooks/`, so it is **not** version-controlled — **re-run the installer in every fresh clone**, from your `opsight-company` checkout:

```sh
bash scripts/git-hooks/install-hooks.sh /path/to/this-repo
```

It only guards `opsight-intelligence` remotes. For an intentional release push, override with `OPSIGHT_ALLOW_PROTECTED_PUSH=1 git push ...`. All changes go through a `feature/`/`bugfix/` branch → PR into `develop`.
