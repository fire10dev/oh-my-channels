"""EN script + l10n/<lang>.json -> scripts/<id><lang>.json. Usage: python3 tools/localize.py es w001 [w002 ...]
l10n file: {"voice", "speed", "brand", "labels": {EN: XX}, "<id>": {"source", "says": [...], "titles": {beat_index: text}}}"""
import copy, json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
lang, ids = sys.argv[1], sys.argv[2:]
L = json.loads((ROOT / f"l10n/{lang}.json").read_text())
lab = L["labels"]
def tr(s):
    if s not in lab:
        raise SystemExit(f"missing label [{lang}]: {s!r}")
    return lab[s]
for vid in ids:
    en = json.loads((ROOT / f"scripts/{vid}.json").read_text())
    t = L[vid]; s = copy.deepcopy(en)
    s.update(id=vid + lang, lang=lang, voice=L["voice"], speed=L.get("speed", 1.0), brand=L["brand"], source=t["source"])
    assert len(t["says"]) == len(s["beats"]), (vid, len(t["says"]), len(s["beats"]))
    for i, b in enumerate(s["beats"]):
        b["say"] = t["says"][i]
        if "title" in b: b["title"] = t["titles"][str(i)]
        for p in b.get("pins", []): p["text"] = tr(p["text"])
        for h in b.get("hl", []):
            if "label" in h: h["label"] = tr(h["label"])
        if b.get("big"): b["big"]["label"] = tr(b["big"]["label"]); b["big"]["value"] = lab.get(b["big"]["value"], b["big"]["value"])
        if b.get("bars"):
            for it in b["bars"]["items"]: it["label"] = tr(it["label"])
            if "unit" in b["bars"]: b["bars"]["unit"] = lab.get(b["bars"]["unit"], b["bars"]["unit"])
        if b.get("line", {}).get("label"): b["line"]["label"] = tr(b["line"]["label"])
    (ROOT / f"scripts/{vid}{lang}.json").write_text(json.dumps(s, ensure_ascii=False, indent=1))
    print("ok", vid + lang)
