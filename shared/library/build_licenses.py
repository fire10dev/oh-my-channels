"""Rebuild LICENSES.csv for the whole rice-lib from each source's manifest.
Columns: file, source_url, license, attribution_required, attribution_line
Run after any download: python3 build_licenses.py
"""
import csv, json, pathlib

R = pathlib.Path(__file__).resolve().parent
rows = []

# SFX — Sonniss GDC 2026 (licence v2.0, read 2026-11-11: commercial, no attribution, no AI training, no redistribution as SFX)
for f in sorted((R / "sfx/sonniss-gdc2026").rglob("*.wav")):
    rows.append([str(f.relative_to(R)), "https://gdc.sonniss.com/ (licence: https://sonniss.com/gdc-bundle-license/)",
                 "Sonniss GameAudioGDC licence", "no", ""])

# Music — Scott Buckley CC BY 4.0
p = R / "music/scott-buckley/LICENSES.part.csv"
if p.exists():
    rows += list(csv.reader(p.open()))

# Music — YouTube Audio Library ("Attribution not required" filter)
for f in sorted((R / "music/yt-audio-library").glob("*.mp3")):
    rows.append([str(f.relative_to(R)), "YouTube Studio Audio Library", "YouTube Audio Library licence (attribution not required)", "no", ""])

# Artifacts — The Met Open Access (CC0)
m = R / "artifact/manifest.jsonl"
if m.exists():
    for l in m.read_text().splitlines():
        o = json.loads(l)
        rows.append(["artifact/" + o["file"], o.get("page") or o["image_url"], o["license"], "no", ""])

# Map — Natural Earth (public domain)
if (R / "map/natural_earth_vector").exists():
    rows.append(["map/natural_earth_vector/", "https://www.naturalearthdata.com/", "Public domain", "no", ""])

with (R / "LICENSES.csv").open("w", newline="") as fh:
    w = csv.writer(fh)
    w.writerow(["file", "source_url", "license", "attribution_required", "attribution_line"])
    w.writerows(rows)
print(len(rows), "rows")
