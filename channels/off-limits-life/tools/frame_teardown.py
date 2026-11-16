"""Frame teardown: shot cuts, camera push-in, pacing + audio loudness for one video.

Rebuilt 2026-11-14 from the spec in MEGABRAIN remotion-teardown-nobody-gets-in-2026-11.md §3
(the original was never committed and was lost).

Usage:
  uv run --with opencv-python-headless --with numpy python tools/frame_teardown.py VIDEO OUTDIR [--sheet]

Outputs in OUTDIR: frames.csv (per frame), shots.json, summary.json, optional sheet_NN.jpg contact sheets.
Method:
  * every frame scaled to 320x180 grey; mean abs diff + HSV histogram correlation vs previous frame
  * cut = hist corr < CUT_CORR or diff > CUT_DIFF (and >= MIN_SHOT frames since the last cut)
  * per shot (v2, 2026-11-15): compare frame start+min(12, len/3) (skips card/board pop-in) with frame end-2.
    scale = ORB matches -> RANSAC similarity transform; pan = min(phase-correlation shift, ORB centre shift), at 1920 px.
    push-in if scale >= 1.005, pan if shift > 100 px. Checked against tools/cam_truth.py (engine's own camera plan).
  * v1 kept as scale_flow / pan_px_flow: Farneback flow per frame -> fit u = a + s*(x-cx), v = b + s*(y-cy),
    scale = prod(1+s), pan = sum |(a,b)|. Wrong on flat-colour art: near-identical frames return 40-60 px of
    bogus flow each, and summing magnitudes never cancels (IX005: 37% pan, real 8%; push-in 26%, real 50%).
  * audio: ffmpeg ebur128 integrated loudness + true peak; silencedetect for speech/music gaps
"""
import csv
import json
import re
import subprocess
import sys
from pathlib import Path

import cv2
import numpy as np

CUT_CORR = 0.80
CUT_DIFF = 28.0
MIN_SHOT = 6  # frames
W, H = 320, 180


def audio_stats(video: str) -> dict:
    err = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", video, "-vn", "-af", "ebur128=peak=true", "-f", "null", "-"],
        capture_output=True, text=True,
    ).stderr
    tail = err[err.rfind("Summary:"):] if "Summary:" in err else err
    num = lambda pat: (float(m.group(1)) if (m := re.search(pat, tail)) else None)
    out = {"lufs_i": num(r"I:\s+(-?[\d.]+) LUFS"), "lra": num(r"LRA:\s+(-?[\d.]+) LU"), "true_peak": num(r"Peak:\s+(-?[\d.]+) dBFS")}
    sil = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", video, "-vn", "-af", "silencedetect=n=-50dB:d=0.3", "-f", "null", "-"],
        capture_output=True, text=True,
    ).stderr
    out["silences_over_0.3s"] = len(re.findall(r"silence_end", sil))
    return out


ORB = cv2.ORB_create(3000)
PW, PH = 960, 540


def pair_motion(a: np.ndarray, b: np.ndarray):
    """(scale, pan_px at 1920 wide) between two grey PWxPH frames; scale None if no reliable fit."""
    win = cv2.createHanningWindow((PW, PH), cv2.CV_32F)
    (dx, dy), _ = cv2.phaseCorrelate(a.astype(np.float32), b.astype(np.float32), win)
    pan = float(np.hypot(dx, dy)) * (1920 / PW)
    ka, da = ORB.detectAndCompute(a, None)
    kb, db = ORB.detectAndCompute(b, None)
    if da is None or db is None or len(ka) < 8 or len(kb) < 8:
        return None, pan
    m = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True).match(da, db)
    if len(m) < 8:
        return None, pan
    pa = np.float32([ka[x.queryIdx].pt for x in m])
    pb = np.float32([kb[x.trainIdx].pt for x in m])
    M, inl = cv2.estimateAffinePartial2D(pa, pb, method=cv2.RANSAC, ransacReprojThreshold=2.0)
    if M is None or inl.sum() < 8:
        return None, pan
    c = np.array([PW / 2, PH / 2, 1.0])
    orb_pan = float(np.hypot(*(M @ c - c[:2]))) * (1920 / PW)
    # phase correlation aliases on repeated patterns (row of identical doors -> 450 px on a still shot); take the
    # smaller of two independent estimates
    return float(np.sqrt(abs(np.linalg.det(M[:, :2])))), min(pan, orb_pan)


def pair_frames(video: str, want: set) -> dict:
    """Second sequential pass (seeking is unreliable on webm): grey PWxPH frames at the wanted indices."""
    cap, got, i = cv2.VideoCapture(video), {}, 0
    last = max(want)
    while i <= last and cap.grab():
        if i in want:
            _, fr = cap.retrieve()
            got[i] = cv2.cvtColor(cv2.resize(fr, (PW, PH), interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2GRAY)
        i += 1
    return got


def main() -> None:
    video, outdir = sys.argv[1], Path(sys.argv[2])
    sheet = "--sheet" in sys.argv
    outdir.mkdir(parents=True, exist_ok=True)
    cap = cv2.VideoCapture(video)
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    ys, xs = np.mgrid[0:H, 0:W].astype(np.float32)
    xc, yc = (xs - W / 2).ravel(), (ys - H / 2).ravel()
    A = np.stack([np.ones_like(xc), xc], 1)
    rows, prev_g, prev_h, i = [], None, None, 0
    thumbs = {}
    while True:
        ok, fr = cap.read()
        if not ok:
            break
        small = cv2.resize(fr, (W, H), interpolation=cv2.INTER_AREA)
        g = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
        hsv = cv2.cvtColor(small, cv2.COLOR_BGR2HSV)
        h = cv2.calcHist([hsv], [0, 1], None, [32, 16], [0, 180, 0, 256])
        cv2.normalize(h, h)
        diff, corr, s, pan = 0.0, 1.0, 0.0, 0.0
        if prev_g is not None:
            diff = float(np.mean(cv2.absdiff(g, prev_g)))
            corr = float(cv2.compareHist(prev_h, h, cv2.HISTCMP_CORREL))
            if diff > 0.3:
                flow = cv2.calcOpticalFlowFarneback(prev_g, g, None, 0.5, 3, 15, 3, 5, 1.2, 0)
                u, v = flow[..., 0].ravel(), flow[..., 1].ravel()
                # joint fit: u = a + s*xc ; v = b + s*yc
                M = np.concatenate([np.stack([np.ones_like(xc), np.zeros_like(xc), xc], 1), np.stack([np.zeros_like(yc), np.ones_like(yc), yc], 1)])
                sol, *_ = np.linalg.lstsq(M, np.concatenate([u, v]), rcond=None)
                s, pan = float(sol[2]), float(np.hypot(sol[0], sol[1]))
        rows.append({"f": i, "t": round(i / fps, 3), "diff": round(diff, 3), "corr": round(corr, 4), "zoom": round(s, 6), "pan": round(pan, 4)})
        if sheet:
            thumbs[i] = cv2.resize(fr, (320, 180))
        prev_g, prev_h, i = g, h, i + 1
    n = len(rows)
    cuts = [0]
    for r in rows[1:]:
        if (r["corr"] < CUT_CORR or r["diff"] > CUT_DIFF) and r["f"] - cuts[-1] >= MIN_SHOT:
            cuts.append(r["f"])
            r["zoom"] = 0.0
    cuts.append(n)
    ends = [(a + min(12, (b - a) // 3), b - 2) for a, b in zip(cuts[:-1], cuts[1:])]
    pf = pair_frames(video, {x for e in ends for x in e if x >= 0})
    shots = []
    for (a, b), (fa, fb) in zip(zip(cuts[:-1], cuts[1:]), ends):
        seg = rows[a + 1:b]
        scale_flow = float(np.prod([1 + r["zoom"] for r in seg])) if seg else 1.0
        scale, pan = (pair_motion(pf[fa], pf[fb]) if fb > fa and fa in pf and fb in pf else (None, 0.0))
        scale = scale_flow if scale is None else scale
        diffs = [r["diff"] for r in seg] or [0]
        shots.append({
            "start": round(a / fps, 3), "dur": round((b - a) / fps, 3), "scale": round(scale, 4),
            "push_in": scale >= 1.005, "zoom_out": scale <= 0.995,
            "pan_px": round(pan, 1),
            "scale_flow": round(scale_flow, 4),
            "pan_px_flow": round(sum(r["pan"] for r in seg) * (1920 / W), 1),
            "static": max(diffs) < 1.0 and abs(scale - 1) < 0.005,
        })
    durs = np.array([s["dur"] for s in shots])
    dur_s = n / fps
    summ = {
        "video": video, "fps": fps, "frames": n, "seconds": round(dur_s, 2), "shots": len(shots),
        "cuts_per_min": round((len(shots) - 1) / (dur_s / 60), 2),
        "shot_median": round(float(np.median(durs)), 2), "shot_p10": round(float(np.percentile(durs, 10)), 2),
        "shot_p90": round(float(np.percentile(durs, 90)), 2),
        "pct_push_in": round(100 * np.mean([s["push_in"] for s in shots]), 1),
        "pct_static": round(100 * np.mean([s["static"] for s in shots]), 1),
        "pct_pan_over_100px": round(100 * np.mean([s["pan_px"] > 100 for s in shots]), 1),
        "method": "v2-orb-phase",
        "pct_push_in_flow": round(100 * np.mean([s["scale_flow"] >= 1.005 for s in shots]), 1),
        "pct_pan_over_100px_flow": round(100 * np.mean([s["pan_px_flow"] > 100 for s in shots]), 1),
        "audio": audio_stats(video),
    }
    with open(outdir / "frames.csv", "w", newline="") as fh:
        w = csv.DictWriter(fh, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    (outdir / "shots.json").write_text(json.dumps(shots, indent=1))
    (outdir / "summary.json").write_text(json.dumps(summ, indent=1))
    if sheet:
        mids = [int((a + b) / 2) for a, b in zip(cuts[:-1], cuts[1:])]
        for k in range(0, len(mids), 36):
            tiles = [thumbs[m] for m in mids[k:k + 36]]
            tiles += [np.zeros_like(tiles[0])] * (36 - len(tiles))
            grid = np.vstack([np.hstack(tiles[r * 6:(r + 1) * 6]) for r in range(6)])
            cv2.imwrite(str(outdir / f"sheet_{k // 36:02d}.jpg"), grid, [cv2.IMWRITE_JPEG_QUALITY, 80])
    print(json.dumps(summ, indent=1))


if __name__ == "__main__":
    main()
