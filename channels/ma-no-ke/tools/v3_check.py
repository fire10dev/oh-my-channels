# v3_check.py scripts/pNN-*-v3.md [--json] — kiểm khuôn v3: số chữ LONG (560–600), mỗi short 70–110 chữ (≈30–40 s),
# câu mồi tập sau không nêu thứ/ngày, mã giọng có trong khối ```json voices```, preset hợp lệ/không trùng, ảnh thuộc danh sách cho phép. In báo cáo; exit 1 nếu lỗi.
import sys, re, json
p = sys.argv[1]; s = open(p).read()
PRESETS = {'Thiện Minh','Adam bựa','Trúc Ly','Mai Anh','Hải Đăng','Thiền Tâm Đức','Ngọc Huyền','Minh Đức','Phạm Tuyên','Xuân Vĩnh','Thanh Bình','Ngọc Linh','Đoan Trang','Quỳnh Anh','Quốc Tuấn'}
LINE = re.compile(r'\*\*([A-ZĐ0-9]+)\*\*:\s*(.+?)(?=<br>|\s*\|\s|\s+\([A-Z][A-Z0-9 →/,]*\)|\s*·|$)', re.M)  # khớp v3_lines.py
err = []
m = re.search(r'```json voices\s*(\{.*?\})\s*```', s, re.S)
voices = json.loads(m.group(1)) if m else {}
if not m: err.append('thiếu khối ```json voices```')
pre = [v['preset'] for v in voices.values()]
for k, v in voices.items():
    if v['preset'] not in PRESETS: err.append(f'preset lạ {k}={v["preset"]}')
if len(pre) != len(set(pre)): err.append(f'preset trùng: {pre}')
def sec(name, nxt):
    a = s.find(f'## {name}'); b = s.find('\n## ', a + 3)
    return s[a:b if b > 0 else len(s)] if a >= 0 else ''
L = sec('LONG', 'SHORTS'); SH = sec('SHORTS', 'Hình'); H = sec('Hình', 'Lịch')
def lines(txt): return [(c, t.strip()) for c, t in LINE.findall(txt)]
ll = lines(L); lw = sum(len(t.split()) for _, t in ll)
rep = [f'LONG: {len(ll)} câu, {lw} chữ (đích 560–600)']
if re.search(r'bến cát lậu|ma da bảy năm', L) and not re.search(r'/p0[45]-', p): err.append('teaser chép của mẫu P04 (ma da) — phải nhá tập sau')
# Luật 2026-11-24: câu mồi tập sau KHÔNG nêu thứ/ngày (lịch hay dời) — chỉ "Tập sau: …", chữ trên hình "TẬP SAU".
DAYW = r'(?:Thứ (?:Hai|Ba|Tư|Năm|Sáu|Bảy)|Chủ [Nn]hật|Tối mai|Tuần sau|Tuần tới)\b'
sh7 = next((b for b in re.split(r'\n### ', SH)[1:] if b.startswith('SH7')), '')
for c, t in ll[-3:] + lines(sh7)[-3:]:
    if c == 'MN' and re.match(DAYW, t): err.append(f'câu mồi nêu thứ/ngày: "{t[:40]}…" → đổi thành "Tập sau: …"')
for o in re.findall(r'[^"“|\n]*·\s*(?:THỨ|Thứ|T[2-7]\b)[^"”|\n]*', L + SH):
    if re.search(r'TẬP|Tập', o): err.append(f'chữ trên hình nêu thứ: "{o.strip()}" → "TẬP SAU"')
if not 540 <= lw <= 620: err.append(f'LONG {lw} chữ, cần 560–600')
for c, _ in ll + lines(SH):
    if c not in voices: err.append(f'mã giọng {c} không có trong voices')
allowed = set(re.findall(r"\|\s*([A-Z]{1,2}\d{2})\s*\|", H)) | set(re.findall(r"\*\*([A-Z]{1,2}\d{2})\*\*", H)) | {'B02','S01','S06','S26','S33','S34'} | set(re.findall(r'\bB\d{2}\b', H))
used = set(re.findall(r'\b([A-Z]\d{2})\b', L + SH))
bad = sorted(u for u in used - allowed if not u.startswith('P'))
if bad: err.append(f'ảnh ngoài danh sách: {bad}')
for blk in re.split(r'\n### ', SH)[1:]:
    name = blk.split('\n', 1)[0]; w = sum(len(t.split()) for _, t in lines(blk))
    rep.append(f'{name}: {w} chữ (đích 70–110)')
    if not 70 <= w <= 115: err.append(f'{name.split(" ")[0]} {w} chữ, cần 70–110')
print('\n'.join(rep)); print('LỖI:' if err else 'OK'); [print(' -', e) for e in err]
sys.exit(1 if err else 0)
