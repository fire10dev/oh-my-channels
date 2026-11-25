# Dự án 16 — Ma che ô "Mã giảm năm mươi phần trăm" (v3, 2026-11-24)

- Sửa ảnh teaser tập sau về S26, nằm trong danh sách ảnh được phép.
- Nới lời thoại LONG về khoảng 3:00–3:15 theo nhịp 3,2 chữ/giây.
- Bổ sung lời cho 7 short để mỗi short đạt 70–110 chữ.
- Thêm câu punch riêng cho từng short TRỌN trước câu chỉ link.
- Giữ nguyên diễn biến, cú lật và những chi tiết khác không bị nêu.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Lực có đưa được cô Mận tới quê trước bình minh mà không bẻ cuốc giữa đường không?
- **Đồng hồ / cái giá:** Từ 1:00 đến 5:00 sáng 28 Tết, Lực phải hoàn tất cuốc 300 km; bỏ giữa đường thì cô Mận ở lại với anh, còn anh mất cả đêm săn cuốc khác.
- **Ba nấc leo thang:** Lực gọi bắt hủy để chở ngoài giá ba triệu → định mặc cả khi đã ra khỏi thành phố → tấp vào cây xăng, mở cửa sau để bỏ khách. Cuối cùng cửa tự đóng, khóa xe không cho anh thoát.
- **Điểm thấp:** Lực đứng ở cây xăng, cửa sau mở, biết nếu bỏ cô lại thì cô sẽ theo mình.
- **Cú lật:** Lực chọn chạy hết quãng đường theo giá 499 nghìn và giao cô Mận tới chùa; anh trả giá bằng một đêm làm không công theo cách tính của mình, rồi biết cuốc ấy năm nào cũng rơi vào một tài xế bẻ app.
- **Khoảnh khắc rợn:** Đường đèo khô, ô vẫn nhỏ nước xuống ghế sau nhưng ghế khô; trong gương chỉ có ô, không có người bên dưới.
- **Câu kết:** Ma còn canh mã giảm giá; người sống thì canh khách đi một mình. Người sống mới đáng sợ.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| LUC | Lực, tài xế xe công nghệ lanh lợi, nói nhanh | O02, O03, O09 | Adam bựa | `atempo=1.05` |
| MAN | Cô Mận, áo dài lụa thẫm, tóc búi cao, ô đen cán gỗ; nói nhỏ nhẹ, kỹ từng đồng | O04, O05, O08 | Ngọc Huyền | `atempo=0.90,aecho=0.8:0.5:50:0.25` |
| SU | Sư cụ ở chùa quê | O11 | Thiền Tâm Đức | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "LUC": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "MAN": {"preset": "Ngọc Huyền", "fx": "atempo=0.90,aecho=0.8:0.5:50:0.25"}, "SU": {"preset": "Thiền Tâm Đức", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | O01 | *(không lời, 2 s)* | tong… tong… tong · nhạc tắt |
| 0:02 | O02 | **LUC**: Chị ơi… trời có mưa đâu? |  |
| 0:05 | O01 | **MAN**: Anh cứ chạy đi. Ô em không gập được. | mõ CỘC nhẹ |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Tết này về quê bằng gì? Đặt xe chưa? Chưa thì nghe chuyện một anh tài xế săn khách đêm. Có đêm, khách săn lại. | mõ CỘC · "KHÁCH SĂN LẠI" |
| 0:19 | O03 | **MN**: Lực chạy xe công nghệ. Mùa Tết, ngoài chạy cuốc, anh có nghề phụ: bẻ app. | ting · "BẺ APP" |
| 0:26 | O02 | **LUC**: Alô, em nhận cuốc rồi. Chị hủy giúp em nhé. Em chở ngoài, ba triệu. Tết mà, chị không đi thì người khác đi. |  |
| 0:35 | S26 | **MN**: Nhận cuốc, gọi khách bắt hủy, rồi đòi gấp ba. Khách ngon nhất là người đi một mình, ban đêm, không biết đường. Lực gọi đó là biết làm ăn. | "KHÁCH NGON: ĐI MỘT MÌNH" |
| 0:47 | O04 | **MN**: Một giờ sáng, 28 Tết. Một cuốc hiện lên: ba trăm cây số về ngôi chùa quê, chín trăm chín mươi chín nghìn. Mã năm mươi phần trăm, còn bốn trăm chín mươi chín. | ting · "999K → 499K" |
| 0:59 | O02 | **LUC**: Ba trăm cây số bốn trăm nghìn? Chị hủy đi, em chở ngoài ba triệu. |  |
| 1:06 | O05 | **MAN**: Em có mã mà anh. Mã thì phải dùng. Không dùng là phí. |  |
| 1:13 | O02 | **LUC**: Được. Ra khỏi thành phố rồi tính. Giữa đèo thì ai mặc cả với ai. |  |
| 1:20 | O03 → O05 | **MN**: Cô lên ghế sau. Mở ô ngay trong xe. Lực vẫn nghĩ mình cầm tay lái, nên hẳn còn cầm luôn phần quyết định. | cửa đóng · ô bật |
| 1:31 | O06 | **MN**: Người mất xa quê, xưa có tục che ô đen rước vong về. Ô che tới đâu, vong theo tới đó. Người cầm ô phải đưa tới nơi. | gió · "Ô CHE TỚI ĐÂU…" |
| 1:43 | S26 | **MN**: Bỏ giữa đường, vong ở lại với người bỏ. | "BỎ GIỮA ĐƯỜNG = Ở LẠI" |
| 1:48 | O02 | **LUC**: Chị gập ô lại hộ em, vướng gương. |  |
| 1:52 | O05 | **MAN**: Ô em không gập được, anh thông cảm. |  |
| 1:58 | O07 | **MN**: Ba giờ sáng, đường đèo khô, trời quang. Lực nhìn xuống đồng hồ cước, rồi nhìn gương. | radio rè |
| 2:07 | O01 | **MN**: Ghế sau có tiếng nước. Tong. Tong. Chiếc ô vẫn nhỏ nước, mà ghế khô nguyên. | tong… tong… · nhạc tắt |
| 2:16 | O02 → O08 | **MN**: Lực liếc gương. Trong gương chỉ có chiếc ô. Dưới ô không có ai. | im lặng 2 s |
| 2:25 | O09 | **MN**: Lực tấp vào cây xăng. Mở cửa sau. | xi nhan |
| 2:30 | O02 | **LUC**: Ba triệu tiền mặt, em chở tiếp. Không thì chị xuống đây. |  |
| 2:37 | O05 | **MAN**: Anh bỏ giữa đường thì em ở lại với anh. Xe anh có điều hòa. Em thích lắm. |  |
| 2:46 | O09 | **MN**: Cửa sau tự đóng. Khóa bấm xuống. Kính mờ hơi lạnh. Chuyến mặc cả của Lực vừa thành chuyến đi một chiều: hướng về quê cô Mận. | cửa sập · khóa cạch |
| 2:57 | O02 | **LUC**: …Thôi. Đi tiếp. Bốn trăm chín mươi chín. |  |
| 3:03 | S26 | **MN**: Còn hơn trăm cây nữa. Năm giờ sáng là tới chùa. Lực hết cách bẻ cuốc, chỉ còn cách chạy cho xong. | "CÒN HƠN 100 KM" · tick |
| 3:12 | O03 | **LUC**: Mã giảm giá này chắc phải có điều khoản. Khách tự chọn, tài xế tự thua. |  |
| 3:19 | O10 | **MN**: Năm giờ sáng, cổng chùa. Ghế sau trống. Chiếc ô đã gập, dựng ở góc xe. | mõ chùa sớm |
| 3:26 | O11 | **SU**: Cô Mận về đấy à. Người làng này, vào Sài Gòn buôn bán, mất năm sáu tám. Cả đời tiết kiệm từng đồng. |  |
| 3:38 | S26 | **MN**: Cô Mận người Sài Gòn xưa, quê gốc ngoài Bắc. Năm nào đứa cháu ở xa cũng đặt xe rước cô về ăn Tết. Trả trước bằng thẻ, kèm mã giảm giá. | "ĐÃ THANH TOÁN: 499.000đ" |
| 3:51 | O11 | **SU**: Năm nào cuốc ấy cũng rơi đúng vào một anh bẻ app. | ting |
| 3:57 | O02 | **LUC**: Em biết rồi. Năm sau nhận ra cuốc này, em hủy ngay. |  |
| 4:04 | O03 | **MN**: Thế là Lực học được bài học. Không phải đừng bẻ app. Là nhìn kỹ trước khi bẻ. |  |
| 4:12 | S33 → S34 | **MN**: Ma còn biết canh mã giảm giá. Người sống thì canh khách đi một mình. Thế mà người sống lại bảo ma đáng sợ. | rít điếu cày |
| 4:24 | S26 | **MN**: Tập sau: một chum sành cổ bị máy xúc đào trúng. Ông cụ canh chum ba trăm năm. Chum toàn xỉ than, mà ông ấy vẫn chưa chịu nghỉ. | "TẬP SAU" · whoosh |
| 4:36 | S06 | **MN**: Bấm đăng ký đi. Miễn phí, không cần mã. Đỡ phải gặp cô Mận mới biết có điều khoản. | "ĐĂNG KÝ" · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Trời không mưa mà ô nhỏ nước

- **LUC**: Chị ơi… trời có mưa đâu? (O02)
- **MAN**: Anh cứ chạy đi. Ô em không gập được. (O01) · pop "CÔ MẬN"
- **MN**: Đường đèo khô. Trời quang. Mà ô vẫn nhỏ nước. (O07 → O01)
- **MN**: Trong gương chỉ có chiếc ô. Dưới ô không có ai. (O08)
- **MN**: Cái gương soi được ghế sau, mà xem ra soi không tới người đang ngồi. (O08)
- **MN**: Hết cuốc này, Lực còn dám nhận cuốc đêm không? (S26)
- **MN**: Gương xe biết tiết kiệm chỗ trống hơn cả Lực biết tiết kiệm xăng. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · Nghề phụ của tài xế

- **LUC**: Chị hủy giúp em nhé. Em chở ngoài ba triệu. (O02)
- **MN**: Nhận cuốc rồi bắt khách hủy. Gọi đó là bẻ app. (S26)
- **LUC**: Tết mà, chị không đi thì người khác đi. (O02)
- **MN**: Khách ngon nhất là người đi một mình, ban đêm, không biết đường. (S26)
- **MN**: Lực gọi đó là biết làm ăn. Chắc app cũng gọi là biết… đổi chủ đề. (S26)
- **MN**: Đến lúc có khách săn lại, Lực mới hiểu chữ “cuốc”. Lực thoát nổi không? (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · Mã thì phải dùng

- **MN**: Ba trăm cây số. Chín trăm chín mươi chín nghìn. Có mã còn bốn trăm chín mươi chín. (O04)
- **LUC**: Chị hủy đi, em chở ngoài ba triệu. (O02)
- **MAN**: Em có mã mà anh. Mã thì phải dùng. Không dùng là phí. (O05) · pop "CÔ MẬN"
- **MN**: Anh tài xế nghe xong vẫn định mặc cả. (O02)
- **MN**: Mã giảm được nửa tiền, còn lòng tham thì chưa thấy ô nào giảm. (S26)
- **MN**: Lực có giao cuốc đúng giá không? (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · Ghế khô nguyên

- **MN**: Đường đèo khô. Trời không mưa. (O07)
- **MN**: Chiếc ô vẫn nhỏ nước. Tong. Tong. (O01)
- **MN**: Mà ghế sau khô nguyên. (O01)
- **MN**: Trong gương chỉ có chiếc ô. Dưới ô không có ai. (O08)
- **MN**: Nước rơi nghe rõ vậy, mà chẳng để lại một giọt. (O01)
- **MN**: Lực định bỏ khách ở cây xăng. Cửa xe có chịu mở không? (O09)
- **MN**: Tiếng nước còn thật hơn cuốc xe của Lực tối đó. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · Xe anh có điều hòa

- **MN**: Người cầm ô phải đưa vong tới nơi. Bỏ giữa đường thì vong ở lại với người bỏ. (O06 → S26)
- **LUC**: Không thì chị xuống đây. (O09)
- **MAN**: Anh bỏ giữa đường thì em ở lại với anh. Xe anh có điều hòa. Em thích lắm. (O05) · pop "CÔ MẬN"
- **MN**: Cửa sau tự đóng. Khóa bấm xuống. (O09)
- **MN**: Cái xe lạnh đi, còn tài xế tự thấy nóng ruột. (O09)
- **MN**: Lực còn đưa cô Mận tới chùa không? (S26)
- **MN**: Kèo ép khách xuống xe vừa kết thúc bằng việc khóa xe giữ tài xế. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · Năm nào cũng đúng một cuốc

- **MN**: Năm giờ sáng, cổng chùa. Ghế sau trống. (O10)
- **SU**: Cô Mận về đấy à. Người làng này, mất năm sáu tám. (O11) · pop "SƯ CỤ"
- **SU**: Năm nào đứa cháu ở xa cũng đặt xe rước cô về ăn Tết. (O11)
- **MN**: Năm nào cuốc ấy cũng rơi đúng vào một anh bẻ app. (S26)
- **MN**: Vậy người đặt cuốc biết rõ ai sẽ nhận chuyến xe này sao? (S26)
- **MN**: Còn chuyện vì sao luôn đúng một anh bẻ app… tập đầy đủ mới kể. (S26)

### SH7 — TRAILER · Khách săn lại

- **LUC**: Được. Ra khỏi thành phố rồi tính. Giữa đèo thì ai mặc cả với ai. (O02)
- **MN**: Ba giờ sáng. Đường đèo khô. Trời quang. (O07)
- **MN**: Chiếc ô nhỏ nước. Ghế sau khô nguyên. (O01)
- **MN**: Trong gương chỉ có chiếc ô. Dưới ô không có ai. (O08)
- **MN**: Lực vừa mở cửa sau ở cây xăng. Cô Mận nói… (O09)
- **MAN**: Anh bỏ giữa đường thì em ở lại với anh. (O05) · pop "CÔ MẬN"
- **MN**: Nhưng nếu cô Mận nói hết câu, Lực còn dám mặc cả nữa không? (S26)
- **MN**: Muốn biết cô nói gì tiếp, xem bản đầy đủ. (S26)

## Hình

| Mã | Cảnh | v3 dùng |
|---|---|---|
| O01 | Ghế sau ô tô ban đêm; ô đen cán gỗ mở, nước nhỏ xuống ghế da khô | ✓ |
| O02 | Lực, áo khoác đồng phục cũ, hai điện thoại kẹp kính lái; cận mặt, liếc gương | ✓ |
| O03 | Nội thất ô tô nhìn từ ghế sau ra phố đêm cận Tết, đèn lồng đỏ, hai điện thoại sáng | ✓ |
| O04 | Bến xe cũ ban đêm, mái hiên nhỏ giọt sau mưa; cô Mận áo dài thẫm, tóc búi cao, cầm ô đen | ✓ |
| O05 | Cô Mận cận dưới ô đen, áo dài lụa thẫm, tóc búi kiểu xưa, cười nhẹ, viền người hơi trong | ✓ |
| O06 | Tranh màu ngả nâu: đoàn người quê đi đường làng, một người che ô đen cho khoảng trống | ✓ |
| O07 | Ô tô chạy đường đèo khô dưới trăng, trời quang, không mưa | ✓ |
| O08 | Cận gương chiếu hậu: phản chiếu ô đen mở, bên dưới trống không | ✓ |
| O09 | Cây xăng vắng giữa đèo, đèn trắng lạnh; ô tô đỗ, cửa sau mở | ✓ |
| O10 | Cổng chùa quê lúc bình minh, sương, cây đa; ô tô đỗ, ghế sau trống, ô gập dựng góc | ✓ |
| O11 | Sư cụ áo nâu cầm chổi quét sân chùa, ngẩng lên nhìn xe, mặt hiền | ✓ |

Tái dùng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

## Lịch

- LONG: Thứ Hai 18/01, 18:00 (+07).
- SH1: Thứ Hai 18/01, 19:00 (+07).
- SH2: Thứ Ba 19/01, 11:30 (+07).
- SH3: Thứ Ba 19/01, 19:00 (+07).
- SH4: Thứ Tư 20/01, 11:30 (+07).
- SH5: Thứ Tư 20/01, 19:00 (+07).
- SH6: Thứ Năm 21/01, 11:30 (+07).
- SH7: Thứ Năm 21/01, 19:00 (+07).
