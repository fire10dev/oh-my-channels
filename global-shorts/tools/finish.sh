#!/bin/zsh
# After the batch: re-render the 2 shorts made before label shrinking, QA, redo failures once, re-QA, package + YT Hub.
cd "${0:A:h}/.."
while pgrep -f "tools/batch.sh" > /dev/null; do sleep 20; done
for s in sx-ix003-cabin sx-ix003-noday; do python3 tools/make_loc.py $s es --force > build/log-$s-es-force.txt 2>&1; done
python3 tools/qa.py es pt fr > build/qa1.log 2>&1
grep "^BAD" build/qa1.log | awk '{print $2}' | while read v; do
  L=${v##*-}; S=${v%-*}
  rm -f oll/$L/data/$v.json oll/$L/data/$v.timeline.json oll/$L/meta/$v.json out/$L/$v.mp4 out/$L/$v-cover.jpg
  python3 tools/make_loc.py $S $L > build/log-$v-redo.txt 2>&1 && echo "REDO $v" || echo "REDO-FAIL $v"
done
python3 tools/qa.py es pt fr > build/qa2.log 2>&1; tail -1 build/qa2.log
python3 tools/package.py --hub
echo FINISH END
