#!/bin/zsh
# render_mixes.sh <G...> — build mix audio, render thumbnail + one round per group, loop round to 1 hour.
# Same steps as the mix part of render_all.sh, with a longer OffthreadVideo timeout (sleep during render = timeout).
set -euo pipefail
cd "${0:A:h}"
mkdir -p out/mix
for g in "$@"; do
  [[ -f public/mix/$g.wav ]] || ./build_mix_audio.sh $g
  npx remotion still src/index.ts MixThumb-$g out/mix/$g-thumbnail.jpg --image-format=jpeg --log=error
  [[ -f out/mix/${g}_round.mp4 ]] || npx remotion render src/index.ts Mix-$g out/mix/${g}_round.mp4 \
    --crf=20 --audio-bitrate=192k --concurrency=8 --timeout=120000 --log=error
  ffmpeg -v error -y -stream_loop -1 -i out/mix/${g}_round.mp4 -t 3600 -map 0:v -map 0:a -c:v copy \
    -af "afade=t=out:st=3595:d=5" -c:a aac -b:a 192k -movflags +faststart "out/mix/$g 1 Hour Mix.mp4"
  echo "mix $g round $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/mix/${g}_round.mp4)s | 1h $(du -h "out/mix/$g 1 Hour Mix.mp4" | cut -f1) | decode errors: $(ffmpeg -v error -i "out/mix/$g 1 Hour Mix.mp4" -f null - 2>&1 | head -2)"
done
