#!/bin/zsh
# stillloop_1h.sh <id> <out_prefix>
# Renders one song pass of composition Still-<id> (image + ambient effects + Flow-style waves + music),
# then repeats it to 1 hour with ffmpeg (video stream copy, 5 s audio fade-out) and writes a 1280x720 thumbnail frame.
set -euo pipefail
cd "${0:A:h}"
ID="$1"; OUT="$2"
W=$(mktemp -d)
npx remotion render src/index.ts "Still-$ID" "$W/round.mp4" --codec=h264 --crf=18 --log=error --timeout=120000
RD=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$W/round.mp4")
ffmpeg -v error -y -stream_loop -1 -i "$W/round.mp4" -t 3600 -map 0:v -map 0:a -c:v copy \
  -af "afade=t=out:st=3595:d=5" -c:a aac -b:a 192k -movflags +faststart "$OUT 1 Hour.mp4"
ffmpeg -v error -y -ss 5 -i "$W/round.mp4" -frames:v 1 -update 1 -q:v 2 -vf scale=1280:720:flags=lanczos "$OUT thumbnail.jpg"
VD=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT 1 Hour.mp4")
ERR=$(ffmpeg -v error -i "$OUT 1 Hour.mp4" -f null - 2>&1 | head -3)
echo "$(basename "$OUT") | round ${RD}s | 1h dur ${VD}s | $(du -h "$OUT 1 Hour.mp4" | cut -f1) | decode errors: ${ERR:-none}"
rm -rf "$W"
