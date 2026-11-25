# P02 — lịch đăng & metadata (user duyệt 2026-11-20 12:58 +07)

Chung cho mọi video:
- Không dành cho trẻ em.
- "Nội dung bị thay đổi / tổng hợp" = Có (giọng và hình do AI tạo).
- Danh mục: Giải trí. Ngôn ngữ: Tiếng Việt.
- Nhạc: In The Bushes Creepin (YouTube Audio Library, không cần ghi công). SFX: Sonniss GDC 2026 Game Audio Bundle (miễn phí bản quyền, không cần ghi công).

Cuối mỗi mô tả:
> Truyện hư cấu lấy cảm hứng từ tín ngưỡng dân gian về "trùng tang". Nhân vật, xưởng may và sự việc đều là hư cấu. Giọng đọc và hình ảnh tạo bằng AI.
> 📅 Short mỗi ngày · Long mỗi tuần. Đăng ký @MaNoKeChuyen để nghe con ma tiếp theo kể.

| Giờ công chiếu (+07) | Mã | Tiêu đề | Mô tả (dòng đầu) |
|---|---|---|---|
| T5 26/11 18:00 | P02-LONG | Trùng Tang Nhầm Người: Thần Trùng Điểm Danh Ông Giám Đốc Lúc 3 Giờ Sáng | Công chức âm phủ chỉ đọc giấy. Ông giám đốc tự ký vào tờ khai ba chữ: như người nhà. |
| T5 26/11 19:00 (sau LONG) | P02-SH1 | Máy chấm công chỉ có nút vào, không có nút ra ⏱️ #shorts | Xưởng là nhà. Mà ở nhà thì ai tính giờ về? |
| T6 27/11 19:00 | P02-SH2 | Ba chữ đắt nhất đời ông giám đốc: "như người nhà" #shorts | Hai giờ mười sửa thành năm giờ sáng. Tại xưởng sửa thành tại nhà. |
| T7 28/11 19:00 | P02-SH3 | Giờ trùng: mất vào giờ này, âm phủ quay lại điểm danh người nhà #shorts | Giám đốc sửa giấy, mà nhà người ta phải trả à? |
| CN 29/11 19:00 | P02-SH4 | 3 giờ sáng, máy chấm công tự in tên giám đốc #shorts | Thần trùng gõ mõ ba nhịp, mở hồ sơ: cần điểm danh một người nhà. |
| T2 30/11 19:00 | P02-SH5 | "Tôi còn sống mà?" — CÓ MẶT 03:00 #shorts | Nhầm. Nhưng nhầm đúng quy trình. |
| T3 1/12 19:00 | P02-SH6 | Giám đốc quấn khăn tang đi gặp đối tác #shorts | Thần trùng không lấy mạng. Thần trùng lấy lịch. |
| T4 2/12 19:00 | P02-SH7 | Âm phủ trừ chuyên cần ông giám đốc #shorts | Ba đêm quỳ muộn. Tháng này, trừ chuyên cần. |

File (trong `channels/ma-no-ke/video/out/`):
- `P02-LONG-diem-danh-nham.mp4` (4:04)
- `P02-SH1-cham-vao-khong-cham-ra.mp4` (41 s)
- `P02-SH2-nhu-nguoi-nha.mp4` (38 s)
- `P02-SH3-gio-trung.mp4` (42 s)
- `P02-SH4-giay-ghi-the-nao.mp4` (30 s)
- `P02-SH5-co-mat-0300.mp4` (30 s)
- `P02-SH6-khan-tang-giam-doc.mp4` (39 s)
- `P02-SH7-tru-chuyen-can.mp4` (43 s)

Thumbnail + tiêu đề LONG — 3 cặp cho Test & compare (2026-11-20 23:50 +07, chờ user duyệt). Chữ cọ kiểu mẫu user gửi (TRÙNG trắng / TANG đỏ / dải vàng), hình là asset P02 có chất trào phúng:
| Bản | Thumbnail (`video/out/`) | Tiêu đề |
|---|---|---|
| U1 | `P02-LONG-thumb-U1.jpg`: bàn thờ, giám đốc hoảng giữa hàng người cúi đầu, thần trùng thản nhiên ghi sổ; dải "NHẦM NGƯỜI!" | Trùng Tang Nhầm Người: Thần Trùng Điểm Danh Ông Giám Đốc Lúc 3 Giờ Sáng |
| U2 | `P02-LONG-thumb-U2.jpg`: máy chấm công in phiếu "NGUYỄN VĂN PHÁT · CÓ MẶT · 03:00", thần trùng cầm sổ, giám đốc chắp tay khóc | 3 Giờ Sáng, Máy Chấm Công In Tên Giám Đốc: "Có Mặt" \| Truyện Trùng Tang |
| U3 | `P02-LONG-thumb-U3.jpg`: giám đốc chít khăn tang cười ký giấy trước ảnh thờ, thần trùng rung chuông; dải "NHƯ NGƯỜI NHÀ" | Ông Giám Đốc Còn Sống Bị Trùng Tang Chỉ Vì 3 Chữ "Như Người Nhà" |

Bảng lịch phía trên dùng tiêu đề U1 làm mặc định. Bỏ: T1/T2, A/B/C, thumb cũ. Dựng lại: `npx remotion still src/index.tsx P02-THUMB-U1 out/…png` trong `video/`, props ở `video/src/data/p02-thumbs.json`.

- Mỗi short gắn "Video liên quan" là bản P02-LONG. Việc này chỉ làm được sau khi LONG đã có trên kênh (ở chế độ đã lên lịch thì vẫn chọn được), nên đăng hoặc lên lịch LONG trước.
- P01-SH7 (T4 25/11) đã kết bằng lời hứa về tập này. LONG P02 lên lúc 18:00 ngày 26/11, trước SH1 một tiếng.
- Long tập 3 (ma xó giữ của, B05) dự kiến T5 3/12. SH7 và cuối LONG P02 đã hứa "Tuần sau".
- Bước đăng giao riêng sau khi user duyệt lịch này. Không tự đăng.
- User duyệt lịch 2026-11-20 12:58 +07: LONG T5 26/11 18:00, SH1 26/11 19:00, SH2–SH7 19:00 mỗi ngày đến 2/12.

## Đã đăng (2026-11-21 21:17 +07)
LONG user đăng tay; short qua API `oh-my-channels-yt/shared/youtube/yt.mjs` (token `ma-no-ke`), lịch mới theo user: SH1 ngay, SH2–SH7 19:00 mỗi ngày 22–27/11. Mô tả short thêm dòng "▶ Bản đầy đủ: <LONG>". Video liên quan: user tự gắn trong Studio (API không hỗ trợ), task #64.
| Mã | Link | Lên |
|---|---|---|
| LONG | https://youtu.be/2hETGPYAxEI | 21/11 21:11 |
| SH1 | https://youtu.be/6pcTLz1bl4s | 21/11 21:17 |
| SH2 | https://youtu.be/gyC_7pSGkc0 | 22/11 19:00 |
| SH3 | https://youtu.be/xAaA0MCHA94 | 23/11 19:00 |
| SH4 | https://youtu.be/TBQDrB4tbK0 | 24/11 19:00 |
| SH5 | https://youtu.be/v-qZo9pioAU | 25/11 19:00 |
| SH6 | https://youtu.be/g7lIb2LPG0c | 26/11 19:00 |
| SH7 | https://youtu.be/Mk_7w13svZc | 27/11 19:00 |

## Facebook (user đăng tay 2026-11-21 22:03–22:07 +07)
- Bài chữ P02 (`post/bai-dang-than-trung.md`): post `1424700147399491_122096576865561636`.
- LONG native (video `2024498544889068`) + 7 Reel short, caption "Bản full tại đây …". Đã đủ, không đăng lại.
- 2026-11-24 15:45–15:50 agent đăng trùng bài chữ + Reel SH1 qua API → đã xoá lúc 15:52 theo yêu cầu user.
- Reel ↔ short (khớp theo độ dài file): SH1 1889691565526571 · SH2 1791389581930828 · SH3 2033244910614097 · SH4 2696808894111212 · SH5 29402930256005082 · SH6 1685539619917005 · SH7 1777416040014823 · LONG 2024498544889068. Link: `https://www.facebook.com/reel/<id>`.
- 2026-11-24 15:57 +07: agent sửa caption 7 Reel qua API (`POST /{video_id} description=`): tiêu đề short + dòng đầu mô tả + "▶ Bản đầy đủ: facebook.com/reel/2024498544889068" + dòng AI + hashtag. Caption cũ chỉ có link dài.
