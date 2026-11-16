#!/usr/bin/env python3
"""prep_assets.py [batch_dir]  (default ../batch2) — prepare Remotion Short assets for a batch's 15 tracks.

public/bg/<id>.mp4      9s seamless loop (1s crossfade end->start), 720p, no audio
public/audio/<id>.wav   full song, leading/trailing silence trimmed (same filter as make_1h.sh)
public/hook/<id>.wav    20s hook = loudest 20s window (start >= 8s), 0.4s fade-in, 1.5s fade-out
src/tracks.json         id, name, durations, hook start, title/subtitle from youtube_posts_<batch>.txt
                        (merged by id, so tracks of other batches stay)
"""
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
B2 = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else ROOT.parent / "batch2"
PUB = ROOT / "public"
HOOK_LEN = 20.0
SILENCE = ("silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.05,areverse,"
           "silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.4,areverse")


def run(*cmd):
    return subprocess.run(cmd, check=True, capture_output=True, text=True)


def duration(path):
    return float(run("ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)).stdout)


def loudest_window(wav, length):
    out = run("ffmpeg", "-v", "info", "-i", str(wav), "-af",
              "astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.RMS_level:file=-",
              "-f", "null", "-").stdout
    # one RMS value per audio frame; group by second via pts_time
    per_sec = {}
    t = None
    for line in out.splitlines():
        m = re.search(r"pts_time:([\d.]+)", line)
        if m:
            t = int(float(m.group(1)))
        m = re.search(r"RMS_level=(-?[\d.]+|-inf)", line)
        if m and t is not None:
            v = -120.0 if m.group(1) == "-inf" else float(m.group(1))
            per_sec.setdefault(t, []).append(10 ** (v / 20))
    secs = [sum(v) / len(v) for _, v in sorted(per_sec.items())]
    n = int(length)
    best, best_start = -1.0, 8
    for s in range(8, max(9, len(secs) - n)):
        e = sum(secs[s:s + n])
        if e > best:
            best, best_start = e, s
    return float(best_start)


def parse_posts():
    text = (B2 / f"youtube_posts_{B2.name}.txt").read_text()
    posts = {}
    for block in re.split(r"#{20,}\n", text):
        m = re.match(r"([A-Z]\d) · (.+?) \((\d+) BPM\)", block.strip())
        if m:
            cur = m.group(1)
            posts[cur] = {"bpm": int(m.group(3))}
            continue
        t = re.search(r"TITLE:\n(.+)", block)
        if t and posts:
            last = list(posts)[-1]
            title = t.group(1).strip()
            head, _, tail = title.partition(" 1 Hour ")
            posts[last]["title"] = title
            posts[last]["headline"] = head.strip()
            posts[last]["tagline"] = tail.strip().lstrip("|").strip()
            style = re.search(r"Style: (.+)", block)
            posts[last]["style"] = style.group(1).strip() if style else ""
    return posts


def main():
    for d in ("bg", "audio", "hook"):
        (PUB / d).mkdir(parents=True, exist_ok=True)
    posts = parse_posts()
    tracks = {t["id"]: t for t in json.loads((ROOT / "src" / "tracks.json").read_text())}
    for clip in sorted((B2 / "loops").glob("*.mp4")):
        name = clip.stem
        tid = name.split(" ")[0]
        bg, wav, hook = PUB / "bg" / f"{tid}.mp4", PUB / "audio" / f"{tid}.wav", PUB / "hook" / f"{tid}.wav"
        if not bg.exists():
            run("ffmpeg", "-v", "error", "-y", "-i", str(clip), "-filter_complex",
                "[0:v]split[a][b];[a]trim=start=1,setpts=PTS-STARTPTS[body];[b]trim=0:1,setpts=PTS-STARTPTS[head];"
                "[body][head]xfade=transition=fade:duration=1:offset=8,format=yuv420p[v]",
                "-map", "[v]", "-an", "-c:v", "libx264", "-crf", "17", "-g", "24", "-movflags", "+faststart", str(bg))
        if not wav.exists():
            run("ffmpeg", "-v", "error", "-y", "-i", str(B2 / "audio" / f"{name}.m4a"), "-map", "0:a",
                "-af", SILENCE, "-ar", "48000", "-c:a", "pcm_s16le", str(wav))
        dur = duration(wav)
        start = loudest_window(wav, HOOK_LEN)
        if not hook.exists():
            run("ffmpeg", "-v", "error", "-y", "-ss", str(start), "-t", str(HOOK_LEN), "-i", str(wav),
                "-af", f"afade=t=in:d=0.4,afade=t=out:st={HOOK_LEN - 1.5}:d=1.5", "-c:a", "pcm_s16le", str(hook))
        p = posts.get(tid, {})
        tracks[tid] = {"id": tid, "name": name[len(tid) + 1:], "duration": round(dur, 3), "hookStart": start,
                       "bgDuration": round(duration(bg), 3), **p}
        print(f"{tid} {name[len(tid) + 1:]:<24} song {dur:6.1f}s  hook @{start:5.0f}s  bg {duration(bg):.2f}s", flush=True)
    (ROOT / "src" / "tracks.json").write_text(json.dumps(list(tracks.values()), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    sys.exit(main())
