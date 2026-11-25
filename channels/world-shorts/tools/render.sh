#!/bin/zsh
# Render one short: remotion -> loudnorm -14 LUFS -> cover still -> out/<lang>/<id>.mp4. Usage: tools/render.sh <id> [cover_frame]
set -e
cd "${0:A:h}/.."
id=$1; lang=$(python3 -c "import json;print(json.load(open('scripts/$id.json')).get('lang','en'))")
out=out/$lang; mkdir -p $out; log=${TMPDIR:-/tmp}/ws-render-$id.log
(cd engine && npx remotion render src/index.ts $id ../$out/$id-raw.mp4 --log=error --concurrency=4) > $log 2>&1
ffmpeg -y -loglevel error -i $out/$id-raw.mp4 -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:v copy -c:a aac -b:a 192k $out/$id.mp4 && rm $out/$id-raw.mp4
cf=${2:-$(python3 -c "import json;print(json.load(open('scripts/$id.json')).get('cover_frame',20))")}
(cd engine && npx remotion still src/index.ts $id ../$out/$id-cover.png --frame=$cf --log=error) >> $log 2>&1
sips -s format jpeg -s formatOptions 88 $out/$id-cover.png --out $out/$id-cover.jpg >/dev/null && rm $out/$id-cover.png
d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 $out/$id.mp4)
printf '%s: %.1fs -> %s\n' $id $d $out/$id.mp4
