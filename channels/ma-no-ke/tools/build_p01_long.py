# build_p01_long.py lines|timeline — dựng dữ liệu bản long P01 (16:9) cho engine Remotion `Story`.
#   lines    → p01/long/lines.json (cho tts_lines.py)
#   timeline → xử lý giọng (fx) vào video/public/p01/vo, chép ảnh, ghi video/src/data/p01-long.json
# Thời gian tự tính từ độ dài từng câu TTS: câu sau bắt đầu = câu trước kết thúc + gap.
import json, sys, subprocess, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
LONG = ROOT / 'p01' / 'long'
PUB = ROOT / 'video' / 'public'
OUT = ROOT / 'video' / 'src' / 'data' / 'p01-long.json'
FX = {'MN': 'atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25', 'BT': 'atempo=0.96',
      'TUNG': 'atempo=1.04', 'HANH': 'asetrate=48000*0.97,aresample=48000'}
IW, IH = 2048, 1152

def F(cx=1024, cy=576): return [cx, cy, 2048]      # toàn
def M(cx, cy): return [cx, cy, 1350]               # trung
def C(cx, cy): return [cx, cy, 880]                # cận
def sh(img, a, b=None, **o): return dict(img=img, a=a, b=b or a, **o)
HEAD = dict(img='p01/img/cut_S11.png', size=2048)
MANO = dict(img='p01/img/cut_B02.png', size=1344)

# Mỗi mục: v (giọng) + t (lời) hoặc v=None + dur (khoảng lặng). sh = các shot chia đều thời lượng câu.
# pop/sfx: (tỉ lệ 0..1 trong câu, ...). gap = nghỉ sau câu (s).
SPEC = [
  # ---- 0:00 cold open
  dict(v=None, dur=1.0, sh=[sh('S28', C(1600, 760), C(1600, 760))], sfx=[(0.4, 'lid', 0.9)], live=True),
  dict(v='BT', t='Mở nhẹ thôi con. Nóng.', sh=[sh('B03', [672, 896, 1344], [680, 760, 1000], flash=1, shake=6)], live=True, gap=0.2),
  dict(v=None, dur=1.4, sh=[sh('S29', C(1480, 430), C(1480, 410), shake=4)], pop=[(0.05, '300.000 NGƯỜI ĐANG XEM', '#ffd84a')], sfx=[(0, 'pop', 0.7)], live=True),
  # ---- Ma Nó mồi
  dict(v='MN', t='Khoan. Đừng hỏi vội.', sh=[sh('S01', F(), M(920, 420))], sfx=[(0, 'coc', 1), (0.05, 'braam', 0.4)]),
  dict(v='MN', t='Một bà cụ. Cái đầu. Trong nồi cơm điện. Đang lên sóng.', sh=[sh('S16', F(), M(1500, 500)), sh('S29', M(700, 560), C(700, 520))]),
  dict(v='MN', t='Muốn biết vì sao thì lùi lại ba tháng. Tao kể.', sh=[sh('S01', M(920, 400), C(920, 330))], sfx=[(0.85, 'whoosh', 0.7)], gap=0.5),
  # ---- Bữa cơm giả
  dict(v='BT', t='Ba tháng trước, thằng con tôi mở kênh. Tên kênh: Bữa cơm với mẹ già.', sh=[sh('S03', F(), M(900, 520))], pop=[(0.55, 'BỮA CƠM VỚI MẸ GIÀ', '#ffffff')], live=True),
  dict(v='BT', t='Mâm nào cũng cá kho, canh cua, trứng rán.', sh=[sh('S03', C(1400, 820), C(1450, 860))], live=True),
  dict(v='BT', t='Ba triệu người xem. Người ta khóc. Người ta donate.', sh=[sh('S02', M(1000, 600), C(980, 700))], sfx=[(0.3, 'pops', 0.5)], live=True),
  dict(v='BT', t='Tắt máy cái, nó dọn mâm. Đổ vào túi nilon, mang trả quán.', sh=[sh('S04', F(), M(1450, 600))], sfx=[(0, 'snap', 0.4)]),
  dict(v='BT', t='Còn tôi ăn cháo trắng.', sh=[sh('S04', C(1340, 520), C(1340, 480))]),
  dict(v='BT', t='Nó không ác đâu. Nó nợ app. Điện thoại rung cả ngày.', sh=[sh('S07', F(), M(1200, 640), shake=0)]),
  dict(v='BT', t='Tôi không giận. Vì tôi cũng có bí mật. Đêm nào tôi cũng đi ăn khuya.', sh=[sh('S05', M(820, 600), [810, 600, 1000])], gap=0.15),
  dict(v='BT', t='Bằng cái đầu thôi.', sh=[sh('S05', [810, 600, 1000], [810, 560, 820])], mute=True, gap=0.6),
  # ---- Luật của ma lai
  dict(v='BT', t='Tôi là ma lai. Hai giờ sáng, đầu tôi nhấc khỏi cổ, bay qua song cửa. Trước khi gà gáy thì về lắp lại.',
       sh=[sh('S10', F(), M(680, 480)), sh('S06', F(), F(1100, 576), blur=10, dark=0.45, cut=dict(HEAD, frm=[900, 200, 1.0], to=[-1500, 120, 1.0]))],
       sfx=[(0.45, 'wind', 0.7)]),
  dict(v='BT', t='Thành phố bây giờ khó bay lắm. Camera khắp nơi.', sh=[sh('S11', F(), M(1100, 420))]),
  dict(v='BT', t='Ăn gì à? Cá kho thừa ở thùng rác. Chia đôi với con mèo mướp. Nó đang chửa.', sh=[sh('S12', F(), M(1000, 560)), sh('S12', C(1360, 720), C(1360, 700))]),
  dict(v='BT', t='Bà ngoại tôi dặn đúng một luật.', sh=[sh('S13', F(), M(800, 420))], gap=0.4),
  dict(v='BT', t='Con ơi. Mẹ ngủ thì đừng đắp chăn lên cổ mẹ.', sh=[sh('S14', M(760, 480), C(700, 460))], pop=[(0.45, 'ĐỪNG ĐẮP CHĂN LÊN CỔ MẸ', '#ff5a4a')], sfx=[(0.45, 'pop', 0.6)]),
  dict(v='TUNG', t='Mẹ lại mê tín.', sh=[sh('S14', C(1420, 420), C(1420, 400))]),
  dict(v='BT', t='Nó cười. Rồi nó quên.', sh=[sh('S14', F(), M(1024, 520))], gap=0.5),
  # ---- Tò mò leo thang
  dict(v='BT', t='Rồi nó nghĩ ra trò mới: live cả lúc tôi ngủ. Tám tiếng chữa lành cùng mẹ già.', sh=[sh('S15', F(), M(1000, 520))], pop=[(0.6, '8 TIẾNG CHỮA LÀNH', '#ffffff')], live=True),
  dict(v='BT', t='Hai giờ bảy phút, bình luận nổ.', sh=[sh('S15', C(1600, 800), C(1600, 780))], live=True,
       com=[(0.5, '@thu.ha', 'ơ cái gì vừa bay qua cửa sổ??'), (0.8, '@duc.nguyen', 'tua 0.25x đi ad'), (1.1, '@be.na', 'ai thấy giống người không')], gap=1.2),
  dict(v='BT', t='Hôm sau, nó lắp thêm đèn. Chĩa thẳng ra cửa sổ.', sh=[sh('S17', F(), M(800, 450))], sfx=[(0.6, 'snap', 0.4)]),
  dict(v='BT', t='Đêm ấy camera quay được bốn giây. Bốn giây cái chăn, phẳng ở chỗ cổ.', sh=[sh('S18', F(), M(700, 520)), sh('S18', C(500, 520), C(480, 500), dark=0.1)], live=True, mute=True, gap=1.0),
  dict(v='MN', t='Cả mạng phát cuồng. Người phóng to từng điểm ảnh. Ông thầy phong thủy bán vòng tay chống ma lai, giảm giá năm mươi phần trăm.',
       sh=[sh('S19', M(500, 576), C(420, 500)), sh('S19', M(1550, 576), C(1540, 480))], pop=[(0.75, 'GIẢM 50%', '#ffd84a')]),
  dict(v='MN', t='Người sợ ma. Ma sợ, thuật toán.', sh=[sh('S20', M(1100, 560), C(1400, 420))], sfx=[(0.98, 'coc', 1)], gap=0.6),
  dict(v='BT', t='Chỉ bà Hạnh phòng bên là không bình luận. Bà sang, ngồi, nhìn tôi rất lâu.', sh=[sh('S21', F(), M(1024, 540))]),
  dict(v='HANH', t='Bà Tư này. Bà cẩn thận.', sh=[sh('S21', C(1400, 460), C(1400, 440))]),
  dict(v='BT', t='Không phải, con bà cẩn thận. Mà là, bà cẩn thận. Hóa ra có người biết mình là ma, mà vẫn lo cho mình.', sh=[sh('S21', C(400, 430), C(400, 410)), sh('S21', F(), F())], gap=0.6),
  # ---- Đêm quyết định
  dict(v='BT', t='Đêm đó nó gắn camera lên nóc tủ. Đặt tiêu đề:', sh=[sh('S22', F(), C(470, 260))]),
  dict(v=None, dur=1.6, sh=[sh('S22', C(470, 260), C(480, 240))], pop=[(0.05, 'LIVE KHÔNG CẮT: SỰ THẬT VỀ MẸ TÔI', '#ff5a4a')], sfx=[(0.05, 'pop', 0.7)]),
  dict(v='BT', t='Hai giờ mười lăm, nó ngủ gục. Chín nghìn người thức thay nó.', sh=[sh('S23', F(), M(800, 640))], live=True),
  dict(v='BT', t='Và đầu tôi, nhẹ dần.', sh=[sh('S10', C(680, 520), [680, 520, 640])], sfx=[(0.2, 'wind', 0.5)], mute=True, gap=0.8),
  dict(v='BT', t='Điện thoại rung. Nó tỉnh. Nó nhìn sang giường.', sh=[sh('S24', M(500, 560), C(440, 540), shake=3), sh('S24', M(1460, 700), M(1460, 700))]),
  dict(v='BT', t='Cái chăn hoa. Phẳng ở chỗ cổ.', sh=[sh('S18', C(520, 520), [520, 520, 620], dark=0.15)], mute=True, gap=1.6),
  dict(v='BT', t='Nó không hét. Nó không dám lật chăn. Tay run, nó kéo chăn trùm kín. Kín cổ. Kín hết.', sh=[sh('S24', C(440, 540), C(440, 520), shake=5), sh('S18', F(), M(800, 560), dark=0.2)], mute=True),
  dict(v='BT', t='Ngoài cửa sổ, tôi thấy hết. Con tôi vừa đắp chăn cho mẹ, lần đầu tiên trong ba tháng.', sh=[sh('S25', C(1690, 300), C(1690, 280)), sh('S25', F(), M(900, 520))], mute=True),
  dict(v='BT', t='Và tôi không về được nữa.', sh=[sh('S25', M(1600, 360), C(1690, 260))], mute=True, gap=1.0),
  dict(v='MN', t='Tao suýt đánh rơi điếu cày. Còn hai tiếng là gà gáy. Bà ấy trốn đâu?', sh=[sh('S26', M(900, 480), C(820, 360), shake=8)], sfx=[(0, 'bassdown', 0.5)]),
  # ---- Nồi cơm
  dict(v='BT', t='Chỗ nào tối, ấm, tròn vừa một cái đầu?', sh=[sh('S06', F(), F(1100, 576), blur=10, dark=0.45, cut=dict(HEAD, frm=[-1700, 300, 1.0], to=[200, 150, 1.0]))], sfx=[(0, 'whoosh', 0.6)]),
  dict(v='BT', t='Cái nồi cơm điện.', sh=[sh('S27', M(950, 520), C(950, 420))], sfx=[(0.9, 'lid', 0.7)], gap=0.5),
  dict(v='BT', t='Gặp nắng là tan. Nhưng trong nồi cơm thì lấy đâu ra nắng. Năm mươi năm làm ma lai, lần đầu tôi ngủ trong nồi cơm. Ấm hơn cái chăn.',
       sh=[sh('B03', [672, 1000, 1344], [672, 900, 1150]), sh('S27', F(), M(950, 480))], gap=0.7),
  # ---- Cú lật
  dict(v='BT', t='Bảy giờ sáng. Live vẫn chạy. Ba trăm nghìn người. Và nó làm cái việc sáng nào cũng làm: mở nồi vo gạo.',
       sh=[sh('S28', F(), M(1100, 520)), sh('S28', M(1500, 640), C(1600, 760))], pop=[(0.03, '7:00 SÁNG', '#ffd84a')], live=True),
  dict(v=None, dur=0.6, sh=[sh('S28', C(1600, 760), [1600, 760, 700])], mute=True, live=True),
  dict(v='BT', t='Mở nhẹ thôi con. Nóng.', sh=[sh('B03', [680, 760, 1000], [690, 720, 900], flash=1, shake=10)], sfx=[(0, 'lid', 1)], mute=True, live=True, gap=0.3),
  dict(v=None, dur=3.0, sh=[sh('S29', F(), M(1200, 480))], live=True, mute=True,
       com=[(0.1, '@hoa.nguyen92', 'FILTER GÌ VẬY AD???'), (0.3, '@tuan_bds', 'xin tên app!!!'), (0.5, '@meow.meow', 'kỹ xảo đỉnh thật sự'), (0.7, '@linh.tv', 'bà cụ diễn sâu quá')]),
  dict(v='HANH', t='Tùng! Ai dạy mày trùm kín chăn người già thế! Mẹ mày ngạt bây giờ!', sh=[sh('S30', M(560, 576), C(520, 420), shake=12), sh('S30', F(), M(1300, 640))]),
  dict(v='BT', t='Bà Hạnh giật phăng cái chăn. Gió lùa vào cổ. Vút một cái.',
       sh=[sh('S30', C(1250, 760), C(1250, 760)), sh('S30', F(), F(), blur=10, dark=0.35, cut=dict(HEAD, frm=[-1700, 100, 1.0], to=[-300, 450, 1.0]))],
       sfx=[(0.7, 'whoosh', 0.9), (0.99, 'snap', 0.8)]),
  dict(v='BT', t='Đầu tôi về chỗ cũ. Tôi ngồi dậy, xoay cổ. Thằng Tùng ngất. Ba trăm nghìn người, vỗ tay.',
       sh=[sh('S31', M(500, 576), C(440, 420)), sh('S31', M(1480, 700), C(1480, 760), shake=4)], sfx=[(0.55, 'bassdown', 0.6), (0.8, 'cheer', 0.4, 2.6)], gap=0.8),
  # ---- Kết
  dict(v='BT', t='Clip ấy giờ ba mươi triệu view. Không ai tin là thật. Tốt. Không ai tin thì tôi vẫn đi ăn khuya được.', sh=[sh('S32', F(), M(1000, 540))], pop=[(0.05, '30.000.000 VIEW', '#ffd84a')]),
  dict(v='BT', t='Nó trả hết nợ. Tối nào vẫn dựng máy trước mâm. Nhưng tắt máy rồi, nó ngồi ăn với tôi.', sh=[sh('S32', C(1500, 460), C(1500, 440)), sh('S32', F(), M(1024, 600))]),
  dict(v='BT', t='Còn tôi đưa nó một tờ giấy.', sh=[sh('S32', C(800, 700), [800, 700, 700])], gap=0.3),
  dict(v=None, dur=2.4, sh=[sh('S32', [800, 700, 700], [800, 700, 640])], pop=[(0.0, '50% DOANH THU. CÁI ĐẦU NÀY CỦA MẸ.', '#ffffff')], sfx=[(0, 'pop', 0.7)]),
  dict(v='MN', t='Ma lai năm mươi năm chưa dọa được ai. Lên mạng ba tháng, có hợp đồng chia tiền. Tao ngồi nóc tủ mấy trăm năm, chưa ai trả đồng nào.', sh=[sh('S33', F(), M(1300, 520)), sh('S34', M(880, 420), C(880, 330))]),
  dict(v='MN', t='Tuần sau: một ông công chức âm phủ đến xưởng may điểm danh, và điểm nhầm đúng một người.', sh=[sh('S06', F(), F(), blur=14, dark=0.55, cut=dict(MANO, frm=[260, 1100, 0.8], to=[260, 160, 0.8], bob=1)), sh('B04', [672, 760, 1344], [672, 700, 1100])],
       pop=[(0.1, 'TUẦN SAU', '#ffd84a')]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì tối nay tao ngồi nóc tủ nhà mày đấy.', sh=[sh('S06', F(), F(), blur=14, dark=0.55, cut=dict(MANO, frm=[260, 160, 0.8], to=[260, 160, 0.8], bob=1))],
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

def timeline():
    L = lines(); (PUB / 'p01' / 'vo').mkdir(parents=True, exist_ok=True); (PUB / 'p01' / 'img').mkdir(parents=True, exist_ok=True)
    for l in L:
        src = LONG / 'tts' / f"{l['i']:03d}.wav"; dst = PUB / 'p01' / 'vo' / src.name
        if not dst.exists():
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', FX[l['voice']] + ',aresample=48000', '-ac', '2', str(dst)], check=True)
    imgs = {s['img'] for it in SPEC for s in it['sh']}
    for im in imgs:
        src = ROOT / ('assets/muse-v2' if im.startswith('B') else 'ep01/scenes') / f'{im}.png'
        dst = PUB / 'p01' / 'img' / f'{im}.png'
        if not dst.exists(): shutil.copy(src, dst)
    for c in ['cut_S11.png', 'cut_B02.png']:
        dst = PUB / 'p01' / 'img' / c
        if not dst.exists(): shutil.copy(PUB / 'sh6' / 'img' / c, dst)
    t, shots, cuts, pops, sfx, subs, coms, voice, mutes, live = 0.3, [], [], [], [], [], [], [], [], []
    for it in SPEC:
        if it['v']:
            d = dur(PUB / 'p01' / 'vo' / f"{it['i']:03d}.wav")
            voice.append({'t': round(t, 3), 'src': f"p01/vo/{it['i']:03d}.wav"})
            subs.append({'t': round(t, 3), 'dur': round(d, 3), 'text': it['t']})
        else:
            d = it['dur']
        span = d + it.get('gap', 0.25)
        n = len(it['sh'])
        for k, s in enumerate(it['sh']):
            t0, t1 = t + span * k / n, t + span * (k + 1) / n
            w, h = (IW, IH) if not s['img'].startswith('B') else (1344, 1792)
            shots.append({'img': f"p01/img/{s['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': s['a'], 'b': s['b'],
                          **{k2: s[k2] for k2 in ('shake', 'flash', 'blur', 'dark') if k2 in s}})
            if 'cut' in s:
                c = s['cut']; cuts.append({'img': c['img'], 'size': c['size'], 't0': round(t0, 3), 't1': round(t1, 3), 'from': c['frm'], 'to': c['to'], 'bob': bool(c.get('bob'))})
        for fr, text, color in it.get('pop', []):
            pops.append({'t0': round(t + d * fr, 3), 't1': round(t + span, 3), 'text': text, 'color': color})
        for x in it.get('sfx', []):
            fr, name, vol = x[:3]
            sfx.append({'t': round(t + d * fr, 3), 'src': f'sh6/sfx/{name}.wav', 'vol': vol, **({'dur': x[3]} if len(x) > 3 else {})})
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
