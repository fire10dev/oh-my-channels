# Dự án 33 — Ma ký túc xá “Học hộ ra đúng sức mình” (v3, 2026-11-24)

- Rút lời thoại LONG còn khoảng 580 chữ, giữ đồng hồ 23:59, ba nấc leo thang và cái giá Kiên phải trả.
- Giữ cú lật do anh Tư chủ động chọn: viết lại bài của Kiên bằng sức học thật của cậu, đánh đổi cuốn sổ duy nhất.
- Bổ sung PUNCH riêng và lời thoại để mỗi short đạt 70–110 chữ.
- Giữ khoảnh khắc rợn ở bóng người cúi viết, kết đùa, teaser tập sau và CTA kiểu Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Anh Tư có khiến Kiên tự làm bài trước 23:59, hay dịch vụ học hộ của Kiên sẽ tiếp tục sống nhờ gian lận?
- **Đồng hồ / cái giá:** 23:59 là hạn giao bài và nhận tiền; trượt hạn, Kiên phải hoàn tiền cho khách, mất khách và khoản thu. Cái giá đặt lên Kiên, không đe dọa trẻ em.
- **Ba nấc leo thang:** Anh Tư cho wifi phòng 404 tắt lúc 22:00; Kiên chuyển sang phát mạng điện thoại. Anh Tư làm bài in bị viết lại; Kiên định giao qua bản mềm. Cửa không mở được; Kiên vẫn định giao nốt bài rồi mới tính.
- **Điểm thấp:** Còn vài phút đến hạn, Kiên vẫn chọn giữ tiền và giao bài thuê.
- **Cú lật:** Anh Tư tự chọn viết lại bài của Kiên trước, đúng trình độ thật của cậu, rồi dùng cuốn sổ năm 1985 làm giấy nháp. Anh đánh đổi kỷ vật duy nhất còn giữ, đổi lại Kiên phải nộp bài do chính mình làm.
- **Khoảnh khắc rợn:** Đèn dầu tự cháy trên bàn trống; bóng người cúi viết hiện trên tường. Tiếng bút sột soạt đều đều đến hai giờ.
- **Câu kết:** Ma Nó cà khịa chuyện khỏi thi vì đã chết, rồi giới thiệu tập sau về đoàn chữa lành và đống rác trong rừng.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| KIEN | Kiên, sinh viên phòng 404; áo phông game, tai nghe đeo cổ, mắt thâm, nói nhanh kiểu dân buôn | K03, K04 | Adam bựa | `anull` |
| TU | Anh Tư, ma học bá khóa 1985; sơ mi trắng cộc tay sờn, quần âu, kính tròn, bút máy kẹp túi áo; nói chậm rõ như giảng bài | K05, K06, K07, K10 | Thiền Tâm Đức | `atempo=1.03,aecho=0.8:0.5:50:0.25` |
| VY | Vy, sinh viên mua bài | K08, K09 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "KIEN": {"preset": "Adam bựa", "fx": "anull"}, "TU": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.03,aecho=0.8:0.5:50:0.25"}, "VY": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | K01 | *(không lời, 2 s)* | Bốn màn hình game · tiếng game và bàn phím |
| 0:02 | K01 | *(không lời, 1 s)* | Đồng hồ chuyển 21:59 → 22:00 · bốn màn hình tắt phụt · quạt trần cót két |
| 0:03 | K02 | *(không lời, 2 s)* | Đèn dầu chưa cháy · mõ cộc nhẹ |
| 0:05 | S01 → S26 | **MN**: Lại mò vào à? Còn đi học không? Có thuê ai làm bài hộ bao giờ chưa? | Mõ cộc |
| 0:11 | S26 | **MN**: Phòng 404 có anh Tư ghét học hộ. Còn Kiên biến việc ấy thành nghề. | |
| 0:17 | K03 | **MN**: Kiên năm ba. Ngày ngủ, đêm cày game. Tay trái làm bài hộ cả trường. | Tin nhắn ting |
| 0:25 | K04 | **KIEN**: Tiểu luận năm trăm nghìn, in đóng quyển giao tận phòng. Chép mạng, ghép đoạn, đổi chữ. Máy quét đạo văn bó tay. | Bàn phím cơ · máy in |
| 0:36 | S26 | **MN**: Ba mươi khách. Tối nay bài nào cũng phải giao trước mười hai giờ. | “HẠN 23:59” |
| 0:43 | K03 | **KIEN**: Giao xong đủ tiền học phí tháng. Trễ thì hoàn tiền. Ba mươi người đòi cùng lúc, em bán trà đá luôn. | Ting liên tục |
| 0:52 | K05 | **MN**: Năm 1985, anh Tư là học bá. Mất điện thì đèn dầu, hết dầu thì cột đèn đường. | |
| 1:00 | S26 | **MN**: Mùa đông, anh ốm sốt. Ký túc xá thiếu thuốc. Anh mất trên chiếc giường này. Người mất ở đâu, ở lại đó. Ở chung thì theo nếp nhà. | “Ở CHUNG THÌ THEO NẾP” |
| 1:12 | K06 | **TU**: Mười giờ tắt máy. Học đến hai giờ. Bốn mươi năm rồi, tôi vẫn giữ nếp ấy. | |
| 1:19 | K01 | **MN**: Đúng mười giờ, điện với wifi tắt. Cửa không mở được. Không ai khóa. | Tắt phụt · tay nắm cửa |
| 1:27 | K02 | **MN**: Bàn học bỏ trống nhiều năm. Đèn dầu tự cháy. | Đèn xì nhẹ · nhạc tắt |
| 1:34 | K07 | **MN**: Trên tường, bóng người cúi viết. Bàn trước mặt trống không. | Ngòi bút sột soạt |
| 1:42 | K07 | **MN**: Tiếng bút đều đều đến hai giờ. Trong phòng chẳng ai ngồi ở bàn ấy. | Sột soạt · im 1 s |
| 1:50 | K06 | **TU**: Các cậu học đi. Tôi chờ. | |
| 1:54 | K03 | **KIEN**: Wifi chết thì phát hotspot. Mạng trường còn. Em không làm bài cho em, nhưng cứu đơn thì được. | Điện thoại ting |
| 2:02 | K06 | **TU**: Mạng còn. Bài chưa chắc còn là bài của cậu. | |
| 2:07 | K08 | **MN**: Sáng ra, bài của Vy bị viết lại bằng mực tím. Đúng nét chữ, đúng lỗi chính tả, đúng cả những gì Vy biết. | |
| 2:17 | K09 | **VY**: Anh Kiên, bài được bốn điểm. Cô bảo đúng văn em, không ai nghi. Bốn điểm thì thuê anh làm gì? Hoàn tiền nhé! | Tin nhắn ting |
| 2:27 | K06 | **TU**: Bài học hộ phải ra đúng sức người học. Tôi chỉ sửa cho đúng. | |
| 2:33 | S26 | **MN**: Ba mươi bài bị viết lại. Khách đòi tiền. Kiên chuyển sang bản mềm, tưởng anh Tư hết cách. | “30 KHÁCH · ĐÒI TIỀN” |
| 2:42 | K03 | **KIEN**: Bản mềm em giao qua mạng. Anh sửa giấy, em sửa file. Chốt đơn là chốt đơn. | Ting |
| 2:49 | K01 → K06 | **MN**: Đêm sau, cửa vẫn kẹt, wifi vẫn chết. Còn mười phút. Kiên có thể tự làm bài hoặc giao nốt để giữ tiền. | “23:49” · đồng hồ |
| 3:00 | K04 | **KIEN**: Em giao nốt rồi tính. Ba mươi khách, ba mươi khoản tiền. Em không học bốn năm để tối nay làm bài cho mình. | |
| 3:08 | K06 | **TU**: Cậu chọn rồi. Để tôi chọn phần còn lại. | |
| 3:13 | K05 → K06 | **MN**: Anh Tư lấy cuốn sổ duy nhất còn giữ từ năm tám lăm. Những bài học, những thứ anh không mang theo được. | Đèn dầu xì |
| 3:23 | K06 | **TU**: Có đứa thi hộ, chiếm suất đi nước ngoài của tôi. Tôi ở lại. Rồi mùa đông ấy đến. Cuốn sổ này là thứ duy nhất còn lại. | |
| 3:36 | K06 → K08 | **MN**: Anh không sửa ba mươi bài. Anh viết bài của Kiên trước, từng câu đúng sức học thật. Rồi xé sổ làm giấy nháp. | Giấy xé · bút sột soạt |
| 3:47 | K04 | **KIEN**: Anh xé sổ thật à? | |
| 3:50 | K06 | **TU**: Cậu mất tiền, tôi mất sổ. Ít nhất bài này là của cậu. | |
| 3:57 | K03 | **KIEN**: Còn hai phút. Em xóa bài thuê, nộp bài này. Bốn điểm cũng được. | Ting · đồng hồ |
| 4:04 | S26 | **MN**: Dịch vụ học hộ tắt tối đó. Kiên hoàn tiền, mất khách, mất khoản thu. Lần đầu, cậu nộp bài của mình. | “23:59 · ĐÃ NỘP” |
| 4:13 | K10 | **MN**: Một học kỳ, bốn tiếng mỗi đêm. Wifi vẫn chết lúc mười giờ. Cuối kỳ, Kiên đỗ hết bằng sức mình. | Quạt trần · bút |
| 4:22 | K04 → K06 | **KIEN**: Anh Tư, sao hồi đó không thi lại? | |
| 4:26 | K06 | **TU**: Có thi. Suất đi học mất rồi. Tôi nghĩ sang năm làm lại. Rồi mùa đông ấy đến. | |
| 4:33 | S33 → S34 | **MN**: Tao khỏi thi. Tao chết rồi. Chúng mày còn sống thì mở sách đi. Đừng thuê người học hộ, anh Tư trực ca đấy. | Rít điếu cày |
| 4:43 | B02 → S26 | **MN**: Thứ Năm: đoàn “chữa lành” vào rừng thiền trên đống rác của mình. Rừng cũng muốn được chữa lành. | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:53 | S06 | **MN**: Bấm đăng ký đi. Không thì anh Tư kiểm tra bài, tao kiểm tra mày bấm chưa. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **MN**: Mười giờ. Phòng 404 tắt điện, tắt wifi, cửa không mở được. **KIEN**: Wifi chết thì phát hotspot. Mạng trường còn. Em không làm bài cho em, nhưng cứu đơn thì được. (K01 → K03) · pop “KIÊN”
- **MN**: Trên bàn học bỏ trống, đèn dầu tự cháy. Trên tường, bóng người cúi viết. **TU**: Các cậu học đi. Tôi chờ. (K02 → K07 → K06)
- **MN**: Thế là nhà trường mất wifi, còn anh Tư vẫn có mặt điểm danh. Ngồi bàn nào thì không ai dám hỏi. (K07)
- *(Lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (K07)

### SH2 — TRỌN

- **MN**: Kiên làm bài hộ ba mươi người, chưa học hộ mình buổi nào. **KIEN**: Tiểu luận năm trăm nghìn, in đóng quyển giao tận phòng. Chép mạng, ghép đoạn, đổi chữ. Máy quét đạo văn bó tay. (K03 → K04) · pop “KIÊN”
- **MN**: Đúng mười giờ, wifi phòng 404 chết. **KIEN**: Wifi chết thì phát hotspot. Mạng trường còn. Em không làm bài cho em, nhưng cứu đơn thì được. (K01 → K03)
- **TU**: Mạng còn. Bài chưa chắc còn là bài của cậu. (K06)
- **MN**: Cậu cứu được đơn hàng, còn bài làm thì sắp được người khác cứu hộ. Mô hình kinh doanh đúng là có ma chống lưng. (K03)
- *(Lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (K03)

### SH3 — TRỌN

- **MN**: Vy thuê bài, nhận về đúng bài của Vy. Cả lỗi chính tả cũng đúng. **VY**: Anh Kiên, bài được bốn điểm. Cô bảo đúng văn em, không ai nghi. Bốn điểm thì thuê anh làm gì? Hoàn tiền nhé! (K08 → K09) · pop “VY”
- **TU**: Bài học hộ phải ra đúng sức người học. Tôi chỉ sửa cho đúng. (K06)
- **MN**: Đúng người, đúng văn, đúng lỗi. Chỉ có điểm số là không đúng kỳ vọng khách hàng. (K09)
- *(Lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (K08)

### SH4 — TRỌN

- **MN**: Kiên còn hai phút. Giao bài thuê để giữ tiền, hay tự nộp bài do mình làm? **KIEN**: Em giao nốt rồi tính. Ba mươi khách, ba mươi khoản tiền. (K03 → K04) · pop “CÒN 2 PHÚT”
- **TU**: Cậu chọn rồi. Để tôi chọn phần còn lại. **MN**: Anh Tư xé cuốn sổ duy nhất còn giữ, viết lại bài của Kiên. (K06 → K08)
- **MN**: Người ta bảo làm bài hộ thì phải có tâm. Anh Tư nghe xong, lấy luôn giấy của mình ra làm bài hộ. (K06)
- *(Lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (K08)

### SH5 — TRỌN

- **MN**: Anh Tư học giỏi nhất trường. Một suất đi nước ngoài bị người thi hộ cướp mất. (K05 → K06) · pop “ANH TƯ”
- **TU**: Tôi ở lại. Cứ nghĩ sang năm làm lại. Rồi mùa đông ấy đến. (K06)
- **MN**: Bốn mươi năm sau, anh bắt Kiên học. Cuối kỳ, cậu đỗ hết bằng sức mình. (K10)
- **MN**: Hóa ra suất đi nước ngoài mất một lần, nhưng tiết học bốn tiếng mỗi đêm thì được bao trọn học kỳ. Đúng là học phí không hoàn lại. (K10)
- *(Lặng 0.8 s)*
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER

- **MN**: Đúng mười giờ, bốn màn hình tắt phụt. Cửa không mở được. Đèn dầu tự cháy trên bàn bỏ trống. (K01 → K02) · pop “22:00”
- **MN**: Trên tường, bóng người cúi viết. Tiếng bút đều đều đến hai giờ sáng. **TU**: Các cậu học đi. Tôi chờ. (K07 → K06)
- **MN**: Phòng không có ai ngồi đó. Vậy bài tập trên bàn được viết bằng tay của ai? (K07)
- **MN**: Còn người thuê bài thì tưởng mình tìm được cách né hạn nộp. (K03)

### SH7 — TRAILER

- **MN**: Còn hai phút đến hạn. Kiên vẫn chọn giao bài thuê để giữ tiền. (K03) · pop “KIÊN”
- **TU**: Cậu chọn rồi. Để tôi chọn phần còn lại. **MN**: Anh Tư lấy cuốn sổ duy nhất còn giữ từ năm tám lăm. (K06 → K05)
- **MN**: Cuốn sổ là thứ duy nhất còn lại của anh. Bài của Kiên sắp được viết lại, còn ba mươi khách vẫn đòi tiền. (K06 → K08)
- **MN**: Nhưng anh Tư sẽ phải đánh đổi điều gì để cậu ấy tự nộp bài? (K08)

## Hình

Tận dụng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| K01 | Phòng ký túc xá đêm, giường tầng, bốn bàn với màn hình game, mì gói, chai nước; bản sau tối om, quạt trần | ✓ |
| K02 | Bàn học gỗ cũ phủ bụi, đèn dầu kiểu cũ; bản sau đèn đang cháy | ✓ |
| K03 | Kiên giữa phòng với hai laptop, điện thoại sáng, tiểu luận in sẵn | ✓ |
| K04 | Kiên cận; bản sau gục trên giáo trình | ✓ |
| K05 | Ảnh đen trắng phòng ký túc xá 1985, sinh viên học dưới đèn dầu | ✓ |
| K06 | Anh Tư sơ mi trắng sờn, kính tròn, bút máy; ngồi trên nóc tủ hoặc tháo kính lau | ✓ |
| K07 | Tường vôi vàng dưới đèn dầu, bóng người cúi viết; bàn trước tường trống | ✓ |
| K08 | Tiểu luận in bị gạch, viết lại bằng tay nét chữ con gái | ✓ |
| K09 | Vy cầm bài điểm 4, gọi điện, mặt bực | ✓ |
| K10 | Bốn sinh viên học quanh đèn dầu; bóng anh Tư trên tường | ✓ |
| K11 | Hành lang ký túc xá, bảng điểm và Kiên đứng nhìn | Không dùng |

## Lịch

- **LONG:** Thứ Hai 15/03, 18:00 (+07).
- **SH1 — TRỌN:** Thứ Hai 15/03, 19:00.
- **SH2 — TRỌN:** Thứ Ba 16/03, 11:30.
- **SH3 — TRỌN:** Thứ Ba 16/03, 19:00.
- **SH4 — TRỌN:** Thứ Tư 17/03, 11:30.
- **SH5 — TRỌN:** Thứ Tư 17/03, 19:00.
- **SH6 — TRAILER:** Thứ Năm 18/03, 11:30.
- **SH7 — TRAILER:** Thứ Năm 18/03, 19:00.
