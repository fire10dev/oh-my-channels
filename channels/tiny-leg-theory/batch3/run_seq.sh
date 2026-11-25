#!/bin/zsh
# Batch 3 longs, one at a time (user 2026-11-19: "làm tuần tự", cuốn chiếu): render every finished script first, then per long
# EN debate -> VI debate -> render both -> next. Resumable; stops at the first debate failure (quota). Log: batch3/seq.log
# ./batch3/run_seq.sh
set -u; B=${0:A:h}; AB=${B:h}
render() {
  local todo=()
  local m
  for id in "$@"; do m=($AB/long/final/$id*.mp4(N)); (( $#m )) || todo+=$id; done
  (( ${#todo} )) || return 0
  $AB/long/render_long.sh $todo; $AB/tts-vi/.venv/bin/python -I $AB/long/package_long.py
}
{
  for f in $B/longs/*/final.json; do id=${f:h:t}; [[ -f $AB/long/scripts/$id.json ]] || cp $f $AB/long/scripts/$id.json; done
  render $(cd $AB/long/scripts && ls L*-en.json L*-vi.json | grep -v draft | sed 's/.json//' | sort -V)
  for L in $(python3 -c "import json;print(' '.join(x['id'] for x in json.load(open('$B/topics-longs/final.json'))))"); do
    [[ -f $AB/long/scripts/$L-en.json && -f $AB/long/scripts/$L-vi.json ]] || $B/long_pipeline.sh $L || { echo "STOP at $L $(date '+%F %H:%M')"; exit 1; }
    render $L-en $L-vi
  done
  echo "run_seq finished $(date '+%F %H:%M')"
} >> $B/seq.log 2>&1
