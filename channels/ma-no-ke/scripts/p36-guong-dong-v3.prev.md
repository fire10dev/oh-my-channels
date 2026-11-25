# Dự án 36 — Gương đồng “Những khuôn mặt sau lưng” (v3, 2026-11-24)

- Thêm hạn chót trước 8 giờ sáng: Kiều phải trả món đồ cuối cùng; nếu trượt, bí mật và những khuôn mặt trong gương sẽ còn nguyên.
- Cho Kiều chủ động thử che gương, bán gương rồi hoàn tiền từng người; mỗi cách đều thất bại và khiến chị mất thêm.
- Cú lật là lựa chọn của Kiều: bán nốt tiệm, mua lại bình thật gấp ba giá và đặt lên bàn thờ mẹ.
- Dồn khoảnh khắc rợn vào bốn mươi chín người trong gương; điểm thấp nhất là lúc chỉ còn mẹ chị.
- Kết bằng câu đùa của Ma Nó, teaser P37 vào Thứ Hai và lời kêu đăng ký.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Kiều có trả hết những gì đã lừa khách trước 8 giờ sáng, trước khi gương phơi bày khuôn mặt cuối cùng?
- **Đồng hồ / cái giá:** Tiệm mở cửa lúc 8 giờ sáng. Nếu trượt, bốn mươi chín khuôn mặt còn lại trong gương và bí mật của Kiều bị phơi ra.
- **Ba nấc leo thang:** Kiều phủ khăn lên gương nhưng vẫn thấy người; rao bán gương nhưng người mua bỏ đi; hoàn tiền khách để xóa từng khuôn mặt nhưng phải bán dần tài sản.
- **Điểm thấp:** Chỉ còn khuôn mặt mẹ Kiều. Bình thật phải mua lại gấp ba giá, chị không đủ tiền và còn tám phút.
- **Cú lật:** Kiều chọn bán nốt tiệm, mua lại bình thật gấp ba giá và đặt lên bàn thờ mẹ; chị mất tiền và cửa hàng.
- **Khoảnh khắc rợn:** Bốn mươi chín người đứng kín trong gương, rồi gần hơn một bước.
- **Câu kết:** Ma Nó tự soi gương, châm biếm chân tướng; teaser P37 vào Thứ Hai và kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| KIEU | Chị Kiều, chủ tiệm đồ cổ | G03, G08, G09 | Ngọc Huyền | anull |
| QUANG | Anh Quang, khách mua đồ giả | G06 | Thiền Tâm Đức | atempo=1.02 |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "KIEU": {"preset": "Ngọc Huyền", "fx": "anull"}, "QUANG": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.02"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | G01 | *(không lời, 2 s)* | cửa cuốn kéo · im |
| 0:02 | G02 | *(không lời, 2 s)* | đồng ngân khẽ |
| 0:04 | G03 | **MN**: Không có ai. Trong tiệm. | mõ CỘC |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay có một bà chủ bán đồ cổ. Hàng cũ, giấy mới. | mõ CỘC |
| 0:14 | G01 | **MN**: Chị Kiều có tiệm ở phố cổ. Gốm hun khói, đồng ngâm hóa chất, giấy chứng nhận tự in. Một nửa hàng là đồ giả. Nửa còn lại cũng có giấy tờ đáng ngờ. | chuông gió · phố xa |
| 0:25 | G03 | **KIEU**: Men rạn này là men thật. Tám trăm năm tuổi. Em để anh giá anh em. |  |
| 0:30 | S26 | **MN**: Chị nói giọng chuyên gia. Khách nghe xong, tự thấy mình thiếu chuyên môn lẫn ba trăm triệu. |  |
| 0:37 | G04 | **MN**: Một tháng trước, chị mua đổ đống đồ nhà người ta dọn đi. Trong đó có chiếc gương đồng nghìn năm. Chị định làm nó cũ thêm. Lần đầu tiên, chị gặp món đồ thật mà không cần sửa. | máy in rè rè |
| 0:50 | G02 | **MN**: Dân gian gọi gương đồng là kính chiếu yêu. Người ngay thấy mình. Kẻ dối thấy những gì mình giấu. Người bị lừa còn sống, ở xa, vẫn để lại nỗi ấm ức trong gương. | “KÍNH CHIẾU YÊU” |
| 1:04 | G02 | **MN**: Tối đầu tiên, sau lưng chị có một người đàn ông cầm bình. Chị quay lại. Tiệm trống. | đồng ngân |
| 1:11 | G06 | **MN**: Chị nhận ra anh Quang. Khách mua chiếc bình “thời Lý” tháng trước. |  |
| 1:16 | G03 | **KIEU**: Gương hỏng. Mai đem bán. |  |
| 1:19 | G02 | **MN**: Chị phủ khăn lên gương. Vẫn thấy bóng người sau lớp vải. Chị gọi người mua. Anh ta nhìn gương, nhìn chị, rồi xin phép về chăm mẹ. | vải sột soạt |
| 1:30 | G03 | **MN**: Tối sau có hai người. Tối nữa, năm người. Ai cũng cầm món đồ đã mua. Ai cũng đứng đúng chỗ từng trả tiền. | đồng ngân ngắn |
| 1:39 | G03 | **KIEU**: Gương đồng cổ mà phản chiếu được cả khách cũ. Công nghệ xưa tốt thật. |  |
| 1:45 | G01 | **MN**: Đêm thứ bảy, chị kéo cửa tiệm, định gói gương mang bán. Sáng mai tám giờ mở cửa. Chị muốn dọn sạch chuyện này trước khi khách đầu tiên bước vào. | cửa cuốn |
| 1:55 | G07 | **MN**: Trong gương, cả tiệm đứng kín người. Bốn mươi chín người, ai cũng cầm món đồ đã mua. Đứng im. Nhìn chị. | nhạc tắt |
| 2:06 | G03 | **MN**: Chị quay lại. Tiệm trống. Chỉ có đồ giả trên kệ. | im |
| 2:12 | G07 | **MN**: Nhìn vào gương. Họ vẫn đứng đó. Gần hơn một bước. | đồng ngân dài · im 2 s |
| 2:19 | G08 | **KIEU**: Anh Quang ạ. Chiếc bình em bán anh có vấn đề. Em xin hoàn lại tiền. | tiếng chuyển khoản “ting” |
| 2:25 | G06 | **QUANG**: Hoàn tiền? Đồ cổ mà hoàn? Chị… chị ốm à? |  |
| 2:31 | G02 | **MN**: Chị chuyển khoản. Một khuôn mặt biến mất. Chị gọi người thứ hai, rồi người thứ ba. Mỗi lần “ting”, gương bớt một người, tài khoản bớt một cục tự tin. | “TING” ×n |
| 2:42 | G08 | **MN**: Chị bán xe. Bán lò hun khói. Bán cả kệ gỗ để trả bốn mươi tám người. Trước tám giờ, chỉ còn một khuôn mặt. |  |
| 2:51 | G07 | **MN**: Một bà cụ tóc bạc, cầm khăn lau. Mẹ chị. | đồng ngân |
| 2:56 | G09 | **MN**: Năm ngoái, Kiều lấy bình gốm gia truyền của mẹ bán cho nhà sưu tầm. Chị trả mẹ chiếc bình giả. Mẹ vẫn lau nó mỗi sáng. | lau gốm sột soạt |
| 3:07 | G03 | **KIEU**: Mẹ… |  |
| 3:09 | S26 | **MN**: Bốn mươi tám người kia, chị trả tiền. Mẹ thì chị lấy cả kỷ vật. Giờ bình thật giá gấp ba. Chị không đủ tiền. Còn tám phút đến giờ mở cửa. | nhịp đồng hồ |
| 3:22 | G08 → G09 | **MN**: Kiều gọi nhà sưu tầm. Chị bán nốt tiệm, mua lại bình thật gấp ba giá. Rồi đặt nó lên bàn thờ nhà mẹ. | ting · lau gốm |
| 3:33 | G02 | **MN**: Tối ấy, trong gương chỉ còn mình chị. Khuôn mặt cuối cùng đã biến mất. Cái giá còn lại nằm trên tờ giấy bán tiệm. | đồng ngân tắt |
| 3:43 | G09 | **MN**: Mẹ lau bình như mọi sáng. Không biết chuyện gì. Kiều đứng ngoài cửa, lần đầu không có món đồ giả nào để giới thiệu. | lau gốm |
| 3:52 | S33 → S34 | **MN**: Tao soi gương ấy rồi. Chỉ thấy bộ xương cầm điếu cày. Đúng chân tướng. Khách còn nợ tao tiền nhang. | rít điếu cày |
| 4:01 | S01 | **MN**: Thứ Hai, nhóm TikToker quay clip dọa ma trong thang máy. Thang máy có một tay chuyên trêu người. Hắn thích đùa hơn tụi nó nhiều. | “TẬP SAU · THỨ HAI” · whoosh |
| 4:10 | S06 | **MN**: Bấm đăng ký đi. Kênh này đồ thật: thật sự không trả tiền quảng cáo. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Không có ai. Trong tiệm. (G03) · pop “Chị Kiều”
- **MN**: Trong gương, sau lưng chị có một người đàn ông cầm bình. Chị quay lại. Tiệm trống, chỉ còn chiếc khăn trên tay và tiếng đồng ngân khe khẽ. (G02)
- **MN**: Chị phủ khăn lên gương. Vẫn thấy bóng người sau lớp vải. (G02)
- **MN**: Tối sau có hai người. Tối nữa, năm người. Ai cũng cầm món đồ đã mua. Ai cũng đứng đúng chỗ từng trả tiền. (G03)
- **MN**: Chị định bán gương. Người mua nhìn nó rồi xin phép về chăm mẹ. (G02)
- **MN**: Gương có bảo hành không? Chắc có, nhưng hãng bảo hành đang đứng sau lưng chị. (G02)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **MN**: Một nửa hàng là đồ giả. Nửa còn lại cũng có giấy tờ đáng ngờ. (G01) · pop “Chị Kiều”
- **MN**: Gốm hun khói, đồng ngâm hóa chất, giấy chứng nhận tự in. (G04)
- **KIEU**: Men rạn này là men thật. Tám trăm năm tuổi. Em để anh giá anh em. (G03)
- **MN**: Chị nói giọng chuyên gia. Khách nghe xong, tự thấy mình thiếu chuyên môn lẫn ba trăm triệu. (S26)
- **MN**: Chị bán một món đồ, tặng kèm chứng nhận do máy in nhà chị ký tên. Đúng là dịch vụ trọn gói. (G04)
- **MN**: Chị Kiều bán đồ giả mà nói nghe thật đến mức cái máy in cũng thấy mình có bằng cấp. (G03)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN

- **MN**: Người ngay thấy mình. Kẻ dối thấy những gì mình giấu. (G02) · pop “Gương đồng”
- **MN**: Gương nghìn năm soi ra cả nỗi ấm ức của người bị lừa, dù họ còn sống và ở xa. (G02)
- **MN**: Sau lưng chị Kiều có một người đàn ông cầm bình. Chị quay lại. Tiệm trống. (G02)
- **KIEU**: Gương hỏng. Mai đem bán. (G03)
- **MN**: Chị phủ khăn lên gương. Vẫn thấy bóng người sau lớp vải. Người mua nhìn một cái rồi xin phép về chăm mẹ. (G02)
- **MN**: Chị bán được gương thì tốt. Nhưng gương đang bán nguyên dàn khách cũ cho chị xem. (G03)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN

- **MN**: Trong gương, cả tiệm đứng kín người. Bốn mươi chín người. (G07) · pop “Những người mua”
- **MN**: Ai cũng cầm món đồ đã mua. Đứng im. Nhìn chị. (G07)
- **MN**: Chị quay lại. Tiệm trống. Chỉ có đồ giả trên kệ. (G03)
- **MN**: Chị nhìn lại gương. Họ vẫn đứng đó. Gần hơn một bước. (G07)
- **MN**: Bốn mươi chín người xếp kín gương, còn chị Kiều thì không tìm ra nổi một khách hàng chịu đứng về phía mình. (G03)
- **MN**: Nếu đây là buổi họp khách hàng, chị Kiều vừa đạt đủ chỉ tiêu tham dự và trượt phần chăm sóc. (G07)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN

- **QUANG**: Hoàn tiền? Đồ cổ mà hoàn? Chị… chị ốm à? (G06) · pop “Anh Quang”
- **KIEU**: Anh Quang ạ. Chiếc bình em bán anh có vấn đề. Em xin hoàn lại tiền. (G08)
- **MN**: Chị chuyển khoản. Một khuôn mặt biến mất. Chị gọi người thứ hai, rồi người thứ ba. (G02)
- **MN**: Chị bán xe. Bán lò hun khói. Bán cả kệ gỗ để trả bốn mươi tám người. Trước tám giờ, chỉ còn một khuôn mặt. (G08)
- **MN**: Cầm khăn lau. Là mẹ chị. (G07)
- **MN**: Hoàn tiền xong, tài khoản trống hơn gương. Được cái lần đầu chị bán hàng mà khách nhận lại đủ tiền. (G02)
- *(lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER

- **MN**: Còn một khuôn mặt trong gương. Một bà cụ tóc bạc, cầm khăn lau. (G07) · pop “Khuôn mặt cuối”
- **MN**: Năm ngoái, Kiều lấy bình gốm gia truyền của mẹ bán cho nhà sưu tầm. (G09)
- **MN**: Chị trả mẹ chiếc bình giả. Mẹ vẫn lau nó mỗi sáng. (G09)
- **KIEU**: Mẹ… (G03)
- **MN**: Bình thật giá gấp ba. Chị không đủ tiền. Còn tám phút đến giờ mở cửa. (S26)
- **MN**: Cửa tiệm là thứ cuối cùng chị còn có thể đem đổi. Chị sẽ làm gì? (G08)

### SH7 — TRAILER

- **MN**: Sáng mai tám giờ tiệm mở cửa. Trong gương còn một khuôn mặt. (G07) · pop “Chị Kiều”
- **MN**: Chị đã trả bốn mươi tám người. Còn người cuối cùng cầm khăn lau. (G07)
- **MN**: Bình thật giá gấp ba. Chị không đủ tiền. Còn tám phút. (S26)
- **MN**: Kiều gọi một cuộc. Rồi nhìn tờ giấy bán tiệm, thứ cuối cùng chị còn để trả món nợ ấy. (G08)
- **MN**: Chị sẽ giữ cửa hàng hay trả lại kỷ vật của mẹ? (G09)
- *(cắt trước đáp án)*

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| G01 | Tiệm đồ cổ phố cổ: kệ gỗ đầy gốm, đồng, tranh, đèn vàng; bản ngày đông khách, bản đêm cửa cuốn kéo | Có |
| G02 | Cận chiếc gương đồng tròn cổ trên giá gỗ, mặt gương xỉn, gợn như nước; các bản phản chiếu: một bờ vai, năm người, chỉ chị Kiều | Có |
| G03 | Chị Kiều cận: áo dài cách tân, kính lúp đeo cổ; các bản: giọng chuyên gia, quay phắt lại, khóc | Có |
| G04 | Xưởng sau tiệm: lò hun khói, thùng ngâm, máy in, mấy chiếc bình mới đang làm cũ | Có |
| G05 | Đống đồ cũ mua đổ đống: bàn ghế, sách cũ, giữa đống một chiếc gương đồng tròn xỉn | Không |
| G06 | Anh Quang cận: áo sơ mi, tay ôm chiếc bình gốm, mặt ngạc nhiên | Có |
| G07 | Mặt gương đồng phản chiếu cả tiệm đứng kín người, ai cũng cầm món đồ cổ, đứng im nhìn ra; bản sau chỉ còn một bà cụ tóc bạc cầm khăn lau | Có |
| G08 | Chị Kiều ngồi giữa tiệm đã dọn bớt đồ, gọi điện, mắt đỏ | Có |
| G09 | Nhà mẹ ở quê: bàn thờ gỗ, bà cụ tóc bạc lau chiếc bình gốm; bản sau chị Kiều đặt bình thật lên bàn thờ | Có |

## Lịch

- **LONG:** Thứ Năm 25/03, 18:00 (+07).
- **SH1:** Thứ Năm 25/03, 19:00 (+07).
- **SH2:** Thứ Sáu 26/03, 11:30 (+07).
- **SH3:** Thứ Sáu 26/03, 19:00 (+07).
- **SH4:** Thứ Bảy 27/03, 11:30 (+07).
- **SH5:** Thứ Bảy 27/03, 19:00 (+07).
- **SH6:** Chủ Nhật 28/03, 11:30 (+07).
- **SH7:** Chủ Nhật 28/03, 19:00 (+07).
