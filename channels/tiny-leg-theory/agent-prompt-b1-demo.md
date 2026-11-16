Bạn là agent làm video stickman trên máy Mac này. Tự làm hết, chỉ hỏi khi bị chặn thật.

## Mục tiêu
Làm 1 video demo 30–45 s, 16:9, bằng `kaomei/stickman-video-director`, style **B1 Minimal Line Art**, render local, không key trả phí.
Chủ đề mặc định: "Why multitasking makes you slower" (tiếng Anh). Bạn được đổi chủ đề nếu có lý do; ghi lý do.

## 1 · Load repo
- Repo đã có tại `/Users/nino/Projects/FIRE10.DEV/REPO/stickman-ab/stickman-video-director`. Thiếu thì `git clone --depth 1 https://github.com/kaomei/stickman-video-director.git` vào đúng chỗ đó.
- Runtime: `skills/directing-stickman-videos/`. Chạy `npm ci` rồi `node scripts/autopilot.mjs doctor`; phải pass hết.

## 2 · Tự nghiên cứu (đọc trước khi viết gì)
- `skills/directing-stickman-videos/SKILL.md`
- `references/autopilot.md`, `references/autopilot-runtime.md`, `references/b1-minimal-handdrawn.md`, `references/b1-production-qa.md`, `references/autopilot-sound-system.md`
- Mẫu: `examples/b1/project.json`, `assets/b1/` (xem `character-pose-sheet-v6.png` và các `*-crayon.png`).
- Project tham khảo đã chạy được trên máy này: `/Users/nino/Projects/FIRE10.DEV/REPO/stickman-ab/b1-v2/` (`make_project.py` sinh `project.json`). Đọc nó để biết cách dựng, đừng copy nội dung.
- Ghi chú trước đó: `/Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/stickman-kino-ab-2026-11-13.md`.

## 3 · Làm demo
1. Script: cấu trúc 5 nhịp của SKILL (hook → phá giả định → cơ chế ẩn → sự thật → câu hỏi kết), ~2,4 từ/giây. Không bịa số liệu.
2. Giọng: TTS local miễn phí (macOS `say -v Samantha -o x.aiff`, hoặc engine local khác bạn cài được không cần key). Đổi sang WAV 44,1 kHz bằng ffmpeg.
3. Caption: Whisper không có sẵn → cắt theo khoảng lặng thật (`ffmpeg -af silencedetect=n=-40dB:d=0.12`) và theo dấu câu.
4. Shot: viết script Python sinh `project.json` (1280×720, 30 fps). Mỗi shot ≤ ~3 s, có layer chuyển động thật.
5. Phong cách đã chốt (giữ nguyên): font Chalkboard Bold, màu chữ đỏ `#EC4338` = vấn đề, xanh lá `#3E9B57` = cách giải, vàng `#D9962B` = insight/câu hỏi kết; nhạc nhẹ từ `~/Assets/rice-lib/music/yt-audio-library/` ở `music.gain` ~0,12 (thấp hơn giọng ~18 dB).
6. `validate` → `preview PROJECT/project.json --seconds <tổng thời lượng> --replace` → xem `output/preview-contact-sheet.png` và trích thêm khung bằng ffmpeg → sửa → render lại. Tối đa 3 vòng.

## Bẫy đã gặp (đừng mất thời gian lại)
- Lệnh validate/preview phải trỏ vào **file** `project.json`, không phải thư mục (lỗi `EISDIR`).
- B1 bắt buộc `ambience` liên tục, gain > 0, phủ đến **đúng** `voice duration + lead + tail` (ví dụ 43.250023 → `end: 43.25`; nhỏ hơn 2 ms là fail).
- Thời điểm trong `keys` phải tăng dần và nằm trong độ dài shot ("Invalid key time").
- Font `.ttc` bị từ chối ("no cmap") → tách TTF: `uv run --no-project --with fonttools python -c "from fontTools.ttLib import TTCollection; [f.save(f'chalkboard-{i}.ttf') for i,f in enumerate(TTCollection('/System/Library/Fonts/Supplemental/Chalkboard.ttc').fonts)]"`, dùng `chalkboard-1.ttf` (Bold). Chỉ dùng local, không phân phối.
- Chalkboard rộng → đặt `w: 560` cho text khi nhân vật đứng ở x ≥ 640, nếu không chữ đè đầu.
- `render` đòi user approve + independent review → dùng `preview --seconds <tổng>` để ra bản đủ dài; ghi rõ đây là bản chưa duyệt.
- Không có key tạo ảnh ⇒ chỉ có 3 dáng atlas + 8 prop mẫu. Ghi rõ là best-effort giới hạn, không phải chất lượng mẫu Ryan V4.

## Luật
- Làm trong `/Users/nino/Projects/FIRE10.DEV/REPO/stickman-ab/demo-<slug>/`. Không sửa repo upstream, không commit, không push.
- Không API trả phí, không Gemini, không đăng nhập dịch vụ nào, không tải nhạc/ảnh từ web.
- Cuối việc: ghi note vào `/Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/b1-demo-<slug>-2026-11.md` (frontmatter như các note cùng thư mục) và thêm 1 dòng vào `ai-video/_index.md` + `STATE.md`.

## Báo cáo (tiếng Việt, 3 mục)
**Tóm tắt vừa làm** · **Giải thích kết quả** (đường dẫn MP4, thời lượng, LUFS, thời gian render, số vòng sửa, ảnh contact sheet đã xem; lỗi 🔴/🟠/🟡) · **Next steps**.
