#!/bin/zsh
# Write + review one long (EN then VI) with Codex CLI: ./run_codex.sh L1
set -u; cd ${0:A:h}; L=$1; S=${2:-0}  # S = number of steps already done (skip them)
ex() { # prompt on stdin, $2 output json
  cat > scripts/.prompt-$2
  for try in 1 2; do
    codex exec --skip-git-repo-check -s read-only -o scripts/.raw-$2 - < scripts/.prompt-$2 > scripts/.log-$2 2>&1
    python3 -I - scripts/.raw-$2 scripts/$2 <<'P' && return 0
import json,sys;s=open(sys.argv[1]).read();j=json.loads(s[s.index('{'):s.rindex('}')+1]);assert len(j['chapters'])>=8;json.dump(j,open(sys.argv[2],'w'),ensure_ascii=False,indent=1)
P
  done; echo "$2 FAIL"; return 1; }
(( S < 1 )) && { cat prompt-write-en.md; echo "\nID: $L\nTHEME: $(python3 -c "import json;print(json.load(open('themes.json'))['$L']['title'])")\n"; cat src/$L-en.md; } | ex x $L-en.draft.json || { (( S >= 1 )) || exit 1; }
(( S < 2 )) && { cat prompt-review.md; echo; cat scripts/$L-en.draft.json; } | ex x $L-en.json || { (( S >= 2 )) || exit 1; }
(( S < 3 )) && { cat prompt-write-vi.md; echo "\nID: $L\n\n## ENGLISH SCRIPT\n"; cat scripts/$L-en.json; echo "\n## VIETNAMESE SHORTS\n"; cat src/$L-vi.md; } | ex x $L-vi.draft.json || { (( S >= 3 )) || exit 1; }
(( S < 4 )) && { cat prompt-review.md; echo; cat scripts/$L-vi.draft.json; } | ex x $L-vi.json || { (( S >= 4 )) || exit 1; }
echo "$L done $(date +%H:%M)"
