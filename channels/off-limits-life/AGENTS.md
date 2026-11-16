# AGENTS.md — Off Limits Life (channels/off-limits-life)

Trạng thái từng video, thứ tự đăng, việc còn lại: **YT Hub** — `ythub status --channel "Off Limits Life"`, `ythub show IX006`, `ythub tasks`.
Ghi lại sau mỗi bước bằng `ythub set/log/fact/task` (không có HANDOFF.md). Lịch sử trước 16/11: `docs/archive/`.
Gói đăng (title/mô tả/chương/nguồn) của từng video: `scripts/IX0NN-*.md`, Shorts: `scripts/SHORTS-*.md` — đã chép vào YT Hub.

## Kênh
- **Off Limits Life** · https://www.youtube.com/@OffLimitsLife · channel ID `UCyMWnWUQnsp6LF0DOryD6sw`
- Brand Account quản lý bởi fire10.dev@gmail.com (cùng tài khoản với @Vibe.MusicMaker). Đăng nhập ở **built-in browser** của Claude app (không phải Chrome).
- Logo PEEK + banner vàng đã tải (owner tự chọn file vì built-in browser không có công cụ đưa file vào ô tải lên). Mô tả kênh đã điền.

## Pipeline
`src/data/<id>.json` (cảnh + lời) → `tts_kokoro.py` (yt-channel/tools/.venv) → `public/<id>/` + timeline → `npx remotion render src/index.ts <Comp>` → `ffmpeg loudnorm I=-14`.
Gói đăng: `scripts/IX001-*.md` §3. File tải lên: `out/upload/`.

## Shorts
12 Shorts 9:16 (engine `src/ShortX.tsx`, 2/long IX001–IX006) ở `out/upload/Short-sx-*.mp4`. Gói: `scripts/SHORTS-IX001-IX002.md`, `scripts/SHORTS-IX003-IX006.md`, `scripts/SHORTS-IX004-IX005.md`. Chưa đăng.
Soát world: `tools/view_sheet.sh <Comp> <vid>` · nhạc: `tools/source_bed.py` · đáp án camera: `tools/cam_truth.py` · band: `tools/pace_check.py [DIR]` (band v2; v1 ở `out/teardown/ref-band-v1.json`).
Render long: `tools/render_long.sh <Comp> <vid> <OutName>` (render → gain chương → loudnorm 2 lượt → cổng).

## Đăng (agent đăng video đọc phần này)
Owner bấm Publish/Schedule, agent chỉ điền form. Chia việc: **session đăng không sửa `tools/`, `src/`**, vì session khác đang sửa cổng đo (`tools/frame_teardown.py`).
Thứ tự đăng hiện tại: task kênh trong YT Hub (`ythub tasks --channel "Off Limits Life"`). Không để 2 video liền nhau cùng loại bối cảnh.


- Form: "Sử dụng AI / altered content" = Không; mô tả đã ghi giọng AI. Made for kids = Không.
- Sau khi đăng: `ythub set <CODE> --channel "Off Limits Life" --stage published --url <link>`; Short: `--linked-url <link long>`.
- Cổng v2 (2026-11-15, note `/Users/nino/Projects/MEGABRAIN/FIRE10/document/ai-video/research/off-limits-life-teardown-v2-2026-11-15.md`): cả 5 long đạt push-in. Pan chỉ để tham khảo (chưa đo tin được). Còn lệch thật nhưng nhỏ: static 2–3 thẻ chương tĩnh (IX002/4/5/6), IX006 p10 lệch 0,01 s. Không chặn việc đăng.

## Quy tắc kênh
- Neo thời gian mọi con số ("as of <năm>", thẻ số ghi nguồn + năm, chân màn hình "Figures as of <năm>").
- Claim không có nguồn gốc ⇒ bỏ (vd con số vitamin D 13%→30% đã bỏ).
- "Sử dụng AI" = Không (hình cách điệu bằng code); mô tả ghi rõ giọng đọc là AI.
