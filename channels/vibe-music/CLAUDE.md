# VibeMusicMaker — session bootstrap

Pipeline kênh YouTube nhạc AI không lời: Flow Music (nhạc) + Google Flow (ảnh) → Remotion/ffmpeg (video 1 giờ, Short, mix) → YouTube Studio.

Thư mục: `oh-my-channels/channels/vibe-music`. Script dùng đường dẫn tương đối.

## Đọc trước khi làm gì
1. `ythub status --channel VibeMusicMaker` + `ythub tasks --channel VibeMusicMaker` — trạng thái từng video và việc còn lại (YT Hub, thay HANDOFF/STATE).
2. `PIPELINE.md` — quy trình batch 4, media, setup.
3. `docs/megabrain/ai-video/research/youtube-loop-music-pipeline-2026-10.md` — bài học + gotchas Studio/Flow/Remotion
   (canonical: MEGABRAIN `FIRE10/document/<cùng đường dẫn>`).
4. ID video + lịch: `batch*/schedule_log.md`, `shorts/shorts_schedule.md`; nội dung đăng: `*posts*.md/.txt/.csv`.
   Lịch sử trước 16/11: `docs/archive/`.

## Cấu trúc
- `batch2/`, `batch3/` — lô cũ (clip Google Flow 10 s → `make_1h.sh`).
- `batch4/` — lô hiện tại, pipeline ảnh tĩnh: `make_packs.py`, `build_scenes.py`, `render_1h.sh`, `make_posts.py`,
  `make_shorts.py`, `render_shorts.sh`, `make_mix.py`, `make_posts_extra.py`.
- `shorts/` — dự án Remotion (`src/Root.tsx` đăng ký composition: `Still-<id>`, `ShortG-<id>`, `ShortV-<vid>`, `Mix-*` …) + script batch 1–3.
- `make_image_prompts.py` — prompt ảnh Google Flow từ `<batch>/make_video_prompts.py`.
- `tools/redact.py` — `sync` (MEGABRAIN → `docs/megabrain`, đã lọc) và `check` (chặn dữ liệu nhạy cảm + file lớn).
- `local/` — gitignored: `PRIVATE.md` (tài khoản, SSH key, link project Flow), `redact.txt` (tên/email cần lọc).

## Quy trình commit (bắt buộc, theo thứ tự)
1. Ghi trạng thái vào YT Hub: `ythub set/log/fact/task` (không có HANDOFF.md/STATE.md nữa).
2. `python3 -I tools/redact.py check` phải ra `OK` — không credential, email, tên tài khoản, đường dẫn `/Users/<tên>`, file > 1 MB.
   Thông tin riêng → `local/PRIVATE.md`, trong repo chỉ để chỗ trỏ tới.
3. `git status` kiểm không có media; commit message ngắn. Chỉ commit/push khi user yêu cầu.

## Quy tắc
- **Không commit media** (mp3/wav/mp4/jpg/png, `public/`, `out*/`) — `.gitignore` đã chặn.
- **Không commit dữ liệu nhạy cảm**: email, credential, cookie, SSH key, tên tài khoản Google/Flow, link project riêng.
- Việc UI tốn kém (tạo nhạc/ảnh, chọn file upload) do user làm; agent làm local + điền Studio.
- Studio: tối đa 15 file/lần upload; "Video có liên quan" chỉ chọn được khi video đích đã công khai.
- Giờ dùng GMT+7.
