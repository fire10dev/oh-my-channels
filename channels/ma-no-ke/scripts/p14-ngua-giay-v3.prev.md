# Dự án 14 — Ngựa giấy “Đình công khóa Tết” (v3, 2026-11-24)

- Rút gọn LONG xuống 560–600 chữ lời thoại và chỉnh mốc theo nhịp khoảng 3,2 chữ/giây.
- Bổ sung một cú đùa chốt riêng cho mỗi short TRỌN trước câu dẫn link.
- Mở rộng cả bảy shorts lên 70–110 chữ, tận dụng câu thoại LONG.
- Giữ đồng hồ giao thừa, cái giá của Thoa, ba nấc leo thang và cú lật do Thoa tự chọn trả giá.
- Giữ khoảnh khắc rợn ở tiếng vó hụt nhịp; Ma Nó không báo trước cú lật.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Thoa có sửa đủ hai vạn con ngựa lỗi trước giao thừa để đàn ngựa chịu rời xưởng không?
- **Đồng hồ / cái giá:** Giao thừa là hạn chót; nếu trượt, Thoa mất sáu chục triệu lời, lỗ cả mùa và đàn ngựa không thể đi thăm người thân dưới âm.
- **Ba nấc:** Thoa vá con ngựa tro nhưng nó vẫn đứng lại → dọa đốt đàn nhưng ngựa không sợ lửa → tự sửa cả lô trong kho và làm thêm hai vạn chân giấy.
- **Điểm thấp:** Đêm ba mươi, chân ngựa còn chất kín kho; Thoa tưởng mình không kịp trước giao thừa.
- **Cú lật:** Thoa tự chọn làm đúng lời mẹ dặn, trả giá bằng công sức và khoản lời; cô hóa đủ chân cho từng con.
- **Khoảnh khắc rợn:** Hai giờ sáng, vó ngựa gõ ba nhịp rồi hụt; ngựa tro từ lò hóa vàng đứng giữa kho.
- **Câu kết:** “Bấm đăng ký đi. Đồ mã thiếu chân thì còn sửa. Người sống thiếu lương tâm, tao chưa biết dán bằng gì.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| THOA | Chị Thoa, chủ xưởng, tóc kẹp càng cua, tạp dề dính hồ | G02, G04, G06, G07, G11 | Ngọc Huyền | `atempo=1.05` |
| NGUA | Ngựa Hồng, ngựa giấy đầu đàn, một mắt vẽ | G03, G08, G09, G10 | Adam bựa | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.4:30:0.2` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"THOA":{"preset":"Ngọc Huyền","fx":"atempo=1.05"},"NGUA":{"preset":"Adam bựa","fx":"asetrate=48000*0.95,aresample=48000,aecho=0.8:0.4:30:0.2"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | G01 | *(không lời, 2.4 s)* | vó ngựa: cộp, cộp, cộp… hụt · nhạc tắt |
| 0:02 | G02 | **THOA**: Ai trong kho đấy? | tiếng bước chân |
| 0:05 | G03 | **NGUA**: Thiếu chân. Trả lại. | mõ cộc nhẹ |
| 0:08 | B02 → S01 | **MN**: Lại mò vào à? Sắp Tết rồi, đặt vàng mã thì nhớ kiểm hàng. Có món xuống dưới còn phải bảo hành đấy. | mõ cộc |
| 0:15 | S26 | **MN**: Xưởng nhà chị Thoa ba chục năm trong ngõ. Mẹ chị dựng lên, mất năm ngoái. Để lại đúng một câu. | kéo cắt giấy |
| 0:22 | G05 | **MN**: “Làm đồ cho người âm phải kỹ hơn đồ cho người sống. Vì người âm không trả hàng được.” | chữ câu mẹ dặn |
| 0:30 | G02 | **THOA**: Mẹ em kỹ quá nên ba chục năm vẫn cái xưởng con con. Năm nay em làm gọn hơn. | |
| 0:37 | G06 | **THOA**: Mỗi con bớt một chân sau. Hồ thay băng dính. Mắt vẽ một bên. Đứng nghiêng thì ai đòi hai mắt? | băng dính xé |
| 0:45 | G04 | **THOA**: Hai vạn con. Mỗi con bớt một nan, bớt hồ, bớt công. Tính ra lời thêm sáu chục triệu. | máy tính bấm |
| 0:54 | S26 | **MN**: Dân gian bảo đồ mã xuống dưới thành đồ thật, đúng như lúc làm. Làm ba chân thì xuống ba chân. Còn tiền thì lên đủ sáu chục triệu. | |
| 1:03 | G07 | **MN**: Hai mươi ba tháng Chạp, Thoa lấy một con trong lô năm nay, hóa cho mẹ. | lửa hóa vàng |
| 1:10 | G02 | **THOA**: Mẹ cưỡi về chơi Tết nhé. Ngựa xưởng nhà mình đấy. | |
| 1:15 | G01 | **MN**: Hai giờ sáng. Trong kho có tiếng vó trên nền xi măng. | cộp, cộp, cộp… hụt · nhạc tắt |
| 1:23 | G08 | **MN**: Thoa bật đèn. Hai vạn con đứng nguyên. Giữa kho có một con màu tro, còn mùi khói. Nó đứng trên ba chân. | im 2 s |
| 1:33 | G03 | **NGUA**: Tôi là ngựa lô năm nay. Cụ nhà chị trèo lên ba lần, ngã ba lần. Cụ không trách. Cụ bảo: “Về xưởng mà đòi.” | |
| 1:43 | G02 | **THOA**: Người âm không trả hàng được cơ mà! | |
| 1:47 | G03 | **NGUA**: Người âm không trả được. Hàng thì tự về được. | |
| 1:51 | G09 | **MN**: Sáng hai mươi tư, ngõ kín ngựa tro. Ngựa ba chân, một mắt, băng dính bong. Không con nào đá ai. Chúng xếp hàng như khách bảo hành không lấy số. | vó lệch nhịp |
| 2:02 | G10 | **NGUA**: Chậm nhất giao thừa. Chúng tôi còn phải đi thăm người nhà. | |
| 2:08 | G02 | **THOA**: Được. Chị vá con này trước. Thêm chân, vẽ mắt, dán hồ. Xong là đi nhé. | hồ quệt |
| 2:16 | G03 | **NGUA**: Chân mới cứng. Chưa qua kiểm định. | |
| 2:20 | G02 | **THOA**: Thế chị đốt cả đám cho nhanh. | |
| 2:24 | G03 | **NGUA**: Chúng tôi đã qua lửa rồi. Đốt lại chỉ thêm mùi khét. | |
| 2:29 | G11 | **MN**: Hai lần thử. Một lần vá, một lần dọa. Đàn ngựa vẫn đứng. Sáu chục triệu lời nhìn chị Thoa như vừa nghe tiếng vó hụt. | nhạc Tết xa |
| 2:39 | G02 | **THOA**: Còn bao lâu? | |
| 2:41 | G03 | **NGUA**: Giao thừa. Không đủ chân, chúng tôi ở lại. Người nhà dưới kia lại đợi. | |
| 2:48 | G11 | **MN**: Thoa nhìn lô hàng trong kho. Có thể đổ cho thợ. Có thể đóng cửa. Nhưng mẹ chị từng làm từng con cho tử tế. | |
| 2:58 | G02 | **THOA**: Thợ nghỉ đi. Lô trong kho để chị sửa. Hai vạn cái chân còn thiếu, chị làm đủ. | kéo cắt giấy |
| 3:07 | G11 | **MN**: Bảy đêm. Thoa sửa từng con, làm thêm hai vạn chân giấy, quệt hồ, vẽ móng. Sáu chục triệu lời bay sạch. Cả mùa thành lỗ. | hồ quệt · giấy sột soạt |
| 3:19 | G11 | **THOA**: Còn bao nhiêu? | |
| 3:21 | G03 | **NGUA**: Một núi. | |
| 3:23 | G11 | **THOA**: Chị hỏi giờ. | |
| 3:25 | G03 | **NGUA**: Gần giao thừa. | |
| 3:28 | G08 | **MN**: Đêm ba mươi, chân ngựa còn chất kín kho. Thoa gần như không đứng nổi. Con ngựa tro vẫn đứng giữa nền, ba chân. | nhạc tắt |
| 3:39 | G02 | **THOA**: Chị làm không kịp rồi. | |
| 3:42 | G03 | **NGUA**: Cụ nhà chị vẫn chờ. | |
| 3:45 | G02 | **THOA**: Chị biết. Cầm chỗ chân này. Phần còn lại, chị tự làm. | |
| 3:51 | G07 | **MN**: Thoa chọn hóa từng chiếc chân đã làm đúng. Tàn lửa bay ra ngõ, đậu xuống những con ngựa tro. | lửa · giấy sột soạt |
| 4:02 | G08 | **MN**: Con giữa kho đứng đủ bốn chân. Nó cúi đầu một cái. Rồi tan. | gió nhẹ |
| 4:09 | G12 | **MN**: Năm sau, cửa xưởng treo tấm biển bằng nét chữ mẹ chị: “Đủ bốn chân.” | chữ “ĐỦ BỐN CHÂN” |
| 4:17 | S33 → S34 | **MN**: Tao thì đi bộ. Nhưng năm nào con cháu đốt cho tao, tao cũng đếm chân. | rít điếu cày |
| 4:24 | B02 | **MN**: Thứ Hai, tập mới: một sạp bùa may mắn, đá phong thủy giá cắt cổ. Cô hồn chợ thấy… thích quá. | “TẬP SAU · THỨ HAI” |
| 4:34 | S06 | **MN**: Bấm đăng ký đi. Đồ mã thiếu chân thì còn sửa. Người sống thiếu lương tâm, tao chưa biết dán bằng gì. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN — Công đoàn ngựa mã (9:16, 35 s)

- **NGUA**: Thiếu chân. Trả lại. (G03) · pop “NGỰA HỒNG”
- **THOA**: Ai trong kho đấy? (G02)
- **NGUA**: Tôi là ngựa lô năm nay. Đại diện anh em ngựa mã, tôi đòi đủ bốn chân. Tôi phát biểu thay cả đàn, vì đồng nghiệp tôi mới nhúc nhích là lại mất thăng bằng. (G03)
- **THOA**: Người âm không trả hàng được cơ mà! (G02)
- **NGUA**: Người âm không trả được. Hàng thì tự về được. Tới tận cửa xưởng, xếp hàng nghiêm chỉnh, còn lịch sự hơn khách đổi nồi chiên. (G03)
- **NGUA**: Công đoàn xin chốt: bốn chân là quyền lợi tối thiểu. Thiếu một chân thì khỏi bắt chúng tôi chạy chỉ tiêu. (G03)
- *(không lời, 0.8 s)* (G03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN — Sáu chục triệu lời (9:16, 34 s)

- **THOA**: Mỗi con bớt một chân sau. Hai vạn con, lời thêm sáu chục triệu. (G06)
- **MN**: Làm ba chân thì xuống ba chân. Còn tiền thì lên đủ sáu chục triệu. (S26)
- **THOA**: Đốt thành tro rồi, ai đếm chân. (G04)
- **MN**: Có người đếm. Đếm đúng tới giao thừa. (G09)
- **THOA**: Chị tính cả rồi: chân thiếu thì khỏi mua giấy, hồ ít thì khỏi lau bàn. Kế toán nghe xong chắc muốn thưởng nóng. (G04)
- **MN**: Sáu chục triệu lời nhìn chị Thoa như vừa nghe tiếng vó hụt. (G11)
- **THOA**: Mỗi con bớt một chân, mà chuyện tới tận cửa. Cái này gọi là tiết kiệm có phí giao hàng. (G06)
- *(không lời, 0.8 s)* (G03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN — Tiếng vó hụt một nhịp (9:16, 36 s)

- *(không lời, 2 s)* (G01) · chữ “2 GIỜ SÁNG”
- **MN**: Trong kho có tiếng vó trên nền xi măng. (G01)
- *(không lời, 2 s)* (G01) · SFX cộp, cộp, cộp… hụt · pop “NGỰA HỒNG”
- **MN**: Thoa bật đèn. Hai vạn con đứng nguyên. Giữa kho có một con màu tro, còn mùi khói. Nó đứng trên ba chân. (G08)
- **THOA**: Mẹ em bảo cẩn thận rồi. Em còn tưởng mẹ lo xa. (G08)
- **NGUA**: Cụ nhà chị trèo lên ba lần, ngã ba lần. Cụ không trách. Cụ bảo: “Về xưởng mà đòi.” (G03)
- **MN**: Tiếng vó thiếu một nhịp. Có món bảo hành, còn hóa đơn thì nằm trong đống tro. (G08)
- *(không lời, 0.8 s)* (G08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN — Hàng tự về được (9:16, 35 s)

- **THOA**: Người âm không trả hàng được cơ mà! (G02)
- **NGUA**: Người âm không trả được. Hàng thì tự về được. (G03) · pop “NGỰA HỒNG”
- **MN**: Sáng hai mươi tư, ngõ kín ngựa tro. Xếp hàng như khách bảo hành không lấy số. (G09)
- **NGUA**: Chậm nhất giao thừa. Chúng tôi còn phải đi thăm người nhà. (G03)
- **THOA**: Một con đứng trước cửa còn được, cả đàn thì chị phải xin thêm chỗ đậu. (G02)
- **MN**: Không con nào đá ai. Xếp hàng còn ngay ngắn hơn mấy người sống chen mua vàng. (G09)
- **NGUA**: Chúng tôi chỉ cần đủ chân để kịp chuyến thăm Tết. Vé thì không cần, nhưng hạn vẫn có. (G10)
- *(không lời, 0.8 s)* (G09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN — Bảy đêm làm chân (9:16, 36 s)

- **THOA**: Thợ nghỉ đi. Lô trong kho để chị sửa. Hai vạn cái chân còn thiếu, chị làm đủ. (G02)
- **MN**: Sáu chục triệu lời bay sạch. Cả mùa thành lỗ. (G11)
- **NGUA**: Còn bao nhiêu? (G03) · pop “NGỰA HỒNG”
- **THOA**: Chị hỏi giờ. (G11)
- **NGUA**: Gần giao thừa. (G03)
- **THOA**: Chị đã trót tính lời bằng chân người khác. Giờ ngồi dán từng cái, mới hiểu chân giấy còn đỡ mỏi hơn chân mình. (G11)
- **MN**: Bảy đêm, một núi chân giấy, một ấm trà nguội. Tết này chị Thoa có thêm nghề mới: chuyên viên phục hồi chức năng cho ngựa mã. (G11)
- *(không lời, 0.8 s)* (G11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER — Ai đang đứng trong kho? (9:16, 31 s)

- *(không lời, 2 s)* (G01) · SFX vó ngựa cộp, cộp, cộp… hụt · pop “NGỰA HỒNG”
- **THOA**: Ai trong kho đấy? (G02)
- **NGUA**: Thiếu chân. Trả lại. (G03)
- **MN**: Thoa bật đèn. Hai vạn con đứng nguyên. Trừ một con màu tro, còn mùi khói. (G08)
- **THOA**: Con này chị vừa hóa cho mẹ tối qua. Nó về đòi bảo hành thật à? (G08)
- **MN**: Giữa hai vạn con, chỉ một con đứng trước mặt chị. Tiếng vó ban nãy đã thiếu đúng một nhịp. (G08)
- **THOA**: Nếu nó về đây, chắc dưới kia không còn chỗ nào để viết phiếu khiếu nại. (G02)
- *(không lời, 0.8 s)* (G08)
- **MN**: Bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER — Kịp trước giao thừa không? (9:16, 32 s)

- **NGUA**: Chậm nhất giao thừa. Chúng tôi còn phải đi thăm người nhà. (G10) · pop “NGỰA HỒNG”
- **THOA**: Thợ nghỉ đi. Lô trong kho để chị sửa. Hai vạn cái chân còn thiếu, chị làm đủ. (G02)
- **MN**: Đêm ba mươi, chân ngựa còn chất kín kho. Thoa gần như không đứng nổi. (G11)
- **THOA**: Chị làm không kịp rồi. (G02)
- **NGUA**: Cụ nhà chị vẫn chờ. (G03)
- **MN**: Hạn chót đang tới. Cô ấy có đủ sức làm tiếp, hay để cả đàn ngựa ở lại? (G11)
- **THOA**: Chị biết cụ chờ. Nhưng cái núi chân này thì chẳng biết xem đồng hồ. (G11)
- *(không lời, 0.8 s)* (G08)
- **MN**: Cô ấy sẽ làm gì? Bản đầy đủ, link dưới. (S06)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

Vẽ mới, 16:9. Ảnh đánh dấu ✓ là dùng trong v3.

| Mã | Cảnh | Dùng |
|---|---|---|
| G01 | Kho vàng mã tối, hàng ngựa giấy đỏ xếp sát nhau, ánh trăng qua cửa thông gió | ✓ |
| G02 | Chị Thoa tóc kẹp càng cua, tạp dề dính hồ, đứng trên cầu thang cầm đèn pin | ✓ |
| G03 | Cận ngựa giấy đỏ bạc màu, một mắt vẽ, ba chân, dáng nghiêm như đang phát biểu | ✓ |
| G04 | Xưởng ban ngày, thợ dán giấy, ngựa, nhà lầu, xe hơi giấy | ✓ |
| G05 | Ảnh cũ ngả màu, bà cụ ngồi dán ngựa giấy | ✓ |
| G06 | Tay Thoa bẻ bó nan tre, cuộn băng dính bên cạnh | ✓ |
| G07 | Chiều cuối năm, sân sau, chậu hóa vàng, ngựa đỏ đang cháy | ✓ |
| G08 | Kho sáng đèn, giữa kho là ngựa màu tro đứng ba chân | ✓ |
| G09 | Ngõ nhỏ đêm, hàng ngựa tro khập khiễng xếp hàng tới cửa xưởng | ✓ |
| G10 | Cận mặt ngựa lỗi, một mắt, băng dính bong, nan tre chọc ra | ✓ |
| G11 | Đêm 30, Thoa giữa núi chân ngựa giấy, mắt thâm, ấm trà nguội | ✓ |
| G12 | Biển gỗ cũ trên cửa xưởng, chừa trống chỗ chữ viết tay | ✓ |

## Lịch

- **LONG:** Thứ Năm 07/01, 18:00 (+07).
- **SH1:** Thứ Năm 07/01, 19:00.
- **SH2:** Thứ Sáu 08/01, 11:30.
- **SH3:** Thứ Sáu 08/01, 19:00.
- **SH4:** Thứ Bảy 09/01, 11:30.
- **SH5:** Thứ Bảy 09/01, 19:00.
- **SH6:** Chủ Nhật 10/01, 11:30.
- **SH7:** Chủ Nhật 10/01, 19:00.
