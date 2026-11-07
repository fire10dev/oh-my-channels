#!/usr/bin/env bash
# Royalty-free ambient bed (synthesized, no license needed) -> shorts/public/bgm/ambient.mp3 (git-ignored, regenerate)
set -euo pipefail
out="$(cd "$(dirname "$0")/.." && pwd)/shorts/public/bgm/ambient.mp3"; mkdir -p "$(dirname "$out")"
ffmpeg -y -loglevel error \
  -f lavfi -i "anoisesrc=color=brown:amplitude=0.25:duration=180" \
  -f lavfi -i "sine=frequency=98:duration=180" -f lavfi -i "sine=frequency=147:duration=180" -f lavfi -i "sine=frequency=196:duration=180" \
  -filter_complex "[0]lowpass=f=400,volume=0.6[n];[1]volume=0.35,tremolo=f=0.13:d=0.6[a];[2]volume=0.22,tremolo=f=0.17:d=0.7[b];[3]volume=0.12,tremolo=f=0.1:d=0.8[c];[n][a][b][c]amix=inputs=4:normalize=0,afade=t=in:d=3,afade=t=out:st=175:d=5,loudnorm=I=-20[o]" \
  -map "[o]" -ac 2 -b:a 128k "$out"
echo "$out"
