# v3_lines.py (wav đặt tên theo hash giọng|lời, sửa v3 chỉ đọc lại câu đổi)
# scripts/pNN-*-v3.md — trích lời thoại v3 → pNN/long/lines.json + pNN/shorts/lines.json (chỉ câu chưa có ở LONG),
# mỗi câu kèm preset VieNeu từ khối ```json voices``` (tts_lines.py đọc field preset). Ghi pNN/voices.json (preset + fx) cho builder.
import sys, re, json, pathlib, hashlib
p = pathlib.Path(sys.argv[1]); s = p.read_text(); n = re.match(r'p(\d+)-', p.name).group(1)
ROOT = p.resolve().parent.parent; D = ROOT / f'p{n}'
voices = json.loads(re.search(r'```json voices\s*(\{.*?\})\s*```', s, re.S).group(1))
LINE = re.compile(r'\*\*([A-ZĐ0-9]+)\*\*:\s*(.+?)(?=<br>|\s*\|\s|\s+\([A-Z][A-Z0-9 →/,]*\)|\s*·|$)', re.M)
def sec(name):
    a = s.find(f'## {name}'); b = s.find('\n## ', a + 3); return s[a:b if b > 0 else len(s)]
clean = lambda t: t.strip().strip('"“”').strip()
long = [(c, clean(t)) for c, t in LINE.findall(sec('LONG'))]
seen = {}
L = []
for c, t in long:
    if (c, t) in seen: continue
    seen[(c, t)] = len(L) + 1; L.append({'i': int(hashlib.md5(f'{c}|{t}'.encode()).hexdigest()[:7], 16), 'order': len(L) + 1, 'voice': c, 'preset': voices[c]['preset'], 'text': t})
S, ss = [], set()
for c, t in ((c, clean(t)) for c, t in LINE.findall(sec('SHORTS'))):
    if (c, t) in seen and c != 'MN' or (c, t) in ss: continue
    ss.add((c, t)); S.append({'i': int(hashlib.md5(f'{c}|{t}'.encode()).hexdigest()[:7], 16), 'voice': c, 'preset': voices[c]['preset'], 'text': t})
for sub, data in (('long', L), ('shorts', S)):
    (D / sub).mkdir(parents=True, exist_ok=True); json.dump(data, open(D / sub / 'lines.json', 'w'), ensure_ascii=False, indent=0)
json.dump(voices, open(D / 'voices.json', 'w'), ensure_ascii=False, indent=1)
print(f'p{n}: LONG {len(L)} câu, SHORTS {len(S)} câu mới, giọng {list(voices)}')
