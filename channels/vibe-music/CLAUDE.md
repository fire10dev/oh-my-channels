# VibeMusicMaker — session bootstrap

Pipeline kênh YouTube nhạc AI không lời: Flow Music (nhạc) + Google Flow (ảnh) → Remotion/ffmpeg (video 1 giờ, Short, mix) → YouTube Studio.

Máy gốc: `~/Projects/FIRE10.DEV/REPO/MusicMaker` (cùng chỗ các repo FIRE10 khác). Máy khác: clone vào đâu cũng được, script dùng đường dẫn tương đối.

## Đọc trước khi làm gì
1. `HANDOFF.md` — phiên trước dừng ở đâu, việc đang dở, bước tiếp theo cụ thể.
2. `STATE.md` — trạng thái từng lô, việc tiếp theo, quy trình từng bước.
3. `docs/megabrain/` — bản chép (đã lọc) tài liệu MEGABRAIN của dự án; chính là
   `docs/megabrain/ai-video/research/youtube-loop-music-pipeline-2026-10.md` (bài học + gotchas Studio/Flow/Remotion).
   Bản gốc canonical: MEGABRAIN `FIRE10/document/<cùng đường dẫn>` (chỉ có ở máy gốc).
4. ID video + lịch: `batch*/schedule_log.md`, `shorts/shorts_schedule.md`; nội dung đăng: `*posts*.md/.txt/.csv`.

## Cấu trúc
- `batch2/`, `batch3/` — lô cũ (clip Google Flow 10 s → `make_1h.sh`).
- `batch4/` — lô hiện tại, pipeline ảnh tĩnh: `make_packs.py`, `build_scenes.py`, `render_1h.sh`, `make_posts.py`,
  `make_shorts.py`, `render_shorts.sh`, `make_mix.py`, `make_posts_extra.py`.
- `shorts/` — dự án Remotion (`src/Root.tsx` đăng ký composition: `Still-<id>`, `ShortG-<id>`, `ShortV-<vid>`, `Mix-*` …) + script batch 1–3.
- `make_image_prompts.py` — prompt ảnh Google Flow từ `<batch>/make_video_prompts.py`.
- `tools/redact.py` — `sync` (MEGABRAIN → `docs/megabrain`, đã lọc) và `check` (chặn dữ liệu nhạy cảm + file lớn).
- `local/` — gitignored, chỉ máy gốc: `PRIVATE.md` (tài khoản, SSH key, link project Flow), `redact.txt` (tên/email cần lọc).

## Quy trình commit (bắt buộc, theo thứ tự)
1. Cập nhật `HANDOFF.md` (mẫu trong file) để một tài khoản Claude khác pull về làm tiếp trơn tru; cập nhật `STATE.md` nếu trạng thái đổi.
2. `python3 -I tools/redact.py sync` — ánh xạ MEGABRAIN → `docs/megabrain` (máy không có MEGABRAIN: bỏ qua; nếu sửa
   `docs/megabrain/…` thì ghi trong HANDOFF.md để máy gốc chép ngược về MEGABRAIN). Doc mới về kênh → thêm vào `docs/megabrain/MANIFEST`.
3. `python3 -I tools/redact.py check` phải ra `OK` — không credential, email, tên tài khoản, đường dẫn `/Users/<tên>`, file > 1 MB.
   Có thông tin riêng cần giữ → ghi vào `local/PRIVATE.md`, trong repo chỉ để chỗ trỏ tới.
4. `git status` kiểm không có media; commit message ngắn. Chỉ commit/push khi user yêu cầu.

## Quy tắc
- **Không commit media** (mp3/wav/mp4/jpg/png, `public/`, `out*/`) — `.gitignore` đã chặn.
- **Không commit dữ liệu nhạy cảm**: email, credential, cookie, SSH key, tên tài khoản Google/Flow, link project riêng.
- Việc UI tốn kém (tạo nhạc/ảnh, chọn file upload) do user làm; agent làm local + điền Studio.
- Studio: tối đa 15 file/lần upload; "Video có liên quan" chỉ chọn được khi video đích đã công khai.
- Không đụng clipboard (pbcopy, nút Copy, cmd+c/v) — cảnh báo bảo mật trên máy gốc.
- Giờ dùng GMT+7.
