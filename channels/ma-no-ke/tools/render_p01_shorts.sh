#!/bin/zsh
# render_p01_shorts.sh SH1 [SH2 …] — render Remotion + loudnorm -14 LUFS, từng short xong mới sang short sau.
set -e
cd "$(dirname $0)/../video"
typeset -A SLUG=(SH1 bua-com-voi-me-gia SH2 luat-duy-nhat SH3 2-gio-07-phut SH4 bon-giay-co-trong SH5 dap-chan SH7 hop-dong-50)
for s in "$@"; do
  npx remotion render src/index.tsx P01-$s out/p01-$s-raw.mp4 --log=error
  ffmpeg -v error -y -i out/p01-$s-raw.mp4 -c:v copy -af loudnorm=I=-14:TP=-1.5:LRA=11 -ar 48000 -c:a aac -b:a 192k out/P01-$s-${SLUG[$s]}.mp4
  rm -f out/p01-$s-raw.mp4
  echo "XONG $s $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/P01-$s-${SLUG[$s]}.mp4)s"
done
