"""Translate the on-screen world labels (scratch/labels.json, extracted from OLL worlds) -> oll/labels/<lang>.json via codex."""
import json, subprocess, sys, pathlib, re, tempfile
ROOT = pathlib.Path(__file__).resolve().parents[1]
lang = sys.argv[1]
NAME = {"es": "Spanish (Latin American)", "pt": "Brazilian Portuguese", "fr": "French"}[lang]
labels = json.loads((ROOT / "scratch/labels.json").read_text())
prompt = f"""Translate these short on-screen labels from an animated infographic into {NAME}. Do not run commands.
Keep ALL CAPS when the source is caps. Keep proper nouns, brand/ship names, codes and Italian words as they are.
Convert imperial units to metric (FT→M, MI→KM, MPH→KM/H, LB→KG, °F→°C), rounded. Keep translations as short as the source.
Return ONLY a JSON object mapping each source string to its translation, nothing else.
{json.dumps(labels, ensure_ascii=False)}"""
tf = tempfile.mktemp(suffix=".txt")
subprocess.run(["codex", "exec", "--skip-git-repo-check", "-s", "read-only", "-o", tf, "-"], input=prompt, text=True, capture_output=True, cwd=tempfile.gettempdir())
d = json.loads(re.search(r"\{.*\}", pathlib.Path(tf).read_text(), re.S).group(0))
d = {k: v for k, v in d.items() if k in labels and v and v != k}
(ROOT / "oll/labels" / f"{lang}.json").write_text(json.dumps(d, ensure_ascii=False, indent=0))
print(lang, len(d), "labels")
