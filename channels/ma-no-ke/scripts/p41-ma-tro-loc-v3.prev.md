# Dự án 41 — Ma trộm lộc “Bốn mươi cái hạn” (v3, 2026-11-24)

- Rút lời LONG về khoảng 560–600 chữ và dồn nhịp vào ba lần ông Tư thử can thiệp.
- Làm rõ hạn chót Giỗ Tổ và cái giá nếu Tú tiếp tục móc túi.
- Giữ cú lật do ông Tư chủ động chọn, với chiếc găng là cái giá ông phải trả.
- Thêm câu đùa PUNCH cho các short TRỌN và mở rộng SH7 vào đúng độ dài.
- Giữ khoảnh khắc rợn trong phòng trọ, kết châm biếm và teaser P42 đúng lịch.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ông Tư Móc có khiến Tú trả lại bốn mươi cái hạn trước Giỗ Tổ mà không tự phá luật của mình không?
- **Đồng hồ / cái giá:** Tú có ba tháng, từ hội đền tháng Giêng đến lễ hội Giỗ Tổ, để dừng tay và trả ví. Nếu trượt, cái hạn thứ bốn mươi sẽ tới ở lễ hội kế tiếp; ông Tư mất cơ hội sửa món nợ nghề cũ.
- **Ba nấc leo thang:** Ông Tư cảnh báo Tú nhưng bị gạt đi; ông chỉ quầy trả ví nhưng Tú vẫn chạy; ông chọn đặt chiếc găng vào ví cuối cùng để luật chuyển hạn sang Tú.
- **Điểm thấp:** Tú nghe bốn mươi tiếng thở phào, căn phòng nặng xuống, nhưng vẫn cười rằng chỉ là xui xẻo.
- **Cú lật:** Ông Tư tự đặt chiếc găng nghề vào ví cuối cùng và đưa ví ra trước mặt Tú. Tú tự nhặt và nói “của đi thay người”, khiến hạn chuyển sang mình. Ông Tư mất chiếc găng quý nhất.
- **Khoảnh khắc rợn:** Trong phòng trọ tối, bốn mươi tiếng thở phào vọng tới từ bốn mươi hướng; căn phòng nặng xuống như có ai chất gánh lên vai Tú.
- **Câu kết:** Ông Tư mất găng, Tú mất nghề; Ma Nó nhắc người xem giữ ví và đừng nhặt tiền rơi ở đền.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TU | Ông Tư Móc, ma móc túi già thời Pháp | L02, L03 | Thiền Tâm Đức | `atempo=0.95,aecho=0.8:0.5:50:0.2` |
| LE | Tú “Lẹ”, kẻ móc túi trẻ | L04, L05, L10, L11, L12 | Adam bựa | `anull` |
| THUC | Bà Thục, khách đi lễ | L06, L07 | Ngọc Huyền | `atempo=0.98` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"TU":{"preset":"Thiền Tâm Đức","fx":"atempo=0.95,aecho=0.8:0.5:50:0.2"},"LE":{"preset":"Adam bựa","fx":"anull"},"THUC":{"preset":"Ngọc Huyền","fx":"atempo=0.98"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2 s)* | Nhạc tài liệu động vật, trống hội xa |
| 0:02 | L02 | **TU**: Mùa lễ hội. Đàn người kéo về đền. Và cùng với đàn người… là kẻ săn mồi.<br>**TU**: Kia rồi. Một con non. Chưa biết mình sắp nhặt phải cái gì. | “MÙA LỄ HỘI” · mõ cộc |
| 0:11 | S01 → S26 | **MN**: Lại mò vào à? Giữ ví chưa? Chuyện hôm nay để người trong nghề kể. Nghề móc túi. Ông ấy làm từ thời Tây. | Mõ cộc |
| 0:19 | L03 | **TU**: Tôi là Tư Móc. Móc túi từ năm một nghìn chín trăm ba mươi. Chết rồi vẫn giữ nghề nhìn. Hôm nay: Tú “Lẹ”. | Nhạc tài liệu |
| 0:29 | L04 | **TU**: Tháng Giêng, mùa hội đền. Loài này di cư về nơi đông người. Một ngày tốt, nó móc được bốn mươi cái ví.<br>**LE**: Lễ hội là mùa vàng. Người ta mải khấn, ai giữ ví? | “40 CÁI VÍ / MỘT NGÀY” · lễ hội đông |
| 0:42 | L03 | **TU**: Ba tháng nữa là Giỗ Tổ. Tú còn một mùa để dừng tay, trả ví và thoát cái hạn thứ bốn mươi. Nếu trượt, hạn ấy sẽ đến ở lễ hội kế tiếp. | “HẠN: GIỖ TỔ” · trống xa |
| 0:52 | L03 | **TU**: Tôi từng móc ví ở cửa đền. Người mất ví chỉ nói: “Của đi thay người.” Tôi giữ cái ví. Từ đó, nghề nhìn của tôi không còn yên. | |
| 1:03 | L03 → L04 | **TU**: Nấc một. Tôi bảo Tú: mấy gói tiền trong ví không phải lộc. Đó là hạn người ta gửi đi.<br>**LE**: Ví là ví. Tiền là tiền. Ma mà cũng làm tư vấn tài chính à?<br>**TU**: Cá thể non thường không đọc thời tiết. Mùa lễ không chỉ có tiền rơi. | “NẤC 1 · CẢNH BÁO” · mõ cộc |
| 1:21 | L06 | **TU**: Có người để gói tiền ở cửa đền rồi đi thẳng, không ngoái lại.<br>**THUC**: Năm nay tôi hạn tam tai. Gửi nó đi. Ai nhặt thì người ấy mang.<br>**TU**: Dân gian dặn: tiền rơi ở đền, đừng nhặt. Nhặt tiền là nhặt hạn. | Đồng xu leng keng · “NHẶT TIỀN = NHẶT HẠN” |
| 1:39 | L04 → L07 | **TU**: Năm nay đông quá, gói giải hạn còn nằm trong ví. Tú không đợi.<br>**THUC**: Mất ví rồi… thôi. Của đi thay người.<br>**TU**: Bốn mươi khổ chủ. Bốn mươi lần tặc lưỡi. Câu ấy gửi theo cái hạn. | Ví lạch xạch · “40 LẦN” |
| 1:55 | L03 → L04 | **TU**: Nấc hai. Tôi chỉ quầy tìm đồ thất lạc. Tú nhìn quầy, nhìn đống ví, rồi chọn chạy.<br>**LE**: Trả lại thì khác gì tự khai? Hạn nào mà chẳng hết. | Nhạc tăng nhẹ |
| 2:10 | L08 | **TU**: Đêm. Hang ổ. Bốn mươi cái ví đổ đầy sàn.<br>**TU**: Gói giấy đỏ rơi ra. Gói đồng xu. Tú cầm một gói lên.<br>**TU**: Từ xa, ngoài cửa sổ, một tiếng thở phào. Như ai vừa đặt được gánh nặng xuống. | Ví đổ lạch xạch · nhạc tắt · đồng xu leng keng · một tiếng thở phào xa |
| 2:26 | L08 → L05 | **TU**: Rồi tiếng thứ hai. Rồi bốn mươi tiếng, từ bốn mươi hướng.<br>**TU**: Căn phòng nặng xuống, như có ai chất thêm đồ lên vai nó.<br>**LE**: Chắc thiếu ngủ. Bốn mươi cái ví, đếm cũng mệt.<br>**TU**: Bốn mươi người nhẹ đi. Tú cười một mình trong căn phòng nặng như đá. | Thở phào nhiều lớp · im 2 s · nhạc tắt |
| 2:48 | L03 → L09 | **TU**: Nấc ba. Tôi có thể im lặng như lần trước. Nhưng tôi chọn mất thứ cuối cùng còn giữ được.<br>**TU**: Chiếc găng theo tôi từ thời Tây. Tôi tự đặt nó vào chiếc ví cuối cùng, rồi đặt ví trước mặt Tú. | “CHIẾC VÍ CUỐI CÙNG” |
| 3:04 | L05 → L03 | **LE**: Của đi thay người. Đồ bỏ thì tôi nhặt.<br>**TU**: Tôi mất chiếc găng. Cái hạn chuyển sang kẻ vừa nhận nó. Luật vẫn nguyên. | Trống dồn |
| 3:15 | L10 → L11 | **TU**: Ngày thứ nhất, thủng săm ba lần. Ngày thứ hai, điện thoại rơi cống. Ngày thứ ba, chó cả xóm đuổi. Ngày thứ tư, người yêu chặn liên lạc.<br>**LE**: Sao xui thế này?!<br>**TU**: Ngày thứ mười một, ra chợ, Tú bị móc mất ví. Thiên nhiên luôn có cách cân bằng. | Săm xì hơi · nước · chó sủa |
| 3:36 | L03 | **TU**: Bà Thục hết tam tai. Năm ấy bà khỏe như vâm. Còn Tú vẫn chưa bỏ nghề. | |
| 3:45 | L04 → L12 | **TU**: Ba tháng sau, Giỗ Tổ. Tú quay lại lễ hội. Cái hạn thứ bốn mươi: bị bắt quả tang ngay lúc đang móc túi.<br>**LE**: Em… em nhặt được…<br>**TU**: Cái hạn ấy, dân gian gọi là… công an. | Trống hội · còi bảo vệ · mõ cộc |
| 4:01 | L03 | **TU**: Chín mươi năm làm nghề. Chưa nhặt đồng nào ở cửa đền. Đấy là bí quyết sống lâu. Còn chết thì… chuyện khác. | Nhạc tài liệu kết |
| 4:14 | S33 → S34 | **MN**: Đi lễ thì giữ ví. Mất ví thì đừng buồn, biết đâu mày vừa gửi được cái hạn đi. Còn thấy tiền rơi ở đền… thì đi tiếp. | Rít điếu cày |
| 4:26 | B02 → S34 | **MN**: Thứ Năm: một tay bom hàng đặt mười suất gà rán giao tới biệt thự bỏ hoang lúc nửa đêm. Biệt thự ấy… có người nhận hàng. | “TẬP SAU · THỨ NĂM” · tiếng chuông cũ |
| 4:38 | S06 | **MN**: Bấm đăng ký đi. Cái này nhặt được, không có hạn. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN

- **TU**: Mùa lễ hội. Đàn người kéo về đền. Và cùng với đàn người… là kẻ săn mồi. (L01)
- **TU**: Kia rồi. Một con non. Chưa biết mình sắp nhặt phải cái gì. (L02) · pop “TÚ LẸ”
- **LE**: Lễ hội là mùa vàng. Người ta mải khấn, ai giữ ví? (L05)
- **TU**: Một ngày tốt, nó móc được bốn mươi cái ví. (L04)
- **TU**: Mùa lễ không chỉ có tiền rơi. (L03)
- **TU**: Con non này săn ví, nhưng xem ra ví mới là thứ đang săn nó. (L04)
- ***(không lời, 0.8 s)*** (L04)
- **MN**: Nghề này mà gặp hạn thì sao? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 — TRỌN

- **TU**: Có người để gói tiền ở cửa đền rồi đi thẳng. Không ngoái lại. (L06)
- **THUC**: Năm nay tôi hạn tam tai. Gửi nó đi. Ai nhặt thì người ấy mang. (L07) · pop “BÀ THỤC”
- **TU**: Dân gian dặn: tiền rơi ở đền, đừng nhặt. Nhặt tiền là nhặt hạn. (L03)
- **LE**: Ví là ví. Tiền là tiền. Ma mà cũng làm tư vấn tài chính à? (L05) · pop “TÚ LẸ”
- **TU**: Tư vấn miễn phí. Phí dịch vụ thì tính bằng hạn. (L03)
- ***(không lời, 0.8 s)*** (L03)
- **MN**: Còn ai nhặt phải cái hạn? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 — TRỌN

- **TU**: Bốn mươi khổ chủ. Bốn mươi lần tặc lưỡi. Câu ấy gửi theo cái hạn. (L03)
- **THUC**: Mất ví rồi… thôi. Của đi thay người. (L07) · pop “BÀ THỤC”
- **TU**: Tú nhìn quầy tìm đồ thất lạc, nhìn đống ví, rồi chọn chạy. (L04)
- **LE**: Trả lại thì khác gì tự khai? Cứ đợi xem. Hạn nào mà chẳng hết. (L05) · pop “TÚ LẸ”
- **TU**: Quầy nhận đồ thất lạc có cả ví của người làm nghề thất lạc lương tâm. (L04)
- ***(không lời, 0.8 s)*** (L04)
- **MN**: Cái hạn có hết không? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 — TRỌN

- **TU**: Đêm. Hang ổ. Bốn mươi cái ví đổ đầy sàn. (L08)
- **TU**: Gói giấy đỏ rơi ra. Gói đồng xu. Tú cầm một gói lên. (L09)
- **TU**: Từ xa, ngoài cửa sổ, một tiếng thở phào. Như ai vừa đặt được gánh nặng xuống. (L08)
- **TU**: Rồi tiếng thứ hai. Rồi bốn mươi tiếng, từ bốn mươi hướng. (L08)
- **TU**: Căn phòng nặng xuống, như có ai chất thêm đồ lên vai nó. (L05)
- ***(không lời, 0.8 s)*** (L08) · thở phào tắt
- **TU**: Bốn mươi người nhẹ đi. Còn Tú thì nặng cả phòng. (L05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 — TRỌN

- **TU**: Nấc ba. Tôi có thể im lặng như lần trước. Nhưng tôi chọn mất thứ cuối cùng còn giữ được. (L03)
- **TU**: Chiếc găng theo tôi từ thời Tây. Tôi tự đặt nó vào chiếc ví cuối cùng, rồi đặt ví trước mặt Tú. (L03) · pop “ÔNG TƯ MÓC”
- **LE**: Của đi thay người. Đồ bỏ thì tôi nhặt. (L05) · pop “TÚ LẸ”
- **TU**: Tôi mất chiếc găng. Cái hạn chuyển sang kẻ vừa nhận nó. Luật vẫn nguyên. (L03)
- **TU**: Thiên nhiên luôn có cách cân bằng. (L11)
- **TU**: Tú nhận ví miễn phí, kèm gói hạn không bảo hành. (L11)
- ***(không lời, 0.8 s)*** (L03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 — TRAILER

- **TU**: Ba tháng nữa là Giỗ Tổ. Tú còn một mùa để dừng tay, trả ví và thoát cái hạn thứ bốn mươi. (L03)
- **TU**: Bốn mươi người nhẹ đi, còn Tú cười một mình trong căn phòng nặng như đá. (L08)
- **TU**: Tôi có thể im lặng như lần trước. Nhưng tôi chọn mất thứ cuối cùng còn giữ được. (L03)
- **TU**: Chiếc găng theo tôi từ thời Tây. Tôi tự đặt nó vào chiếc ví cuối cùng… (L03) · pop “ÔNG TƯ MÓC”
- ***(không lời, 0.8 s)*** (L09)
- **MN**: Cái gì sẽ chuyển sang Tú? Bản đầy đủ, link dưới. (S34)

### SH7 — TRAILER

- **TU**: Ba tháng. Ba mươi chín cái hạn. Con non vẫn chưa bỏ nghề. (L04) · pop “TÚ LẸ”
- **TU**: Tháng Ba, Giỗ Tổ, nó tới lễ hội tiếp theo. (L04)
- **TU**: Cái hạn thứ bốn mươi. Nặng nhất. (L12)
- **TU**: Bị bắt quả tang ngay lúc đang móc túi. (L12)
- **LE**: Em… em nhặt được… (L12)
- **TU**: Cái hạn ấy, dân gian gọi là… (L12)
- ***(không lời, 0.8 s)*** (L12) · còi bảo vệ cắt ngang
- **MN**: Ai gọi tên cái hạn cuối cùng? Bản đầy đủ, link dưới. (S34)

## Hình

| Mã | Cảnh | V3 dùng |
|---|---|---|
| L01 | Cổng đền ngày hội nhìn từ trên cao, đám đông đông nghịt, cờ hội, khói hương | LONG, SH1 |
| L02 | Cận bàn tay đeo găng cũ chỉ xuống đám đông, giữa đám đông một thanh niên mũ lưỡi trai | LONG, SH1 |
| L03 | Ông Tư Móc: áo ba-đờ-xuy sờn, mũ nồi, ria mép, găng tay, ống nhòm, ngồi trên mái ngói đền; viền mờ | LONG, SH1, SH2, SH3, SH5, SH6 |
| L04 | Tú len lỏi trong đám đông lễ hội, áo khoác nhiều túi, không thấy thao tác cụ thể | LONG, SH1, SH3, SH7 |
| L05 | Tú “Lẹ” cận: mũ lưỡi trai, nhai kẹo cao su, mắt láo liên; bản khom người, bản tái mét | LONG, SH1, SH2, SH3, SH4, SH5 |
| L06 | Cửa đền: bà Thục lén thả một gói giấy đỏ nhỏ có đồng xu xuống bậc đá rồi đi thẳng | LONG, SH2 |
| L07 | Bà Thục cận: áo dài nhung, khăn voan, tay cầm tràng hạt, mặt nhẹ nhõm | LONG, SH2, SH3 |
| L08 | Phòng trọ đêm chật: bốn mươi cái ví đổ đầy sàn, cửa sổ tối, Tú ngồi giữa | LONG, SH4, SH6 |
| L09 | Cận các gói giấy đỏ nhỏ gói đồng xu rơi ra từ ví | LONG, SH4, SH5, SH6 |
| L10 | Bộ bốn khung hài: săm xe thủng, điện thoại rơi cống, bị chó đuổi, màn hình tin nhắn bị chặn | LONG |
| L11 | Chợ đông: một bàn tay khác rút ví khỏi túi quần Tú, Tú không biết | LONG, SH5 |
| L12 | Cận bàn tay Tú bị bàn tay bảo vệ lễ hội nắm chặt, tay áo đồng phục | LONG, SH7 |
| B02 | Ma Nó | LONG |
| S01/S26/S33/S34 | Ma Nó | LONG, SH1–SH7 |
| S06 | Ma Nó mờ + cutout | LONG |

## Lịch

- **LONG:** Thứ Hai 12/04, 18:00 (+07)
- **SH1:** Thứ Hai 12/04, 19:00 (+07)
- **SH2:** Thứ Ba 13/04, 11:30 (+07)
- **SH3:** Thứ Ba 13/04, 19:00 (+07)
- **SH4:** Thứ Tư 14/04, 11:30 (+07)
- **SH5:** Thứ Tư 14/04, 19:00 (+07)
- **SH6:** Thứ Năm 15/04, 11:30 (+07)
- **SH7:** Thứ Năm 15/04, 19:00 (+07)
