# ep_build.py NN [long|shorts|all] — builder CHUNG: đọc thẳng scripts/pNN-*-v3.md (khuôn v3) → timeline Remotion `Story`.
#   Cần trước: v3_lines.py + tts_ep.sh (wav theo hash giọng|lời), ảnh mới ở pNN/scenes/<MÃ>.png (Muse).
#   Ra: video/public/pNN/{vo,img}, video/src/data/epNN-long.json, epNN-sh1..7.json, và video/src/episodes.ts (index.tsx đăng ký comp EPNN-LONG / EPNN-SHn).
# Khung hình mặc định (chưa đo mặt): ảnh ngang F→M luân phiên trái/giữa/phải; ảnh dọc B (1344×1792) cận nửa trên; short 9:16 cắt giữa.
# Muốn chỉnh tay: pNN/framing.json {"<MÃ>": {"cx":…, "cy":…}} — tâm nhân vật đo trên ảnh gốc (xem lesson đo tọa độ trong note kênh).
import sys, re, json, hashlib, subprocess, shutil, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent; PUB = ROOT / 'video' / 'public'
IW, IH, BW, BH = 2048, 1152, 1344, 1792
MANO = dict(img='p03/img/cut_B02.png', size=1344)
FAST_MN = 'atempo=1.06,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25'
SFX_KW = [('mõ', 'coc'), ('cộc', 'coc'), ('whoosh', 'whoosh'), ('tích tắc', 'tick'), ('đồng hồ', 'tick'), ('braam', 'braam'), ('bass', 'bassdown'),
          ('tim bay', 'pops'), ('pop', 'pops'), ('tạch', 'cauda'), ('cầu dao', 'cauda'), ('kẽo kẹt', 'cua'), ('cửa', 'cua'), ('boong', 'boong'),
          ('mâm', 'boong'), ('chuông gió', 'chuonggio'), ('chuông', 'hop'), ('sạt', 'dat'), ('đất', 'dat'), ('xu', 'xu'), ('tiền', 'xu'),
          ('khóa', 'khoa'), ('lật', 'lat'), ('đóng dấu', 'dau'), ('dấu', 'dau'), ('gà gáy', 'gagay'), ('vỗ tay', 'cheer'), ('cheer', 'cheer'),
          ('sóng', 'song'), ('nước', 'song'), ('mưa', 'mua'), ('sấm', 'sam'), ('rền', 'ren'), ('đám đông', 'dongnguoi'), ('dân làng', 'dongnguoi'), ('ếch', 'dem'), ('côn trùng', 'dem'), ('loa', 'loa'), ('gió', 'wind'), ('chụp', 'tach'), ('đập', 'dapcua'), ('ting', 'ting'), ('nhai', 'nhai'), ('máy', 'may')]
LINE = re.compile(r'\*\*([A-ZĐ0-9]+)\*\*:\s*(.+?)(?=<br>|\s*\|\s|\s+\([A-Z][A-Z0-9 →/,]*\)|\s*·|$)', re.M)
QUOTE = re.compile(r'[“"]([^”"]{2,40})[”"]')
IMG = re.compile(r'\b([A-Z]\d{2})\b')
clean = lambda t: t.strip().strip('"“”').strip()
key = lambda c, t: int(hashlib.md5(f'{c}|{t}'.encode()).hexdigest()[:7], 16)

def _c(cx, cy, w, W=IW, H=IH, r=9 / 16):
    h = w * r
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), int(w)]

class Ep:
    def __init__(s, n):
        s.n = f'{int(n):02d}'; s.P = f'p{s.n}'
        s.v3 = next(p for p in sorted((ROOT / 'scripts').glob(f'p{s.n}-*-v3.md')) if '.prev' not in p.name)
        s.txt = s.v3.read_text()
        s.voices = json.loads((ROOT / s.P / 'voices.json').read_text())
        fr = ROOT / s.P / 'framing.json'; s.frame = json.loads(fr.read_text()) if fr.exists() else {}
        s.k = 0
    def sec(s, name):
        a = s.txt.find(f'## {name}'); b = s.txt.find('\n## ', a + 3); return s.txt[a:b if b > 0 else len(s.txt)] if a >= 0 else ''
    # ---- ảnh
    def src(s, im):
        if im.startswith('B'): return ROOT / 'assets' / 'muse-v2' / f'{im}.png'
        if im.startswith('S'): return ROOT / 'ep01' / 'scenes' / f'{im}.png'
        import os
        d = pathlib.Path(os.environ.get('EP_SCENES', ROOT / s.P / 'scenes'))
        for c in (d / f'{im}.png', d / f'P{s.n}-{im}.png', d / f'{im}.jpg', d / f'P{s.n}-{im}.jpg'):
            if c.exists(): return c
        return d / f'{im}.png'
    def shot(s, im, vert=False, **o):
        s.k += 1; f = s.frame.get(im, {}); port = im.startswith('B'); W, H = (BW, BH) if port else (IW, IH)
        cx, cy = f.get('cx', W / 2), f.get('cy', H * (0.38 if port else 0.5))
        if vert:
            r = 16 / 9; a = _c(cx, cy, min(W, H / r) if not port else BW * 0.75, W, H, r); b = _c(cx, cy, a[2] * 0.8, W, H, r)
        elif port:
            a = _c(cx, cy, 1100, W, H); b = _c(cx, cy, 800, W, H)
        else:
            dx = [-1, 0, 1][s.k % 3] * 220
            a, b = ([cx, cy, 2048], _c(cx + dx, cy, 1350)) if s.k % 2 else (_c(cx + dx, cy, 1350), _c(cx, cy, 1000))
            if 'cx' in f: a, b = _c(cx, cy, 1500), _c(cx, cy, 1000)
        return dict(img=im, a=a, b=b, **o)
    # ---- giọng
    def wav(s, c, t, short=False):
        sub = 'shorts' if short and (c == 'MN' or not (ROOT / s.P / 'long' / 'tts' / f'{key(c, t):03d}.wav').exists()) else 'long'
        srcf = ROOT / s.P / sub / 'tts' / f'{key(c, t):03d}.wav'
        fx = FAST_MN if short and c == 'MN' else s.voices[c]['fx']
        tag = 's' if sub == 'shorts' else ''
        dst = PUB / s.P / 'vo' / f'{tag}{key(c, t)}.wav'; dst.parent.mkdir(parents=True, exist_ok=True)
        if not srcf.exists(): raise SystemExit(f'thiếu TTS {sub}: {c}: {t}')
        if not dst.exists() or dst.stat().st_mtime < srcf.stat().st_mtime:
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(srcf), '-af', fx + ',aresample=48000', '-ac', '2', str(dst)], check=True)
        return f'{s.P}/vo/{dst.name}'
    # ---- chú thích cột Chữ/SFX → pop, sfx, mute, gap
    def notes(s, col):
        lo = col.lower(); pops = QUOTE.findall(col); sfx = []
        for kw, name in SFX_KW:
            if kw in lo and name not in [x[1] for x in sfx]: sfx.append((0.05 + 0.3 * len(sfx), name, 0.7))
        mute = any(k in lo for k in ('nhạc tắt', 'tắt nhạc', 'cắt toàn bộ nhạc', 'im lặng'))
        m = re.search(r'im (\d+(?:[.,]\d)?) ?s', lo); gap = float(m.group(1).replace(',', '.')) if m else None
        n = max(len(pops), 1)
        return dict(pop=[(i / n, p, '#ffd84a' if i == 0 else '#ffffff', (i + 1) / n if i < n - 1 else 1.0) for i, p in enumerate(pops)], sfx=sfx[:3], mute=mute, gap=gap)
    # ---- LONG
    def long_spec(s):
        spec = []
        for row in s.sec('LONG').split('\n'):
            cells = [c.strip() for c in row.strip().strip('|').split('|')]
            if len(cells) < 4 or not re.match(r'\d+:\d\d', cells[0]): continue
            imgs = IMG.findall(cells[1]) or ['S26']; lines = [(c, clean(t)) for c, t in LINE.findall(cells[2])]; nt = s.notes(cells[3])
            if not lines:
                m = re.search(r'(\d+(?:[.,]\d)?)\s*s', cells[2]); dur = float(m.group(1).replace(',', '.')) if m else 1.5
                spec.append(dict(v=None, dur=dur, sh=[s.shot(i, dark=0.15) for i in imgs], pop=nt['pop'], sfx=nt['sfx'], mute=True)); continue
            per = max(1, -(-len(imgs) // len(lines)))
            for j, (c, t) in enumerate(lines):
                im = imgs[j * per:(j + 1) * per] or imgs[-1:]
                it = dict(v=c, t=t, sh=[s.shot(i) for i in im], mute=nt['mute'])
                if j == 0: it.update(pop=nt['pop'], sfx=nt['sfx'])
                if j == len(lines) - 1 and nt['gap']: it['gap'] = nt['gap']
                if 'S06' in im and 'đăng ký' in t.lower():
                    it['sh'] = [dict(img='S06', a=[1024, 576, 2048], b=[1024, 576, 2048], blur=14, dark=0.55, cut=dict(MANO, frm=[260, 1100, 0.8], to=[260, 160, 0.8], bob=1))]
                spec.append(it)
        return spec
    # ---- SHORTS
    def shorts_spec(s):
        out = {}
        for blk in re.split(r'\n### ', s.sec('SHORTS'))[1:]:
            name = re.match(r'(SH\d)', blk).group(1); spec = []
            for ln in blk.split('\n')[1:]:
                if not ln.startswith('- '): continue
                im = IMG.findall(' '.join(re.findall(r'\(([^)]*)\)', ln))) or ['S26']
                pops = QUOTE.findall(ln.split('·', 1)[1]) if '·' in ln else []
                pop = [(0.0, p, '#ffd84a', 0.6 if len(pops) > 1 else 1.0) for p in pops[:1]] + [(0.6, p, '#ffffff') for p in pops[1:2]]
                m = LINE.search(ln)
                if not m:
                    d = re.search(r'(\d+(?:[.,]\d)?)\s*s', ln); spec.append(dict(v=None, dur=float(d.group(1).replace(',', '.')) if d else 0.8, sh=[s.shot(i, vert=True) for i in im[:1]], pop=pop, mute=True)); continue
                c, t = m.group(1), clean(m.group(2)); it = dict(v=c, t=t, sh=[s.shot(i, vert=True) for i in im], pop=pop)
                if c == 'MN' and 'link' in t.lower():
                    it.update(sh=[dict(img='S06', a=_c(1024, 576, 648, r=16/9), b=_c(1100, 576, 648, r=16/9), blur=14, dark=0.55, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
                              pop=pop + [(0.6, '▼ BẢN ĐẦY ĐỦ: LINK DƯỚI', '#ffffff')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.2)
                spec.append(it)
            out[name] = spec
        return out
    # ---- dựng timeline
    def sfx_src(s, name):
        for d in (s.P, 'common', 'p04', 'p03', 'p02', 'sh6'):
            if (PUB / d / 'sfx' / f'{name}.wav').exists(): return f'{d}/sfx/{name}.wav'
    def build(s, spec, W, H, short=False, t=0.3, tail=0.8):
        (PUB / s.P / 'img').mkdir(parents=True, exist_ok=True)
        shots, cuts, pops, sfx, subs, voice, mutes = [], [], [], [], [], [], []
        for it in spec:
            for sh in it['sh']:
                dst = PUB / s.P / 'img' / f"{sh['img']}.png"
                sp = s.src(sh['img'])
                if not sp.exists(): raise SystemExit(f'thiếu ảnh {sp}')
                if not dst.exists() or dst.stat().st_mtime < sp.stat().st_mtime: shutil.copy2(sp, dst)
            if it['v']:
                src = s.wav(it['v'], it['t'], short); d = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(PUB / src)]))
                voice.append({'t': round(t, 3), 'src': src}); subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
            else: d = it['dur']
            span = d + it.get('gap', 0.25); n = len(it['sh'])
            for k, sh in enumerate(it['sh']):
                t0, t1 = t + span * k / n, t + span * (k + 1) / n; w, h = (BW, BH) if sh['img'].startswith('B') else (IW, IH)
                shots.append({'img': f"{s.P}/img/{sh['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': sh['a'], 'b': sh['b'], **{x: sh[x] for x in ('shake', 'flash', 'blur', 'dark') if x in sh}})
                if 'cut' in sh:
                    c = sh['cut']; cuts.append({'img': c['img'], 'size': c['size'], 't0': round(t0, 3), 't1': round(t1, 3), 'from': c['frm'], 'to': c['to'], 'bob': bool(c.get('bob'))})
            for x in it.get('pop', []):
                fr, text, color = x[:3]; t1 = t + d * x[3] if len(x) > 3 else t + span
                pops.append({'t0': round(t + d * fr, 3), 't1': round(max(t1, t + d * fr + 0.5), 3), 'text': text, 'color': color})
            for fr, name, vol in it.get('sfx', []):
                p = s.sfx_src(name)
                if p: sfx.append({'t': round(t + d * fr, 3), 'src': p, 'vol': vol})
            if it.get('mute'): mutes.append([round(max(t - 0.2, 0), 3), round(t + span, 3)])
            t += span
        return {'w': W, 'h': H, 'duration': round(t + tail, 3), 'shots': shots, 'cuts': cuts, 'pops': pops, 'sfx': sfx, 'subs': subs,
                'comments': [], 'voice': voice, 'mutes': mutes, 'live': [], 'music': {'src': 'p01/music.wav', 'len': 121.0, 'vol': 0.13}}

def register():
    D = ROOT / 'video' / 'src' / 'data'; files = sorted(D.glob('ep[0-9][0-9]-*.json'))
    imp = ''.join(f"import {f.stem.replace('-', '_')} from './data/{f.name}';\n" for f in files)
    arr = ',\n'.join(f"  {{id: '{f.stem.upper()}', tl: {f.stem.replace('-', '_')} as unknown as Timeline}}" for f in files)
    (ROOT / 'video' / 'src' / 'episodes.ts').write_text(f"// SINH TỰ ĐỘNG bởi tools/ep_build.py — đừng sửa tay.\nimport {{Timeline}} from './Story';\n{imp}export const EPISODES: {{id: string; tl: Timeline}}[] = [\n{arr}\n];\n")

if __name__ == '__main__':
    e = Ep(sys.argv[1]); what = sys.argv[2] if len(sys.argv) > 2 else 'all'; D = ROOT / 'video' / 'src' / 'data'
    if what in ('long', 'all'):
        tl = e.build(e.long_spec(), 1920, 1080); json.dump(tl, open(D / f'ep{e.n}-long.json', 'w'), ensure_ascii=False); print(f'EP{e.n}-LONG', tl['duration'], 's', len(tl['voice']), 'câu')
    if what in ('shorts', 'all'):
        for name, spec in e.shorts_spec().items():
            tl = e.build(spec, 1080, 1920, short=True, t=0.0, tail=0.4); json.dump(tl, open(D / f'ep{e.n}-{name.lower()}.json', 'w'), ensure_ascii=False); print(f'EP{e.n}-{name}', tl['duration'], 's')
    register()
