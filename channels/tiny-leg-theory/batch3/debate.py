"""Writer (agy Claude Opus 4.6; WRITER=codex for Codex) writes, critic (agy Gemini 3.8 Flash High) attacks, Codex rebuts + revises — 3 rounds. Resumable: every step is a file, existing files are skipped.

python3 -I batch3/debate.py TASK_DIR      (TASK_DIR holds task.md = the writing brief + inputs, kind.txt = "object" | "list")
Steps: r0.json (Codex draft) -> c1.md (agy critique) -> r1.json (Codex rebuttal + revision) -> c2.md -> r2.json -> c3.md -> r3.json
final.json = r3.json.  Optional TASK_DIR/check.sh FILE must exit 0 for a Codex step to count (else retried with the error).
"""
import json, os, pathlib, subprocess, sys, tempfile

NOTE = ("\n\nThis is a non-interactive batch job: never ask questions, ignore any reply-format rules from your config, "
        "do not use tools or read files; everything you need is in this prompt.")
CRITIC = """You are a sharp, sceptical reviewer (the opposing side in a debate). Below is a creative brief and the writer's current draft{rebut}.
Attack the draft hard but fairly. Find the most important problems first:
- accuracy (overstated psychology, invented facts/numbers/studies, medical or therapy advice, labels),
- hooks that would not stop a scroll / are clickbait or false, weak or vague practical fixes,
- repetition or near-duplicates, things that do not fit the brief or its hard rules (lengths, allowed values, mascot voices),
- (Vietnamese) lines that sound translated, stiff, or that a Vietnamese TTS will misread (English words, abbreviations, digits).
If the writer rebutted your earlier points, say for each whether you accept the rebuttal or insist (and why).
Give at most 15 numbered points, each: location (id / chapter / line), problem, concrete fix. Be specific; no praise, no summary.
Reply in plain text only. Do not use any tools."""
REVISE = """You are the writer. Below are your brief, your current draft, and a reviewer's critique (round {r} of 3).
Debate honestly: accept the points that make the work better and apply them; reject points that are wrong, would break the brief,
or make it worse, and say why. Then output the full revised result.
Format exactly:
REBUTTAL:
<one short line per critique point: "N accept" or "N reject: reason">
RESULT:
<the complete revised JSON {kind}, nothing after it>"""


def run(cmd, prompt, tries=3):
    for _ in range(tries):
        with tempfile.NamedTemporaryFile("r", suffix=".txt") as o:
            p = subprocess.run(cmd(prompt, o.name), input=prompt + NOTE if cmd is codex else None,
                               capture_output=True, text=True, timeout=3600)
            out = o.read() if cmd is codex else p.stdout
        if p.returncode == 0 and out.strip(): return out
    raise RuntimeError(f"{cmd.__name__} failed: {p.stderr[-400:]}")


def codex(prompt, out):  # prompt goes on stdin, last message to `out`
    return ["codex", "exec", "--skip-git-repo-check", "-s", "read-only", "-o", out, "-"]


def agy(prompt, _out):  # critic
    return ["agy", "--disable-slash-commands", "--model", os.environ.get("CRITIC_MODEL", "gemini-3.8-flash-medium"), f"-p={prompt}{NOTE}"]


def writer(prompt, _out):  # Codex hit its usage limit until 2026-12-05 => writer = agy running Claude Opus 4.6 (user 2026-11-15 22:10)
    # agy Claude/GPT-OSS quotas then ran out (~120 h) => default writer Gemini 3.8 Flash High, critic Flash Medium (user 2026-11-16)
    return ["agy", "--disable-slash-commands", "--model", os.environ.get("WRITER_MODEL", "gemini-3.8-flash-high"), f"-p={prompt}{NOTE}"]


WRITER = codex if os.environ.get("WRITER") == "codex" else writer


def parse(text, kind):
    a, b = ("[", "]") if kind == "list" else ("{", "}")
    body = text.split("RESULT:", 1)[-1]
    return json.loads(body[body.index(a): body.rindex(b) + 1])


def write_step(d, name, prompt, kind):
    out = d / name
    if out.exists(): return json.loads(out.read_text())
    err = ""
    for _ in range(5):
        raw = run(WRITER, prompt + err)
        (d / (name + ".raw.txt")).write_text(raw)
        try:
            j = parse(raw, kind)
        except Exception as e:
            err = f"\n\nYOUR PREVIOUS ANSWER WAS NOT VALID JSON ({e}). Output the full JSON again."; continue
        tmp = d / (name + ".tmp"); tmp.write_text(json.dumps(j, ensure_ascii=False, indent=1))
        if (d / "check.sh").exists():
            c = subprocess.run(["zsh", str(d / "check.sh"), str(tmp)], capture_output=True, text=True)
            if c.returncode != 0:
                err = (f"\n\nYOUR PREVIOUS ANSWER (below) FAILED THE CHECKER. Change ONLY the items named in the errors, keep "
                       f"everything else identical, and output the full corrected JSON (after 'RESULT:' if that format was asked).\n"
                       f"ERRORS:\n{c.stdout[-3000:]}{c.stderr[-500:]}\nPREVIOUS ANSWER:\n{json.dumps(j, ensure_ascii=False)}")
                continue
        tmp.rename(out); return j
    raise RuntimeError(f"{d.name}/{name}: no valid output after 3 tries{err[:300]}")


def main(d):
    d = pathlib.Path(d); task = (d / "task.md").read_text(); kind = (d / "kind.txt").read_text().strip()
    cur = write_step(d, "r0.json", task, kind)
    for r in (1, 2, 3):
        c = d / f"c{r}.md"
        if not c.exists():
            prev = (d / f"r{r - 1}.json.raw.txt")
            rebut = prev.read_text().split("RESULT:", 1)[0] if r > 1 and prev.exists() else ""
            prompt = CRITIC.format(rebut=" and the writer's rebuttal of your previous critique" if rebut else "")
            prompt += f"\n\n=== BRIEF ===\n{task}\n\n=== DRAFT ===\n{json.dumps(cur, ensure_ascii=False)}"
            if rebut: prompt += f"\n\n=== WRITER'S REBUTTAL ===\n{rebut}"
            c.write_text(run(agy, prompt))
        cur = write_step(d, f"r{r}.json", REVISE.format(r=r, kind=kind) +
                         f"\n\n=== BRIEF ===\n{task}\n\n=== CURRENT DRAFT ===\n{json.dumps(cur, ensure_ascii=False)}"
                         f"\n\n=== CRITIQUE ===\n{c.read_text()}", kind)
    (d / "final.json").write_text(json.dumps(cur, ensure_ascii=False, indent=1))
    print(d.name, "done")


if __name__ == "__main__":
    main(sys.argv[1])
