# global-shorts — Shorts view ngoại từ nguyên liệu có sẵn

Phán quyết của ban (codex ↔ agy, Claude chốt): `debate/verdict.md` · transcript: `debate/transcript.md`.

**Món chính:** 32 short của Off Limits Life, kịch bản đã kiểm chứng nguồn, được lồng tiếng sang **ES / PT-BR / FR**.
Lời đọc, chữ, nhãn trong cảnh và đơn vị (đổi sang hệ mét) đều được bản địa hoá. Hình vẽ bằng code nên không tốn quota ảnh AI.

## Đầu ra (cho người đăng)
| Thư mục | Nội dung |
|---|---|
| `out/<lang>/*.mp4` | Short 9:16, 1080×1920, −14 LUFS |
| `out/<lang>/*-cover.jpg` | Ảnh bìa 1080×1920 |
| `out/<lang>/UPLOAD.md` / `UPLOAD.csv` | Title, mô tả (có nguồn và khai báo giọng AI), tags, pinned comment, lịch đăng (+07 / giờ khán giả) |
| `out/channel-kit/` | Logo, banner, mô tả cho 3 kênh mới (`CHANNELS.md`) |

## Pipeline (`tools/`)
`make_loc.py SX LANG` chạy trọn một short:
1. `translate_sx.py`: codex dịch, kèm khoá cấu trúc.
2. `tts_loc.py`: Kokoro (es `em_alex` · pt-br `pm_alex` · fr `ff_siwis`).
3. Nhạc nền: track của bản EN, lặp cho đủ độ dài.
4. Remotion: `engine/` dùng lại `ShortX` của kênh gốc, thêm lớp `L10n` để dịch nhãn trong cảnh theo `oll/labels/<lang>.json`.
5. loudnorm 2 lượt.
6. Cover.

Chạy cả lô: `tools/batch.sh es pt fr`. Đóng gói và đăng ký YT Hub: `python3 tools/package.py --hub`.
Short EN mới ở kênh gốc: thêm id vào `ORDER` trong `batch.sh`, chạy lại (file đã có sẽ được bỏ qua).

Không sửa gì trong `channels/off-limits-life/`, chỉ import và đọc (`node_modules`, `public/sfx` là symlink).
