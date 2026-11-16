<!-- Snapshot 2026-11-07 23:00 (+07) from MEGABRAIN FIRE10/document/ai-video/research/yt-short-pipeline-test-s001-2026-11-07.md. Canonical copy lives there; this copy is for machines without MEGABRAIN. -->
---
title: Test pipeline Short tiếng Anh S001 — Claude + Kokoro + Nano Banana 2.1 (AI Studio playground) + Remotion
tags: [ai-video, youtube, shorts, remotion, kokoro, nano-banana, ai-studio, pipeline, verified]
status: verified
audience: both
created: 2026-11-07 22:16
updated: 2026-11-07
---

# S001 "10 things to know on your first trip to Vietnam" — test pipeline

> [!summary] Làm xong 1 Short 9:16 trong ~20 phút, **0 đ**: kịch bản Claude → giọng Kokoro (local) → 12 ảnh Nano Banana 2.1
> trong AI Studio playground (free, không API key) → Remotion render 19 s. Không đăng.
> Code: `/Users/luan/Projects/FIRE10.DEV/REPO/yt-channel/` (`scripts/S001-…md`, `shorts/src/ListShort.tsx`, `tools/`).

## Các bước đã chạy được `[!verified]`
| Bước | Công cụ | Kết quả / số đo |
|---|---|---|
| Kịch bản | Claude, `scripts/S001-10-things-first-time-vietnam.md` (bảng EN + VI duyệt) | 12 cảnh: hook + 10 tip + outro |
| Giọng | Kokoro 0.9.4, giọng `af_heart`, `tools/tts_kokoro.py` (1 wav/cảnh + `timeline.json`) | tốc độ 1.1: 33,5 s tổng; 1.2: ngắn hơn. Không cần espeak-ng. Âm lượng gốc thấp (-25,6 LUFS) ⇒ `loudnorm I=-14` |
| Ảnh | AI Studio playground, Nano Banana 2.1, 9:16, 1K | **768×1376**, ~25–30 s/ảnh, cùng 1 chat ⇒ phong cách đồng nhất. Chưa gặp giới hạn sau 15 ảnh |
| Dựng | Remotion 4.0.535, `ListShort` (Ken Burns, số thứ tự, thanh tiến độ, crossfade 6 frame, SFX swoosh, BGM Mixkit 7%) | Độ dài cảnh = độ dài giọng + 0,12 s. Render 1080×1920 mất **19 s**. Bản cuối (giọng 1.2): **33,2 s**, -14,6 LUFS, 29 MB, `shorts/out/S001-10-things-vietnam.mp4` |

## Đã đăng (2026-11-07 22:56, user yêu cầu) `[!verified]` hộp thoại "Đã đăng video"
- **https://youtube.com/shorts/v1DX0NAPdEg** trên Rice & Empires, Công khai, 0:34.
- Title: `First Time in Vietnam? 10 Things You Should Know #Shorts`. Mô tả có dòng "Illustrations and narration are AI-assisted." + #Vietnam #VietnamTravel #Shorts.
- Không dành cho trẻ em · danh mục Du lịch và sự kiện · câu hỏi "Sử dụng AI" (4 trường hợp **chân thực**) = Không (tranh cách điệu) · kiểm tra bản quyền: không vấn đề.
- Quy trình user chốt: Claude soạn title/mô tả → mở hộp thoại upload Studio → **user kéo file từ Finder** (vượt giới hạn 10 MB của extension) → Claude điền + xuất bản.
- 🟠 Video lệch định vị (mẹo du lịch, kênh là lịch sử) — user vẫn chọn đăng.

## Bài học (để lần sau không mất thời gian)
- 🔴 Built-in browser: **nút Download không ra file** (không vào `~/Downloads`). `window.open` mở **đè tab hiện tại** ⇒ mất chat tạm.
  `fetch` tới `127.0.0.1` bị CSP AI Studio chặn.
- ✅ Cách lấy ảnh chạy được: gom blob trong trang (`window.__store`, key = prompt người dùng), rồi **form POST multipart** tới
  `tools/receive_images.py` (chỉ bind 127.0.0.1) ⇒ CSP không chặn form. 12 ảnh về `shorts/public/s001/` một lần.
- 🟠 Chat AI Studio **ảo hoá danh sách**: turn ra khỏi màn hình bị xoá khỏi DOM ⇒ phải cuộn qua và gom dần.
- 🟠 Xin "4 ảnh trong 1 tin" ⇒ model trả **1 ảnh lưới 2×2** (độ phân giải thấp). Mỗi tin 1 ảnh.
- 🟠 Gõ prompt khi lượt trước chưa xong ⇒ 2 prompt bị dính vào 1 tin (tip 9 + tip 10). Chờ xong mới gõ.
- Mặc định playground bật Grounding with Google Search; popup "Save to Drive" → bấm Cancel (Temporary chat).
- Kokoro đọc "sin chow / gahm un" thay cho "Xin chào / Cảm ơn": phải viết phiên âm trong `say`, chữ tiếng Việt chỉ để hiển thị.

## Chưa làm / chưa kiểm
- 🟡 Chưa nghe bằng tai (chỉ đo độ dài, âm lượng). Chưa chạy vòng Whisper kiểm từ đọc sai.
- 🟡 Ảnh 1K upscale lên 1080×1920 (×1,4): watercolor che được, ảnh chi tiết sẽ mềm. Thử 2K trong playground.
- 🟡 Giới hạn tạo ảnh/ngày của playground: chưa biết.
