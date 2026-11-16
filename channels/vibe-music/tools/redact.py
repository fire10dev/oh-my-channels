#!/usr/bin/env python3
"""Lọc dữ liệu nhạy cảm trước khi vào repo.

  python3 -I tools/redact.py sync    # MEGABRAIN → docs/megabrain (đã lọc), theo docs/megabrain/MANIFEST
  python3 -I tools/redact.py check   # quét file sẽ commit: credential, email, tên acc, file > 1 MB → exit 1 nếu có

Luật chung nằm ở đây; tên/email cụ thể nằm ở local/redact.txt (gitignored, chỉ máy gốc).
Máy không có MEGABRAIN: `sync` bỏ qua; sửa thẳng docs/megabrain/… và ghi vào HANDOFF.md.
"""
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MB = Path(os.environ.get("MEGABRAIN_DOC", Path.home() / "Projects/MEGABRAIN/FIRE10/document"))
DST = ROOT / "docs/megabrain"
MAX_BYTES = 1_000_000

RULES = [  # (pattern, replacement)
    (r"/Users/[A-Za-z0-9._-]+", "~"),
    (r"id_(?:ed25519|rsa|ecdsa)[A-Za-z0-9_]*", "<ssh-key>"),
    (r"(flow\.google\.com/u/\d+/project/)[0-9a-f-]{36}", r"\1<id — local/>"),
    (r"[A-Za-z0-9._%+-]+@(?!anthropic\.com)[A-Za-z0-9.-]+\.(?:com|ch|net|org|io|vn|dev)\b", "<email>"),
]
SECRETS = [  # chỉ báo, không tự sửa
    r"AIza[0-9A-Za-z_-]{30,}", r"sk-[A-Za-z0-9_-]{20,}", r"gh[pousr]_[A-Za-z0-9]{20,}",
    r"xox[abp]-[A-Za-z0-9-]{10,}", r"-----BEGIN [A-Z ]*PRIVATE KEY-----",
    r"(?i)\b(?:password|passwd|api[_-]?key|secret|access[_-]?token)\s*[:=]\s*\S{6,}",
    r"(?i)SAPISID|__Secure-\dPSID|\bSID=",
]


def literals():
    f = ROOT / "local/redact.txt"
    out = []
    if f.exists():
        for line in f.read_text(encoding="utf-8").splitlines():
            if "=>" in line and not line.lstrip().startswith("#"):
                a, b = (s.strip() for s in line.split("=>", 1))
                out.append((a, b))
    return sorted(out, key=lambda x: -len(x[0]))


def redact(text):
    for a, b in literals():
        text = re.sub(re.escape(a), b, text, flags=re.I)
    for p, r in RULES:
        text = re.sub(p, r, text)
    return text


def manifest():
    for line in (DST / "MANIFEST").read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            yield line


def sync():
    if not MB.is_dir():
        print(f"Không có MEGABRAIN ({MB}) — bỏ qua, dùng bản trong docs/megabrain")
        return 0
    for rel in manifest():
        src, dst = MB / rel, DST / rel
        if not src.is_file():
            print("THIẾU nguồn:", rel)
            continue
        new = redact(src.read_text(encoding="utf-8"))
        if dst.exists() and dst.read_text(encoding="utf-8") == new:
            print("giống   ", rel)
            continue
        dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_text(new, encoding="utf-8")
        print("đã chép ", rel)
    return 0


def files_to_commit():
    out = subprocess.run(["git", "ls-files", "-co", "--exclude-standard"], cwd=ROOT,
                         capture_output=True, text=True, check=True).stdout.splitlines()
    return [ROOT / f for f in out if (ROOT / f).is_file()]


def check():
    bad = 0
    lits = [a for a, _ in literals()]
    for f in files_to_commit():
        rel = f.relative_to(ROOT)
        if rel.parts[0] == "local" or rel.name == "redact.txt":
            print("CẤM    ", rel, "(local/ phải bị gitignore)"); bad += 1; continue
        size = f.stat().st_size
        if size > MAX_BYTES:
            print(f"LỚN     {rel} ({size // 1024} KB) → thêm vào .gitignore"); bad += 1
            continue
        try:
            text = f.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            print("BINARY ", rel, "→ thêm vào .gitignore nếu là media"); bad += 1; continue
        if rel in (Path("tools/redact.py"), Path(".gitignore")):
            continue
        hits = [m.group(0) for p in SECRETS for m in re.finditer(p, text)]
        hits += [a for a in lits if re.search(re.escape(a), text, re.I)]
        hits += [m.group(0) for p, _ in RULES for m in re.finditer(p, text)]
        for h in sorted(set(hits)):
            print(f"NHẠY CẢM {rel}: {h[:60]}"); bad += 1
    print("OK — không có gì cần lọc" if not bad else f"{bad} vấn đề")
    return 1 if bad else 0


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "check"
    sys.exit({"sync": sync, "check": check}[cmd]())
