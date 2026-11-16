#!/bin/zsh
# Batch 3 end to end, resumable (every debate step is a file; finished renders are skipped). Re-run after any stop.
# ./batch3/run_all.sh   logs: batch3/chain-shorts.log, batch3/chain-longs.log
set -u; B=${0:A:h}; AB=${B:h}
{ # chain A: short topics debate -> 10 script debates -> merge -> render -> loudnorm + CSV
  python3 -I $B/debate.py $B/topics-shorts || exit 1
  [[ -d $B/shorts ]] || python3 -I $B/gen_tasks.py shorts
  ls -d $B/shorts/s* | xargs -P 4 -I{} python3 -I $B/debate.py {}
  if (( $(ls $B/shorts/*/final.json | wc -l) == 10 )); then
    [[ -f $B/short-ids.txt ]] || python3 -I $B/merge_shorts.py
    todo=($(for i in $(cat $B/short-ids.txt); do ls $AB/shorts/out/$i-*.mp4 >/dev/null 2>&1 || echo $i; done))
    (( ${#todo} )) && $AB/shorts/render.sh $todo
    python3 -I $AB/shorts/finalize_batch3.py
  else echo "short debates incomplete"; fi
  echo "chain A finished $(date '+%F %H:%M')"
} > $B/chain-shorts.log 2>&1 &
{ # chain B: 50 longs, EN debate -> VI debate -> render -> thumbnails + CSV
  python3 -c "import json;print('\n'.join(x['id'] for x in json.load(open('$B/topics-longs/final.json'))))" | xargs -P 3 -I{} $B/long_pipeline.sh {}
  ids=($(cd $AB/long/scripts && ls L*-en.json L*-vi.json | grep -vE '^L[1-7]-' | sed 's/.json//' | sort -V))
  todo=($(for i in $ids; do ls $AB/long/final/$i*.mp4 >/dev/null 2>&1 || echo $i; done))
  (( ${#todo} )) && $AB/long/render_long.sh $todo
  $AB/tts-vi/.venv/bin/python -I $AB/long/package_long.py
  echo "chain B finished $(date '+%F %H:%M')"
} > $B/chain-longs.log 2>&1 &
wait; echo "batch3 run_all finished $(date '+%F %H:%M')"
