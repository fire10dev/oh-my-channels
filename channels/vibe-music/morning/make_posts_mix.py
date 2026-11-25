#!/usr/bin/env python3
"""make_posts_mix.py [pack#...] — title/description (tracklist + chapters) for morning pack mixes in out_mix/
-> youtube_posts_mix.md. Video links from YT Hub (`ythub --json show <id>`); missing = not uploaded yet.
Render the mix first: cd ../batch4 && python3 make_mix.py --dir ../morning <pack#>."""
import json, subprocess, sys
from pathlib import Path

D = Path(__file__).resolve().parent
songs = {s["id"]: s for s in json.loads((D / "songs.json").read_text())}
PACKS = set(map(int, sys.argv[1:]))
ts = lambda s: f"{s // 60}:{s % 60:02d}"


def yt(code):
    r = subprocess.run(["ythub", "--json", "show", code], capture_output=True, text=True)
    return json.loads(r.stdout).get("yt_url", "") if r.returncode == 0 else ""


md = ["# Morning — Mix 1 giờ: nội dung đăng", "",
      "Studio: Nhạc · Không dành cho trẻ em · Sử dụng AI = Có · playlist **Morning Vibes ☀️ Calm 1 Hour Instrumentals to Start Your Day**"
      " · thumbnail = file `thumbnail.jpg` cùng tên.",
      "Lịch đề xuất: 20:00 (+07) ngày sau video 1 giờ cuối của pack. Link bài còn thiếu = chưa đăng → chạy lại script trước khi upload.", ""]
for cj in sorted((D / "out_mix").glob("* chapters.json")):
    c = json.loads(cj.read_text())
    if PACKS and c["pack"] not in PACKS:
        continue
    pack = [s for s in songs.values() if s["pack"] == c["pack"]]
    title = f"{c['name']} ☀️ 1 Hour Calm Morning Mix | Soft Piano, Lo-fi & Bossa for Coffee & Study"
    assert len(title) <= 100, title
    links = {s["id"]: yt(s["id"]) for s in pack}
    lines = [f"1 hour of calm morning music: five original instrumental tracks from the {c['name']} series.", "",
             "🎵 Tracklist (full 1 hour versions on the channel):"]
    lines += [f"• {s['emoji']} {s['title']} · {s['style']} · {s['bpm']} BPM" + (f" · {links[s['id']]}" if links[s["id"]] else "")
              for s in pack]
    lines += ["", "⏱️ Chapters:"] + [f"{ts(t)} {songs[i]['title']}" for t, i in c["chapters"]]
    lines += ["", "☀️ Good for: slow mornings · morning coffee · journaling · study & focus", "",
              "🔔 Subscribe to VIBE MUSIC AI MAKER for more calm, cozy AI-made instrumentals.",
              "🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.", "",
              "#morningmusic #calmmusic #studymusic #relaxingmusic #aimusic"]
    tags = ", ".join([c["name"].lower(), "morning music", "calm morning music", "morning mix", "1 hour mix", "soft piano",
                      "morning lo-fi", "bossa nova", "coffee music", "study music", "relaxing music", "ai music"])
    base = cj.name.replace(" chapters.json", "")
    miss = [i for i, u in links.items() if not u]
    md += [f"## {base}", f"- File: `morning/out_mix/{base}.mp4` + `{base} thumbnail.jpg`",
           f"- Link thiếu (chưa đăng): {', '.join(miss) if miss else 'không'}", "",
           "**Title**", "```text", title, "```", "**Description**", "```text", "\n".join(lines), "```",
           "**Tags**", "```text", tags, "```", ""]
(D / "youtube_posts_mix.md").write_text("\n".join(md))
print("wrote youtube_posts_mix.md")
