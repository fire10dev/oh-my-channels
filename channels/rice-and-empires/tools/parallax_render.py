"""Depth-displacement parallax clips for illustrations (fully local, no cut-outs, no inpainting).

Usage: ~/.cache/rice-depth/bin/python tools/parallax_render.py shorts/public/l003 img-52 img-53 ...
Writes shorts/public/<vid>/plx/<img>.mp4 (1920x1080, 300 frames = one full camera move; Remotion time-stretches it
to the shot length) and updates shorts/src/<vid>.plx.json  {"<vid>/<img>.jpg": "<vid>/plx/<img>.mp4"}.

Why not depth layers: on flat lacquer/map paintings depth bands cut through people, stakes and masts, so sliding
layers tore objects and exposed inpainted smears (L003 sample 2026-11-11). Here every pixel moves by an amount that
varies smoothly with a heavily blurred depth map, so nothing is cut and nothing is uncovered.
Model: Depth Anything V2 Small (Apache-2.0), ONNX, local Hugging Face cache.
"""
import json, pathlib, subprocess, sys
import cv2, numpy as np, onnxruntime as ort
from huggingface_hub import hf_hub_download

W, H, N = 1920, 1080, 300
AMP = 34  # px of relative shift between nearest and farthest point at the ends of the move
pub = pathlib.Path(sys.argv[1])
vid = pub.name
sess = ort.InferenceSession(hf_hub_download("onnx-community/depth-anything-v2-small", "onnx/model.onnx"),
                            providers=["CPUExecutionProvider"])
inp = sess.get_inputs()[0].name
MOVES = [  # (x from, x to, y from, y to, zoom from, zoom to)
    (-1, 1, 0.2, -0.2, 1.07, 1.12),
    (1, -1, -0.2, 0.2, 1.07, 1.12),
    (-0.5, 0.5, 0.5, -0.5, 1.07, 1.16),
    (0.6, -0.6, 0, 0, 1.12, 1.07),
]


def depth(img):
    h, w = img.shape[:2]
    x = cv2.resize(img, (518, 294 if w > h else 518), interpolation=cv2.INTER_CUBIC)[:, :, ::-1].astype(np.float32) / 255
    x = (x - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    d = sess.run(None, {inp: x.transpose(2, 0, 1)[None].astype(np.float32)})[0][0]
    d = cv2.resize(d, (w, h), interpolation=cv2.INTER_CUBIC)
    d = (d - np.percentile(d, 2)) / (np.percentile(d, 98) - np.percentile(d, 2) + 1e-6)
    d = np.clip(d, 0, 1)
    # Heavy blur = smooth displacement field: objects bend very slightly instead of tearing at depth edges.
    return cv2.GaussianBlur(d, (0, 0), max(w, h) / 60).astype(np.float32)


def cover(img):  # scale/crop to 1920x1080 like CSS object-fit: cover
    h, w = img.shape[:2]
    s = max(W / w, H / h)
    r = cv2.resize(img, (round(w * s), round(h * s)), interpolation=cv2.INTER_LANCZOS4)
    y0, x0 = (r.shape[0] - H) // 2, (r.shape[1] - W) // 2
    return r[y0:y0 + H, x0:x0 + W]


manifest_p = pathlib.Path(f"shorts/src/{vid}.plx.json")
manifest = json.loads(manifest_p.read_text()) if manifest_p.exists() else {}
for k, name in enumerate(sys.argv[2:]):
    img = cover(cv2.imread(str(pub / f"{name}.jpg")))
    d = depth(img) - 0.5
    gx, gy = np.meshgrid(np.arange(W, dtype=np.float32), np.arange(H, dtype=np.float32))
    x0, x1, y0, y1, z0, z1 = MOVES[(int(name.split("-")[-1]) if name.split("-")[-1].isdigit() else k) % len(MOVES)]
    out = pub / "plx" / f"{name}.mp4"
    out.parent.mkdir(parents=True, exist_ok=True)
    ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}", "-r", "30",
                           "-i", "-", "-c:v", "libx264", "-crf", "15", "-preset", "slow", "-pix_fmt", "yuv420p", str(out)],
                          stdin=subprocess.PIPE)
    for i in range(N):
        p = 0.5 - 0.5 * np.cos(np.pi * i / (N - 1))  # ease in-out
        cx, cy, z = x0 + (x1 - x0) * p, y0 + (y1 - y0) * p, z0 + (z1 - z0) * p
        # inverse map: output pixel -> source pixel (zoom about centre, then depth-proportional shift)
        sx = (gx - W / 2) / z + W / 2 - cx * AMP * d
        sy = (gy - H / 2) / z + H / 2 - cy * AMP * 0.5 * d
        ff.stdin.write(cv2.remap(img, sx.astype(np.float32), sy.astype(np.float32), cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT).tobytes())
    ff.stdin.close()
    ff.wait()
    manifest[f"{vid}/{name}.jpg"] = f"{vid}/plx/{name}.mp4"
    print(name, "ok")
manifest_p.write_text(json.dumps(manifest, indent=1))
