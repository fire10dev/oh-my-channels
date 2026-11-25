# multi.py — 1 video, nhiều track audio (en/fr/es) cho kênh đa ngôn ngữ. Giọng ElevenLabs, phụ đề tách ra file .srt.
#   tts LANG VID   → ElevenLabs đọc mọi câu thoại của VID (vd p01-long) → video/public/loc/<lang>/el/<hash>.wav
#                    en: eleven_v4; fr/es: eleven_flash_v2_5 (½ credit/ký tự). EL_MODEL=... để ép model.
#   build VID      → 1 timeline chung: mỗi câu giữ khe = max(độ dài các thứ tiếng); hình, pop, bình luận (tiếng Anh) giống hệt nhau;
#                    subs = [] (không in phụ đề lên hình). Ghi video/src/data/multi/<VID>-<lang>.json (chỉ khác voice),
#                    video/out/multi/<VID>.<lang>.srt, video/src/multi.tsx.
#   Chạy: set -a; . ./.env.local; set +a; shared/tts/.venv/bin/python tools/multi.py tts en p01-long
import json, sys, os, re, subprocess, pathlib, copy
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import loc
from loc import DATA, PUB, LOC, H, dur, speakers, load_tr

LANGS = ['en', 'fr', 'es']
MODEL = {'en': 'eleven_v4', 'fr': 'eleven_flash_v2_5', 'es': 'eleven_flash_v2_5'}
# vai → (voice_id premade, stability, ffmpeg fx). Cùng 1 giọng cho mọi thứ tiếng ⇒ nhân vật nhận ra được dù đổi track.
CAST = {
 'MN':   ('N2lVS1w4EtoT3dr4eOWO', .35, loc.ECHO),   # Callum - Husky Trickster: host ma nhà mỉa mai
 'BT':   ('pFZP5JQG7iQjIQuC4Bku', .45, 'anull'),    # Lily - Velvety Actress: bà mẹ ma lai, người kể chính
 'HANH': ('FGY2WhTYpPnrIDTdsKH5', .4, 'anull'),     # Laura - Quirky: hàng xóm
 'TUNG': ('TX3LPaxmHKxFdv7VOQHJ', .4, 'anull'),     # Liam - Social Media Creator: con trai livestream
}
ROOT = loc.ROOT

try:   # ELEVENLABS_API_KEY từ .env.local (gitignored; tạo bởi `npx @elevenlabs/cli onboard`)
    from dotenv import load_dotenv
    load_dotenv(ROOT / '.env.local')
except ImportError: pass   # lệnh build/reproc chạy bằng python3 hệ thống, không cần key

def lines(vid):
    ep = vid[:3]; sp = speakers(ep); d = json.load(open(DATA / f'{vid}.json'))
    return d, [(s['text'].strip(), sp[s['text'].strip()]) for s in sorted(d['subs'], key=lambda s: s['t'])]

def tr(lang):
    return load_tr(lang)

def wav(lang, who, text, model):
    v, st, fx = CAST[who]
    return PUB / 'loc' / lang / 'el' / (H(f'{lang}|{v}|{st}|{fx}|{model}|{text}') + '.wav')

# tempo theo thứ tiếng (giọng ElevenLabs chậm hơn Kokoro; v4 không có tham số speed) — atempo giữ cao độ
TEMPO = {'en': 1.1, 'fr': 1.12, 'es': 1.14}
def proc(src, dst, fx, lang):
    # cắt lặng đầu/cuối; lặng giữa câu > 0.3 s rút còn 0.22 s; tăng tempo; fx theo vai; 48k stereo
    af = ('silenceremove=start_periods=1:start_threshold=-45dB:stop_periods=-1:stop_duration=0.25:stop_threshold=-40dB:stop_silence=0.18,'
          'areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,'
          f'atempo={TEMPO[lang]},{fx},aresample=48000')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', af, '-ac', '2', str(dst)], check=True)

def reproc(lang, vid):   # xử lý lại từ mp3 gốc (không tốn credit) sau khi đổi proc/TEMPO
    T = tr(lang); _, L = lines(vid); n = 0
    for vi, who in L:
        dst = wav(lang, who, T[vi], model_of(lang, T[vi])); src = LOC / lang / 'el' / (dst.stem + '.mp3')
        if src.exists(): proc(src, dst, CAST[who][2], lang); n += 1
    print('reproc', lang, n)

# câu đọc hỏng (tools/voice_qa.py bắt được) → loc/multi/redo.json {lang: [câu đã dịch]} → tạo lại bằng eleven_v4
REDO = json.load(open(LOC / 'multi' / 'redo.json')) if (LOC / 'multi' / 'redo.json').exists() else {}
def model_of(lang, text=None):
    if text is not None and text in REDO.get(lang, []): return 'eleven_v4'
    return os.environ.get('EL_MODEL', MODEL[lang])

def tts(lang, vid):
    from elevenlabs import ElevenLabs, VoiceSettings
    c = ElevenLabs(); T = tr(lang); _, L = lines(vid); ms = set()
    raw = LOC / lang / 'el'; raw.mkdir(parents=True, exist_ok=True)
    def used():   # endpoint subscription hay 429 trên gói Free → không để nó chặn việc đọc giọng
        try: return c.user.subscription.get().character_count
        except Exception: return None
    used0 = used(); n = 0
    for i, (vi, who) in enumerate(L):
        text = T[vi]; m = model_of(lang, text); dst = wav(lang, who, text, m)
        if dst.exists(): continue
        dst.parent.mkdir(parents=True, exist_ok=True)
        v, st, fx = CAST[who]
        kw = dict(text=text, voice_id=v, model_id=m, language_code=lang, output_format='mp3_44100_128',
                  voice_settings=VoiceSettings(stability=st, similarity_boost=.75))
        if m != 'eleven_v4':   # nối ngữ điệu với câu trước/sau cùng vai
            prev = next((T[x] for x, w in reversed(L[:i]) if w == who), None); nxt = next((T[x] for x, w in L[i + 1:] if w == who), None)
            if prev: kw['previous_text'] = prev
            if nxt: kw['next_text'] = nxt
        src = raw / (dst.stem + '.mp3')
        for k in range(6):   # gói Free hay trả 429 rate_limited → chờ tăng dần rồi thử lại
            try:
                with open(src, 'wb') as f:
                    for ch in c.text_to_speech.convert(**kw): f.write(ch)
                break
            except Exception as e:
                if getattr(e, 'status_code', None) != 429 or k == 5: raise
                import time; time.sleep(10 * (k + 1))
        proc(src, dst, fx, lang); n += 1
    print(f'tts {lang} {vid}: {n} câu mới, credit dùng {(u - used0) if (u := used()) is not None and used0 is not None else "?"}')

def srt_time(t):
    ms = int(round(t * 1000)); return f'{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}'

def chunks(text, t, d):   # như Story.tsx: tách theo dấu câu, chia thời gian theo số ký tự; gộp mẩu ngắn cho dễ đọc
    parts = [p for p in re.split(r'(?<=[.,!?:;…])\s+', text) if p]; out = []
    for p in parts:
        if out and (len(out[-1]) + len(p) < 42 or len(p) < 12): out[-1] += ' ' + p
        else: out.append(p)
    tot = sum(map(len, out)); acc = 0; res = []
    for p in out: a = t + acc / tot * d; acc += len(p); res.append((a, t + acc / tot * d, p))
    return res

def build(vid):
    d, L = lines(vid); T = {l: tr(l) for l in LANGS}; en = T['en']
    order = sorted(range(len(d['voice'])), key=lambda k: d['voice'][k]['t'])
    bp = [(0.0, 0.0)]; shift = 0.0; rows = []
    for k, (vi, who) in zip(order, L):
        v = d['voice'][k]; od = dur(PUB / v['src'])
        per = {l: (wav(l, who, T[l][vi], model_of(l, T[l][vi])), None) for l in LANGS}
        per = {l: (p, dur(p)) for l, (p, _) in per.items()}
        # khe = max, nhưng thứ tiếng dài vượt hẳn thì nén riêng câu đó (≤ 1.1×) về mức thứ tiếng dài nhì → file .fit.wav
        ds = sorted(x[1] for x in per.values()); slot = max(ds[-2], ds[-1] / 1.1)
        for l, (p, dl) in list(per.items()):
            if dl > slot + 0.02:
                fp = p.with_suffix('.fit.wav')
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(p), '-af', f'atempo={dl / slot:.4f}', str(fp)], check=True)
                per[l] = (fp, dur(fp))
        slot = max(x[1] for x in per.values())
        t0 = v['t']; bp.append((t0, t0 + shift)); shift += slot - od; bp.append((t0 + od, t0 + od + shift))
        rows.append((t0, per, vi))
    def W(t):
        for (a, a2), (b, b2) in zip(bp, bp[1:]):
            if t <= b: return a2 + (t - a) * ((b2 - a2) / (b - a) if b > a else 1)
        return t + shift
    base = copy.deepcopy(d)
    for x in base['shots'] + base['cuts'] + base['pops']: x['t0'], x['t1'] = round(W(x['t0']), 3), round(W(x['t1']), 3)
    for x in base['sfx']: x['t'] = round(W(x['t']), 3)
    for x in base['comments']:
        x['t'], x['end'] = round(W(x['t']), 3), round(W(x['end']), 3); x['u'] = en.get(x['u'].strip(), x['u']); x['c'] = en.get(x['c'].strip(), x['c'])
    for x in base['pops']: x['text'] = en.get(x['text'].strip(), x['text'])
    base['mutes'] = [[round(W(a), 3), round(W(b), 3)] for a, b in base['mutes']]
    base['live'] = [[round(W(a), 3), round(W(b), 3)] for a, b in base['live']]
    base['duration'] = round(W(base['duration']), 3); base['subs'] = []
    out = DATA / 'multi'; out.mkdir(parents=True, exist_ok=True); so = ROOT / 'video' / 'out' / 'multi'; so.mkdir(parents=True, exist_ok=True)
    for l in LANGS:
        x = copy.deepcopy(base)
        x['voice'] = [{'t': round(W(t0), 3), 'src': str(per[l][0].relative_to(PUB))} for t0, per, _ in rows]
        json.dump(x, open(out / f'{vid}-{l}.json', 'w'), ensure_ascii=False, indent=0)
        cues = [c for t0, per, vi in rows for c in chunks(T[l][vi], W(t0), per[l][1])]
        open(so / f'{vid}.{l}.srt', 'w').write('\n'.join(f'{i}\n{srt_time(a)} --> {srt_time(b)}\n{p}\n' for i, (a, b, p) in enumerate(cues, 1)))
    comps = sorted(p.stem for p in out.glob('*.json'))
    imp = '\n'.join(f"import t{i} from './data/multi/{s}.json';" for i, s in enumerate(comps))
    reg = '\n'.join(f'    <C id="MULTI-{s.upper()}" tl={{t{i} as unknown as Timeline}} />' for i, s in enumerate(comps))
    open(ROOT / 'video' / 'src' / 'multi.tsx', 'w').write(f"""// SINH TỰ ĐỘNG bởi tools/multi.py build — đừng sửa tay
import React from 'react';
import {{Composition, registerRoot}} from 'remotion';
import {{Story, Timeline}} from './Story';
{imp}
const FPS = 30;
const C: React.FC<{{id: string; tl: Timeline}}> = ({{id, tl}}) => (
  <Composition id={{id}} component={{Story}} defaultProps={{{{tl}}}} durationInFrames={{Math.ceil(tl.duration * FPS)}} fps={{FPS}} width={{tl.w}} height={{tl.h}} />
);
const Root: React.FC = () => (
  <>
{reg}
  </>
);
registerRoot(Root);
""")
    print(vid, d['duration'], '→', base['duration'], 's;', len(rows), 'câu; srt', [f'{vid}.{l}.srt' for l in LANGS])

if __name__ == '__main__':
    {'tts': tts, 'build': build, 'reproc': reproc}[sys.argv[1]](*sys.argv[2:])
