# Phán quyết cuối của ban — GS-01 (2026-11-23 23:30 +07)

Người chốt: Claude (chủ trì), sau 2 vòng codex ↔ agy và phán quyết trọng tài của codex (r3-codex.md).

## Điểm cả ban bỏ sót (brief không nói, máy có)
Off Limits Life đã có **32 kịch bản short đã kiểm chứng nguồn** (`channels/off-limits-life/src/data/sx-*.json`, nguồn ghi trong `asof` + `scripts/SHORTS-*.md`).
10 cái đã đăng tiếng Anh (660–835 view), 22 cái EN dựng xong chưa đăng. Vì vậy:
- Nỗi lo chính của codex (hook bịa, chưa kiểm chứng) được giải quyết: không viết claim mới, chỉ **bản địa hoá** kịch bản đã kiểm chứng.
- Bỏ các hook agy tự nghĩ (xì hơi gây báo động, tóc gãy như mì, 60 giây tắm…): không có nguồn.
- Lô EN không cần làm thêm: 22 short EN đã sẵn sàng, chỉ cần lên lịch đăng ở kênh gốc.

## Chốt
1. **Món**: Off Limits Life "How X crews eat/sleep…" lồng tiếng ES / PT-BR / FR. Hình vẽ bằng code (Remotion), chữ trên hình + nhãn trong cảnh được dịch hết, đổi sang hệ mét. Không tốn quota ảnh AI.
2. **Ngôn ngữ, theo thứ tự**: ES (giọng em_alex) → PT-BR (pm_alex) → FR (ff_siwis, giọng nữ duy nhất, whisper nghe khớp 100%).
   Lý do: số đông người nói ES/PT xem Shorts nhiều. RPM thấp hơn EN (đoán) nhưng mục tiêu giai đoạn này là view và sub để vào YPP.
3. **Kênh**: mỗi ngôn ngữ một kênh riêng, cùng thương hiệu: `Off Limits Life en Español`, `Off Limits Life Brasil`, `Off Limits Life en Français`.
   Shorts không dùng được audio đa ngôn ngữ (đoán, theo agy; codex chưa xác nhận), nên không ghép chung với kênh EN.
4. **Chính sách**: mỗi bản là bản lồng tiếng bản địa hoá đầy đủ (lời, chữ, nhãn, đơn vị, metadata), đăng ở kênh khác ngôn ngữ. Mô tả ghi nguồn và ghi rõ giọng AI.
   Nội dung cùng chủ, không reupload của người khác. Không bật nhãn "altered/synthetic" vì hình là hoạt hình cách điệu, không giả người thật (giống quy tắc của kênh gốc).
5. **Nhạc**: dùng lại đúng track nền của bản EN (cùng license), cắt/lặp cho khớp độ dài.
6. **Đo sau 14 ngày** (theo codex): so median 7 ngày của mỗi kênh với baseline EN 660.
   ES ≥ 1.000 thì làm tiếp short mới cho cả 3 ngôn ngữ ngay khi có short EN mới. Kênh nào có median < 200 sau 10 video thì ngừng kênh đó.
   Đo thêm Viewed-vs-Swiped > 70%.
7. **Lô đêm nay**: 32 × ES, 32 × PT, 32 × FR = 96 short, mỗi cái kèm metadata + cover. Thứ tự làm theo view EN thật (cabin 835 → noday → well → hotrack → noflush → …), làm cuốn chiếu.

## Kết quả đêm 23→24/11
- 96/96 short (32 × ES/PT/FR) + cover + UPLOAD.md/CSV, kênh đã đăng ký trong YT Hub. QA: `out/QA.md`.
- Soát 3 lớp: đơn vị, biên tập bản ngữ (agy), đối chiếu nghĩa từng câu (codex). Đã sửa ~43 lỗi dịch và render lại 37 video.
