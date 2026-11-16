#!/bin/zsh
# EN debate -> VI debate -> copy finals to long/scripts/.  ./batch3/long_pipeline.sh L8
set -u; B=${0:A:h}; L=$1
[[ -f $B/longs/$L-en/task.md ]] || python3 -I $B/gen_tasks.py long-en $L
python3 -I $B/debate.py $B/longs/$L-en || exit 1
[[ -f $B/longs/$L-vi/task.md ]] || python3 -I $B/gen_tasks.py long-vi $L
python3 -I $B/debate.py $B/longs/$L-vi || exit 1
cp $B/longs/$L-en/final.json $B/../long/scripts/$L-en.json; cp $B/longs/$L-vi/final.json $B/../long/scripts/$L-vi.json
echo "$L scripts ok $(date +%H:%M)"
