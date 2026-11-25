"""Register every rendered batch3 long/short missing from YT Hub (stage ready); existing codes are left untouched. ./batch3/register_hub.py [dry]"""
import csv, json, os, pathlib, subprocess, sys, tempfile
R = pathlib.Path(__file__).resolve().parents[1]; dry = len(sys.argv) > 1
CH = {"en": "Tiny Leg Theory", "vi": "Lý Thuyết Chân Que"}
have = {v["code"] for v in json.loads(subprocess.run(["ythub", "--json", "status"], capture_output=True, text=True).stdout)
        if v["channel"] in CH.values()}
items = []
for lang in ("en", "vi"):
    for r in csv.DictReader(open(R / f"long/upload-metadata-long-{lang}.csv")):
        items.append((r["id"], CH[lang], "long", r, R / r["file"], R / r["thumbnail"], R / f"long/scripts/{r['id']}.json"))
for f, lang in (("shorts/upload-metadata-batch3.csv", "en"), ("shorts/upload-metadata-batch3-vi.csv", "vi")):
    for r in csv.DictReader(open(R / f)):
        items.append((r["id"], CH[lang], "short", r, R / "shorts" / r["file"], None, None))
todo = [i for i in items if i[0] not in have]
missing = [str(i[4]) for i in todo if not i[4].exists()]
print("new", len(todo), "skip(existing)", len(items) - len(todo), "missing files", missing[:5])
if dry or missing: sys.exit(0)
for code, ch, kind, r, f, th, sc in todo:
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False) as t: t.write(r["description"])
    cmd = ["ythub", "set", code, "--channel", ch, "--kind", kind, "--stage", "ready", "--title", r["title"],
           "--description-file", t.name, "--file", str(f)]
    if th and th.exists(): cmd += ["--thumbnail", str(th)]
    if sc and sc.exists(): cmd += ["--script", str(sc)]
    subprocess.run(cmd, check=True, capture_output=True); os.unlink(t.name)
    subprocess.run(["ythub", "log", code, "--channel", ch, "--kind", "render", "Render batch3 xong, đăng ký vào Hub"], capture_output=True)
print("registered", len(todo))
