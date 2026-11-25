# build_p02_long.py lines|timeline — dựng dữ liệu bản long P02 "Điểm danh nhầm" (16:9) cho engine Remotion `Story`.
#   lines    → p02/long/lines.json (cho tts_lines.py)
#   timeline → xử lý giọng (fx) vào video/public/p02/vo, chép ảnh, ghi video/src/data/p02-long.json
# Thời gian tự tính từ độ dài từng câu TTS: câu sau bắt đầu = câu trước kết thúc + gap.
# SFX riêng P02: tools/make_p02_sfx.sh → video/public/p02/sfx (tên trong p02/sfx được ưu tiên, còn lại lấy sh6/sfx).
import json, sys, subprocess, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
LONG = ROOT / 'p02' / 'long'
PUB = ROOT / 'video' / 'public'
OUT = ROOT / 'video' / 'src' / 'data' / 'p02-long.json'
FX = {'MN': 'atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25',
      'TT': 'asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2',
      'PHAT': 'atempo=1.05', 'HONG': 'anull'}
LOA = 'atempo=1.05,highpass=f=450,lowpass=f=3400,acrusher=bits=10:mix=0.25,volume=1.6'   # loa cầm tay rè
IW, IH = 2048, 1152
BW, BH = 1344, 1792

def _c(cx, cy, w, W=IW, H=IH):
    h = w * 9 / 16
    return [int(min(max(cx, w / 2), W - w / 2)), int(min(max(cy, h / 2), H - h / 2)), w]
def F(cx=1024, cy=576): return [cx, cy, 2048]      # toàn
def M(cx, cy): return _c(cx, cy, 1350)             # trung
def C(cx, cy, w=1000): return _c(cx, cy, w)        # cận
def BC(cx=716, cy=560, w=900): return _c(cx, cy, w, BW, BH)   # cận ảnh dọc B (B04r mặt thần trùng ở 716,549)
def sh(img, a, b=None, **o): return dict(img=img, a=a, b=b or a, **o)
MANO = dict(img='p02/img/cut_B02.png', size=1344)
TT = 'B04r'

SPEC = [
  # ---- 0:00 cold open
  dict(v=None, dur=1.6, sh=[sh('N14', F(), M(1300, 520), dark=0.2)], sfx=[(0.05, 'mo3', 0.9)], pop=[(0.35, '3:00 SÁNG', '#ffd84a')], mute=True),
  dict(v=None, dur=1.3, sh=[sh('N15', M(1024, 640), C(1024, 760), flash=1)], sfx=[(0, 'in', 0.9)], pop=[(0.2, 'NGUYỄN VĂN PHÁT — CÓ MẶT', '#ff5a4a')], mute=True),
  dict(v='PHAT', t='Tôi… tôi còn sống mà? Điểm danh tôi làm gì?', sh=[sh('N13', M(900, 480), C(760, 380), shake=6)], sfx=[(0, 'rung', 0.8)], gap=0.15),
  dict(v='TT', t='Âm phủ làm theo giấy. Giấy có tên anh. Có mặt.', sh=[sh(TT, BC(716, 600, 1100), BC(716, 560, 860))], sfx=[(0.98, 'mo', 0.8)], gap=0.4),
  # ---- 0:12 Ma Nó mồi
  dict(v='MN', t='Khoan. Công chức âm phủ, đi làm đúng giờ, điểm danh một ông giám đốc còn sống nhăn.', sh=[sh('S01', F(), M(920, 420))], sfx=[(0, 'coc', 1), (0.05, 'braam', 0.35)]),
  dict(v='MN', t='Nhầm à? Nhầm thật. Mà nhầm đúng người.', sh=[sh('S26', M(900, 480), C(820, 360), shake=8)]),
  dict(v='MN', t='Lùi lại mười ngày. Tao kể.', sh=[sh('S01', M(920, 400), C(920, 330))], sfx=[(0.75, 'tua', 0.7)], gap=0.5),
  # ---- 0:28 xưởng
  dict(v='TT', t='Ta là thần trùng. Ta không bắt ai. Ta làm sổ.', sh=[sh('N09', F(), M(1075, 450)), sh('N09', C(1075, 450), C(1075, 420, 800))], sfx=[(0.05, 'lat', 0.7)]),
  dict(v='TT', t='Hồ sơ. Xưởng may Phát Đạt. Ba trăm công nhân. Ca đêm đến hai giờ sáng.', sh=[sh('N01', F(), M(700, 600)), sh('N01', C(560, 560), C(330, 580))], sfx=[(0, 'may', 0.45), (0.5, 'may', 0.4)]),
  dict(v='MN', t='Giám đốc Phát. Câu cửa miệng: xưởng là nhà.', sh=[sh('N03', F(), C(1150, 470))], pop=[(0.6, 'XƯỞNG LÀ NHÀ ❤', '#ff8fb1')]),
  dict(v='MN', t='Mà ở nhà thì ai tính giờ về? Nên máy chấm công ở đây chỉ có nút vào. Không có nút ra.', sh=[sh('N04', F(), M(900, 450)), sh('N04', C(600, 560), C(520, 640), shake=4)],
       pop=[(0.62, 'CHẤM VÀO ✔ · CHẤM RA ✖', '#ffd84a')], sfx=[(0.62, 'snap', 0.5)]),
  dict(v='PHAT', fx=LOA, t='Tăng ca là cống hiến! Ai về sớm, trừ chuyên cần!', sh=[sh('N12', M(800, 450), C(760, 400), shake=5)], pop=[(0.55, 'TRỪ CHUYÊN CẦN', '#ff5a4a')], gap=0.4),
  # ---- 0:55 anh Lộc
  dict(v='TT', t='Trần Văn Lộc. Tổ may số ba. Hai giờ mười sáng thứ Năm, gục xuống máy may.', sh=[sh('N05', F(), M(800, 600))], sfx=[(0.6, 'mayoff', 0.6)]),
  dict(v='TT', t='Không dậy nữa. Sổ ghi: hai giờ mười. Tại xưởng.', sh=[sh('N06', F(), M(1200, 560))], sfx=[(0, 'tick', 0.5)], mute=True, gap=0.6),
  dict(v='HONG', t='Anh Lộc… anh Lộc ơi.', sh=[sh('N05', C(1434, 500), C(1400, 470))], mute=True, gap=0.5),
  dict(v='MN', t='Việc đầu tiên lão giám đốc hỏi không phải anh Lộc thế nào. Lão hỏi: chỗ đó camera có quay tới không.', sh=[sh('N03', M(1150, 470), C(1150, 440)), sh('N04', C(1075, 380), C(1075, 360))]),
  # ---- 1:20 tờ khai
  dict(v='MN', t='Mất ở xưởng, trong giờ làm, là tai nạn lao động. Phải đền. Thanh tra còn hỏi vì sao máy chấm công không có nút ra.', sh=[sh('N07', F(), M(1300, 600)), sh('N04', C(486, 560), C(486, 640))]),
  dict(v='MN', t='Nên đêm đó lão tự viết tờ khai. Hai giờ mười, sửa thành năm giờ sáng. Tại xưởng, sửa thành tại nhà.', sh=[sh('N07', C(1360, 780), C(1360, 850)), sh('N08', M(1150, 760), C(1200, 840))],
       pop=[(0.3, '2:10 · TẠI XƯỞNG', '#ffffff', 0.6), (0.62, '→ 5:00 · TẠI NHÀ', '#c58bff')], sfx=[(0.3, 'but', 0.7), (0.62, 'but', 0.7)]),
  dict(v='MN', t='Vợ anh Lộc ở quê chưa lên kịp. Lão ký luôn chỗ người khai. Mục quan hệ, lão viết: như người nhà.', sh=[sh('N11', M(600, 500), C(345, 480)), sh('N08', F(), C(1200, 850))],
       pop=[(0.55, 'NGƯỜI KHAI: NGUYỄN VĂN PHÁT', '#c58bff', 0.8), (0.8, 'QUAN HỆ: NHƯ NGƯỜI NHÀ', '#c58bff')], sfx=[(0.6, 'but', 0.6), (0.9, 'dau', 0.7)]),
  dict(v='MN', t='Chị tổ trưởng Hồng đứng sau cửa. Thấy hết.', sh=[sh('N07', M(700, 560), C(500, 560))]),
  dict(v='PHAT', t='Giấy ghi thế nào, sự thật là thế.', sh=[sh('N07', C(1500, 520), C(1580, 500))], gap=0.6),
  # ---- 1:50 luật của thần trùng
  dict(v='TT', t='Ta không đọc đồng hồ. Ta đọc giấy. Giấy là thủ tục. Thủ tục là ta.', sh=[sh('N09', M(1000, 650), C(1000, 520))], sfx=[(0.98, 'mo', 0.8)]),
  dict(v='TT', t='Năm giờ sáng là giờ trùng. Ai mất vào giờ trùng, ta phải quay lại điểm danh thêm một người nhà.', sh=[sh('N10', F(), M(900, 450)), sh('N10', C(800, 560), C(760, 600))],
       pop=[(0.18, 'GIỜ TRÙNG', '#ff5a4a')], sfx=[(0.18, 'braam', 0.4)]),
  dict(v='TT', t='Người nhà anh Lộc: một người vợ. Ở quê.', sh=[sh('N11', F(), C(500, 480))], mute=True, gap=1.0),
  dict(v='MN', t='Khoan khoan. Giám đốc sửa giấy, mà nhà người ta phải trả à?', sh=[sh('S26', M(900, 480), C(820, 360), shake=8)], sfx=[(0.05, 'bassdown', 0.6)], gap=0.4),
  # ---- 2:10 tin đồn
  dict(v='MN', t='Tin đồn chạy khắp xưởng, nhanh hơn kim máy may. Trùng tang.', sh=[sh('N12', F(), C(1700, 600))], sfx=[(0, 'riram', 0.6)], pop=[(0.8, 'TRÙNG TANG', '#ffffff')]),
  dict(v='HONG', t='Anh Lộc mất ở đây, lúc hai giờ mười. Cả tổ ba đều biết.', sh=[sh('N12', C(1331, 600), C(1331, 560))]),
  dict(v='PHAT', fx=LOA, t='Trùng tang là mê tín! Ai nghỉ làm vì ma, trừ lương!', sh=[sh('N12', C(760, 420), C(700, 380), shake=6)], pop=[(0.75, 'TRỪ LƯƠNG', '#ff5a4a')]),
  dict(v='MN', t='Ông thầy đầu ngõ lại bán vòng chống trùng, giảm năm mươi phần trăm. Vẫn ông ấy.', sh=[sh('S19', M(1550, 650), C(1600, 520))], pop=[(0.45, '-50%', '#ffd84a')], sfx=[(0.45, 'pop', 0.6)], gap=0.5),
  # ---- 2:35 đêm điểm danh
  dict(v='TT', t='Ba giờ sáng thứ Bảy. Xưởng may. Ta gõ mõ ba nhịp, mở hồ sơ.', sh=[sh('N14', F(), M(1300, 600))], sfx=[(0.55, 'mo3', 0.9)], pop=[(0.05, '3:00 SÁNG', '#ffd84a')], mute=True),
  dict(v='TT', t='Cần điểm danh: một người nhà. Tờ khai ghi: Nguyễn Văn Phát. Như người nhà.', sh=[sh('N08', F(), C(1200, 840))], sfx=[(0.1, 'lat', 0.6)]),
  dict(v='TT', t='Ta điểm danh người nhà.', sh=[sh('N14', C(1229, 420), C(1229, 380))], gap=0.1),
  dict(v=None, dur=1.4, sh=[sh('N15', M(1024, 640), C(1024, 800), flash=1, shake=4)], sfx=[(0, 'in', 1)], pop=[(0.15, 'NGUYỄN VĂN PHÁT', '#ff5a4a')]),
  dict(v='MN', t='Cùng giây đó, điện thoại giám đốc sáng lên.', sh=[sh('N13', F(), C(1000, 500))],
       com=[(0.7, '🔔 Máy chấm công', 'Nguyễn Văn Phát — CÓ MẶT 03:00')], sfx=[(0.7, 'rung', 0.8), (0.75, 'mo3', 0.8)], gap=1.8),
  dict(v='PHAT', t='Tôi là giám đốc! Tôi không phải người nhà nó!', sh=[sh('N13', C(760, 380), C(720, 340), shake=10)], sfx=[(0, 'rung', 0.6)]),
  dict(v='TT', t='Giấy anh ký. Giấy ghi thế nào, sự thật là thế.', sh=[sh(TT, BC(716, 600, 1100), BC(716, 549, 820), flash=1)],
       pop=[(0.35, 'GIẤY GHI THẾ NÀO, SỰ THẬT LÀ THẾ', '#ffffff')], sfx=[(0.35, 'bassdown', 0.5)], gap=0.6),
  dict(v='MN', t='Đấy. Nhầm. Nhưng nhầm đúng quy trình. Nhờ cái nhầm ấy, vợ anh Lộc ở quê vẫn ngủ ngon.', sh=[sh('S01', M(920, 420), C(920, 330)), sh('N11', C(345, 480), C(345, 440))], gap=0.5),
  # ---- 3:15 lấy lịch
  dict(v='PHAT', t='Tha cho tôi! Tôi đốt cho ông cái xe hơi!', sh=[sh('N23', C(1306, 420, 760), C(1306, 380, 760), shake=8)]),
  dict(v='TT', t='Ta đi làm bằng xe đạp. Mạng anh chưa đến giờ. Ta không lấy.', sh=[sh(TT, BC(716, 560, 900), BC(716, 549, 820))], sfx=[(0.1, 'chuong', 0.6)]),
  dict(v='TT', t='Ta lấy lịch của anh.', sh=[sh('N19', C(1766, 700), C(1766, 760))], sfx=[(0.6, 'dau', 0.8)], gap=0.5),
  dict(v='TT', t='Người nhà thì phải để tang. Ba giờ sáng mỗi đêm, quấn khăn, quỳ trước ảnh anh Lộc. Như con trai.', sh=[sh('N16', F(), M(1050, 500)), sh('N16', C(950, 420), C(950, 380))],
       pop=[(0.3, '3:00 SÁNG · MỖI ĐÊM', '#ffd84a')]),
  dict(v='MN', t='Ban ngày đi gặp đối tác. Khăn tang không tháo ra được.', sh=[sh('N17', F(), M(1000, 500)), sh('N17', C(1400, 450), C(1400, 430))], sfx=[(0.75, 'de', 0.7)], pop=[(0.8, '?', '#ffffff')]),
  dict(v='MN', t='Đêm nào lão ngủ quên, máy chấm công tự in tên. Sáng ra, tên giám đốc dán kín cửa xưởng.', sh=[sh('N15', M(1024, 640), C(1024, 820), shake=6), sh('N15', C(1024, 860), C(1024, 820), shake=10, flash=1)],
       sfx=[(0.3, 'indon', 0.9), (0.7, 'indon', 0.9)]),
  dict(v='PHAT', t='Bao giờ mới hết?', sh=[sh('N23', C(1741, 520, 760), C(1741, 460, 760))], gap=0.4),
  dict(v='TT', t='Khi giấy đúng. Hết bốn mươi chín ngày mà giấy vẫn sai, ta điểm danh lần nữa. Lần đó không cần thẻ.', sh=[sh(TT, BC(716, 650, 1200), BC(716, 549, 760))],
       sfx=[(0.98, 'mo', 0.9)], mute=True, gap=1.0),
  # ---- 4:00 cú lật và kết
  dict(v='MN', t='Đêm thứ bốn mươi tám, lão tự sửa lại giấy. Hai giờ mười. Tại xưởng. Tai nạn lao động. Tiền đền đến tay vợ anh Lộc.', sh=[sh('N19', F(), M(1000, 600)), sh('N19', C(1100, 760), C(1200, 700))],
       pop=[(0.3, '2:10 · TẠI XƯỞNG ✔', '#7dff9a')], sfx=[(0.3, 'but', 0.6)]),
  dict(v='TT', t='Hai giờ mười không phải giờ trùng. Hồ sơ không còn người nhà. Hết thẩm quyền.', sh=[sh('N10', M(900, 450), C(1000, 360))], sfx=[(0.95, 'lat', 0.7)]),
  dict(v='MN', t='Máy chấm công giờ có nút ra. Tăng ca thì tính tiền.', sh=[sh('N21', F(), M(1100, 600))], pop=[(0.35, 'CHẤM RA ✔', '#7dff9a')], sfx=[(0.35, 'pop', 0.6), (0.4, 'cheer', 0.25, 2.5)]),
  dict(v='TT', t='Ta đóng sổ. Ta không lấy mạng nó. Ta lấy lịch của nó. Với loại người này, thế còn đau hơn.', sh=[sh('N20', F(), M(1024, 560))], sfx=[(0.1, 'lat', 0.8)]),
  dict(v='TT', t='À. Ba đêm nó quỳ muộn. Tháng này, trừ chuyên cần.', sh=[sh('N20', C(1024, 470), C(1024, 440)), sh('N20', C(1024, 420, 800), C(1024, 440, 700), flash=1)],
       pop=[(0.6, 'TRỪ CHUYÊN CẦN', '#ff5a4a')], sfx=[(0.98, 'mo', 0.9)], gap=0.6),
  dict(v='MN', t='Ba trăm năm ngồi nóc tủ, lần đầu tao thấy âm phủ làm việc đúng giờ hơn công ty.', sh=[sh('S33', F(), M(1300, 520)), sh('S34', M(880, 420), C(880, 330))], gap=0.5),
  dict(v='MN', t='Tuần sau: đứa trẻ giữ của ba đời trong căn nhà phố cổ, và cái hũ không ai được mở.', sh=[sh('B05', [672, 1100, 1344], [560, 1000, 900])],
       pop=[(0.05, 'TẬP SAU', '#ffd84a')], sfx=[(0.05, 'whoosh', 0.5)]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì ba giờ sáng nay, máy chấm công nhà mày in tên mày đấy.', sh=[sh('S06', F(), F(), blur=14, dark=0.55, cut=dict(MANO, frm=[260, 1100, 0.8], to=[260, 160, 0.8], bob=1))],
       pop=[(0.05, 'ĐĂNG KÝ', '#ffffff')], sfx=[(0.75, 'in', 0.7), (0.98, 'coc', 1)], gap=1.2),
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
    if im.startswith('N'): return ROOT / 'p02' / 'scenes' / f'{im}.png'
    if im.startswith('B'): return ROOT / 'assets' / 'muse-v2' / f'{im}.png'
    return ROOT / 'ep01' / 'scenes' / f'{im}.png'

def sfx_src(name):
    return f'p02/sfx/{name}.wav' if (PUB / 'p02' / 'sfx' / f'{name}.wav').exists() else f'sh6/sfx/{name}.wav'

def timeline():
    L = lines(); (PUB / 'p02' / 'vo').mkdir(parents=True, exist_ok=True); (PUB / 'p02' / 'img').mkdir(parents=True, exist_ok=True)
    for it in SPEC:
        if not it['v']: continue
        src = LONG / 'tts' / f"{it['i']:03d}.wav"; dst = PUB / 'p02' / 'vo' / src.name
        if not dst.exists() or dst.stat().st_mtime < src.stat().st_mtime:
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', it.get('fx', FX[it['v']]) + ',aresample=48000', '-ac', '2', str(dst)], check=True)
    for im in {s['img'] for it in SPEC for s in it['sh']}:
        dst = PUB / 'p02' / 'img' / f'{im}.png'
        if not dst.exists(): shutil.copy(img_src(im), dst)
    dst = PUB / 'p02' / 'img' / 'cut_B02.png'
    if not dst.exists(): shutil.copy(PUB / 'sh6' / 'img' / 'cut_B02.png', dst)
    t, shots, cuts, pops, sfx, subs, coms, voice, mutes, live = 0.3, [], [], [], [], [], [], [], [], []
    for it in SPEC:
        if it['v']:
            d = dur(PUB / 'p02' / 'vo' / f"{it['i']:03d}.wav")
            voice.append({'t': round(t, 3), 'src': f"p02/vo/{it['i']:03d}.wav"})
            subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
        else:
            d = it['dur']
        span = d + it.get('gap', 0.25)
        n = len(it['sh'])
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
