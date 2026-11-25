# tts_lines.py LINES.json OUTDIR [--best N] [--temp T] [--force]  — VieNeu, mỗi câu 1 wav, chạy lại được (bỏ qua file đã có)
#   --best N: sinh N bản mỗi câu, giữ bản có speaker embedding giống preset nhất (chống giọng trôi Bắc/Trung/Nam).
#   Ghi điểm giống (cosine) vào OUTDIR/scores.json. Mặc định N=1, T=0.8 như P01.
import json, sys, pathlib, time, argparse
import numpy as np
from vieneu import Vieneu
VOICE = {'MN': 'Thiện Minh', 'BT': 'Ngọc Linh', 'TUNG': 'Thanh Bình', 'HANH': 'Quỳnh Anh',
         'TT': 'Thiền Tâm Đức', 'PHAT': 'Adam bựa', 'HONG': 'Ngọc Huyền',
         'MX': 'Trúc Ly', 'KHAI': 'Hải Đăng', 'VY': 'Mai Anh',
         'MG': 'Thanh Bình', 'ME': 'Ngọc Huyền', 'BIN': 'Trúc Ly', 'BO': 'Quốc Tuấn'}
ap = argparse.ArgumentParser(); ap.add_argument('lines'); ap.add_argument('out')
ap.add_argument('--best', type=int, default=1); ap.add_argument('--temp', type=float, default=0.8); ap.add_argument('--force', action='store_true')
A = ap.parse_args()
L = json.load(open(A.lines)); out = pathlib.Path(A.out); out.mkdir(parents=True, exist_ok=True)
v = Vieneu(); t0 = time.time(); n = 0
sc_path = out / 'scores.json'; scores = json.load(open(sc_path)) if sc_path.exists() else {}
emb = lambda p: np.asarray(v._enroll_reference(str(p), denoise=False, use_ref_codes=False)[0]).ravel()
cos = lambda a, b: float(a @ b / np.linalg.norm(a) / np.linalg.norm(b))
for it in L:
    if it['voice'] == 'SFX': continue
    f = out / f"{it['i']:03d}.wav"
    if not A.force and f.exists() and f.stat().st_size > 1000: continue
    name = it.get('preset') or VOICE[it['voice']]; ref = np.asarray(v._preset_voices[name]['speaker_emb']).ravel()
    best = (-1, None)
    for k in range(A.best):
        try:
            w = v.infer(it['text'], voice=name, temperature=A.temp)
        except Exception as e:
            print('ERR', it['i'], e, flush=True); continue
        if A.best == 1: best = (0, w); break
        tmp = out / f".cand{it['i']}.wav"; v.save(w, str(tmp)); s = cos(emb(tmp), ref); tmp.unlink()
        if s > best[0]: best = (s, w)
    if best[1] is None: continue
    v.save(best[1], str(f)); n += 1
    if A.best > 1: scores[str(it['i'])] = round(best[0], 3)
    if n % 10 == 0: print(f"{n} câu, {time.time()-t0:.0f}s", flush=True)
if A.best > 1: json.dump(scores, open(sc_path, 'w'), indent=0)
print('XONG', n, f"{time.time()-t0:.0f}s", flush=True)
