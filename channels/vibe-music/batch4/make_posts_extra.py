#!/usr/bin/env python3
"""make_posts_extra.py — titles/descriptions/schedule for batch-4 Shorts (out_shorts/) and pack mixes (out_mix/)
-> youtube_posts_batch4_shorts_mix.md. Video ids from schedule_log.md.
Short: same day as its 1-hour video, 15:00 (video 10:00) or 22:00 (video 20:00). Mix: day after the pack's last video, 18:30."""
import datetime as dt, json, re
from pathlib import Path

B4 = Path(__file__).resolve().parent
songs = {s["id"]: s for s in json.loads((B4 / "songs.json").read_text())}
shorts = {s["id"]: s for s in json.loads((B4.parent / "shorts/src/shortsG.json").read_text())}
log = {m[0]: (m[1], m[2], m[3]) for m in re.findall(r"\| (G\d\d-\d) \| [^|]+\| ([\w-]{11}) \| (\d\d/\d\d) (\d\d:\d\d) \|", (B4 / "schedule_log.md").read_text())}
EMO = {"Midnight Terminal": "🖥️", "Neon Highway": "🌆", "Cyber Rain": "🌧️"}
TAGS = "#synthwave #codingmusic #retrowave #nightcoding #shorts"
day = lambda ddmm: dt.datetime.strptime(ddmm + "/2026", "%d/%m/%Y")
ts = lambda s: f"{s // 60}:{s % 60:02d}"

md = ["# Batch 4 — Short + Mix: nội dung đăng + lịch dự kiến", "",
      "Short: cùng ngày video 1 giờ, 15:00 (video 10:00) hoặc 22:00 (video 20:00) — **Video có liên quan** chỉ chọn được khi "
      "video 1 giờ đã công khai ⇒ upload Short sau giờ đó, hoặc lên lịch trước rồi gắn related sau.",
      "Mix: 18:30 ngày sau video cuối của pack. Studio: Không dành cho trẻ em · Sử dụng AI = Có · playlist Synthwave Night Coding (mix).", "",
      "## Shorts", ""]
rows = []
for sid, sh in shorts.items():
    if not (B4 / "out_shorts" / f"{sid}.mp4").exists():
        continue
    vid, ddmm, hhmm = log[sid]
    when = day(ddmm).replace(hour=15 if hhmm == "10:00" else 22)
    s, e = songs[sid], EMO[sh["pack"]]
    title = f"{sh['caption']} · {s['title']} {e} Synthwave #shorts"
    desc = "\n".join([f"{sh['caption']} 🎧", f"Full 1 hour version 👉 https://youtu.be/{vid}",
                      f"{s['bpm']} BPM · {sh['style'].lower()} · instrumental",
                      "Music and visuals created with AI by VIBE MUSIC AI MAKER.", TAGS])
    assert len(title) <= 100, title
    rows.append((when, f"### {when:%d/%m %H:%M} · `{sid}` {s['title']}\n- File: `batch4/out_shorts/{sid}.mp4` · related: https://youtu.be/{vid}\n\n"
                       f"**Title**\n```text\n{title}\n```\n**Description**\n```text\n{desc}\n```\n"))
md += [r[1] for r in sorted(rows)]
md += ["## Mix 1 giờ", ""]
for cj in sorted((B4 / "out_mix").glob("* chapters.json")):
    c = json.loads(cj.read_text())
    pack = [s for s in songs.values() if s["pack"] == c["pack"]]
    last = max(day(log[s["id"]][1]) for s in pack)
    when = (last + dt.timedelta(days=1)).replace(hour=18, minute=30)
    e = EMO[c["name"]]
    title = f"{c['name']} {e} 1 Hour Synthwave Mix | Night Coding Music, Retrowave & Chillwave for Focus"
    lines = [f"1 hour of synthwave for night coding: five original instrumental tracks from the {c['name']} series.", "",
             "🎵 Tracklist (full versions on the channel):"]
    lines += [f"• {s['title']} · {s['bpm']} BPM · https://youtu.be/{log[s['id']][0]}" for s in pack]
    lines += ["", "⏱️ Chapters:"] + [f"{ts(t)} {songs[i]['title']}" for t, i in c["chapters"]]
    lines += ["", "🔔 Subscribe to VIBE MUSIC AI MAKER for more AI-made instrumental mixes.",
              "🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.", "",
              "#synthwave #codingmusic #retrowave #studymusic #aimusic"]
    base = cj.name.replace(" chapters.json", "")
    md += [f"### {when:%d/%m %H:%M} · {base}", f"- File: `batch4/out_mix/{base}.mp4` + `{base} thumbnail.jpg`", "",
           "**Title**", "```text", title, "```", "**Description**", "```text", "\n".join(lines), "```", ""]
    assert len(title) <= 100, title
(B4 / "youtube_posts_batch4_shorts_mix.md").write_text("\n".join(md))
print(len(rows), "shorts,", len(list((B4 / "out_mix").glob("* chapters.json"))), "mixes")
