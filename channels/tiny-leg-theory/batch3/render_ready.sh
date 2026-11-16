#!/bin/zsh
# Rolling render (user 2026-11-16: "xong kịch bản cái nào làm cuốn chiếu cái đó"): every 2 min render whatever script is
# finished and not yet in final/, so a quota stop never leaves zero videos. Runs until run_all.sh stops, then one last pass.
set -u; B=${0:A:h}; AB=${B:h}
pass() {
  # longs: copy each finished debate (EN or VI on its own) to long/scripts, render it, refresh thumbnails + CSV
  local todo=()
  for f in $B/longs/*/final.json; do
    id=${f:h:t}; [[ -f $AB/long/scripts/$id.json ]] || cp $f $AB/long/scripts/$id.json
    ls $AB/long/final/$id*.mp4 >/dev/null 2>&1 || todo+=$id
  done
  if (( ${#todo} )); then $AB/long/render_long.sh $todo; $AB/tts-vi/.venv/bin/python -I $AB/long/package_long.py; fi
  # shorts: merge finished chunks into shorts.json, render new ids, loudnorm + CSV
  ls $B/shorts/*/final.json >/dev/null 2>&1 || return 0
  python3 -I $B/merge_shorts.py
  todo=($(python3 -c "import json;print(' '.join(s['id'] for s in json.load(open('$AB/shorts/shorts.json'))['shorts'] if int(s['id'][1:].rstrip('vi'))>=131))"))
  todo=($(for i in $todo; do ls $AB/shorts/out/$i-*.mp4 >/dev/null 2>&1 || echo $i; done))
  if (( ${#todo} )); then $AB/shorts/render.sh $todo; python3 -I $AB/shorts/finalize_batch3.py; fi
}
while pgrep -f batch3/run_all.sh >/dev/null; do pass; sleep 120; done
pass; echo "render_ready finished $(date '+%F %H:%M')"
