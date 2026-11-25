# cut_sheet.py SHEET.png OUT_PREFIX [--grid 2x2] [--thr 38]
# Tách sheet nhân vật nền phẳng (vd X11 Khải 4 tư thế, N22/N23 P02) thành cutout PNG trong suốt, mỗi ô 1 file
# OUT_PREFIX_{0..n}.png (đọc trái→phải, trên→dưới), cắt sát bbox. Cách tách: khoảng cách màu so với màu nền
# (trung vị 4 góc ô) > thr → nhân vật; giữ thành phần liên thông lớn nhất (bỏ mảnh tư thế ô bên lấn sang);
# median 5 + blur 0.8 làm mềm viền. In kích thước từng ô để đặt cut trong timeline.
# Chạy bằng python có PIL + numpy (venv TTS: stickman-ab/tts-vi/.venv).
import sys, argparse
import numpy as np
from PIL import Image, ImageFilter

ap = argparse.ArgumentParser()
ap.add_argument('sheet'); ap.add_argument('prefix')
ap.add_argument('--grid', default='2x2'); ap.add_argument('--thr', type=float, default=38)
a = ap.parse_args()
cols, rows = map(int, a.grid.split('x'))
im = Image.open(a.sheet).convert('RGB'); W, H = im.size; cw, ch = W // cols, H // rows

def largest(mask):
    # nhãn thành phần liên thông 4 hướng bằng BFS trên lưới thu nhỏ ×4 rồi phóng lại (đủ nhanh, không cần scipy)
    small = mask[::4, ::4]; h, w = small.shape; lab = np.zeros((h, w), np.int32); best, bestn, cur = 0, 0, 0
    for y0 in range(h):
        for x0 in range(w):
            if small[y0, x0] and not lab[y0, x0]:
                cur += 1; st = [(y0, x0)]; lab[y0, x0] = cur; n = 0
                while st:
                    y, x = st.pop(); n += 1
                    for yy, xx in ((y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)):
                        if 0 <= yy < h and 0 <= xx < w and small[yy, xx] and not lab[yy, xx]:
                            lab[yy, xx] = cur; st.append((yy, xx))
                if n > bestn: best, bestn = cur, n
    keep = np.kron(lab == best, np.ones((4, 4), bool))[:mask.shape[0], :mask.shape[1]]
    keep = np.array(Image.fromarray(keep.astype(np.uint8) * 255).filter(ImageFilter.MaxFilter(9))) > 0
    return mask & keep

for r in range(rows):
    for c in range(cols):
        k = r * cols + c
        cell = np.asarray(im.crop((c * cw, r * ch, (c + 1) * cw, (r + 1) * ch))).astype(np.float32)
        corners = np.array([cell[4, 4], cell[4, -5], cell[-5, 4], cell[-5, -5]])
        bg = np.median(corners, axis=0)
        mask = np.sqrt(((cell - bg) ** 2).sum(-1)) > a.thr
        mask = np.array(Image.fromarray(mask.astype(np.uint8) * 255).filter(ImageFilter.MedianFilter(5))) > 0
        mask = largest(mask)
        alpha = Image.fromarray(mask.astype(np.uint8) * 255).filter(ImageFilter.GaussianBlur(0.8))
        out = Image.fromarray(cell.astype(np.uint8)).convert('RGBA'); out.putalpha(alpha)
        bb = alpha.getbbox(); out = out.crop(bb)
        out.save(f'{a.prefix}_{k}.png')
        print(f'{a.prefix}_{k}.png', out.size, 'bbox', bb)
