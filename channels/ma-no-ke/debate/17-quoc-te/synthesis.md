# Synthesis 17 — đưa Ma Nó Kể ra quốc tế (2026-11-23 23:30 +07)

Đầu vào: `brief.md`, `r1-codex.md`, `r1-agy.md`, `r2-codex.md`, `r2-agy.md` (2 vòng; Codex không search được lần này, các số CPM của agy đều là đoán).

## Chốt (agent quyết theo uỷ quyền "chọn hướng tốt nhất, không hỏi lại")
| Hạng mục | Chốt | Vì sao |
|---|---|---|
| Cấu trúc | **1 kênh tiếng Anh riêng: The Petty Ghost (@ThePettyGhost)**. Không thêm audio Anh vào kênh Việt. Không dùng audio đa ngôn ngữ. | Chữ pop, bình luận live, phụ đề đều in trên hình ⇒ mỗi ngôn ngữ phải render riêng. Audio đa ngôn ngữ trên video có chữ Việt sẽ lệch. Kênh riêng thì đo được thị trường. (Cả hai bên đồng ý.) |
| Ngôn ngữ | **Anh ra mắt ngay. Tây Ban Nha (trung tính Mỹ Latinh): đã dựng sẵn, chờ tín hiệu kênh Anh rồi mới mở kênh @ElFantasmaChismoso. Pháp: bỏ.** | Pháp: Kokoro chỉ có 1 giọng nữ, không đủ phân vai. TBN có 3 giọng, tách vai bằng đổi tông. Pipeline rẻ (dịch 2 phút, TTS 10 phút, render 45 phút) nên dựng sẵn TBN không tốn quota Claude. |
| Chuyển thể | Giữ bối cảnh Việt + tên ma Việt (ma lai, than trung, ma xo, ma giau) kèm 1 câu giải nghĩa lúc ma tự giới thiệu. Đổi chơi chữ, CTA, lịch "Thứ Hai" → "Next time". Không đổi cốt truyện. | Codex r2: agy bịa thêm chi tiết P02/P03 ("Grim Reaper", "50 grand") ⇒ loại. |
| Kiếm tiền | LONG 3–4 phút + **video tổng hợp 4 tập ~15 phút** (≥ 8 phút, chèn được quảng cáo giữa video sau khi bật kiếm tiền). Short để kéo sub. | YPP: 1.000 sub + 4.000 giờ/12 tháng hoặc 10 triệu view short/90 ngày. Không dự báo đường nào nhanh hơn. |
| Chính sách | Nhãn nội dung tổng hợp = Có; không dành cho trẻ em; mô tả ghi rõ hư cấu + AI. Không dùng mẹo đổi màu/zoom để "né" nội dung lặp (agy đề xuất, Codex bác đúng). Bản chuyển thể có biên tập thật: thoại, chữ, giọng mới. | |
| Lịch | LONG 08:00 +07 (= 20:00 New York hôm trước) cách 3 ngày; short 2/ngày 06:00 và 23:30 +07 (= 18:00 và 11:30 New York); short luôn sau LONG của nó. | |
| Đo | Sau 14 ngày từ video đầu (8/12): impressions, CTR, retention, nguồn traffic, sub theo từng video. Ngưỡng là đoán: tiếp tục nếu ≥ 2 LONG > 100 view và CTR ≥ 4% sau ≥ 1.000 impressions; mở kênh TBN khi kênh Anh có tín hiệu lặp lại. | |

## Loại bỏ
- agy: "audio đa ngôn ngữ chắc chắn giảm retention", "CPM $4–12", "300 sub/14 ngày": không nguồn.
- agy: tính compilation 30.000 view × 6,5 phút ≈ 4.000 giờ: sai (= 3.250 giờ, Codex chỉ ra).
- Codex r1: chỉ làm 2 LONG + 4 short. Quá rụt rè: pipeline tự động cho phép làm cả 31 video trong đêm.

## Còn bất đồng
- TBN: agy muốn mở chắc chắn sau 14 ngày; Codex coi là ứng viên. Chốt: dựng sẵn, mở theo số liệu.
