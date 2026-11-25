"""Build + render the L008 shorts from <episode>/shorts/script.md (one SH table each).

Usage: python3 tools/build_l008_shorts.py [SH1 SH2 ...]   (default: all)
Per short: shorts/src/l008shN.json (+ .timeline.json) → Kokoro af_heart 1.0 → Root.tsx composition L008SHN
→ render → loudnorm −14 → <episode>/shorts/SHN/L008-SHN.mp4 + -sheet.jpg. Images = LONG 16:9 l008/img-NN.jpg (ListShort crops to 9:16).
Logs: $TMPDIR/l008-shorts.log. Prints one line per short.
"""
import json, os, pathlib, re, shutil, subprocess, sys

os.chdir(pathlib.Path(__file__).resolve().parent.parent)
LOG = open(pathlib.Path(os.environ.get('TMPDIR', '/tmp')) / 'l008-shorts.log', 'a')
EP = pathlib.Path(subprocess.check_output(['python3', 'tools/ep.py', 'L008'], text=True).strip())
SAY = json.loads((EP / 'long/say.json').read_text())
BGM = {'SH1': 'grand', 'SH2': 'grand', 'SH3': 'grand', 'SH4': 'warm', 'SH5': 'sad', 'SH6': 'sad', 'SH7': 'grand'}
# On-screen titles per line (big text at the top). First = hook card.
TITLES = {
    'SH1': ['CHAMPA RICE', 'CHAMPA', 'EARLY RICE', '1012', 'SOUTH ASIA?', 'THE NAME STUCK', 'WHO?'],
    'SH2': ['NOT VIETNAMESE', 'AUSTRONESIAN', 'SANSKRIT + CHAM', 'ĐÔNG YÊN CHÂU', 'AKHAR THRAH', 'HOW?'],
    'SH3': ['1371', 'BOTH WAYS', 'CHẾ BỒNG NGA', '20 YEARS', 'THREE SIDES', 'NAME UNKNOWN', 'AFTER HIM?'],
    'SH4': ['ONE GODDESS', 'PO NAGAR', 'TWO NAMES', 'SHARED TOWERS', 'STILL HERE', 'HOW DID IT END?'],
    'SH5': ['1471', 'THE SOUTH', 'STEP BY STEP', 'PANDURANGA', '1832', '1835', 'WHAT REMAINS?'],
    'SH6': ['1471', 'LÊ THÁNH TÔNG', 'THE CITY FELL', 'VIETNAMESE CHRONICLE', 'MING HISTORY', 'WHAT DID CHINA DO?'],
    'SH7': ['1,000 YEARS', 'CHAMPA', 'SEA POWER', 'STILL HERE', 'HOW DID IT END?'],
}


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
    return f'l008/img-{m.group(1)}.jpg' if m else 'l008/img-03.jpg'


def build(sh, rows):
    vid, ID = f'l008{sh.lower()}', f'L008{sh}'
    titles = TITLES[sh]
    assert len(titles) == len(rows), (sh, len(titles), len(rows))
    scenes = []
    for i, c in enumerate(rows):
        say = c[1]
        for a, b in SAY:
            say = say.replace(a, b)
        sid = 'hook' if i == 0 else 'outro' if i == len(rows) - 1 else f's{i}'
        scenes.append({'id': sid, 'title': titles[i], 'sub': c[1], 'say': say, 'img': first_img(c[4])})
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
    r = r.replace(f"dir: '{vid}', bgm: 'bgm/ambient.mp3'", f"dir: '{vid}', bgm: 'bgm/l008-{BGM[sh]}.mp3'")
    root.write_text(r)
    raw, final = f'out/{ID}-raw.mp4', str(EP / f'shorts/{sh}/L008-{sh}.mp4')
    run(['npx', 'remotion', 'render', 'src/index.ts', ID, raw, '--log=error'], cwd='shorts')
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', f'shorts/{raw}', '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11',
         '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', final])
    os.remove(f'shorts/{raw}')
    dur = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', final]))
    e = subprocess.run(['ffmpeg', '-nostats', '-i', final, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True).stderr
    lufs = re.findall(r'I:\s+(-?[\d.]+) LUFS', e)[-1]
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', final, '-vf', 'fps=1/5,scale=216:-1,tile=5x2', '-frames:v', '1',
         str(EP / f'shorts/{sh}/L008-{sh}-sheet.jpg')])
    print(f'{sh}: {dur:.1f}s, {lufs} LUFS, {len(rows)} scenes', flush=True)


shorts = parse()
for sh in (sys.argv[1:] or sorted(shorts)):
    build(sh, shorts[sh])
