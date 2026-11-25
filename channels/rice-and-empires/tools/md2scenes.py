"""Build shorts/src/<id>.json from the narration table of scripts/<ID>-*.md.
Usage: python3 tools/md2scenes.py scripts/S003-*.md s003 tools/say_s003.json
Table rows: | hook|1..n|outro | TITLE | EN narration (= on-screen caption) | claims | VI |
say_file: JSON list of [from, to] replacements for TTS (names/numbers), applied in order.
Optional shorts/src/<id>.media.json: {"imgBase": 1, "clips": {"hook": ["s013/clip-1.mp4", 3.5]}} (image numbering start; mp4 clip + seconds per scene id).
"""
import json, re, sys, pathlib
md, vid = pathlib.Path(sys.argv[1]), sys.argv[2]
subs = json.loads(pathlib.Path(sys.argv[3]).read_text()) if len(sys.argv) > 3 else []
mf = pathlib.Path(f'shorts/src/{vid}.media.json')
media = json.loads(mf.read_text()) if mf.exists() else {}
base, clips = media.get('imgBase', 0), media.get('clips', {})
rows = [l for l in md.read_text().split('\n') if re.match(r'^\| (hook|\d+|outro) \| ', l)]
out = []
for i, l in enumerate(rows):
    c = [x.strip() for x in l.strip().strip('|').split('|')]
    sid = c[0] if c[0] in ('hook', 'outro') else 's' + c[0]
    say = c[2]
    for a, b in subs: say = say.replace(a, b)
    sc = {"id": sid, "title": c[1], "sub": c[2], "say": say, "img": f"{vid}/img-{i + base:02d}.jpg"}
    if sid in clips: sc["clip"], sc["clipSec"] = clips[sid]
    out.append(sc)
pathlib.Path(f'shorts/src/{vid}.json').write_text("[\n" + ",\n".join(" " + json.dumps(x, ensure_ascii=False) for x in out) + "\n]\n")
print(len(out), 'scenes;', sum(len(x['say'].split()) for x in out), 'words')
