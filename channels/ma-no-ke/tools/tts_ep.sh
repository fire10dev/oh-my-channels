#!/bin/zsh
# tts_ep.sh NN — TTS LONG + shorts của tập pNN (lines.json từ v3_lines.py), best-4 temp 0.5, câu < 0.72 đọc lại best-10 temp 0.4.
cd "${0:A:h}/.."; N=$(printf %02d $1); PY=../../shared/tts-vi/.venv/bin/python
for sub in long shorts; do
  F=p$N/$sub/lines.json; O=p$N/$sub/tts
  $PY tools/tts_lines.py $F $O --best 4 --temp 0.5 2>&1 | grep -E "XONG|ERR"
  python3 -c "
import json;s=json.load(open('$O/scores.json'));L={str(l['i']):l for l in json.load(open('$F'))}
json.dump([L[k] for k,v in s.items() if v<0.72 and k in L and len(L[k]['text'].split())>4],open('$O/../redo.json','w'),ensure_ascii=False)"
  $PY tools/tts_lines.py p$N/$sub/redo.json $O --best 10 --temp 0.4 --force 2>&1 | grep -E "XONG|ERR"
  python3 -c "
import json;s=json.load(open('$O/scores.json'));v=list(s.values());print('$sub',len(v),'câu, min',min(v),'·',sum(x<0.72 for x in v),'câu <0.72')"
done
