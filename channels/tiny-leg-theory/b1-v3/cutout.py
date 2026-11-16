# Make the near-white background transparent (only regions connected to the image border),
# then crop to the subject with a small margin. Usage: cutout.py IN_DIR OUT_DIR
import sys, pathlib
import numpy as np
from PIL import Image
from scipy import ndimage

src, dst = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
dst.mkdir(parents=True, exist_ok=True)
for p in sorted(src.glob("*.png")):
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.int16)
    light = (a.min(axis=2) > 225) & (a.max(axis=2) - a.min(axis=2) < 18)
    lab, _ = ndimage.label(light)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(edge))
    sizes = ndimage.sum(light, lab, range(lab.max() + 1))
    big_holes = [i for i in range(1, lab.max() + 1) if i not in edge and sizes[i] > 2500]
    import re, os
    if re.match(os.environ.get("HOLES", "^$"), p.name) and not any(k in p.name for k in ("hand_off", "paper", "tired")): bg |= np.isin(lab, big_holes)  # enclosed background gaps (between arm and head, under chair)
    bg = ndimage.binary_opening(bg, iterations=1)
    alpha = np.where(bg, 0, 255).astype(np.uint8)
    alpha = ndimage.gaussian_filter(alpha.astype(float), 0.6).clip(0, 255).astype(np.uint8)  # soften edge
    rgba = np.dstack([a.astype(np.uint8), alpha])
    fg, n = ndimage.label(alpha > 20)
    keep = np.zeros_like(fg, bool)
    if n:
        sz = ndimage.sum(np.ones_like(fg), fg, range(1, n + 1))
        keep = np.isin(fg, [i + 1 for i, v in enumerate(sz) if v >= 150])  # ignore stray specks
    alpha[~keep] = 0
    rgba[..., 3] = alpha
    ys, xs = np.nonzero(keep)
    m = 12
    y0, y1 = max(ys.min() - m, 0), min(ys.max() + m, a.shape[0])
    x0, x1 = max(xs.min() - m, 0), min(xs.max() + m, a.shape[1])
    Image.fromarray(rgba[y0:y1, x0:x1], "RGBA").save(dst / p.name)
    print(p.name, (x1 - x0, y1 - y0))
