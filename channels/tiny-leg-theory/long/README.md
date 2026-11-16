# Tiny Leg Theory / Lý Thuyết Chân Que — video dài 16:9 (2026-11-15)

14 video (7 chủ đề × EN/VI) trong `final/`, kèm `<id>.thumb.jpg` + `<id>.chapters.txt`. Metadata đăng: `upload-metadata-long-en.csv`, `upload-metadata-long-vi.csv`.
Plan + quyết định: /Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/tiny-leg-theory-long-plan-2026-11-15.md

| id | EN | VI | Short nguồn |
|---|---|---|---|
| L1 Trì hoãn | 8:01 | 6:34 | s01–05, s13–14, s31–36, s62 |
| L2 Điện thoại vs tập trung | 10:11 | 8:24 | s06–10, s37–53 |
| L3 Thói quen | 8:35 | 6:14 | s15–18, s30, s54–72 |
| L4 Học nhớ lâu | 10:31 | 6:14 | s26–27, s73–86 |
| L5 Bẫy tiền / quyết định | 10:12 | 8:24 | s23–24, s28, s87–105 |
| L6 Giao tiếp | 9:01 | 7:33 | s19–22, s29, s106–120 |
| L7 Stress / nghĩ nhiều | 8:51 | 7:09 | s11–12, s25, s121–130 |

## Pipeline (chạy từ `stickman-ab/`)
1. `themes.json` + `src/<L>-<lang>.md` (gom Short theo chủ đề).
2. `long/run_codex.sh L1 [bước đã xong]` — Codex viết EN → duyệt → viết lại VI → duyệt ⇒ `scripts/<L>-<lang>.json`. Prompt: `prompt-*.md`.
3. `python3 long/lint_long.py L1-en …` — kiểm độ dài, pose/prop.
4. `./long/render_long.sh L1-en …` — `make_long.py` (TTS Kokoro/VieNeu cache ở `build/<id>/tts/`, mỗi chương chia phần ≤ 50 s vì preview tối đa 60 s) → validate + preview từng phần → `finalize_long.py` (nối, nhạc `shorts/music/pen.mp3` gain 0,09, loudnorm −14/TP −1,5) → `final/`.
5. `tts-vi/.venv/bin/python long/package_long.py` — thumbnail + CSV.
Sửa 1 câu: sửa JSON, xoá `build/<id>/tts/<k>.wav` của câu đó (k = số thứ tự câu toàn bài), render lại.
