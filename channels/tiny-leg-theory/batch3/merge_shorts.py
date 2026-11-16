"""Append debated (any finished) batch-3 chunks (batch3/shorts/*/final.json) to shorts/shorts.json (backup first). Idempotent by id."""
import json, pathlib, re, shutil
B = pathlib.Path(__file__).resolve().parent; S = B.parent / "shorts/shorts.json"
bak = B.parent / "shorts/build/shorts.json.bak-pre-batch3"
if not bak.exists(): shutil.copy(S, bak)
d = json.load(open(S)); have = {s["id"] for s in d["shorts"]}; new = []
for f in sorted(B.glob("shorts/*/final.json"), key=lambda p: int(re.search(r"s(\d+)", p.parent.name).group(1))):
    new += [x for x in json.load(open(f)) if x["id"] not in have]
d["shorts"] += new; tmp = S.with_suffix(".tmp"); json.dump(d, open(tmp, "w"), ensure_ascii=False, indent=1); tmp.rename(S)  # atomic: renders read it
print("\n".join(x["id"] for x in new), file=open(B / "short-ids.new.txt", "w"))
print(len(new), "added;", len(d["shorts"]), "total")
