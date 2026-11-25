# Dự án 40 — Cô hồn ăn đêm “Đắt hàng” (v3, 2026-11-24)

- Thêm đồng hồ ba tuần cạn vốn và cái giá: chú Sáu mất xe nếu tiếp tục bán đồ thiu.
- Ba lần thử của bà Tám leo thang từ gọi khách, gọi cả xóm, đến đặt cược dấu hiệu cuối cùng vào một tô tử tế.
- Cú lật do bà Tám chọn dắt khách sống tới sau khi chú Sáu đổi sang thịt tươi; cô hồn trả bằng chiếc lá me cuối cùng.
- Cold open chỉ có tiếng mõ đáp từ nghĩa trang; không hé lộ ghế lún hay khách vô hình.
- Kết nối teaser đúng tập P41: hội đền, bốn mươi cái ví, phát Thứ Hai.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Bà Tám có khiến chú Sáu ngừng bán thịt thiu trước khi ba tuần cạn vốn và mất xe không?
- **Đồng hồ / cái giá:** Ba tuần; nếu hết vốn, chú Sáu mất xe hủ tiếu và bà Tám phải tiếp tục ngửi tô thiu mỗi đêm.
- **Ba nấc leo thang:** Bà Tám gọi một khách sống tới nhưng chú Sáu vẫn bán thịt thiu; bà gọi cả xóm cô hồn ăn hết thịt, hộp tiền chỉ đầy lá; bà liều đặt dấu cuối cùng vào tô tử tế để dắt khách thật đến.
- **Điểm thấp:** Ba tuần cạn vốn, chú Sáu vẫn chỉ thấy lá trong hộp tiền; bà Tám biết nếu đêm ấy thất bại, xe sẽ bị bán.
- **Cú lật:** Bà Tám chọn đưa khách sống đến sau khi chú Sáu tự mua thịt tươi, nấu tử tế và đặt một tô nóng ở cổng. Cô hồn trả bằng một chiếc lá me.
- **Khoảnh khắc rợn:** Hai chục tiếng mõ đáp lại từ nghĩa trang, rồi hai chục ghế nhựa lần lượt lún xuống.
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
| 0:11 | S26 | **MN**: Mày tưởng xe đông là có khách. Chú Sáu cũng tưởng vậy. |  |
| 0:15 | H03 | **MN**: Chú đẩy xe hủ tiếu gõ cạnh cổng nghĩa trang. Tài xế, công nhân ca đêm ghé ăn rồi chạy tiếp. Chú thích khách vội. Ăn nhanh, hỏi ít. | Nồi sôi · xe tải xa |
| 0:24 | H04 | **MN**: Thịt xá xíu là hàng tồn của lò, để ba ngày. Chú rửa giấm, tẩm màu cho đỏ. | Dao chặt |
| 0:31 | H05 | **SAU**: Tẩm vô đỏ au, khách khen ngon. Ai đau bụng thì tại ăn đêm. Tại thịt thì ai chứng minh? |  |
| 0:38 | S26 | **MN**: Ba năm bán vậy, chưa ai bắt được. Khách đêm ăn xong còn phải giao hàng. Chú Sáu gọi đó là khảo sát hài lòng. |  |
| 0:46 | H06 | **MN**: Đầu tối, chú đặt một tô ở cổng nghĩa trang, theo tục cúng cô hồn cầu đắt khách. Chú chọn tô có miếng thịt cũ nhất. |  |
| 0:54 | H05 | **SAU**: Ma ăn hơi chứ ăn gì. Hơi nào chả là hơi. |  |
| 0:59 | H07 | **TAM**: Ba năm nay ngày nào cũng tô này. Hơi thiu. Cả xóm ngửi tới thuộc thực đơn rồi. | Lá khô |
| 1:06 | H07 | **TAM**: Đêm qua tao dắt một bác tài tới. Ăn xong bác ấy ôm bụng, chạy nhanh tới mức xe chưa nổ máy. |  |
| 1:13 | S26 | **MN**: Bà Tám là đầu xóm cô hồn. Ba năm ngửi tô thiu, giờ được quyền khiếu nại. Chỗ này không có quầy dịch vụ khách hàng. |  |
| 1:21 | H07 | **TAM**: Đêm nay gọi thêm người. Cho nó đắt hàng như nó xin. |  |
| 1:27 | H01 | **MN**: Hai giờ sáng. Đường vắng tanh. Chú Sáu gõ một tiếng gọi khách. | Lốc cốc · nhạc tắt |
| 1:34 | H01 | **MN**: Từ trong nghĩa trang, hai chục tiếng gõ đáp lại. Chậm. Đều. | Lốc cốc ×20 |
| 1:41 | H08 | **MN**: Hai chục cái ghế nhựa lần lượt lún xuống. Từng cái một. Như có người vừa ngồi. | Ghế kẹt ×20 · im 2 s |
| 1:51 | H07 | **TAM**: Hai chục tô. Nhiều thịt. |  |
| 1:55 | H09 | **MN**: Trong mắt chú Sáu, ghế kín khách. Áo công nhân, áo tài xế. Ai cũng gọi thêm tô. Dân gian gọi là bị ma che mắt. | Nồi sôi · tiếng gọi món mờ |
| 2:05 | H09 | **MN**: Nhìn từ ngoài, chú đang nấu cho hai chục cái ghế trống. Tô nào đặt xuống cũng nguội, chẳng ai ăn được miếng nào. | Dao chặt |
| 2:14 | H05 | **SAU**: Đắt hàng quá trời! Xin là được liền! |  |
| 2:18 | H10 | **MN**: Năm giờ sáng, hết sạch thịt. Hộp tiền cũng mở ra. Bên trong đầy lá me khô. | Gà gáy · lá xào xạc |
| 2:26 | H07 | **TAM**: Mày cúng đồ thiu thì tụi tao trả tiền lá. Có qua có lại. |  |
| 2:32 | H03 | **MN**: Đêm nào cũng vậy. Cô hồn ăn hết thịt thiu trước khi khách sống tới. Khách sống không ăn phải, chú Sáu cũng chẳng thu được tiền. |  |
| 2:42 | H11 | **HAI**: Ủa, nay hết sớm vậy chú? Mà ba tuần nay tui không còn đau bụng ha. |  |
| 2:49 | S26 | **MN**: Khách đỡ đau bụng. Chú Sáu thì cháy túi. Ba tuần, ba hộp lá me, và tiền thuê chỗ xe tới hạn vào sáng mai. | “3 TUẦN · HỘP LÁ · HẠN SÁNG MAI” |
| 3:00 | H05 | **SAU**: Bán cái xe là hết nợ. Mai khỏi nấu nữa. |  |
| 3:05 | H07 | **TAM**: Không xe thì tối nào tao cũng ngửi tô thiu nhà khác. Tao ngán tới mức nghe chữ “đặc biệt” là muốn chuyển xóm. |  |
| 3:14 | H04 | **MN**: Hết vốn, chú Sáu thử một việc chưa từng làm: mua thịt tươi, thêm rau, nấu một tô tử tế. |  |
| 3:22 | H06 | **MN**: Rồi đặt tô nóng lên bậc cổng. Không tô cũ giấu dưới đáy. Không phẩm màu. Chỉ một tô ăn được. |  |
| 3:30 | H07 | **TAM**: Tới lượt tao. Tụi mình không có tiền thật. Nhưng có đường. |  |
| 3:36 | H03 | **MN**: Bà Tám dắt khách sống tới. Một bác tài rẽ vào. Rồi công nhân tan ca. Rồi nhóm sinh viên lạc đường, đi một vòng lại về đúng xe. | Xe máy · cười nói |
| 3:48 | H05 | **SAU**: Thịt tươi, rau mới. Ăn xong ai cũng về được bằng hai chân. Lạ ghê! |  |
| 3:54 | H10 | **MN**: Sáng ra, hộp tiền đầy tiền thật của khách thật. Trên cùng có một chiếc lá me. | Lá xào xạc |
| 4:01 | H07 | **TAM**: Đồ thật thì tụi tao dắt khách thật. Còn lá là tiền công. Đừng đem đổi, người bán hàng nhìn mày kỳ lắm. |  |
| 4:09 | H03 | **MN**: Từ đó xe chú Sáu sạch nhất quận. Đắt hàng thật. Khách sống ngồi ghế trong, khách kia ngồi ghế ngoài. Ghế nào cũng có lý do để lún. | Nồi sôi |
| 4:20 | S33 → S34 | **MN**: Mua đồ ăn đêm thì nhìn quanh xem. Xe nào có tô ở cổng mà ghế ngoài vẫn có người ngồi, thì xe ấy… chắc ngon. | Rít điếu cày |
| 4:30 | B07 | **MN**: Thứ Hai: hội đền tháng Giêng, một tay móc túi làm một ngày bốn mươi cái ví. Trong mỗi ví có thứ nặng hơn tiền. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:38 | S06 | **MN**: Bấm đăng ký đi. Lần này tao nhận tiền thật. Lá me để bà Tám tính sổ. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Hai giờ sáng. Đường vắng tanh. Chú Sáu gõ một tiếng gọi khách. (H02)
- **MN**: Từ trong nghĩa trang, hai chục tiếng gõ đáp lại. Chậm. Đều. (H01)
- **MN**: Hai chục cái ghế nhựa lần lượt lún xuống. Từng cái một. Như có người vừa ngồi. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- *(không lời, 0.8 s)* (H08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN

- **MN**: Thịt xá xíu là hàng tồn của lò, để ba ngày. Chú rửa giấm, tẩm màu cho đỏ. (H04)
- **SAU**: Tẩm vô đỏ au, khách khen ngon. Ai đau bụng thì tại ăn đêm. Tại thịt thì ai chứng minh? (H05) · pop “CHÚ SÁU”
- **MN**: Ba năm bán vậy, chưa ai bắt được. Khách đêm ăn xong còn phải giao hàng. (S26)
- *(không lời, 0.8 s)* (H04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN

- **MN**: Hai chục cái ghế nhựa lần lượt lún xuống. Từng cái một. Như có người vừa ngồi. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- **MN**: Trong mắt chú Sáu, ghế kín khách. Nhìn từ ngoài, chú đang nấu cho hai chục cái ghế trống. (H09)
- *(không lời, 0.8 s)* (H08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN

- **MN**: Năm giờ sáng, hết sạch thịt. Hộp tiền cũng mở ra. Bên trong đầy lá me khô. (H10)
- **TAM**: Mày cúng đồ thiu thì tụi tao trả tiền lá. Có qua có lại. (H07) · pop “BÀ TÁM”
- **MN**: Đêm nào cũng vậy. Cô hồn ăn hết thịt thiu trước khi khách sống tới. (H03)
- *(không lời, 0.8 s)* (H10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN

- **HAI**: Ủa, nay hết sớm vậy chú? Mà ba tuần nay tui không còn đau bụng ha. (H11) · pop “ANH HAI”
- **MN**: Khách đỡ đau bụng. Chú Sáu thì cháy túi. Ba tuần, ba hộp lá me, tiền thuê xe tới hạn. (S26)
- **SAU**: Bán cái xe là hết nợ. Mai khỏi nấu nữa. (H05)
- *(không lời, 0.8 s)* (H11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN

- **MN**: Hết vốn, chú Sáu thử một việc chưa từng làm: mua thịt tươi, thêm rau, nấu một tô tử tế. (H04)
- **TAM**: Tụi mình không có tiền thật. Nhưng có đường. (H07) · pop “BÀ TÁM”
- **MN**: Bà Tám dắt khách sống tới. Một bác tài rẽ vào. Rồi công nhân tan ca. (H03)
- **MN**: Sáng ra, hộp tiền đầy tiền thật của khách thật. Trên cùng có một chiếc lá me. (H10)
- *(không lời, 0.8 s)* (H10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER

- **MN**: Hai giờ sáng. Một tiếng mõ gọi khách. Từ nghĩa trang, hai chục tiếng gõ đáp lại. (H01)
- **MN**: Rồi hai chục cái ghế nhựa quanh xe lần lượt lún xuống. (H08)
- **TAM**: Hai chục tô. Nhiều thịt. (H07) · pop “BÀ TÁM”
- **MN**: Chú Sáu nhìn thấy khách. Còn ngoài kia… chỉ là ghế trống. (H09)
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
