# render_ep.py EPDIR [--short START END NAME]
# Đọc EPDIR/lines.json, EPDIR/scenes.json, EPDIR/tts/*.wav, EPDIR/scenes/S##.png
# -> EPDIR/out/narration.wav, timeline.json, ep.mp4 (16:9) hoặc short 9:16.
# Chạy lại được: cảnh đã render (out/seg/*.mp4) và câu đã xử lý (tts_fx) được giữ.
import json, sys, subprocess, pathlib, textwrap
import numpy as np, soundfile as sf
from PIL import Image, ImageDraw, ImageFont, ImageFilter

EP = pathlib.Path(sys.argv[1]); OUT = EP / 'out'; OUT.mkdir(exist_ok=True)
SR = 48000; FPS = 30
FONT = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
LOGO = EP.parent / 'assets/muse-v2/B10r.png'
FX = {  # xử lý giọng theo vai
    'MN': 'atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25',
    'BT': 'atempo=0.96',
    'TUNG': 'atempo=1.04',
    'HANH': 'asetrate=48000*0.97,aresample=48000',
}
GAP_SAME, GAP_VOICE, GAP_SCENE = 0.22, 0.45, 0.8

def sh(cmd): subprocess.run(cmd, check=True)

def fx_line(it):
    src = EP / 'tts' / f"{it['i']:03d}.wav"; dst = EP / 'tts_fx' / src.name
    dst.parent.mkdir(exist_ok=True)
    if not dst.exists():
        sh(['ffmpeg', '-loglevel', 'error', '-y', '-i', str(src), '-af', FX[it['voice']], '-ar', str(SR), '-ac', '1', str(dst)])
    a, _ = sf.read(dst, dtype='float32'); return a

def build_audio():
    L = json.load(open(EP / 'lines.json')); coc, _ = sf.read(EP / 'coc.wav', dtype='float32')
    parts, t, prev = [], 0.0, None
    for it in L:
        if it['voice'] == 'SFX':
            a = coc
        else:
            a = fx_line(it)
        if prev is not None:
            gap = GAP_SCENE if it['scene'] != prev['scene'] else (GAP_SAME if it['voice'] == prev['voice'] else GAP_VOICE)
            parts.append(np.zeros(int(gap * SR), 'float32')); t += gap
        it['start'] = round(t, 3); t += len(a) / SR; it['end'] = round(t, 3)
        parts.append(a); prev = it
    parts.append(np.zeros(int(1.5 * SR), 'float32')); t += 1.5
    sf.write(OUT / 'narration_raw.wav', np.concatenate(parts), SR)
    sh(['ffmpeg', '-loglevel', 'error', '-y', '-i', str(OUT / 'narration_raw.wav'), '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', str(SR), str(OUT / 'narration.wav')])
    sc = {}
    for it in L:
        s = sc.setdefault(it['scene'], [it['start'], it['end']]); s[1] = it['end']
    keys = sorted(sc)
    for k, n in zip(keys, keys[1:] + [None]):  # cảnh kéo dài tới đầu cảnh sau
        sc[k][1] = sc[n][0] if n else t
    sc[keys[0]][0] = 0.0
    json.dump({'lines': L, 'scenes': sc, 'total': t}, open(OUT / 'timeline.json', 'w'), ensure_ascii=False, indent=0)
    return L, sc, t

def sub_png(text, voice, W, H, path, width_chars):
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    size = 46 if W > H else 54; f = ImageFont.truetype(FONT, size)
    lines = textwrap.wrap(text, width_chars)[:3]
    col = (255, 214, 120) if voice == 'MN' else (255, 255, 255)
    y = H - 80 - len(lines) * (size + 12) if W > H else int(H * 0.72)
    for ln in lines:
        w = d.textlength(ln, font=f)
        d.text(((W - w) / 2, y), ln, font=f, fill=col, stroke_width=5, stroke_fill=(10, 10, 20))
        y += size + 12
    im.save(path)

def scene_img(n, W, H):
    p = EP / 'scenes' / f'S{n:02d}.png'
    out = OUT / f'base_{n:02d}_{W}x{H}.png'
    if out.exists(): return out
    if p.exists():
        im = Image.open(p).convert('RGB')
    else:  # chỗ giữ: chưa có ảnh cảnh
        im = Image.new('RGB', (1920, 1080), (18, 20, 40)); d = ImageDraw.Draw(im)
        d.text((80, 80), f'S{n:02d} (chưa có ảnh)', font=ImageFont.truetype(FONT, 60), fill=(120, 120, 160))
    if W > H:
        im = im.resize((W, int(W * im.height / im.width))).crop((0, 0, W, H)) if im.width / im.height < W / H else im.resize((int(H * im.width / im.height), H))
        im = im.crop(((im.width - W) // 2, (im.height - H) // 2, (im.width - W) // 2 + W, (im.height - H) // 2 + H))
    else:  # 9:16: ảnh 16:9 nằm giữa, nền là chính ảnh phóng to làm mờ
        bg = im.resize((int(H * im.width / im.height), H)).filter(ImageFilter.GaussianBlur(30))
        bg = bg.crop(((bg.width - W) // 2, 0, (bg.width - W) // 2 + W, H))
        fg = im.resize((W, int(W * im.height / im.width))); bg.paste(fg, (0, (H - fg.height) // 2 - 120)); im = bg
    im.save(out); return out

def render_scene(n, t0, t1, lines, W, H, tag):
    seg = OUT / 'seg' / f'{tag}_{n:02d}.mp4'; seg.parent.mkdir(exist_ok=True)
    if seg.exists(): return seg
    dur = t1 - t0; frames = max(1, int(round(dur * FPS)))
    base = scene_img(n, W, H)
    z = "min(zoom+0.0005,1.10)" if n % 2 else "if(eq(on,0),1.10,max(zoom-0.0005,1.0))"
    inputs = ['-loop', '1', '-framerate', str(FPS), '-t', f'{dur:.3f}', '-i', str(base)]
    flt = f"[0:v]scale={W*2}:-1,zoompan=z='{z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s={W}x{H}:fps={FPS},format=yuva420p[v0]"
    k = 1; cur = 'v0'
    if LOGO.exists():
        inputs += ['-i', str(LOGO)]
        flt += f";[{k}:v]scale={110 if W > H else 130}:-1,format=rgba,colorchannelmixer=aa=0.85[lg];[{cur}][lg]overlay=W-w-30:30[v{k}]"; cur = f'v{k}'; k += 1
    for j, it in enumerate([x for x in lines if x['voice'] != 'SFX']):
        png = OUT / 'sub' / f"{tag}_{it['i']:03d}.png"; png.parent.mkdir(exist_ok=True)
        if not png.exists(): sub_png(it['text'], it['voice'], W, H, png, 44 if W > H else 26)
        inputs += ['-i', str(png)]
        a, b = max(0, it['start'] - t0), it['end'] - t0
        flt += f";[{cur}][{k}:v]overlay=0:0:enable='between(t,{a:.2f},{b:.2f})'[v{k}]"; cur = f'v{k}'; k += 1
    sh(['ffmpeg', '-loglevel', 'error', '-y', *inputs, '-filter_complex', flt, '-map', f'[{cur}]',
        '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', str(FPS), '-t', f'{dur:.3f}', str(seg)])
    return seg

def main():
    L, sc, total = build_audio()
    short = '--short' in sys.argv
    if short:
        i = sys.argv.index('--short'); s0, s1, name = float(sys.argv[i+1]), float(sys.argv[i+2]), sys.argv[i+3]
        W, H, tag = 1080, 1920, name
    else:
        s0, s1, name, W, H, tag = 0, total, 'ep01', 1920, 1080, 'h'
    segs = []
    for n, (t0, t1) in sorted(((int(k), v) for k, v in sc.items())):
        a, b = max(t0, s0), min(t1, s1)
        if b - a < 0.3: continue
        ln = [x for x in L if x['scene'] == n and x['end'] > a and x['start'] < b]
        segs.append(render_scene(n, a, b, ln, W, H, tag))
        print('cảnh', n, f'{b-a:.1f}s', flush=True)
    lst = OUT / f'{tag}_list.txt'; lst.write_text(''.join(f"file '{p.resolve()}'\n" for p in segs))
    final = OUT / f'{name}.mp4'
    sh(['ffmpeg', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', str(lst),
        '-ss', f'{s0:.3f}', '-t', f'{s1-s0:.3f}', '-i', str(OUT / 'narration.wav'),
        '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', str(final)])
    print('XONG', final, f'{s1-s0:.1f}s')

main()
