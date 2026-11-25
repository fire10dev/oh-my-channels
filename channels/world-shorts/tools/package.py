"""out/<lang>/UPLOAD.md + UPLOAD.csv from meta/<lang>.json, only for rendered videos; --hub registers them in YT Hub.
Usage: python3 tools/package.py en [--hub] [--start 2026-11-25]
Schedule: 2/day (critic r1: new channel, no 8/day). EN 14:00 & 20:00 UTC; ES 18:00 & 01:00(+1) UTC (LatAm noon/evening)."""
import csv, json, os, subprocess, sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
lang = sys.argv[1]
hub = "--hub" in sys.argv
start = sys.argv[sys.argv.index("--start") + 1] if "--start" in sys.argv else (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")
# Entertainment channels: 1 video/day at 19:00 in the audience's local time (owner rule 2026-11-24).
from zoneinfo import ZoneInfo
AUD_TZ = ZoneInfo({"en": "America/New_York", "es": "America/Mexico_City"}[lang])
meta = json.loads((ROOT / f"meta/{lang}.json").read_text())
ch = meta["_channel"]
out = ROOT / "out" / lang
ids = [k for k in meta if not k.startswith("_") and (out / f"{k}.mp4").exists()]
day0 = datetime.strptime(start, "%Y-%m-%d").replace(hour=19, tzinfo=AUD_TZ)
ICT = timezone(timedelta(hours=7))
rows, md = [], [f"# {ch['name']} — upload sheet ({lang})", "",
                f"Handle (try in order): {', '.join(ch['handles'])}", "",
                "Studio for every video: Made for kids = No · Altered or synthetic content = No (animated maps + narration, nothing that looks real) · Category: Education · cover = `<id>-cover.jpg` (if the account can use custom Shorts covers; otherwise pick the first frame).", ""]
for i, vid in enumerate(ids):
    when = (day0 + timedelta(days=i)).replace(tzinfo=AUD_TZ).astimezone(timezone.utc)
    desc = meta[vid]["desc"] + "\n\n" + ch["footer"]
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(out / f"{vid}.mp4")], capture_output=True, text=True).stdout or 0)
    rows.append({"id": vid, "file": f"{vid}.mp4", "cover": f"{vid}-cover.jpg", "duration_s": round(dur, 1), "title": meta[vid]["title"],
                 "description": desc, "tags": ",".join(meta[vid]["tags"]), "pinned_comment": meta[vid]["comment"],
                 "publish_utc": when.strftime("%Y-%m-%d %H:%M"), "publish_ict": when.astimezone(ICT).strftime("%Y-%m-%d %H:%M")})
    md += [f"## {vid} · {dur:.0f}s · {when.strftime('%Y-%m-%d %H:%M')} UTC ({when.astimezone(ICT).strftime('%d/%m %H:%M')} +07)", "",
           f"**Title:** {meta[vid]['title']}", "", "**Description:**", "", "```", desc, "```", "",
           f"**Tags:** {', '.join(meta[vid]['tags'])}", "", f"**Pinned comment:** {meta[vid]['comment']}", ""]
with open(out / "UPLOAD.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0]))
    w.writeheader(); w.writerows(rows)
(out / "UPLOAD.md").write_text("\n".join(md))
print(f"{lang}: {len(rows)} videos -> {out}/UPLOAD.md, UPLOAD.csv")

if hub:
    env = {**os.environ, "YTHUB_ACTOR": "agent:world-shorts"}
    subprocess.run(["ythub", "channel", ch["name"], "--lang", lang, "--repo", "channels/world-shorts", "--handle", ch["handles"][0]], env=env, check=True, capture_output=True)
    for r in rows:
        subprocess.run(["ythub", "set", r["id"], "--channel", ch["name"], "--kind", "short", "--stage", "ready", "--title", r["title"],
                        "--description", r["description"], "--tags", r["tags"], "--pinned-comment", r["pinned_comment"],
                        "--file", str(out / r["file"]), "--thumbnail", str(out / r["cover"]), "--script", str(ROOT / f"scripts/{r['id']}.json"),
                        "--notes", f"schedule {r['publish_utc']} UTC"], env=env, check=True, capture_output=True)
    print(f"hub: {len(rows)} videos registered under {ch['name']}")
