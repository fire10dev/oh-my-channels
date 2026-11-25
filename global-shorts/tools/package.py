"""Upload package per language: out/<lang>/UPLOAD.csv + UPLOAD.md (title, description, tags, pinned comment, cover, schedule).
Schedule = 2 Shorts/day at the audience's lunch + evening peak, starting tomorrow; times given in local +07 AND audience time.
Usage: python3 tools/package.py [es pt fr]"""
import csv, json, sys, pathlib, datetime as dt, subprocess
ROOT = pathlib.Path(__file__).resolve().parents[1]
ORDER = (ROOT / "tools/batch.sh").read_text().split("ORDER=(")[1].split(")")[0].split()
# audience slots (UTC hour) : ES = Mexico City 12:00 & 19:00 (UTC-6); PT = Brasília 12:00 & 19:00 (UTC-3); FR = Paris 12:30 & 19:00 (UTC+1)
SLOTS = {"es": [(18, 0), (1, 0)], "pt": [(15, 0), (22, 0)], "fr": [(11, 30), (18, 0)]}
TZ = {"es": ("CDMX", -6), "pt": ("BRT", -3), "fr": ("Paris", 1)}
CH = {"es": "Off Limits Life en Español", "pt": "Off Limits Life Brasil", "fr": "Off Limits Life en Français"}
start = dt.date(2026, 11, 24)
SOURCES = json.loads((ROOT / "oll/sources.json").read_text())
FIX = {"es": ("Fuentes", "Narración con voz generada por IA. Animación original del canal.", "Video original en inglés: Off Limits Life (@OffLimitsLife)."),
       "pt": ("Fontes", "Narração com voz gerada por IA. Animação original do canal.", "Vídeo original em inglês: Off Limits Life (@OffLimitsLife)."),
       "fr": ("Sources", "Narration avec voix générée par IA. Animation originale de la chaîne.", "Vidéo originale en anglais : Off Limits Life (@OffLimitsLife).")}

def describe(m, lang, sx):
    lab, ai, orig = FIX[lang]
    body = m["description"].split("\n\n")[0].strip()
    tags = " ".join(dict.fromkeys(m["hashtags"]))
    sep = " : " if lang == "fr" else ": "
    return f"{body}\n\n{lab}{sep}{SOURCES.get(sx, '')}\n{ai}\n{orig}\n\n{tags}"
for lang in [a for a in sys.argv[1:] if not a.startswith("--")] or ["es", "pt", "fr"]:
    rows, n = [], 0
    for sx in ORDER:
        vid = f"{sx}-{lang}"; mp4 = ROOT / "out" / lang / f"{vid}.mp4"; mp = ROOT / "oll" / lang / "meta" / f"{vid}.json"
        if not (mp4.exists() and mp.exists()): continue
        m = json.loads(mp.read_text())
        day, slot = divmod(n, 2); h, mi = SLOTS[lang][slot]
        utc = dt.datetime.combine(start + dt.timedelta(days=day), dt.time(h, mi)) + (dt.timedelta(days=1) if (lang == "es" and slot == 1) else dt.timedelta())
        loc = utc + dt.timedelta(hours=7); aud = utc + dt.timedelta(hours=TZ[lang][1])
        dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp4], capture_output=True, text=True).stdout)
        rows.append({"n": n + 1, "file": mp4.name, "cover": f"{vid}-cover.jpg", "seconds": round(dur, 1), "title": m["title"],
                     "description": describe(m, lang, sx), "tags": ", ".join(m["tags"]), "pinned_comment": m["pinned"],
                     "schedule_local_+07": loc.strftime("%Y-%m-%d %H:%M"), f"schedule_{TZ[lang][0]}": aud.strftime("%Y-%m-%d %H:%M"),
                     "source_en": sx, "made_for_kids": "No", "altered_content": "No (stylised animation; AI voice disclosed in description)"})
        n += 1
    if not rows: continue
    with open(ROOT / "out" / lang / "UPLOAD.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
    md = [f"# {CH[lang]} — gói đăng ({len(rows)} Shorts)\n", "Mỗi mục: file · cover · lịch (giờ VN +07 / giờ khán giả). Đăng: Studio → Create → Upload → chọn file → dán Title/Description/Tags → Thumbnail (Shorts: chọn từ app YouTube trên điện thoại hoặc frame) → Schedule.\n"]
    for r in rows:
        md += [f"## {r['n']}. {r['title']}", f"- File: `{r['file']}` ({r['seconds']} s) · Cover: `{r['cover']}`",
               f"- Lịch: **{r['schedule_local_+07']} (+07)** = {r[f'schedule_{TZ[lang][0]}']} {TZ[lang][0]}",
               f"- Tags: {r['tags']}", f"- Pinned comment: {r['pinned_comment']}", "", "```", r["description"], "```", ""]
    (ROOT / "out" / lang / "UPLOAD.md").write_text("\n".join(md))
    print(lang, len(rows), "rows")

# --hub: register every packaged short in YT Hub (stage ready, planned_at = local +07 slot)
if "--hub" in sys.argv:
    import os
    env = {**os.environ, "YTHUB_ACTOR": "agent:global-shorts"}
    HANDLE = {"es": "@OffLimitsLifeES", "pt": "@OffLimitsLifeBR", "fr": "@OffLimitsLifeFR"}
    for lang in ["es", "pt", "fr"]:
        p = ROOT / "out" / lang / "UPLOAD.csv"
        if not p.exists(): continue
        subprocess.run(["ythub", "channel", CH[lang], "--handle", HANDLE[lang], "--lang", lang, "--repo", "global-shorts",
                        "--notes", f"Kênh lồng tiếng {lang.upper()} của Off Limits Life (chưa tạo trên YouTube). Gói đăng: global-shorts/out/{lang}/UPLOAD.md"], env=env, check=True, capture_output=True)
        for r in csv.DictReader(open(p)):
            code = r["file"][:-4]
            subprocess.run(["ythub", "set", code, "--channel", CH[lang], "--kind", "short", "--stage", "ready", "--title", r["title"],
                            "--description", r["description"], "--tags", r["tags"], "--pinned-comment", r["pinned_comment"],
                            "--file", str(ROOT / "out" / lang / r["file"]), "--thumbnail", str(ROOT / "out" / lang / r["cover"]),
                            "--notes", f"Lồng tiếng {lang.upper()} của {r['source_en']} (Off Limits Life). Lịch đề xuất {r['schedule_local_+07']} +07."], env=env, check=True, capture_output=True)
            subprocess.run(["ythub", "fact", code, "planned_at", r["schedule_local_+07"]], env=env, check=True, capture_output=True)
        print("hub", lang, "ok")
