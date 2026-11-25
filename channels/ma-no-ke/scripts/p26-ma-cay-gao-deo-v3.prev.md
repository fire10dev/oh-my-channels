# Dự án 26 — Ma cây gạo đèo "Clip đính chính" (v3, 2026-11-24)

- Rút LONG còn khoảng 580 chữ thoại, giữ mạch truyện và dàn cảnh.
- Làm rõ hạn chót nửa đêm, cái giá nếu Hoàng không chọn nói thật, và ba lần thử thoát.
- Đặt điểm thấp ngay trước lựa chọn đính chính; Hoàng tự chọn công khai lời thú nhận.
- Chia SHORTS thành 5 TRỌN có punch riêng và 2 TRAILER cắt trước đáp án.
- Giữ danh sách ảnh, giọng nhân vật, teaser tập sau và lịch đăng của v2.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Hoàng có chịu tự thú trước nửa đêm để thoát vòng lặp và thôi làm homestay chị Sinh mất khách?
- **Đồng hồ / cái giá:** Trước nửa đêm, Hoàng phải chọn. Nếu trượt, ông Ba giữ hắn trên đèo; clip bịa tiếp tục làm homestay chị Sinh mất khách.
- **Ba nấc leo thang:** Hoàng theo định vị nhưng lại về cây gạo; đổi đường nhưng vẫn gặp cột số 47; định tắt máy và phủ nhận clip nhưng ông Ba chặn lối.
- **Điểm thấp:** Hoàng nhận ra mình vẫn có thể dùng clip bịa để kiếm lượt xem, còn homestay chị Sinh đã vắng khách.
- **Cú lật:** Hoàng tự chọn quay clip đính chính, nhận đã bịa để tống tiền. Cái giá là biến kênh của mình thành bằng chứng cho trò tống tiền.
- **Khoảnh khắc rợn:** Nón mê đứng yên trong góc khung hình, dù xe chạy và cây cối ngoài cửa lùi vùn vụt.
- **Câu kết:** Ma Nó châm biếm kẻ bịa chuyện bị dắt, nhá tập sau về giếng làng cổ bị lấp làm bể bơi vô cực, rồi kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HOANG | Hoàng "Check-in", KOL chấm điểm du lịch tống tiền | E03, E10 | Adam bựa | `atempo=1.05` |
| BA | Ông Ba Gạo, ma gác đèo | E08 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:70:0.3` |
| SINH | Chị Sinh, chủ homestay | E05 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HOANG": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "BA": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:70:0.3"}, "SINH": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | E01 | *(không lời, 1.5 s)* | Động cơ xe leo dốc · gió đèo |
| 0:02 | E02 | **MN**: Lần thứ mười hai. | Lá gạo rơi lộp độp |
| 0:04 | E03 | **HOANG**: Sao lại cây này? Đi đâu cũng về cây này?! | Mõ cộc nhẹ |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Có cái thật, có cái bịa. Hôm nay tao kể cái bịa. | Mõ cộc |
| 0:14 | E04 | **MN**: Hoàng Check-in, hai triệu người theo dõi. Quán nào được khen thì đông khách. Quán nào bị chê thì chủ tự lo cái ví. | Chim rừng |
| 0:22 | E03 | **HOANG**: Mười triệu, em lên sóng cho chị. Không thì… em chấm điểm cũng phải trung thực. | |
| 0:28 | E05 | **SINH**: Nhà chị bán phòng ba trăm nghìn một đêm. Mười triệu bằng cả tháng. | |
| 0:34 | S26 | **MN**: Chị Sinh không trả. Hoàng cười rồi đi. Ba ngày sau, hắn đăng: “Đèo ma ám. Homestay dưới chân đèo có vong.” Bóng trắng là bạn hắn trùm chăn. Đạo đức thì thuê ngoài. | |
| 0:47 | E06 | **MN**: Ba triệu lượt xem, mười một đoàn hủy phòng. Tin nhắn hủy chạy nhanh hơn tin nhắn đặt. Còn Hoàng gọi đó là “nội dung”. | Chuông tin nhắn hủy |
| 0:56 | E07 | **MN**: Homestay chị Sinh trống cả mùa hoa gạo. Cây gạo trên đèo thì có ông gác lối thật. Trăm năm dắt người lạc ra. Chưa ai thuê ông đóng clip cả. | |
| 1:07 | E08 | **BA**: Ta dắt người lạc ra, giữ người say lại. Chưa hù ai một lần. Giờ cả nước bảo ta ám. Thằng trùm chăn kia mới ám. | Gió đèo |
| 1:19 | S26 | **MN**: Luật đèo: ai nói láo về đất của ông Ba thì bị dắt, đi mãi không ra. Ông ghét người lấy cái sai làm nghề. | “NÓI LÁO VỀ ĐẤT · BỊ DẮT” |
| 1:28 | E09 | **MN**: Hai giờ sáng, cô biên tập dựng lại đoạn phim. Góc dưới bên phải khung nào cũng có một chiếc nón mê. | Bàn phím · nhạc tắt |
| 1:38 | E09 | **MN**: Xe chạy bốn mươi cây số một giờ. Cây cối lùi vùn vụt. Cái nón vẫn đứng yên trong khung, như đang đi cùng xe. | Im lặng 1 s |
| 1:50 | E09 | **MN**: Cô biên tập xin nghỉ lúc hai giờ năm phút. Không cần ghi lý do. | Bàn phím dừng |
| 1:56 | E01 | **MN**: Chiều hôm sau, Hoàng lên đèo quay phần hai: “Ma giả bị vu oan”. Hắn theo định vị. Lại cây gạo, cột số bốn mươi bảy. | Động cơ xe |
| 2:07 | E02 | **MN**: Đổi đường. Vẫn cây gạo, vẫn cột số bốn mươi bảy. | Xi nhan lặp |
| 2:12 | E03 | **HOANG**: Đi thẳng mãi sao lại về chỗ cũ? Định vị bảo đi thẳng mà! | |
| 2:18 | E08 | **BA**: Mày bịa về đất của ta. Muốn ra thì nói thật. Quay đi. | Gió |
| 2:25 | E03 | **HOANG**: Tôi tắt máy. Tôi không quay gì hết. | |
| 2:29 | E08 | **BA**: Tắt máy thì mày vẫn còn miệng. | |
| 2:33 | E03 | **HOANG**: Tôi đăng clip trước, bảo đây là phần hai. Mười triệu lượt xem nữa. Chị Sinh hết khách thì… tự chịu. | Nhạc tắt |
| 2:41 | E08 | **BA**: Vậy cứ đi. | |
| 2:44 | E01 | **MN**: Đường mở ra, vòng cua nào cũng trả hắn về cây gạo. Nửa đêm sắp tới. Hoàng hết pin, hết sóng, hết cả câu giải thích tử tế. Hắn vẫn có thể bịa tiếp để kiếm lượt xem. Chị Sinh thì vẫn mất khách. | Động cơ hụt dần |
| 2:59 | E10 | **HOANG**: Đèo này không có ma. Homestay chị Sinh không có vong. Clip trước tôi bịa vì chị ấy không trả tôi mười triệu. Bóng trắng là bạn tôi trùm chăn. Tôi xin lỗi. | Lá gạo rơi |
| 3:13 | E08 | **BA**: Nói đủ rồi. Đi đi. | Gió dịu |
| 3:17 | E01 | **MN**: Hoàng tự lưu clip. Xuống thị trấn có sóng, hắn đăng. Kênh của hắn giờ cũng là bằng chứng cho màn tống tiền. | Động cơ xuống dốc |
| 3:27 | E04 | **MN**: Clip đính chính được mười triệu lượt xem, gấp ba clip bịa. Homestay chị Sinh kín phòng đến hết mùa. | Khách nói cười |
| 3:36 | E05 | **SINH**: Khách lên hỏi đường ra cây gạo. Họ bảo muốn chào ông. | |
| 3:41 | E08 | **BA**: Đông quá. Ồn. Nhưng mà… nói thật thì được. | Gió nhẹ |
| 3:47 | S33 → S34 | **MN**: Tao làm ma, tao kể chuyện ma. Bịa chuyện kiếm tiền thì có ngày phải tự quay cảnh mình nhận lỗi. Khó chịu ghê. | Rít điếu cày |
| 3:57 | S34 | **MN**: Thứ Hai: resort lấp giếng làng cổ làm bể bơi vô cực. Dưới giếng có một ông nằm từ trước khi có làng. | “TẬP SAU · THỨ HAI” · Whoosh |
| 4:07 | S06 | **MN**: Bấm đăng ký đi. Kênh tao không thu phí lên sóng, chỉ thu bằng cách làm mày mất ngủ đúng giờ. | “ĐĂNG KÝ” · Mõ cộc |

## SHORTS

### SH1 — TRỌN (9:16)

- **MN**: Lần thứ mười hai. Đi đâu cũng về đúng cây gạo, cột số bốn mươi bảy. (E02) · pop "HOÀNG CHECK-IN"
- **HOANG**: Sao lại cây này? Đi đâu cũng về cây này?! (E03)
- **MN**: Đổi đường. Vẫn cây gạo. Đi thẳng theo định vị, nó cũng đưa mày về chỗ cũ. (E02)
- **HOANG**: Định vị bảo đi thẳng mà! (E03)
- **MN**: Có khi định vị không lạc. Có người sống mới bị lạc nghiệp. (S26)
- *(không lời, 0.8 s)* (E02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN (9:16)

- **HOANG**: Mười triệu, em lên sóng cho chị. Không thì… em chấm điểm cũng phải trung thực. (E03) · pop "HOÀNG CHECK-IN"
- **SINH**: Nhà chị bán phòng ba trăm nghìn một đêm. Mười triệu bằng cả tháng. (E05) · pop "CHỊ SINH"
- **MN**: Chị Sinh không trả. Hoàng cười rồi đi. Ba ngày sau, hắn đăng clip nói homestay có vong. (S26)
- **MN**: Ba triệu lượt xem. Mười một đoàn khách hủy. Hoàng gọi đó là nội dung; chị Sinh gọi mãi không có ai đặt phòng. (E07)
- **HOANG**: Chị không trả tiền, tôi đăng clip. Có gì mà bất ngờ? (E03)
- **MN**: Lạ thật, bảng giá của hắn rẻ hơn cả lương tâm. (S26)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRAILER (9:16)

- **MN**: Dân gian có câu “Thần cây đa, ma cây gạo”. Trên đèo có ông gác lối thật. (S26) · pop "ÔNG BA GẠO"
- **BA**: Trăm năm ta dắt người lạc ra, giữ người say lại. Chưa hù ai một lần. (E08)
- **MN**: Còn Hoàng bịa chuyện ma về đất của ông. Thế là chiếc xe cứ quay lại đúng một gốc cây. (E02)
- **BA**: Muốn ra thì nói thật. (E08)
- **MN**: Hoàng định nói gì? (E03)
- *(không lời, 0.8 s)* (E08)

### SH4 — TRỌN (9:16)

- **MN**: Hai giờ sáng, cô biên tập dựng lại phim trên đèo. (E09) · pop "CÔ BIÊN TẬP"
- **MN**: Góc dưới bên phải khung nào cũng có một chiếc nón mê. Xe chạy bốn mươi cây số một giờ, cây cối lùi vùn vụt. Cái nón vẫn đứng yên đúng một chỗ trong khung. (E09)
- **MN**: Cô biên tập xin nghỉ lúc hai giờ năm phút. Nhanh hơn cả lúc xuất file. (E09)
- **MN**: Bàn dựng có hai màn hình, một chiếc nón, và từ hôm đó thiếu một nhân viên. (E09)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN (9:16)

- **HOANG**: Tôi tắt máy. Tôi không quay gì hết. (E03) · pop "HOÀNG CHECK-IN"
- **BA**: Tắt máy thì mày vẫn còn miệng. (E08)
- **HOANG**: Tôi đăng clip trước, bảo đây là phần hai. Mười triệu lượt xem nữa. Chị Sinh hết khách thì… tự chịu. (E03)
- **MN**: Đường mở ra trước mặt, nhưng vòng cua nào cũng trả hắn về cây gạo. Đêm xuống. Hắn hết pin, hết sóng, hết cả câu giải thích tử tế. (E01)
- **HOANG**: Tắt máy quay được. Tắt cái miệng thì đang cân nhắc. (E03)
- **MN**: Khó nhất là lúc kẻ nói dối tự nghe mình nói. (S26)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER (9:16)

- **MN**: Hoàng có thể tiếp tục bịa, kiếm thêm lượt xem. Nhưng mỗi vòng cua lại trả hắn về cây gạo. (E01) · pop "HOÀNG CHECK-IN"
- **BA**: Muốn ra thì nói thật. Quay đi. (E08)
- **MN**: Nửa đêm sắp tới. Hoàng hết pin, hết sóng, còn một lựa chọn. (E03)
- **HOANG**: Tôi đăng clip trước, bảo đây là phần hai. Mười triệu lượt xem nữa. (E03)
- **MN**: Nhưng lần này, ai phải trả giá? (S26)
- *(không lời, 0.8 s)* (E08)

### SH7 — TRỌN (9:16)

- **HOANG**: Đèo này không có ma. Homestay chị Sinh không có vong. Clip trước tôi bịa vì chị ấy không trả tôi mười triệu. Bóng trắng là bạn tôi trùm chăn. Tôi xin lỗi. (E10) · pop "HOÀNG CHECK-IN"
- **MN**: Hoàng tự đăng clip nhận tội. Mười triệu lượt xem, gấp ba clip bịa. (E04)
- **SINH**: Khách lên hỏi đường ra cây gạo. Họ bảo muốn chào ông. (E05) · pop "CHỊ SINH"
- **BA**: Đông quá. Ồn. Nhưng mà… nói thật thì được. (E08)
- **MN**: Kẻ bịa chuyện kéo khách tới tận gốc cây. Ông Ba khỏi cần chạy quảng cáo. (S26)
- *(không lời, 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| E01 | Đường đèo núi uốn lượn chiều tà, một cây gạo cổ hoa đỏ rực bên mép vực, xe ô tô nhỏ đang leo dốc | ✓ |
| E02 | Cận cột cây số trắng đỏ ven đèo (trống chữ), bông gạo đỏ rơi trên nóc cột | ✓ |
| E03 | Hoàng cận trong xe: áo khoác hiệu, tay cầm quay, mặt hoảng dưới ánh đèn bảng điều khiển | ✓ |
| E04 | Homestay gỗ nhỏ dưới chân đèo, ruộng bậc thang, cây gạo đỏ xa xa, chị Sinh rót trà ở hiên | ✓ |
| E05 | Chị Sinh cận: áo len, khăn quàng, mặt hiền mà cứng cỏi | ✓ |
| E06 | Màn hình điện thoại phát clip kinh dị rẻ tiền: đèo đêm, bóng trắng trùm chăn dưới cây gạo, chữ đỏ (trống chữ) | ✓ |
| E07 | Homestay trống, bàn ghế xếp gọn, chị Sinh ngồi một mình nhìn điện thoại | ✓ |
| E08 | Ông Ba Gạo: nón mê, áo tơi lá, gậy tre, mặt khắc khổ, ngồi gốc cây gạo cổ nhìn xuống thung lũng; viền người mờ | ✓ |
| E09 | Phòng dựng phim đêm: cô biên tập trước hai màn hình phát đoạn phim xe chạy đèo; góc dưới phải mỗi khung có một chiếc nón mê nhỏ | ✓ |
| E10 | Nửa đêm dưới cây gạo, đèn pha xe rọi, Hoàng mặt mộc tự quay điện thoại | ✓ |

## Lịch

- LONG: Thứ Năm 18/02, 18:00 (+07).
- SH1: Thứ Năm 18/02, 19:00 (+07).
- SH2: Thứ Sáu 19/02, 11:30 (+07).
- SH3: Thứ Sáu 19/02, 19:00 (+07).
- SH4: Thứ Bảy 20/02, 11:30 (+07).
- SH5: Thứ Bảy 20/02, 19:00 (+07).
- SH6: Chủ Nhật 21/02, 11:30 (+07).
- SH7: Chủ Nhật 21/02, 19:00 (+07).
