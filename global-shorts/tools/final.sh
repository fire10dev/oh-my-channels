#!/bin/zsh
cd "${0:A:h}/.."
until grep -q "FINISH END" build/finish.log 2>/dev/null; do sleep 30; done
sort -u build/rerender.txt | while read S L; do [ -n "$S" ] && python3 tools/make_loc.py $S $L --force > build/log-$S-$L-rr.txt 2>&1 && echo "RR $S $L"; done
python3 tools/recover_frames.py pt > /dev/null 2>&1 && python3 tools/regen_covers.py fr > /dev/null 2>&1 && echo "covers ok"
python3 tools/qa.py es pt fr > build/qa3.log 2>&1; tail -1 build/qa3.log; grep BAD build/qa3.log
python3 tools/package.py --hub
echo FINAL END
