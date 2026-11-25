# Dự án 40 — Cô hồn ăn đêm “Đắt hàng” (v3, 2026-11-24)

- Đồng hồ ba tuần và nguy cơ chú Sáu mất xe được giữ làm sức ép chính.
- Ba lần thử của bà Tám leo thang từ gọi một khách, gọi cả xóm, đến đặt cược chiếc lá me cuối cùng.
- Cú lật do bà Tám chọn dắt khách sống tới sau khi chú Sáu đổi sang thịt tươi; cô hồn trả bằng lá me.
- Cold open chỉ treo tiếng mõ đáp từ nghĩa trang; điểm rợn là ghế nhựa lần lượt lún xuống.
- Teaser tập P41 đặt đúng Thứ Hai: hội đền, bốn mươi cái ví.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Bà Tám có khiến chú Sáu ngừng bán thịt thiu trước khi hết vốn và mất xe không?
- **Đồng hồ / cái giá:** Ba tuần; sáng hôm sau là hạn tiền thuê chỗ xe. Nếu trượt, chú Sáu mất xe hủ tiếu, còn bà Tám phải tiếp tục ngửi những tô thiu mỗi đêm.
- **Ba nấc leo thang:** Bà Tám dắt một bác tài tới nhưng chú Sáu vẫn bán thịt thiu; bà gọi cả xóm cô hồn ăn hết thịt nhưng hộp tiền chỉ đầy lá; bà liều dùng chiếc lá me cuối cùng làm tiền công, dắt khách sống tới sau khi chú Sáu tự nấu một tô tử tế.
- **Điểm thấp:** Ba tuần trôi qua, hộp tiền vẫn chỉ có lá me và xe sẽ bị bán vào sáng mai.
- **Cú lật:** Bà Tám chọn dẫn khách sống tới sau khi chú Sáu tự mua thịt tươi và đặt tô nóng ở cổng. Bà trả chiếc lá me cuối cùng làm tiền công.
- **Khoảnh khắc rợn:** Tiếng mõ đáp lại từ nghĩa trang, rồi hai chục chiếc ghế nhựa lần lượt lún xuống.
- **Câu kết:** “Xe nào có tô ở cổng mà ghế ngoài vẫn có người ngồi, thì xe ấy… chắc ngon.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| SAU | Chú Sáu, chủ xe hủ tiếu gõ, xởi lởi | H05 | Adam bựa | `atempo=1.05` |
| TAM | Bà Tám, đầu xóm cô hồn, lanh lợi | H07 | Ngọc Huyền | `aecho=0.8:0.5:50:0.25` |
| HAI | Anh Hai, tài xế xe tải ca đêm | H11 | Thiền Tâm Đức | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"SAU":{"preset":"Adam bựa","fx":"atempo=1.05"},"TAM":{"preset":"Ngọc Huyền","fx":"aecho=0.8:0.5:50:0.25"},"HAI":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 | *(không lời, 2 s)* | Côn trùng · xe tải xa |
| 0:02 | H02 | *(không lời, 1 s)* | Lốc cốc |
| 0:03 | H01 | *(không lời, 2 s)* | Hai tiếng mõ đáp rất xa · nhạc tắt |
| 0:05 | S01 | **MN**: Lại mò vào à? Đêm đói ăn hàng rong bao giờ chưa? Có cái xe chỉ cần gõ một tiếng, cả nghĩa trang gõ lại. | Mõ CỘC |
| 0:11 | S26 | **MN**: Chú Sáu đẩy xe hủ tiếu cạnh cổng nghĩa trang. Khách ghé ăn nhanh, hỏi ít. Chú gọi đó là phục vụ tận tâm. |  |
| 0:19 | H04 | **MN**: Thịt xá xíu là hàng tồn để ba ngày. Chú rửa giấm, tẩm màu cho đỏ. | Dao chặt |
| 0:26 | H05 | **SAU**: Tẩm vô đỏ au, khách khen ngon. Ai đau bụng thì tại ăn đêm. Tại thịt thì ai chứng minh? |  |
| 0:34 | S26 | **MN**: Ba năm bán vậy, chưa ai bắt được. Chú gọi đó là khảo sát hài lòng. |  |
| 0:41 | H06 | **MN**: Đầu tối, chú đặt tô ở cổng nghĩa trang, cầu đắt khách. Chú chọn miếng thịt cũ nhất. |  |
| 0:48 | H05 | **SAU**: Ma ăn hơi chứ ăn gì. Hơi nào chả là hơi. |  |
| 0:52 | H07 | **TAM**: Ba năm ngày nào cũng tô này. Hơi thiu. Cả xóm thuộc thực đơn rồi. | Lá khô |
| 0:59 | H07 | **TAM**: Đêm qua tao dắt một bác tài tới. Ăn xong bác ôm bụng, chạy nhanh tới mức xe chưa nổ máy. |  |
| 1:07 | S26 | **MN**: Bà Tám là đầu xóm cô hồn. Ba năm ngửi tô thiu, giờ có quyền khiếu nại. Quầy dịch vụ khách hàng thì không có. |  |
| 1:16 | H07 | **TAM**: Đêm nay gọi thêm người. Cho nó đắt hàng như nó xin. |  |
| 1:22 | H01 | **MN**: Hai giờ sáng. Đường vắng. Chú Sáu gõ một tiếng gọi khách. | Lốc cốc · nhạc tắt |
| 1:29 | H01 | **MN**: Từ nghĩa trang, hai chục tiếng gõ đáp lại. Chậm. Đều. | Lốc cốc ×20 |
| 1:36 | H08 | **MN**: Hai chục cái ghế lần lượt lún xuống. Như có người vừa ngồi. | Ghế kẹt ×20 · im 2 s |
| 1:44 | H07 | **TAM**: Hai chục tô. Nhiều thịt. |  |
| 1:48 | H09 | **MN**: Trong mắt chú Sáu, ghế kín khách, ai cũng gọi thêm tô. Dân gian gọi là bị ma che mắt. | Nồi sôi · tiếng gọi món mờ |
| 1:56 | H09 | **MN**: Ngoài kia, chú nấu cho ghế trống. Tô đặt xuống nguội dần, chẳng ai ăn được miếng nào. | Dao chặt |
| 2:04 | H05 | **SAU**: Đắt hàng quá trời! Xin là được liền! |  |
| 2:08 | H10 | **MN**: Năm giờ sáng, hết sạch thịt. Hộp tiền đầy lá me khô. | Gà gáy · lá xào xạc |
| 2:16 | H07 | **TAM**: Mày cúng đồ thiu thì tụi tao trả tiền lá. Có qua có lại. |  |
| 2:22 | H03 | **MN**: Đêm nào cũng vậy. Cô hồn ăn hết thịt thiu trước khách sống. Khách không ăn phải, chú cũng chẳng thu được tiền. |  |
| 2:32 | H11 | **HAI**: Ủa, nay hết sớm vậy chú? Ba tuần nay tui không còn đau bụng ha. |  |
| 2:39 | S26 | **MN**: Khách đỡ đau bụng. Chú Sáu thì cháy túi. Ba tuần, ba hộp lá me. Tiền thuê chỗ xe tới hạn sáng mai. | “3 TUẦN · HỘP LÁ · HẠN SÁNG MAI” |
| 2:50 | H05 | **SAU**: Bán cái xe là hết nợ. Mai khỏi nấu nữa. |  |
| 2:54 | H07 | **TAM**: Không xe thì tối nào tao cũng ngửi tô thiu nhà khác. Nghe chữ “đặc biệt” là muốn chuyển xóm. |  |
| 3:01 | H04 | **MN**: Hết vốn, chú thử việc chưa từng làm: mua thịt tươi, thêm rau, nấu một tô tử tế. |  |
| 3:09 | H06 | **MN**: Đặt tô nóng ở bậc cổng. Không tô cũ giấu dưới đáy. Không phẩm màu. Chỉ một tô ăn được. |  |
| 3:17 | H07 | **TAM**: Tới lượt tao. Tụi mình không có tiền thật. Nhưng có đường. |  |
| 3:23 | H03 | **MN**: Bà Tám dắt khách sống tới. Một bác tài rẽ vào. Rồi công nhân tan ca. | Xe máy · cười nói |
| 3:31 | H05 | **SAU**: Thịt tươi, rau mới. Ăn xong ai cũng về bằng hai chân. Lạ ghê! |  |
| 3:37 | H10 | **MN**: Sáng ra, hộp tiền đầy tiền thật của khách thật. Trên cùng có chiếc lá me. | Lá xào xạc |
| 3:44 | H07 | **TAM**: Đồ thật thì tụi tao dắt khách thật. Còn lá là tiền công. Đừng đem đổi, người bán nhìn mày kỳ lắm. |  |
| 3:53 | H03 | **MN**: Từ đó xe chú Sáu sạch nhất quận. Khách sống ngồi ghế trong, khách kia ngồi ghế ngoài. Ghế nào cũng có lý do để lún. | Nồi sôi |
| 4:04 | S33 → S34 | **MN**: Xe nào có tô ở cổng mà ghế ngoài vẫn có người ngồi, thì xe ấy… chắc ngon. | Rít điếu cày |
| 4:14 | S26 | **MN**: Tập sau: hội đền tháng Giêng, một tay móc túi làm một ngày bốn mươi cái ví. Trong mỗi ví có thứ nặng hơn tiền. | “TẬP SAU” · whoosh |
| 4:22 | S06 | **MN**: Bấm đăng ký đi. Lần này tao nhận tiền thật. Lá me để bà Tám tính sổ. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Hai giờ sáng. Đường vắng tanh. Chú Sáu gõ một tiếng gọi khách. (H02)
- **MN**: Từ trong nghĩa trang, hai chục tiếng gõ đáp lại. Chậm. Đều. (H01)
- **MN**: Hai chục cái ghế nhựa lần lượt lún xuống. Từng cái một. Như có người vừa ngồi. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- **MN**: Trong mắt chú Sáu, ghế kín khách, ai cũng gọi thêm tô. Dân gian gọi là bị ma che mắt. (H09)
- **MN**: Ngoài kia, chú nấu cho ghế trống. Tô đặt xuống nguội dần, chẳng ai ăn được miếng nào. (H09)
- *(không lời, 0.8 s)* (H08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN

- **MN**: Thịt xá xíu là hàng tồn để ba ngày. Chú rửa giấm, tẩm màu cho đỏ. (H04)
- **SAU**: Tẩm vô đỏ au, khách khen ngon. Ai đau bụng thì tại ăn đêm. Tại thịt thì ai chứng minh? (H05) · pop “CHÚ SÁU”
- **MN**: Ba năm bán vậy, chưa ai bắt được. Chú gọi đó là khảo sát hài lòng. (S26)
- **MN**: Đầu tối, chú đặt tô ở cổng nghĩa trang, cầu đắt khách. Chú chọn miếng thịt cũ nhất. (H06)
- **SAU**: Ma ăn hơi chứ ăn gì. Hơi nào chả là hơi. (H05)
- **MN**: Chú Sáu gọi đó là phục vụ tận tâm. (S26)
- *(không lời, 0.8 s)* (H04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN

- **MN**: Hai chục cái ghế nhựa lần lượt lún xuống. Từng cái một. Như có người vừa ngồi. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- **MN**: Trong mắt chú Sáu, ghế kín khách, ai cũng gọi thêm tô. Dân gian gọi là bị ma che mắt. (H09)
- **MN**: Ngoài kia, chú nấu cho ghế trống. Tô đặt xuống nguội dần, chẳng ai ăn được miếng nào. (H09)
- *(không lời, 0.8 s)* (H08)
- **MN**: Xe nào có tô ở cổng mà ghế ngoài vẫn có người ngồi, thì xe ấy… chắc ngon. (S33 → S34)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN

- **MN**: Năm giờ sáng, hết sạch thịt. Hộp tiền đầy lá me khô. (H10)
- **TAM**: Mày cúng đồ thiu thì tụi tao trả tiền lá. Có qua có lại. (H07) · pop “BÀ TÁM”
- **MN**: Đêm nào cũng vậy. Cô hồn ăn hết thịt thiu trước khách sống. Khách không ăn phải, chú cũng chẳng thu được tiền. (H03)
- **MN**: Ba năm ngửi tô thiu, giờ có quyền khiếu nại. Quầy dịch vụ khách hàng thì không có. (S26)
- **MN**: Ba năm bán vậy, chưa ai bắt được. Chú gọi đó là khảo sát hài lòng. (S26)
- *(không lời, 0.8 s)* (H10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN

- **HAI**: Ủa, nay hết sớm vậy chú? Ba tuần nay tui không còn đau bụng ha. (H11) · pop “ANH HAI”
- **MN**: Khách đỡ đau bụng. Chú Sáu thì cháy túi. Ba tuần, ba hộp lá me. Tiền thuê chỗ xe tới hạn sáng mai. (S26)
- **SAU**: Bán cái xe là hết nợ. Mai khỏi nấu nữa. (H05)
- **TAM**: Không xe thì tối nào tao cũng ngửi tô thiu nhà khác. Nghe chữ “đặc biệt” là muốn chuyển xóm. (H07) · pop “BÀ TÁM”
- **MN**: Ba năm bán vậy, chưa ai bắt được. Chú gọi đó là khảo sát hài lòng. (S26)
- *(không lời, 0.8 s)* (H11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN

- **MN**: Hết vốn, chú thử việc chưa từng làm: mua thịt tươi, thêm rau, nấu một tô tử tế. (H04)
- **TAM**: Tụi mình không có tiền thật. Nhưng có đường. (H07) · pop “BÀ TÁM”
- **MN**: Bà Tám dắt khách sống tới. Một bác tài rẽ vào. Rồi công nhân tan ca. (H03)
- **SAU**: Thịt tươi, rau mới. Ăn xong ai cũng về bằng hai chân. Lạ ghê! (H05)
- **MN**: Sáng ra, hộp tiền đầy tiền thật của khách thật. Trên cùng có chiếc lá me. (H10)
- **TAM**: Đồ thật thì tụi tao dắt khách thật. Còn lá là tiền công. Đừng đem đổi, người bán nhìn mày kỳ lắm. (H07)
- *(không lời, 0.8 s)* (H10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER

- **MN**: Hai giờ sáng. Một tiếng mõ gọi khách. Từ nghĩa trang, hai chục tiếng gõ đáp lại. (H01)
- **MN**: Rồi hai chục cái ghế nhựa quanh xe lần lượt lún xuống. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- **MN**: Trong mắt chú Sáu, ghế kín khách, ai cũng gọi thêm tô. Dân gian gọi là bị ma che mắt. (H09)
- **MN**: Ngoài kia, chú nấu cho ghế trống. Tô đặt xuống nguội dần, chẳng ai ăn được miếng nào. (H09)
- **MN**: Vậy ai đang ngồi? (H08)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| H01 | Đường vắng cạnh tường nghĩa trang ban đêm, xe hủ tiếu gõ đèn vàng, hai chục ghế nhựa đỏ trống xếp quanh | ✓ |
| H02 | Cận tay gõ thanh tre vào mõ tre của xe hủ tiếu | ✓ |
| H03 | Xe hủ tiếu gõ đậu cạnh cổng nghĩa trang; bản sau sạch sẽ, đông khách, tô nóng ở cổng | ✓ |
| H04 | Cận thau thịt xá xíu sẫm màu, chai giấm, hộp phẩm màu; bản sau thau thịt tươi hồng, rổ rau xanh | ✓ |
| H05 | Chú Sáu cận: áo ba lỗ, khăn vắt vai, dép tổ ong; bản mồ hôi đầm đìa cười hớn hở | ✓ |
| H06 | Cận một tô hủ tiếu đặt trên bậc cổng nghĩa trang, khói mỏng | ✓ |
| H07 | Trong nghĩa trang: xóm cô hồn mờ quanh tô; bà Tám áo bà ba đen, khăn rằn quấn đầu, gầy, lanh lợi; bản cười | ✓ |
| H08 | Hai chục ghế nhựa quanh xe, từng cái lún nhẹ xuống như có người ngồi, không thấy ai | ✓ |
| H09 | Chú Sáu cuống cuồng nấu, chặt thịt, xếp tô lên bàn trống, tô khói bay rồi nguội | ✓ |
| H10 | Hộp tiền gỗ: bản đầy lá me khô; bản tiền thật xếp ngay ngắn, một chiếc lá me đè lên | ✓ |
| H11 | Anh Hai tài xế cận: áo khoác xe tải, mũ lưỡi trai, ngồi ghế nhựa, cười | ✓ |

## Lịch

- LONG — Thứ Hai 12/04 18:00 (+07)
- SH1 — Thứ Hai 12/04 19:00 (+07)
- SH2 — Thứ Ba 13/04 11:30 (+07)
- SH3 — Thứ Ba 13/04 19:00 (+07)
- SH4 — Thứ Tư 14/04 11:30 (+07)
- SH5 — Thứ Tư 14/04 19:00 (+07)
- SH6 — Thứ Năm 15/04 11:30 (+07)
- SH7 — Thứ Năm 15/04 19:00 (+07)
