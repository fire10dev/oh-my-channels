# Synthesis 11 — Short truyện ma: độ dài, kể trọn hay cắt treo (2026-11-22)

Dữ liệu: 316 short + video dài gần nhất của 15 kênh (yt-dlp, `collect.sh` → `enrich.sh` → `analyze.py`; bảng `table.md`, mẫu tiêu đề `titles.md`).
Phản biện: `codex-r1.md` (có search), `agy-r1.md`.

## Số chính
- View tương đối theo độ dài (view / trung vị kênh): 0–30 s 1.04× · **30–45 s 1.18×** · 45–60 s 0.85× · 60–90 s 1.03× · 90–181 s 0.61× (0% vượt 2×).
- Short truyện ma VN ăn view nằm 30–52 s (Emma p25–p75 30–52, Đảo Kinh Dị 34–52, Otter&Qilin 32–52).
- Không kênh nào trong mẫu đánh "Phần x/n" (trừ NHÀ MA "TẬP n" ~1k view, Chú 3 Duy "P5" 172 s).
- Mẫu thắng ở VN: "1 short = 1 loài ma, trọn vẹn" (Đảo Kinh Dị "MA GÀ: con ma đáng sợ nhất VN" 32 s 201k; Emma "Cách sống sót khi gặp Ma Da" 31 s 457k).
- Trailer "Xem full trên kênh" (Otter&Qilin, 10.7k sub): short 10–84k, long trung vị 141k.

## Đồng thuận codex + agy
1. Độ dài mặc định **30–45 s**; tránh > 60 s, không làm > 90 s. 20–30 s chỉ cho gag.
2. Đa số short **trọn vẹn có punchline** (kéo sub); 1–2 short **trailer treo** (kéo LONG) + Related video.
3. Bỏ series đánh số; bỏ intro chung.
4. Thêm short kiểu **hồ sơ / cách sống sót khi gặp [loài ma]** — khớp format mỗi tập 1 loài ma.
5. Giữ LONG 3 phút lúc này (cả hai), chưa có dữ liệu buộc đổi.

## Lọc
- Agy: "APV > 105%", "click Short→Long 1–3%", "VVSA > 70%" — không nguồn, không dùng làm ngưỡng.
- Otter&Qilin "long 10× short": so trung vị 2 tập mẫu khác nhau (long có video cũ lan truyền) → chỉ gợi ý.
- Tương quan, không nhân quả; mẫu 30 short gần nhất/kênh, view chưa chuẩn hóa theo tuổi.

## Khuôn 7 short đề xuất (tổng hợp)
| # | Vai trò | Dài | Kiểu |
|---|---|---|---|
| 1 | Hồ sơ loài ma ("Ma xó là gì, kiêng gì") | 35–45 s | trọn |
| 2 | Cách sống sót / đối phó khi gặp [ma] — Ma Nó hướng dẫn kiểu châm biếm | 35–45 s | trọn |
| 3 | Gag punchline (kiểu SH4P) | 20–30 s | trọn |
| 4 | Tình huống hài/châm biếm từ LONG | 30–45 s | trọn |
| 5 | Tình huống thứ hai, góc khác | 35–50 s | trọn |
| 6 | Trailer: cảnh căng nhất, ngắt ở câu hỏi then chốt | 30–40 s | treo → LONG |
| 7 | Twist/kết hé một nửa | 30–40 s | treo → LONG |
