#!/bin/zsh
# Render 15 Shorts (<10 MB each), 3 mix rounds + thumbnails, then loop each round to a 1-hour video.
set -euo pipefail
cd "${0:A:h}"
mkdir -p out/shorts out/mix
for id in A1 A2 A3 A4 A5 B1 B2 B3 B4 B5 C1 C2 C3 C4 C5; do
  [[ -f out/shorts/$id.mp4 ]] || npx remotion render src/index.ts Short-$id out/shorts/$id.mp4 \
    --video-bitrate=3M --audio-bitrate=160k --concurrency=8 --log=error
  echo "short $id $(du -h out/shorts/$id.mp4 | cut -f1)"
done
for g in B A C; do
  npx remotion still src/index.ts MixThumb-$g out/mix/$g-thumbnail.jpg --image-format=jpeg --log=error
  [[ -f out/mix/${g}_round.mp4 ]] || npx remotion render src/index.ts Mix-$g out/mix/${g}_round.mp4 \
    --crf=20 --audio-bitrate=192k --concurrency=8 --log=error
  ffmpeg -v error -y -stream_loop -1 -i out/mix/${g}_round.mp4 -t 3600 -map 0:v -map 0:a -c:v copy \
    -af "afade=t=out:st=3595:d=5" -c:a aac -b:a 192k -movflags +faststart "out/mix/$g 1 Hour Mix.mp4"
  echo "mix $g round $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/mix/${g}_round.mp4)s | 1h $(du -h "out/mix/$g 1 Hour Mix.mp4" | cut -f1) | decode errors: $(ffmpeg -v error -i "out/mix/$g 1 Hour Mix.mp4" -f null - 2>&1 | head -2)"
done
