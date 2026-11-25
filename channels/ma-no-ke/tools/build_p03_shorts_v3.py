# build_p03_shorts_v3.py — BẢN CŨ (khuôn intro chung + kết lửng, 29–34 s), giữ để tham chiếu; khuôn mới xem build_p03_shorts.py (nghiên cứu 11).
#   [TEASER 1–3 s: câu móc + pop câu hỏi = khung bìa]  →  [INTRO chung mọi short ~10 s: phố cổ, cái hũ, ma xó tự giới thiệu]
#   →  [THÂN: hook chính của short, cắt từ long]  →  [KẾT LỬNG: câu hỏi chưa trả lời + chỉ link bản đầy đủ (Related video)]
#   lines    → p03/shorts/lines.json (chỉ câu MỚI; câu trùng long dùng lại wav đã fx của long)
#   timeline → fx câu mới vào video/public/p03/vo/s*.wav, ghi video/src/data/p03-shN.json
# TTS câu mới: tts_lines.py p03/shorts/lines.json p03/shorts/tts --best 4 --temp 0.5
import json, sys, subprocess, hashlib, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from build_p03_long import ROOT, PUB, FX, TUONG, MANO, KH, IW, IH, BW, BH, dur, sh, img_src, sfx_src

SHORTS = ROOT / 'p03' / 'shorts'
LONG_LINES = {(l['voice'], l['text']): l['i'] for l in json.load(open(ROOT / 'p03' / 'long' / 'lines.json'))}
FAST = {'MN': 'atempo=1.06,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25'}   # Ma Nó kể nhanh hơn long (0.92)

def _v(cx, cy, w, W=IW, H=IH):
    h = w * 16 / 9
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def V(cx, cy=576): return _v(cx, cy, 648)
def VC(cx, cy): return _v(cx, cy, 460)
def VX(cx, cy): return _v(cx, cy, 340)
def BV(cx, cy, w): return _v(cx, cy, w, BW, BH)
LINK = '▼ BẢN ĐẦY ĐỦ: LINK DƯỚI'

# INTRO chung: một đoạn dẫn, mọi short dùng y hệt (cùng wav) → khán giả lướt short nào cũng biết ma xó là ai.
INTRO = [   # v2 (brainstorm 09): 1 câu ~5 s, ma xó ngay trong câu
  dict(v='MN', t='Căn nhà ba đời có một đứa bé ngồi xó bếp. Nó canh một cái hũ, không cho ai mở.',
       sh=[sh('X06', VC(816, 720), VX(816, 720)), sh('B05', BV(560, 1100, 800), BV(600, 1200, 620))], sfx=[(0, 'chuonggio', 0.5)],
       pop=[(0.0, 'MA XÓ', '#ffd84a', 0.55), (0.55, 'CẤM MỞ HŨ', '#ff5a4a')], gap=0.2),
]

def end(text, pop):
    """Kết lửng: Ma Nó (MC kênh) bay vào nói — kiểu P02 'Mai tao kể' (user 2026-11-22 thích hơn kết lời dẫn trên hình truyện)."""
    return dict(v='MN', t=text, sh=[sh('S06', V(1024), V(1100), blur=14, dark=0.55, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
                pop=[(0.0, pop, '#ffd84a', 0.6), (0.6, LINK, '#ffffff')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.2)

S = {}
# SH1 — Tiếng đếm sau tường (đêm thứ Sáu trong kho). Kết lửng: 413 cái gì?
S['SH1'] = [
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba.', sh=[sh('X10', VC(1504, 420), VX(1504, 330), dark=0.15)],
       pop=[(0.0, 'AI ĐANG ĐẾM?', '#ffd84a')], sfx=[(0, 'khoa', 0.9)], mute=True, gap=0.3),
  *INTRO,
  dict(v='MN', t='Đêm thứ Sáu, ông Khải vác xẻng xuống bếp. Định lấy vàng trước khi giao nhà.',
       sh=[sh('X09', V(900), V(1100)), sh('X09', VC(1792, 600), VX(1792, 600))], pop=[(0.5, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0, 'de', 0.6)]),
  dict(v='MN', t='Ông chui vào kho lấy cuốc. Cửa kho đóng lại.', sh=[sh('X10', V(736), VC(736, 520))], sfx=[(0.85, 'khoa', 1)], mute=True),
  dict(v='KHAI', t='Mở cửa! Tao là chủ nhà!', sh=[sh('X10', V(736), V(736), dark=0.2, shake=6, cut=KH(2, 'c', 1080, 1920, 0.48, 7))], mute=True),
  dict(v='MX', t='Con biết, ông ạ. Bán nhà thì phải kiểm kê. Cụ dặn. Con đếm cho ông nghe.',
       sh=[sh('X10', VX(1504, 330), VX(1504, 300)), sh('B05', BV(440, 950, 700), BV(440, 950, 520))], mute=True),
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba. Hết.', sh=[sh('X10', V(1000), V(1100), dark=0.35, blur=3, shake=3, cut=KH(1, 'c', 1080, 1920, 0.62, 5))],
       pop=[(0.8, '413', '#ff5a4a')], mute=True, gap=1.2),
  end('Bốn trăm mười ba cái gì? Không phải vàng đâu. Tao kể hết ở bản đầy đủ, link ngay dưới.', '413 CÁI GÌ?'),
]
# X10: ma xó ngồi bao tải ~ (1504, 300) — không phải 1776. Khải: dùng cutout KH(pose, …) trên nền cảnh, không crop X11.
# Thứ tự đăng (brainstorm 09, Codex): SH1 → SH3 → SH4 → SH2 → SH5 → SH6 → SH7.
def kh(pose, h=0.6, wob=3): return KH(pose, 'c', 1080, 1920, h, wob)
S['SH2'] = [   # Bán vé xem bàn thờ
  dict(v='MX', t='Bán nhà là của ra khỏi nhà. Con phải giữ.', sh=[sh('B05', BV(440, 950, 600), BV(440, 950, 480), flash=1)],
       pop=[(0.0, 'MA XÓ KHÔNG CHO BÁN', '#ffd84a')], sfx=[(0.05, 'bassdown', 0.5)], mute=True, gap=0.3),
  *INTRO,
  dict(v='KHAI', t='Welcome! Nhà cổ ba đời, giữ trọn hồn phố cổ. Hai triệu một đêm, chụp bàn thờ thêm năm mươi nghìn.',
       sh=[sh('X02', V(432, 576), VC(432, 520)), sh('X02', V(1450), VC(1450, 480))],
       pop=[(0.2, 'GIỮ HỒN PHỐ CỔ', '#ffd84a', 0.5), (0.5, '2.000.000đ / ĐÊM', '#ffffff', 0.75), (0.75, '+50K CHỤP BÀN THỜ', '#ff8fb1')], sfx=[(0.82, 'tach', 0.8), (0.9, 'tach', 0.8)]),
  dict(v='MN', t='Giữ hồn phố cổ bằng cách bán vé xem bàn thờ. Cụ cố mà biết thì cụ thu phí lại.', sh=[sh('S26', V(900, 480), VC(820, 420), shake=6)], gap=0.4),
  dict(v='VY', t='Sáu mươi tỷ. Đập trắng bên trong. Giữ lại cái cổng rêu cho khách Tây chụp ảnh bảo tồn.', sh=[sh('X03', VC(560, 490), VX(560, 470)), sh('X03', VC(1056, 880), VX(1056, 860))],
       pop=[(0.08, '60 TỶ', '#ffd84a')], sfx=[(0.08, 'xu', 0.7), (0.35, 'khoan', 0.45)]),
  dict(v='KHAI', t='Ký! Đập luôn cái bếp cũng được.', sh=[sh('X02', V(1450), V(1450), blur=4, dark=0.2, cut=kh(0))], gap=0.6),
  end('Đập cái bếp, tức là đập chỗ ma xó ngồi. Nó giữ nhà kiểu gì? Tao kể hết ở bản đầy đủ, link ngay dưới.', 'GIỮ KIỂU GÌ?'),
]
S['SH3'] = [   # Thợ đo không chạm tường
  dict(v='MN', t='Nhà sâu mười mét. Kéo thước mãi không chạm tường.', sh=[sh('X04', VC(1760, 420), VX(1760, 400), flash=1)],
       pop=[(0.0, '10 MÉT… ?', '#ffd84a')], sfx=[(0.1, 'thuoc', 0.8)], gap=0.3),
  *INTRO,
  dict(v='MN', t='Buổi khảo sát thứ nhất: cửa tự khóa. Thợ đo ngồi trong nhà vệ sinh hai tiếng.', sh=[sh('X04', V(928, 500), VC(928, 500))],
       pop=[(0.02, 'BUỔI 1', '#ffffff', 0.4)], sfx=[(0.42, 'khoa', 0.9)]),
  dict(v='MN', t='Buổi thứ hai: căn nhà sâu mười mét, thợ kéo thước mãi không chạm tường sau. Nhìn đồng hồ, đã hai giờ sáng.',
       sh=[sh('X04', VC(1760, 500), VX(1760, 420)), sh('X04', VC(928, 520), VX(928, 480))],
       pop=[(0.02, 'BUỔI 2', '#ffffff', 0.3), (0.32, '10 m… ?', '#ffd84a', 0.75), (0.8, '2:00 SÁNG', '#ffd84a')], sfx=[(0.3, 'thuoc', 0.8), (0.78, 'tick', 0.5)]),
  dict(v='MN', t='Khách Tây để lại review một sao: phòng có trẻ con đếm tiền cả đêm.', sh=[sh('X01', V(1024), VC(1264, 560), blur=10, dark=0.35)],
       com=[(0.35, '★☆☆☆☆  Khách Tây', 'Phòng có trẻ con đếm tiền cả đêm.')], pop=[(0.3, '★☆☆☆☆ REVIEW 1 SAO', '#ffd84a')]),
  dict(v='MX', t='Con không dọa ai. Con chỉ đếm.', sh=[sh('X10', VC(1504, 420), VX(1504, 330))], gap=0.6),
  end('Đếm tiền cả đêm. Mà đếm tiền của ai? Tao kể hết ở bản đầy đủ, link ngay dưới.', 'ĐẾM TIỀN AI?'),
]
S['SH4'] = [   # Oản chuối hối lộ
  dict(v='KHAI', t='Ma xó ơi. Ký xong tao chia mày phần. Đây, oản chuối.', sh=[sh('X06', VC(1184, 1000), VX(1184, 980), flash=1)],
       pop=[(0.0, 'HỐI LỘ MA XÓ?', '#ffd84a')], sfx=[(0.8, 'mam', 0.8)], gap=0.3),
  *INTRO,
  dict(v='MX', t='Con không ăn hối lộ, ông ạ. Con chỉ ăn oản.', sh=[sh('X06', VC(816, 720), VX(816, 700))]),
  dict(v=None, dur=1.4, sh=[sh('X10', VC(1504, 360), VX(1504, 300))], sfx=[(0.1, 'mam', 0.9)], pop=[(0.2, 'OẢN ✔ · HỢP ĐỒNG ✖', '#ffd84a')]),
  dict(v='MN', t='Ăn oản không làm việc. Nghề này tao thèm thật.', sh=[sh('S34', V(880, 420), VC(880, 380))], gap=0.4),
  dict(v='KHAI', t='Bán nhà thôi nhé. Cái hũ cụ cố chôn dưới bếp thì không tính!', sh=[sh('X07', V(1000), V(1000), blur=4, dark=0.2, cut=kh(0))]),
  dict(v='MN', t='Ba đời không ai được mở. Ba đời giàu nhất phố. Trong đầu ông Khải, cái hũ chỉ có thể là vàng.',
       sh=[sh('X01', V(1100), VC(1264, 560), blur=5, dark=0.15, cut=kh(0)), sh('B05', BV(640, 1250, 800), BV(640, 1280, 600))],
       pop=[(0.68, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0.68, 'xu', 0.8)], gap=0.5),
  end('Hũ có vàng thật không? Ma xó biết. Tao kể hết ở bản đầy đủ, link ngay dưới.', 'HŨ CÓ VÀNG?'),
]
S['SH5'] = [   # Dòng phụ lục
  dict(v='MN', t='Ông Khải tự tay viết thêm một dòng vào hợp đồng.', sh=[sh('N08', VC(1200, 840), VX(1200, 860), flash=1)],
       pop=[(0.0, '+1 DÒNG PHỤ LỤC', '#c58bff')], sfx=[(0.5, 'but', 0.7)], gap=0.3),
  *INTRO,
  dict(v='MN', t='Ba đời không ai được mở. Ba đời giàu nhất phố. Trong đầu ông Khải, cái hũ chỉ có thể là vàng.',
       sh=[sh('X01', V(1100), VC(1264, 560), blur=5, dark=0.15, cut=kh(0))], pop=[(0.68, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0.68, 'xu', 0.8)]),
  dict(v='KHAI', t='Thêm một dòng. Hũ dưới nền, thuộc bên bán. Toàn bộ, kể cả những gì bên trong.', sh=[sh('N08', V(1200, 700), VC(1200, 840))],
       pop=[(0.05, 'PHỤ LỤC', '#ffffff', 0.3), (0.3, 'HŨ → THUỘC BÊN BÁN', '#c58bff', 0.62), (0.62, 'KỂ CẢ BÊN TRONG', '#c58bff')], sfx=[(0.3, 'but', 0.7), (0.95, 'dau', 0.8)]),
  dict(v='VY', t='Sáng thứ Bảy mở hũ, kiểm kê, ra công chứng. Anh đặt cọc sáu tỷ, em giữ.', sh=[sh('X03', VC(560, 490), VX(560, 470))], pop=[(0.72, 'CỌC 6 TỶ', '#ffd84a')]),
  dict(v='MN', t='Nhớ cái dòng đó. Tí nữa nó quay lại.', sh=[sh('S01', V(920, 400), VC(920, 360))], gap=0.6),
  end('Kể cả những gì bên trong. Dòng đó quay lại cắn ai? Tao kể hết ở bản đầy đủ, link ngay dưới.', 'CẮN AI?'),
]
S['SH6'] = [   # Mở hũ trước nửa phố
  dict(v='MN', t='Cái hũ ba đời cấm mở. Sáng nay, mở trước nửa cái phố.', sh=[sh('X12', VC(896, 900), VX(896, 920), flash=1)],
       pop=[(0.0, 'MỞ HŨ!', '#ff5a4a')], sfx=[(0.6, 'hu', 0.8)], gap=0.3),
  *INTRO,
  dict(v='MN', t='Sáng thứ Bảy. Cửa kho tự mở. Hũ được đào lên trước mặt bên mua, luật sư, và nửa cái phố.', sh=[sh('X12', V(700, 600), VC(576, 520)), sh('X14', V(470), VC(470, 450))],
       sfx=[(0, 'sang', 0.5), (0.5, 'hu', 0.8)]),
  dict(v='MX', t='Bốn trăm mười ba tờ. Giấy nợ, ông ạ.', sh=[sh('X13', V(1024, 500), VC(1024, 420))], pop=[(0.5, '413 GIẤY NỢ', '#ff5a4a')], sfx=[(0.5, 'bassdown', 0.5)]),
  dict(v='MX', t='Cụ cố vay mua đất. Ông nội vay đắp lãi. Bố ông vay đảo nợ.', sh=[sh('X13', VC(990, 950), VX(990, 950))],
       pop=[(0.03, 'CỤ CỐ', '#ffffff', 0.34), (0.34, 'ÔNG NỘI', '#ffffff', 0.67), (0.67, 'BỐ', '#ffffff')], sfx=[(0.03, 'lat', 0.6), (0.34, 'lat', 0.6), (0.67, 'lat', 0.6)]),
  dict(v='MX', t='Ba đời, chưa trả một đồng. Lần nào cũng cầm cố… chính căn nhà này.', sh=[sh('X13', VX(1000, 950), VX(1000, 930)), sh('X01', VC(1100, 560), V(1100))],
       pop=[(0.7, 'CẦM CỐ: CĂN NHÀ NÀY', '#ff5a4a')], sfx=[(0.7, 'dau', 0.8)], gap=0.8),
  end('Nhà cầm cố, mà chủ nợ lại đứng ngay trong đám đông. Là ai? Tao kể hết ở bản đầy đủ, link ngay dưới.', 'CHỦ NỢ LÀ AI?'),
]
S['SH7'] = [   # Còn cái hũ, ông ạ
  dict(v='KHAI', t='Thế… tôi còn lại gì?', sh=[sh('X13', V(1024, 500), V(1024, 500), blur=6, dark=0.35, cut=kh(3))], pop=[(0.0, 'MẤT NHÀ, MẤT CỌC…', '#ffd84a')], gap=0.2),
  dict(v='MX', t='Còn cái hũ, ông ạ.', sh=[sh('B05', BV(560, 1100, 800), BV(600, 1200, 620), flash=1)], gap=0.5),
  *INTRO,
  dict(v='MN', t='Chủ nợ thì ở ngay trong phố. Phố cổ mà. Nhà nào cũng còn giữ giấy.', sh=[sh('X14', V(470), VC(470, 450)), sh('X14', VC(1520, 440), VX(1520, 400))], sfx=[(0, 'riram', 0.6)],
       pop=[(0.3, 'CHỦ NỢ: NỬA CÁI PHỐ', '#ffd84a')]),
  dict(v='VY', t='Nhà đang tranh chấp thì công chứng không ký. Bên em rút. Cọc anh đền.', sh=[sh('X12', VC(576, 560), VX(576, 520))], pop=[(0.68, 'HỦY GIAO DỊCH · ĐỀN CỌC', '#ff5a4a')], sfx=[(0.68, 'dau', 0.8)]),
  dict(v='VY', t='À, phụ lục anh tự viết. Hũ và toàn bộ bên trong thuộc về anh. Chúc mừng.', sh=[sh('N08', VC(1200, 840), VX(1200, 860))], pop=[(0.5, 'THUỘC VỀ ANH ✔', '#7dff9a')], sfx=[(0.95, 'dau', 0.9)], gap=0.4),
  dict(v='MN', t='Ông Khải không bán nhà nữa. Ông bán vé xem hũ. Khách đông gấp đôi.', sh=[sh('X15', V(672, 500), VC(672, 420)), sh('X15', VC(960, 820), VX(960, 820))],
       pop=[(0.4, 'VÉ XEM HŨ 50.000đ', '#ffd84a')], sfx=[(0.42, 'xu', 0.8), (0.7, 'cheer', 0.25, 2.0)]),
  end('Hũ thì bán vé được. Còn ma xó? Ba đời giàu nhất phố… về cái gì? Tao kể hết ở bản đầy đủ, link ngay dưới.', 'GIÀU… VỀ GÌ?'),
]

# SH4P — THỬ khuôn "trọn vẹn + punchline" (brainstorm 10, user 2026-11-22): hook → setup → beat → punchline → topper Ma Nó → kết mở ngắn.
# Không INTRO chung; ma xó được giới thiệu ngay trong câu hook. Mục tiêu 22–26 s.
S['SH4P'] = [
  dict(v='MN', t='Muốn bán nhà, ông Khải phải hối lộ con ma giữ nhà.', sh=[sh('X06', V(1100), VC(1450, 480), flash=1)],
       pop=[(0.0, 'HỐI LỘ MA XÓ?', '#ffd84a')], gap=0.15),
  dict(v='KHAI', t='Ma xó ơi. Ký xong tao chia mày phần. Đây, oản chuối.', sh=[sh('X06', VC(1250, 930), VX(1200, 1000))], sfx=[(0.8, 'mam', 0.8)], gap=0.2),
  dict(v=None, dur=1.1, sh=[sh('X06', VX(893, 760), VX(893, 720))], sfx=[(0.1, 'mam', 0.9)], pop=[(0.15, 'MA XÓ', '#ffd84a')]),
  dict(v='KHAI', t='Ăn rồi nhé! Ăn là đồng ý đấy nhé!', sh=[sh('X06', VC(1450, 480), VX(1450, 470), shake=3)], gap=0.2),
  dict(v='MX', t='Con không ăn hối lộ, ông ạ. Con chỉ ăn oản.', sh=[sh('X06', VX(893, 740), VX(893, 700))],
       pop=[(0.55, 'CHỈ ĂN OẢN', '#ff5a4a')], gap=0.9),
  dict(v='MN', t='Ăn oản không làm việc. Nghề này tao thèm thật.', sh=[sh('S34', V(933, 480), VC(1000, 640))],
       pop=[(0.5, 'NGHỀ MƠ ƯỚC', '#ffd84a')], sfx=[(0.9, 'coc', 1)], gap=0.4),
  end('Mua ma không được, ông Khải đi đào hũ. Đào ra cái gì? Tao kể ở bản đầy đủ, link dưới.', 'ĐÀO RA GÌ?'),
]

def key(v, t): return int(hashlib.md5(f'{v}|{t}'.encode()).hexdigest()[:7], 16)

def voice_src(v, t):
    if (v, t) in LONG_LINES: return f"p03/vo/{LONG_LINES[(v, t)]:03d}.wav"
    return f"p03/vo/s{key(v, t)}.wav"

def new_lines():
    seen, out = set(), []
    for spec in S.values():
        for it in spec:
            if it['v'] and (it['v'], it['t']) not in LONG_LINES and (it['v'], it['t']) not in seen:
                seen.add((it['v'], it['t'])); out.append({'i': key(it['v'], it['t']), 'voice': it['v'], 'text': it['t']})
    return out

def timeline(name, W=1080, H=1920):
    for l in new_lines():
        src = SHORTS / 'tts' / f"{l['i']:03d}.wav"; dst = PUB / 'p03' / 'vo' / f"s{l['i']}.wav"
        if src.exists() and (not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime):
            fx = FAST.get(l['voice'], FX[l['voice']])
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', fx + ',aresample=48000', '-ac', '2', str(dst)], check=True)
    for im in {s['img'] for it in S[name] for s in it['sh']}:
        dst = PUB / 'p03' / 'img' / f'{im}.png'
        if not dst.exists(): dst.write_bytes(img_src(im).read_bytes())
    t, shots, cuts, pops, sfx, subs, coms, voice, mutes, live = 0.0, [], [], [], [], [], [], [], [], []
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
            shots.append({'img': f"p03/img/{s['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': s['a'], 'b': s['b'],
                          **{k2: s[k2] for k2 in ('shake', 'flash', 'blur', 'dark') if k2 in s}})
            if 'cut' in s:
                c = s['cut']; cuts.append({'img': c['img'], 'size': c['size'], 't0': round(t0, 3), 't1': round(t1, 3), 'from': c['frm'], 'to': c['to'], 'bob': bool(c.get('bob')), **({'wob': c['wob']} if 'wob' in c else {})})
        for x in it.get('pop', []):
            fr, text, color = x[:3]; t1 = t + d * x[3] if len(x) > 3 else t + span
            pops.append({'t0': round(t + d * fr, 3), 't1': round(t1, 3), 'text': text, 'color': color})
        for x in it.get('sfx', []):
            fr, nm, vol = x[:3]
            sfx.append({'t': round(t + d * fr, 3), 'src': sfx_src(nm), 'vol': vol, **({'dur': x[3]} if len(x) > 3 else {})})
        for fr, u, c in it.get('com', []):
            coms.append({'t': round(t + d * fr, 3), 'u': u, 'c': c, 'end': round(t + span, 3)})
            sfx.append({'t': round(t + d * fr, 3), 'src': 'sh6/sfx/pop.wav', 'vol': 0.45})
        if it.get('mute'): mutes.append([round(max(t - 0.2, 0), 3), round(t + span, 3)])
        t += span
    total = round(t + 0.4, 3)
    out = ROOT / 'video' / 'src' / 'data' / f'p03-{name.lower()}.json'
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
