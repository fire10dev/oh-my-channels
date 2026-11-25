#!/bin/zsh
# loc_translate.sh EP LANG — Codex chuyển thể mọi chuỗi của tập EP (p01…) theo loc/GUIDE-<LANG>.md → loc/<LANG>/<EP>.json
set -u
EP=$1; LG=$2; cd ${0:A:h}/..; mkdir -p loc/$LG
KEYS=$(python3 -c "import json;S=json.load(open('loc/strings.json'));print(json.dumps({k:v['kind']+(':'+v['who'] if 'who' in v else '') for k,v in S.items() if v['ep']=='$EP'},ensure_ascii=False,indent=0))")
EXTRA=""; [[ -f loc/$LG/en-ref-$EP.json ]] && EXTRA="
===== APPROVED ENGLISH VERSION (translate from this, keep its jokes and length; keys stay Vietnamese) =====
$(cat loc/$LG/en-ref-$EP.json)"
P="$(cat loc/GUIDE-$LG.md)

===== EPISODE SCRIPT IN ORDER (speaker codes, timestamps in seconds, POP = on-screen text, (đã có) = already translated elsewhere) =====
$(cat loc/context-$EP.md)
$EXTRA
===== KEYS TO TRANSLATE (key → kind:speaker) =====
$KEYS

Return the JSON object now."
# TR=agy khi Codex hết hạn mức (agy chạy chế độ plan, không tool)
if [[ ${TR:-codex} == agy ]]; then agy -p "Do not run any tool or command; answer directly.
$P" --mode plan > loc/$LG/$EP.raw 2> loc/$LG/$EP.err
else codex exec --skip-git-repo-check -s read-only "$P" < /dev/null > loc/$LG/$EP.raw 2> loc/$LG/$EP.err; fi
python3 - loc/$LG/$EP.raw loc/$LG/$EP.json <<'PY'
import json,sys,re
t=open(sys.argv[1]).read(); a=t.find('{'); b=t.rfind('}')
d=json.loads(t[a:b+1]); json.dump(d,open(sys.argv[2],'w'),ensure_ascii=False,indent=1); print(sys.argv[2], len(d))
PY
