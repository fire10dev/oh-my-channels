# Dự án 46 — Nghê đá “Hòm công đức chuyển đổi số” (v3, 2026-11-24)

- Làm rõ câu hỏi trung tâm: Lộc có thoát khỏi đền trước khi gà gáy mà không mất hai triệu cuối cùng không?
- Thêm hạn chót và cái giá: nghê phải về bệ trước tiếng gà; nếu không giữ được lộc đền, nghê mất quyền canh cổng.
- Làm rõ ba nấc của Lộc: bẩy hòm, tìm cách lách qua nghê, rồi bật điện thoại soi đường; mỗi cách đều khiến anh ta kẹt sâu hơn.
- Để Lộc tự chọn bật đèn và trả hai triệu; nghê tự chọn nhường lối khi tiền đã vào quỹ đền.
- Dồn khoảnh khắc rợn vào bệ trống, dấu chân trên rêu và tiếng đá nghiến ngay trước cú lật.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Lộc có thoát khỏi đền trước khi gà gáy mà không mất hai triệu cuối cùng không?
- **Đồng hồ / cái giá:** Trước tiếng gà gáy, nghê phải trở về bệ. Nếu không giữ được lộc của đền, nghê mất quyền canh cổng; nếu giao dịch thành công, Lộc mất hai triệu cuối cùng.
- **Ba nấc leo thang:** Lộc bẩy hòm để lấy tiền nhưng chỉ thấy mã QR; thử lách qua cổng nhưng nghê chặn lối; nước liều là bật điện thoại soi đường, khiến ứng dụng nhận diện và xác nhận khoản chuyển.
- **Điểm thấp:** Nghê đứng chắn lối ra, Lộc hết đường chạy, điện thoại còn đúng hai triệu.
- **Cú lật:** Lộc chủ động bật đèn điện thoại để tìm đường. Màn hình quét mã; ứng dụng mở bằng nhận diện khuôn mặt, ngón tay run chạm xác nhận. Lộc mất hai triệu; nghê chọn nhường lối vì tiền đã vào quỹ đền.
- **Khoảnh khắc rợn:** Lộc nhìn ra cổng: bệ đá còn đó nhưng nghê đã biến mất; rêu vẫn in dấu bốn bàn chân. Tiếng đá nghiến vang lên sau lưng.
- **Câu kết:** “Bấm đăng ký đi. Không cần quét mã. Ngón tay mày giữ cho chắc.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| LOC | Lộc, thua cá độ, áo khoác đen, mũ trùm, mắt đỏ vì thức, run tay | N04, N05 | Adam bựa | atempo=1.03 |
| TU | Cụ từ giữ đền | N08 | Thiền Tâm Đức | atempo=0.90 |
| NO | Chị chủ nợ, giọng điện thoại | Không hình | Ngọc Huyền | anull |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "LOC": {"preset": "Adam bựa", "fx": "atempo=1.03"}, "TU": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.90"}, "NO": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | N01 | *(không lời, 1.5 s)* | côn trùng · nhạc tắt |
| 0:02 | N02 | *(không lời, 1.5 s)* | đá nghiến “gừ…” xa |
| 0:04 | N03 | *(không lời, 1 s)* | ting |
| 0:05 | S01 → S26 | **MN**: Lại mò vào à? Đêm nay có người vào đền tìm tiền. Chỉ là… trong hòm chẳng còn tiền. | “HÒM CÔNG ĐỨC” · mõ cộc |
| 0:12 | N04 | **MN**: Lộc thua cá độ ba trăm triệu. Điện thoại rung cả ngày, tin nhắn đòi nợ không cần xem cũng thuộc. | tin nhắn dồn |
| 0:20 | N05 | **LOC**: Thắng lại thì trả. Hòm công đức rằm vừa rồi chắc đầy. Lấy tạm một ít. |  |
| 0:27 | S26 | **MN**: Câu “thắng lại thì trả” là câu cửa miệng của người thua. Người thắng thì thường bận… không nói câu đó. | “THẮNG LẠI THÌ TRẢ” |
| 0:37 | N01 | **MN**: Cổng đền làng có đôi nghê đá. Ba trăm năm đứng gác. Trẻ con trèo lên chơi, người lớn xoa đầu xin may. | chim · trẻ con cười |
| 0:46 | N06 | **MN**: Người ta bảo nghê giữ lộc của đền. Kẻ gian bước qua, nghê biết. Năm ngoái đền chuyển đổi số. Nghê chưa được tập huấn. | “NGHÊ GÁC CỔNG ĐỀN” |
| 0:57 | N07 | **MN**: Nửa đêm, Lộc trèo vào. Xà beng chạm hòm. Một nhịp, hai nhịp… | côn trùng · gỗ cọt kẹt |
| 1:04 | N07 | **LOC**: Gãy rồi! | xà beng gãy “keng” |
| 1:07 | N07 | **MN**: Nắp bật. Bên trong trống trơn, chỉ dán một mã QR. Hòm công đức bây giờ cũng làm việc văn phòng: tiền mặt đã nộp ngân hàng. | “HÒM RỖNG · CHỈ CÓ MÃ QR” |
| 1:18 | N08 | **TU**: Đền chuyển đổi số từ năm ngoái. Ai muốn bỏ tiền mặt thì chiều nào tôi cũng mang nộp ngân hàng. Hòm để cho đẹp. |  |
| 1:28 | S26 | **MN**: Lộc mất xà beng. Đền mất một miếng sơn. Chưa bên nào thấy có lời. | cộc |
| 1:35 | N07 | **MN**: Lộc định quay ra. Sau lưng, tiếng đá nghiến trầm xuống. Gừ… gừ… như một con thú lớn vừa trở mình. | nhạc tắt · đá nghiến |
| 1:44 | N01 → N02 | **MN**: Cổng vẫn có hai bệ. Nhưng bệ trái trống không. Rêu còn in bốn dấu chân. | im 2 s |
| 1:53 | N09 | **MN**: Nghê bước qua sân. Chậm. Nặng. Gạch rung dưới chân. Lộc lách bên trái, nghê chắn. Lộc lùi bên phải, nghê cũng đã đứng ở đó. | thịch · đá rạn |
| 2:03 | N05 | **LOC**: Con… con cho tôi ra. Tôi chưa lấy được đồng nào! |  |
| 2:09 | N06 | **MN**: Nghê nhìn mã QR. Nó không hiểu mã là gì. Nó chỉ biết cái đó thuộc về đền. Ngoài cổng, gà sắp gáy. Nghê còn phải về bệ. | gừ… · gà xa |
| 2:20 | N05 | **MN**: Lộc hết đường. Điện thoại còn hai triệu cuối cùng. Nghê đứng chắn lối. Không có ai tới cứu; trong sân chỉ có tiếng thở và tiếng đá. | “CÒN 2.000.000” · nhạc tắt |
| 2:30 | N03 | **MN**: Lộc bật đèn pin soi đường. Màn hình lia qua mã. Ứng dụng ngân hàng mở bằng nhận diện khuôn mặt. Tay run, chạm đúng “xác nhận”. | ting |
| 2:40 | N10 | **MN**: Hai triệu cuối cùng vào quỹ đền. Lộc không biết. Anh ta chỉ biết cổng đang trống. | “CHUYỂN KHOẢN THÀNH CÔNG” |
| 2:48 | N09 | **MN**: Nghê nghiêng mình nhường lối. Tiền đã về đền; người công đức thì nghê không chặn. Lộc chạy một mạch, không ngoái lại. | bước chân chạy · đá nghiến nhỏ dần |
| 2:58 | N11 | **MN**: Sáng ra, Lộc quay lại xem có ai báo công an chưa. Cụ từ đang viết bảng: “Ông Lộc, hai triệu đồng.” | chim sáng · chổi quét |
| 3:06 | N05 | **LOC**: Hai triệu của tôi… |  |
| 3:10 | N08 | **TU**: Cậu Lộc tu tâm rồi. Đêm hôm còn vào đền công đức. |  |
| 3:16 | Không hình | **NO**: Lộc à, chị đọc bảng công đức rồi. Có tiền công đức thì có tiền trả chị nhé. | lọc điện thoại |
| 3:24 | S33 → S34 | **MN**: Đền giờ quét mã cả rồi, đừng mang xà beng. Mang điện thoại thôi. Mà mang điện thoại thì… cẩn thận ngón tay. | rít điếu cày |
| 3:36 | S33 | **MN**: Thứ Hai: một đại gia săn thuốc trường thọ, nghe cò dẫn vào chợ ma lúc nửa đêm. Ở đó bán tuổi thọ. Giá rẻ. Nhưng kèm điều kiện. | “TẬP SAU · THỨ HAI” · whoosh |
| 3:49 | S06 | **MN**: Bấm đăng ký đi. Không cần quét mã. Ngón tay mày giữ cho chắc. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRAILER: Cổng đền thiếu một con nghê (9:16, 30–40 s)

- **MN**: Cổng đền có hai bệ. Đếm xem mấy con nghê. (N01) · pop “NGHÊ ĐÂU?”
- *(không lời, 1.5 s)* (N02)
- **MN**: Rêu trên bệ còn in bốn dấu chân. Nhưng con nghê thì không thấy đâu. (N02)
- **MN**: Lộc đang ở trong đền. Sau lưng vừa có tiếng đá nghiến. (N07)
- **MN**: Nó đi chậm. Nặng. Và lối ra chỉ có một. (N09)
- **MN**: Cổng đền làng có đôi nghê đá. Ba trăm năm đứng gác. Trẻ con trèo lên chơi, người lớn xoa đầu xin may. (N01)
- **MN**: Con nghê đang ở đâu? (N01)

### SH2 — TRỌN: Thắng lại thì trả (9:16, 30–40 s)

- **MN**: Lộc thua cá độ ba trăm triệu. (N04) · pop “LỘC”
- **LOC**: Thắng lại thì trả. Hòm công đức rằm vừa rồi chắc đầy. (N05)
- **MN**: Câu “thắng lại thì trả” là câu cửa miệng của người thua. Người thắng thì thường bận… không nói câu đó. (S26)
- **MN**: Lộc bước vào đền với xà beng. Đi ra thì chỉ còn cái điện thoại. (N07)
- **MN**: Hòm công đức bây giờ cũng làm việc văn phòng: tiền mặt đã nộp ngân hàng. (N07)
- **MN**: Chưa bên nào thấy có lời. (S26)
- *(không lời, 0.8 s)* (N05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN: Hòm công đức chỉ có mã QR (9:16, 30–40 s)

- **MN**: Lộc bẩy hòm công đức. (N07) · pop “LỘC”
- **LOC**: Gãy rồi! (N07)
- **MN**: Nắp bật. Bên trong trống trơn, chỉ dán một mã QR. (N07)
- **TU**: Hòm để cho đẹp. (N08)
- **MN**: Lộc mất xà beng. Đền mất một miếng sơn. Chưa bên nào thấy có lời. (S26)
- **MN**: Hòm công đức bây giờ cũng làm việc văn phòng: tiền mặt đã nộp ngân hàng. (N07)
- *(không lời, 0.8 s)* (N07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRAILER: Bệ đá trống (9:16, 30–40 s)

- **MN**: Lộc đang bẩy hòm thì nghe tiếng đá nghiến. (N07) · pop “LỘC”
- *(không lời, 1 s)* (N02)
- **MN**: Cổng vẫn có hai bệ. Nhưng bệ trái trống không. (N01)
- **MN**: Rêu còn in bốn dấu chân. (N02)
- **MN**: Sau lưng Lộc, tiếng đá lại vang lên. Gừ… gừ… (N07)
- **MN**: Lộc định quay ra. Sau lưng, tiếng đá nghiến trầm xuống. Gừ… gừ… như một con thú lớn vừa trở mình. (N07)
- *(không lời, 1 s)* (N09)
- **MN**: Con nghê đang ở đâu? (N01)

### SH5 — TRỌN: Hai triệu cuối cùng (9:16, 30–40 s)

- **MN**: Lộc bật đèn pin soi đường. Màn hình lia qua mã. (N03) · pop “LỘC”
- **MN**: Ứng dụng ngân hàng mở bằng nhận diện khuôn mặt. Tay run, chạm đúng “xác nhận”. (N03)
- **MN**: Hai triệu cuối cùng vào quỹ đền. (N10)
- **MN**: Tiền đã về đền; người công đức thì nghê không chặn. (N09)
- **MN**: Lộc thua cá độ ba trăm triệu. Điện thoại rung cả ngày, tin nhắn đòi nợ không cần xem cũng thuộc. (N04)
- **MN**: Lộc hết đường. Điện thoại còn hai triệu cuối cùng. (N05)
- *(không lời, 0.8 s)* (N09)
- **MN**: Tiền đã về đền; người công đức thì nghê không chặn. (N09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRỌN: Tên lên bảng công đức (9:16, 30–40 s)

- **MN**: Sáng ra, Lộc quay lại xem có ai báo công an chưa. (N11) · pop “LỘC”
- **MN**: Cụ từ đang viết bảng: “Ông Lộc, hai triệu đồng.” (N11)
- **TU**: Cậu Lộc tu tâm rồi. Đêm hôm còn vào đền công đức. (N08)
- **NO**: Có tiền công đức thì có tiền trả chị nhé. (Không hình)
- **MN**: Tiền đã về đền; người công đức thì nghê không chặn. (N09)
- **MN**: Lộc mất xà beng. Đền mất một miếng sơn. Chưa bên nào thấy có lời. (S26)
- *(không lời, 0.8 s)* (N05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH7 — TRAILER: Cẩn thận ngón tay (9:16, 30–40 s)

- **MN**: Lộc hết đường. Điện thoại còn hai triệu cuối cùng. (N05) · pop “LỘC”
- **MN**: Nghê đứng chắn lối. Ngoài cổng, gà sắp gáy. (N09)
- **MN**: Lộc bật đèn pin soi đường. Màn hình lia qua mã. (N03)
- **MN**: Ứng dụng ngân hàng mở. Tay run, chạm đúng “xác nhận”. (N03)
- **MN**: Trước tiếng gà gáy, nghê phải trở về bệ. Nghê còn phải về bệ. (N06)
- *(không lời, 1 s)* (N10)
- **MN**: Hai triệu cuối cùng… vào đâu? (N10)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA). Vẽ mới 11 ảnh (16:9).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| N01 | Cổng đền làng: hai bệ đá hai bên, đôi nghê đá xanh rêu, thân như chó lân, bờm xoăn; bản đêm trăng, bản ngày trẻ con trèo chơi; bản bệ trái trống | ✓ |
| N02 | Cận bệ đá trống không, lớp rêu in vết bốn bàn chân | ✓ |
| N03 | Cận bàn tay run cầm điện thoại quét tấm mã QR | ✓ |
| N04 | Phòng trọ tối: Lộc ngồi trước điện thoại, màn hình đỏ, tin nhắn chồng chất (trống chữ) | ✓ |
| N05 | Lộc cận: áo khoác đen, mũ trùm, mắt đỏ; bản ngồi bệt run sau hòm | ✓ |
| N06 | Cận mặt nghê đá: mắt đá tròn, rêu bám, ánh trăng | ✓ |
| N07 | Trong đền đêm: Lộc bẩy hòm công đức gỗ đỏ bằng xà beng; bản cận xà beng gãy, nắp hòm bật, đáy hòm chỉ có tấm mã QR | ✓ |
| N08 | Cụ từ cận: áo the, khăn xếp, hiền; bản đứng ở quầy ngân hàng nộp tiền | ✓ |
| N09 | Sân đền đêm: con nghê đá to nặng bước chậm về phía Lộc, gạch sân rung nhẹ, rêu rơi; bản nghê nghiêng mình nhường lối, Lộc chạy qua cổng | ✓ |
| N10 | Cận màn hình điện thoại báo chuyển khoản thành công (trống chữ) | ✓ |
| N11 | Sáng: Lộc đội mũ trùm lén đứng ngoài cổng đền nhìn vào; cụ từ viết lên bảng công đức sơn đỏ (trống chữ) | ✓ |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Năm 29/04 18:00 (+07) |
| SH1 | Thứ Năm 29/04 19:00 (+07) |
| SH2 | Thứ Sáu 30/04 11:30 (+07) |
| SH3 | Thứ Sáu 30/04 19:00 (+07) |
| SH4 | Thứ Bảy 01/05 11:30 (+07) |
| SH5 | Thứ Bảy 01/05 19:00 (+07) |
| SH6 | Chủ Nhật 02/05 11:30 (+07) |
| SH7 | Chủ Nhật 02/05 19:00 (+07) |
