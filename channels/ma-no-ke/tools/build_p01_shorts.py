# build_p01_shorts.py lines|timeline [SH1 SH2 …] — dữ liệu 6 short P01 (9:16) cho engine Remotion `Story`.
#   lines    → p01/shorts/lines.json: chỉ câu MỚI (câu trùng bản long dùng lại wav của long)
#   timeline → fx giọng câu mới vào video/public/p01/vo/s*.wav, ghi video/src/data/p01-shN.json
# Khung dọc cắt từ ảnh 2048×1152: rộng tối đa 648 px (toàn chiều cao). B* (1344×1792): tối đa 1008.
import json, sys, subprocess, hashlib, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from build_p01_long import ROOT, PUB, FX, IW, IH, dur, HEAD, MANO, sh

SHORTS = ROOT / 'p01' / 'shorts'
LONG_LINES = {(l['voice'], l['text']): l['i'] for l in json.load(open(ROOT / 'p01' / 'long' / 'lines.json'))}

def V(cx, cy=576): return [cx, cy, 648]        # dọc toàn chiều cao
def VC(cx, cy): return [cx, cy, 460]           # cận
def VX(cx, cy): return [cx, cy, 340]           # rất cận
BG = dict(blur=14, dark=0.55)                  # nền mờ cho Ma Nó nói

def outro(text, pop):
    return dict(v='MN', t=text, sh=[sh('S06', V(1024), V(1100), **BG, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
                pop=[(0.0, pop, '#ffd84a')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.0)

def fly(frm, to): return dict(HEAD, frm=frm, to=to)

S = {}
S['SH1'] = [
  dict(v='BT', t='Ba triệu người xem mẹ già ăn cơm. Không ai thấy con trai bà đổ mâm đi.', sh=[sh('S04', VC(1450, 600), V(1450), flash=1)],
       pop=[(0.0, '3.000.000 NGƯỜI XEM', '#ffd84a')], sfx=[(0, 'braam', 0.4)], gap=0.4),
  dict(v='BT', t='Ba tháng trước, thằng con tôi mở kênh. Tên kênh: Bữa cơm với mẹ già.', sh=[sh('S03', V(900), VC(900, 520))], pop=[(0.55, 'BỮA CƠM VỚI MẸ GIÀ', '#ffffff')], live=True),
  dict(v='BT', t='Mâm nào cũng cá kho, canh cua, trứng rán.', sh=[sh('S03', VC(1400, 820), VX(1420, 840))], live=True),
  dict(v='BT', t='Ba triệu người xem. Người ta khóc. Người ta donate.', sh=[sh('S02', VC(1000, 600), VC(980, 700))], live=True,
       com=[(0.3, '@lan.anh', 'khóc thật sự huhu'), (0.6, '@minh.t', 'donate 500k cho bà'), (0.9, '@be.cam', 'ước gì mẹ mình còn')]),
  dict(v='BT', t='Tắt máy cái, nó dọn mâm. Đổ vào túi nilon, mang trả quán.', sh=[sh('S04', V(1450), VC(1450, 600))], sfx=[(0, 'snap', 0.4)]),
  dict(v='BT', t='Còn tôi ăn cháo trắng.', sh=[sh('S04', VC(1340, 520), VX(1340, 480))]),
  dict(v='BT', t='Nó không ác đâu. Nó nợ app. Điện thoại rung cả ngày.', sh=[sh('S07', V(1200), VC(1200, 640))]),
  dict(v='BT', t='Tôi không giận. Vì tôi cũng có bí mật. Đêm nào tôi cũng đi ăn khuya.', sh=[sh('S05', V(900), VC(960, 600))], gap=0.15),
  dict(v='BT', t='Bằng cái đầu thôi.', sh=[sh('S05', VC(960, 600), VX(960, 540))], mute=True, gap=0.6),
  outro('Bí mật của bà là gì? Mai tao kể. Bản đầy đủ ở trên kênh.', 'BÍ MẬT LÀ GÌ?'),
]
S['SH2'] = [
  dict(v='BT', t='Mẹ chỉ dặn con đúng một điều.', sh=[sh('S14', VC(760, 480), VX(720, 460), flash=1)], sfx=[(0, 'braam', 0.4)], gap=0.4),
  dict(v='BT', t='Tôi là ma lai. Hai giờ sáng, đầu tôi nhấc khỏi cổ, bay qua song cửa. Trước khi gà gáy thì về lắp lại.',
       sh=[sh('S10', V(680), VC(680, 480)), sh('S06', V(1024), V(1100), blur=10, dark=0.45, cut=fly([-250, 600, 1.0], [-1750, 380, 1.0]))], sfx=[(0.45, 'wind', 0.7)]),
  dict(v='BT', t='Thành phố bây giờ khó bay lắm. Camera khắp nơi.', sh=[sh('S11', V(1100), VC(1100, 420))]),
  dict(v='BT', t='Ăn gì à? Cá kho thừa ở thùng rác. Chia đôi với con mèo mướp. Nó đang chửa.', sh=[sh('S12', V(1000)), sh('S12', VC(1360, 720), VX(1360, 700))]),
  dict(v='BT', t='Bà ngoại tôi dặn đúng một luật.', sh=[sh('S13', V(800), VC(800, 420))], gap=0.4),
  dict(v='BT', t='Con ơi. Mẹ ngủ thì đừng đắp chăn lên cổ mẹ.', sh=[sh('S14', V(760), VC(720, 460))], pop=[(0.45, 'ĐỪNG ĐẮP CHĂN LÊN CỔ MẸ', '#ff5a4a')], sfx=[(0.45, 'pop', 0.6)]),
  dict(v='TUNG', t='Mẹ lại mê tín.', sh=[sh('S14', VC(1420, 420), VX(1420, 400))]),
  dict(v='BT', t='Nó cười. Rồi nó quên.', sh=[sh('S14', V(1024), VC(1024, 500))], mute=True, gap=0.6),
  outro('Nó quên vào đêm nào? Mai tao kể tiếp. Theo dõi đi.', 'NÓ QUÊN VÀO ĐÊM NÀO?'),
]
S['SH3'] = [
  dict(v='BT', t='Hai giờ bảy phút, bình luận nổ.', sh=[sh('S15', VC(1600, 780), VX(1600, 760), flash=1)], pop=[(0.0, '2:07 SÁNG', '#ffd84a')], live=True,
       com=[(0.3, '@thu.ha', 'ơ cái gì vừa bay qua cửa sổ??'), (0.7, '@duc.nguyen', 'tua 0.25x đi ad'), (1.1, '@be.na', 'ai thấy giống người không')], gap=1.2),
  dict(v='BT', t='Thằng con tôi live cả lúc tôi ngủ. Tám tiếng chữa lành cùng mẹ già.', sh=[sh('S15', V(1000), VC(1000, 520))], pop=[(0.5, '8 TIẾNG CHỮA LÀNH', '#ffffff')], live=True),
  dict(v='BT', t='Hôm sau, nó lắp thêm đèn. Chĩa thẳng ra cửa sổ.', sh=[sh('S17', V(800), VC(800, 450))], sfx=[(0.6, 'snap', 0.4)]),
  dict(v='MN', t='Cả mạng phát cuồng. Người phóng to từng điểm ảnh. Ông thầy phong thủy bán vòng tay chống ma lai, giảm giá năm mươi phần trăm.',
       sh=[sh('S19', V(500), VC(420, 500)), sh('S19', V(1550), VC(1540, 480))], pop=[(0.75, 'GIẢM 50%', '#ffd84a')]),
  dict(v='MN', t='Người sợ ma. Ma sợ, thuật toán.', sh=[sh('S20', V(1100), VC(1400, 420))], sfx=[(0.98, 'coc', 1)], gap=0.6),
  dict(v='BT', t='Đêm sau, camera quay được bốn giây.', sh=[sh('S18', V(700), VC(560, 520), dark=0.1)], live=True, mute=True, gap=0.8),
  outro('Bốn giây đó quay được gì? Mai tao kể.', 'BỐN GIÂY GÌ?'),
]
S['SH4'] = [
  dict(v='BT', t='Bốn giây. Cái chăn phẳng ở chỗ cổ.', sh=[sh('S18', VC(500, 520), VX(500, 520), dark=0.15, flash=1)], live=True, mute=True,
       sfx=[(0, 'bassdown', 0.6)], gap=0.8),
  dict(v='BT', t='Chỉ bà Hạnh phòng bên là không bình luận. Bà sang, ngồi, nhìn tôi rất lâu.', sh=[sh('S21', V(600), V(620)), sh('S21', V(1500), VC(1500, 440))]),
  dict(v='HANH', t='Bà Tư này. Bà cẩn thận.', sh=[sh('S21', VC(1500, 440), VX(1500, 420))]),
  dict(v='BT', t='Không phải, con bà cẩn thận. Mà là, bà cẩn thận. Hóa ra có người biết mình là ma, mà vẫn lo cho mình.',
       sh=[sh('S21', VC(600, 450), VX(600, 430)), sh('S21', V(1500), VC(1500, 440))], gap=0.5),
  dict(v='BT', t='Đêm đó nó gắn camera lên nóc tủ. Đặt tiêu đề:', sh=[sh('S22', V(470), VC(470, 260))]),
  dict(v=None, dur=1.6, sh=[sh('S22', VC(470, 260), VX(480, 240))], pop=[(0.05, 'LIVE KHÔNG CẮT: SỰ THẬT VỀ MẸ TÔI', '#ff5a4a')], sfx=[(0.05, 'pop', 0.7)]),
  dict(v='BT', t='Hai giờ mười lăm, nó ngủ gục. Chín nghìn người thức thay nó.', sh=[sh('S23', V(800), VC(800, 640))], live=True),
  dict(v='BT', t='Và đầu tôi, nhẹ dần.', sh=[sh('S10', VC(680, 520), VX(680, 520))], sfx=[(0.2, 'wind', 0.5)], mute=True, gap=0.8),
  dict(v='BT', t='Điện thoại rung. Nó tỉnh. Nó nhìn sang giường.', sh=[sh('S24', VC(760, 560), VX(780, 520), shake=3), sh('S24', V(1340), VC(1320, 740))], gap=0.4),
  outro('Nó làm gì tiếp? Mai tao kể.', 'NÓ LÀM GÌ TIẾP?'),
]
S['SH5'] = [
  dict(v='BT', t='Con tôi đắp chăn cho mẹ, lần đầu tiên trong ba tháng. Và đó là điều tệ nhất.', sh=[sh('S24', V(760), VC(760, 560), flash=1, shake=4)],
       sfx=[(0, 'braam', 0.4)], gap=0.4),
  dict(v='BT', t='Nó không hét. Nó không dám lật chăn. Tay run, nó kéo chăn trùm kín. Kín cổ. Kín hết.', sh=[sh('S24', VC(760, 560), VX(780, 520), shake=5), sh('S18', V(800), VC(700, 560), dark=0.2)], mute=True),
  dict(v='BT', t='Ngoài cửa sổ, tôi thấy hết.', sh=[sh('S25', VC(1690, 300), VX(1690, 280))], mute=True),
  dict(v='BT', t='Và tôi không về được nữa.', sh=[sh('S25', V(1600), VC(1690, 260))], mute=True, gap=1.0),
  dict(v='MN', t='Tao suýt đánh rơi điếu cày. Còn hai tiếng là gà gáy. Bà ấy trốn đâu?', sh=[sh('S26', V(900), VC(820, 360), shake=8)], sfx=[(0, 'bassdown', 0.5)]),
  dict(v='BT', t='Chỗ nào tối, ấm, tròn vừa một cái đầu?', sh=[sh('S06', V(1024), V(1100), blur=10, dark=0.45, cut=fly([-1900, 150, 1.0], [-750, 650, 1.0]))], sfx=[(0, 'whoosh', 0.6)], gap=0.5),
  outro('Đoán đi, comment xuống dưới. Mai tao mở nắp.', 'ĐOÁN ĐI ↓'),
]
S['SH7'] = [
  dict(v='BT', t='Năm mươi phần trăm doanh thu. Vì cái đầu này là của mẹ.', sh=[sh('S32', VC(800, 700), VX(800, 700), flash=1)],
       pop=[(0.0, '50% DOANH THU', '#ffd84a')], sfx=[(0, 'pop', 0.7)], gap=0.4),
  dict(v='BT', t='Clip ấy giờ ba mươi triệu view. Không ai tin là thật. Tốt. Không ai tin thì tôi vẫn đi ăn khuya được.', sh=[sh('S32', V(1000), VC(1000, 540))], pop=[(0.05, '30.000.000 VIEW', '#ffd84a')]),
  dict(v='BT', t='Nó trả hết nợ. Tối nào vẫn dựng máy trước mâm. Nhưng tắt máy rồi, nó ngồi ăn với tôi.', sh=[sh('S32', VC(1500, 460), VX(1500, 440)), sh('S32', V(1024), VC(1024, 600))]),
  dict(v='BT', t='Còn tôi đưa nó một tờ giấy.', sh=[sh('S32', VC(800, 700), VX(800, 700))], gap=0.3),
  dict(v=None, dur=2.2, sh=[sh('S32', VX(800, 700), [800, 700, 300])], pop=[(0.0, '50% DOANH THU. CÁI ĐẦU NÀY CỦA MẸ.', '#ffffff')], sfx=[(0, 'pop', 0.7)]),
  dict(v='MN', t='Ma lai năm mươi năm chưa dọa được ai. Lên mạng ba tháng, có hợp đồng chia tiền. Tao ngồi nóc tủ mấy trăm năm, chưa ai trả đồng nào.',
       sh=[sh('S33', V(1300), VC(1300, 520)), sh('S34', V(880), VC(880, 330))]),
  dict(v='MN', t='Tuần sau: một ông công chức âm phủ đến xưởng may điểm danh, và điểm nhầm đúng một người.',
       sh=[sh('B04', [672, 760, 1008], [672, 700, 760])], pop=[(0.05, 'TUẦN SAU', '#ffd84a')]),
  dict(v='MN', t='Bấm đăng ký đi. Không thì tối nay tao ngồi nóc tủ nhà mày đấy.', sh=[sh('S06', V(1024), V(1100), **BG, cut=dict(MANO, frm=[-32, 1920, 0.86], to=[-32, 560, 0.86], bob=1))],
       pop=[(0.05, 'ĐĂNG KÝ', '#ffffff')], sfx=[(0, 'whoosh', 0.5), (0.98, 'coc', 1)], gap=1.2),
]

def key(v, t): return int(hashlib.md5(f'{v}|{t}'.encode()).hexdigest()[:7], 16)

def voice_src(v, t):
    if (v, t) in LONG_LINES: return f"p01/vo/{LONG_LINES[(v, t)]:03d}.wav"
    return f"p01/vo/s{key(v, t)}.wav"

def new_lines():
    seen, out = set(), []
    for spec in S.values():
        for it in spec:
            if it['v'] and (it['v'], it['t']) not in LONG_LINES and (it['v'], it['t']) not in seen:
                seen.add((it['v'], it['t'])); out.append({'i': key(it['v'], it['t']), 'voice': it['v'], 'text': it['t']})
    return out

def timeline(name, W=1080, H=1920):
    for l in new_lines():
        src = SHORTS / 'tts' / f"{l['i']:03d}.wav"; dst = PUB / 'p01' / 'vo' / f"s{l['i']}.wav"
        if not dst.exists():
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(src), '-af', FX[l['voice']] + ',aresample=48000', '-ac', '2', str(dst)], check=True)
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
            w, h = (IW, IH) if not s['img'].startswith('B') else (1344, 1792)
            shots.append({'img': f"p01/img/{s['img']}.png", 'sw': w, 'sh': h, 't0': round(t0, 3), 't1': round(t1, 3), 'a': s['a'], 'b': s['b'],
                          **{k2: s[k2] for k2 in ('shake', 'flash', 'blur', 'dark') if k2 in s}})
            if 'cut' in s:
                c = s['cut']; cuts.append({'img': c['img'], 'size': c['size'], 't0': round(t0, 3), 't1': round(t1, 3), 'from': c['frm'], 'to': c['to'], 'bob': bool(c.get('bob'))})
        for fr, text, color in it.get('pop', []):
            pops.append({'t0': round(t + d * fr, 3), 't1': round(t + span, 3), 'text': text, 'color': color})
        for x in it.get('sfx', []):
            fr, nm, vol = x[:3]
            sfx.append({'t': round(t + d * fr, 3), 'src': f'sh6/sfx/{nm}.wav', 'vol': vol, **({'dur': x[3]} if len(x) > 3 else {})})
        for fr, u, c in it.get('com', []):
            coms.append({'t': round(t + d * fr, 3), 'u': u, 'c': c, 'end': round(t + span, 3)})
            sfx.append({'t': round(t + d * fr, 3), 'src': 'sh6/sfx/pop.wav', 'vol': 0.45})
        if it.get('mute'): mutes.append([round(t - 0.2, 3), round(t + span, 3)])
        if it.get('live'): live.append([round(t, 3), round(t + span, 3)])
        t += span
    total = round(t + 0.5, 3)
    out = ROOT / 'video' / 'src' / 'data' / f'p01-{name.lower()}.json'
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
