#!/usr/bin/env python3
"""make_posts.py [GROUPS]  (default BAC) — titles/descriptions for one-hour mixes (with chapters).
Default also writes the 15 batch-2 Shorts to posts_shorts_mixes.txt; other groups go to posts_mixes_<GROUPS>.txt."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
XF, HOUR = 3, 3600
tracks = json.loads((ROOT / "src/tracks.json").read_text())
ids = dict(re.findall(r"\| ([ABC]\d) [^(|]+\(youtu\.be/([\w-]+)\)", (ROOT.parent / "batch2/schedule_log.md").read_text()))
ids |= dict(re.findall(r"\| ([DEF]\d) [^|]+\| ([\w-]{11}) \|", (ROOT.parent / "batch3/schedule_log.md").read_text()))
GROUPS = sys.argv[1] if len(sys.argv) > 1 else "BAC"
MIX = {
    "A": ("2013 Festival EDM 🎆 1 Hour Mix | Progressive, Big Room & Electro House for Driving & Coding",
          "1 hour of 2013-era festival EDM: five original instrumental tracks, mixed with smooth crossfades.",
          "#edm #progressivehouse #drivingmusic #codingmusic #aimusic"),
    "B": ("Morning Vibes ☀️ 1 Hour Mix | Acoustic, Lo-fi, Ukulele, Tropical & Bossa for a Calm Start",
          "1 hour of gentle morning instrumentals: five original tracks, from warm acoustic guitar to light bossa nova.",
          "#morningmusic #lofi #acousticguitar #bossanova #aimusic"),
    "C": ("Late-Night Jazz Bar 🥃 1 Hour Mix | Sax, Piano Trio, Nu-Jazz & Bossa for Wine Evenings",
          "1 hour of late-night jazz: five original instrumental tracks, from smoky sax to rooftop bossa.",
          "#jazz #jazzbar #saxophone #relaxingjazz #aimusic"),
    "D": ("Lo-fi Coding 💻 1 Hour Mix | Lo-fi Hip Hop, Chillhop & Jazzhop Beats to Code To",
          "1 hour of lo-fi beats for coding: five original instrumental tracks, from late-night Rhodes to rainy jazzhop.",
          "#lofi #codingmusic #chillhop #studymusic #aimusic"),
    "E": ("Synthwave Night Coding 🌆 1 Hour Mix | Dark Synthwave, Retrowave, Cyberpunk & Chillwave",
          "1 hour of synthwave for night coding: five original instrumental tracks, from dark arps to dreamy outrun.",
          "#synthwave #retrowave #cyberpunk #codingmusic #aimusic"),
    "F": ("Deep Focus Ambient 🌲 1 Hour Mix | Ambient Electronica, Piano & Rain for Deep Work",
          "1 hour of calm ambient for deep work: five original instrumental tracks, from minimal electronica to rainy piano.",
          "#ambient #deepfocus #studymusic #codingmusic #aimusic"),
}

def ts(s):
    s = int(s)
    return f"{s // 60}:{s % 60:02d}"

out = []
for g in GROUPS:
    group = [t for t in tracks if t["id"][0] == g]
    starts, t = [], 0.0
    for tr in group:
        starts.append((t, tr))
        t += tr["duration"] - XF
    round_len = t + XF
    chapters = []
    k = 0
    while k * round_len < HOUR:
        for s, tr in starts:
            at = k * round_len + s
            if at < HOUR - 15:
                chapters.append(f"{ts(at)} {tr['headline']}")
        k += 1
    title, intro, tags = MIX[g]
    lines = [f"===== MIX {g} =====", f"FILE: out/mix/{g} 1 Hour Mix.mp4", f"THUMBNAIL: out/mix/{g}-thumbnail.jpg", "TITLE:", title, "", "DESCRIPTION:",
             intro, "", "🎵 Tracklist (full versions on the channel):"]
    for tr in group:
        lines.append(f"• {tr['headline']} · {tr['bpm']} BPM · https://youtu.be/{ids[tr['id']]}" if tr["id"] in ids else f"• {tr['headline']}")
    lines += ["", "⏱️ Chapters:", *chapters, "",
              "🔔 Subscribe to VIBE MUSIC AI MAKER for more AI-made instrumental mixes.",
              "🎵 Music and visuals created with AI by VIBE MUSIC AI MAKER.", "", tags, "",
              "Studio: Nhạc · Không dành cho trẻ em · Sử dụng AI = Có", ""]
    out += lines
    print(f"mix {g}: round {round_len:.1f}s, {len(chapters)} chapters")

if GROUPS != "BAC":
    (ROOT / f"posts_mixes_{GROUPS}.txt").write_text("\n".join(out))
    sys.exit()
out.append("===== SHORTS (file out/shorts/<id>.mp4, mỗi file < 10 MB) =====")
for tr in tracks:
    link = f"https://youtu.be/{ids[tr['id']]}" if tr["id"] in ids else ""
    out += [f"--- {tr['id']} ---", f"TITLE: {tr['headline']} {tr['tagline'].split('|')[0].strip()} #shorts",
            f"DESCRIPTION: Full 1 hour version 👉 {link}",
            f"{tr['bpm']} BPM · {tr['style']}", "Music and visuals created with AI by VIBE MUSIC AI MAKER.",
            f"RELATED VIDEO: {link}", ""]
(ROOT / "posts_shorts_mixes.txt").write_text("\n".join(out))
