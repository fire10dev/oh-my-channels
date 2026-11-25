#!/bin/zsh
# enrich.sh — short không có duration ở chế độ flat → lấy metadata từng short (skip-download), 8 luồng → raw/shorts-full.jsonl
Y=/private/tmp/claude-501/-Users-nino-Projects-FIRE10-DEV-REPO-oh-my-channels/1999b015-0e65-4aee-8801-89454494af6c/scratchpad/ytv/bin/yt-dlp
cd "$(dirname $0)"
for f in raw/*-shorts.jsonl; do c=${${f:t}%-shorts.jsonl}; python3 -c "import sys,json
for l in open('$f'): print('$c', json.loads(l)['id'])"; done > raw/shorts-ids.txt
cat raw/shorts-ids.txt | xargs -P 8 -L 1 zsh -c '$0 -j --skip-download --no-warnings "https://www.youtube.com/shorts/$2" 2>/dev/null | python3 -c "import sys,json
d=json.load(sys.stdin); print(json.dumps(dict(ch=\"$1\",id=d[\"id\"],title=d[\"title\"],dur=d.get(\"duration\"),views=d.get(\"view_count\"),likes=d.get(\"like_count\"),comments=d.get(\"comment_count\"),date=d.get(\"upload_date\"),subs=d.get(\"channel_follower_count\"),desc=(d.get(\"description\") or \"\")[:300]),ensure_ascii=False))"' $Y > raw/shorts-full.jsonl
wc -l raw/shorts-full.jsonl
