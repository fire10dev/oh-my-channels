# Dự án 32 — Tiền duyên “Sợi chỉ tự thắt lại” (v3, 2026-11-24)

- Rút gọn LONG, giữ ba nấc anh Lành chủ động giúp Nga và mốc xem mặt Tuấn vào tuần sau.
- Để Nga quyết định có tiếp tục nhắm tới Tuấn trước buổi xem mặt; cái giá nếu trượt là anh Lành tiếp tục mắc kẹt với lời hẹn cũ.
- Giữ điểm thấp ngay trước cú lật: Nga vẫn định gặp Tuấn, còn anh Lành nghĩ lời hẹn ba trăm năm đã bị quên.
- Cú lật đến từ việc anh Lành tự đi xem mặt Tuấn, chấp nhận Nga có thể oán trách để đưa cô bằng chứng.
- Giữ khoảnh khắc rợn ở sợi chỉ tự thắt lại; kết bằng thầy Bảy tiếp tục kiếm tiền và teaser tập sau.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Anh Lành có giúp Nga tự thoát khỏi mối duyên cũ mà không buộc cô phải trả lời lời hẹn ba trăm năm không?
- **Đồng hồ / cái giá:** Trước buổi xem mặt Tuấn vào tuần sau, Nga phải quyết định có tiếp tục nhắm tới ông ta không; nếu không kịp, anh Lành tiếp tục mắc kẹt với lời hẹn cũ, còn kẻ xấu Tuấn có thể bỏ lại thêm một người.
- **Ba nấc leo thang:** Anh Lành để Nga thử lễ cắt duyên của thầy Bảy nhưng sợi chỉ tự nối lại; anh tìm cách báo Nga nhưng cô tưởng anh ghen; anh tự đi xem mặt Tuấn, chấp nhận bị Nga giận để đưa cô bằng chứng.
- **Điểm thấp:** Nga vẫn định gặp Tuấn; anh Lành nghĩ mình đã chờ ba trăm năm chỉ để trở thành vật cản trong đời cô.
- **Cú lật:** Anh Lành chọn đi xem mặt Tuấn rồi nói ra chuyện bốn vợ âm, dù Nga có thể ghét mình. Anh trả giá bằng việc thú nhận đã thương người khác; Nga trả lời lời hẹn, để cả hai được tự do.
- **Khoảnh khắc rợn:** Kéo cắt phựt sợi chỉ đỏ; hai đầu lơ lửng rồi tự tìm nhau và thắt nút, nến không lay.
- **Câu kết:** “Duyên với tao thì khỏi cắt.” Ma Nó nhắc tập sau vào Thứ Năm.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| NGA | Nga, ba mươi tuổi, thực dụng, săn đại gia | D04 | Ngọc Huyền | `anull` |
| LANH | Anh Lành, chồng kiếp trước của Nga, hiền và thật thà | D07 | Thiền Tâm Đức | `atempo=1.05,aecho=0.8:0.5:50:0.25` |
| BAY | Thầy Bảy, phán chắc nịch, làm lễ cắt duyên lấy tiền | D05, D05b | Adam bựa | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "NGA": {"preset": "Ngọc Huyền", "fx": "anull"}, "LANH": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.05,aecho=0.8:0.5:50:0.25"}, "BAY": {"preset": "Adam bựa", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | S01 → S26 | **MN**: Lại mò vào à? Có ai bảo mày vướng tiền duyên chưa? Toàn bịa thôi. Đa số. Nhưng thỉnh thoảng… bịa trúng. | “VƯỚNG TIỀN DUYÊN?” |
| 0:12 | D01 | **BAY**: Cắt xong là hết duyên cũ. Ba mươi triệu. Không lấy chồng được, thầy hoàn tiền. | chuông nhỏ |
| 0:18 | D02 | *(không lời, 2 s)* | kéo cắt “phựt” · nhạc tắt |
| 0:20 | D02 | **MN**: Khoan. Sao hai đầu chỉ chưa rơi? | mõ cộc nhẹ |
| 0:24 | D04 | **NGA**: Em xinh, em khéo, em biết điều. Sao không ai cưới em? Chắc tại số. |
| 0:33 | D05 | **BAY**: Không phải số. Cô vướng tiền duyên. Chồng kiếp trước còn bám, ai đến gần cũng tự nhiên chán. Ba mươi triệu, thầy cắt cho. |
| 0:43 | S26 | **MN**: Thầy Bảy nói câu ấy với ba trăm cô một năm. Hỏi kỹ thì thầy có bảng giá. Hỏi duyên thì thầy có bảng giá cao hơn. |
| 0:53 | D06 → D07 | **MN**: Lần này thầy nói trúng mà không biết. Ba trăm năm trước, Nga có chồng thật: anh Lành, nông dân, hai mẫu ruộng. |
| 1:03 | D07 | **LANH**: Lúc tôi mất, cô ấy nắm tay hẹn kiếp sau gặp lại. Tôi chờ. Cô ấy đầu thai, quên sạch. Trí nhớ đâu có mục lưu chồng cũ. |
| 1:15 | D07 | **LANH**: Dưới này tôi thương một người rồi. Hỏi cưới ba mươi năm, nhà người ta bảo: “Anh còn vợ dương gian, về mà cắt đi.” Nghe tin cô ấy đi cắt duyên, tôi mừng suýt khóc. |
| 1:29 | D01 → D02 | **MN**: Thầy Bảy buộc sợi chỉ đỏ vào cổ tay Nga. Kéo đưa lên. Cắt. |
| 1:35 | D02 | *(không lời, 2 s)* | kéo cắt “phựt” · nhạc tắt |
| 1:37 | D02 | **MN**: Hai đầu chỉ không rơi. Chúng lơ lửng, chậm rãi tìm nhau rồi tự thắt thành nút chặt. Nến trên bàn không lay. |
| 1:48 | D05b | **MN**: Thầy cắt ba nghìn sợi trong mười năm. Chưa sợi nào tự nối. Phép của thầy không làm được. Lời thề ba trăm năm mới làm được. |
| 1:58 | D05 | **BAY**: Xong rồi! Cô về đi. Duyên mới sắp đến. |
| 2:01 | D04 | **NGA**: Vậy là cắt được rồi đúng không? Em đã chuyển khoản. Có giấy bảo hành không thầy? |
| 2:08 | D05 | **BAY**: Duyên là chuyện tâm linh. Bảo hành thì thầy có gói nâng cấp. |
| 2:12 | D07 | **LANH**: Lễ giả. Không đứt. Ba mươi triệu ném sông. Tôi phải giúp cô biết ông Tuấn là người thế nào trước buổi xem mặt tuần sau. |
| 2:22 | D04 | **NGA**: Em gặp Tuấn tuần sau. Anh đừng làm em mất cơ hội. Người có tiền cũng có quyền được em cân nhắc. |
| 2:31 | D07 | **LANH**: Tôi bảo cô tránh ông ấy, cô lại tưởng tôi ghen. Nếu tôi im, ba trăm năm chờ đợi chẳng giúp được ai. |
| 2:40 | D09 | **MN**: Tuần sau, Nga hẹn Tuấn ở nhà hàng. Anh Lành theo cùng, ngồi ghế trống cạnh bàn. Làm ma lâu rồi, anh mới đi xem mặt em rể. |
| 2:50 | D09 → D10 | **LANH**: Tôi thấy rồi. Ông này có gì đâu… Bốn kiếp. Bỏ vợ bốn kiếp. Bốn bà còn ngồi chờ đây. |
| 3:01 | D11 | **MN**: Nga vẫn định gặp Tuấn. Anh Lành đã thử hết, còn một cách: hiện ra nói thật, dù cô có thể ghét anh. |
| 3:10 | D07 | **LANH**: Cô có một sợi duyên, là tôi. Ông ấy có bốn sợi. Sợi nào cũng là thừng. Cô lấy ông ấy thì làm bà thứ năm. |
| 3:19 | D04 | **NGA**: Thế anh là chồng em thật à? Kiếp trước em lấy nông dân? Mấy mẫu? Có nhà gạch không? |
| 3:27 | D07 | **LANH**: Hai mẫu ruộng. Cô bảo đủ ăn. Giờ tôi không đủ cho cô nữa. Dưới này có người đang chờ tôi. |
| 3:34 | D07 | **LANH**: Tôi không nói để cô chọn tôi. Chỉ không muốn cô bước vào đó mà không biết. Cô giận cũng được. Tôi chờ đủ lâu rồi, không cần cô mắc nợ thêm. |
| 3:45 | D04 | **NGA**: Em vẫn muốn lấy người giàu. Nhưng không muốn làm bà thứ năm của ông có bốn vợ âm. Anh nói thật, lần này em tin. |
| 3:56 | D02 | **NGA**: Em trả anh lời hẹn. Anh đi đi. |
| 4:01 | D02 | *(không lời, 1 s)* | sợi chỉ tuột nút, rơi nhẹ |
| 4:02 | S26 | **MN**: Không phải thầy cắt được. Nga tự trả lời lời hẹn. Một câu thôi, không mất ba mươi triệu. |
| 4:10 | D07 | **LANH**: Cảm ơn cô. Lần này tôi không để ai phải chờ. |
| 4:15 | D07 | **MN**: Anh Lành đi về phía người đang đợi mình. Nga bỏ lịch hẹn với Tuấn. Còn ba mươi triệu thì thầy Bảy đã tiêu một phần. |
| 4:25 | D01 | **MN**: Thầy Bảy vừa có khách mới: ông Tuấn. Phán vướng tiền duyên, bốn lễ, một trăm hai mươi triệu. Gặp đúng khách. |
| 4:34 | D05 | **BAY**: Lần này thầy phán trúng thật! |
| 4:37 | S33 → S34 | **MN**: Thầy cúng cũng có lúc nói thật. Tiếc là thầy không biết lúc nào. |
| 4:43 | B02 → S34 | **MN**: Tập sau: ký túc xá, phòng 404, mấy đứa sinh viên cày game bỏ học. Có một anh ở đó từ thời bao cấp. Anh ấy học giỏi lắm. Ghét ai bỏ học. |
| 4:56 | S06 | **MN**: Bấm đăng ký đi. Duyên với tao thì khỏi cắt. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Sợi chỉ không rơi · 9:16 · 35 s

- **BAY**: Cắt xong là hết duyên cũ. Ba mươi triệu. Không lấy chồng được, thầy hoàn tiền. (D01) · pop “THẦY CẮT DUYÊN”
- **MN**: Khoan. Sao hai đầu chỉ chưa rơi? (D02)
- **MN**: Kéo cắt phựt. Hai đầu chỉ lơ lửng, chậm rãi tìm nhau rồi tự thắt thành nút chặt. Nến trên bàn không lay. (D02)
- **MN**: Phép của thầy không làm được. Lời thề ba trăm năm mới làm được. (D05b)
- **MN**: Thầy bán bảo hành tâm linh. Cái chỉ này tự gia hạn luôn. (D05)
- *(không lời, 0.8 s)* (D02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Ba trăm cô một năm · 36 s

- **BAY**: Cô vướng tiền duyên. Chồng kiếp trước còn bám. Cắt đi. Ba mươi triệu. (D05) · pop “THẦY BẢY”
- **MN**: Thầy Bảy nói câu ấy với ba trăm cô một năm. Hỏi kỹ thì thầy có bảng giá. (S26)
- **NGA**: Em xinh, em khéo, em biết điều. Sao không ai cưới em? Chắc tại số. (D04) · pop “NGA”
- **MN**: Lần này thầy nói trúng mà không biết. Ba trăm năm trước, Nga có chồng thật. (D07)
- **MN**: Thỉnh thoảng bịa trúng. Bảng giá thì thầy lúc nào cũng nhớ. (S26)
- *(không lời, 0.8 s)* (D05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Anh chồng cũng muốn cắt · 9:16 · 37 s

- **LANH**: Tôi chờ ba trăm năm. Cô ấy đầu thai, quên sạch. Trí nhớ đâu có mục lưu chồng cũ. (D07) · pop “ANH LÀNH”
- **LANH**: Dưới này tôi thương một người rồi. Nhà người ta bảo: “Anh còn vợ dương gian, về mà cắt đi.” (D07)
- **LANH**: Nghe tin cô ấy đi cắt duyên, tôi mừng suýt khóc. Tôi chỉ mong lần này cắt trúng. (D07)
- **MN**: Thầy lấy ba mươi triệu. Anh Lành mới là người mong sợi chỉ đứt nhất. (D02)
- **MN**: Ba trăm năm chờ mà vẫn phải xếp hàng sau cái kéo của thầy. (D05b)
- *(không lời, 0.8 s)* (D02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRAILER · Ai nối sợi chỉ? · 9:16 · 30 s

- **BAY**: Cắt xong là hết duyên cũ. Ba mươi triệu. Không lấy chồng được, thầy hoàn tiền. (D01) · pop “LỄ CẮT DUYÊN”
- **MN**: Kéo cắt phựt. Hai đầu chỉ không rơi. (D02)
- **MN**: Chúng lơ lửng, chậm rãi tìm nhau… (D02)
- **MN**: Nến trên bàn không lay. Thầy bán dịch vụ cắt duyên, hay bán luôn hợp đồng gia hạn? (D02)
- **MN**: Vậy ai nối sợi chỉ lại? (D02)
- **MN**: Một câu phán của thầy có giá ba mươi triệu. Còn một lời hẹn cũ thì đã chờ ba trăm năm. (D07)
- *(không lời, 0.8 s)* (D02)

### SH5 — TRỌN · Bốn sợi thành thừng · 9:16 · 37 s

- **MN**: Anh Lành đi xem mặt hộ Nga. Quanh ghế Tuấn có bốn bóng đàn bà, mỗi người một thời, ngồi im. (D09 → D10) · pop “BỐN VỢ ÂM”
- **LANH**: Bốn kiếp. Ông này bỏ vợ bốn kiếp. Bốn bà còn ngồi chờ đây. (D07)
- **LANH**: Cô có một sợi duyên, là tôi. Ông ấy có bốn sợi. Sợi nào cũng là thừng. (D07)
- **MN**: Một người hứa chờ ba trăm năm. Một người để bốn người chờ. Chọn ai cũng phải coi lịch sử. (D11)
- **MN**: Tuấn có bốn vợ âm, còn thầy Bảy có bốn lượt thu tiền. (D01)
- *(không lời, 0.8 s)* (D10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN · Trả lời lời hẹn · 9:16 · 36 s

- **LANH**: Tôi không nói để cô chọn tôi. Dưới này có người đang chờ tôi. (D07) · pop “CHỒNG KIẾP TRƯỚC”
- **NGA**: Em vẫn muốn lấy người giàu. Nhưng không muốn làm bà thứ năm của ông có bốn vợ âm. Anh nói thật, lần này em tin. (D04)
- **LANH**: Tôi không muốn cô mắc nợ thêm. Tôi chờ đủ lâu rồi. (D07)
- **NGA**: Em trả anh lời hẹn. Anh đi đi. (D02)
- **MN**: Một câu thôi, không mất ba mươi triệu. (S26)
- **MN**: Ba trăm năm đợi một câu. Ít ra lần này không tính lãi. (D02)
- *(không lời, 0.8 s)* (D02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER · Tuấn có bao nhiêu vợ? · 9:16 · 32 s

- **MN**: Nga tưởng mình chỉ vướng một sợi tiền duyên. (D04) · pop “NGA”
- **LANH**: Tôi đi xem mặt ông Tuấn giúp cô. (D09) · pop “ANH LÀNH”
- **MN**: Rồi anh nhìn quanh ghế Tuấn. Bốn bóng đàn bà, mỗi người một thời, ngồi im. (D10)
- **LANH**: Bốn kiếp. Ông này bỏ vợ bốn kiếp. (D07)
- **MN**: Cô có một sợi duyên. Ông ấy có bốn sợi. Sợi nào cũng là…
- **MN**: Bốn người ngồi im quanh ghế, còn tên người thứ năm thì chưa ai nói. (D10)
- *(không lời, 0.8 s)* (D10)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng ở v3 |
|---|---|---|
| D01 | Điện thờ nhỏ của thầy Bảy: nến đỏ, chuông, khay lễ; Nga chìa cổ tay buộc chỉ đỏ; bản sau ông Tuấn ngồi chỗ ấy | Có |
| D02 | Cực cận cổ tay buộc sợi chỉ đỏ, kéo kề; bản 2 hai đầu chỉ lơ lửng tìm nhau thắt nút; bản 3 nút chỉ tuột rơi | Có |
| D03 | Nhà hàng sang: Nga đối diện đại gia xem đồng hồ, đứng dậy bỏ đi | Không |
| D04 | Nga cận: váy hàng hiệu, túi xách to, trang điểm kỹ, mặt ngọt ngào hoặc ngơ ngác | Có |
| D05 | Thầy Bảy cận: áo lụa đỏ, nhẫn to, ngón tay chỉ, mặt phán chắc nịch | Có |
| D06 | Tranh màu ngả nâu: làng quê xưa, ruộng lúa, đôi vợ chồng trẻ nông dân đứng bờ ruộng | Có |
| D07 | Anh Lành áo nâu, khăn đóng cũ, mặt hiền; viền người mờ; ngồi bờ ruộng cõi âm | Có |
| D05b | Thầy Bảy tái mét, mồ hôi trán, kéo còn trên tay, nhìn sợi chỉ | Có |
| D09 | Nhà hàng: Nga hẹn Tuấn, anh Lành mờ ngồi ghế trống cạnh bàn | Có |
| D10 | Quanh ghế Tuấn bốn bóng đàn bà mờ ngồi im, trang phục bốn thời | Có |
| D11 | Phòng ngủ đêm: Nga ngồi giường ôm gối, anh Lành mờ đứng góc phòng, ánh trăng | Có |

## Lịch

- **LONG:** Thứ Năm 11/03, 18:00 (+07).
- **SH1:** Thứ Năm 11/03, 19:00.
- **SH2:** Thứ Sáu 12/03, 11:30.
- **SH3:** Thứ Sáu 12/03, 19:00.
- **SH4:** Thứ Bảy 13/03, 11:30.
- **SH5:** Thứ Bảy 13/03, 19:00.
- **SH6:** Chủ Nhật 14/03, 11:30.
- **SH7:** Chủ Nhật 14/03, 19:00.
