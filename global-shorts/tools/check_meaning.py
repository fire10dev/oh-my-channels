"""Line-by-line meaning check EN vs localised narration + on-screen text (codex). Applies fixes to oll/<lang>/data and
appends changed videos to build/rerender.txt. Usage: python3 tools/check_meaning.py LANG"""
import json, re, subprocess, sys, pathlib, tempfile
ROOT = pathlib.Path(__file__).resolve().parents[1]; OLL = ROOT.parent / "channels/off-limits-life/src/data"
lang = sys.argv[1]; NAME = {"es": "Spanish", "pt": "Brazilian Portuguese", "fr": "French"}[lang]
vids = sorted(p.stem for p in (ROOT / "oll" / lang / "data").glob(f"*-{lang}.json"))
def pairs(v):
    en = json.loads((OLL / f"{v.rsplit('-', 1)[0]}.json").read_text()); lo = json.loads((ROOT / "oll" / lang / "data" / f"{v}.json").read_text())
    E = [s for c in en["chapters"] for s in c["shots"]]; L = [s for c in lo["chapters"] for s in c["shots"]]
    return [{"i": i, "en": a["s"], "tr": b["s"], **({"en_card": a["st"], "tr_card": b.get("st")} if a.get("st") else {})} for i, (a, b) in enumerate(zip(E, L))]
changed = 0
import os
for k in range(int(os.environ.get("START", 0)), int(os.environ.get("END", len(vids))), 8):
    chunk = {v: pairs(v) for v in vids[k:k + 8]}
    prompt = f"""You are a meticulous bilingual fact-checker (English → {NAME}). Do not run commands or read files.
For each video, compare each English line with its {NAME} translation (narration "tr", and stat card "tr_card" if present).
Flag ONLY real problems: meaning changed/reversed/omitted, wrong number or unit conversion (metric conversion of imperial is expected and correct), wrong word sense, ungrammatical.
Ignore style. For each problem give a corrected {NAME} line, short (it is read by TTS, similar length).
Return ONLY JSON: {{"<video>": [{{"i": <int>, "problem": "<short>", "tr": "<fixed narration or null>", "tr_card": [<fixed card or null>]}}]}} — omit videos with no problems.
{json.dumps(chunk, ensure_ascii=False)}"""
    tf = tempfile.mktemp(suffix=".txt")
    subprocess.run(["codex", "exec", "--skip-git-repo-check", "-s", "read-only", "-o", tf, "-"], input=prompt, text=True, capture_output=True, cwd=tempfile.gettempdir())
    try: fixes = json.loads(re.search(r"\{.*\}", pathlib.Path(tf).read_text(), re.S).group(0))
    except Exception as e: print("parse fail chunk", k, e); continue
    for v, items in fixes.items():
        if v not in chunk or not items: continue
        dp = ROOT / "oll" / lang / "data" / f"{v}.json"; d = json.loads(dp.read_text())
        shots = [s for c in d["chapters"] for s in c["shots"]]
        for it in items:
            i = it.get("i")
            if not isinstance(i, int) or i >= len(shots): continue
            if it.get("tr"): shots[i]["s"] = it["tr"]
            if it.get("tr_card") and isinstance(it["tr_card"], list) and len(it["tr_card"]) == 2 and "st" in shots[i]: shots[i]["st"] = it["tr_card"]
            print(f"{v} #{i}: {it.get('problem')} -> {it.get('tr')}", flush=True); changed += 1
        dp.write_text(json.dumps(d, ensure_ascii=False, indent=1))
        with open(ROOT / "build/rerender.txt", "a") as fh: fh.write(f"{v.rsplit('-', 1)[0]} {lang}\n")
print("lines fixed:", changed)
