#!/usr/bin/env python3
"""make_posts_100.py [START_DATE dd/mm/yyyy] — titles, descriptions and a posting plan for the 100 variant Shorts.

Writes posts_shorts100.md (copy-paste sheet, grouped by day) and posts_shorts100.csv (one row per Short).
Order: wave by variant number (all -2, then -3, -4, -5); inside a wave groups interleave A,B,C,D,E,F so
neighbouring slots never share a mood and the same track comes back after >= 14 slots (3.5 days, mostly ~30).
"""
import csv, datetime as dt, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SLOTS = ["08:00", "12:00", "17:00", "21:00"]  # GMT+7, 4 Shorts/day
START = dt.datetime.strptime(sys.argv[1], "%d/%m/%Y").date() if len(sys.argv) > 1 else dt.date(2026, 11, 5)

tracks = {t["id"]: t for t in json.loads((ROOT / "src/tracks.json").read_text())}
variants = json.loads((ROOT / "src/variants.json").read_text())
hour = dict(re.findall(r"\| ([ABC]\d) [^(|]+\(youtu\.be/([\w-]+)\)", (ROOT.parent / "batch2/schedule_log.md").read_text()))
hour |= dict(re.findall(r"\| ([DEF]\d) [^|]+\| ([\w-]{11}) \|", (ROOT.parent / "batch3/schedule_log.md").read_text()))
MIX = {"A": "1veDmNfqzqw", "B": "ZRrkq7gz10A", "C": "C97pCMPpUI4", "D": "UDZ8Ngc-2W4", "E": "KAyXkeAAm5w", "F": "ZwXV14MimFA"}
MIX_NAME = {"A": "2013 Festival EDM 1 Hour Mix", "B": "Morning Vibes 1 Hour Mix", "C": "Late-Night Jazz Bar 1 Hour Mix",
            "D": "Lo-fi Coding 1 Hour Mix", "E": "Synthwave Night Coding 1 Hour Mix", "F": "Deep Focus Ambient 1 Hour Mix"}
GENRE = {"A": "2013 EDM", "B": "Morning Lo-fi", "C": "Late-Night Jazz", "D": "Lo-fi Coding", "E": "Synthwave", "F": "Deep Focus Ambient"}
TAGS = {"A": "#edm #progressivehouse #2013edm #shorts", "B": "#morningmusic #lofi #acoustic #shorts",
        "C": "#jazz #saxophone #jazzbar #shorts", "D": "#lofi #codingmusic #chillhop #shorts",
        "E": "#synthwave #retrowave #cyberpunk #shorts", "F": "#ambient #deepfocus #studymusic #shorts"}
LAYOUT_VI = {"full": "toàn màn hình, lia ngang", "detail": "zoom cận + hộp chữ", "still": "ảnh tĩnh + sóng nhạc"}

missing = sorted({v["id"] for v in variants} - set(hour))
if missing:
    sys.exit(f"no 1-hour video id for {missing}")

order = []
for n in (2, 3, 4, 5):
    wave = [v for v in variants if v["n"] == n]
    by_num = sorted(wave, key=lambda v: (int(v["id"][1]), v["id"][0]))
    order += by_num

rows = []
for i, v in enumerate(order):
    t, g = tracks[v["id"]], v["id"][0]
    day = START + dt.timedelta(days=i // len(SLOTS))
    title = f"{v['caption']} · {t['headline']} {GENRE[g]} #shorts"
    if len(title) > 100:
        title = f"{v['caption']} · {t['headline']} #shorts"
    assert len(title) <= 100, title
    desc = "\n".join([
        f"{v['caption']} 🎧",
        f"Full 1 hour version 👉 https://youtu.be/{hour[v['id']]}",
        f"{MIX_NAME[g]} 👉 https://youtu.be/{MIX[g]}",
        f"{t['bpm']} BPM · {t['style']}",
        "Music and visuals created with AI by VIBE MUSIC AI MAKER.",
        TAGS[g],
    ])
    rows.append({"no": i + 1, "date": day.strftime("%d/%m/%Y"), "time": SLOTS[i % len(SLOTS)], "vid": v["vid"],
                 "file": f"out/shorts100/{v['vid']}.mp4", "title": title, "description": desc,
                 "related_video": f"https://youtu.be/{hour[v['id']]}", "related_title": t["title"],
                 "hook": f"{int(v['hookStart'])}s–{int(v['hookStart']) + 20}s", "layout": v["layout"]})

titles = [r["title"] for r in rows]
assert len(set(titles)) == len(titles), "duplicate titles"

with open(ROOT / "posts_shorts100.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0]))
    w.writeheader()
    w.writerows(rows)

md = [
    "# 100 Shorts cắt thêm — nội dung đăng + lịch dự kiến",
    "",
    f"Tạo bằng `python3 -I make_posts_100.py` · file video `shorts/out/shorts100/<vid>.mp4` (1080×1920, 20 s).",
    f"Lịch: 4 Short/ngày ({', '.join(SLOTS)} GMT+7), {START:%d/%m} → {dt.date.fromordinal(START.toordinal() + (len(rows) - 1) // len(SLOTS)):%d/%m/%Y}. "
    "Cùng bài cách nhau ≥3,5 ngày (đa số ~7 ngày); 2 slot liền nhau không trùng mood.",
    "",
    "**Studio (mỗi Short):** Không dành cho trẻ em · Hiện thêm → Sử dụng AI = **Có** · Lên lịch theo giờ dưới đây · "
    "Video có liên quan = video 1 giờ (link ở dòng *Related*; chỉ chọn được khi video đó đã công khai — tất cả đã công khai).",
    "Mẹo đã đo: điền **mô tả trước, tiêu đề sau** (gõ `#shorts` trong tiêu đề bật hộp gợi ý che ô mô tả); đóng hộp gợi ý bằng click vùng trống, **không bấm Esc**.",
    "",
    "| Bố cục | Ý nghĩa |", "|---|---|",
    *[f"| `{k}` | {v} |" for k, v in LAYOUT_VI.items()],
    "",
]
cur = None
for r in rows:
    if r["date"] != cur:
        cur = r["date"]
        md += [f"## {cur}", ""]
    md += [
        f"### {r['time']} · `{r['vid']}` · #{r['no']}",
        f"- File: `{r['file']}` · hook {r['hook']} · bố cục `{r['layout']}`",
        f"- Related: {r['related_video']} ({r['related_title']})",
        "",
        "**Title**",
        "```text", r["title"], "```",
        "**Description**",
        "```text", r["description"], "```",
        "",
    ]
(ROOT / "posts_shorts100.md").write_text("\n".join(md))
print(f"{len(rows)} Shorts, {rows[0]['date']} {rows[0]['time']} → {rows[-1]['date']} {rows[-1]['time']}, longest title {max(map(len, titles))} chars")
