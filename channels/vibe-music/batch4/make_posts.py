#!/usr/bin/env python3
"""make_posts.py [START dd/mm/yyyy] — title/description/tags + schedule for every rendered batch-4 video
(out/<id> <title> 1 Hour.mp4). Slots 10:00 and 20:00 GMT+7, one per slot in id order -> youtube_posts_batch4.md."""
import datetime as dt, json, sys
from pathlib import Path

B4 = Path(__file__).resolve().parent
START = dt.datetime.strptime(sys.argv[1], "%d/%m/%Y").date() if len(sys.argv) > 1 else dt.date(2026, 11, 6)
SLOTS = ["10:00", "20:00"]
EMOJI = {"Midnight Terminal": "🖥️", "Neon Highway": "🌆", "Cyber Rain": "🌧️", "Retro Arcade": "🕹️", "Server Room": "🗄️",
         "Chillwave Sunset": "🌅", "Orbital Station": "🛰️", "Tokyo Night": "🏮", "Cyberpunk Alley": "🌃", "Dreamwave Clouds": "☁️",
         "Vapor Mall": "🛍️", "Laser Grid": "🔺", "Night Train": "🚆", "Hacker Den": "💾", "Ocean Drive Night": "🌴",
         "Neon Rooftop": "🏙️", "Ice Cold Code": "❄️", "Mainframe 1984": "📼", "Rainy Neon Cafe": "☕", "Dawn Deploy": "🌄"}
songs = [s for s in json.loads((B4 / "songs.json").read_text())
         if (B4 / "out" / f"{s['id']} {s['title']} 1 Hour.mp4").exists()]
md = ["# Batch 4 — Synthwave Night Coding: nội dung đăng + lịch dự kiến", "",
      f"Lịch: 2 video/ngày ({', '.join(SLOTS)} GMT+7) từ {START:%d/%m/%Y}. Studio: Nhạc · Không dành cho trẻ em · "
      "Sử dụng AI = Có · Playlist **Synthwave Night Coding** · thumbnail = file `thumbnail.jpg` cùng tên.", ""]
for i, s in enumerate(songs):
    e, sound = EMOJI[s["pack_name"]], s["prompt"].split(", instrumental")[0]
    style = sound.split(",")[0]
    when = f"{START + dt.timedelta(days=i // 2):%d/%m/%Y} {SLOTS[i % 2]}"
    title = f"{s['title']} {e} 1 Hour {style.title()} | {s['pack_name']} Night Coding Music"
    if len(title) > 100:
        title = f"{s['title']} {e} 1 Hour {style.title()} | Night Coding Music"
    desc = "\n".join([
        f"{s['title']} {e} 1 hour of {style.lower()} for night coding and deep focus.", "",
        f"{sound[0].upper() + sound[1:]} at {s['bpm']} BPM. Steady energy, no vocals, made to stay in the background while you work.", "",
        f"🎹 Style: {style.lower()} · instrumental", f"⏱️ Tempo: {s['bpm']} BPM", f"{e} Scene: {s['scene']}", "",
        "🎧 Good for: night coding · deep work · studying · gaming", "",
        "🔔 Subscribe to VIBE MUSIC AI MAKER for more AI-made instrumental mixes.",
        "🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.", "",
        "#synthwave #codingmusic #retrowave #nightcoding #aimusic"])
    tags = ", ".join([s["title"].lower(), style.lower(), "synthwave", "synthwave for coding", "night coding music",
                      "retrowave", f"{s['bpm']} bpm", "focus music", "coding music", "ai music"])
    md += [f"## {when} · {s['id']} {s['title']}", f"- File: `batch4/out/{s['id']} {s['title']} 1 Hour.mp4` + `… thumbnail.jpg`", "",
           "**Title**", "```text", title, "```", "**Description**", "```text", desc, "```", "**Tags**", "```text", tags, "```", ""]
    assert len(title) <= 100 and len(tags) <= 500, s["id"]
(B4 / "youtube_posts_batch4.md").write_text("\n".join(md))
print(len(songs), "videos,", md[2][:60])
