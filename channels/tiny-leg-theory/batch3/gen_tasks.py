"""Make debate task dirs from the debated topic lists.
python3 batch3/gen_tasks.py shorts          -> batch3/shorts/s131-s140 ... (10 chunks, EN+VI scripts)
python3 batch3/gen_tasks.py long-en L8      -> batch3/longs/L8-en
python3 batch3/gen_tasks.py long-vi L8      -> batch3/longs/L8-vi   (needs L8-en/final.json)"""
import json, pathlib, sys
B = pathlib.Path(__file__).resolve().parent; AB = B.parent


def mk(d, task, kind, check):
    d.mkdir(parents=True, exist_ok=True)
    (d / "task.md").write_text(task); (d / "kind.txt").write_text(kind)
    (d / "check.sh").write_text(f'python3 -I {B / check} "$1"\n')


mode = sys.argv[1]
if mode == "shorts":
    brief = (AB / "shorts/brainstorm/batch2/writer-brief.md").read_text().split("## Kiểm trước khi trả")[0]
    brief = brief.replace("batch 2 (s31–s130, EN + VI)", "batch 3 (s131–s230, EN + VI)").replace(
        "Đọc chủ đề ở `topics.md` (bảng Codex, cùng thư mục). Output: 1 file JSON `chunks/<từ id>-<đến id>.json` = list object",
        "Chủ đề ở cuối prompt. Output: 1 JSON list").replace("Không sửa file nào khác.", "")
    topics = json.load(open(B / "topics-shorts/final.json"))
    for i in range(0, 100, 10):
        ch = topics[i:i + 10]
        rows = "\n".join(json.dumps(t, ensure_ascii=False) for t in ch)
        mk(B / "shorts" / f"{ch[0]['id']}-{ch[-1]['id']}",
           brief + f"\n\nOUTPUT ONLY the JSON list of {2 * len(ch)} objects (for each topic the EN object, then the VI object), no prose.\n\n## Chủ đề\n{rows}\n",
           "list", "check_chunk.py")
elif mode == "shorts-long":
    # 6-month plan (user 2026-11-21): 7 Shorts per long, one per mechanism chapter, ids s231 + 7*(n-8) -> batch3/shorts/sA-sB
    L = sys.argv[2]; n = int(L[1:]); first = 231 + 7 * (n - 8)
    t = {x["id"]: x for x in json.load(open(B / "topics-longs/final.json"))}[L]
    s = json.load(open(B / "longs" / f"{L}-en" / "final.json"))
    chs = [c for c in s["chapters"] if c["title"][:1].isdigit()][:7]
    if not chs:
        chs = s["chapters"][1:8]
    brief = (AB / "shorts/brainstorm/batch2/writer-brief.md").read_text().split("## Kiểm trước khi trả")[0]
    brief = brief.replace("batch 2 (s31–s130, EN + VI)", f"Shorts cho video dài {L} (s{first}–s{first + 6}, EN + VI)").replace(
        "Đọc chủ đề ở `topics.md` (bảng Codex, cùng thư mục). Output: 1 file JSON `chunks/<từ id>-<đến id>.json` = list object",
        "Chủ đề ở cuối prompt. Output: 1 JSON list").replace("Không sửa file nào khác.", "")
    rows = []
    for i, c in enumerate(chs):
        sid = first + i
        mech = c["title"].split(".", 1)[1].strip() if "." in c["title"] else c["title"].strip()
        rows.append(json.dumps({"id": f"s{sid}", "mascot": "pen" if sid % 2 else "buff", "area": t["area"], "mechanism": mech,
                                "hook": c["lines"][0]["vo"], "payoff": c["lines"][-1]["vo"], "vi_angle": t.get("vi_angle", ""),
                                "chapter": " / ".join(l["vo"] for l in c["lines"])}, ensure_ascii=False))
    mk(B / "shorts" / f"s{first}-s{first + 6}",
       brief + f"\n\nEach Short is a stand-alone teaser of one chapter of the long video \"{t['title']}\" (VI: \"{t['title_vi']}\"): "
       "same mechanism and the same everyday situation as the chapter text given in the topic, retold by ONE mascot in 5-8 lines "
       "with a fresh short title (no number prefix)."
       f"\n\nOUTPUT ONLY the JSON list of {2 * len(rows)} objects (for each topic the EN object, then the VI object), no prose.\n\n## Chủ đề\n"
       + "\n".join(rows) + "\n", "list", "check_chunk.py")
elif mode == "long-en":
    L = sys.argv[2]; t = {x["id"]: x for x in json.load(open(B / "topics-longs/final.json"))}[L]
    p = (AB / "long/prompt-write-en.md").read_text().split("This is a non-interactive")[0]
    p = p.replace("built from the attached Shorts (each Short = one named psychology mechanism). This is NOT a compilation: write a new, deeper script.",
                  "using the mechanisms listed below (you may merge or swap one if it makes the video better; keep 7-8 mechanism chapters).")
    p = p.replace("Chapters 2..9 or 10: pick the 8 or 9 strongest, clearly different mechanisms from the Shorts (merge near-duplicates).",
                  "Chapters 2..8 or 9: one chapter per mechanism, 7 or 8 mechanism chapters.")
    p += ("\nIf the intro, title or description promise a number of items, it MUST equal the number of mechanism chapters "
          "(all chapters minus intro and recap). The first line of the intro and of the recap use a plain text, not a number.\n")
    mk(B / "longs" / f"{L}-en", p + f"\nID: {L}\nTHEME: {json.dumps(t, ensure_ascii=False)}\n", "object", "check_long.py")
elif mode == "long-vi":
    L = sys.argv[2]; t = {x["id"]: x for x in json.load(open(B / "topics-longs/final.json"))}[L]
    p = (AB / "long/prompt-write-vi.md").read_text().split("This is a non-interactive")[0]
    p = p.replace("and the Vietnamese Shorts on the same mechanisms", "and a localisation note")
    p += ("\nUse this Vietnamese title or a better natural one: " + t["title_vi"] + "\nLocalisation note: " + t.get("vi_angle", "") +
          "\nIf the intro, title or description promise a number of items, it MUST equal the number of mechanism chapters.\n")
    en = (B / "longs" / f"{L}-en" / "final.json").read_text()
    mk(B / "longs" / f"{L}-vi", p + f"\nID: {L}\n\n## ENGLISH SCRIPT\n{en}\n", "object", "check_long.py")
