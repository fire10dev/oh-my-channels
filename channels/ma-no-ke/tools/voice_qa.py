# voice_qa.py VID [lang…] — kiểm giọng không cần người bản xứ: Whisper (whisper.cpp, ~/.cache/whisper/ggml-small.bin) nghe lại
#   từng câu của track <lang> trong video/src/data/multi/<VID>-<lang>.json, so với kịch bản → WER/câu + tốc độ nói (từ/phút).
#   Câu WER > 0.25 = máy nghe sai ⇒ phát âm hỏng/nuốt chữ/đọc nhầm ⇒ cần sửa chữ hoặc tạo lại. → loc/multi/qa-<VID>.md
import json, sys, re, subprocess, unicodedata, pathlib, tempfile
ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / 'video' / 'public'
MODEL = pathlib.Path.home() / '.cache/whisper/ggml-small.bin'

def norm(s):
    s = unicodedata.normalize('NFKD', s.lower()); s = ''.join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[’']", ' ', s); s = re.sub(r'[^a-z0-9ñ ]+', ' ', s)
    return s.split()

def wer(ref, hyp):
    r, h = norm(ref), norm(hyp); d = list(range(len(h) + 1))
    for i, a in enumerate(r, 1):
        p, d[0] = d[0], i
        for j, b in enumerate(h, 1): p, d[j] = d[j], min(d[j] + 1, d[j - 1] + 1, p + (a != b))
    return d[len(h)] / max(len(r), 1)

def asr(wav, lang):
    with tempfile.NamedTemporaryFile(suffix='.wav') as t:
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(wav), '-ar', '16000', '-ac', '1', t.name], check=True)
        out = subprocess.run(['whisper-cli', '-m', str(MODEL), '-l', lang, '-nt', '-np', '-f', t.name], capture_output=True, text=True).stdout
    return ' '.join(out.split())

def dur(p): return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(p)]))

def main(vid, *langs):
    langs = langs or ('en', 'fr', 'es'); rep = [f'# QA giọng {vid} (Whisper small nghe lại, so kịch bản)\n']; summ = []
    for l in langs:
        d = json.load(open(ROOT / 'video/src/data/multi' / f'{vid}-{l}.json'))
        # text từng câu: lấy từ data/multi (subs rỗng) ⇒ dựng lại từ bản dịch theo thứ tự voice
        sys.path.insert(0, str(ROOT / 'tools')); import multi
        _, L = multi.lines(vid); T = multi.tr(l)
        bad = []; ws = []; words = secs = 0
        for (vi, who), v in zip(L, sorted(d['voice'], key=lambda x: x['t'])):
            ref = T[vi]; p = PUB / v['src']; hyp = asr(p, l); w = wer(ref, hyp); ws.append(w)
            words += len(norm(ref)); secs += dur(p)
            if w > 0.25: bad.append((w, who, ref, hyp))
        mean = sum(ws) / len(ws); wpm = words / secs * 60
        summ.append(f'| {l} | {len(ws)} | {mean:.1%} | {len(bad)} | {wpm:.0f} |')
        rep.append(f'\n## {l}: WER trung bình {mean:.1%}, {len(bad)} câu đáng ngờ, {wpm:.0f} từ/phút\n')
        for w, who, ref, hyp in sorted(bad, reverse=True): rep.append(f'- **{w:.0%}** {who}: «{ref}»\n  - máy nghe: «{hyp}»')
    head = ['| thứ tiếng | câu | WER TB | câu > 25% | từ/phút |', '|---|---|---|---|---|'] + summ
    out = ROOT / 'loc/multi' / f'qa-{vid}.md'; out.write_text('\n'.join(rep[:1] + head + rep[1:]) + '\n')
    print('\n'.join(head)); print('→', out)

if __name__ == '__main__': main(*sys.argv[1:])
