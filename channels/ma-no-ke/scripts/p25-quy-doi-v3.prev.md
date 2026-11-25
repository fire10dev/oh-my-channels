# Dự án 25 — Quỷ đói "Gà nhựa triệu view" (v3, 2026-11-24)

- Thêm hạn chót chiều ngày 15 tháng Giêng; nếu sự thật không lộ ra, Quỷ đói phải chờ một năm mới được ngửi hơi đồ ăn thật.
- Làm rõ ba nấc Quỷ đói chủ động thử: cắn gà, cắn cả mâm, rồi chọn để lại dấu răng làm bằng chứng.
- Đặt điểm thấp ngay trước cú lật: Trang quay mâm nhựa lần nữa, còn Quỷ đói chỉ có thể nhìn.
- Cú lật đến từ lựa chọn của Quỷ đói: để lại dấu răng, chấp nhận mất món mâm nhựa nó đã thèm suốt ba năm.
- Giữ khoảnh khắc rợn duy nhất ở tiếng răng nghiến nhựa ban đêm; kết bằng mâm cơm thật và câu đùa của Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Quỷ đói có khiến sự thật về mâm cỗ nhựa lộ ra trước khi Trang đăng video chiều ngày Rằm không?
- **Đồng hồ / cái giá:** Video lên sóng chiều ngày 15 tháng Giêng; nếu không làm lộ mâm nhựa, Quỷ đói phải chờ một năm mới được ngửi hơi đồ ăn thật.
- **Ba nấc leo thang:** Quỷ đói cắn thử con gà nhưng chỉ gặp nhựa; cắn thử xôi, giò, lá chuối vẫn không có hơi thức ăn; nó chọn để lại vòng dấu răng trên gà thay vì phá cả mâm.
- **Điểm thấp:** Trang bật máy quay, bê nguyên mâm nhựa ra quay lần nữa; Quỷ đói chỉ có thể nhìn.
- **Cú lật:** Quỷ đói cố ý để dấu răng hiện rõ trên con gà, chấp nhận mất món mâm nhựa yêu thích; người xem tự phát hiện mâm nhựa và đối chiếu các năm.
- **Khoảnh khắc rợn:** Trong phòng tối, tiếng răng nghiến nhựa kéo dài; sáng ra, quanh đùi gà là vòng dấu nhỏ như lỗ kim.
- **Câu kết:** “Tao xem kênh nấu ăn chỉ một tiêu chí: con gà có vết răng không. Có thì tao follow.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TRANG | Trang, vlogger "Mâm cơm ấm áp" | Q05 | Ngọc Huyền | `anull` |
| QUY | Quỷ đói hóng hớt | Q03 | Adam bựa | `atempo=1.03,aecho=0.8:0.4:30:0.2` |
| DUNG | Dũng, chồng Trang | Q11 | Thiền Tâm Đức | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"TRANG":{"preset":"Ngọc Huyền","fx":"anull"},"QUY":{"preset":"Adam bựa","fx":"atempo=1.03,aecho=0.8:0.4:30:0.2"},"DUNG":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | Q01 | **TRANG**: Mâm Rằm nhà mình năm nay có gà luộc vàng ươm, xôi gấc đỏ au… | Nhạc vlog êm |
| 0:04 | Q02 | *(không lời, 1 s)* | Đũa gõ “cộp” · nhạc khựng |
| 0:05 | Q03 | *(không lời, 2 s)* | Tiếng nuốt nước bọt, kéo dài |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Rằm tháng Giêng nhà mày cúng gà thật hay gà… quay? Gà quay phim ấy. Nghe tiếp đi. | Mõ cộc |
| 0:14 | Q01 | **MN**: Trang làm kênh “Mâm cơm ấm áp”. Triệu người theo dõi. Mâm Tết, mâm giỗ, mâm Rằm, mâm nào cũng đẹp như tranh. | Nhạc vlog |
| 0:22 | Q04 | **MN**: Tắt máy. Trang cất gà vào hộp. Cất xôi vào hộp. Rồi cả nhà mở cơm hộp ăn trên sofa. | “Cộp cộp” |
| 0:30 | Q05 | **TRANG**: Gà nhựa ba năm vẫn vàng. Gà thật quay hai tiếng là thâm. Người xem cần đẹp, chứ có ăn đâu. | |
| 0:38 | S26 | **MN**: Con gà ấy lên mười hai mâm Tết, chín mâm giỗ, ba mươi sáu mâm Rằm. Năm mươi bảy lần đứng giữa bàn. Chưa ai ăn một miếng. | “GÀ NHỰA · 57 MÂM” |
| 0:49 | Q06 | **MN**: Rằm tháng Giêng, rằm lớn nhất năm. Nhà nhà cúng. Quỷ đói lang thang tìm hơi đồ ăn. | Gió nhẹ |
| 0:58 | S26 | **MN**: Dân gian tả quỷ đói bụng to, miệng nhỏ như lỗ kim. Ăn cả trăm năm không no. Miệng nhỏ vậy, cắn đâu cũng để dấu. | “MIỆNG NHƯ LỖ KIM” |
| 1:09 | Q03 | **QUY**: Ba năm tao xem kênh nhà này. Gà vàng, xôi đỏ. Rằm nào cũng đẹp. Năm nay tao tới sớm, xếp hàng đầu tiên. | |
| 1:19 | Q07 | **MN**: Đêm mười bốn, Trang quay thử rồi để nguyên mâm trên bàn studio ở góc nhà. Không phải bàn thờ. Không có gia tiên canh. | Nhạc vlog xa dần |
| 1:30 | Q03 | **QUY**: Gà luộc… tao cắn thử một miếng. | Răng chạm nhựa “cạch” |
| 1:34 | Q03 | **QUY**: Nhựa?! Ba năm tao chờ một con gà, hóa ra chờ đồ chơi! | |
| 1:40 | Q03 | **QUY**: Xôi cũng nhựa. Giò cũng nhựa. Lá chuối cũng nhựa. Nhà này cúng nguyên cửa hàng đồ chơi à? | “Cộp cộp” |
| 1:50 | S26 | **MN**: Quỷ đói không ăn được. Nhưng nó đang tức. Răng nhỏ như kim, đói cả trăm năm, cắn thủng nhựa. Nó có thể phá cả mâm. | |
| 2:00 | Q03 | **QUY**: Tao phá thì mai họ thay con khác. Vẫn quay, vẫn giấu. Tao để lại dấu. Người ta tự nhìn thấy. | |
| 2:09 | Q07 | **MN**: Phòng tối. Cả nhà ngủ. Trên bàn, từ mâm cỗ vang lên tiếng nhai. | Nhạc tắt |
| 2:17 | Q07 | **MN**: Không phải nhai cơm. Răng nghiến lên nhựa. Kèn kẹt. Rất nhỏ. Rất lâu. | Răng nghiến nhựa 3 s |
| 2:28 | Q08 | *(không lời, 2 s)* | Im lặng |
| 2:30 | Q08 | **MN**: Sáng ra, quanh đùi gà là một vòng dấu răng li ti, nhỏ như lỗ kim. Xếp đều như đường chỉ may. | |
| 2:40 | Q01 | **MN**: Sáng ngày mười lăm, Trang bật máy quay. Bật làm mịn như mọi khi. Trên màn hình, con gà vẫn vàng ươm. Chiều nay video sẽ lên sóng. | Nhạc vlog |
| 2:52 | Q05 | **TRANG**: Cả nhà chờ xem mâm Rằm nhà mình nhé. Năm nay vẫn món gà vàng quen thuộc! | |
| 2:58 | Q03 | **QUY**: Nó lại quay con gà đó. Tao đã để dấu rồi. Mà người ta có nhìn không? | |
| 3:05 | Q09 | **MN**: Hai tiếng sau khi đăng, một người xem phóng to. Đùi gà có hàng trăm dấu cắn. Gà nhà này bị cắn mà không rách thịt? | Bình luận “ting” |
| 3:16 | Q10 | **MN**: Rồi họ so mâm các năm. Cùng một vết sứt ở cánh. Cùng một con gà. Ba năm, năm mươi bảy mâm. | “TING” dồn dập |
| 3:27 | Q11 | **DUNG**: Trang, nhãn hàng nồi chiên vừa hủy hợp đồng. Họ gửi ảnh mâm nhựa kèm cả năm mươi bảy bài cũ. | |
| 3:36 | Q05 | **TRANG**: Ai cắn con gà của em? Với lại… cái này là nhựa thật à? | |
| 3:42 | Q03 | **QUY**: Tao. Cắn thử thôi. Còn đói đấy. | |
| 3:47 | Q12 | **MN**: Muốn giữ kênh, Trang phải xin lỗi rồi nấu mâm thật. Gà thật, xôi thật. Mời cả xóm sang ăn. Máy quay đặt đó, không cắt cảnh. | Nồi sôi |
| 3:57 | Q12 | **TRANG**: Mâm hôm nay là đồ thật. Ai muốn ăn cứ ngồi xuống. Clip này không có hộp cất đi đâu. | Tiếng xóm trò chuyện |
| 4:05 | Q03 | **QUY**: Gà thật. Tao không ăn được, nhưng ngửi mùi này… trăm năm mới thấy đáng chờ. | Hít sâu |
| 4:13 | S26 | **MN**: Video ấy ít view nhất kênh. Nhưng là mâm duy nhất có người ăn. | |
| 4:20 | S33 → S34 | **MN**: Tao xem kênh nấu ăn chỉ một tiêu chí: con gà có vết răng không. Có thì tao follow. | Rít điếu cày |
| 4:28 | Q03 | **MN**: Thứ Năm, nhóm quay clip “đèo ma ám” để tống tiền homestay. Đèo ấy có ma thật. Mà ma thì ghét bị bịa chuyện. | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:38 | S06 | **MN**: Bấm đăng ký đi. Kênh tao toàn đồ thật. Trừ con gà. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **MN**: Đũa gõ vào con gà nghe “cộp”. Gà luộc hay đồ chơi? (Q02) · pop "GÀ LUỘC?"
- **TRANG**: Gà nhựa ba năm vẫn vàng. Gà thật quay hai tiếng là thâm. Người xem cần đẹp, chứ có ăn đâu. (Q05)
- **MN**: Tắt máy, Trang cất gà vào hộp. Cất xôi vào hộp. Rồi cả nhà mở cơm hộp ăn trên sofa. (Q04)
- **MN**: Con gà ấy lên mười hai mâm Tết, chín mâm giỗ, ba mươi sáu mâm Rằm. Năm mươi bảy lần đứng giữa bàn. Chưa ai ăn một miếng. (S26)
- **MN**: Nhà này cúng nguyên cửa hàng đồ chơi à? (Q03) · pop "QUỶ ĐÓI"
- **MN**: Một con gà lên năm mươi bảy mâm. Mà chưa ai ăn một miếng. (S26) · PUNCH
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **MN**: Một con gà lên năm mươi bảy mâm. Mà chưa ai ăn một miếng. (S26) · pop "GÀ NHỰA"
- **MN**: Tắt máy. Trang cất gà vào hộp. Cất xôi vào hộp. Rồi cả nhà mở cơm hộp ăn trên sofa. (Q04)
- **TRANG**: Gà nhựa ba năm vẫn vàng. Gà thật quay hai tiếng là thâm. Người xem cần đẹp, chứ có ăn đâu. (Q05)
- **MN**: Con gà ấy lên mười hai mâm Tết, chín mâm giỗ, ba mươi sáu mâm Rằm. Năm mươi bảy lần đứng giữa bàn. Chưa ai ăn một miếng. (S26)
- **MN**: Nhà này cúng nguyên cửa hàng đồ chơi à? (Q03) · PUNCH
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN

- **MN**: Quỷ đói bụng to, miệng nhỏ như lỗ kim. Ăn cả trăm năm không no. Miệng nhỏ vậy, cắn đâu cũng để dấu. (S26) · pop "QUỶ ĐÓI"
- **QUY**: Ba năm tao xem kênh nhà này. Gà vàng, xôi đỏ. Rằm nào cũng đẹp. Năm nay tao tới sớm, xếp hàng đầu tiên. (Q03)
- **QUY**: Nhựa?! Ba năm tao chờ một con gà, hóa ra chờ đồ chơi! Xôi cũng nhựa. Giò cũng nhựa. Lá chuối cũng nhựa. (Q03)
- **MN**: Con gà ấy lên mười hai mâm Tết, chín mâm giỗ, ba mươi sáu mâm Rằm. Năm mươi bảy lần đứng giữa bàn. Chưa ai ăn một miếng. (S26) · PUNCH
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN

- **MN**: Phòng tối. Cả nhà ngủ. Trên bàn, từ mâm cỗ vang lên tiếng nhai. (Q07) · pop "QUỶ ĐÓI"
- **MN**: Không phải nhai cơm. Răng nghiến lên nhựa. Kèn kẹt. Rất nhỏ. Rất lâu. (Q07)
- **MN**: Sáng ra, quanh đùi gà là một vòng dấu răng li ti, nhỏ như lỗ kim. Xếp đều như đường chỉ may. (Q08)
- **MN**: Gà nhựa ba năm vẫn vàng. Gà thật quay hai tiếng là thâm. Người xem cần đẹp, chứ có ăn đâu. (Q05)
- **MN**: Nhà này cúng nguyên cửa hàng đồ chơi à? (Q03) · PUNCH
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN

- **MN**: Hai tiếng sau khi đăng, một người xem phóng to. Đùi gà có hàng trăm dấu cắn. Gà nhà này bị cắn mà không rách thịt? (Q09) · pop "GÀ NHỰA"
- **MN**: Rồi họ so mâm các năm. Cùng một vết sứt ở cánh. Cùng một con gà. Ba năm, năm mươi bảy mâm. (Q10)
- **DUNG**: Trang, nhãn hàng nồi chiên vừa hủy hợp đồng. Họ gửi ảnh mâm nhựa kèm cả năm mươi bảy bài cũ. (Q11)
- **MN**: Một con gà lên năm mươi bảy mâm. Mà chưa ai ăn một miếng. · PUNCH
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER

- **QUY**: Ba năm tao xem kênh nhà này. Gà vàng, xôi đỏ. Rằm nào cũng đẹp. Năm nay tao tới sớm, xếp hàng đầu tiên. (Q03) · pop "QUỶ ĐÓI"
- **MN**: Đêm mười bốn, Trang quay thử rồi để nguyên mâm trên bàn studio ở góc nhà. Không phải bàn thờ. Không có gia tiên canh. (Q07)
- *(không lời, 2 s)*
- **MN**: Phòng tối. Cả nhà ngủ. Trên bàn, từ mâm cỗ vang lên tiếng nhai. (Q07)
- **MN**: Không phải nhai cơm. Răng nghiến lên nhựa. Kèn kẹt. Rất nhỏ. Rất lâu. (Q07)
- *(không lời, 1 s)*

### SH7 — TRAILER

- **MN**: Sáng ngày mười lăm, Trang bật máy quay. Bật làm mịn như mọi khi. Trên màn hình, con gà vẫn vàng ươm. Chiều nay video sẽ lên sóng. (Q01) · pop "MÂM RẰM"
- **QUY**: Nó lại quay con gà đó. Tao đã để dấu rồi. Mà người ta có nhìn không? (Q03) · pop "QUỶ ĐÓI"
- **MN**: Hai tiếng sau khi đăng, một người xem phóng to. Đùi gà có hàng trăm dấu cắn. Gà nhà này bị cắn mà không rách thịt? (Q09)
- **MN**: Rồi họ so mâm các năm. Cùng một vết sứt ở cánh. Cùng một con gà. Ba năm, năm mươi bảy mâm. (Q10)
- **DUNG**: Trang, nhãn hàng nồi chiên vừa hủy hợp đồng. Họ gửi ảnh mâm nhựa kèm cả năm mươi bảy bài cũ. (Q11)
- **MN**: Chiều nay, con gà vàng ấy có thể mất hợp đồng trước khi mất lớp sơn. (Q03)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| Q01 | Mâm cỗ Rằm đẹp như tranh dưới đèn studio: gà luộc vàng, xôi gấc, giò, nem; máy quay trên chân, đèn LED tròn | Có |
| Q02 | Cận đôi đũa gõ vào da con gà luộc bóng như nhựa | Có |
| Q03 | Quỷ đói: gầy nhẳng, bụng tròn như trống, cổ dài, miệng nhỏ chúm chím, mắt to thèm thuồng; nhìn qua cửa sổ / ngồi vắt vẻo trên cột điện ôm điện thoại cũ | Có |
| Q04 | Máy quay tắt: Trang cất gà nhựa vào hộp nhựa, phía sau cả nhà ngồi sofa ăn cơm hộp | Có |
| Q05 | Trang cận: tạp dề hoa, tóc búi gọn, mặt ngọt khi quay, gắt khi tắt máy | Có |
| Q06 | Phố đêm Rằm tháng Giêng: khói hương nhà nhà, trăng tròn, bóng quỷ đói lang thang trên mái tôn | Có |
| Q07 | Phòng khách tối, mâm cỗ nhựa để trên bàn, cửa sổ mở, một cái cổ dài mờ thò vào | Có |
| Q08 | Cực cận đùi gà nhựa: một vòng dấu răng li ti nhỏ như lỗ kim, đều như đường chỉ may | Có |
| Q09 | Màn hình điện thoại phát video mâm cỗ, ngón tay phóng to vào đùi gà | Có |
| Q10 | Màn hình đầy bình luận và ảnh ghép so sánh mâm cỗ các năm, cùng một con gà (trống chữ) | Có |
| Q11 | Dũng (chồng, đeo máy quay) cận, cầm điện thoại, mặt tái | Có |
| Q12 | Sân nhà Trang: mâm cỗ thật bốc khói, cả xóm ngồi ghế nhựa ăn uống, máy quay góc sân; trên mái quỷ đói nhắm mắt hít hơi | Có |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Hai 15/02 18:00 (+07) |
| SH1 | Thứ Hai 15/02 19:00 (+07) |
| SH2 | Thứ Ba 16/02 11:30 (+07) |
| SH3 | Thứ Ba 16/02 19:00 (+07) |
| SH4 | Thứ Tư 17/02 11:30 (+07) |
| SH5 | Thứ Tư 17/02 19:00 (+07) |
| SH6 | Thứ Năm 18/02 11:30 (+07) |
| SH7 | Thứ Năm 18/02 19:00 (+07) |
