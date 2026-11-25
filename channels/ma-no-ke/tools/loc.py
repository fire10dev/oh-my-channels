# loc.py extract | tts LANG | timeline LANG — bản ngoại ngữ từ timeline Remotion đã dựng (video/src/data/p0N-*.json).
#   extract  → loc/strings.json: mọi chữ cần dịch (câu thoại kèm người nói, pop, bình luận live), khóa = chữ tiếng Việt.
#   tts      → đọc loc/<LANG>.json (vi → bản dịch) bằng Kokoro, fx theo vai → video/public/loc/<LANG>/vo/<hash>.wav
#   timeline → mỗi timeline gốc: thay chữ + giọng, giãn thời gian từng câu theo độ dài giọng mới (mọi mốc shot/pop/sfx
#              dời theo hàm giãn từng khúc) → video/src/data/loc/<LANG>/*.json + video/src/loc-<lang>.tsx (Remotion root)
import json, sys, glob, re, hashlib, pathlib, subprocess, copy

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / 'video' / 'src' / 'data'
PUB = ROOT / 'video' / 'public'
LOC = ROOT / 'loc'
EPS = ['p01', 'p02', 'p03', 'p04']

def sources():
    out = []
    for ep in EPS:
        for f in sorted(DATA.glob(f'{ep}-*.json')):
            if 'thumb' in f.name or 'cover' in f.name: continue
            out.append(f)
    return out

def speakers(ep):
    m = {}
    for f in sorted((ROOT / ep).glob('*/lines*.json')):
        for l in json.load(open(f)): m.setdefault(l['text'].strip(), l['voice'])
    return m

def H(s): return hashlib.md5(s.encode()).hexdigest()[:10]

def extract():
    S = {}
    def add(vi, kind, **kw):
        vi = vi.strip()
        e = S.setdefault(vi, dict(kind=kind, n=0, **kw)); e['n'] += 1
    for f in sources():
        ep = f.name[:3]; sp = speakers(ep); d = json.load(open(f))
        for s in d['subs']: add(s['text'], 'line', who=sp.get(s['text'].strip(), '?'), ep=ep)
        for p in d['pops']: add(p['text'], 'pop', ep=ep)
        for c in d['comments']: add(c['u'], 'user', ep=ep); add(c['c'], 'comment', ep=ep)
    LOC.mkdir(exist_ok=True)
    json.dump(S, open(LOC / 'strings.json', 'w'), ensure_ascii=False, indent=1)
    unk = [k for k, v in S.items() if v.get('who') == '?']
    print(len(S), 'chuỗi;', sum(len(k.split()) for k in S), 'chữ; thiếu người nói:', len(unk)); [print(' ?', u) for u in unk[:20]]


# ---- giọng Kokoro theo vai: (trộn giọng, tốc độ, pitch, fx thêm). pitch đổi bằng asetrate + atempo bù (giữ tốc độ).
ECHO = 'aecho=0.8:0.6:60:0.25'
CAST = {
 'en': dict(lang='en-us', v={
  'MN':  ([('am_michael', .6), ('am_fenrir', .4)], 1.08, 0.95, ECHO),   # host: ma nhà mỉa, trầm, vang
  'BT':  ([('af_heart', 1)], 1.0, 0.9, 'anull'),                         # ma lai: bà cụ
  'HANH':([('af_sarah', 1)], 1.0, 0.9, 'anull'),
  'TUNG':([('am_puck', 1)], 1.1, 1.0, 'anull'),
  'TT':  ([('am_onyx', 1)], 0.9, 0.93, 'aecho=0.8:0.5:40:0.2'),        # thần trùng: công chức âm phủ
  'PHAT':([('am_fenrir', 1)], 1.05, 1.0, 'anull'),
  'HONG':([('af_bella', 1)], 1.08, 1.0, 'anull'),
  'MX':  ([('af_heart', 1)], 1.15, 1.1, 'aecho=0.8:0.4:30:0.15'),       # ma xó: đứa trẻ giữ của
  'KHAI':([('am_eric', 1)], 1.1, 1.0, 'anull'),
  'VY':  ([('af_aoede', 1)], 1.08, 1.0, 'anull'),
  'MG':  ([('am_puck', 1)], 1.08, 1.0, 'anull'),                         # ma giấu: lắm mồm
  'ME':  ([('af_bella', 1)], 1.02, 1.0, 'anull'),
  'BIN': ([('af_heart', 1)], 1.08, 1.15, 'anull'),
  'BO':  ([('am_michael', 1)], 1.0, 0.97, 'anull'),
 }),
 # es: Kokoro chỉ có ef_dora, em_alex, em_santa → tách vai bằng pitch/tốc độ/echo
 'es': dict(lang='es', v={
  'MN':  ([('em_alex', 1)], 1.05, 0.93, ECHO),
  'BT':  ([('ef_dora', 1)], 1.0, 0.88, 'anull'),
  'HANH':([('ef_dora', 1)], 1.0, 0.95, 'anull'),
  'TUNG':([('em_alex', 1)], 1.1, 1.05, 'anull'),
  'TT':  ([('em_santa', 1)], 0.95, 0.9, 'aecho=0.8:0.5:40:0.2'),
  'PHAT':([('em_alex', 1)], 1.1, 1.04, 'anull'),
  'HONG':([('ef_dora', 1)], 1.05, 1.05, 'anull'),
  'MX':  ([('ef_dora', 1)], 1.1, 1.15, 'aecho=0.8:0.4:30:0.15'),
  'KHAI':([('em_santa', 1)], 1.1, 1.0, 'anull'),
  'VY':  ([('ef_dora', 1)], 1.08, 1.0, 'anull'),
  'MG':  ([('em_alex', 1)], 1.12, 1.06, 'anull'),
  'ME':  ([('ef_dora', 1)], 1.08, 1.02, 'anull'),
  'BIN': ([('ef_dora', 1)], 1.05, 1.2, 'anull'),
  'BO':  ([('em_santa', 1)], 1.0, 0.95, 'anull'),
 }),
}

def load_tr(lang):
    tr = {}
    for f in sorted((LOC / lang).glob('p0?.json')): tr.update(json.load(open(f)))
    over = LOC / lang / 'override.json'
    if over.exists(): tr.update(json.load(open(over)))
    return tr

def wav_name(lang, who, text): return H(f'{lang}|{who}|{text}|{CAST[lang]["v"][who]}') + '.wav'   # đổi giọng/tốc độ → file mới

def tts(lang, only=None):
    import numpy as np, soundfile as sf
    from kokoro_onnx import Kokoro
    S = json.load(open(LOC / 'strings.json')); tr = load_tr(lang); cast = CAST[lang]
    kd = ROOT.parent.parent / 'shared' / 'tts'
    k = Kokoro(str(kd / 'kokoro-v1.0.onnx'), str(kd / 'voices-v1.0.bin'))
    raw = LOC / lang / 'tts'; raw.mkdir(parents=True, exist_ok=True)
    pub = PUB / 'loc' / lang / 'vo'; pub.mkdir(parents=True, exist_ok=True)
    n = miss = 0
    for vi, e in S.items():
        if e['kind'] != 'line': continue
        if only and e['ep'] != only: continue
        if vi not in tr: miss += 1; continue
        who = e['who']; text = tr[vi]; name = wav_name(lang, who, text); dst = pub / name
        if dst.exists(): continue
        mix, speed, pitch, fx = cast['v'][who]
        style = sum(k.get_voice_style(v) * w for v, w in mix)
        audio, sr = k.create(text, voice=style, speed=speed, lang=cast['lang'])
        nz = np.nonzero(np.abs(audio) > 0.01)[0]
        audio = audio[max(nz[0] - int(0.03 * sr), 0): nz[-1] + int(0.08 * sr)]
        src = raw / name; sf.write(src, audio, sr)
        af = (f'asetrate={sr}*{pitch},aresample={sr},atempo={1/pitch:.4f},' if pitch != 1 else '') + fx + ',aresample=48000'
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', af, '-ac', '2', str(dst)], check=True); n += 1
    print('tts', lang, n, 'file mới; thiếu bản dịch', miss)

def dur(p):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(p)]))

def warp_timeline(d, ep, lang, tr):
    sp = speakers(ep); d = copy.deepcopy(d)
    order = sorted(range(len(d['voice'])), key=lambda k: d['voice'][k]['t'])
    subs = sorted(d['subs'], key=lambda s: s['t'])
    bp = [(0.0, 0.0)]   # điểm gãy (cũ, mới)
    shift = 0.0; newv = []
    for k, s in zip(order, subs):
        v = d['voice'][k]; assert abs(v['t'] - s['t']) < 1e-3, (v, s)
        vi = s['text'].strip(); text = tr[vi]; who = sp[vi]
        src = f"loc/{lang}/vo/{wav_name(lang, who, text)}"; nd = dur(PUB / src)
        od = dur(PUB / v['src'])
        t0 = v['t']; bp.append((t0, t0 + shift)); shift += nd - od; bp.append((t0 + od, t0 + od + shift))
        newv.append((t0, src, text, nd))
    def W(t):
        for (a, a2), (b, b2) in zip(bp, bp[1:]):
            if t <= b: return a2 + (t - a) * ((b2 - a2) / (b - a) if b > a else 1)
        return t + shift
    for x in d['shots'] + d['cuts'] + d['pops']: x['t0'], x['t1'] = round(W(x['t0']), 3), round(W(x['t1']), 3)
    for x in d['sfx']: x['t'] = round(W(x['t']), 3)
    for x in d['comments']: x['t'], x['end'] = round(W(x['t']), 3), round(W(x['end']), 3); x['u'] = tr.get(x['u'].strip(), x['u']); x['c'] = tr.get(x['c'].strip(), x['c'])
    for x in d['pops']: x['text'] = tr.get(x['text'].strip(), x['text'])
    d['mutes'] = [[round(W(a), 3), round(W(b), 3)] for a, b in d['mutes']]
    d['live'] = [[round(W(a), 3), round(W(b), 3)] for a, b in d['live']]
    d['voice'] = [{'t': round(W(t0), 3), 'src': src} for t0, src, _, _ in newv]
    d['subs'] = [{'t': round(W(t0), 3), 'dur': round(nd, 3), 'text': text} for t0, _, text, nd in newv]
    d['duration'] = round(W(d['duration']), 3)
    return d

def timeline(lang):
    tr = load_tr(lang); out = DATA / 'loc' / lang; out.mkdir(parents=True, exist_ok=True)
    comps = []
    for f in sources():
        ep = f.name[:3]
        try: nd = warp_timeline(json.load(open(f)), ep, lang, tr)
        except KeyError as e: print('thiếu', f.name, str(e)[:80]); continue
        json.dump(nd, open(out / f.name, 'w'), ensure_ascii=False, indent=0)
        comps.append((f.stem, nd['duration'])); print(f.stem, json.load(open(f))['duration'], '→', nd['duration'])
    imp = '\n'.join(f"import t{i} from './data/loc/{lang}/{s}.json';" for i, (s, _) in enumerate(comps))
    reg = '\n'.join(f"    <C id=\"{lang.upper()}-{s.upper()}\" tl={{t{i} as unknown as Timeline}} />" for i, (s, _) in enumerate(comps))
    th = (DATA / 'loc' / lang / 'thumbs.json').exists()
    thimp = f"import thumbs from './data/loc/{lang}/thumbs.json';" if th else ''
    threg = ("    {Object.entries(thumbs as unknown as Record<string, {w: number; h: number; p: ThumbXProps}>).map(([id, x]) => (\n"
             "      <Composition key={id} id={id} component={ThumbX} defaultProps={x.p} durationInFrames={1} fps={FPS} width={x.w} height={x.h} />\n    ))}") if th else ''
    open(ROOT / 'video' / 'src' / f'loc-{lang}.tsx', 'w').write(f"""// SINH TỰ ĐỘNG bởi tools/loc.py timeline {lang} — đừng sửa tay
import React from 'react';
import {{Composition, registerRoot}} from 'remotion';
import {{Story, Timeline}} from './Story';
import {{ThumbX, ThumbXProps}} from './ThumbX';
{imp}
{thimp}
const FPS = 30;
const C: React.FC<{{id: string; tl: Timeline}}> = ({{id, tl}}) => (
  <Composition id={{id}} component={{Story}} defaultProps={{{{tl}}}} durationInFrames={{Math.ceil(tl.duration * FPS)}} fps={{FPS}} width={{tl.w}} height={{tl.h}} />
);
const Root: React.FC = () => (
  <>
{reg}
{threg}
  </>
);
registerRoot(Root);
""")

if __name__ == '__main__':
    {'extract': extract, 'tts': tts, 'timeline': timeline}[sys.argv[1]](*sys.argv[2:])
