"""Check long scripts before rendering: python3 long/lint_long.py L1-en L1-vi ...  (prints problems + word count)."""
import json, re, sys, pathlib
R = pathlib.Path(__file__).resolve().parent
ART = {p.stem.split("_", 1)[1] for p in (R.parent / "b1-v3/art-A").glob("*.png")}
for lid in sys.argv[1:]:
    s = json.load(open(R / "scripts" / f"{lid}.json")); vi = s["lang"] == "vi"; probs = []; words = 0
    for c, ch in enumerate(s["chapters"]):
        for n, l in enumerate(ch["lines"]):
            w = len(l["vo"].split()); words += w; tag = f"c{c}L{n}"
            if l.get("speaker") not in ("pen", "buff"): probs.append(f"{tag} speaker {l.get('speaker')}")
            if w > (25 if vi else 22): probs.append(f"{tag} long vo ({w})")
            if len(l["text"]) > 24: probs.append(f"{tag} text {len(l['text'])}c: {l['text']}")
            if l.get("actor") not in ART: probs.append(f"{tag} actor {l.get('actor')}")
            if l.get("prop") and l["prop"] not in ART: probs.append(f"{tag} prop {l['prop']}")
            if vi and re.search(r"\d", l["vo"]): probs.append(f"{tag} digit in vo")
            if not vi and not re.fullmatch(r"[A-Z0-9 .,!?'\"&>=:\-]*", l["text"]): probs.append(f"{tag} text chars: {l['text']}")
    print(f"{lid}: {len(s['chapters'])} ch, {words} words, {len(probs)} problems", *probs[:30], sep="\n  ")
