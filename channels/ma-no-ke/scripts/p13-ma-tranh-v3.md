# Dự án 13 — Ma trành "Người dẫn đường" (v3, 2026-11-24)

- Nêu rõ câu hỏi trung tâm, hạn chót 4 giờ sáng và cái giá Sáu phải trả.
- Cho Sáu chủ động thử ba lối dẫn, mỗi lần gặp trở ngại lớn hơn.
- Đặt điểm thấp ngay trước lựa chọn liều của Sáu: dẫn Thắng tới con hổ được cứu khỏi chính đường dây của hắn.
- Giữ cú lật do Sáu chọn, khoảnh khắc rợn ở dấu chân thứ năm và cái giá rời núi sau tám mươi năm.
- Rút LONG về 560–600 chữ; thêm punch riêng cho các short còn thiếu chữ và giữ teaser tập sau vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Sáu có dẫn đủ bốn kẻ săn lan tới con hổ trước 4 giờ sáng để được giải thoát khỏi tám mươi năm làm trành không?
- **Đồng hồ / cái giá:** Ca tuần tra đổi lúc 4 giờ sáng. Nếu trượt hạn, Sáu mắc kẹt trên núi thêm một năm; nếu thành công, ông phải rời con hổ cuối cùng và ngọn núi đã gọi là nhà.
- **Ba nấc leo thang:** Sáu thử lối mòn cũ nhưng đường sạt; chuyển sang men suối nhưng Thắng nghi ngờ và định bỏ ông; nước liều là dẫn cả nhóm qua dốc bùn tới trạm cứu hộ.
- **Điểm thấp:** Thắng đòi quay về, Sáu chỉ còn ít phút trước giờ đổi ca; nếu họ không tới hổ, ông lại bị buộc ở lại.
- **Cú lật:** Sáu chọn dẫn nhóm tới trạm để hoàn tất luật “dẫn người tới hổ”. Ông trả giá bằng việc rời con hổ và ngọn núi sau tám mươi năm; Thắng bị bắt vì cưa và lan.
- **Khoảnh khắc rợn:** Thắng soi xuống bùn: bốn hàng dấu giày, hàng thứ năm là dấu chân hổ.
- **Câu kết:** Đi rừng gặp người dẫn đường lễ phép quá thì nhìn xuống chân; không mang cưa thì cứ theo, ông ấy dẫn khéo lắm.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| SAU | Ông Sáu, ma trành áo nâu bạc, chân đất, rìu gỗ đeo hông; từ tốn, lễ phép quá mức, xưng “tôi”, gọi “các anh” | T01, T03 | Thiền Tâm Đức | `aecho=0.8:0.6:70:0.3` |
| THANG | Thắng “Lan”, áo rằn ri, đèn đội đầu, vòng trầm; trịch thượng | T02 | Adam bựa | `anull` |
| KL | Kiểm lâm trực đêm | T11 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "SAU": {"preset": "Thiền Tâm Đức", "fx": "aecho=0.8:0.6:70:0.3"}, "THANG": {"preset": "Adam bựa", "fx": "anull"}, "KL": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | **SAU**: Các anh cứ theo tôi. Tôi đi rừng tám mươi năm rồi.<br>**THANG**: Tám mươi năm? Ông trông có năm chục.<br>**SAU**: Tôi dừng già từ năm bốn mươi tư. | Côn trùng · bước chân bùn · mõ cộc · nhạc tắt |
| 0:13 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay tao nhường mic cho ông làm nghề dẫn đường. Nghề ấy tên là trành. | “MA TRÀNH” |
| 0:21 | T03 → T04 | **SAU**: Tôi là Sáu, thợ rừng dưới xuôi lên. Năm bốn mươi tư, tôi gặp ông Ba Mươi bên suối. Từ đó tôi đi theo ông. Việc của trành là dẫn người lạc tới hổ. Đủ số, hổ cho về. | Suối · gió |
| 0:37 | S26 | **MN**: Dân gian dặn, gặp người lạ lễ phép quá, chỉ đường nhiệt tình quá thì đừng theo. | |
| 0:44 | T05 → T03 | **SAU**: Rừng thưa dần. Bẫy, thuốc, cưa. Ông Ba Mươi già đi, rồi biến mất. Trành không có hổ thì như xe ôm không khách. Ba chục năm tôi ngồi đây. Không ai thả. | Cưa máy xa |
| 1:00 | S26 | **MN**: Ma cũng có người thất nghiệp. Mà thất nghiệp vĩnh viễn. | |
| 1:07 | T05 | **SAU**: Năm ngoái, gió từ trạm thổi lên. Có mùi ông. Ba chục năm rồi tôi mới ngửi lại.<br>**MN**: Trành không chọn chủ. Hổ nào trên núi, hổ ấy là ông Ba Mươi. Già, què, ở trong chuồng cũng vậy. | “TRÀNH KHÔNG CHỌN CHỦ” · gió |
| 1:23 | T06 → T02 | **MN**: Rồi có khách: Thắng “Lan”, trùm lan đột biến. Bốn người, xẻng, cưa máy, chậu lan. Biển cấm khai thác cũng bị giẫm dưới chân.<br>**THANG**: Nửa tỷ một cây. Tiện thì hạ thêm cây sưa. Rừng phòng hộ? Phòng ai, phòng tao à? | Lá khô |
| 1:41 | S26 → T05 | **MN**: Mười năm trước, Thắng buôn hổ nấu cao. Nghe tiếng cưa là tôi biết khách tới rồi.<br>**SAU**: Có khách thì có đường về. | “10 NĂM TRƯỚC · CAO HỔ” |
| 1:53 | T01 → T07 | **MN**: Đêm thứ hai, nhóm lạc, mất sóng. Bốn cái máy đắt tiền, không ai biết đường. Sáu xin dẫn họ tới chỗ có người.<br>**SAU**: Các anh cứ theo tôi. | Côn trùng · chim lợn một tiếng |
| 2:05 | T07 | **SAU**: Lối này ngày trước thông xuống suối.<br>**THANG**: Ngày trước thôi. Giờ thì sao?<br>**SAU**: Giờ đất cũng biết chọn khách. | Sạt đất · cành gãy |
| 2:17 | T07 | **SAU**: Vậy men suối. Tôi nhớ đường.<br>**THANG**: Hay nhớ chỗ chôn cưa? Tôi quay lại đây.<br>**SAU**: Các anh quay lại, tôi cũng phải quay lại. Tôi vẫn thiếu số. | Nước suối · bước chân |
| 2:32 | T08 → T01 | **MN**: Thắng soi xuống bùn. Bốn hàng dấu giày. Hàng thứ năm, ngay chỗ ông Sáu vừa đi qua… là dấu chân hổ.<br>**SAU**: Sắp tới rồi, các anh. | Nhạc tắt · im 2 giây |
| 2:48 | T02 → T07 | **THANG**: Ông là cái gì?<br>**SAU**: Người dẫn đường. Các anh là khách.<br>**MN**: Còn mười phút tới giờ đổi ca. Sáu có thể giữ con hổ cuối cùng cho riêng mình, nhưng trượt hạn thì mắc thêm một năm. | “03:50 · 10 PHÚT TỚI ĐỔI CA” · tick |
| 3:05 | T07 → T09 | **SAU**: Tôi chờ tám mươi năm. Thêm một năm cũng được. Nhưng tôi không muốn ngồi đây thêm nữa. Các anh đi tiếp. Tôi đưa tới chỗ có hổ. | Bước chân bùn |
| 3:21 | T09 → T10 | **MN**: Sáu dẫn cả nhóm tới trạm cứu hộ. Con hổ cuối cùng trên núi ở trong chuồng.<br>**SAU**: Ông Ba Mươi đấy. Tôi dẫn tới nơi rồi. | Côn trùng ngừng |
| 3:34 | S26 → T10 → T02 | **MN**: Mười năm trước, kiểm lâm cứu con hổ này khỏi kho nấu cao của Thắng.<br>**THANG**: Con… con này…<br>**MN**: Mười năm nó không kêu. Nó nhìn Thắng. Rồi gầm. | “KHO NẤU CAO · 10 NĂM TRƯỚC” · gầm hổ trầm một lần |
| 3:49 | T11 | **KL**: Đứng im! Cưa của ai? | Đèn pin rọi |
| 3:53 | T03 → T12 | **SAU**: Luật bảo dẫn người tới hổ. Đâu bảo hổ phải ăn. Bốn người, đủ số. Tôi về.<br>**MN**: Sáng ấy, Sáu xuống núi sau tám mươi năm. Thắng cũng xuống, bằng xe thùng kiểm lâm. | Chim hót |
| 4:07 | S26 | **MN**: Hổ ở lại trong chuồng. Thắng vào chuồng khác. Mười năm trước, một người nhốt hổ. Giờ đổi chỗ. | |
| 4:20 | S33 → S34 | **MN**: Đi rừng gặp người dẫn đường lễ phép quá thì nhìn xuống chân. Không mang cưa thì cứ theo. Ông ấy dẫn khéo lắm. | Rít điếu cày |
| 4:30 | S26 | **MN**: Tập sau: xưởng vàng mã cận Tết, ngựa giấy thiếu chân. Ngựa không chịu chạy. Nó đình công. | “TẬP SAU” · whoosh |
| 4:40 | S06 | **MN**: Bấm đăng ký đi. Không thì đi rừng một mình, gặp người dẫn đường còn phải tự trả tiền xe. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Dừng già từ năm 44 · 9:16 · 35 s

- **SAU**: Các anh cứ theo tôi. Tôi đi rừng tám mươi năm rồi. (T01) · pop “ÔNG DẪN ĐƯỜNG”
- **THANG**: Tám mươi năm? Ông trông có năm chục. (T02)
- **SAU**: Tôi dừng già từ năm bốn mươi tư. (T01)
- **MN**: Ông Sáu làm nghề dẫn người lạc tới hổ. Có điều hổ trên núi mất hết, ông ngồi không ba chục năm. (T03)
- **MN**: Bây giờ có khách. Bốn người, xẻng, cưa máy. Đúng là khách hàng biết tự mang đồ nghề. (T06)
- **MN**: Nghề gì mà khách tự mang luôn cả cưa, chắc khỏi cần báo giá. (T06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Luật của ma trành · 9:16 · 36 s

- **SAU**: Tôi là Sáu, thợ rừng dưới xuôi lên. Năm bốn mươi tư, tôi gặp ông Ba Mươi bên suối. (T03) · pop “ÔNG SÁU”
- **SAU**: Việc của trành là dẫn người lạc tới hổ. Đủ số, hổ cho về. (T04)
- **MN**: Luật nghe đơn giản. Chỉ thiếu phần hổ trên núi tuyệt chủng sạch. (S26)
- **SAU**: Ba chục năm tôi ngồi đây. Không ai thả. (T03)
- **MN**: Rồi gió từ trạm cứu hộ thổi lên. Có mùi ông. (T05)
- **MN**: Làm trành mà hổ nghỉ hưu trước, đúng là nghề có rủi ro. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Ma trành thất nghiệp · 34 s

- **MN**: Ma cũng có người thất nghiệp. Mà thất nghiệp vĩnh viễn. (S26) · pop “MA TRÀNH”
- **SAU**: Rừng thưa dần. Bẫy, thuốc, gỗ. Một năm, tôi không thấy ông Ba Mươi nữa. (T05)
- **SAU**: Trành không có hổ thì như xe ôm không khách. (T03)
- **MN**: Ba chục năm ngồi chờ, không ai thả. Đúng nghĩa làm cả đời không có ngày nghỉ phép. (S26)
- **SAU**: Năm ngoái, gió từ trạm thổi lên. Có mùi ông. (T05)
- **MN**: Lương không có, khách cũng không, chỉ có cái ghế rừng cấp cho ngồi. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Dấu chân thứ năm · 38 s

- **MN**: Thắng soi xuống bùn. Bốn hàng dấu giày. (T07) · pop “DẤU CHÂN THỨ NĂM”
- **MN**: Hàng thứ năm, ngay chỗ ông Sáu vừa đi qua… là dấu chân hổ. (T08)
- ***(không lời, 0.8 s)*** (T08)
- **SAU**: Sắp tới rồi, các anh. (T01)
- **THANG**: Tôi thấy bốn hàng giày thôi. Hàng thứ năm đâu? (T02)
- **MN**: Bốn người đếm dấu chân, một người đếm thêm. (T08)
- **MN**: Đi rừng mà cứ đếm chân, dễ phát hiện công ty mình thừa người lắm. (T08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Con hổ nhận ra người nấu cao · 38 s

- **MN**: Ông Sáu dẫn đúng chỗ có hổ. Con hổ duy nhất còn trên núi ở trạm cứu hộ. (T09) · pop “HỔ CỨU HỘ”
- **SAU**: Ông Ba Mươi đấy, các anh. Tôi dẫn tới nơi rồi. (T10)
- **MN**: Mười năm trước, kiểm lâm cứu nó khỏi kho nấu cao. Kho ấy của Thắng. (S26)
- **THANG**: Con… con này… (T02)
- **MN**: Con hổ mười năm không kêu. Nó nhìn Thắng. Rồi gầm. (T10)
- ***(không lời, 0.8 s)*** (T10)
- **MN**: Nhà tù này miễn phí, nhưng khách cũ vẫn được nhận diện. (T10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN · Luật không bảo hổ phải ăn · 36 s

- **SAU**: Luật bảo dẫn người tới hổ. Đâu bảo hổ phải ăn. (T03) · pop “LUẬT TRÀNH”
- **MN**: Sáu dẫn cả nhóm tới trạm cứu hộ. Kiểm lâm bắt Thắng với cưa và lan. (T11)
- **SAU**: Bốn người, đủ số. Tôi về. (T03)
- **MN**: Ông Sáu được thả sau tám mươi năm. Còn Thắng được thả… xuống núi bằng xe thùng. (T12)
- ***(không lời, 0.8 s)*** (T12)
- **MN**: Rừng có luật riêng, nghe kỹ mới biết ai là nhân sự chính thức. (T03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER · Con hổ cuối cùng · 9:16 · 33 s

- **MN**: Cả nhóm lạc trong rừng. Người dẫn đường nói ông đã đi rừng tám mươi năm. (T01) · pop “ÔNG DẪN ĐƯỜNG”
- **THANG**: Ông trông có năm chục. (T02)
- **SAU**: Tôi dừng già từ năm bốn mươi tư. (T01)
- **MN**: Ông Sáu có mười phút trước giờ đổi ca tuần tra. Nếu trượt, ông lại mắc trên núi thêm một năm. (T07)
- **SAU**: Tôi đưa các anh tới chỗ có hổ. (T01)
- **MN**: Con hổ cuối cùng trên núi đang ở đâu? Bản đầy đủ, link dưới. (T09)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| T01 | Rừng già ban đêm có sương, bốn vệt đèn pin phía sau, một người áo nâu chân đất đi trước, lưng quay lại | ✓ |
| T02 | Thắng áo rằn ri phượt, đèn đội đầu, vòng trầm, cận mặt dưới ánh đèn pin | ✓ |
| T03 | Ông Sáu áo nâu bạc, quần xắn, chân đất, rìu đeo hông, ngồi gốc cây; viền người hơi trong, mặt hiền | ✓ |
| T04 | Bóng hổ lớn trong sương rừng, chỉ là khối tối và hai đốm mắt, không nanh vuốt | |
| T05 | Bộ ba khung rừng thưa dần: rừng rậm → gốc cây bị cưa, bẫy thép → đường xe gỗ đất đỏ | ✓ |
| T06 | Bốn người đeo balo, xẻng, cưa máy, chậu lan; biển “RỪNG PHÒNG HỘ” bị đạp nghiêng, trống chữ | ✓ |
| T07 | Bốn người theo bóng áo nâu xuống dốc bùn trơn trong đêm | ✓ |
| T08 | Cực cận bùn ướt dưới đèn pin: bốn hàng dấu giày và một hàng dấu chân hổ song song | ✓ |
| T09 | Trạm cứu hộ động vật giữa rừng đêm: hàng rào lưới thép, đèn vàng, chuồng lớn, biển trạm trống chữ | ✓ |
| T10 | Hổ già gầy trong chuồng, một mắt đục, ngẩng đầu nhìn ra | ✓ |
| T11 | Đèn pin kiểm lâm rọi vào bốn người đứng đơ cạnh chậu lan và cưa máy | ✓ |
| T12 | Bình minh trên núi: ông Sáu vác rìu xuống dốc, lưng mờ dần; xa xa xe bán tải kiểm lâm | ✓ |

## Lịch

- **LONG:** Thứ Hai 04/01 · 18:00 (+07)
- **SH1:** Thứ Hai 04/01 · 19:00 (+07)
- **SH2:** Thứ Ba 05/01 · 11:30 (+07)
- **SH3:** Thứ Ba 05/01 · 19:00 (+07)
- **SH4:** Thứ Tư 06/01 · 11:30 (+07)
- **SH5:** Thứ Tư 06/01 · 19:00 (+07)
- **SH6:** Thứ Năm 07/01 · 11:30 (+07)
- **SH7:** Thứ Năm 07/01 · 19:00 (+07)
