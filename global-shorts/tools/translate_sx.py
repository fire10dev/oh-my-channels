"""Localise one Off Limits Life short script (+ upload metadata) with codex (no Claude tokens).
Usage: python3 tools/translate_sx.py SX_ID LANG   (LANG: es | pt | fr)
Writes oll/<lang>/data/<SX_ID>-<lang>.json  and  oll/<lang>/meta/<SX_ID>-<lang>.json"""
import json, subprocess, sys, pathlib, re, tempfile
ROOT = pathlib.Path(__file__).resolve().parents[1]
OLL = ROOT.parent / "channels" / "off-limits-life"
sx, lang = sys.argv[1], sys.argv[2]
NAME = {"es": "Spanish (neutral Latin American, 'tú' form)", "pt": "Brazilian Portuguese ('você' form)", "fr": "French (France, 'tu' form)"}[lang]
src = json.loads((OLL / "src" / "data" / f"{sx}.json").read_text())
out_d = ROOT / "oll" / lang / "data" / f"{sx}-{lang}.json"
out_m = ROOT / "oll" / lang / "meta" / f"{sx}-{lang}.json"
if out_d.exists() and out_m.exists():
    print("skip", out_d.name); sys.exit(0)
prompt = f"""You are a native {NAME} scriptwriter localising a YouTube Short narration. Do not run commands or read files.
Return ONLY one JSON object, no markdown fence: {{"data": <script>, "meta": <meta>}}.

<script> = the input script with EVERY human-readable string translated into natural, punchy spoken {NAME}:
title, hook, asof, chapter hud/chip, each shot "s", "st" pairs, "q", and every string inside "d" (title, lines, stamp, left, right, note, steps, label, big, small, tag).
NEVER change keys, array lengths, numbers inside non-text fields, or these technical fields: v, you, tod, plane, sc, view, fx, world, long, id, type, card, days, fresh, fromv, tov.
Rules for "s": one shot = one spoken line, keep it SHORT (similar syllable count to English, max ~12 words) because it is voiced by TTS and cut to picture.
Convert imperial units to metric in speech AND in every on-screen string (st, q, d, hook) — e.g. st ["1 IN", "rain / year"] must become ["2,5 CM", ...]; feet→m, inches→cm, °F→°C, miles→km, mph→km/h, pounds→kg, rounded naturally. On-screen numbers must match what the narration says.
Write numbers as words in "s" only when TTS might misread them; years stay digits. Keep facts exactly; do not add claims.
"hook" = 2–4 word ALL-CAPS teaser. "asof" = translate the source/date note but DROP the part "full video on the channel" (this channel has no long video).

<meta> = {{"title": "<= 60 chars, curiosity-driven, ends with ' #shorts'", "description": "2-3 short sentences in {NAME} + blank line + a 'Sources:' line (in {NAME}) naming the sources from the English asof note + one line disclosing that the narration voice is AI-generated (in {NAME}) + blank line + 3 hashtags", "hashtags": ["#shorts", "..2 topical in {NAME}"], "tags": ["8-12 search tags in {NAME}"], "pinned": "an engaging question to viewers in {NAME}", "cover_big": "2-3 words ALL CAPS, use \\n to break into 2 lines", "cover_small": "4-6 words", "cover_tag": "one short word or number badge"}}

Input script (English):
{json.dumps(src, ensure_ascii=False)}
"""
IMP = re.compile(r"(\d\s*(in\.?|inch|inches|pulg\.?|pulgadas?|polegadas?|pouces?|ft|feet|pies|pés|pieds|mph|mi|miles|millas|milhas|lb|lbs|libras|livres|°F)\b)|°F", re.I)

NEED = ("title", "description", "hashtags", "tags", "pinned", "cover_big", "cover_small", "cover_tag")

def ask(pr):
    last = None
    for _ in range(3):  # codex sometimes returns broken JSON or drops a field: retry
        try:
            tf = tempfile.mktemp(suffix=".txt")
            subprocess.run(["codex", "exec", "--skip-git-repo-check", "-s", "read-only", "-o", tf, "-"], input=pr, text=True, capture_output=True, cwd=tempfile.gettempdir())
            o = json.loads(re.search(r"\{.*\}", pathlib.Path(tf).read_text(), re.S).group(0))
            assert all(k in o["meta"] for k in NEED), "meta field missing"
            assert len(o["data"]["chapters"]) == len(src["chapters"]), "chapters changed"
            for a, b in zip(src["chapters"], o["data"]["chapters"]):
                assert len(a["shots"]) == len(b["shots"]), "shot count changed"
            return o
        except Exception as e:
            last = e
    raise SystemExit(f"translate failed: {last}")

def screen_strings(d):
    out = [d.get("hook", "")]
    for ch in d["chapters"]:
        for sh in ch["shots"]:
            out += [sh["s"], *(sh.get("st") or []), sh.get("q") or "", json.dumps(sh.get("d") or {}, ensure_ascii=False)]
    return out

obj = ask(prompt)
for _ in range(2):
    bad = [x for x in screen_strings(obj["data"]) if IMP.search(x)]
    if not bad: break
    obj = ask(prompt + "\n\nYOUR PREVIOUS ANSWER STILL HAD IMPERIAL UNITS in: " + json.dumps(bad, ensure_ascii=False) + "\nFix them (metric, matching the narration) and return the full JSON again.")
d, meta = obj["data"], obj["meta"]
# structural guard: same shot count and technical fields untouched
for ch_s, ch_d in zip(src["chapters"], d["chapters"]):
    assert len(ch_s["shots"]) == len(ch_d["shots"]), "shot count changed"
    for a, b in zip(ch_s["shots"], ch_d["shots"]):
        for k in ("v", "you", "tod", "plane", "sc", "view", "fx"):
            if k in a: b[k] = a[k]
d["world"], d["long"] = src["world"], src.get("long", "")
out_d.parent.mkdir(parents=True, exist_ok=True); out_m.parent.mkdir(parents=True, exist_ok=True)
out_d.write_text(json.dumps(d, ensure_ascii=False, indent=1))
meta["source"] = sx; meta["lang"] = lang
out_m.write_text(json.dumps(meta, ensure_ascii=False, indent=1))
print("ok", out_d.name, "|", meta["title"])
