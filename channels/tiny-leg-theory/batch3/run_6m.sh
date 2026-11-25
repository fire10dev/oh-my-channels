#!/bin/zsh
# 6-month plan (user 2026-11-21: 2 longs + 14 related Shorts a week), one long at a time, cuốn chiếu:
# per long L8..L59: EN+VI script -> render both -> 7 Shorts from its chapters (debate -> render -> loudnorm) -> YT Hub.
# Resumable; stops at the first debate failure (quota). Log: batch3/6m.log    ./batch3/run_6m.sh [from L]
set -u; B=${0:A:h}; AB=${B:h}; export YTHUB_ACTOR=agent:tlt-6m
render_long() {
  local todo=() m
  for id in "$@"; do m=($AB/long/final/$id*.mp4(N)); (( $#m )) || todo+=$id; done
  (( ${#todo} )) || return 0
  $AB/long/render_long.sh $todo; $AB/tts-vi/.venv/bin/python -I $AB/long/package_long.py
}
{
  from=${1:-L8}; on=0
  for L in $(python3 -c "import json;print(' '.join(x['id'] for x in json.load(open('$B/topics-longs/final.json'))))"); do
    [[ $L == $from ]] && on=1; (( on )) || continue
    [[ -f $AB/long/scripts/$L-en.json && -f $AB/long/scripts/$L-vi.json ]] || $B/long_pipeline.sh $L || { echo "STOP at $L long $(date '+%F %H:%M')"; exit 1; }
    render_long $L-en $L-vi
    n=${L#L}; a=$((231 + 7 * (n - 8))); D=$B/shorts/s$a-s$((a + 6))
    [[ -f $D/task.md ]] || python3 -I $B/gen_tasks.py shorts-long $L
    python3 -I $B/debate.py $D || { echo "STOP at $L shorts $(date '+%F %H:%M')"; exit 1; }
    python3 -I $B/merge_shorts.py
    ids=(); for i in {$a..$((a + 6))}; do ids+=(s$i s${i}vi); done
    todo=(); for i in $ids; do m=($AB/shorts/out/$i-*.mp4(N)); (( $#m )) || todo+=$i; done
    (( ${#todo} )) && $AB/shorts/render.sh $todo
    python3 -I $AB/shorts/finalize_batch3.py $ids
    python3 -I $B/register_hub.py
    for i in {$a..$((a + 6))}; do
      ythub fact s$i long $L-en --channel "Tiny Leg Theory" >/dev/null 2>&1
      ythub fact s${i}vi long $L-vi --channel "Lý Thuyết Chân Que" >/dev/null 2>&1
    done
    python3 -I $B/plan_6m.py | tail -1
    echo "$L done (long + 7 Shorts s$a-s$((a + 6))) $(date '+%F %H:%M')"
  done
  echo "run_6m finished $(date '+%F %H:%M')"
} >> $B/6m.log 2>&1
