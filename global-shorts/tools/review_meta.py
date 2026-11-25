"""Second-opinion native edit (agy/Gemini) of titles, hooks, cover text for one language. Applies fixes;
hook changes are appended to build/rerender.txt (the video must be re-rendered). Usage: python3 tools/review_meta.py es"""
import json, re, subprocess, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
lang = sys.argv[1]
NAME = {"es": "Latin American Spanish", "pt": "Brazilian Portuguese", "fr": "French"}[lang]
items = {}
for mp in sorted((ROOT / "oll" / lang / "meta").glob("*.json")):
    vid = mp.stem; m = json.loads(mp.read_text()); d = json.loads((ROOT / "oll" / lang / "data" / f"{vid}.json").read_text())
    lines = [sh["s"] for ch in d["chapters"] for sh in ch["shots"]]
    items[vid] = {"title": m["title"], "hook": d["hook"], "cover_big": m["cover_big"], "cover_small": m["cover_small"], "cover_tag": m["cover_tag"],
                  "pinned": m["pinned"], "first_lines": lines[:4]}
prompt = f"""You are a native {NAME} YouTube Shorts editor. Do not use tools, do not read or write files.
Below are localised Shorts (translated from English). For each item check title, hook, cover_big, cover_small, cover_tag, pinned:
flag anything a native viewer would find wrong, ambiguous, unnatural, or a false friend (e.g. Spanish 'descargar' for 'flush a toilet').
Keep meaning and facts; title must stay <= 60 chars and end with ' #shorts'; hook <= 4 words ALL CAPS; cover_big 2-3 words ALL CAPS with \\n.
Return ONLY a JSON object {{"<id>": {{"<field>": "<corrected value>", ...}}, ...}} containing ONLY fields you change (empty object if all fine).
{json.dumps(items, ensure_ascii=False, indent=0)}"""
r = subprocess.run(["agy", "--mode", "plan", "--disable-slash-commands", "-p", prompt], capture_output=True, text=True, timeout=900)
fix = json.loads(re.search(r"\{.*\}", r.stdout, re.S).group(0))
n = 0
for vid, f in fix.items():
    if vid not in items: continue
    mp = ROOT / "oll" / lang / "meta" / f"{vid}.json"; m = json.loads(mp.read_text())
    for k in ("title", "cover_big", "cover_small", "cover_tag", "pinned"):
        if k in f and f[k]:
            if k == "title" and (len(f[k]) > 60 or not f[k].endswith("#shorts")): continue
            m[k] = f[k]; n += 1
    mp.write_text(json.dumps(m, ensure_ascii=False, indent=1))
    if f.get("hook") and f["hook"] != items[vid]["hook"]:
        dp = ROOT / "oll" / lang / "data" / f"{vid}.json"; d = json.loads(dp.read_text()); d["hook"] = f["hook"]
        dp.write_text(json.dumps(d, ensure_ascii=False, indent=1))
        with open(ROOT / "build/rerender.txt", "a") as fh: fh.write(f"{vid.rsplit('-', 1)[0]} {lang}\n")
    print(vid, f)
print("fields changed:", n)
