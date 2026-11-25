#!/bin/zsh
# render_p04_shorts.sh SH1 [SH2 …] — render Remotion + loudnorm, từng short xong mới sang short sau.
# loudnorm TP=-2 + AAC 256k: TP=-1.5/192k bị lọt đỉnh > 0 dBFS (xem note MEGABRAIN §14).
set -e
cd "$(dirname $0)/../video"
typeset -A SLUG=(SH1 ho-so-ma-giau SH2 song-sot-khi-bi-ma-giau SH3 bi-quyet-con-ngoan SH4 mam-dong-phong-thuy SH5 ong-bo-tat-cam SH6 bon-nguoi-ba-tieng-nhai SH7 hai-gio-sang-tang-27)
for s in "$@"; do
  npx remotion render src/index.tsx P04-$s out/p04-$s-raw.mp4 --log=error
  # loudnorm 2 lượt: 1 lượt ra −16 LUFS vì short có nhiều đoạn tắt nhạc
  M=$(ffmpeg -i out/p04-$s-raw.mp4 -af loudnorm=I=-14:TP=-2:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
  jv() { print -r -- "$M" | sed -n "s/.*\"$1\" : \"\(.*\)\".*/\1/p" }
  LN="loudnorm=I=-14:TP=-2:LRA=11:measured_I=$(jv input_i):measured_TP=$(jv input_tp):measured_LRA=$(jv input_lra):measured_thresh=$(jv input_thresh):offset=$(jv target_offset):linear=true"
  ffmpeg -v error -y -i out/p04-$s-raw.mp4 -c:v copy -af "$LN,aresample=48000" -c:a aac -b:a 256k out/P04-$s-${SLUG[$s]}.mp4
  rm -f out/p04-$s-raw.mp4
  echo "XONG $s $(ffprobe -v error -show_entries format=duration -of csv=p=0 out/P04-$s-${SLUG[$s]}.mp4)s $(ffmpeg -i out/P04-$s-${SLUG[$s]}.mp4 -af ebur128=peak=true -f null - 2>&1 | rg '^\s+(I|Peak):' | tr -s ' ' | tr '\n' ' ')"
done
