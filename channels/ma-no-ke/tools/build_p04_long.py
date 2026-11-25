# build_p04_long.py lines|timeline — bản long P04 "Ma giấu: mất con ba ngày không ai biết" (16:9) cho engine Remotion `Story`.
#   lines    → p04/long/lines.json (cho tts_lines.py; kèm câu 900 "chốt đơn" làm sfx vọng)
#   timeline → fx giọng vào video/public/p04/vo, chép ảnh, ghi video/src/data/p04-long.json
# Khuôn y hệt build_p03_long.py. SFX riêng: tools/make_p04_sfx.sh → video/public/p04/sfx; tìm p04 → p03 → p02 → sh6.
# Giọng (user giao "làm hết" 2026-11-23): MG Thanh Bình, ME Ngọc Huyền, BIN Trúc Ly nâng tông, BO Quốc Tuấn.
import json, sys, subprocess, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
LONG = ROOT / 'p04' / 'long'
PUB = ROOT / 'video' / 'public'
OUT = ROOT / 'video' / 'src' / 'data' / 'p04-long.json'
FX = {'MN': 'atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25',
      'MG': 'atempo=1.08', 'ME': 'anull', 'BO': 'anull',
      'BIN': 'asetrate=48000*1.12,aresample=48000,atempo=0.92'}
CHOTDON = 'lowpass=f=1800,highpass=f=300,aecho=0.8:0.7:120:0.45,volume=0.8'   # "chốt đơn" vọng từ góc phòng
IW, IH = 2048, 1152
BW, BH = 1344, 1792

def _c(cx, cy, w, W=IW, H=IH):
    h = w * 9 / 16
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def F(cx=1024, cy=576): return [cx, cy, 2048]
def M(cx, cy): return _c(cx, cy, 1350)
def C(cx, cy, w=1000): return _c(cx, cy, w)
def BC(cx=540, cy=660, w=900): return _c(cx, cy, w, BW, BH)     # B06: mặt ma giấu ~(540,640), Bin bùn ~(990,1150)
def sh(img, a, b=None, **o): return dict(img=img, a=a, b=b or a, **o)
MANO = dict(img='p03/img/cut_B02.png', size=1344)
MGF = BC(540, 660, 820)          # cận mặt ma giấu
BUN = BC(990, 1180, 700)         # cận Bin bùn cầm máy tính bảng
# Mẹ Linh: G11 là SHEET 4 tư thế nền chàm trơn (bài học P03 X11) → cutout tools/cut_sheet.py --grid 4x1:
#   0 cười bán hàng cầm hũ (tay phải bị cắt mép ô → đặt sát mép phải, lẹm ra ngoài khung) · 1 cúi điện thoại · 2 giật mình đèn pin · 3 phụng phịu
ME_SIZE = {0: (485, 907), 1: (412, 871), 2: (493, 849), 3: (390, 849)}
def ME(pose, side='r', W=1920, H=1080, hfrac=0.92, wob=2):
    pw, ph = ME_SIZE[pose]; h = H * hfrac; s = h / ph; w = pw * s
    x = {'l': W * 0.05, 'c': (W - w) / 2, 'r': W * 0.95 - w, 'R': W - w * 0.9}[side]; y = H - h
    return dict(img=f'p04/img/cut_G11_{pose}.png', size=pw, frm=[round(x), round(y + 40), round(s, 3)], to=[round(x), round(y), round(s, 3)], bob=0, wob=wob)

SPEC = [
  # ---- 0:00 cold open: chỉ tiếng nhai
  dict(v=None, dur=2.4, sh=[sh('G01', M(675, 600), M(640, 640), dark=0.15)], sfx=[(0.05, 'nhai', 0.9), (0.3, 'nhai', 0.9), (0.55, 'nhai', 0.9)],
       pop=[(0.05, 'BỮA TỐI · NGÀY THỨ BA', '#ffd84a')], mute=True),
  dict(v=None, dur=1.1, sh=[sh('G01', C(960, 1000, 900), C(960, 1000, 760))], mute=True),   # cận mâm, chưa lộ ghế thứ tư
  dict(v='ME', t='Bin ăn nhanh lên con. Mẹ đang live.', sh=[sh('G01', M(500, 500), M(560, 500), blur=14, dark=0.5, cut=ME(1, 'r'))], mute=True, live=True),
  dict(v='MG', t='Cứ giục đi. Có nhai cả đời… cũng không ra tiếng đâu.', sh=[sh('B06', BC(500, 620, 1000), MGF)], pop=[(0.05, 'MA GIẤU', '#ffd84a')], gap=0.8),
  # ---- 0:12 Ma Nó mồi
  dict(v='MN', t='Lại mò vào à? Khách hôm nay làm nghề giấu người. Tám trăm năm, lần đầu tiên nó thua.', sh=[sh('S01', F(), M(920, 420)), sh('S26', M(900, 480), C(820, 360))],
       sfx=[(0, 'coc', 1), (0.05, 'braam', 0.35)], pop=[(0.75, 'LẦN ĐẦU THUA', '#ff5a4a')]),
  dict(v='MN', t='Mà đến giờ nó vẫn chưa biết mình thua ai.', sh=[sh('S34', M(880, 420), C(880, 330))], gap=0.5),
  # ---- 0:25 luật nghề
  dict(v='MG', t='Tao là ma giấu. Nghề tao: giấu người, chủ yếu trẻ con mải chơi.', sh=[sh('B06', BC(500, 620, 1000), BC(540, 660, 820))], pop=[(0.3, 'NGHỀ: GIẤU NGƯỜI', '#ffd84a')]),
  dict(v='MG', t='Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.', sh=[sh('B06', MGF, BC(540, 640, 700)), sh('G12', M(700, 700), C(576, 700))],
       pop=[(0.3, 'LUẬT: GÕ MÂM · GỌI TÊN → TRẢ', '#ffd84a')], sfx=[(0.42, 'boong', 0.7)]),
  dict(v='MG', t='Luật còn một cái hạn. Trước sáng ngày thứ tư, nhà nó phải đi tìm. Không ai tìm, đứa trẻ tự đi về, thì tám trăm năm nghề tao… thành trò cười.', sh=[sh('B06', BC(540, 660, 1000), BC(540, 640, 640))],
       pop=[(0.05, 'HẠN: SÁNG NGÀY THỨ TƯ', '#ff5a4a')], sfx=[(0.05, 'bassdown', 0.5), (0.95, 'tick', 0.5)]),   # v4: đồng hồ + cái giá của con ma
  dict(v='MN', t='Tám trăm năm chưa hỏng lần nào. Cho đến căn hai bảy không tám.', sh=[sh('S26', M(900, 480), C(820, 360))], pop=[(0.6, 'CĂN 27-08', '#ffffff')], gap=0.5),
  # ---- 0:45 căn 27-08
  dict(v='MG', t='Bố họp trực tuyến. Mẹ livestream. Thằng con chơi game. Ba người, ba cái màn hình, một cái sofa.', sh=[sh('G02', F(), C(512, 520, 1100)), sh('G02', C(1296, 360, 1100), C(1456, 760, 1000))],
       sfx=[(0.05, 'hop', 0.6), (0.3, 'chotdon', 0.6)], pop=[(0.7, '3 NGƯỜI · 3 MÀN HÌNH', '#ffd84a')]),
  dict(v='ME', t='Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt!', sh=[sh('G12', F(), C(576, 700, 1200), cut=ME(0, 'R'))],
       pop=[(0.05, 'MÂM ĐỒNG PHONG THỦY', '#ffd84a')], sfx=[(0.35, 'boong', 0.35), (0.95, 'pops', 0.5)], com=[(0.6, 'Thu Hà', 'Chốt 1 chị ơiii'), (0.85, 'Bé Na', 'Ib giá ạ')], live=True),
  dict(v='MG', t='Tối thứ Sáu, thằng Bin trốn làm bài, ra cầu thang thoát hiểm chơi game. Tao đóng cửa lại, che mắt cả nhà. Dễ.', sh=[sh('G03', F(), M(1100, 560)), sh('B06', MGF, BC(540, 650, 700))],
       sfx=[(0.55, 'cua', 0.7)], pop=[(0.97, 'DỄ.', '#ffffff')], gap=0.5),
  # ---- 1:05 ngày một, ngày hai
  dict(v='MG', t='Tao ngồi chờ tiếng mâm. Chín giờ. Mười giờ. Nửa đêm.', sh=[sh('G03', C(880, 520), C(880, 500, 800))],
       pop=[(0.0, 'NGÀY 1', '#ffffff', 0.4), (0.45, '21:00', '#ffd84a', 0.62), (0.62, '22:00', '#ffd84a', 0.8), (0.8, '0:00', '#ff5a4a')], sfx=[(0.45, 'tick', 0.5), (0.62, 'tick', 0.5), (0.8, 'tick', 0.5)]),
  dict(v='MG', t='Không ai gõ. Bố tưởng Bin ở với mẹ. Mẹ tưởng Bin ở với bố.', sh=[sh('G02', C(1456, 840, 1100), C(1456, 820, 900), dark=0.25), sh('G02', M(900, 450), M(1200, 400))], pop=[(0.05, 'NGÀY 1 · 0 TIẾNG GỌI', '#ff5a4a')]),
  dict(v='BIN', t='Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú?', sh=[sh('G03', C(1392, 500), C(1392, 480, 800))]),
  dict(v='MG', t='Tám trăm năm, chưa đứa nào hỏi tao câu đó.', sh=[sh('G03', C(880, 500, 800), C(880, 500, 640))], gap=0.5),
  dict(v='MN', t='Ngày thứ hai, thằng Bin đặt trà sữa, ghi chú: treo ở cửa thoát hiểm tầng hai bảy. Sạc ké ổ điện bảo trì. Nó gọi chỗ này là căn cứ bí mật.',
       sh=[sh('G04', F(), M(900, 600)), sh('G03', C(1260, 680, 900), C(1260, 700, 700)), sh('G04', C(420, 700), C(420, 680, 800))],
       pop=[(0.0, 'NGÀY 2', '#ffffff', 0.3), (0.3, 'TREO CỬA THOÁT HIỂM', '#ffd84a', 0.62), (0.75, 'CĂN CỨ BÍ MẬT', '#7dff9a')], sfx=[(0.3, 'ting', 0.7)]),
  dict(v='MG', t='Tao là ma giấu, hay là trông trẻ?', sh=[sh('G04', C(1360, 620, 900), C(1360, 600, 700))], gap=0.5),
  # ---- 1:35 tự ái nghề
  dict(v='MG', t='Tao nặn một thằng Bin bằng bùn chậu cây, cho về ngồi sofa. Mắt hai hạt na. Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện, rồi đi tìm.',
       sh=[sh('G05', F(), M(1050, 500)), sh('G05', C(840, 720, 900), C(840, 720, 700)), sh('B06', BUN, BC(990, 1150, 560))],
       sfx=[(0.1, 'nan', 0.6), (0.28, 'nan', 0.6)], pop=[(0.3, 'BIN BÙN', '#ffd84a', 0.6), (0.6, 'NHÌN LÀ BIẾT GIẢ', '#ffffff')]),
  # ---- 2:25 chiều ngày thứ ba
  dict(v='MN', t='Chiều ngày thứ ba, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại. Ngoan như tượng.', sh=[sh('G07', F(), M(700, 640)), sh('G07', C(620, 520, 900), C(620, 500, 700))],
       pop=[(0.3, 'XONG BÀI CẢ TUẦN', '#7dff9a', 0.7), (0.78, 'NGOAN NHƯ TƯỢNG', '#ffd84a')]),
  dict(v='ME', t='Con nhà mình tự giác lắm cả nhà ơi. Bí quyết ở link dưới bình luận nha.', sh=[sh('G07', C(1280, 440, 1100), C(1150, 480, 900))],
       com=[(0.4, 'Mẹ Su', 'Bí quyết gì chị ơi 😍'), (0.75, 'Hằng Ny', 'Xin link!!!')], sfx=[(0.3, 'pops', 0.5)], live=True),
  dict(v='MG', t='Nhà nó phát hiện thật. Phát hiện ra… thằng này ngoan hơn.', sh=[sh('B06', MGF, BC(540, 650, 700))], pop=[(0.6, 'NGOAN HƠN', '#ff5a4a')], sfx=[(0.6, 'bassdown', 0.4)], gap=0.6),
  # ---- 1:55 bữa tối ngày thứ ba (khoảnh khắc rợn duy nhất): nhạc tắt từ đây tới hết "tao sợ" + im 2 s
  dict(v='MG', t='Bữa tối ngày thứ ba. Thằng bùn ngồi đúng ghế, cầm đúng máy tính bảng.', sh=[sh('G01', F(), M(1200, 640)), sh('G01', C(1560, 800, 1000), C(1560, 780, 800))], mute=True),
  dict(v='MG', t='Bốn người. Ba tiếng nhai.', sh=[sh('G01', M(900, 700), C(1000, 900, 1100))], mute=True, gap=0.3),
  dict(v=None, dur=2.2, sh=[sh('G01', C(1000, 900, 1100), C(1000, 900, 950), dark=0.2)], sfx=[(0.05, 'nhai', 0.9), (0.3, 'nhai', 0.9), (0.55, 'nhai', 0.9)], mute=True),
  dict(v='ME', t='Hôm nay Bin ngoan thế. Không đòi gì.', sh=[sh('G01', M(1300, 500), M(1320, 480), blur=14, dark=0.5, cut=ME(1, 'l'))], mute=True),
  dict(v='BO', t='Ừ. Em xin phép tắt cam.', sh=[sh('G02', C(512, 520, 900), C(512, 500, 760))], sfx=[(0.8, 'hop', 0.4)], mute=True),
  dict(v='MG', t='Tao đứng ngoài ban công. Lần đầu tiên trong đời… tao sợ.', sh=[sh('G06', F(), M(1200, 400)), sh('G06', C(1480, 440, 900), C(1480, 420, 700))], mute=True, gap=2.0),
  dict(v='BIN', t='Hết trà sữa rồi. Sáng mai cháu tự về. Mà mẹ cháu có hỏi cháu không?', sh=[sh('G04', C(420, 700, 1000), C(420, 680, 800))], pop=[(0.3, 'SÁNG MAI TỰ VỀ', '#ffd84a')], mute=True),
  dict(v='MG', t='Tao không trả lời. Nghề tao là giấu, không phải nói dối.', sh=[sh('G04', C(1360, 620, 800), C(1360, 600, 640))], mute=True, gap=0.8),
  # ---- 2:45 hai giờ sáng
  dict(v='MG', t='Hai giờ sáng. Còn ba tiếng nữa là trời sáng. Nhà này không gõ, thì tao làm cho nó gõ.', sh=[sh('B06', BC(540, 660, 1000), BC(540, 640, 640))],
       pop=[(0.0, '2:00 SÁNG', '#ffd84a', 0.4), (0.4, 'CÒN 3 GIỜ', '#ff5a4a')], sfx=[(x / 10, 'tick', 0.45) for x in range(0, 10, 2)] + [(0.9, 'tick', 0.5), (0.95, 'tick', 0.5)], mute=True),
  dict(v='MG', t='Tao rút cầu dao cả tầng.', sh=[sh('G08', F(), M(900, 500))], sfx=[(0.75, 'cauda', 1), (0.8, 'mayoff', 0.5)], mute=True, gap=0.5),
  dict(v='MG', t='Rồi tao đập cửa thoát hiểm. Thình. Thình. Thình.', sh=[sh('G04', C(1500, 500, 1100), C(1500, 480, 900), dark=0.6, shake=5)], sfx=[(0.5, 'dapcua', 0.9), (0.7, 'dapcua', 0.9), (0.9, 'dapcua', 1)], mute=True),
  dict(v='MN', t='Bà mẹ tưởng trộm vào cướp hàng. Vớ thứ gần nhất trên kệ: cái mâm đồng phong thủy. Phang thẳng vào cửa thoát hiểm.', sh=[sh('G12', M(700, 700), C(576, 700), dark=0.3), sh('G09', F(), M(500, 450), shake=6)],
       sfx=[(0.9, 'boong2', 1)], pop=[(0.9, 'BOONG!', '#ffd84a')], mute=True),
  dict(v='ME', t='Bin đâu! Cầm đèn pin cho mẹ!', sh=[sh('G09', C(608, 420), C(608, 400, 800), dark=0.2, blur=4, cut=ME(2, 'r', wob=5))], mute=True),
  dict(v='MG', t='Gọi tên để sai cầm đèn pin. Luật không hỏi gọi để làm gì. Có tiếng mâm, có tên. Tao trả.', sh=[sh('B06', MGF, BC(540, 640, 700))],
       pop=[(0.0, 'GỌI ĐỂ… CẦM ĐÈN PIN', '#ffffff', 0.5), (0.55, 'GÕ MÂM ✔ · GỌI TÊN ✔', '#7dff9a', 0.85), (0.85, '→ TRẢ', '#ffd84a')]),
  dict(v='BIN', t='Mẹ… mẹ tìm con à?', sh=[sh('G09', C(1504, 520, 900), C(1504, 500, 700))], sfx=[(0, 'cua', 0.5)], gap=0.6),
  # ---- 3:05 kết
  dict(v='MN', t='Sáng ra, nắng chiếu vào sofa. Thằng bùn rã thành một đống đất chậu cây.', sh=[sh('G10', F(), M(700, 560)), sh('G10', C(320, 800, 900), C(320, 840, 700))], sfx=[(0.0, 'sang', 0.4), (0.62, 'dat', 0.7)]),
  dict(v='ME', t='Tiếc thế. Đang ngoan.', sh=[sh('G10', M(1300, 560), M(1350, 560), blur=5, dark=0.25, cut=ME(3, 'r'))], gap=0.4),
  dict(v='MN', t='Thằng Bin thật kể chuyện ba ngày ở căn cứ bí mật được đúng hai câu. Rồi cả nhà lại cúi xuống điện thoại.', sh=[sh('G10', M(900, 600), C(940, 900, 1000)), sh('G10', C(940, 1000, 900), C(940, 1000, 640))],
       pop=[(0.7, 'LẠI CÚI XUỐNG MÁY', '#ff5a4a')]),
  dict(v='MG', t='Thằng bùn được học sinh giỏi. Tao đang tính mở trung tâm.', sh=[sh('G10', C(1680, 300, 800), C(1680, 290, 600)), sh('B06', MGF, BC(540, 640, 700))],
       sfx=[(0.98, 'coc', 1)], pop=[(0.55, 'TRUNG TÂM MA GIẤU — NHẬN NẶN CON NGOAN', '#ffd84a')], gap=0.6),
  dict(v='MN', t='Tối nay ăn cơm, đếm xem nhà mày có mấy tiếng nhai.', sh=[sh('S33', F(), M(1300, 520)), sh('S34', M(880, 420), C(880, 330))], gap=0.6),
  dict(v='MN', t='Tập sau: bến cát lậu mùa lũ, và một con ma da bảy năm chưa được thay ca.', sh=[sh('B07', BC(672, 896, 1344), BC(672, 800, 1000))],
       pop=[(0.03, 'TẬP SAU', '#ffd84a')], sfx=[(0.03, 'whoosh', 0.5)]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì mai mẹ mày gõ mâm, người về chưa chắc đã là mày.', sh=[sh('S06', F(), F(), blur=14, dark=0.55, cut=dict(MANO, frm=[260, 1100, 0.8], to=[260, 160, 0.8], bob=1))],
       pop=[(0.05, 'ĐĂNG KÝ', '#ffffff')], sfx=[(0.98, 'coc', 1)], gap=1.2),
]
EXTRA = [{'i': 900, 'voice': 'ME', 'text': 'Chốt đơn! Chốt!'}]   # → p04/sfx/chotdon.wav

def lines():
    out, i = [], 0
    for it in SPEC:
        if it['v']:
            i += 1; it['i'] = i; out.append({'i': i, 'voice': it['v'], 'text': it['t']})
    return out

def dur(p):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(p)]))

def img_src(im):
    if im.startswith('G'): return ROOT / 'p04' / 'scenes' / f'{im}.png'
    if im.startswith('B'): return ROOT / 'assets' / 'muse-v2' / f'{im}.png'
    return ROOT / 'ep01' / 'scenes' / f'{im}.png'

def sfx_src(name):
    for d in ('p04', 'p03', 'p02', 'sh6'):
        if (PUB / d / 'sfx' / f'{name}.wav').exists(): return f'{d}/sfx/{name}.wav'
    raise SystemExit(f'thiếu sfx {name}')

def fxwav(src, dst, fx):
    if not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime:
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', fx + ',aresample=48000', '-ac', '2', str(dst)], check=True)

def prep():
    lines(); (PUB / 'p04' / 'vo').mkdir(parents=True, exist_ok=True); (PUB / 'p04' / 'img').mkdir(parents=True, exist_ok=True); (PUB / 'p04' / 'sfx').mkdir(parents=True, exist_ok=True)
    for it in SPEC:
        if it['v']: fxwav(LONG / 'tts' / f"{it['i']:03d}.wav", PUB / 'p04' / 'vo' / f"{it['i']:03d}.wav", it.get('fx', FX[it['v']]))
    fxwav(LONG / 'tts' / '900.wav', PUB / 'p04' / 'sfx' / 'chotdon.wav', CHOTDON)

def copy_imgs(spec):
    for im in {s['img'] for it in spec for s in it['sh']}:
        dst = PUB / 'p04' / 'img' / f'{im}.png'
        if not dst.exists(): shutil.copy(img_src(im), dst)

def build(spec, voice_of, W, H, t=0.3, tail=0.8):
    """spec → dict timeline cho Story. voice_of(it) → đường dẫn wav (tương đối public/)."""
    shots, cuts, pops, sfx, subs, coms, voice, mutes, live = [], [], [], [], [], [], [], [], []
    for it in spec:
        if it['v']:
            src = voice_of(it); d = dur(PUB / src)
            voice.append({'t': round(t, 3), 'src': src}); subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
        else:
            d = it['dur']
        span = d + it.get('gap', 0.25); n = len(it['sh'])
        for k, s in enumerate(it['sh']):
            t0, t1 = t + span * k / n, t + span * (k + 1) / n
            w, h = (BW, BH) if s['img'].startswith('B') else (IW, IH)
            shots.append({'img': f"p04/img/{s['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': s['a'], 'b': s['b'],
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
        if it.get('mute'): mutes.append([round(max(t - 0.2, 0), 3), round(t + span, 3)])
        if it.get('live'): live.append([round(t, 3), round(t + span, 3)])
        t += span
    return {'w': W, 'h': H, 'duration': round(t + tail, 3), 'shots': shots, 'cuts': cuts, 'pops': pops, 'sfx': sfx, 'subs': subs,
            'comments': coms, 'voice': voice, 'mutes': mutes, 'live': live, 'music': {'src': 'p01/music.wav', 'len': 121.0, 'vol': 0.13}}

def timeline():
    prep(); copy_imgs(SPEC)
    tl = build(SPEC, lambda it: f"p04/vo/{it['i']:03d}.wav", 1920, 1080)
    OUT.parent.mkdir(parents=True, exist_ok=True); json.dump(tl, open(OUT, 'w'), ensure_ascii=False, indent=0)
    print('timeline', tl['duration'], 's,', len(tl['shots']), 'shots', len(lines()), 'câu,', sum(len(it['t'].split()) for it in SPEC if it['v']), 'chữ')

if __name__ == '__main__':
    if sys.argv[1] == 'lines':
        LONG.mkdir(parents=True, exist_ok=True); L = lines() + EXTRA
        json.dump(L, open(LONG / 'lines.json', 'w'), ensure_ascii=False, indent=0); print(len(L), 'câu')
    else:
        timeline()
