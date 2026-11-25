# build_p03_shorts.py lines|timeline [SH1 …] — 7 short P03 (9:16). Khuôn hiện hành: xem khối "KHUÔN MỚI" (nghiên cứu 11); khuôn cũ v3 ở build_p03_shorts_v3.py:
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
# ── KHUÔN MỚI (nghiên cứu 11, user duyệt "Làm lại P03" 2026-11-22): 30–45 s, bỏ INTRO chung, 5 short TRỌN có punchline + 2 TRAILER treo.
#    Mỗi short tự giới thiệu ma xó (pop 'MA XÓ' lần đầu nó xuất hiện). Kết: Ma Nó chỉ link 1 câu ngắn (end()).
#    Thứ tự đăng: SH1 hồ sơ → SH3 gag oản → SH2 sống sót → SH4 bán vé → SH5 thợ đo → SH6 trailer kho → SH7 trailer mở hũ.
def kh(pose, h=0.6, wob=3): return KH(pose, 'c', 1080, 1920, h, wob)
MXB = sh('B05', BV(440, 950, 700), BV(440, 950, 520))          # cận mặt ma xó (ảnh dọc B)
MX6 = lambda: sh('X06', VX(893, 760), VX(893, 720))             # ma xó lấp ló sau hũ, xó bếp
MX10 = lambda: sh('X10', VX(1560, 330), VX(1560, 300))          # ma xó ngồi bao tải trong kho

S['SH1'] = [   # TRỌN — Hồ sơ ma xó (mẫu "1 short = 1 loài ma", Đảo Kinh Dị/Emma)
  dict(v='MN', t='Hồ sơ ma xó. Nhà mày ba đời thì nghe cho kỹ.', sh=[sh('B05', BV(560, 1100, 800), BV(600, 1150, 640), flash=1)],
       pop=[(0.0, 'HỒ SƠ: MA XÓ', '#ffd84a')], sfx=[(0, 'chuonggio', 0.5)], gap=0.2),
  dict(v='MN', t='Một. Nó là đứa bé ngồi ở xó nhà, thường là xó bếp. Ở từ thời cụ cố, chưa đi đâu bao giờ.', sh=[sh('X06', V(700, 600), VX(893, 720))],
       pop=[(0.05, '1. NGỒI XÓ BẾP', '#ffffff')]),
  dict(v='MN', t='Hai. Nó giữ của. Cái gì của nhà, nó không cho ra khỏi nhà.', sh=[sh('X01', V(960, 600), VC(960, 640))], pop=[(0.05, '2. GIỮ CỦA', '#ffffff')], gap=0.1),
  dict(v='MX', t='Bán nhà là của ra khỏi nhà. Con phải giữ.', sh=[MXB], sfx=[(0.05, 'bassdown', 0.5)], mute=True, gap=0.3),
  dict(v='MN', t='Ba. Nó ngoan. Xưng con, gọi ông. Ngoan đến phát sợ.', sh=[sh('B05', BV(640, 1250, 900), BV(560, 1000, 600))], pop=[(0.05, '3. NGOAN ĐẾN SỢ', '#ffffff')], gap=0.1),
  dict(v='MX', t='Con không dọa ai. Con chỉ đếm.', sh=[MX10()], gap=0.3),
  dict(v='MN', t='Bốn. Nửa đêm nghe tiếng đếm tiền sau tường, đừng mừng. Chưa chắc đã là tiền.', sh=[sh('X10', V(1300), VC(1520, 420), dark=0.3)],
       pop=[(0.05, '4. ĐẾM CẢ ĐÊM', '#ffffff', 0.55), (0.6, 'CHƯA CHẮC LÀ TIỀN', '#ff5a4a')], sfx=[(0.3, 'tick', 0.5)], gap=0.7),
  dict(v='MX', t='Cụ dặn con đúng một câu: cả gia tài nhà mình nằm trong cái hũ dưới bếp. Giữ lấy. Con giữ.', sh=[sh('B05', BV(560, 1100, 800), BV(640, 1250, 620))],
       pop=[(0.55, 'GIA TÀI = CÁI HŨ', '#ffd84a')], mute=True, gap=0.6),
  end('Nhà ông Khải nó đếm ra bốn trăm mười ba. Tao kể ở bản đầy đủ, link dưới.', '413 CÁI GÌ?'),
]
S['SH2'] = [   # TRỌN — Cách sống sót khi nhà có ma xó (mẫu "Cách sống sót khi gặp…", Emma)
  dict(v='MN', t='Cách sống sót khi nhà mày có ma xó. Ba điều.', sh=[MX6()], pop=[(0.0, 'NHÀ CÓ MA XÓ?', '#ffd84a')], sfx=[(0, 'chuonggio', 0.5)], gap=0.2),
  dict(v='MN', t='Một. Đừng bán nhà. Thợ đo vào khảo sát, cửa tự khóa, ngồi trong nhà vệ sinh hai tiếng.', sh=[sh('X04', V(928, 500), VC(928, 480))],
       pop=[(0.05, '1. ĐỪNG BÁN NHÀ', '#ffffff')], sfx=[(0.62, 'khoa', 0.9)]),
  dict(v='MX', t='Bán nhà là của ra khỏi nhà. Con phải giữ.', sh=[MXB], sfx=[(0.05, 'bassdown', 0.5)], mute=True, gap=0.3),
  dict(v='MN', t='Hai. Đừng hối lộ. Nó ăn oản thật, nhưng không làm việc.', sh=[sh('X06', VC(1250, 930), VX(1200, 1000))], pop=[(0.05, '2. ĐỪNG HỐI LỘ', '#ffffff')], sfx=[(0.6, 'mam', 0.8)]),
  dict(v='MX', t='Con không ăn hối lộ, ông ạ. Con chỉ ăn oản.', sh=[MX6()], gap=0.4),
  dict(v='MN', t='Ba. Đừng mở cái hũ dưới bếp. Ba đời không ai mở là có lý do.', sh=[sh('B05', BV(560, 1100, 800), BV(600, 1200, 620))], pop=[(0.05, '3. ĐỪNG MỞ HŨ', '#ff5a4a')], gap=0.5),
  dict(v='MN', t='Còn lỡ mở rồi thì chúc mừng. Mọi thứ trong hũ là của mày. Toàn bộ.', sh=[sh('X12', VC(1060, 900), VX(1060, 920), flash=1)],
       pop=[(0.75, 'TOÀN BỘ.', '#ff5a4a')], sfx=[(0.75, 'dau', 0.9)], gap=0.8),
  end('Ông Khải mở rồi. Trong hũ có gì? Tao kể ở bản đầy đủ, link dưới.', 'TRONG HŨ CÓ GÌ?'),
]
S['SH3'] = [   # TRỌN — gag oản (bản SH4P đã thử, giữ nguyên)
  dict(v='MN', t='Muốn bán nhà, ông Khải phải hối lộ con ma giữ nhà.', sh=[sh('X06', V(1100), VC(1450, 480), flash=1)],
       pop=[(0.0, 'HỐI LỘ MA XÓ?', '#ffd84a')], gap=0.15),
  dict(v='MX', t='Con là ma xó nhà này. Con ở cái xó cạnh bếp từ thời cụ cố.', sh=[sh('X06', VC(893, 760), VX(893, 720))], sfx=[(0, 'chuonggio', 0.5)], gap=0.2),
  dict(v='KHAI', t='Ma xó ơi. Ký xong tao chia mày phần. Đây, oản chuối.', sh=[sh('X06', VC(1250, 930), VX(1200, 1000))], sfx=[(0.8, 'mam', 0.8)], gap=0.2),
  dict(v=None, dur=1.1, sh=[sh('X06', VX(893, 760), VX(893, 720))], sfx=[(0.1, 'mam', 0.9)], pop=[(0.15, 'MA XÓ', '#ffd84a')]),
  dict(v='KHAI', t='Ăn rồi nhé! Ăn là đồng ý đấy nhé!', sh=[sh('X06', VC(1450, 480), VX(1450, 470), shake=3)], gap=0.2),
  dict(v='MX', t='Con không ăn hối lộ, ông ạ. Con chỉ ăn oản.', sh=[sh('X06', VX(893, 740), VX(893, 700))],
       pop=[(0.55, 'CHỈ ĂN OẢN', '#ff5a4a')], gap=0.9),
  dict(v='MN', t='Ăn oản không làm việc. Nghề này tao thèm thật.', sh=[sh('S34', V(933, 480), VC(1000, 640))],
       pop=[(0.5, 'NGHỀ MƠ ƯỚC', '#ffd84a')], sfx=[(0.9, 'coc', 1)], gap=0.4),
  end('Mua ma không được, ông Khải đi đào hũ. Đào ra cái gì? Tao kể ở bản đầy đủ, link dưới.', 'ĐÀO RA GÌ?'),
]
S['SH4'] = [   # TRỌN — Bán vé xem bàn thờ (châm biếm), punch: ma xó lên tiếng
  dict(v='KHAI', t='Welcome! Nhà cổ ba đời, giữ trọn hồn phố cổ. Hai triệu một đêm, chụp bàn thờ thêm năm mươi nghìn.',
       sh=[sh('X02', V(432, 576), VC(432, 520)), sh('X02', V(1450), VC(1450, 480))],
       pop=[(0.2, 'GIỮ HỒN PHỐ CỔ', '#ffd84a', 0.5), (0.5, '2.000.000đ / ĐÊM', '#ffffff', 0.75), (0.75, '+50K CHỤP BÀN THỜ', '#ff8fb1')], sfx=[(0.82, 'tach', 0.8), (0.9, 'tach', 0.8)]),
  dict(v='MN', t='Giữ hồn phố cổ bằng cách bán vé xem bàn thờ. Cụ cố mà biết thì cụ thu phí lại.', sh=[sh('S26', V(900, 480), VC(820, 420), shake=6)], gap=0.4),
  dict(v='VY', t='Sáu mươi tỷ. Đập trắng bên trong. Giữ lại cái cổng rêu cho khách Tây chụp ảnh bảo tồn.', sh=[sh('X03', VC(560, 490), VX(560, 470)), sh('X03', VC(1056, 880), VX(1056, 860))],
       pop=[(0.08, '60 TỶ', '#ffd84a')], sfx=[(0.08, 'xu', 0.7), (0.35, 'khoan', 0.45)]),
  dict(v='KHAI', t='Ký! Đập luôn cái bếp cũng được.', sh=[sh('X02', V(1450), V(1450), blur=4, dark=0.2, cut=kh(0))], gap=0.3),
  dict(v=None, dur=1.0, sh=[MX6()], pop=[(0.1, 'MA XÓ', '#ffd84a')], sfx=[(0.05, 'bassdown', 0.6)]),
  dict(v='MX', t='Bán nhà là của ra khỏi nhà. Con phải giữ.', sh=[MXB], pop=[(0.6, 'KHÔNG BÁN.', '#ff5a4a')], mute=True, gap=0.8),
  dict(v='MX', t='Cụ dặn con đúng một câu: cả gia tài nhà mình nằm trong cái hũ dưới bếp. Giữ lấy. Con giữ.', sh=[sh('B05', BV(560, 1100, 800), BV(640, 1250, 620))], mute=True, gap=0.6),
  end('Và nó giữ thật. Giữ kiểu gì, tao kể ở bản đầy đủ, link dưới.', 'GIỮ KIỂU GÌ?'),
]
S['SH5'] = [   # TRỌN — Thợ đo + review 1 sao, punch: "Con chỉ đếm."
  dict(v='MN', t='Nhà sâu mười mét. Kéo thước mãi không chạm tường.', sh=[sh('X04', VC(1760, 420), VX(1760, 400), flash=1)],
       pop=[(0.0, '10 MÉT… ?', '#ffd84a')], sfx=[(0.1, 'thuoc', 0.8)], gap=0.3),
  dict(v='MN', t='Buổi khảo sát thứ nhất: cửa tự khóa. Thợ đo ngồi trong nhà vệ sinh hai tiếng.', sh=[sh('X04', V(928, 500), VC(928, 500))],
       pop=[(0.02, 'BUỔI 1', '#ffffff', 0.4)], sfx=[(0.42, 'khoa', 0.9)]),
  dict(v='MN', t='Buổi thứ hai: căn nhà sâu mười mét, thợ kéo thước mãi không chạm tường sau. Nhìn đồng hồ, đã hai giờ sáng.',
       sh=[sh('X04', VC(1760, 500), VX(1760, 420)), sh('X04', VC(928, 520), VX(928, 480))],
       pop=[(0.02, 'BUỔI 2', '#ffffff', 0.3), (0.32, '10 m… ?', '#ffd84a', 0.75), (0.8, '2:00 SÁNG', '#ffd84a')], sfx=[(0.3, 'thuoc', 0.8), (0.78, 'tick', 0.5)]),
  dict(v='MN', t='Khách Tây để lại review một sao: phòng có trẻ con đếm tiền cả đêm.', sh=[sh('X01', V(1024), VC(1264, 560), blur=10, dark=0.35)],
       com=[(0.35, '★☆☆☆☆  Khách Tây', 'Phòng có trẻ con đếm tiền cả đêm.')], pop=[(0.3, '★☆☆☆☆ REVIEW 1 SAO', '#ffd84a')], gap=0.4),
  dict(v='MX', t='Con là ma xó nhà này. Con ở cái xó cạnh bếp từ thời cụ cố.', sh=[sh('X06', VC(893, 760), VX(893, 720))], pop=[(0.0, 'MA XÓ', '#ffd84a', 0.5)], gap=0.2),
  dict(v='MX', t='Con không dọa ai. Con chỉ đếm.', sh=[MX10()], pop=[(0.6, 'CHỈ ĐẾM', '#ff5a4a')], gap=0.9),
  end('Đếm cả đêm. Mà đếm cái gì? Tao kể ở bản đầy đủ, link dưới.', 'ĐẾM CÁI GÌ?'),
]
S['SH6'] = [   # TRAILER — Đêm thứ Sáu trong kho, treo ở "413 cái gì?"
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba.', sh=[sh('X10', VC(1504, 420), VX(1504, 330), dark=0.15)],
       pop=[(0.0, 'AI ĐANG ĐẾM?', '#ffd84a')], sfx=[(0, 'khoa', 0.9)], mute=True, gap=0.3),
  dict(v='MN', t='Ba đời không ai được mở. Ba đời giàu nhất phố. Trong đầu ông Khải, cái hũ chỉ có thể là vàng.',
       sh=[sh('X01', V(1100), VC(1264, 560), blur=5, dark=0.15, cut=kh(0)), sh('B05', BV(640, 1250, 800), BV(640, 1280, 600))],
       pop=[(0.68, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0.68, 'xu', 0.8)], gap=0.3),
  dict(v='MN', t='Đêm thứ Sáu, ông Khải vác xẻng xuống bếp. Định lấy vàng trước khi giao nhà.',
       sh=[sh('X09', V(900), V(1100)), sh('X09', VC(1792, 600), VX(1792, 600))], pop=[(0.5, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0, 'de', 0.6)]),
  dict(v='MN', t='Ông chui vào kho lấy cuốc. Cửa kho đóng lại.', sh=[sh('X10', V(736), VC(736, 520))], sfx=[(0.85, 'khoa', 1)], mute=True),
  dict(v='KHAI', t='Mở cửa! Tao là chủ nhà!', sh=[sh('X10', V(736), V(736), dark=0.2, shake=6, cut=KH(2, 'c', 1080, 1920, 0.48, 7))], mute=True),
  dict(v='MX', t='Con biết, ông ạ. Bán nhà thì phải kiểm kê. Cụ dặn. Con đếm cho ông nghe.',
       sh=[sh('X10', VX(1504, 330), VX(1504, 300)), sh('B05', BV(440, 950, 700), BV(440, 950, 520))], pop=[(0.0, 'MA XÓ', '#ffd84a', 0.4)], mute=True),
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba. Hết.', sh=[sh('X10', V(1000), V(1100), dark=0.35, blur=3, shake=3, cut=KH(1, 'c', 1080, 1920, 0.62, 5))],
       pop=[(0.8, '413', '#ff5a4a')], mute=True, gap=1.2),
  end('Bốn trăm mười ba cái gì? Không phải vàng đâu. Tao kể hết ở bản đầy đủ, link ngay dưới.', '413 CÁI GÌ?'),
]
S['SH7'] = [   # TRAILER — Mở hũ: hé 413 giấy nợ, treo ở dòng phụ lục
  dict(v='MN', t='Cái hũ ba đời cấm mở. Sáng nay, mở trước nửa cái phố.', sh=[sh('X12', VC(896, 900), VX(896, 920), flash=1)],
       pop=[(0.0, 'MỞ HŨ!', '#ff5a4a')], sfx=[(0.6, 'hu', 0.8)], gap=0.3),
  dict(v='MN', t='Sáng thứ Bảy. Cửa kho tự mở. Hũ được đào lên trước mặt bên mua, luật sư, và nửa cái phố.', sh=[sh('X12', V(700, 600), VC(576, 520)), sh('X14', V(470), VC(470, 450))],
       sfx=[(0, 'sang', 0.5), (0.5, 'hu', 0.8)]),
  dict(v='MX', t='Bốn trăm mười ba tờ. Giấy nợ, ông ạ.', sh=[sh('X13', V(1024, 500), VC(1024, 420))], pop=[(0.0, 'MA XÓ', '#ffd84a', 0.35), (0.5, '413 GIẤY NỢ', '#ff5a4a')], sfx=[(0.5, 'bassdown', 0.5)]),
  dict(v='MX', t='Cụ cố vay mua đất. Ông nội vay đắp lãi. Bố ông vay đảo nợ.', sh=[sh('X13', VC(990, 950), VX(990, 950))],
       pop=[(0.03, 'CỤ CỐ', '#ffffff', 0.34), (0.34, 'ÔNG NỘI', '#ffffff', 0.67), (0.67, 'BỐ', '#ffffff')], sfx=[(0.03, 'lat', 0.6), (0.34, 'lat', 0.6), (0.67, 'lat', 0.6)]),
  dict(v='MX', t='Ba đời, chưa trả một đồng. Lần nào cũng cầm cố… chính căn nhà này.', sh=[sh('X13', VX(1000, 950), VX(1000, 930)), sh('X01', VC(1100, 560), V(1100))],
       pop=[(0.7, 'CẦM CỐ: CĂN NHÀ NÀY', '#ff5a4a')], sfx=[(0.7, 'dau', 0.8)], gap=0.6),
  dict(v='MN', t='Chủ nợ thì ở ngay trong phố. Phố cổ mà. Nhà nào cũng còn giữ giấy.', sh=[sh('X14', V(470), VC(470, 450)), sh('X14', VC(1520, 440), VX(1520, 400))], sfx=[(0, 'riram', 0.6)],
       pop=[(0.3, 'CHỦ NỢ: NỬA CÁI PHỐ', '#ffd84a')]),
  dict(v='VY', t='Nhà đang tranh chấp thì công chứng không ký. Bên em rút. Cọc anh đền.', sh=[sh('X12', VC(576, 560), VX(576, 520))], pop=[(0.68, 'HỦY GIAO DỊCH · ĐỀN CỌC', '#ff5a4a')], sfx=[(0.68, 'dau', 0.8)], gap=0.5),
  end('Mà nhớ dòng phụ lục ông Khải tự viết chứ? Nó quay lại cắn. Link bản đầy đủ ngay dưới.', 'PHỤ LỤC GÌ?'),
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
