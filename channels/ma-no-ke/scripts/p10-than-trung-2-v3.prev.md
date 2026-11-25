# Dự án 10 — Thần trùng 2 "Bảng lương mười hai người" (v3, 2026-11-24)

- Rút LONG còn khoảng 580 chữ lời thoại, đưa thời lượng về khoảng 3:00–3:15.
- Bỏ ảnh N09; chỉ dùng ảnh đã có trong danh sách Hình.
- Làm rõ hạn chót kỳ phát chẩn cuối năm và khoản Hạnh phải hoàn trả.
- Cho thần trùng chủ động cấp danh, rồi nhận trách nhiệm với cấp trên.
- Mở rộng SH1–SH5 và thêm punch riêng trước câu chỉ link.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Hạnh có thể thoát khỏi khoản lương khống đã ký suốt ba năm khi âm phủ cấp người thật vào đúng mười hai cái tên đó không?
- **Đồng hồ / cái giá:** Trước kỳ phát chẩn cuối năm, Hạnh phải hoàn lại số tiền đã lấy. Nếu không, mười hai nhân viên ma tiếp tục ngồi chờ lương mỗi sáng; Hạnh phải trả quyền lợi từ tiền túi.
- **Ba nấc leo thang:** Thần trùng đối chiếu sổ, thử trả hồ sơ về vì không có người nhưng thất bại vì chữ ký đã xác nhận lương; ông cấp tên cho mười hai cô hồn nhưng Hạnh định gạch tên và đuổi họ; nước liều của Hạnh là ghi khoản hoàn trả bằng tiền mình.
- **Điểm thấp:** Hạnh rút hết tiền mình có mà vẫn thiếu bảo hiểm và thưởng Tết; mười hai người vẫn còn tên trong sổ.
- **Cú lật:** Thần trùng chọn cấp mười hai cô hồn vào những cái tên Hạnh đã ký. Ông nhận trách nhiệm với cấp trên vì đã áp dụng đúng quy trình.
- **Khoảnh khắc rợn:** Tám giờ sáng, mười hai chữ ký mực tím tự hiện trên sổ; mười hai chiếc ghế trống đồng loạt xoay về phía Hạnh.
- **Câu kết:** “Ma thật cũng thích đi làm. Nhất là chỗ có thưởng Tết.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| TT | Thần trùng, xưng “ta”, đọc biên bản | B04 / B04r | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2` |
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HANH | Chị Hạnh, kế toán trưởng; kính gọng vàng, vest, máy tính Casio | L03/L04/L08 | Ngọc Huyền | `atempo=1.05` |
| CH | Mười hai cô hồn, hiền, đồng thanh ngắn | L06/L07/L09 | Trúc Ly | `atempo=0.95,aecho=0.8:0.6:60:0.3` |

```json voices
{"TT":{"preset":"Thiền Tâm Đức","fx":"asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2"},"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"HANH":{"preset":"Ngọc Huyền","fx":"atempo=1.05"},"CH":{"preset":"Trúc Ly","fx":"atempo=0.95,aecho=0.8:0.6:60:0.3"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2 s)* | “8:00 SÁNG” · 12 ghế kẽo kẹt · nhạc tắt |
| 0:02 | L02 | *(không lời, 2 s)* | Ngòi bút sột soạt · mực tím hiện trên sổ · mõ sắt ×1 |
| 0:04 | L03 | **HANH**: Ai ký vào đây? Mười hai người này… không có thật! | Cốc chạm nền |
| 0:08 | B04 | **TT**: Có trong sổ. Thì có thật. | |
| 0:11 | S01 → S26 | **MN**: Lại mò vào à? Ông công chức âm phủ đi xe đạp quay lại rồi. Lần này, sổ lương có mười hai người không tồn tại. | “MƯỜI HAI CÁI TÊN” · mõ CỘC |
| 0:21 | L04 | **MN**: Chị Hạnh, kế toán trưởng. Mười lăm năm không lệch một đồng. Ba năm nay, chị tự thêm mười hai thợ thời vụ vào bảng lương tiền mặt. | Casio bấm |
| 0:31 | L05 | **MN**: Tên mỗi người một kiểu. Chữ ký nhận lương cùng một nét. Nét của chị. | “12 TÊN · 1 NÉT CHỮ” |
| 0:38 | L04 | **HANH**: Công trường đông, ai rảnh kiểm từng người? Thợ không nghỉ, không ốm, không xin tăng lương. Nhân viên mẫu mực. | |
| 0:46 | S26 | **MN**: Mẫu mực đến mức chẳng ai từng nhìn thấy. | |
| 0:50 | B04 | **MN**: Cuối năm, âm phủ rà soát cô hồn để phát chẩn. Thần trùng lật sổ dương gian đối chiếu. Âm phủ làm theo giấy. | Lật sổ |
| 1:00 | B04 | **TT**: Công ty Vững Bền. Mười hai cái tên. Ba năm nhận lương. Ta tra hộ khẩu dương gian: không có. Tra sổ âm phủ: cũng không có. | |
| 1:11 | B04 | **TT**: Ta có thể trả hồ sơ về. Nhưng chỗ ký nhận đủ tháng, đủ tiền, đủ chữ ký. Hồ sơ không thiếu. Người thì thiếu. | “HỒ SƠ ĐỦ · NGƯỜI THIẾU” |
| 1:22 | S26 | **MN**: Âm phủ không sợ người gian. Âm phủ chỉ sợ giấy tờ không khớp. | |
| 1:28 | B04 | **TT**: Ta thử tìm đúng mười hai cái tên ấy dưới này. Không có. | Tiếng lật sổ |
| 1:34 | L06 | **TT**: Dưới này có cô hồn vô danh xếp hàng dài. Không tên, không suất phát chẩn. | Gió nhẹ |
| 1:41 | B04 | **TT**: Tên có trên giấy, người có dưới này. Ghép đúng chỗ trống. Ta cấp danh cho mười hai người. | Đóng dấu ×12 · “CẤP TÊN: 12” |
| 1:51 | L06 | **CH**: Bọn em có tên rồi. Mai được đi làm chưa quan? | Nhạc Tết xa |
| 1:57 | S26 | **MN**: Ba năm chị Hạnh ký thay họ. Cuối cùng, họ cũng được ký tên mình. | |
| 2:04 | L01 | **MN**: Sáng thứ Hai cuối năm. Tám giờ. Chị Hạnh mở cửa phòng kế toán. | |
| 2:10 | L01 | **MN**: Mười hai cái ghế trống xoay cùng lúc. Mặt ghế hướng thẳng về bàn chị. | Kẽo kẹt ×12 · nhạc tắt |
| 2:17 | L02 | **MN**: Sổ lương mở sẵn. Cột ký nhận tháng này có mười hai chữ ký. Mực tím còn ướt. | Sột soạt · im 2 s |
| 2:27 | L07 | **CH**: Chào chị kế toán. Chúng em đến lĩnh lương. | Nhỏ, đồng thanh |
| 2:33 | L07 | **CH**: Ba năm chưa có bảo hiểm. Thưởng Tết tháng thứ mười ba, chị tính giúp nhé. | |
| 2:42 | L03 | **HANH**: Tên ảo! Tôi gạch một cái là xong. Mấy người biến hết đi! | |
| 2:49 | B04 | **TT**: Đã ghi danh thì có danh. Đuổi người giữa kỳ phát chẩn, ta phải ghi rõ lý do. | Mõ sắt ×1 |
| 2:59 | L03 | **HANH**: Lý do là họ không tồn tại! | |
| 3:03 | B04 | **TT**: Ba năm chị xác nhận họ có mặt, có việc, có lương. Ta chỉ điền phần chị bỏ trống. | |
| 3:13 | L08 | **MN**: Tiền lương khống đã vào túi chị. Bây giờ chị phải trả lại bằng tiền thật. Mười hai người, đủ tháng, đủ quyền lợi. | Tiếng ATM đếm tiền |
| 3:23 | L08 | **HANH**: Tôi rút hết rồi. Vẫn chưa đủ bảo hiểm với thưởng Tết. | |
| 3:30 | L08 | **MN**: Hạnh rút tiền mình ra, xếp vào mười hai phong bì. Máy đếm mãi, tiền vẫn không tự mọc trong sổ. | “12 PHONG BÌ” |
| 3:42 | B04 | **TT**: Ta đã cấp người vào tên chị ghi. Còn phần hoàn trả, chị tự quyết. Ta không ký thay. | |
| 3:50 | L08 | **HANH**: Ghi khoản hoàn trả vào sổ. Từ tiền của tôi. Cứ phát đủ cho họ. | Tiếng bút đặt xuống |
| 3:59 | L07 | **CH**: Cảm ơn chị. Chúng em sẽ quay lại đúng ngày lĩnh lương. | Ghế kẽo kẹt nhẹ |
| 4:05 | B04 | **TT**: Sổ đã khớp. Ta sẽ ghi việc cấp người này vào biên bản. Cấp trên hỏi, ta trả lời. | Mõ sắt ×1 |
| 4:14 | L09 | **MN**: Tất niên năm ấy, công ty kê thêm một bàn. Mười hai người không ăn gì, nhưng ai cũng nhận phong bì. | Nhạc Tết rè |
| 4:23 | L09 | **CH**: Lần đầu được thưởng Tết. Chúng em xin nhận bằng tiền mặt ạ. | |
| 4:29 | B04 | **TT**: Ta không phạt chị. Ta chỉ làm cho sổ của chị đúng. Sổ đúng thì đắt lắm. | Mõ sắt ×1 |
| 4:39 | S33 → S34 | **MN**: Nuôi nhân viên ma ba năm, đến năm thứ tư mới biết: ma thật cũng thích đi làm. Nhất là chỗ có thưởng Tết. | Rít điếu cày |
| 4:49 | B02 | **MN**: Thứ Hai: tiệc tất niên, ông sếp ép cả phòng uống cạn… và một ông khách lè nhè ngồi cạnh mâm, uống mãi không say. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:59 | S06 | **MN**: Bấm đăng ký đi. Không thì mai đi làm, nhớ xem cái ghế nào đang chờ mình. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · 35 s · 9:16

- **MN**: Tám giờ sáng, mười hai cái ghế trống tự xoay về phía bàn kế toán. (L01) · pop “12 GHẾ”
- **MN**: Sổ lương mở sẵn. Mười hai chữ ký mực tím còn ướt. (L02) · pop “MỰC CÒN ƯỚT”
- **HANH**: Ai ký vào đây? Mười hai người này… không có thật! (L03)
- **TT**: Có trong sổ. Thì có thật. (B04) · pop “THẦN TRÙNG”
- **MN**: Chị Hạnh, kế toán trưởng. Mười lăm năm không lệch một đồng. Ba năm nay, chị tự thêm mười hai thợ thời vụ vào bảng lương tiền mặt. (L04)
- **MN**: Mẫu mực đến mức chẳng ai từng nhìn thấy. (S26)
- **TT**: Hồ sơ không thiếu. Người thì thiếu. (B04)
- **MN**: Cái ghế trống này ít nhất còn biết giữ chỗ. *(câu mới)* (L01)
- *(không lời, 0.8 s)* (L02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN · 36 s · 9:16

- **MN**: Mười hai cái tên. Một nét chữ. (L05) · pop “CHỊ HẠNH”
- **MN**: Chị tự thêm mười hai thợ thời vụ vào bảng lương tiền mặt. Chữ ký nhận lương cùng một nét. Nét của chị. (L04 → L05)
- **HANH**: Công trường đông, ai rảnh kiểm từng người? Thợ không nghỉ, không ốm, không xin tăng lương. Nhân viên mẫu mực. (L04)
- **MN**: Mẫu mực đến mức chẳng ai từng nhìn thấy. (S26)
- **TT**: Chỗ ký nhận đủ tháng, đủ tiền, đủ chữ ký. Hồ sơ không thiếu. Người thì thiếu. (B04)
- **MN**: Nhân viên không nghỉ, không ốm, không đòi tăng lương. Chỉ có một nhược điểm: chưa từng xuất hiện. (câu mới) (L05)
- **HANH**: Mười lăm năm tôi chưa lệch một đồng! (câu mới) (L04)
- **MN**: Ba năm thì có. Sổ nhớ dai hơn người. (câu mới) (L05)
- *(không lời, 0.8 s)* (L05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN · 34 s · 9:16

- **TT**: Ta tra hộ khẩu dương gian: không có. Tra sổ âm phủ: cũng không có. (B04) · pop “THẦN TRÙNG”
- **TT**: Chỗ ký nhận đủ tháng, đủ tiền, đủ chữ ký. Hồ sơ không thiếu. Người thì thiếu. (B04)
- **MN**: Âm phủ không sợ người gian. Âm phủ chỉ sợ giấy tờ không khớp. (S26)
- **TT**: Ta thử tìm đúng mười hai cái tên ấy dưới này. Không có. (B04)
- **TT**: Dưới này có cô hồn vô danh xếp hàng dài. Không tên, không suất phát chẩn. (L06) · pop “CÔ HỒN”
- **MN**: Trên kia có tên mà không có người. Dưới này có người mà không có tên. (câu mới) (B04)
- **TT**: Tên có trên giấy, người có dưới này. Ghép đúng chỗ trống. Ta cấp danh cho mười hai người. (B04)
- **MN**: Một bên làm khống. Một bên thiếu biên chế. Sổ sách gặp nhau, còn gì vui hơn. (câu mới) (S26)
- *(không lời, 0.8 s)* (B04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN · 36 s · 9:16

- **TT**: Tên có trên giấy, người có dưới này. Ghép đúng chỗ trống. Ta cấp danh cho mười hai người. (B04) · pop “THẦN TRÙNG”
- **CH**: Bọn em có tên rồi. Mai được đi làm chưa quan? (L06) · pop “CÔ HỒN”
- **MN**: Ba năm chị Hạnh ký thay họ. Cuối cùng, họ cũng được ký tên mình. (S26)
- **CH**: Bọn em có tên rồi, có được đóng bảo hiểm không ạ? (câu mới) (L06)
- **TT**: Có tên thì có danh. Có chữ ký thì có trách nhiệm. (câu mới) (B04)
- **MN**: Cô hồn vừa được cấp danh đã hỏi chế độ. Đúng là biết hòa nhập văn hóa công sở. (câu mới) (L06)
- **CH**: Mai đi làm, chúng em xin nhận lương đúng hạn. (câu mới) (L07)
- **TT**: Ta đóng dấu xong. Phần còn lại, cứ theo quy trình. (câu mới) (B04)
- *(không lời, 0.8 s)* (L06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN · 37 s · 9:16

- **MN**: Mười hai cái ghế trống xoay cùng lúc. Mặt ghế hướng thẳng về bàn chị. (L01) · pop “12 GHẾ”
- **MN**: Sổ lương mở sẵn. Mười hai chữ ký tháng này, mực tím còn ướt. (L02)
- **CH**: Chào chị kế toán. Chúng em đến lĩnh lương. (L07) · pop “CÔ HỒN”
- **HANH**: Tên ảo! Tôi gạch một cái là xong. Mấy người biến hết đi! (L03)
- **TT**: Đã ghi danh thì có danh. Đuổi người giữa kỳ phát chẩn, ta phải ghi rõ lý do. (B04)
- **CH**: Ba năm chưa có bảo hiểm. Thưởng Tết tháng thứ mười ba, chị tính giúp nhé. (L07)
- **HANH**: Lý do là họ không tồn tại! (L03)
- **TT**: Ba năm chị xác nhận họ có mặt, có việc, có lương. Ta chỉ điền phần chị bỏ trống. (B04)
- **MN**: Còn ghế thì đã có người nhận. Ghế văn phòng, cuối cùng cũng có cơ hội thăng tiến. (câu mới) (L07)
- *(không lời, 0.8 s)* (L07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRỌN · 38 s · 9:16

- **CH**: Ba năm chưa có bảo hiểm. Thưởng Tết tháng thứ mười ba, chị tính giúp nhé. (L07) · pop “CÔ HỒN”
- **TT**: Đã ghi danh thì có danh. Đuổi người giữa kỳ phát chẩn, ta phải ghi rõ lý do. (B04)
- **MN**: Tiền lương khống đã vào túi chị. Bây giờ chị phải trả lại bằng tiền thật. (L08)
- **HANH**: Tôi rút hết rồi. Vẫn chưa đủ bảo hiểm với thưởng Tết. (L08)
- **MN**: Mười hai người, đủ tháng, đủ quyền lợi. (L08)
- **TT**: Ta đã cấp người vào tên chị ghi. Còn phần hoàn trả, chị tự quyết. Ta không ký thay. (B04)
- **HANH**: Ghi khoản hoàn trả vào sổ. Từ tiền của tôi. Cứ phát đủ cho họ. (L08)
- **CH**: Cảm ơn chị. Chúng em sẽ quay lại đúng ngày lĩnh lương. (L07)
- **MN**: Phạt tiền đã đủ đau. Nhưng biết đâu còn được trừ vào thưởng hiệu suất. (câu mới) (L08)
- *(không lời, 0.8 s)* (L08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH7 — TRAILER · 33 s · 9:16

- **MN**: Cuối năm, âm phủ lật sổ dương gian đối chiếu. (B04) · pop “THẦN TRÙNG”
- **TT**: Ta có thể trả hồ sơ về. Nhưng chỗ ký nhận đủ tháng, đủ tiền, đủ chữ ký. (B04)
- **MN**: Dưới này có cô hồn vô danh xếp hàng dài. Không tên, không suất phát chẩn. (L06) · pop “CÔ HỒN”
- **TT**: Ta cấp danh cho mười hai người. (B04)
- **MN**: Sáng thứ Hai, chị Hạnh mở cửa phòng kế toán. Mười hai cái ghế trống xoay cùng lúc… (L01)
- **CH**: Chào chị kế toán. Chúng em đến lĩnh lương. (L07)
- **HANH**: Ai ký vào đây? Mười hai người này… không có thật! (L03)
- *(không lời, 0.8 s)* (L02)

## Hình

Tận dụng: B04/B04r (thần trùng), B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| L01 | Phòng kế toán công ty xây dựng buổi sáng: 12 bàn ghế xoay trống quay về phía bàn kế toán trưởng, nắng xiên qua rèm | Có |
| L02 | Cực cận sổ lương bìa xanh mở trên bàn, cột ký nhận (trống chữ), bút bi tím | Có |
| L03 | Chị Hạnh (kính gọng vàng, vest, tóc búi) đứng ở cửa, cốc cà phê rơi | Có |
| L04 | Đêm: Hạnh ngồi bàn, sổ bìa xanh mở, máy tính Casio, xấp phong bì, cười nhẹ | Có |
| L05 | Cực cận sổ ký nhận lương tiền mặt, 12 dòng chữ ký giống nhau (trống chữ) | Có |
| L06 | Âm phủ: hàng dài cô hồn mờ như khói không rõ mặt, xếp hàng trước bàn gỗ của thần trùng; một cô hồn cầm tờ giấy, mặt hiện rõ dần | Có |
| L07 | 12 cô hồn hiền ngồi ngay ngắn trên 12 ghế văn phòng, mờ mờ, tay đặt lên đùi, nhìn Hạnh | Có |
| L08 | Đêm: Hạnh đứng ở cây ATM đầu phố, tay ôm xấp phong bì trắng, mặt méo; sau lưng 12 bóng mờ xếp hàng | Có |
| L09 | Tiệc tất niên công ty: bàn tròn khăn đỏ, một bàn riêng 12 cô hồn mờ cầm phong bì đỏ, nhân viên bàn bên liếc nhìn | Có |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Năm 24/12 18:00 (+07) |
| SH1 | Thứ Năm 24/12 19:00 (+07) |
| SH2 | Thứ Sáu 25/12 11:30 (+07) |
| SH3 | Thứ Sáu 25/12 19:00 (+07) |
| SH4 | Thứ Bảy 26/12 11:30 (+07) |
| SH5 | Thứ Bảy 26/12 19:00 (+07) |
| SH6 | Chủ Nhật 27/12 11:30 (+07) |
| SH7 | Chủ Nhật 27/12 19:00 (+07)
