#!/bin/zsh
# render_p02_shorts.sh SH1 [SH2 …] — render Remotion + loudnorm, từng short xong mới sang short sau.
# loudnorm TP=-2 + AAC 256k: TP=-1.5/192k bị lọt đỉnh > 0 dBFS (xem note MEGABRAIN §14).
set -e
cd "$(dirname $0)/../video"
typeset -A SLUG=(SH1 cham-vao-khong-cham-ra SH2 nhu-nguoi-nha SH3 gio-trung SH4 giay-ghi-the-nao SH5 co-mat-0300 SH6 khan-tang-giam-doc SH7 tru-chuyen-can)
for s in "$@"; do
  npx remotion render src/index.tsx P02-$s out/p02-$s-raw.mp4 --log=error
  ffmpeg -v error -y -i out/p02-$s-raw.mp4 -c:v copy -af "loudnorm=I=-14:TP=-2:LRA=11,aresample=48000" -c:a aac -b:a 256k out/P02-$s-${SLUG[$s]}.mp4
  rm -f out/p02-$s-raw.mp4
  echo "XONG $s $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/P02-$s-${SLUG[$s]}.mp4)s $(ffmpeg -i out/P02-$s-${SLUG[$s]}.mp4 -af ebur128=peak=true -f null - 2>&1 | rg '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
