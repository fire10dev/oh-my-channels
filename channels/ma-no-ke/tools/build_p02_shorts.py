# build_p02_shorts.py lines|timeline [SH1 SH2 …] — dữ liệu 7 short P02 (9:16) cho engine Remotion `Story`.
#   lines    → p02/shorts/lines.json: chỉ câu MỚI (câu trùng bản long dùng lại wav đã xử lý fx của long)
#   timeline → fx giọng câu mới vào video/public/p02/vo/s*.wav, ghi video/src/data/p02-shN.json
# TTS câu mới: tts_lines.py p02/shorts/lines.json p02/shorts/tts --best 4 --temp 0.5 (chống giọng trôi vùng miền).
# Khung dọc cắt từ ảnh 2048×1152: rộng tối đa 648 px. Ảnh B (1344×1792): tối đa 1008.
import json, sys, subprocess, hashlib, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from build_p02_long import ROOT, PUB, FX, IW, IH, BW, BH, dur, MANO, sh, img_src, sfx_src

SHORTS = ROOT / 'p02' / 'shorts'
LONG_LINES = {(l['voice'], l['text']): l['i'] for l in json.load(open(ROOT / 'p02' / 'long' / 'lines.json'))}

def _v(cx, cy, w, W=IW, H=IH):
    h = w * 16 / 9
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def V(cx, cy=576): return _v(cx, cy, 648)      # dọc toàn chiều cao
def VC(cx, cy): return _v(cx, cy, 460)         # cận
def VX(cx, cy): return _v(cx, cy, 340)         # rất cận
def BV(cx, cy, w): return _v(cx, cy, w, BW, BH)
BG = dict(blur=14, dark=0.55)
TT = 'B04r'
NOTI = ('🔔 Máy chấm công', 'Nguyễn Văn Phát — CÓ MẶT 03:00')

def outro(text, pop):
    return dict(v='MN', t=text, sh=[sh('S06', V(1024), V(1100), **BG, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
                pop=[(0.0, pop, '#ffd84a')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.0)

S = {}
S['SH1'] = [
  dict(v='MN', t='Máy chấm công xưởng này chỉ có nút vào. Không có nút ra.', sh=[sh('N04', VC(486, 660), VX(486, 640), flash=1)],
       pop=[(0.0, 'CHẤM VÀO ✔ · CHẤM RA ✖', '#ffd84a')], sfx=[(0, 'braam', 0.35), (0.7, 'snap', 0.5)], gap=0.3),
  dict(v='TT', t='Hồ sơ. Xưởng may Phát Đạt. Ba trăm công nhân. Ca đêm đến hai giờ sáng.', sh=[sh('N01', V(870), VC(870, 650)), sh('N01', VC(384, 650), VX(384, 640))], sfx=[(0, 'may', 0.45)]),
  dict(v='MN', t='Giám đốc Phát. Câu cửa miệng: xưởng là nhà.', sh=[sh('N03', V(1150), VC(1150, 470))], pop=[(0.6, 'XƯỞNG LÀ NHÀ ❤', '#ff8fb1')]),
  dict(v='PHAT', t='Tăng ca là cống hiến! Ai về sớm, trừ chuyên cần!', sh=[sh('N12', VC(700, 420), VX(660, 360), shake=5)], pop=[(0.55, 'TRỪ CHUYÊN CẦN', '#ff5a4a')], gap=0.4),
  dict(v='TT', t='Trần Văn Lộc. Tổ may số ba. Hai giờ mười sáng thứ Năm, gục xuống máy may.', sh=[sh('N05', V(900), VC(666, 640))], sfx=[(0.6, 'mayoff', 0.6)]),
  dict(v='TT', t='Không dậy nữa. Sổ ghi: hai giờ mười. Tại xưởng.', sh=[sh('N06', V(1664), VC(1664, 600))], sfx=[(0, 'tick', 0.5)], mute=True, gap=0.6),
  dict(v='HONG', t='Anh Lộc… anh Lộc ơi.', sh=[sh('N05', VC(1434, 460), VX(1434, 440))], mute=True, gap=0.5),
  dict(v='MN', t='Việc đầu tiên lão giám đốc hỏi không phải anh Lộc thế nào. Lão hỏi: chỗ đó camera có quay tới không.',
       sh=[sh('N03', VC(1150, 470), VX(1150, 440)), sh('N04', VC(1075, 420), VX(1075, 360))]),
  outro('Lão định làm gì? Mai tao kể. Bản đầy đủ ở trên kênh.', 'LÃO ĐỊNH LÀM GÌ?'),
]
S['SH2'] = [
  dict(v='MN', t='Ông giám đốc ký vào tờ khai ba chữ: như người nhà. Ba chữ đắt nhất đời ông ấy.', sh=[sh('N08', VC(1203, 743), VX(1203, 800), flash=1)],
       pop=[(0.3, 'NHƯ NGƯỜI NHÀ', '#c58bff')], sfx=[(0, 'braam', 0.35), (0.3, 'dau', 0.7)], gap=0.3),
  dict(v='MN', t='Mất ở xưởng, trong giờ làm, là tai nạn lao động. Phải đền. Thanh tra còn hỏi vì sao máy chấm công không có nút ra.',
       sh=[sh('N07', V(1587), VC(1587, 560)), sh('N04', VC(486, 660), VX(486, 640))]),
  dict(v='MN', t='Nên đêm đó lão tự viết tờ khai. Hai giờ mười, sửa thành năm giờ sáng. Tại xưởng, sửa thành tại nhà.',
       sh=[sh('N07', VC(1357, 743), VX(1357, 850)), sh('N08', VC(1203, 743), VX(1203, 820))],
       pop=[(0.3, '2:10 · TẠI XƯỞNG', '#ffffff', 0.6), (0.62, '→ 5:00 · TẠI NHÀ', '#c58bff')], sfx=[(0.3, 'but', 0.7), (0.62, 'but', 0.7)]),
  dict(v='MN', t='Vợ anh Lộc ở quê chưa lên kịp. Lão ký luôn chỗ người khai. Mục quan hệ, lão viết: như người nhà.',
       sh=[sh('N11', VC(345, 520), VX(345, 480)), sh('N08', V(1203), VC(1203, 743))],
       pop=[(0.55, 'NGƯỜI KHAI: NGUYỄN VĂN PHÁT', '#c58bff', 0.8), (0.8, 'QUAN HỆ: NHƯ NGƯỜI NHÀ', '#c58bff')], sfx=[(0.6, 'but', 0.6), (0.9, 'dau', 0.7)]),
  dict(v='MN', t='Chị tổ trưởng Hồng đứng sau cửa. Thấy hết.', sh=[sh('N07', V(324), VC(230, 560))]),
  dict(v='PHAT', t='Giấy ghi thế nào, sự thật là thế.', sh=[sh('N07', VC(1587, 520), VX(1587, 500))], gap=0.6),
  dict(v='TT', t='Năm giờ sáng… là giờ trùng.', sh=[sh('N10', VC(742, 609), VX(1075, 330))], pop=[(0.5, 'GIỜ TRÙNG', '#ff5a4a')], sfx=[(0.5, 'braam', 0.4)], gap=0.4),
  outro('Giờ trùng là gì? Mai tao kể. Theo dõi đi.', 'GIỜ TRÙNG LÀ GÌ?'),
]
S['SH3'] = [
  dict(v='TT', t='Ai mất vào giờ này, ta phải quay lại điểm danh thêm một người nhà.', sh=[sh('N10', VX(742, 609), VC(1075, 420), flash=1)],
       pop=[(0.0, 'GIỜ TRÙNG', '#ff5a4a')], sfx=[(0, 'mo', 0.8)], gap=0.3),
  dict(v='TT', t='Ta không đọc đồng hồ. Ta đọc giấy. Giấy là thủ tục. Thủ tục là ta.', sh=[sh('N09', V(1075), VC(1075, 420))], sfx=[(0.98, 'mo', 0.8)]),
  dict(v='MN', t='Nên đêm đó lão tự viết tờ khai. Hai giờ mười, sửa thành năm giờ sáng. Tại xưởng, sửa thành tại nhà.',
       sh=[sh('N07', VC(1357, 743), VX(1357, 850)), sh('N08', VC(1203, 743), VX(1203, 820))],
       pop=[(0.3, '2:10 · TẠI XƯỞNG', '#ffffff', 0.6), (0.62, '→ 5:00 · TẠI NHÀ', '#c58bff')], sfx=[(0.3, 'but', 0.7), (0.62, 'but', 0.7)]),
  dict(v='TT', t='Người nhà anh Lộc: một người vợ. Ở quê.', sh=[sh('N11', V(345), VC(345, 520))], mute=True, gap=0.8),
  dict(v='MN', t='Khoan khoan. Giám đốc sửa giấy, mà nhà người ta phải trả à?', sh=[sh('S26', V(900), VC(820, 420), shake=8)], sfx=[(0.05, 'bassdown', 0.6)], gap=0.3),
  dict(v='PHAT', t='Trùng tang là mê tín! Ai nghỉ làm vì ma, trừ lương!', sh=[sh('N12', VC(700, 420), VX(660, 360), shake=6)], pop=[(0.75, 'TRỪ LƯƠNG', '#ff5a4a')]),
  dict(v='MN', t='Ông thầy đầu ngõ lại bán vòng chống trùng, giảm năm mươi phần trăm. Vẫn ông ấy.', sh=[sh('S19', V(1550), VC(1600, 480))], pop=[(0.45, '-50%', '#ffd84a')], sfx=[(0.45, 'pop', 0.6)]),
  dict(v='TT', t='Ba giờ sáng thứ Bảy. Ta đến xưởng.', sh=[sh('N14', V(1229), VC(1229, 420))], pop=[(0.05, '3:00 SÁNG', '#ffd84a')], sfx=[(0.6, 'mo3', 0.9)], mute=True, gap=0.6),
  outro('Ai bị điểm danh? Mai tao kể. Theo dõi đi.', 'AI BỊ ĐIỂM DANH?'),
]
S['SH4'] = [
  dict(v=None, dur=2.2, sh=[sh('N14', V(1300), VC(1229, 420), dark=0.2, flash=1)], pop=[(0.0, '3:00 SÁNG · XƯỞNG VẮNG TANH', '#ffd84a')], sfx=[(0.1, 'mo3', 0.9)], mute=True),
  dict(v='TT', t='Ba giờ sáng thứ Bảy. Xưởng may. Ta gõ mõ ba nhịp, mở hồ sơ.', sh=[sh('N14', VC(1536, 700), VX(1536, 720))], mute=True),
  dict(v='TT', t='Cần điểm danh: một người nhà. Tờ khai ghi: Nguyễn Văn Phát. Như người nhà.', sh=[sh('N08', V(1203), VC(1203, 743))],
       pop=[(0.75, 'NHƯ NGƯỜI NHÀ', '#c58bff')], sfx=[(0.1, 'lat', 0.6)]),
  dict(v='TT', t='Ta điểm danh người nhà.', sh=[sh('N14', VC(1229, 420), VX(1229, 369))], gap=0.1),
  dict(v=None, dur=1.4, sh=[sh('N15', VC(1024, 743), VX(1024, 850), flash=1, shake=4)], sfx=[(0, 'in', 1)], pop=[(0.15, 'NGUYỄN VĂN PHÁT', '#ff5a4a')]),
  dict(v='MN', t='Cùng giây đó, điện thoại giám đốc sáng lên.', sh=[sh('N13', V(900), VC(1024, 568))],
       com=[(0.7, *NOTI)], sfx=[(0.7, 'rung', 0.8), (0.75, 'mo3', 0.8)], gap=1.8),
  dict(v='PHAT', t='Tôi là giám đốc! Tôi không phải người nhà nó!', sh=[sh('N13', VC(717, 420), VX(717, 338), shake=10)], sfx=[(0, 'rung', 0.6)], gap=0.4),
  outro('Thần trùng trả lời sao? Mai tao kể. Theo dõi đi.', 'THẦN TRÙNG NÓI GÌ?'),
]
S['SH5'] = [
  dict(v='PHAT', t='Tôi… tôi còn sống mà? Điểm danh tôi làm gì?', sh=[sh('N13', VC(1024, 568), VX(717, 338), flash=1, shake=6)],
       com=[(0.0, *NOTI)], sfx=[(0, 'rung', 0.8)], gap=0.4),
  dict(v='TT', t='Giấy anh ký. Giấy ghi thế nào, sự thật là thế.', sh=[sh(TT, BV(716, 700, 760), BV(716, 600, 560))],
       pop=[(0.35, 'GIẤY GHI THẾ NÀO, SỰ THẬT LÀ THẾ', '#ffffff')], sfx=[(0.35, 'bassdown', 0.5)], gap=0.5),
  dict(v='MN', t='Đấy. Nhầm. Nhưng nhầm đúng quy trình. Nhờ cái nhầm ấy, vợ anh Lộc ở quê vẫn ngủ ngon.', sh=[sh('S01', V(920), VC(920, 420)), sh('N11', VC(345, 520), VX(345, 480))]),
  dict(v='PHAT', t='Tha cho tôi! Tôi đốt cho ông cái xe hơi!', sh=[sh('N23', VC(1306, 450), VX(1306, 360), shake=8)]),
  dict(v='TT', t='Ta đi làm bằng xe đạp. Mạng anh chưa đến giờ. Ta không lấy.', sh=[sh(TT, BV(716, 650, 700), BV(716, 600, 560))], sfx=[(0.1, 'chuong', 0.6)]),
  dict(v='TT', t='Ta không lấy mạng. Ta lấy… thứ khác.', sh=[sh('N19', VC(1766, 743), VX(1766, 819))], sfx=[(0.7, 'dau', 0.8)], gap=0.5),
  outro('Lấy gì? Đoán đi, comment xuống dưới. Mai tao kể.', 'LẤY GÌ? ↓'),
]
S['SH6'] = [
  dict(v='MN', t='Giám đốc quỳ để tang công nhân của mình. Mỗi đêm, ba giờ sáng.', sh=[sh('N16', VC(947, 420), VX(947, 330), flash=1)],
       pop=[(0.0, '3:00 SÁNG · MỖI ĐÊM', '#ffd84a')], sfx=[(0, 'braam', 0.35)], gap=0.3),
  dict(v='TT', t='Ta lấy lịch của anh.', sh=[sh('N19', VC(1766, 743), VX(1766, 819))], sfx=[(0.6, 'dau', 0.8)], gap=0.4),
  dict(v='TT', t='Người nhà thì phải để tang. Ba giờ sáng mỗi đêm, quấn khăn, quỳ trước ảnh anh Lộc. Như con trai.',
       sh=[sh('N16', V(1200), VC(1280, 700)), sh('N16', VC(947, 420), VX(947, 360))]),
  dict(v='MN', t='Ban ngày đi gặp đối tác. Khăn tang không tháo ra được.', sh=[sh('N17', V(600), VC(512, 420)), sh('N17', VC(1400, 440), VX(1400, 420))],
       sfx=[(0.75, 'de', 0.7)], pop=[(0.8, '?', '#ffffff')]),
  dict(v='MN', t='Đêm nào lão ngủ quên, máy chấm công tự in tên. Sáng ra, tên giám đốc dán kín cửa xưởng.',
       sh=[sh('N15', VC(1024, 743), VX(1024, 850), shake=6), sh('N15', VX(1024, 850), VX(1024, 820), shake=10, flash=1)], sfx=[(0.3, 'indon', 0.9), (0.7, 'indon', 0.9)],
       pop=[(0.3, 'NGUYỄN VĂN PHÁT — CÓ MẶT', '#ff5a4a', 0.7), (0.7, 'NGUYỄN VĂN PHÁT ×49', '#ff5a4a')]),
  dict(v='PHAT', t='Bao giờ mới hết?', sh=[sh('N23', VC(1741, 450), VX(1741, 430))], gap=0.4),
  dict(v='TT', t='Khi giấy đúng. Hết bốn mươi chín ngày mà giấy vẫn sai, ta điểm danh lần nữa. Lần đó không cần thẻ.',
       sh=[sh(TT, BV(716, 750, 900), BV(716, 600, 520))], sfx=[(0.98, 'mo', 0.9)], mute=True, gap=0.8),
  outro('Lão có sửa giấy không? Bản đầy đủ ở trên kênh. Theo dõi đi.', 'LÃO CÓ SỬA KHÔNG?'),
]
S['SH7'] = [
  dict(v='TT', t='Ta không lấy mạng nó. Ta lấy lịch của nó.', sh=[sh('N20', VC(1024, 470), VX(1024, 430), flash=1)], sfx=[(0, 'mo', 0.8)], gap=0.3),
  dict(v='MN', t='Đêm thứ bốn mươi tám, lão tự sửa lại giấy. Hai giờ mười. Tại xưởng. Tai nạn lao động. Tiền đền đến tay vợ anh Lộc.',
       sh=[sh('N19', V(700), VC(614, 420)), sh('N19', VC(1100, 743), VX(1200, 700))], pop=[(0.3, '2:10 · TẠI XƯỞNG ✔', '#7dff9a')], sfx=[(0.3, 'but', 0.6)]),
  dict(v='TT', t='Hai giờ mười không phải giờ trùng. Hồ sơ không còn người nhà. Hết thẩm quyền.', sh=[sh('N10', V(1075), VC(1075, 420))], sfx=[(0.95, 'lat', 0.7)]),
  dict(v='MN', t='Máy chấm công giờ có nút ra. Tăng ca thì tính tiền.', sh=[sh('N21', V(870), VC(1485, 676))], pop=[(0.35, 'CHẤM RA ✔', '#7dff9a')],
       sfx=[(0.35, 'pop', 0.6), (0.4, 'cheer', 0.25, 2.5)]),
  dict(v='TT', t='À. Ba đêm nó quỳ muộn. Tháng này, trừ chuyên cần.', sh=[sh('N20', VC(1024, 470), VX(1024, 430)), sh('N22', VC(1792, 420), VX(1792, 400))],
       pop=[(0.6, 'TRỪ CHUYÊN CẦN', '#ff5a4a')], sfx=[(0.98, 'mo', 0.9)], gap=0.6),
  dict(v='MN', t='Ba trăm năm ngồi nóc tủ, lần đầu tao thấy âm phủ làm việc đúng giờ hơn công ty.', sh=[sh('S33', V(1300), VC(1300, 520)), sh('S34', V(880), VC(880, 420))]),
  dict(v='MN', t='Tuần sau: đứa trẻ giữ của ba đời trong căn nhà phố cổ, và cái hũ không ai được mở.', sh=[sh('B05', BV(517, 1000, 900), BV(517, 950, 600))],
       pop=[(0.05, 'TUẦN SAU', '#ffd84a')], sfx=[(0.05, 'whoosh', 0.5)]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì ba giờ sáng nay, máy chấm công nhà mày in tên mày đấy.',
       sh=[sh('S06', V(1024), V(1100), **BG, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
       pop=[(0.05, 'ĐĂNG KÝ', '#ffffff')], sfx=[(0, 'whoosh', 0.5), (0.75, 'in', 0.7), (0.98, 'coc', 1)], gap=1.2),
]

def key(v, t): return int(hashlib.md5(f'{v}|{t}'.encode()).hexdigest()[:7], 16)

def voice_src(v, t):
    if (v, t) in LONG_LINES: return f"p02/vo/{LONG_LINES[(v, t)]:03d}.wav"
    return f"p02/vo/s{key(v, t)}.wav"

def new_lines():
    seen, out = set(), []
    for spec in S.values():
        for it in spec:
            if it['v'] and (it['v'], it['t']) not in LONG_LINES and (it['v'], it['t']) not in seen:
                seen.add((it['v'], it['t'])); out.append({'i': key(it['v'], it['t']), 'voice': it['v'], 'text': it['t']})
    return out

def timeline(name, W=1080, H=1920):
    for l in new_lines():
        src = SHORTS / 'tts' / f"{l['i']:03d}.wav"; dst = PUB / 'p02' / 'vo' / f"s{l['i']}.wav"
        if src.exists() and (not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime):
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', FX[l['voice']] + ',aresample=48000', '-ac', '2', str(dst)], check=True)
    for im in {s['img'] for it in S[name] for s in it['sh']}:
        dst = PUB / 'p02' / 'img' / f'{im}.png'
        if not dst.exists(): dst.write_bytes(img_src(im).read_bytes())
    t, shots, cuts, pops, sfx, subs, coms, voice, mutes, live = 0.15, [], [], [], [], [], [], [], [], []
    for it in S[name]:
        if it['v']:
            src = voice_src(it['v'], it['t']); d = dur(PUB / src)
            voice.append({'t': round(t, 3), 'src': src}); subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
        else:
            d = it['dur']
        span = d + it.get('gap', 0.25); n = len(it['sh'])
        for k, s in enumerate(it['sh']):
            t0, t1 = t + span * k / n, t + span * (k + 1) / n
            w, h = (BW, BH) if s['img'].startswith('B') else (IW, IH)
            shots.append({'img': f"p02/img/{s['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': s['a'], 'b': s['b'],
                          **{k2: s[k2] for k2 in ('shake', 'flash', 'blur', 'dark') if k2 in s}})
            if 'cut' in s:
                c = s['cut']; cuts.append({'img': c['img'], 'size': c['size'], 't0': round(t0, 3), 't1': round(t1, 3), 'from': c['frm'], 'to': c['to'], 'bob': bool(c.get('bob'))})
        for x in it.get('pop', []):
            fr, text, color = x[:3]; t1 = t + d * x[3] if len(x) > 3 else t + span
            pops.append({'t0': round(t + d * fr, 3), 't1': round(t1, 3), 'text': text, 'color': color})
        for x in it.get('sfx', []):
            fr, nm, vol = x[:3]
            sfx.append({'t': round(t + d * fr, 3), 'src': sfx_src(nm), 'vol': vol, **({'dur': x[3]} if len(x) > 3 else {})})
        for fr, u, c in it.get('com', []):
            coms.append({'t': round(t + d * fr, 3), 'u': u, 'c': c, 'end': round(t + span, 3)})
            sfx.append({'t': round(t + d * fr, 3), 'src': 'sh6/sfx/pop.wav', 'vol': 0.45})
        if it.get('mute'): mutes.append([round(t - 0.2, 3), round(t + span, 3)])
        if it.get('live'): live.append([round(t, 3), round(t + span, 3)])
        t += span
    total = round(t + 0.5, 3)
    out = ROOT / 'video' / 'src' / 'data' / f'p02-{name.lower()}.json'
    json.dump({'w': W, 'h': H, 'duration': total, 'shots': shots, 'cuts': cuts, 'pops': pops, 'sfx': sfx, 'subs': subs, 'comments': coms,
               'voice': voice, 'mutes': mutes, 'live': live, 'music': {'src': 'p01/music.wav', 'len': 121.0, 'vol': 0.13}},
              open(out, 'w'), ensure_ascii=False, indent=0)
    words = sum(len(it['t'].split()) for it in S[name] if it['v'])
    print(name, total, 's,', len(shots), 'shots,', words, 'chữ')

if __name__ == '__main__':
    if sys.argv[1] == 'lines':
        SHORTS.mkdir(parents=True, exist_ok=True); L = new_lines()
        json.dump(L, open(SHORTS / 'lines.json', 'w'), ensure_ascii=False, indent=0); print(len(L), 'câu mới')
    else:
        for n in sys.argv[2:] or list(S): timeline(n)
