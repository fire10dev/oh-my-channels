"""Storyboard HTML from a long-video script md — for the owner to read BEFORE images/voice are made.
Usage: python3 tools/storyboard.py scripts/L004-*.md [--wpm 150] [--out shorts/out/storyboard/L004.html]
Reads: §Claims table (ID, grade), §Narration table (# | Ch | EN | Claims | Shots | VI), §Images draft list (iNN STYLE desc).
Shots: iNN → shorts/public/<vid>/img-NN.jpg if it exists, else the prompt · s2:NN → shorts/public/s002/img-NN.jpg ·
MAP/TL/CARD/CLIP/SRC → labelled placeholder. Time = words / wpm (estimate until Kokoro timeline exists).
No Claude tokens: pure local parsing.

--beats: comic-style beat board from §Beats (| B | Nhịp | Rows | Sketch | VI |), one panel per story beat.
Sketches live in shorts/public/<vid>/sketch/beat-NN.jpg; missing ones are written to a gen.mjs queue
(run it outside Claude: IMG_AR=16:9 node tools/imagegen/gen.mjs run <queue> <dir>) and shown as empty panels.
"""
import argparse, base64, html, json, pathlib, re, subprocess, tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / 'shorts/public'
GATE_S = 45  # preview gate: first 30–45 s are reviewed before the rest is built


def cells(line):
    return [c.strip() for c in line.strip().strip('|').split('|')]


def section(md, title):
    m = re.search(rf'^## {re.escape(title)}.*?$(.*?)(?=^## |\Z)', md, re.M | re.S)
    return m.group(1) if m else ''


def parse(md):
    claims = {}
    for l in section(md, 'Claims').splitlines():
        c = cells(l)
        if len(c) >= 4 and re.fullmatch(r'C\d+', c[0]):
            claims[c[0]] = {'claim': c[1], 'grade': c[3]}
    rows = []
    for l in section(md, 'Narration').splitlines():
        c = cells(l)
        if len(c) >= 6 and re.fullmatch(r'\d+', c[0]):
            rows.append({'n': c[0], 'ch': c[1], 'en': c[2], 'claims': c[3], 'shots': c[4], 'vi': c[5]})
    prompts = {}
    for m in re.finditer(r'\b(i\d{2}) (LAC|MAP|WC|INK|[A-Z]{2,5}) (.*?)(?= · i\d{2} |\s*$| ·\s*$)',
                         section(md, 'Images'), re.M):
        prompts[m.group(1)] = (m.group(2), m.group(3).strip(' ·.'))
    clips = dict(re.findall(r'^(\d+)\. (.+)$', section(md, 'AI video clips'), re.M))
    return claims, rows, prompts, clips


def thumb(p):
    """Embed a 360px JPEG thumbnail so the board is one self-contained file (opens anywhere, phone included)."""
    with tempfile.TemporaryDirectory() as d:
        t = pathlib.Path(d) / 't.jpg'
        subprocess.run(['sips', '-Z', '360', '-s', 'format', 'jpeg', str(p), '--out', str(t)], capture_output=True, check=True)
        return 'data:image/jpeg;base64,' + base64.b64encode(t.read_bytes()).decode()


def shot_html(tok, vid, prompts, clips):
    tok = tok.strip()
    e = html.escape
    if m := re.fullmatch(r'i(\d{2})', tok):
        p = PUB / vid / f'img-{m.group(1)}.jpg'
        style, desc = prompts.get(tok, ('?', 'prompt missing'))
        if p.exists():
            return f'<figure class="shot img"><img src="{thumb(p)}"><figcaption>{tok} · {style}</figcaption></figure>'
        return f'<figure class="shot todo {style.lower()}"><b>{tok} · {style}</b><span>{e(desc)}</span><i>chưa có ảnh</i></figure>'
    if m := re.fullmatch(r's2:(\d{2})', tok):
        p = PUB / 's002' / f'img-{m.group(1)}.jpg'
        if p.exists():
            return f'<figure class="shot img reuse"><img src="{thumb(p)}"><figcaption>{tok} · dùng lại S002 (9:16)</figcaption></figure>'
        return f'<figure class="shot todo"><b>{tok}</b><span>ảnh S002 không thấy</span></figure>'
    kind, _, arg = tok.partition(':')
    label = {'MAP': 'Bản đồ động', 'TL': 'Timeline', 'CARD': 'Thẻ chữ', 'CLIP': 'AI clip (Flow)', 'SRC': 'Trích nguồn'}.get(kind, kind)
    detail = clips.get(arg, arg) if kind == 'CLIP' else arg
    return f'<figure class="shot gfx {kind.lower()}"><b>{e(label)}</b><span>{e(detail)}</span></figure>'


def build(path, wpm):
    md = path.read_text()
    code = path.name.split('-')[0]
    vid = code.lower()
    title = md.splitlines()[0].lstrip('# ').strip()
    claims, rows, prompts, clips = parse(md)
    t, out, last_ch, gate_drawn = 0.0, [], None, False
    n_img = n_have = 0
    for r in rows:
        if r['ch'] != last_ch:
            out.append(f'<h2>Chương {html.escape(r["ch"])}</h2>')
            last_ch = r['ch']
        if not gate_drawn and t >= GATE_S:
            out.append(f'<div class="gate">▲ Preview gate: hết ~{GATE_S}s đầu — duyệt đoạn trên trước khi làm tiếp</div>')
            gate_drawn = True
        dur = len(r['en'].split()) / wpm * 60
        toks = [s for s in r['shots'].split('·') if s.strip()]
        for s in toks:
            if re.fullmatch(r'\s*i\d{2}\s*', s):
                n_img += 1
                n_have += (PUB / vid / f'img-{s.strip()[1:]}.jpg').exists()
        cl = []
        for cid in re.findall(r'C\d+', r['claims']):
            g = claims.get(cid, {}).get('grade', '?')
            cl.append(f'<span class="claim g{g[0].lower()}" title="{html.escape(claims.get(cid, {}).get("claim", ""))}">{cid} · {html.escape(g)}</span>')
        per = dur / max(len(toks), 1)
        warn = ' <em class="warn">shot &lt; 3 s</em>' if per < 3 else (' <em class="warn">shot &gt; 9 s</em>' if per > 9 else '')
        out.append(f'''<section class="row">
 <div class="meta"><b>#{r["n"]}</b><span>{int(t)//60}:{int(t)%60:02d}</span><span>{dur:.1f}s · {len(toks)} shot{warn}</span></div>
 <div class="shots">{''.join(shot_html(s, vid, prompts, clips) for s in toks)}</div>
 <div class="text"><p class="en">{html.escape(r["en"])}</p><p class="vi">{html.escape(r["vi"])}</p><div>{''.join(cl)}</div></div>
</section>''')
        t += dur
    head = f'{len(rows)} đoạn · ~{int(t)//60}:{int(t)%60:02d} (ước tính {wpm} wpm) · ảnh mới có {n_have}/{n_img} · claims {len(claims)}'
    return f'''<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Storyboard {code}</title><style>
:root{{--bg:#f6f3ec;--card:#fff;--ink:#1d1b17;--mute:#6b6458;--gold:#a8842c;--line:#e2dccf}}
@media (prefers-color-scheme:dark){{:root{{--bg:#151412;--card:#201e1b;--ink:#ece6da;--mute:#a59d8e;--line:#36322c}}}}
body{{margin:0;padding:16px;background:var(--bg);color:var(--ink);font:14px/1.45 -apple-system,"Be Vietnam Pro",sans-serif}}
h1{{font:600 20px Cinzel,serif;margin:0 0 4px}} .sum{{color:var(--mute);margin-bottom:12px}}
h2{{font:600 15px Cinzel,serif;color:var(--gold);border-bottom:1px solid var(--line);padding:16px 0 4px;margin:0}}
.row{{display:grid;grid-template-columns:90px minmax(0,1.3fr) minmax(0,1fr);gap:12px;background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px;margin:8px 0}}
.meta{{display:flex;flex-direction:column;gap:2px;color:var(--mute);font-size:12px}} .meta b{{color:var(--ink);font-size:14px}}
.shots{{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px}}
.shot{{margin:0;aspect-ratio:16/9;border-radius:6px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;padding:6px;box-sizing:border-box;font-size:11.5px;gap:2px}}
.shot.img{{padding:0;background:#000;position:relative}} .shot img{{width:100%;height:100%;object-fit:contain}}
.shot figcaption{{position:absolute;bottom:0;left:0;right:0;background:#0009;color:#fff;font-size:10px;padding:2px 4px}}
.todo{{background:#1b1712;color:#e9d9a8;border:1px dashed var(--gold)}} .todo.map{{background:#e9dcc0;color:#3b2f1a}}
.todo i{{color:#c9a85a;font-size:10px}} .gfx{{background:#2a3a4a;color:#dfe9f2}} .gfx.clip{{background:#4a2a2a;color:#f5dddd}}
.en{{margin:0 0 6px;font-weight:500}} .vi{{margin:0 0 6px;color:var(--mute)}}
.claim{{display:inline-block;font-size:11px;border-radius:4px;padding:1px 5px;margin:0 4px 2px 0;background:#dfeedd;color:#1f4a1c}}
.claim.gb{{background:#fdf1cf;color:#6a4c00}} .claim.gc{{background:#f9d9d4;color:#7a1d10}}
.warn{{color:#c0392b;font-style:normal}} .gate{{background:var(--gold);color:#fff;padding:6px 10px;border-radius:6px;margin:8px 0;font-weight:600}}
@media (max-width:760px){{.row{{grid-template-columns:1fr}}}}
</style></head><body><h1>{html.escape(title)}</h1><div class="sum">{head} · Claim xanh = A, vàng = B, đỏ = C (phải nói rõ là nguồn một phía/không chắc)</div>
{''.join(out)}</body></html>'''


SKETCH_STYLE = ('Rough film storyboard panel: loose hand-drawn pencil linework, visible red construction lines, '
                'warm sepia and orange watercolor wash, white paper, cinematic wide 16:9 composition, unfinished look. '
                'No text, no letters, no numbers, no flags, no frame border. 13th-century Southeast Asia / East Asia. Scene: ')


def build_beats(path, wpm):
    md = path.read_text()
    code = path.name.split('-')[0]
    vid = code.lower()
    title = md.splitlines()[0].lstrip('# ').strip()
    _, rows, _, _ = parse(md)
    beats = []
    for l in section(md, 'Beats').splitlines():
        c = cells(l)
        if len(c) >= 5 and re.fullmatch(r'\d+', c[0]):
            beats.append({'b': int(c[0]), 'name': c[1], 'rows': c[2], 'sketch': c[3], 'vi': c[4],
                          'temp': c[5] if len(c) > 5 else ''})
    # start time of each row from word count (estimate)
    tl = PUB / vid / 'timeline.json'  # real Kokoro durations once voice exists
    real = {x['id']: x['seconds'] for x in json.loads(tl.read_text())} if tl.exists() else {}
    t, start = 0.0, {}
    for r in rows:
        start[r['n']] = t
        t += real.get(r['n'], len(r['en'].split()) / wpm * 60)
    sk = PUB / vid / 'sketch'
    queue, panels = [], []
    for b in beats:
        f = sk / f'beat-{b["b"]:02d}.jpg'
        first = re.split(r'[–-]', b['rows'])[0].strip()
        s0 = start.get(first, 0)
        tmp = PUB / f'{b["temp"]}.jpg' if b['temp'] else None
        if f.exists():
            pic = f'<img src="{thumb(f)}">'
        else:
            queue.append([f.name, SKETCH_STYLE + b['sketch']])
            if tmp and tmp.exists():  # ripomatic: borrowed image from another video until the sketch exists
                pic = f'<img src="{thumb(tmp)}"><span class="tag">tạm · {html.escape(b["temp"])}</span>'
            else:
                pic = f'<div class="empty">{html.escape(b["sketch"])}</div>'
        panels.append(f'''<article class="panel"><header><span>{b["b"]:02d}</span>{html.escape(b["name"])}<time>{int(s0)//60}:{int(s0)%60:02d}</time></header>
<div class="pic">{pic}</div><p>{html.escape(b["vi"])}</p><footer>đoạn {html.escape(b["rows"])}</footer></article>''')
    if queue:
        sk.mkdir(parents=True, exist_ok=True)
        q = sk / 'queue.json'
        q.write_text(json.dumps(queue, ensure_ascii=False, indent=1))
        print(f'{len(queue)} sketches missing → IMG_AR=16:9 node tools/imagegen/gen.mjs run {q} {sk}')
    return f'''<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Beat board {code}</title><style>
:root{{--bg:#efe9dc;--card:#fffdf8;--ink:#221d16;--mute:#7a7060;--gold:#a8842c;--line:#d9cfba}}
@media (prefers-color-scheme:dark){{:root{{--bg:#151412;--card:#201e1b;--ink:#ece6da;--mute:#a59d8e;--line:#36322c}}}}
body{{margin:0;padding:16px;background:var(--bg);color:var(--ink);font:15px/1.45 -apple-system,"Be Vietnam Pro",sans-serif}}
h1{{font:600 20px Cinzel,serif;margin:0 0 4px}} .sum{{color:var(--mute);margin:0 0 14px}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}}
.panel{{background:var(--card);border:2px solid var(--ink);display:flex;flex-direction:column}}
.panel header{{display:flex;gap:8px;align-items:baseline;padding:6px 10px;border-bottom:2px solid var(--ink);font-weight:700}}
.panel header span{{color:var(--gold)}} .panel time{{margin-left:auto;font-weight:400;color:var(--mute);font-size:13px}}
.pic{{aspect-ratio:16/9;background:#f4ead6;border-bottom:2px solid var(--ink);position:relative}}
.tag{{position:absolute;right:4px;bottom:4px;background:#000a;color:#fff;font-size:10px;padding:1px 5px;border-radius:3px}} .pic{{overflow:hidden}} .pic img{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}}
.empty{{height:100%;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px;box-sizing:border-box;color:#8a7a5a;font-style:italic;font-size:13px;border:1px dashed #c9b88f}}
.panel p{{margin:0;padding:10px;flex:1}} .panel footer{{padding:0 10px 8px;color:var(--mute);font-size:12px}}
</style></head><body><h1>{html.escape(title)}</h1>
<p class="sum">{len(beats)} nhịp · ~{int(t)//60}:{int(t)%60:02d} ({'giọng Kokoro thật' if real else f'ước tính {wpm} wpm'}) · hình = phác thảo tạm, bỏ sau khi duyệt</p>
<div class="grid">{"".join(panels)}</div></body></html>'''


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('script')
    ap.add_argument('--wpm', type=int, default=150)
    ap.add_argument('--out')
    ap.add_argument('--beats', action='store_true', help='comic beat board from §Beats')
    a = ap.parse_args()
    p = pathlib.Path(a.script)
    out = pathlib.Path(a.out or ROOT / 'shorts/out/storyboard' / f'{p.name.split("-")[0]}{"-beats" if a.beats else ""}.html')
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text((build_beats if a.beats else build)(p, a.wpm))
    print(out)
