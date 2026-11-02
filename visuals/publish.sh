#!/usr/bin/env bash
# Converts the rendered PNG stills into the WebP files the site serves, under public/visuals/.
# Usage: visuals/publish.sh [render-dir]; the default matches render.sh, ~/mlx-output/opsight-visuals.
# Needs cwebp; quality 78 keeps each 1536x864 dark still to roughly 40-110 KB.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${1:-$HOME/mlx-output/opsight-visuals}"
DEST="$HERE/../public/visuals"
QUALITY=78
mkdir -p "$DEST"
names=$(python3 -c 'import json,sys; print("\n".join(s["name"] for s in json.load(open(sys.argv[1]))["stills"]))' "$HERE/manifest.json")
for name in $names; do
  if [[ ! -f "$SRC/$name.png" ]]; then echo "missing $name"; exit 1; fi
  cwebp -quiet -q "$QUALITY" "$SRC/$name.png" -o "$DEST/$name.webp"
  echo "$name.webp $(( $(stat -f%z "$DEST/$name.webp") / 1024 )) KB"
done
