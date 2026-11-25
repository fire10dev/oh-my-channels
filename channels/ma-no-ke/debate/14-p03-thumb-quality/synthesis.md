# Synthesis 14 — Soát chất lượng thumbnail P03 (2026-11-22)
Nguồn: codex-r1.md (xem 3 ảnh: current-T123, mobile-T123, covers-SH1-7), agy-r1.md (chỉ đọc brief).
Lưu ý chạy: `codex exec -i a.jpg -i b.jpg "<prompt>"` → -i nuốt luôn prompt ("No prompt provided via stdin"). Dùng `-i a,b,c -` và đẩy prompt qua stdin.

## Chấm LONG (đọc 168px / tò mò / xung đột)
| | Codex | Agy |
|---|---|---|
| T1 kho tối "ĐANG ĐẾM GÌ?" | 5/7/4 | 2/4/2 — "phế" |
| T2 cận mặt "CẤM MỞ" | **8/6/5** | **7/6/4** — tốt nhất |
| T3 chia đôi "413 TỜ GÌ?" | 5/8/4 | 4/5/3 |

## Đồng thuận
- T2 và T3 cùng mặt B05 → Test & compare so hai ý tưởng gần giống nhau, tốn một lượt test.
- T1 mặt nhỏ, nền lục tối, ở 168px chỉ còn đốm sáng + chữ.
- Không có Khải → không có xung đột người–ma. Cả hai đề nghị thêm Khải.
- T3: giấy nhìn như vàng. Codex: đóng dấu/ghi "NỢ" rõ. Agy: hiểu lầm vàng cũng chẳng sao, lỗi chính là chia đôi khung.
- Bìa short: dải đỏ giữa khung che chủ thể, tag "MA NÓ KỂ" quá nhỏ chẳng có ích, SH2/SH3 trùng nền chum.

## Khác nhau
- Codex: sửa nhẹ cả 3. Agy: làm lại hết theo 3 hướng A đối đầu / B vật thể twist / C host Ma Nó.

## Đề xuất của Claude (gộp, chờ user chọn)
| Bản | Ý tưởng | Bố cục | Chữ | Tiêu đề |
|---|---|---|---|---|
| T1' | Chỉ ma (giữ T2) | B05 cận mặt, hũ to lên ~30% chiều cao, tăng tương phản nền | CẤM MỞ | Cái Hũ Ba Đời Không Ai Được Mở |
| T2' | Người vs ma (mới) | Khải cutout trái ~45%, mặt hoảng; ma xó ôm hũ phải ~55%, mặt sáng trên nền tối | ĐỪNG MỞ! | Bán Nhà 60 Tỷ, Ông Chủ Phải Nhận Thêm Món Này |
| T3' | Vật thể twist (làm lại T3) | Hũ bung miệng ~60% giữa khung, vài tờ giấy mở đóng dấu đỏ "NỢ"; Khải ôm đầu góc phải ~35%; bỏ mặt B05 | 413 TỜ NỢ? | Ông Chủ Nhà Đào Trúng Gia Tài Gì Dưới Bếp? |
Bỏ T1 kho tối (cả hai đều chấm thấp nhất ở mục đọc 168px).

Bìa short: bỏ tag, chữ viền dày ở 1/3 trên thay dải đỏ giữa khung; SH3 crop sát Khải chìa oản, chữ "ĂN OẢN KHÔNG?"; SH4 "BÁN VÉ XEM?"; SH7 "HŨ CỦA AI?". SH1/2/5/6 giữ hình, chỉ đổi khuôn chữ.

## Đã lọc
- Agy C "ĐỪNG HÒNG!" + tiêu đề "Ma Xó Đòi Lại Món Nợ 3 Đời": sai truyện (chủ nợ là nửa phố, ma xó không đòi nợ). Đưa Ma Nó lên thumb LONG cũng trái bible và synthesis 12.
- Agy SH5 "TƯỜNG KHÔNG ĐÁY": vô nghĩa. SH7 "GIA TÀI HAY NỢ?": lộ twist.
- Agy tiêu đề "Mở Cái Hũ… Xong Trắng Tay": "trắng tay" phóng đại (Khải đền cọc + gánh nợ, vẫn còn nhà).
- Các câu "chắc chắn / thuật toán" của agy không có nguồn → coi là suy đoán.

## Đã dựng (user chốt 2026-11-22)
- LONG T1/T2/T3 theo bảng trên (T2 dùng chữ "ĐỪNG MỞ!", T3 dấu "NỢ"/"GIẤY NỢ" nền giấy ngà): `v2-T123.jpg` (hàng dưới = cỡ 168px).
- Bìa short: chữ 2 dòng trắng/vàng viền đen ở vùng trống, bỏ tag + dải: `v2-covers.jpg`. Bản cũ: `video/out/p03-thumbs/v1/`.
- `ThumbX.tsx` thêm kiểu chữ `stamp` (con dấu).
