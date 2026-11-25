# build_p03_long.py lines|timeline — dựng dữ liệu bản long P03 "Ma xó kiểm kê" (16:9) cho engine Remotion `Story`.
#   lines    → p03/long/lines.json (cho tts_lines.py)
#   timeline → xử lý giọng (fx) vào video/public/p03/vo, chép ảnh, ghi video/src/data/p03-long.json
# Thời gian tự tính từ độ dài từng câu TTS: câu sau bắt đầu = câu trước kết thúc + gap.
# SFX riêng P03: tools/make_p03_sfx.sh → video/public/p03/sfx; thứ tự tìm p03/sfx → p02/sfx → sh6/sfx.
import json, sys, subprocess, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
LONG = ROOT / 'p03' / 'long'
PUB = ROOT / 'video' / 'public'
OUT = ROOT / 'video' / 'src' / 'data' / 'p03-long.json'
FX = {'MN': 'atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25',
      'TT': 'asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2',
      'MX': 'asetrate=48000*1.1,aresample=48000,atempo=0.93,aecho=0.8:0.4:30:0.15',
      'KHAI': 'atempo=1.05', 'VY': 'anull'}
TUONG = FX['MX'] + ',lowpass=f=1100,aecho=0.8:0.7:90:0.4,volume=0.75'   # ma xó thì thầm sau tường
IW, IH = 2048, 1152
BW, BH = 1344, 1792

def _c(cx, cy, w, W=IW, H=IH):
    h = w * 9 / 16
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def F(cx=1024, cy=576): return [cx, cy, 2048]      # toàn
def M(cx, cy): return _c(cx, cy, 1350)             # trung
def C(cx, cy, w=1000): return _c(cx, cy, w)        # cận
def BC(cx=440, cy=950, w=900): return _c(cx, cy, w, BW, BH)   # cận ảnh dọc B (B05: mặt ma xó ~440,950, hũ ~672,1300)
def sh(img, a, b=None, **o): return dict(img=img, a=a, b=b or a, **o)
MANO = dict(img='p03/img/cut_B02.png', size=1344)
MXF = BC(440, 950, 900)   # cận mặt ma xó
# Khải: X11 là SHEET 4 tư thế nền trơn — KHÔNG crop làm shot (ra nền chàm trơn + lẹm tư thế bên cạnh, phóng to nhoè).
# Tách bằng tools/cut_sheet.py → cut_X11_{0 tham,1 hoảng,2 đập cửa,3 buồn}.png, đặt cutout lên nền cảnh thật.
KH_SIZE = {0: (381, 561), 1: (402, 555), 2: (656, 558), 3: (379, 555)}
def KH(pose, side='c', W=1920, H=1080, hfrac=0.9, wob=3):
    pw, ph = KH_SIZE[pose]; h = H * hfrac; s = h / ph; w = pw * s
    x = {'l': W * 0.06, 'c': (W - w) / 2, 'r': W * 0.94 - w}[side]; y = H - h
    return dict(img=f'p03/img/cut_X11_{pose}.png', size=pw, frm=[round(x), round(y + 50), round(s, 3)], to=[round(x), round(y), round(s, 3)], bob=0, wob=wob)

SPEC = [
  # ---- 0:00 cold open
  dict(v=None, dur=1.5, sh=[sh('X10', F(), M(900, 600), dark=0.2)], sfx=[(0.1, 'khoa', 1)], pop=[(0.3, '2:40 SÁNG', '#ffd84a')], mute=True),
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba.', sh=[sh('X10', C(1150, 800), C(1200, 760))], mute=True, gap=0.3),
  dict(v='KHAI', t='Ai… ai đấy? Đếm cái gì đấy?', sh=[sh('X10', M(700, 560), M(760, 560), dark=0.3, blur=3, shake=4, cut=KH(1, 'r', wob=5))]),
  dict(v='MX', t='Đếm của nhà mình, ông ạ. Sắp xong rồi.', sh=[sh('B05', BC(440, 990, 1100), BC(440, 950, 780))], mute=True, gap=1.0),
  # ---- 0:12 Ma Nó mồi
  dict(v='MN', t='Lại mò vào xem à? Tuần này ở phố cổ. Một căn nhà ba đời, một cái hũ chưa ai mở.', sh=[sh('S01', F(), M(920, 420)), sh('X01', F(), M(1100, 560))], sfx=[(0, 'coc', 1), (0.05, 'braam', 0.35)]),
  dict(v='MN', t='Và một đứa giữ nó. Ngoan lắm. Ngoan đến phát sợ.', sh=[sh('S26', M(900, 480), C(820, 360), shake=8), sh('B05', MXF, BC(440, 950, 760), flash=1)]),
  dict(v='MN', t='Lùi lại một tháng. Cho nó kể.', sh=[sh('S01', M(920, 400), C(920, 330))], sfx=[(0.75, 'tua', 0.7)], gap=0.5),
  # ---- 0:25 nhà cổ ba đời
  dict(v='MX', t='Con là ma xó nhà này. Con ở cái xó cạnh bếp từ thời cụ cố.', sh=[sh('X01', F(), M(1264, 560)), sh('X06', M(800, 700), C(816, 720))], sfx=[(0, 'chuonggio', 0.6)]),
  dict(v='MX', t='Cụ dặn con đúng một câu: cả gia tài nhà mình nằm trong cái hũ dưới bếp. Giữ lấy. Con giữ.', sh=[sh('B05', BC(560, 900, 1344), BC(500, 990, 1000)), sh('B05', BC(640, 1250, 1000), BC(640, 1280, 800))],
       pop=[(0.78, 'GIỮ LẤY', '#ffd84a')]),
  dict(v='KHAI', t='Welcome! Nhà cổ ba đời, giữ trọn hồn phố cổ. Hai triệu một đêm, chụp bàn thờ thêm năm mươi nghìn.', sh=[sh('X02', F(), M(700, 500)), sh('X02', C(1300, 450), C(1450, 450))],
       pop=[(0.2, 'GIỮ HỒN PHỐ CỔ', '#ffd84a', 0.5), (0.5, '2.000.000đ / ĐÊM', '#ffffff', 0.75), (0.75, '+50K CHỤP BÀN THỜ', '#ff8fb1')], sfx=[(0.82, 'tach', 0.8), (0.9, 'tach', 0.8)]),
  dict(v='MN', t='Giữ hồn phố cổ bằng cách bán vé xem bàn thờ. Cụ cố mà biết thì cụ thu phí lại.', sh=[sh('S26', M(900, 480), C(820, 360))], gap=0.4),
  # ---- 0:55 bán nhà
  dict(v='VY', t='Sáu mươi tỷ. Đập trắng bên trong. Giữ lại cái cổng rêu cho khách Tây chụp ảnh bảo tồn.', sh=[sh('X03', F(), M(800, 600)), sh('X03', C(1056, 900), C(1056, 860))],
       pop=[(0.08, '60 TỶ', '#ffd84a')], sfx=[(0.08, 'xu', 0.7), (0.35, 'khoan', 0.45)]),
  dict(v='KHAI', t='Ký! Đập luôn cái bếp cũng được.', sh=[sh('X03', C(1456, 420), C(1456, 380), shake=4)]),
  dict(v='MX', t='Bán nhà là của ra khỏi nhà. Con phải giữ.', sh=[sh('X06', C(816, 760, 1100), C(816, 720, 760))], sfx=[(0.05, 'bassdown', 0.5)], mute=True, gap=0.5),
  # ---- 1:15 phá khảo sát
  dict(v='MN', t='Buổi khảo sát thứ nhất: cửa tự khóa. Thợ đo ngồi trong nhà vệ sinh hai tiếng.', sh=[sh('X04', F(), M(900, 500))], pop=[(0.02, 'BUỔI 1', '#ffffff', 0.4)], sfx=[(0.42, 'khoa', 0.9)]),
  dict(v='MN', t='Buổi thứ hai: căn nhà sâu mười mét, thợ kéo thước mãi không chạm tường sau. Nhìn đồng hồ, đã hai giờ sáng.', sh=[sh('X04', C(1760, 500), C(1760, 420)), sh('X04', C(928, 520), C(928, 480))],
       pop=[(0.02, 'BUỔI 2', '#ffffff', 0.3), (0.32, '10 m… ?', '#ffd84a', 0.75), (0.8, '2:00 SÁNG', '#ffd84a')], sfx=[(0.3, 'thuoc', 0.8), (0.78, 'tick', 0.5)]),
  dict(v='MN', t='Khách Tây để lại review một sao: phòng có trẻ con đếm tiền cả đêm.', sh=[sh('X01', F(), M(1024, 560), blur=10, dark=0.35)],
       com=[(0.35, '★☆☆☆☆  Khách Tây', 'Phòng có trẻ con đếm tiền cả đêm.')], pop=[(0.3, '★☆☆☆☆ REVIEW 1 SAO', '#ffd84a')]),
  dict(v='MX', t='Con không dọa ai. Con chỉ đếm.', sh=[sh('X10', C(1776, 300, 1000), C(1776, 250, 760))], gap=0.5),
  # ---- 1:45 oản chuối
  dict(v='KHAI', t='Ma xó ơi. Ký xong tao chia mày phần. Đây, oản chuối.', sh=[sh('X06', F(), M(1100, 500)), sh('X06', C(1184, 1000), C(1184, 980))]),
  dict(v='MX', t='Con không ăn hối lộ, ông ạ. Con chỉ ăn oản.', sh=[sh('X06', C(816, 720, 900), C(816, 700, 700))]),
  dict(v=None, dur=1.4, sh=[sh('X10', C(1776, 260, 800), C(1776, 240, 640))], sfx=[(0.1, 'mam', 0.9)], pop=[(0.2, 'OẢN ✔ · HỢP ĐỒNG ✖', '#ffd84a')]),
  dict(v='MN', t='Ăn oản không làm việc. Nghề này tao thèm thật.', sh=[sh('S34', M(880, 420), C(880, 330))], gap=0.5),
  # ---- 2:05 cái hũ
  dict(v='KHAI', t='Bán nhà thôi nhé. Cái hũ cụ cố chôn dưới bếp thì không tính!', sh=[sh('X07', F(), M(1000, 600))]),
  dict(v='VY', t='Hũ sành thì báu gì. Anh cứ giữ.', sh=[sh('X07', C(480, 470), C(480, 440))]),
  dict(v='MN', t='Ba đời không ai được mở. Ba đời giàu nhất phố. Trong đầu ông Khải, cái hũ chỉ có thể là vàng.', sh=[sh('X07', C(1472, 460), C(1472, 430)), sh('X01', M(1000, 560), M(1050, 560), blur=5, dark=0.15, cut=KH(0, 'r'))],
       pop=[(0.68, 'HŨ = VÀNG?', '#ffd84a')], sfx=[(0.68, 'xu', 0.8)]),
  dict(v='KHAI', t='Thêm một dòng. Hũ dưới nền, thuộc bên bán. Toàn bộ, kể cả những gì bên trong.', sh=[sh('N08', F(), C(1200, 840))],
       pop=[(0.05, 'PHỤ LỤC', '#ffffff', 0.3), (0.3, 'HŨ → THUỘC BÊN BÁN', '#c58bff', 0.62), (0.62, 'KỂ CẢ BÊN TRONG', '#c58bff')], sfx=[(0.3, 'but', 0.7), (0.95, 'dau', 0.8)]),
  dict(v='VY', t='Sáng thứ Bảy mở hũ, kiểm kê, ra công chứng. Anh đặt cọc sáu tỷ, em giữ.', sh=[sh('X03', C(560, 520), C(560, 490))], pop=[(0.72, 'CỌC 6 TỶ', '#ffd84a')]),
  dict(v='MN', t='Nhớ cái dòng đó. Tí nữa nó quay lại.', sh=[sh('S01', M(920, 400), C(920, 330))], gap=0.6),
  # ---- 2:35 đêm cuối
  dict(v='MN', t='Đêm thứ Sáu, ông Khải lẻn xuống bếp với cái xẻng. Định lấy vàng trước. Sáng ra để hũ rỗng cho bên mua.', sh=[sh('X09', F(), M(900, 600)), sh('X09', C(1700, 600), C(1792, 600))], sfx=[(0, 'de', 0.6)]),
  dict(v='MN', t='Ông chui vào kho lấy cuốc. Cửa kho đóng lại.', sh=[sh('X10', F(), M(736, 520))], sfx=[(0.85, 'khoa', 1)], mute=True),
  dict(v='MX', fx=TUONG, t='…một. Hai. Ba.', sh=[sh('X10', C(1150, 820), C(1200, 780))], mute=True, gap=0.5),
  dict(v='KHAI', t='Mở cửa! Tao là chủ nhà!', sh=[sh('X10', C(736, 520, 1200), C(736, 520, 1100), dark=0.2, shake=6, cut=KH(2, 'c', wob=7))], mute=True),
  dict(v='MX', t='Con biết, ông ạ. Bán nhà thì phải kiểm kê. Cụ dặn. Con đếm cho ông nghe.', sh=[sh('X10', C(1776, 260, 900), C(1776, 220, 700)), sh('B05', MXF, BC(440, 950, 760))], mute=True),
  dict(v='MX', fx=TUONG, t='…bốn trăm mười hai. Bốn trăm mười ba. Hết.', sh=[sh('X10', C(1200, 780), C(1250, 720), shake=3)], pop=[(0.8, '413', '#ff5a4a')], mute=True, gap=2.0),
  # ---- 3:05 mở hũ
  dict(v='MN', t='Sáng thứ Bảy. Cửa kho tự mở. Hũ được đào lên trước mặt bên mua, luật sư, và nửa cái phố.', sh=[sh('X12', F(), M(900, 650))], sfx=[(0, 'sang', 0.5), (0.5, 'hu', 0.8)]),
  dict(v='MX', t='Bốn trăm mười ba tờ. Giấy nợ, ông ạ.', sh=[sh('X13', F(), M(1024, 420))], pop=[(0.5, '413 GIẤY NỢ', '#ff5a4a')], sfx=[(0.5, 'bassdown', 0.5)]),
  dict(v='MX', t='Cụ cố vay mua đất. Ông nội vay đắp lãi. Bố ông vay đảo nợ.', sh=[sh('X13', C(976, 960), C(1000, 940))],
       pop=[(0.03, 'CỤ CỐ', '#ffffff', 0.34), (0.34, 'ÔNG NỘI', '#ffffff', 0.67), (0.67, 'BỐ', '#ffffff')], sfx=[(0.03, 'lat', 0.6), (0.34, 'lat', 0.6), (0.67, 'lat', 0.6)]),
  dict(v='MX', t='Ba đời, chưa trả một đồng. Lần nào cũng cầm cố… chính căn nhà này.', sh=[sh('X13', C(1000, 960, 760), C(1000, 940, 640)), sh('X01', M(1100, 560), F())],
       pop=[(0.7, 'CẦM CỐ: CĂN NHÀ NÀY', '#ff5a4a')], sfx=[(0.7, 'dau', 0.8)], gap=1.0),
  dict(v='MN', t='Chủ nợ thì ở ngay trong phố. Phố cổ mà. Nhà nào cũng còn giữ giấy.', sh=[sh('X14', F(), M(600, 600)), sh('X14', C(1520, 440), C(1520, 400))], sfx=[(0, 'riram', 0.6)],
       pop=[(0.3, 'CHỦ NỢ: NỬA CÁI PHỐ', '#ffd84a')]),
  dict(v='VY', t='Nhà đang tranh chấp thì công chứng không ký. Bên em rút. Cọc anh đền.', sh=[sh('X12', C(576, 560), C(576, 520))], pop=[(0.68, 'HỦY GIAO DỊCH · ĐỀN CỌC', '#ff5a4a')], sfx=[(0.68, 'dau', 0.8)]),
  dict(v='VY', t='À, phụ lục anh tự viết. Hũ và toàn bộ bên trong thuộc về anh. Chúc mừng.', sh=[sh('N08', M(1150, 760), C(1200, 840))], pop=[(0.5, 'THUỘC VỀ ANH ✔', '#7dff9a')], sfx=[(0.95, 'dau', 0.9)]),
  dict(v='KHAI', t='Thế… tôi còn lại gì?', sh=[sh('X13', M(1024, 500), M(1024, 460), blur=6, dark=0.35, cut=KH(3, 'l'))], gap=0.4),
  dict(v='MX', t='Còn cái hũ, ông ạ.', sh=[sh('B05', BC(560, 1000, 1200), BC(560, 1000, 1000), flash=1)], gap=0.8),
  # ---- 3:45 kết
  dict(v='MN', t='Ông Khải không bán nhà nữa. Ông bán vé xem hũ. Khách đông gấp đôi.', sh=[sh('X15', F(), M(900, 700)), sh('X15', C(800, 700), C(960, 820))],
       pop=[(0.4, 'VÉ XEM HŨ 50.000đ', '#ffd84a')], sfx=[(0.42, 'xu', 0.8), (0.7, 'cheer', 0.25, 2.0)]),
  dict(v='MX', t='Con giữ của nhà này ba đời. Nhà này giàu nhất phố… về nợ.', sh=[sh('B05', BC(672, 900, 1344), BC(640, 1250, 1000))], sfx=[(0.98, 'coc', 1)], gap=0.5),
  dict(v='MN', t='Ba trăm năm ngồi nóc tủ, tao học được một điều: hũ nào không ai dám mở, đừng mở.', sh=[sh('S33', F(), M(1300, 520)), sh('S34', M(880, 420), C(880, 330))], gap=0.5),
  dict(v='MN', t='Thứ Hai này: một nhà chung cư mất thằng con ba ngày… mà không ai biết. Vì cả nhà đang bận nhìn điện thoại.', sh=[sh('B06', BC(672, 900, 1344), BC(900, 700, 900))],
       pop=[(0.03, 'TẬP SAU · THỨ HAI', '#ffd84a')], sfx=[(0.03, 'whoosh', 0.5)]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì đêm nay, có đứa ngồi sau tủ nhà mày đếm số video mày chưa xem.', sh=[sh('S06', F(), F(), blur=14, dark=0.55, cut=dict(MANO, frm=[260, 1100, 0.8], to=[260, 160, 0.8], bob=1))],
       pop=[(0.05, 'ĐĂNG KÝ', '#ffffff')], sfx=[(0.98, 'coc', 1)], gap=1.2),
]

def lines():
    out, i = [], 0
    for it in SPEC:
        if it['v']:
            i += 1; it['i'] = i; out.append({'i': i, 'voice': it['v'], 'text': it['t']})
    return out

def dur(p):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(p)]))

def img_src(im):
    if im.startswith('X'): return ROOT / 'p03' / 'scenes' / f'{im}.png'
    if im.startswith('N'): return ROOT / 'p02' / 'scenes' / f'{im}.png'
    if im.startswith('B'): return ROOT / 'assets' / 'muse-v2' / f'{im}.png'
    return ROOT / 'ep01' / 'scenes' / f'{im}.png'

def sfx_src(name):
    for d in ('p03', 'p02', 'sh6'):
        if (PUB / d / 'sfx' / f'{name}.wav').exists(): return f'{d}/sfx/{name}.wav'
    raise SystemExit(f'thiếu sfx {name}')

def timeline():
    L = lines(); (PUB / 'p03' / 'vo').mkdir(parents=True, exist_ok=True); (PUB / 'p03' / 'img').mkdir(parents=True, exist_ok=True)
    for it in SPEC:
        if not it['v']: continue
        src = LONG / 'tts' / f"{it['i']:03d}.wav"; dst = PUB / 'p03' / 'vo' / src.name
        if not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime:
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', it.get('fx', FX[it['v']]) + ',aresample=48000', '-ac', '2', str(dst)], check=True)
    for im in {s['img'] for it in SPEC for s in it['sh']}:
        dst = PUB / 'p03' / 'img' / f'{im}.png'
        if not dst.exists(): shutil.copy(img_src(im), dst)
    dst = PUB / 'p03' / 'img' / 'cut_B02.png'
    if not dst.exists(): shutil.copy(PUB / 'p02' / 'img' / 'cut_B02.png', dst)
    t, shots, cuts, pops, sfx, subs, coms, voice, mutes, live = 0.3, [], [], [], [], [], [], [], [], []
    for it in SPEC:
        if it['v']:
            d = dur(PUB / 'p03' / 'vo' / f"{it['i']:03d}.wav")
            voice.append({'t': round(t, 3), 'src': f"p03/vo/{it['i']:03d}.wav"})
            subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
        else:
            d = it['dur']
        span = d + it.get('gap', 0.25)
        n = len(it['sh'])
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
            fr, name, vol = x[:3]
            sfx.append({'t': round(t + d * fr, 3), 'src': sfx_src(name), 'vol': vol, **({'dur': x[3]} if len(x) > 3 else {})})
        for fr, u, c in it.get('com', []):
            coms.append({'t': round(t + d * fr, 3), 'u': u, 'c': c, 'end': round(t + span, 3)})
            sfx.append({'t': round(t + d * fr, 3), 'src': 'sh6/sfx/pop.wav', 'vol': 0.45})
        if it.get('mute'): mutes.append([round(t - 0.2, 3), round(t + span, 3)])
        if it.get('live'): live.append([round(t, 3), round(t + span, 3)])
        t += span
    total = round(t + 0.8, 3)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    json.dump({'w': 1920, 'h': 1080, 'duration': total, 'shots': shots, 'cuts': cuts, 'pops': pops, 'sfx': sfx, 'subs': subs,
               'comments': coms, 'voice': voice, 'mutes': mutes, 'live': live, 'music': {'src': 'p01/music.wav', 'len': 121.0, 'vol': 0.13}},
              open(OUT, 'w'), ensure_ascii=False, indent=0)
    print('timeline', total, 's,', len(shots), 'shots', len(L), 'câu')

if __name__ == '__main__':
    if sys.argv[1] == 'lines':
        LONG.mkdir(parents=True, exist_ok=True); json.dump(lines(), open(LONG / 'lines.json', 'w'), ensure_ascii=False, indent=0); print(len(lines()), 'câu')
    else:
        timeline()
