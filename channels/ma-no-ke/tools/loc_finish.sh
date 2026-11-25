#!/bin/zsh
# loc_finish.sh LANG — sau loc_render.sh: (1) video nào đỉnh > -1 dBFS thì nén lại tiếng (loudnorm TP=-3 + limiter);
#   (2) ghép 4 LONG thành video tổng hợp out/<lang>/<LANG>-COMP-01.mp4 (≥ 8 phút → được chèn quảng cáo giữa video).
set -e; LG=$1; U=${LG:u}; cd "${0:A:h}/../video/out/$LG"
pk(){ ffmpeg -i $1 -af ebur128=peak=true -f null - 2>&1 | grep -E '^\s+Peak:' | tail -1 | awk '{print $2}' }
for f in $U-P0*.mp4; do
  p=$(pk $f); if (( p > -1.0 )); then
    ffmpeg -v error -y -i $f -c:v copy -af "loudnorm=I=-14:TP=-3:LRA=11,alimiter=limit=0.79:level=false,aresample=48000" -c:a aac -b:a 256k fix.$f && mv fix.$f $f
    echo "fix $f $p → $(pk $f)"; fi
done
: > comp.txt; for e in P01 P02 P03 P04; do echo "file '$U-$e-LONG.mp4'" >> comp.txt; done
ffmpeg -v error -y -f concat -safe 0 -i comp.txt -c copy -movflags +faststart $U-COMP-01.mp4 && rm comp.txt
echo "COMP $(ffprobe -v error -show_entries format=duration -of csv=p=0 $U-COMP-01.mp4)s"
