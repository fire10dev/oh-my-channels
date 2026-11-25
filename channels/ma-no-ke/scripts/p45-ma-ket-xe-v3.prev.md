# Dự án 45 — Ông bà đi đường “Làn khẩn cấp” (v3, 2026-11-24)

- Thêm câu hỏi trung tâm, hạn chót và cái giá để cú lật có trọng lượng.
- Cho Cường ba lần chủ động chen làn, mỗi lần gặp một trở ngại rõ hơn.
- Đưa khoảnh khắc trong gương thành điểm thấp ngay trước lựa chọn cuối của bà.
- Giữ cú lật ở việc ông bà ngừng phù hộ những người dùng sai làn khẩn cấp.
- Viết lại lời thoại theo nhịp dựng, thêm 5 short trọn và 2 trailer.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Cường có kịp về giỗ bà mà không biến lời khấn phù hộ thành cái cớ chiếm làn dành cho xe cứu thương không?
- **Đồng hồ / cái giá:** Mâm giỗ bắt đầu lúc 12:00 ngày 30/04; Cường sợ đến muộn, còn bà nội phải rời xe và thôi phù hộ nếu cháu tiếp tục chen làn.
- **Ba nấc leo thang:** Cường bật xi nhan xin chen, bị xe tải không nhường; lách qua một khe hẹp, bị dòng xe phía trước chặn; đạp ga vượt lên, xe tắt máy ngay sau cái lắc đầu của bà.
- **Điểm thấp:** Gương cho thấy bà đang ngồi sau, nhìn Cường lắc đầu. Cường quay lại thì ghế trống; trước mặt, làn khẩn cấp đặc kín những ông bà đã xuống xe.
- **Cú lật:** Bà chọn xuống xe và ngồi chắn trước xe Cường cùng các cụ khác; cái giá là Cường mất giờ giỗ và phải tự đi đúng làn. Không có tai nạn, xe cứu thương vẫn qua được.
- **Khoảnh khắc rợn:** Trong gương, bà cụ tóc búi ngồi ở ghế sau, ôm túi trầu, lắc đầu đúng một cái.
- **Câu kết:** “Bấm đăng ký đi. Rồi đi cho tử tế. Ông bà không phải tổng đài cứu hộ.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| CUONG | Anh Cường, áo polo, kính râm, lái SUV, sốt ruột | X03/X05/X06 | Adam bựa | `atempo=1.08` |
| BA | Bà nội Cường, tóc búi, áo cánh nâu, túi trầu | X02/X08 | Ngọc Huyền | `atempo=0.88,aecho=0.8:0.5:60:0.3` |
| CSGT | Anh cảnh sát giao thông trên cao tốc | X10 | Thiền Tâm Đức | `anull` |

```voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"CUONG":{"preset":"Adam bựa","fx":"atempo=1.08"},"BA":{"preset":"Ngọc Huyền","fx":"atempo=0.88,aecho=0.8:0.5:60:0.3"},"CSGT":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | X01 | *(không lời, 2 s)* | Còi xe nối đuôi · nhạc tắt |
| 0:02 | X02 | *(không lời, 2 s)* | Xi nhan tạch tạch |
| 0:04 | X02 | *(không lời, 2 s)* | Mõ CỘC nhẹ |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay đi giỗ, hay đi thi môn chen làn? | Mõ CỘC |
| 0:11 | X03 | **MN**: Sáng ba mươi tháng tư. Cường về quê dự giỗ bà nội, mâm giỗ dọn đúng mười hai giờ. Cậu còn cách quê gần trăm cây số. | “12:00 · MÂM GIỖ” |
| 0:20 | X03 | **CUONG**: Bà ơi, phù hộ cháu đi đường bình an, về kịp giỗ bà. | Tiếng bật lửa |
| 0:25 | S26 | **MN**: Người ta đi xa thường khấn ông bà phù hộ. Ông bà theo xe, ngồi ghế sau trông đường. Công việc không lương, bảo hiểm cũng không. | “ÔNG BÀ NGỒI GHẾ SAU” |
| 0:34 | X04 | **MN**: Ghế sau có túi quà quê. Có bà nội Cường nữa. Bà ngồi yên, ôm túi trầu. | Máy xe nổ |
| 0:42 | X01 | **MN**: Cao tốc ngày lễ. Ba làn xe đứng gần như im. Bên phải, làn khẩn cấp đang trống. | Còi xe · chữ “LÀN KHẨN CẤP” |
| 0:51 | X05 | **CUONG**: Mười một giờ rồi. Chen tí thôi, ai cũng chen mà. | Tích tắc đồng hồ |
| 0:56 | X06 | **MN**: Nấc một. Cường bật xi nhan, nhích mũi xe vào làn. Xe tải bên cạnh không nhường. Cậu bấm còi như thể cái còi có bằng ưu tiên. | Xi nhan · còi ngắn |
| 1:07 | X05 | **CUONG**: Anh ơi cho em vào một tí! Em về giỗ bà! | Còi xe |
| 1:12 | X01 | **MN**: Không lọt. Cường trở lại làn trong. Giờ thì muộn hơn một phút, mà vẫn đứng nguyên chỗ cũ. | “11:01” |
| 1:20 | X06 | **MN**: Nấc hai. Cách đó vài xe, một khe vừa mở. Cường lách vào làn khẩn cấp, vượt được hai chiếc. | Động cơ tăng |
| 1:29 | X06 | **MN**: Rồi một hàng xe khác cũng tràn vào. Khe hẹp biến mất. Trước mặt là đuôi xe, bên phải là dải phân cách. | Còi nối đuôi |
| 1:37 | X05 | **CUONG**: Có mỗi cái làn trống mà cũng không đi nổi. | Phanh xe |
| 1:42 | S26 | **MN**: Làn khẩn cấp dành cho xe cứu thương, cứu hỏa. Không phải làn “tôi chỉ chen một tí”. Nhưng biển báo không có nút bình luận để cậu giải thích. | “KHÔNG PHẢI LÀN VƯỢT” |
| 1:53 | X05 | **MN**: Nấc ba. Cường thấy trước mặt có khoảng trống. Cậu đạp ga. | Động cơ rú · nhạc tắt |
| 2:00 | X02 | **MN**: Liếc gương. Ghế sau trống. Chỉ còn túi quà quê. | Im |
| 2:05 | X02 | **MN**: Rồi trong gương, bà cụ tóc búi ngồi lại ở đó. Áo cánh nâu. Túi trầu trong tay. Bà nhìn Cường. Lắc đầu. Một cái. | Im · tiếng têm trầu |
| 2:15 | X04 | **MN**: Cường quay lại. Ghế sau trống. | Im 1 s |
| 2:19 | X06 | **MN**: Động cơ tắt phụt. Đèn khẩn cấp bật lên. Cường ngồi giữa làn mình vừa chọn, chẳng vượt được ai. | Động cơ tắt · đèn khẩn bật |
| 2:29 | X07 | **MN**: Trên cả tuyến, làn khẩn cấp bỗng có những cụ già ngồi ghế nhựa trước từng chiếc xe chen làn. Têm trầu, nói chuyện, như đang chờ xe buýt. | Tiếng các cụ chuyện trò nhiều lớp |
| 2:41 | X08 | **BA**: Cháu khấn bà phù hộ đi đường. Bà đang ngồi đúng đường đây. | Tiếng têm trầu |
| 2:48 | X07 | **MN**: Xe chen làn nào cũng tắt máy đúng chỗ ông bà nhà mình ngồi. Xe đi đúng làn vẫn chạy đều. Đúng là có những cái định vị gia đình không cần bật mạng. | “ĐI ĐÚNG LÀN · XE VẪN CHẠY” |
| 3:02 | X09 | **MN**: Rồi còi xe cứu thương vang lên. | Còi cứu thương lớn dần |
| 3:06 | X07 | **MN**: Các cụ đứng dậy, xách ghế dạt sang hai bên. Xe cứu thương lướt qua không vướng một chiếc nào. Xong việc, các cụ lại ngồi xuống. | Còi cứu thương xa dần |
| 3:18 | X10 | **CSGT**: Anh chạy vào làn khẩn cấp, đúng không? Giấy tờ xe và bằng lái giúp tôi. | Còi CSGT |
| 3:24 | S26 | **MN**: Cảnh sát giao thông lập biên bản từng xe. Các cụ ngồi xem. Có cụ gật gù, như đang chấm bài thi cuối kỳ. | Bút viết |
| 3:34 | X05 | **CUONG**: Bà ơi, cháu sai rồi. Cháu đi làn trong. Bà lên xe đi bà. | Xi nhan |
| 3:42 | X06 | **MN**: Bà không lên. Cường tắt máy, chờ xe sau nhường. Rồi bật xi nhan, nhập lại làn trong từng chút một. | Máy xe nổ · xi nhan |
| 3:52 | X06 | **MN**: Một xe tải nháy đèn cho cậu vào. Có người nhường, Cường mới đi được. Phát hiện mới: đi đúng luật không làm xe chậm bằng đứng cãi với cái gương. | Xe chạy đều |
| 4:04 | X11 | **MN**: Cường về đến quê muộn ba tiếng. Mâm giỗ gần dọn xong. Bà nội ngồi đầu mâm, nhìn cháu. | Tiếng bát đũa |
| 4:15 | X08 | **BA**: Cơm nguội rồi. Lần sau đi sớm. Bà có ngồi chờ, chứ xe cứu thương thì không. | Tiếng cười nhỏ |
| 4:25 | S33 → S34 | **MN**: Giỗ bà mà chen vào làn xe cứu thương. Cường vừa kịp về ăn cơm nguội, vừa có biên bản làm quà. | Rít điếu cày |
| 4:35 | B02 → S26 | **MN**: Thứ Năm: một gã thua bạc lẻn vào đền cạy hòm công đức. Hòm đã chuyển đổi số. Ông thần gác cửa thì chưa. | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:47 | S06 | **MN**: Bấm đăng ký đi. Biết đâu tập sau ông thần còn nhận chuyển khoản cả tiền phạt. | “ĐĂNG KÝ” · Mõ CỘC |

## SHORTS

### SH1 — TRỌN
- **MN**: Làn trống thế kia. Ai mà không muốn? (X01)
- **MN**: Cường cũng muốn. Ba lần chen vào làn khẩn cấp, ba lần bị chặn. (X06)
- **MN**: Lần thứ ba, bà nội hiện trong gương, lắc đầu. Xe tắt máy. (X02) · pop “BÀ NỘI”
- **MN**: Làn khẩn cấp đầy ông bà ngồi ghế nhựa. Xe cứu thương vẫn qua vèo vèo. (X07)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới.

### SH2 — TRỌN
- **MN**: Cường khấn bà phù hộ đi đường bình an, về kịp giỗ. (X03)
- **MN**: Bà theo xe, ngồi ghế sau. Cường rẽ vào làn khẩn cấp. Bà xuống xe. (X04)
- **BA**: Cháu khấn bà phù hộ đi đường. Bà đang ngồi đúng đường đây. (X08) · pop “BÀ NỘI”
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới.

### SH3 — TRỌN
- **CUONG**: Chen tí thôi, ai cũng chen mà. (X05)
- **MN**: Lần một, xe tải không nhường. Lần hai, khe trống biến mất. Lần ba, xe chết máy. (X06)
- **MN**: Bà nội ngồi trên ghế nhựa, ngay trước đầu xe. (X08) · pop “BÀ NỘI”
- **BA**: Bà có ngồi chờ, chứ xe cứu thương thì không. (X08)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới.

### SH4 — TRỌN
- **MN**: Liếc gương. Ghế sau trống. Chỉ còn túi quà quê. (X02)
- **MN**: Rồi trong gương, bà cụ tóc búi ngồi lại ở đó. Áo cánh nâu. Túi trầu trong tay. Bà nhìn Cường. Lắc đầu. Một cái. (X02) · pop “BÀ NỘI”
- **MN**: Cường quay lại. Ghế sau trống. Động cơ tắt phụt. (X04 → X06)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới.

### SH5 — TRỌN
- **MN**: Làn khẩn cấp bỗng có các cụ ngồi ghế nhựa trước từng xe chen làn. (X07)
- **BA**: Cháu khấn bà phù hộ đi đường. Bà đang ngồi đúng đường đây. (X08) · pop “BÀ NỘI”
- **MN**: Các cụ dạt ghế cho xe cứu thương qua. Rồi ngồi xuống xem cảnh sát lập biên bản. (X07 → X10)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới.

### SH6 — TRAILER
- **MN**: Cường chỉ muốn về kịp giỗ bà. Cậu chen vào làn khẩn cấp. (X05 → X06)
- **MN**: Liếc gương, ghế sau trống. Rồi có một bà cụ ngồi đó, ôm túi trầu. (X02) · pop “BÀ NỘI”
- **MN**: Bà nhìn Cường. Lắc đầu. Một cái. (X02)
- **MN**: Rồi xe tắt máy. Bà đã xuống đâu? (X06)
- **MN**: Cắt ở đây. Bản đầy đủ, link dưới.

### SH7 — TRAILER
- **MN**: Cả làn khẩn cấp bỗng đầy những ông bà ngồi ghế nhựa. (X07)
- **MN**: Họ ngồi trước xe chen làn, têm trầu, nói chuyện. (X07)
- **MN**: Rồi còi xe cứu thương vang lên. Các cụ bắt đầu đứng dậy. (X09 → X07) · pop “CÁC CỤ”
- **MN**: Nhưng xe nào vừa lách vào làn ấy? (X06)
- **MN**: Cắt ở đây. Bản đầy đủ, link dưới.

## Hình

Tận dụng ảnh cũ: B02, S01, S06, S26, S33, S34.

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| X01 | Cao tốc ngày lễ: ba làn xe kẹt cứng, làn khẩn cấp bên phải trống | Có |
| X02 | Cận gương chiếu hậu: ghế sau trống có túi quà; bản có bà cụ tóc búi, áo cánh nâu, ôm túi trầu, lắc đầu | Có |
| X03 | Nhà phố sáng 30/4: mẹ thắp hương, Cường xách vali, thắp hương vội | Có |
| X04 | Ghế sau SUV có túi quà quê, không có người | Có |
| X05 | Cường áo polo, kính râm, tay lái, xem giờ sốt ruột | Có |
| X06 | SUV lách vào làn khẩn cấp; bản xe chết máy, đèn khẩn nháy | Có |
| X07 | Các cụ là bóng mờ hiền, hài, ngồi ghế nhựa têm trầu; bản dạt ghế cho xe cứu thương | Có |
| X08 | Bà nội cận: bóng mờ, tóc búi, áo cánh nâu, túi trầu; bản ngồi đầu mâm giỗ, vẻ trách yêu | Có |
| X09 | Xe cứu thương đèn nháy trên làn khẩn cấp | Có |
| X10 | Cảnh sát giao thông gõ cửa kính SUV, sổ biên bản | Có |
| X11 | Mâm giỗ nhà quê đã vơi, họ hàng ngồi, Cường bước vào muộn | Có |

## Lịch

- LONG — Thứ Hai 26/04, 18:00 (+07).
- SH1 — Thứ Hai 26/04, 19:00.
- SH2 — Thứ Ba 27/04, 11:30.
- SH3 — Thứ Ba 27/04, 19:00.
- SH4 — Thứ Tư 28/04, 11:30.
- SH5 — Thứ Tư 28/04, 19:00.
- SH6 — Thứ Năm 29/04, 11:30.
- SH7 — Thứ Năm 29/04, 19:00.
