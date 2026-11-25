"""Image queue via Antigravity CLI (`agy`): its image-generator subagent (Nano Banana) — no browser, no Google sign-in in Playwright.
Usage: python3 shared/imagegen/agy_gen.py <queue.json> <outdir> [--ar 16:9|9:16] [--model gemini-3.8-flash-medium] [--timeout 240]
queue.json = [["file.jpg", "prompt"], ...]; files already in <outdir> are skipped (safe to re-run).
agy saves images in ~/.gemini/antigravity-cli/brain/<conversation_id>/; we copy the newest one out ourselves
(the agent's own copy step is slow/flaky). Runs outside Claude: read only the SUMMARY line.
"""
import argparse, json, pathlib, shutil, subprocess, sys, time

BRAIN = pathlib.Path.home() / '.gemini/antigravity-cli/brain'
ASK = ('Generate exactly ONE image with your image generation tool, {AR}. '
       'Do not run commands, do not save or copy files, do not ask questions. Prompt: ')


def one(prompt, model, timeout, ar='16:9'):
    cmd = ['agy', '-p', ASK.replace('{AR}', ('landscape ' if ar == '16:9' else 'portrait ') + ar) + prompt, '--model', model, '--output-format', 'stream-json', '--print-timeout', f'{timeout}s']
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    conv, err = None, ''
    for line in p.stdout:
        try:
            e = json.loads(line)
        except ValueError:
            err = line.strip()[:160] or err
            continue
        if e.get('event') == 'init':
            conv = e.get('conversation_id')
        d = BRAIN / conv if conv else None
        if d and d.exists() and any(d.glob('*.jp*g')) or d and d.exists() and any(d.glob('*.png')):
            p.terminate()  # image is on disk; skip the agent's slow follow-up steps
            break
    p.wait(timeout=30)
    d = BRAIN / conv if conv else None
    imgs = sorted([*d.glob('*.jp*g'), *d.glob('*.png')], key=lambda f: f.stat().st_mtime) if d and d.exists() else []
    return (imgs[-1], '') if imgs else (None, err or 'no image')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('queue'); ap.add_argument('outdir')
    ap.add_argument('--model', default='gemini-3.8-flash-medium')
    ap.add_argument('--fallback', default='gemini-3.8-flash-low,gemini-3.8-flash-high')
    ap.add_argument('--timeout', type=int, default=240)
    ap.add_argument('--ar', default='16:9', help='16:9 (long) | 9:16 (short)')
    a = ap.parse_args()
    out = pathlib.Path(a.outdir); out.mkdir(parents=True, exist_ok=True)
    models = [a.model, *[m for m in a.fallback.split(',') if m]]
    ok = fail = skip = 0
    for name, prompt in json.loads(pathlib.Path(a.queue).read_text()):
        dst = out / name
        if dst.exists():
            skip += 1; continue
        for attempt in range(len(models)):
            t0 = time.time()
            src, err = one(prompt, models[attempt], a.timeout, a.ar)
            if src:
                if dst.suffix.lower() in ('.jpg', '.jpeg') and src.suffix.lower() == '.png':
                    subprocess.run(['sips', '-s', 'format', 'jpeg', str(src), '--out', str(dst)], capture_output=True)
                else:
                    shutil.copy(src, dst)
                print(f'{name} ok {models[attempt]} {time.time() - t0:.0f}s', flush=True); ok += 1; break
            print(f'{name} retry ({models[attempt]}: {err})', flush=True)
        else:
            print(f'{name} FAILED', flush=True); fail += 1
    print(f'SUMMARY {ok} new · {skip} skipped · {fail} failed → {out}')
    sys.exit(1 if fail else 0)


if __name__ == '__main__':
    main()
