#!/usr/bin/env bash
# Codex review of a long video's images/clips for historical + visual accuracy (read-only, web search on).
# Usage: tools/codex_image_review.sh <vid> <sheets-dir> <round> ["custom attachment order text" — for re-reviews of a subset]
#   sheets-dir: s00.jpg..sNN.jpg = 2x2 grids of img-01.. in order (TL, TR, BL, BR), last grids end with clip-1/2/3.jpg;
#   clip1.jpg..clip3.jpg = 4-frame strips of clip-N.mp4.
# Output: docs/reviews/<VID>-img-r<round>.md. Stdout: VERDICT + 🔴/🟠 lines.
set -euo pipefail
vid="${1:?vid}"; dir="${2:?sheets dir}"; round="${3:?round}"; order="${4:-}"
repo="$(cd "$(dirname "$0")/.." && pwd)"; VID=$(echo "$vid" | tr a-z A-Z)
out="$repo/docs/reviews/$VID-img-r$round.md"; log="${TMPDIR:-/tmp}/codex-img-$vid-r$round.log"
script=$(ls "$repo"/scripts/$VID-*.md | head -1)
imgs=(); for f in "$dir"/s*.jpg "$dir"/clip[0-9].jpg; do imgs+=(-i "$f"); done

read -r -d '' PROMPT <<EOF || true
You are an adversarial reviewer of AI-generated illustrations for a history YouTube video aimed at foreign viewers.
The topic is sensitive (Champa / Cham people / Vietnam). Read docs/FACT-CHECK.md §4 (image rules),
shorts/src/$vid.images.json (file, style, prompt for img-01..), shorts/public/$vid/PROMPTS.md (clip prompts) and the narration
table in ${script#$repo/} (the Shots column says which row each image illustrates). Do NOT edit any file.

Attached images, in order: ${order:-grids s00..s11, each 2x2 = four consecutive files (top-left, top-right, bottom-left, bottom-right):
s00 = img-01..04, s01 = img-05..08, ... s10 = img-41..44, s11 = img-45, clip-1.jpg, clip-2.jpg, clip-3.jpg (still start frames).
Then clip1.jpg, clip2.jpg, clip3.jpg = 4 frames each from the motion clips clip-1.mp4..clip-3.mp4.}

For EVERY file, check against history (use web search for reference images/descriptions when unsure):
1. Modern flags, national symbols, red flag with yellow star/square, readable text, logos, watermarks.
2. Wrong place: e.g. Ha Long Bay limestone karsts on the Cham coast (Cham lands = central/south-central coast: sandy beaches, low hills).
3. Wrong people/costume: Cham kings, priests, scribes drawn as Chinese/Vietnamese mandarins; Vietnamese conical hats on Cham people;
   modern Cham (Bani/Ahier/Muslim) dress wrong; Ming court wrong.
4. Wrong architecture/objects: Cham kalan towers vs Khmer/Thai/Burmese spires or Chinese pagodas; linga/yoni; Buddhist Đồng Dương style;
   ship types that never existed (dragon-prow fantasy junks with banners); weapons/armour of the wrong era.
5. Anything that takes sides or could offend (gore, humiliation, mocking, triumphal framing of 1471), or looks like a fake photo.
6. Does the image fit its narration row?

Output markdown only:
VERDICT: PASS | FAIL (FAIL if any 🔴)
## Issues
| Sev | File | Problem | Evidence / reference | Fix (keep / cut / regenerate with this exact prompt addition) |
Sev = 🔴 must not ship (wrong history, modern symbol, offensive) · 🟠 noticeably wrong, regenerate if possible · 🟡 minor.
List every file with 🔴 or 🟠. Then one line: "OK: img-.. , .." for files with no issue.
Be concise. No praise.
EOF

codex --search exec -s read-only --ephemeral -C "$repo" "${imgs[@]}" -o "$out" -- "$PROMPT" </dev/null >/dev/null 2>"$log" || true
echo "$out"; head -1 "$out" 2>/dev/null; grep -E '^\| *(🔴|🟠)' "$out" 2>/dev/null | cut -c1-200 || true
