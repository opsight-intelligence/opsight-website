#!/usr/bin/env bash
# Renders every still in manifest.json with zimage-gen (mlx-toolkit) into an output folder, skipping finished ones; blueprint entries use the blueprint style.
# Usage: visuals/render.sh [output-dir]; the default is ~/mlx-output/opsight-visuals.
# Needs the M1 Max setup: zimage-gen on PATH and the saved z-image-turbo-q8 weights.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="${1:-$HOME/mlx-output/opsight-visuals}"
mkdir -p "$OUT"
python3 - "$HERE/manifest.json" <<'PY' | while IFS=$'\t' read -r name seed width height prompt; do
import json, sys
m = json.load(open(sys.argv[1]))
for s in m["stills"]:
    if s.get("kind") == "blueprint":
        prompt = f"Technical blueprint drawing of {s['subject']}, {m['blueprint_style']}"
    else:
        prompt = f"Cinematic wide photograph of {s['subject']}, {m['style']}"
    print("\t".join([s["name"], str(s["seed"]), str(m["width"]), str(m["height"]), prompt]))
PY
  target="$OUT/$name.png"
  if [[ -f "$target" ]]; then echo "skip $name"; continue; fi
  echo "render $name (seed $seed)"
  zimage-gen "$prompt" --width "$width" --height "$height" --seed "$seed" -o "$target" < /dev/null 2>&1 | grep -E "seed|peak" || true
done
