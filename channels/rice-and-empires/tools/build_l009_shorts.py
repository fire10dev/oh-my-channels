"""Build + render the L009 shorts from <episode>/shorts/script.md (one SH table each).

Usage: python3 tools/build_l009_shorts.py [SH1 SH2 ...]   (default: all)
Per short: shorts/src/l009shN.json (+ .timeline.json) → Kokoro af_heart 1.0 → Root.tsx composition L009SHN
→ render → loudnorm −14 → <episode>/shorts/SHN/L009-SHN.mp4 + -sheet.jpg. Images = LONG 16:9 l009/img-NN.jpg (ListShort crops to 9:16).
Logs: $TMPDIR/l009-shorts.log. Prints one line per short.
"""
import json, os, pathlib, re, shutil, subprocess, sys

os.chdir(pathlib.Path(__file__).resolve().parent.parent)
LOG = open(pathlib.Path(os.environ.get('TMPDIR', '/tmp')) / 'l009-shorts.log', 'a')
EP = pathlib.Path(subprocess.check_output(['python3', 'tools/ep.py', 'L009'], text=True).strip())
SAY = json.loads((EP / 'long/say.json').read_text())
BGM = {'SH1': 'mystery', 'SH2': 'mystery', 'SH3': 'legend', 'SH4': 'legend', 'SH5': 'legend', 'SH6': 'reflect', 'SH7': 'mystery'}
# On-screen titles = column `title` in scripts/L009-shorts.md.


def run(cmd, **kw):
    subprocess.run(cmd, check=True, stdout=LOG, stderr=LOG, **kw)


def parse():
    md = (EP / 'shorts/script.md').read_text()
    out = {}
    for block in re.split(r'\n## (?=SH\d)', md)[1:]:
        sh = block[:3]
        rows = [l for l in block.split('\n') if re.match(r'^\| \d+ \| ', l)]
        out[sh] = [[c.strip() for c in r.strip().strip('|').split('|')] for r in rows]
    return out


def first_img(cell):
    m = re.search(r'\bi(\d\d)\b', cell)
    return f'l009/img-{m.group(1)}.jpg' if m else 'l009/img-04.jpg'


def build(sh, rows):
    vid, ID = f'l009{sh.lower()}', f'L009{sh}'
    scenes = []
    for i, c in enumerate(rows):
        say = c[1]
        for a, b in SAY:
            say = say.replace(a, b)
        sid = 'hook' if i == 0 else 'outro' if i == len(rows) - 1 else f's{i}'
        scenes.append({'id': sid, 'title': c[5], 'sub': c[1], 'say': say, 'img': first_img(c[4])})
    src = pathlib.Path(f'shorts/src/{vid}.json')
    src.write_text('[\n' + ',\n'.join(' ' + json.dumps(s, ensure_ascii=False) for s in scenes) + '\n]\n')
    pub = pathlib.Path(f'shorts/public/{vid}')
    if not pub.exists():  # TTS lives in the episode: <ep>/shorts/SHn/build, symlinked into Remotion's public/
        (EP / f'shorts/{sh}/build').mkdir(parents=True, exist_ok=True)
        pub.symlink_to(os.path.relpath(EP / f'shorts/{sh}/build', pub.parent))
    run(['.venv/bin/python', 'tts_kokoro.py', f'../{src}', f'../{pub}', 'af_heart', '1.0'], cwd='tools')
    shutil.copy(pub / 'timeline.json', f'shorts/src/{vid}.timeline.json')
    run(['python3', 'tools/register.py', vid])
    root = pathlib.Path('shorts/src/Root.tsx')
    r = root.read_text()
    r = r.replace(f"dir: '{vid}', bgm: 'bgm/ambient.mp3'", f"dir: '{vid}', bgm: 'bgm/l009-{BGM[sh]}.mp3'")
    root.write_text(r)
    raw, final = f'out/{ID}-raw.mp4', str(EP / f'shorts/{sh}/L009-{sh}.mp4')
    run(['npx', 'remotion', 'render', 'src/index.ts', ID, raw, '--log=error'], cwd='shorts')
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', f'shorts/{raw}', '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11',
         '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', final])
    os.remove(f'shorts/{raw}')
    dur = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', final]))
    e = subprocess.run(['ffmpeg', '-nostats', '-i', final, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True).stderr
    lufs = re.findall(r'I:\s+(-?[\d.]+) LUFS', e)[-1]
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', final, '-vf', 'fps=1/5,scale=216:-1,tile=5x2', '-frames:v', '1',
         str(EP / f'shorts/{sh}/L009-{sh}-sheet.jpg')])
    print(f'{sh}: {dur:.1f}s, {lufs} LUFS, {len(rows)} scenes', flush=True)


shorts = parse()
for sh in (sys.argv[1:] or sorted(shorts)):
    build(sh, shorts[sh])
