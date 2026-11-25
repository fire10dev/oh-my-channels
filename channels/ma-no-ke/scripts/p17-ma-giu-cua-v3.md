# Dự án 17 — Ma giữ của "Chum xỉ than" (v3, 2026-11-24)

- LONG giữ nguyên theo bản hiện tại; mốc dựng và số chữ vẫn cần chỉnh để khớp yêu cầu.
- SH6 thêm một câu để đạt tối thiểu 70 chữ.
- Giữ nguyên các câu thoại, hình ảnh và cấu trúc không được nhận xét.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ông Khuông sẽ giữ được chum hay Tùng kịp lấy tiền trong két trước khi công trường bị kiểm tra?
- **Đồng hồ / cái giá:** Trước 6:00 sáng ngày thứ ba, Tùng phải nộp chum cho bảo tàng. Nếu trượt, ông Khuông giữ két tiền bớt xén của Tùng; Tùng mất khoản tiền ấy và cơ hội giấu việc làm sai.
- **Ba nấc leo thang:** Ông Khuông ngồi chắn chum — Tùng cạy nắp; ông chuyển sang giữ két — Tùng thử mã nhưng thất bại; ông đòi vật khác để canh — Tùng thử két lần cuối trước giờ kiểm tra.
- **Điểm thấp:** Két vẫn khóa, tiền không lấy được, đoàn kiểm tra sắp tới; Tùng có thể mất cả tiền lẫn công việc.
- **Cú lật:** Ông Khuông tự chọn theo chum vào bảo tàng để tiếp tục giữ nó. Ông chịu rời công trường; Tùng nộp hiện vật và gánh hậu quả chuyện bớt xén.
- **Khoảnh khắc rợn:** Trong container kín, chum đã đậy nắp tự phát ra ba tiếng ho khan; ông Khuông hỏi “Ai cho mày mở?” rồi nắp xoay về đúng vết cũ.
- **Câu kết:** “Đào được của thì báo. Không báo thì của chưa chắc có, nhưng người canh của thì chắc chắn có.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; CTA S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TUNG | Tùng, chủ thầu san nền: mũ bảo hộ trắng, áo phản quang, bụng to, bộ đàm | V02 | Adam bựa | `anull` |
| KHUONG | Ông Khuông, ma giữ của: áo dài nâu vá, khăn xếp lệch, râu bạc lưa thưa, gậy tre; ho khù khụ, lẩm cẩm, gọi ai cũng là “thằng kia” | V03 | Thiền Tâm Đức | `atempo=0.85,aecho=0.8:0.6:60:0.3` |
| BT | Cán bộ bảo tàng | V09 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"TUNG":{"preset":"Adam bựa","fx":"anull"},"KHUONG":{"preset":"Thiền Tâm Đức","fx":"atempo=0.85,aecho=0.8:0.6:60:0.3"},"BT":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | V01 | *(không lời, 2 s)* | Im lặng · tiếng cào sành rất nhỏ |
| 0:02 | V01 | *(không lời, 2 s)* | Tiếng ho khan trong chum · nhạc tắt |
| 0:04 | V02 | **TUNG**: Ai trong đó? Mở cửa ra! | Bộ đàm rè |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Hai giờ sáng, máy xúc của Tùng vừa chạm phải cái chum. Chưa kịp mừng, trong chum đã có tiếng ho. | Mõ cộc |
| 0:18 | V04 | **MN**: Chạy tiến độ, hắn nghĩ ngay đến tiền. | Máy xúc · sành chạm kim loại |
| 0:22 | V02 | **TUNG**: Tắt máy. Ai hỏi thì bảo đào trúng ống cống. Chum chuyển vào container cho tôi. | Bộ đàm rè |
| 0:30 | V01 | **MN**: Hắn tự khiêng chum vào văn phòng, khóa ba lớp. Luật bảo phải báo. Báo thì giấy khen; bán thì có nhà. Tùng chọn căn nhà trong đầu. | “BÁO: GIẤY KHEN · BÁN: NHÀ” |
| 0:42 | V05 | **MN**: Năm 1720, nhà phú hộ chôn chum vàng ở góc vườn. Gia nhân tên Khuông quỳ thề giữ của cho chủ. | Gió |
| 0:52 | V05 | **KHUONG**: Của còn thì con còn canh. | |
| 0:55 | S26 | **MN**: Dân gian gọi là ma giữ của. Đã thề thì chết rồi vẫn canh. Ai đụng vào cũng khó lấy, kể cả người kéo nó khỏi đất. | “CỦA CÒN · MA CÒN” |
| 1:07 | V03 | **KHUONG**: Hai trăm chín mươi chín năm. Đừng làm tròn. Mưa, lụt, Tây đào đường, hợp tác xã đào ao. Chẳng ai lấy được của ông chủ. | Ho khù khụ |
| 1:19 | V02 | **TUNG**: Ông canh mệt rồi. Để cháu giữ hộ. Có gì cháu chia. | |
| 1:26 | V03 | **KHUONG**: Thằng kia. Ông chủ dặn: không chia, không cúng, không mở. | |
| 1:32 | V03 | **MN**: Ông Khuông ngồi chắn chum. Tùng xoay nắp, nhấc không nổi. | Sành cọ nhẹ |
| 1:39 | V02 | **TUNG**: Ông ngồi đây thì tôi gọi người khiêng cả chum đi. | |
| 1:43 | V03 | **KHUONG**: Chum của ông chủ. Không được động. | |
| 1:48 | V06 | **MN**: Tùng lấy xà beng bẩy nắp. Ông Khuông không cản: luật gia nô bảo con chủ lấy của thì gia nhân không được ngăn. | Nắp sành bật |
| 1:58 | V07 | **MN**: Trong chum chẳng có vàng. Chỉ có xỉ than, đầy tới miệng. | Im 1 s |
| 2:05 | V03 | **KHUONG**: …Đây là đâu? Vàng ông chủ đâu? | |
| 2:11 | V05 | **MN**: Một năm sau, cậu ấm lén lấy vàng đi đánh bạc, đổ xỉ than cho đủ nặng rồi chôn lại. Ông Khuông nhìn theo, tưởng cậu chủ kiểm tra của. | |
| 2:23 | S26 | **MN**: Ông thề giữ của khỏi người ngoài. Con ông chủ lấy thì ông không được cản. Ba trăm năm qua, ông canh xỉ than. | “XỈ THAN · 300 NĂM” |
| 2:33 | V03 | **KHUONG**: Thế ông canh cái gì suốt ba trăm năm? | |
| 2:37 | S26 | **MN**: Canh xỉ than, cụ ạ. Canh rất giỏi. Không ai lấy được một cục. | |
| 2:45 | V01 | **MN**: Tùng định đập chum bán sành vụn. Đêm thứ hai, container im phăng phắc. Chum đã đậy nắp lại. | Nhạc tắt |
| 2:54 | V01 | *(không lời, 2 s)* | Ho khan ×3 · im |
| 2:56 | V01 | **KHUONG**: Ai cho mày mở? | Nắp sành xoay nửa vòng · trầm nhẹ |
| 3:00 | V01 | **KHUONG**: Của không còn. Ông phải tìm của khác mà giữ. Không giữ gì, ông không yên. | |
| 3:08 | V08 | **MN**: Sáng ra, ông Khuông ngồi trên két sắt của Tùng. Trong đó là tiền hắn bớt xén vật tư suốt ba năm. | |
| 3:16 | V02 | **TUNG**: Mở ra! Mã đúng rồi mà! | Khóa số tạch tạch · cạch, không mở |
| 3:20 | V08 | **KHUONG**: Của đã có người giữ. Không chia. Không mở. | Ho khù khụ |
| 3:27 | S26 | **MN**: Ma giữ của không phân biệt của ai. Cứ là của thì không cho ai lấy. Kể cả chủ. | |
| 3:35 | V02 | **TUNG**: Két này là của tôi. Có giấy tờ, có khóa, có mã. | |
| 3:43 | V08 | **KHUONG**: Thế đưa ông thứ khác để giữ. | |
| 3:47 | V02 | **TUNG**: Chum xỉ than bán được bao nhiêu? Tôi còn phải lo công trường. | |
| 3:53 | V08 | **MN**: Hai giờ sáng ngày thứ ba. Sáu giờ đoàn kiểm tra tới. Tùng thử mã lần cuối. Tiền vẫn nằm yên, hồ sơ bớt xén thì không. | “HẠN: 6:00 SÁNG · ĐOÀN KIỂM TRA” · tạch tạch |
| 4:04 | V02 | **TUNG**: Mở đi! Tôi nộp chum. Nghe chưa? Tôi nộp! | |
| 4:09 | V08 | **KHUONG**: Muộn rồi. Ông theo chum. Két là của mày, nhưng tiền này ông giữ. | |
| 4:15 | V09 | **MN**: Tùng đưa chum cho bảo tàng. Ông Khuông chọn theo chum vào tủ kính. Ba trăm năm giữ một thứ, ông không bỏ giữa chừng. | |
| 4:24 | V09 | **BT**: Chum sành đầu thế kỷ mười tám. Lòng chum có xỉ than. Hiện vật quý vì… nguyên vẹn. | Chữ “ĐỰNG: XỈ THAN” |
| 4:33 | V10 | **MN**: Đêm ấy, ông ngồi cạnh tủ kính. Bảo vệ định mở khóa; nghe tiếng ho liền rụt tay. Từ đó bảo tàng chưa mất món nào. | Ho khù khụ · gõ gậy nhẹ |
| 4:44 | S33 → S34 | **MN**: Đào được của thì báo. Không báo thì của chưa chắc có, nhưng người canh của thì chắc chắn có. | Rít điếu cày |
| 4:52 | B02 | **MN**: Tập sau: băng đòi nợ thuê đi tạt sơn. Rồi chính tay trùm nhận tin nhắn đòi nợ. Gốc ba bát phở. Lãi… cả cái nhà. | “TẬP SAU” · whoosh |
| 5:03 | S06 | **MN**: Bấm đăng ký đi. Két nhà mày tao chưa giữ. Đào trúng gì thì gọi tao trước. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN — Tiếng cào trong chum

- **MN**: Đêm thứ hai, container im phăng phắc. Chum đã đậy nắp lại. (V01) · pop "MA NÓ"
- **KHUONG**: Ai cho mày mở? (V01) · pop "ÔNG KHUÔNG"
- **MN**: Tiếng ho vừa dứt, cả công trường như nín thở. Rồi cái nắp tự xoay về đúng vết cũ. (V01)
- **MN**: Trong căn phòng khóa ba lớp, chẳng ai nhận đã chạm vào chum. Mà ông Khuông vẫn nhìn cái nắp như vừa bị ai phá luật trước mặt. (V01)
- *(không lời, 0.8 s)* (V01)
- **MN**: Ba trăm năm canh chum, gặp cái nắp lì hơn chủ mới. (V03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN — Đào trúng cổ vật

- **MN**: Hai giờ sáng, máy xúc của Tùng chạm phải thứ gì kêu “coong”. Đang chạy tiến độ, hắn nghĩ ngay đến tiền. (V04) · pop "MA NÓ"
- **TUNG**: Tắt máy. Ai hỏi thì bảo đào trúng ống cống. Chum này chuyển vào container cho tôi. (V02) · pop "TÙNG"
- **MN**: Luật bảo phải báo. Báo thì được giấy khen; bán thì được nhà. Tùng chọn căn nhà trong đầu. (V01)
- **MN**: Đào được gì thì báo. Còn giấu đi thì nghe chuyện này. (S26)
- *(không lời, 0.8 s)* (V04)
- **MN**: Đào cổ vật mà tính luôn tiền xây nhà. Tùng làm tiến độ nhanh nhất ở khoản tham. (V02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN — Ba trăm năm canh xỉ

- **MN**: Trong chum chẳng có vàng. Chỉ có xỉ than, đầy tới miệng. (V07) · pop "MA NÓ"
- **KHUONG**: …Đây là đâu? Vàng ông chủ đâu? (V03) · pop "ÔNG KHUÔNG"
- **MN**: Một năm sau ngày chôn, cậu ấm lén lấy vàng đi đánh bạc, đổ xỉ than vào cho đủ nặng rồi chôn lại. (V05)
- **MN**: Ông thề giữ của khỏi người ngoài. Con ông chủ lấy thì ông không được cản. Ba trăm năm qua, ông canh xỉ than. (S26)
- **MN**: Canh xỉ than, cụ ạ. Mà canh rất giỏi. Không ai lấy được một cục. (S26)
- *(không lời, 0.8 s)* (V03)
- **MN**: Ba trăm năm giữ kho, cuối cùng hàng tồn kho là tro xỉ. (V07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN — Két sắt có người giữ

- **MN**: Sáng ra, ông Khuông ngồi trên két sắt của Tùng. Trong đó là tiền hắn bớt xén vật tư suốt ba năm. (V08) · pop "MA NÓ"
- **TUNG**: Mở ra! Mã đúng rồi mà! (V02) · pop "TÙNG"
- **KHUONG**: Của đã có người giữ. Không chia. Không mở. (V08) · pop "ÔNG KHUÔNG"
- **MN**: Ma giữ của không phân biệt của ai. Cứ là của thì không cho ai lấy. Kể cả chủ. (S26)
- *(không lời, 0.8 s)* (V08)
- **MN**: Mã đúng, chủ sai. Cái két có vẻ đọc hồ sơ giỏi hơn chủ thầu. (V02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN — Hiện vật quý vì nguyên vẹn

- **MN**: Tùng đưa chum cho bảo tàng. Ông Khuông chọn theo chum vào tủ kính. Ba trăm năm giữ một thứ, ông không bỏ giữa chừng. (V09) · pop "MA NÓ"
- **BT**: Chum sành đầu thế kỷ mười tám. Lòng chum có xỉ than. Hiện vật quý vì… nguyên vẹn. (V09) · pop "CÁN BỘ BẢO TÀNG"
- **MN**: Đêm ấy, ông ngồi cạnh tủ kính. Anh bảo vệ định táy máy mở khóa; nghe tiếng ho liền rụt tay. (V10)
- *(không lời, 0.8 s)* (V10)
- **MN**: Tủ kính trưng xỉ than. Ông Khuông thì trưng nghề giữ của. (V09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER — Ai ho trong chum?

- *(không lời, 2 s)* (V01) · chữ “CONTAINER · 2:00 SÁNG”
- **MN**: Đêm thứ hai, Tùng quay lại chum. (V01) · pop "MA NÓ"
- *(không lời, 2 s)* (V01) · tiếng ho khan ×3
- **TUNG**: Ai trong đó? (V02) · pop "TÙNG"
- **MN**: Tùng khóa cửa ba lớp, vậy tiếng ho vừa rồi phát ra từ đâu? Cả đêm, không ai rời container. Sáng ra, ông Khuông ngồi trên két sắt của Tùng. Trong đó là tiền hắn bớt xén vật tư suốt ba năm. (V01/V08)
- **MN**: Tiếng cào trong chum, tiếng ho trong container, và người canh chưa chịu nghỉ. (V01)
- **MN**: Cái khóa thì kín, còn bí mật thì tự phát tiếng. (V01)
- *(cắt trước đáp án)*

### SH7 — TRAILER — Ông Khuông giữ gì?

- **MN**: Trong chum chẳng có vàng. Chỉ có xỉ than, đầy tới miệng. (V07) · pop "MA NÓ"
- **TUNG**: Ông giữ chum thì được. Két này là của tôi. Tôi có giấy tờ, có khóa, có mã. (V02) · pop "TÙNG"
- **KHUONG**: Thế đưa ông thứ khác để giữ. (V08) · pop "ÔNG KHUÔNG"
- **MN**: Sáu giờ đoàn kiểm tra sẽ đến. Tùng thử mã lần cuối, mà két vẫn không nhúc nhích. Tiền của hắn nằm trong đó, còn hồ sơ bớt xén thì ở ngay trên bàn. (V08)
- **MN**: Ông Khuông giữ của ba trăm năm; lần này ông chọn thứ nào? (V03)
- *(cắt trước đáp án)*

## Hình

Ảnh tái dùng: B02, S01, S26, S33, S34, S06.

| Mã | Cảnh | V3 dùng |
|---|---|---|
| V01 | Trong container văn phòng công trường ban đêm: bàn sắt, bản vẽ, một chum sành cổ nâu sẫm đậy nắp đặt giữa nền | ✓ |
| V02 | Tùng (mũ bảo hộ trắng, áo phản quang, bụng to, bộ đàm) cận mặt, mồ hôi | ✓ |
| V03 | Ông Khuông: áo dài nâu vá, khăn xếp lệch, râu bạc lưa thưa, gậy tre, ngồi vắt vẻo trên miệng chum; viền người hơi trong, mặt cau có | ✓ |
| V04 | Công trường san nền ban đêm, đèn pha máy xúc, gầu xúc vừa lộ một vành chum sành trong đất | ✓ |
| V05 | Tranh màu ngả nâu: sân nhà phú hộ thế kỷ 18, góc vườn có hố chôn chum, gia nhân quỳ bên cạnh | ✓ |
| V06 | Cận xà beng bẩy nắp chum sành | ✓ |
| V07 | Cực cận lòng chum: xỉ than đen vụn đầy tới miệng | ✓ |
| V08 | Góc container: két sắt to màu xanh, ông Khuông ngồi trên nóc két, gậy tre gác ngang, Tùng quỳ bấm khóa | ✓ |
| V09 | Phòng trưng bày bảo tàng tỉnh: chum sành trong tủ kính, nhãn nhỏ (trống chữ), cán bộ bảo tàng đứng cạnh | ✓ |
| V10 | Bảo tàng ban đêm tối mờ: ông Khuông ngồi cạnh tủ kính, gậy tre gõ nhẹ vào tay anh bảo vệ đang cầm chùm chìa khóa | ✓ |

## Lịch

- **LONG:** Thứ Hai 18/01 18:00 (+07).
- **SH1:** Thứ Hai 18/01 19:00.
- **SH2:** Thứ Ba 19/01 11:30.
- **SH3:** Thứ Ba 19/01 19:00.
- **SH4:** Thứ Tư 20/01 11:30.
- **SH5:** Thứ Tư 20/01 19:00.
- **SH6:** Thứ Năm 21/01 11:30.
- **SH7:** Thứ Năm 21/01 19:00.
