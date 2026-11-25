# build_p04_shorts.py lines|timeline [SH1 …] — 7 short P04 (9:16), khuôn P03 v4: 5 TRỌN có punchline + 2 TRAILER, 30–40 s,
# không intro chung, pop "MA GIẤU" lần đầu nó xuất hiện, kết Ma Nó 1 câu chỉ link (end()).
#   lines    → p04/shorts/lines.json (chỉ câu MỚI; câu trùng long dùng lại wav đã fx của long)
#   timeline → fx câu mới vào video/public/p04/vo/s*.wav, ghi video/src/data/p04-shN.json
# TTS câu mới: tts_lines.py p04/shorts/lines.json p04/shorts/tts --best 4 --temp 0.5
import json, sys, subprocess, hashlib, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from build_p04_long import ROOT, PUB, FX, MANO, ME, IW, IH, BW, BH, sh, copy_imgs, build, fxwav

SHORTS = ROOT / 'p04' / 'shorts'
LONG_LINES = {(l['voice'], l['text']): l['i'] for l in json.load(open(ROOT / 'p04' / 'long' / 'lines.json'))}
FAST = {'MN': 'atempo=1.06,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25'}

def _v(cx, cy, w, W=IW, H=IH):
    h = w * 16 / 9
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def V(cx, cy=576): return _v(cx, cy, 648)
def VC(cx, cy): return _v(cx, cy, 460)
def VX(cx, cy): return _v(cx, cy, 340)
def BV(cx, cy, w): return _v(cx, cy, w, BW, BH)
LINK = '▼ BẢN ĐẦY ĐỦ: LINK DƯỚI'
MGB = lambda: sh('B06', BV(560, 700, 760), BV(540, 660, 560))     # cận mặt ma giấu (B06 dọc)
def me(pose, h=0.6, wob=2): return ME(pose, 'c', 1080, 1920, h, wob)

def end(text, pop):
    return dict(v='MN', t=text, sh=[sh('S06', V(1024), V(1100), blur=14, dark=0.55, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
                pop=[(0.0, pop, '#ffd84a', 0.6), (0.6, LINK, '#ffffff')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.2)

S = {}
S['SH1'] = [   # TRỌN — Hồ sơ ma giấu
  dict(v='MN', t='Hồ sơ ma giấu. Tám trăm năm giấu người, lần đầu phải trông trẻ.', sh=[sh('B06', BV(560, 760, 900), BV(540, 660, 640), flash=1)],
       pop=[(0.0, 'HỒ SƠ: MA GIẤU', '#ffd84a')], sfx=[(0, 'braam', 0.35)], gap=0.2),
  dict(v='MN', t='Một. Nó giấu người, chủ yếu trẻ con mải chơi.', sh=[sh('G03', V(1100), VC(1100, 520))], pop=[(0.05, '1. GIẤU TRẺ', '#ffffff')]),
  dict(v='MN', t='Hai. Nó che mắt. Đứa trẻ đứng ngay đấy, cả nhà không thấy.', sh=[sh('G06', V(1300, 576), VC(1480, 440))], pop=[(0.05, '2. CHE MẮT', '#ffffff')]),
  dict(v='MN', t='Ba. Muốn nó trả thì gõ mâm đồng, gọi tên. Ngày xưa mất đứa trẻ, cả làng ra gõ.', sh=[sh('G12', V(576, 576), VC(576, 700))],
       pop=[(0.05, '3. GÕ MÂM · GỌI TÊN', '#ffffff')], sfx=[(0.35, 'boong', 0.6), (0.85, 'boong', 0.5)], gap=0.3),
  dict(v='MG', t='Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.', sh=[MGB()], pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.4)], gap=0.5),
  dict(v='MN', t='Ngày nay mất đứa trẻ… phải đợi điện thoại hết pin.', sh=[sh('G02', V(1296, 576), V(1456, 700))], pop=[(0.55, '4. ĐỢI HẾT PIN', '#ff5a4a')], sfx=[(0.55, 'bassdown', 0.5)], gap=0.8),
  end('Căn hai bảy không tám đợi ba ngày. Tao kể ở bản đầy đủ, link dưới.', 'BA NGÀY?'),
]
S['SH2'] = [   # TRỌN — Cách sống sót khi bị ma giấu
  dict(v='MN', t='Cách sống sót khi bị ma giấu. Học thằng Bin, mười tuổi.', sh=[sh('G03', V(1100), VC(1392, 520), flash=1)], pop=[(0.0, 'BỊ MA GIẤU?', '#ffd84a')], gap=0.2),
  dict(v='MG', t='Tao ngồi chờ tiếng mâm. Chín giờ. Mười giờ. Nửa đêm.', sh=[sh('G03', VC(880, 520), VX(880, 500))], pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.4), (0.8, '0:00', '#ff5a4a')], sfx=[(0.45, 'tick', 0.5), (0.62, 'tick', 0.5), (0.8, 'tick', 0.5)]),
  dict(v='MN', t='Một. Đừng sợ. Hỏi wifi.', sh=[sh('G03', VC(1392, 520), VX(1392, 500))], pop=[(0.05, '1. HỎI WIFI', '#ffffff')], gap=0.1),
  dict(v='BIN', t='Chú cũng trốn học à? Ở đây bắt được wifi nhà cháu không chú?', sh=[sh('G03', V(1100), VC(1392, 520))]),
  dict(v='MG', t='Tám trăm năm, chưa đứa nào hỏi tao câu đó.', sh=[sh('G03', VC(880, 520), VX(880, 500))], gap=0.3),
  dict(v='MN', t='Hai. Đặt trà sữa, ghi chú: treo cửa thoát hiểm.', sh=[sh('G03', VC(1260, 680), VX(1260, 700))], pop=[(0.05, '2. ĐẶT TRÀ SỮA', '#ffffff')], sfx=[(0.6, 'ting', 0.7)]),
  dict(v='MN', t='Ba. Sạc ké ổ bảo trì. Gọi là căn cứ bí mật.', sh=[sh('G04', V(500), VC(420, 700))], pop=[(0.05, '3. SẠC KÉ', '#ffffff', 0.55), (0.6, 'CĂN CỨ BÍ MẬT', '#7dff9a')], gap=0.4),
  dict(v='MG', t='Tao là ma giấu, hay là trông trẻ?', sh=[sh('G04', VC(1360, 640), VX(1360, 600))], pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.4)], gap=0.8),
  end('Nhà nó ba ngày không ai tìm. Tao kể ở bản đầy đủ, link dưới.', 'KHÔNG AI TÌM?'),
]
S['SH3'] = [   # TRỌN — Bí quyết con ngoan
  dict(v='ME', t='Con nhà mình tự giác lắm cả nhà ơi.', sh=[sh('G07', V(900), VC(1100, 520), flash=1)], pop=[(0.0, 'CON NGOAN NHỜ… ?', '#ffd84a')], live=True, sfx=[(0.5, 'pops', 0.4)]),
  dict(v='MG', t='Tao nặn một thằng Bin bằng bùn chậu cây. Nhìn là biết giả. Kiểu gì nhà nó cũng phát hiện.', sh=[sh('G05', V(1100, 576), VC(1152, 560)), sh('G05', VC(840, 720), VX(840, 720))],
       pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.4), (0.45, 'NHÌN LÀ BIẾT GIẢ', '#ffffff')], sfx=[(0.1, 'nan', 0.6)]),
  dict(v='MN', t='Chiều đó, thằng bùn làm xong sạch bài tập cả tuần. Không cãi, không đòi điện thoại.', sh=[sh('G07', V(620), VC(620, 520))], pop=[(0.35, 'XONG BÀI CẢ TUẦN', '#7dff9a')]),
  dict(v='ME', t='Bí quyết ở link dưới bình luận nha.', sh=[sh('G07', VC(1280, 440), VX(1280, 420))], com=[(0.3, 'Mẹ Su', 'Bí quyết gì chị ơi 😍'), (0.7, 'Hằng Ny', 'Xin link!!!')], live=True, gap=0.4),
  dict(v='MN', t='Bí quyết là bùn.', sh=[sh('G05', VX(840, 720), VX(840, 700))], pop=[(0.2, 'BÍ QUYẾT = BÙN', '#ff5a4a')], sfx=[(0.2, 'bassdown', 0.5)], gap=0.8),
  dict(v='MG', t='Thằng bùn được học sinh giỏi. Tao đang tính mở trung tâm.', sh=[MGB()], pop=[(0.5, 'NHẬN NẶN CON NGOAN', '#ffd84a')], sfx=[(0.98, 'coc', 1)], gap=0.5),
  end('Còn thằng Bin thật đang ở đâu? Link bản đầy đủ ngay dưới.', 'BIN THẬT ĐÂU?'),
]
S['SH4'] = [   # TRỌN — Mâm đồng phong thủy
  dict(v='ME', t='Mâm đồng phong thủy, gõ một cái tài lộc về! Còn ba suất cuối! Chốt!', sh=[sh('G12', V(576, 576), VC(576, 700), flash=1, cut=ME(0, 'R', 1080, 1920, 0.5))],
       pop=[(0.0, 'GÕ LÀ CÓ LỘC?', '#ffd84a')], sfx=[(0.35, 'boong', 0.4), (0.95, 'pops', 0.5)], com=[(0.6, 'Thu Hà', 'Chốt 1 chị ơiii')], live=True),
  dict(v='MN', t='Mâm đồng. Ngày xưa gõ để gọi người về. Giờ gõ để gọi đơn về.', sh=[sh('G02', V(1100), VC(960, 400))], pop=[(0.5, 'GỌI NGƯỜI → GỌI ĐƠN', '#ffffff')], sfx=[(0.75, 'chotdon', 0.6)]),
  dict(v='MG', t='Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.', sh=[MGB(), sh('G12', VC(576, 700), VX(576, 700))], pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.3), (0.35, 'GÕ MÂM · GỌI TÊN → TRẢ', '#ffd84a')], sfx=[(0.42, 'boong', 0.6)]),
  dict(v='MG', t='Tao giấu con nhà nó ba ngày, chỉ chờ một tiếng mâm.', sh=[sh('G03', VC(880, 520), VX(880, 500))]),
  dict(v='MG', t='Nhà nó bán ba trăm cái mâm. Không gõ cái nào.', sh=[sh('G12', VC(576, 700), VX(576, 700)), sh('B06', BV(540, 660, 560), BV(540, 640, 460))],
       pop=[(0.3, '300 MÂM', '#ffd84a', 0.6), (0.6, '0 TIẾNG GÕ', '#ff5a4a')], sfx=[(0.6, 'bassdown', 0.5)], gap=0.8),
  end('Đến hai giờ sáng thì có người gõ. Tao kể ở bản đầy đủ, link dưới.', 'AI GÕ?'),
]
S['SH5'] = [   # TRỌN — Ông bố họp trực tuyến
  dict(v=None, dur=1.4, sh=[sh('G02', V(512, 576), VC(512, 640), flash=1)], pop=[(0.05, 'BA NGÀY HỌP', '#ffd84a')], sfx=[(0.1, 'hop', 0.7)]),
  dict(v='MG', t='Bố họp trực tuyến. Mẹ livestream. Thằng con chơi game. Ba người, ba cái màn hình, một cái sofa.', sh=[sh('G02', V(512), V(1296)), sh('G02', VC(1456, 800), VX(1456, 800))], pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.3), (0.7, '3 NGƯỜI · 3 MÀN HÌNH', '#ffd84a')], sfx=[(0.3, 'chotdon', 0.6)]),
  dict(v='MN', t='Ông bố này ba ngày họp trực tuyến. Không biết con mình đi đâu.', sh=[sh('G02', VC(512, 640), VC(480, 900))], pop=[(0.5, 'TRÊN VEST · DƯỚI QUẦN ĐÙI', '#ffffff')]),
  dict(v='ME', t='Hôm nay Bin ngoan thế. Không đòi gì.', sh=[sh('G01', V(400), V(450), blur=14, dark=0.5, cut=me(1))]),
  dict(v='MN', t='Thằng ngồi ghế là bùn. Ông bố gật đầu.', sh=[sh('G01', VC(1560, 800), VX(1560, 780)), sh('G01', VC(1020, 500), VX(1020, 460))], pop=[(0.0, 'BÙN', '#ff5a4a', 0.5)], gap=0.3),
  dict(v='BO', t='Ừ. Em xin phép tắt cam.', sh=[sh('G02', VX(512, 480), VX(512, 470))], pop=[(0.6, 'TẮT CAM', '#ff5a4a')], sfx=[(0.8, 'hop', 0.4)], gap=0.8),
  dict(v='MG', t='Ba ngày, ông ấy nói đúng một câu. Câu đó.', sh=[MGB()], gap=0.6),
  end('Con thật ở đâu? Link bản đầy đủ ngay dưới.', 'CON THẬT ĐÂU?'),
]
S['SH6'] = [   # TRAILER — Bốn người, ba tiếng nhai (v4: giấu ghế thứ tư tới cuối, treo "Bin thật đâu?")
  dict(v=None, dur=2.4, sh=[sh('G01', V(448, 576), VC(448, 600), dark=0.15)], sfx=[(0.05, 'nhai', 0.9), (0.3, 'nhai', 0.9), (0.55, 'nhai', 0.9)],
       pop=[(0.05, '4 NGƯỜI · 3 TIẾNG NHAI', '#ffd84a')], mute=True),
  dict(v='ME', t='Bin ăn nhanh lên con. Mẹ đang live.', sh=[sh('G01', V(400), V(450), blur=14, dark=0.5, cut=me(1))], mute=True, live=True),
  dict(v='MG', t='Cứ giục đi. Có nhai cả đời… cũng không ra tiếng đâu.', sh=[MGB()], pop=[(0.05, 'MA GIẤU', '#ffd84a')], gap=0.5),
  dict(v='MG', t='Bốn người. Ba tiếng nhai.', sh=[sh('G01', VC(1000, 1000), VX(960, 1000))], mute=True, gap=0.3),
  dict(v=None, dur=2.0, sh=[sh('G01', VX(1020, 480), VX(1020, 460), dark=0.2)], sfx=[(0.05, 'nhai', 0.9), (0.3, 'nhai', 0.9), (0.55, 'nhai', 0.9)], mute=True),
  dict(v='ME', t='Hôm nay Bin ngoan thế. Không đòi gì.', sh=[sh('G01', VC(448, 520), VX(448, 500))], mute=True),
  dict(v='BO', t='Ừ. Em xin phép tắt cam.', sh=[sh('G02', VX(512, 480), VX(512, 470))], sfx=[(0.8, 'hop', 0.4)], mute=True),
  dict(v='MG', t='Tao đứng ngoài ban công. Lần đầu tiên trong đời… tao sợ.', sh=[sh('G06', VC(1480, 440), VX(1480, 440))], mute=True, gap=1.5),
  end('Mẹ khen Bin ngoan. Vậy Bin thật đang ở đâu? Bản đầy đủ, link dưới.', 'BIN THẬT ĐÂU?'),
]
S['SH7'] = [   # TRAILER — Hai giờ sáng (v4: đồng hồ "còn 3 tiếng", cắt ở tiếng đập cửa, chưa cho nghe mâm)
  dict(v='MN', t='Còn ba tiếng nữa là trời sáng. Không ai gõ mâm gọi tên, ma giấu thua.', sh=[sh('G08', V(900), VC(840, 500), flash=1)],
       pop=[(0.0, 'CÒN 3 GIỜ', '#ff5a4a')], sfx=[(x / 10, 'tick', 0.45) for x in range(0, 10, 2)], mute=True, gap=0.2),
  dict(v='MG', t='Luật rõ ràng. Tao giấu, nhà nó đi tìm. Gõ mâm đồng, gọi tên. Có tiếng gõ là tao trả. Thế mới gọi là chơi.', sh=[MGB(), sh('G12', VC(576, 700), VX(576, 700))],
       pop=[(0.0, 'MA GIẤU', '#ffd84a', 0.3), (0.35, 'GÕ MÂM · GỌI TÊN → TRẢ', '#ffd84a')], sfx=[(0.42, 'boong', 0.5)]),
  dict(v='MG', t='Luật còn một cái hạn. Trước sáng ngày thứ tư, nhà nó phải đi tìm. Không ai tìm, đứa trẻ tự đi về, thì tám trăm năm nghề tao… thành trò cười.',
       sh=[sh('G04', VC(420, 700), VX(420, 680)), sh('G04', VC(1360, 640), VX(1360, 600))], pop=[(0.05, 'HẠN: SÁNG NGÀY THỨ TƯ', '#ff5a4a')]),
  dict(v='MG', t='Hai giờ sáng. Còn ba tiếng nữa là trời sáng. Nhà này không gõ, thì tao làm cho nó gõ.', sh=[sh('G08', VC(840, 500), VX(840, 400))],
       pop=[(0.0, '2:00 SÁNG', '#ffd84a')], sfx=[(0.9, 'tick', 0.5), (0.95, 'tick', 0.5)], mute=True),
  dict(v='MG', t='Tao rút cầu dao cả tầng.', sh=[sh('G08', VC(1560, 500), VX(1560, 500))], sfx=[(0.75, 'cauda', 1), (0.8, 'mayoff', 0.5)], mute=True, gap=0.5),
  dict(v='MG', t='Rồi tao đập cửa thoát hiểm. Thình. Thình. Thình.', sh=[sh('G04', VC(1600, 500), VX(1600, 480), dark=0.6, shake=5)],
       sfx=[(0.5, 'dapcua', 0.9), (0.7, 'dapcua', 0.9), (0.9, 'dapcua', 1)], mute=True, gap=0.6),
  end('Cánh cửa đó, ai sẽ mở? Bản đầy đủ, link dưới.', 'AI MỞ CỬA?'),
]

def key(v, t): return int(hashlib.md5(f'{v}|{t}'.encode()).hexdigest()[:7], 16)

def voice_src(it):
    v, t = it['v'], it['t']
    if (v, t) in LONG_LINES and v != 'MN': return f"p04/vo/{LONG_LINES[(v, t)]:03d}.wav"
    return f"p04/vo/s{key(v, t)}.wav"

def new_lines():
    seen, out = set(), []
    for spec in S.values():
        for it in spec:
            v, t = it['v'], it['t'] if it['v'] else None
            if v and not ((v, t) in LONG_LINES and v != 'MN') and (v, t) not in seen:
                seen.add((v, t)); out.append({'i': key(v, t), 'voice': v, 'text': t})
    return out
# Ma Nó trong short luôn đọc lại (FAST atempo 1.06; long là 0.92) — kể cả câu trùng long.

def timeline(name):
    for l in new_lines():
        src = SHORTS / 'tts' / f"{l['i']:03d}.wav"
        if src.exists(): fxwav(src, PUB / 'p04' / 'vo' / f"s{l['i']}.wav", FAST.get(l['voice'], FX[l['voice']]))
    copy_imgs(S[name])
    tl = build(S[name], voice_src, 1080, 1920, t=0.0, tail=0.4)
    json.dump(tl, open(ROOT / 'video' / 'src' / 'data' / f'p04-{name.lower()}.json', 'w'), ensure_ascii=False, indent=0)
    print(name, tl['duration'], 's,', len(tl['shots']), 'shots,', sum(len(it['t'].split()) for it in S[name] if it['v']), 'chữ')

if __name__ == '__main__':
    if sys.argv[1] == 'lines':
        SHORTS.mkdir(parents=True, exist_ok=True); L = new_lines()
        json.dump(L, open(SHORTS / 'lines.json', 'w'), ensure_ascii=False, indent=0); print(len(L), 'câu mới')
    else:
        for n in sys.argv[2:] or list(S): timeline(n)
