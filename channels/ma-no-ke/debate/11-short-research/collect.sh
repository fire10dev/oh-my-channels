#!/bin/zsh
# collect.sh — lấy 30 video + 30 short gần nhất mỗi kênh (yt-dlp flat, không tải video) → raw/<kênh>-<tab>.jsonl
Y=/private/tmp/claude-501/-Users-nino-Projects-FIRE10-DEV-REPO-oh-my-channels/1999b015-0e65-4aee-8801-89454494af6c/scratchpad/ytv/bin/yt-dlp
cd "$(dirname $0)"
for c in TruyencuaEmma cantinbaton OtterAndQilin ChuyenKeCoThat3S NHAMA daokinhdi CáoNhỏChannel khuatmatkytruyen chuyenmachu3duy BibimbapBắp nightmaretalesvietnam3379 \
         HorrorShortsParty WanseeEntertainment MJVAnimations DrNoSleepAnimations NightmareTales LIGHTSAREOFF Creep-man AnimatedHorrorFlicks DWHAAD; do
  for tab in videos shorts; do
    $Y --flat-playlist --playlist-end 30 -j "https://www.youtube.com/@$c/$tab" 2>/dev/null \
      | python3 -c "import sys,json
for l in sys.stdin:
    d=json.loads(l); print(json.dumps({k:d.get(k) for k in ('id','title','duration','view_count','channel','playlist_channel_follower_count','channel_follower_count')},ensure_ascii=False))" > raw/$c-$tab.jsonl
    echo "$c $tab $(wc -l < raw/$c-$tab.jsonl)"
  done
done
