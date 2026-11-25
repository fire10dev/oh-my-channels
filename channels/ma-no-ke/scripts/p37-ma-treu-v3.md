# Dự án 37 — Ma trêu "Con ma giả thứ hai" (v3, 2026-11-24)

- Thêm hạn chót: trước sáng 2/4, Hù Team phải đăng clip xin lỗi cô Lan; nếu không, Ma trêu sẽ phát đoạn họ đã cắt.
- Ba nấc của Ma trêu: phá buổi quay đầu tiên, làm Hù Team hoảng loạn trước người lạ, rồi đánh đổi chiếc điện thoại của mình để đưa đoạn ghi âm lên loa thang máy.
- Điểm thấp: Tín định xóa bản phát trực tiếp, còn cô Lan vẫn bị biến thành trò cười.
- Cú lật do Ma trêu chọn: tự để lại điện thoại làm vật phát âm thanh, đổi lấy việc mọi người nghe được đoạn bị cắt.
- Bỏ câu Ma Nó báo trước cú lật; kết giữ nguyên sự châm biếm, teaser đúng tập sau.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ma trêu có khiến Hù Team tự công khai điều chúng đã cắt, trước khi clip xin lỗi biến cô Lan thành trò cứu kênh không?
- **Đồng hồ / cái giá:** Trước sáng 2/4, Hù Team phải đăng clip xin lỗi cô Lan; nếu trượt, Ma trêu sẽ phát đoạn ghi âm đã bị cắt. Ma trêu phải đánh đổi chiếc điện thoại giữ những trò đùa của mình.
- **Ba nấc leo thang:** Ma trêu làm bộ đồ ma xuất hiện trong gương, Hù Team vẫn quay tiếp; khiến cả nhóm hoảng trước người đi thang máy, họ đổ lỗi cho nhau; cuối cùng buộc họ phải chọn giữa xóa clip và để đoạn ghi âm được nghe.
- **Điểm thấp:** Tín chuẩn bị xóa bản phát trực tiếp để cứu kênh, trong khi cô Lan lại bị đặt trước ống kính và giỏ quà.
- **Cú lật:** Ma trêu tự đặt điện thoại của mình vào loa thang máy để phát đoạn bị cắt; đổi lại, mất toàn bộ những đoạn ghi âm tích lũy suốt năm mươi năm.
- **Khoảnh khắc rợn:** Trong gương có người thứ năm mặc bộ đồ ma còn nằm trong túi; người đó vẫy tay, nhưng trong thang chỉ có bốn đứa.
- **Câu kết:** “Xin lỗi thật thì tao đi. Xin lỗi diễn thì tao diễn cùng.” Ma Nó châm chọc, teaser tập sau và kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TIN | Tín, trưởng nhóm Hù Team | M04 | Adam bựa | `anull` |
| TREU | Ma trêu, ông già áo hoa | M06 | Thiền Tâm Đức | `atempo=1.1,asetrate=48000*1.03,aresample=48000,aecho=0.8:0.4:30:0.2` |
| LAN | Cô Lan, lao công ca đêm | M05 | Ngọc Huyền | `atempo=0.95` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"TIN":{"preset":"Adam bựa","fx":"anull"},"TREU":{"preset":"Thiền Tâm Đức","fx":"atempo=1.1,asetrate=48000*1.03,aresample=48000,aecho=0.8:0.4:30:0.2"},"LAN":{"preset":"Ngọc Huyền","fx":"atempo=0.95"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | M01 | *(không lời, 2 s)* | Thang chạy vo vo |
| 0:02 | M02 | *(không lời, 2 s)* | “Ting” lệch nhịp · nhạc tắt |
| 0:04 | M01 | **TIN**: Ơ… đứa nào mặc đồ rồi? | Cộc |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay có bốn đứa đi hù người trong thang máy. Tiếng “ting” vừa rồi… nghe như có ai lên thêm một tầng. | CỘC · “AI VỪA LÊN?” |
| 0:14 | M03 | **MN**: Hù Team. Bốn đứa, một gậy quay, một bộ đồ ma trắng và niềm tin rằng người ca đêm sinh ra để làm nền cho lượt xem. | Hét · cười hô hố |
| 0:22 | M04 | **TIN**: Chọn bảo vệ với lao công nhé. Người già phản ứng thật hơn, clip mới có cảm xúc. | “CẢM XÚC” |
| 0:27 | M05 | **MN**: Tháng trước, cô Lan đánh rơi chổi, ngồi bệt xuống sàn khóc. Hai triệu lượt xem. Đoạn cô khóc bị cắt vì… không đủ hài. | “2 TRIỆU VIEW · ĐOẠN SAU: CẮT” |
| 0:37 | M06 | **MN**: Trong thang máy có một ông già làm nghề ma trêu. Giấu dép, gọi tên, dắt lạc. Trò vô hại, có luật: đừng trêu người yếu. | Cáp kẽo kẹt · “KHÔNG TRÊU NGƯỜI YẾU” |
| 0:48 | M06 | **TREU**: Năm mươi năm tao trêu thiên hạ. Chưa lần nào phải xem người ta khóc để tính doanh thu. | |
| 0:54 | M06 | **TREU**: Mùng một tháng tư. Tao tham gia. | Cười khẩy |
| 0:59 | M01 → M02 | **MN**: Nửa đêm, cả nhóm vào thang. Bộ đồ ma vẫn trong túi. Gương phản chiếu bốn đứa… rồi thêm một người mặc đúng bộ đồ ấy. | Thang chạy · nhạc tắt |
| 1:09 | M02 | **MN**: Tóc giả lệch. Một tay giơ lên vẫy. Trong thang chỉ có bốn đứa. | Im 2 s |
| 1:16 | M04 | **TIN**: Ai đang quay thế? Thôi nhé, hiệu ứng này nhìn hơi thật. | |
| 1:21 | M06 | **TREU**: Mày bảo muốn phản ứng thật mà. | |
| 1:25 | M07 | **MN**: Nấc đầu, Tín vẫn bấm quay. Cả nhóm tắt đèn, nhảy ra hù một bác đi chợ đêm. Bác đứng yên. Bốn đứa hét trước. | Đèn tắt · hét |
| 1:36 | M04 | **TIN**: Cắt cảnh đó. Bác ấy không sợ, bọn mình cũng không sợ. | |
| 1:41 | M07 | **MN**: Nấc hai, cửa mở ở tầng kế. Một người bước vào, nhìn nhóm đang la hét với khoảng không. Cô ấy bấm tầng, bình thản đi ra. | Ting |
| 1:50 | M04 | **TIN**: Đừng đăng đoạn đó. Người ta tưởng bọn mình tự hù nhau. | |
| 1:55 | M06 | **TREU**: Thì có sai đâu? | |
| 1:58 | M07 | **MN**: Tín quẹt màn hình để xóa đoạn quay. Ngón tay trượt sang nút phát trực tiếp. Cả đêm, bốn đứa hét, chạy, té trước những thứ người xem không thấy. | “ĐANG PHÁT” · tiếng hét |
| 2:09 | M08 | **MN**: Sáng ra, mười triệu lượt xem. Bình luận gọi đây là “Hù Team bị hù”. Không ai hỏi người lạ có sợ không. Lần này, cả nhóm là tiết mục. | “10 TRIỆU VIEW” · ting dồn |
| 2:20 | M06 | **TREU**: View cao thật. Mày có thể cảm ơn tao bằng cái điện thoại. | |
| 2:25 | M01 | **MN**: Tối đó, thang dừng giữa tầng mười hai và mười ba. Đèn khẩn sáng. Không ai bị thương. Tín cầm máy, định xóa buổi phát trực tiếp. | Đèn khẩn vo ve |
| 2:34 | M09 | **MN**: Loa rè lên. Tín dừng tay. | Loa rè |
| 2:38 | M01 | **TIN**: Xóa đi. Cứu kênh trước đã. | |
| 2:42 | M05 | **LAN**: …Cô xin các cháu… cô làm ca đêm mười năm rồi… cô sợ lắm… | Ghi âm điện thoại · tiếng khóc nhỏ |
| 2:52 | M01 | **MN**: Đoạn họ cắt. Không ai nói gì. Tín vẫn giữ ngón tay trên nút xóa. Còn cô Lan, sáng mai lại phải đứng trước máy quay của họ. | Im 2 s |
| 3:01 | M06 | **TREU**: Tao giữ hết tiếng cười năm mươi năm. Đổi lấy đoạn này, tao mất sạch. | |
| 3:07 | M09 | **MN**: Ma trêu tự đặt điện thoại vào loa. Chọn để đoạn cô Lan được nghe, dù mất hết những trò đùa của mình. | Điện thoại đặt xuống · loa rõ dần |
| 3:17 | M10 | **MN**: Trước sáng, Hù Team đăng clip xin lỗi. Giỏ quà đúng góc máy. Tín không cắt đoạn ghi âm. Máy vẫn quay. | “TRƯỚC SÁNG 2/4” |
| 3:25 | M05 | **LAN**: Xin lỗi cô hay xin lỗi cái kênh? | |
| 3:29 | M02 | **MN**: Người xem phóng to tấm gương sau lưng. Con ma giả đứng đó, vẫy tay. Suốt bốn phút. | “TÌM THẤY NGƯỜI THỨ NĂM” |
| 3:38 | M06 | **TREU**: Xin lỗi thật thì tao đi. Xin lỗi diễn thì tao diễn cùng. | Cười khẩy |
| 3:44 | S33 → S34 | **MN**: Kênh cứu được rồi. Còn danh dự thì chắc đang chờ duyệt kiếm tiền. Cá tháng Tư vui nhé. | Rít điếu cày |
| 3:52 | B02 → S26 | **MN**: Tập sau: cụ tổ nằm trong lăng đá hoa cương dát vàng. Trưởng chi ép cả họ góp tiền. Cụ thấy ngột. | “TẬP SAU” · whoosh |
| 4:00 | S06 | **MN**: Bấm đăng ký đi. Tao hứa không cắt đoạn nào… trừ đoạn mày quên bấm. | “ĐĂNG KÝ” · CỘC |

## SHORTS

### SH1 — TRỌN

- **TIN**: Ơ… đứa nào mặc đồ rồi? (M02) · pop "ĐỨA NÀO MẶC ĐỒ?"
- **MN**: Trong gương có năm người. Bộ đồ ma vẫn nằm trong túi. (M02)
- **TIN**: Trong thang chỉ có bốn đứa. (M01)
- **MN**: Nửa đêm, cả nhóm vào thang. Bộ đồ ma vẫn trong túi. Gương phản chiếu bốn đứa… rồi thêm một người mặc đúng bộ đồ ấy. (M02)
- **MN**: Tóc giả lệch. Một tay giơ lên vẫy. Trong thang chỉ có bốn đứa. (M02)
- **MN**: PUNCH: Cái thang đông hơn nhóm, mà nhóm vẫn tự nhận là đông fan. (M01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **TIN**: Người già phản ứng thật hơn, clip mới có cảm xúc. (M04) · pop "CẢM XÚC?"
- **MN**: Tháng trước, cô Lan đánh rơi chổi, ngồi bệt xuống sàn khóc. Hai triệu lượt xem. Đoạn cô khóc bị cắt vì… không đủ hài. (M05)
- **LAN**: Cô xin các cháu… cô làm ca đêm mười năm rồi… cô sợ lắm… (M05)
- **MN**: Đoạn họ cắt. Không ai nói gì. Tín vẫn giữ ngón tay trên nút xóa. (M01)
- **MN**: Hai triệu người xem. Không ai xem đoạn này. Đúng là thuật toán biết chọn khán giả. (M05)
- **MN**: PUNCH: Cảm xúc thì miễn phí, còn lòng tốt chắc đang chờ bật quảng cáo. (M04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN

- **MN**: Ma trêu cũng có luật: đừng trêu người yếu. (M06) · pop "LUẬT MA TRÊU"
- **TREU**: Năm mươi năm tao trêu thiên hạ. Chưa lần nào phải xem người ta khóc để tính doanh thu. (M06)
- **TIN**: Người ca đêm phản ứng thật hơn. (M04)
- **TREU**: Mùng một tháng tư. Tao tham gia. (M06)
- **MN**: Trong thang máy có một ông già làm nghề ma trêu. Giấu dép, gọi tên, dắt lạc. Trò vô hại, có luật: đừng trêu người yếu. (M06)
- **TREU**: View cao thật. Mày có thể cảm ơn tao bằng cái điện thoại. (M06)
- **MN**: PUNCH: Ông già có nguyên tắc. Nhóm trẻ có nguyên cái bảng giá quảng cáo. (M04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRAILER

- **MN**: Bốn đứa vào thang. Bộ đồ ma còn nằm trong túi. (M01) · pop "BỐN ĐỨA"
- **MN**: Nửa đêm, cả nhóm vào thang. Bộ đồ ma vẫn trong túi. Gương phản chiếu bốn đứa… rồi thêm một người mặc đúng bộ đồ ấy. (M02)
- **MN**: Tóc giả lệch. Một tay giơ lên vẫy. Trong thang chỉ có bốn đứa. (M02)
- **TIN**: Ai đang quay thế? Thôi nhé, hiệu ứng này nhìn hơi thật. (M04)
- **MN**: Tiếng “ting” vừa rồi… nghe như có ai lên thêm một tầng. Cửa vẫn chưa mở. (M01)
- **MN**: Bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN

- **TIN**: Xóa đi. Cứu kênh trước đã. (M01) · pop "BẤM NHẦM"
- **MN**: Tín quẹt màn hình để xóa đoạn quay. Ngón tay trượt sang nút phát trực tiếp. Cả đêm, bốn đứa hét, chạy, té trước những thứ người xem không thấy. (M07)
- **MN**: Sáng ra, mười triệu lượt xem. Bình luận gọi đây là “Hù Team bị hù”. Không ai hỏi người lạ có sợ không. Lần này, cả nhóm là tiết mục. (M08)
- **TREU**: View cao thật. Mày có thể cảm ơn tao bằng cái điện thoại. (M06)
- **MN**: PUNCH: Tín định xóa clip, cuối cùng tự phát hành gói tự hủy uy tín. (M08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRỌN

- **MN**: Loa rè lên. Tín dừng tay. (M09) · pop "ĐOẠN BỊ CẮT"
- **LAN**: …Cô xin các cháu… cô làm ca đêm mười năm rồi… cô sợ lắm… (M05)
- **MN**: Đoạn họ cắt. Không ai nói gì. Tín vẫn giữ ngón tay trên nút xóa. (M01)
- **TREU**: Tao giữ hết tiếng cười năm mươi năm. Đổi lấy đoạn này, tao mất sạch. (M06)
- **MN**: Ma trêu tự đặt điện thoại vào loa. Chọn để đoạn cô Lan được nghe, dù mất hết những trò đùa của mình. (M09)
- **MN**: PUNCH: Có người mất cả kho trò đùa; có người chỉ mất quyền cắt ghép. (M01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH7 — TRAILER

- **MN**: Trước sáng, Hù Team phải đăng clip xin lỗi. (M10) · pop "TRƯỚC SÁNG"
- **TIN**: Xóa đi. Cứu kênh trước đã. (M01)
- **LAN**: …Cô xin các cháu… cô làm ca đêm mười năm rồi… cô sợ lắm… (M05)
- **MN**: Đoạn họ cắt. Không ai nói gì. Tín vẫn giữ ngón tay trên nút xóa. (M01)
- **MN**: Ma trêu tự đặt điện thoại vào loa. Chọn để đoạn cô Lan được nghe, dù mất hết những trò đùa của mình. (M09)
- **MN**: Nhưng người xem còn phóng to tấm gương sau lưng họ. (M02)
- **MN**: Còn trong gương… có ai vừa vẫy tay? (M02)

## Hình

Ảnh tái dùng: B02, S01, S06, S26, S33, S34.

| Mã | Cảnh | V3 dùng |
|---|---|---|
| M01 | Buồng thang máy chung cư; bốn thanh niên, túi đồ; bản dừng giữa tầng, đèn khẩn đỏ | ✓ |
| M02 | Gương phản chiếu năm người; người thứ năm mặc đồ ma trắng, tóc giả lệch, vẫy tay | ✓ |
| M03 | Clip cũ: thang máy tối, người mặc đồ ma trắng nhảy ra, bác bảo vệ ngã ngửa | ✓ |
| M04 | Tín đội mũ ngược, cầm gậy quay; bản hoảng | ✓ |
| M05 | Cô Lan áo đồng phục xanh, xe đẩy rác; bản hoảng, bản sau đứng khoanh tay | ✓ |
| M06 | Ông già gầy áo hoa, răng vổ, mắt híp, ngồi trên nóc buồng thang máy xem điện thoại | ✓ |
| M07 | Màn hình dựng phim, các cảnh bốn thanh niên hét, chạy, té | ✓ |
| M08 | Điện thoại, video phát trực tiếp và lượt xem tăng | ✓ |
| M09 | Loa gắn trần thang máy, ánh đèn khẩn đỏ | ✓ |
| M10 | Bốn thanh niên quay clip xin lỗi; giỏ quà đặt sẵn, cô Lan đứng khoanh tay | ✓ |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Hai 29/03, 18:00 (+07) |
| SH1 | Thứ Hai 29/03, 19:00 |
| SH2 | Thứ Ba 30/03, 11:30 |
| SH3 | Thứ Ba 30/03, 19:00 |
| SH4 | Thứ Tư 31/03, 11:30 |
| SH5 | Thứ Tư 31/03, 19:00 |
| SH6 | Thứ Năm 01/04, 11:30 |
| SH7 | Thứ Năm 01/04, 19:00 |
