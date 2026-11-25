# Dự án 9 — Ma trơi "Tour săn ma 499k" (v3, 2026-11-24)

- Đưa đồng hồ trước 00:00 đêm Noel và cái giá Duy phải trả vào lời thoại.
- Làm rõ ba lần Duy chủ động thử lớn hơn, thất bại liên tiếp.
- Đặt điểm thấp ngay trước cú lật: clip thật bị nghi dàn dựng, khách đòi hoàn tiền.
- Ma trơi tự chọn theo Duy về phòng; khoảnh khắc rợn nằm trong màn hình đen.
- Rút gọn lời thoại, thêm PUNCH riêng cho short TRỌN, giữ nguyên cú lật, câu kết và teaser.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ma trơi có khiến Duy được tin khi anh quay được bằng chứng thật không?
- **Đồng hồ / cái giá:** Trước 00:00 đêm Noel, Duy phải hoàn thành tour và giữ lời cam kết thấy ma; nếu trượt, khách đòi hoàn tiền, còn kênh mất uy tín vì ba tháng đăng ma giả.
- **Ba nấc leo thang:** Duy cho drone bay làm ma giả, thất bại khi khách chụp được mặt ma thật → kiểm tra drone trong ba lô rồi cố trấn an khách bằng một vòng tour khác, thất bại → bỏ đoàn chạy theo đốm sáng và tự quay bằng chứng.
- **Điểm thấp:** Duy đăng clip thật nhưng bị gắn nhãn có thể đã chỉnh sửa; khách đòi hoàn tiền vì anh bỏ đoàn giữa đồng.
- **Cú lật:** Ma trơi tự chọn theo Duy về phòng. Duy trả giá bằng việc không ai tin bằng chứng thật sau ba tháng làm giả.
- **Khoảnh khắc rợn:** Màn hình tắt đen; phản chiếu mặt Duy và đốm lửa xanh vẫn đậu trên vai.
- **Câu kết:** Duy gặp ma thật nhưng mất quyền được tin; Ma Nó nhả căng bằng câu đùa, teaser P10 ra Thứ Năm và lời kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| MT | Ma trơi, đốm lửa xanh tinh nghịch, xưng “em” | T00, T03 | Trúc Ly | `atempo=1.03,aecho=0.8:0.5:30:0.2` |
| DUY | Duy, TikToker mặc đồ Noel, nói như MC | T04, T06, T07, T09 | Adam bựa | `atempo=1.05` |
| KHACH | Cô gái trong đôi khách tour | T01, T11 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "MT": {"preset": "Trúc Ly", "fx": "atempo=1.03,aecho=0.8:0.5:30:0.2"}, "DUY": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 → T02 | *(không lời, 2 s)* | Dế · Jingle Bells rè xa · chữ “24/12 · 23:10” |
| 0:02 | T02 | **KHACH**: Anh Duy, ảnh có ba khuôn mặt. Bọn mình có hai người thôi mà. | Bíp ×3 · chữ “PHÁT HIỆN 3 KHUÔN MẶT” |
| 0:07 | T02 | **MT**: Chụp lại đi chị. Em nhắm mắt mất rồi. | Im 1 s |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Đêm Noel mà vẫn xem ma. Hợp nhau đấy. Khách tao hôm nay là một đốm lửa xanh. | Mõ CỘC |
| 0:17 | T03 | **MT**: Em là ma trơi. Em ở cánh đồng này từ hồi chỗ này là chỗ các cụ nằm. Giờ người ta cắm biển khu đô thị, đêm nào cũng có khách tới chụp em. | Dế |
| 0:28 | T03 | **MT**: Em không dọa ai đâu. Ai chạy thì em chạy theo. Ai đứng thì em đứng. Thế thôi. Vui mà. | Chữ “NGƯỜI CHẠY → MA TRƠI ĐUỔI” |
| 0:37 | S26 | **MN**: Đêm Noel, người ta đi tìm ông già mặc đồ đỏ. Cánh đồng này có sẵn một đốm xanh, còn biết tạo dáng. | |
| 0:44 | T04 | **DUY**: Chào mừng tới tour săn ma trơi đêm Giáng sinh! Bốn trăm chín mươi chín nghìn, cam kết thấy ma, không thấy hoàn tiền! | Chữ “TOUR SĂN MA TRƠI · 499K” |
| 0:54 | T04 | **DUY**: Mọi người đi sát nhau, đừng bước khỏi bờ ruộng nhé. Tour kết thúc trước mười hai giờ. Thấy ma là có ảnh, không thấy ma thì… xem như trải nghiệm thiên nhiên. | Chữ “KẾT THÚC TRƯỚC 00:00” |
| 1:05 | T05 → T04 | **MN**: Duy bán tour săn ma, nhưng ma của Duy gắn cánh quạt. Pin hai mươi phút, đèn LED xanh, loa phát nhạc rợn. Ba tháng nay kênh đêm nào cũng có ma. | Cánh quạt vo ve · Jingle Bells rè |
| 1:18 | T03 | **MT**: Ma của anh ấy không có mắt, lại kêu vo vo. Em thấy bị xúc phạm. | |
| 1:23 | T04 | **DUY**: Nấc một: cho drone bay qua hàng cây. Cảnh này lên mạng là đông khách ngay. | |
| 1:30 | T03 → T01 | **MT**: Đông vui thật. Chị đứng dịch vào một chút, cho em chen với. Em cũng muốn có ảnh Noel. | |
| 1:37 | T02 | **MN**: Hai người selfie. Máy nhận diện ba mặt. Ô thứ ba nhỏ bằng quả quýt, xanh lè, đang cười. | Bíp ×3 |
| 1:45 | T01 | **KHACH**: Anh Duy, drone của anh biết chớp mắt à? Nó còn cười nữa kìa. | |
| 1:51 | T06 | **DUY**: Không thể nào. Drone ở trong ba lô mà. Anh mở ra đây, vẫn nằm im. | Im 1 s |
| 1:59 | T03 | **MT**: Em xin một tấm ảnh cũng tính là cạnh tranh à? | |
| 2:07 | T05 → T06 | **MN**: Drone vẫn trong ba lô, còn ảnh có thêm mặt. Khách bắt đầu hỏi tiền vé có gồm ảnh ba mặt không. | |
| 2:18 | T04 | **DUY**: Nấc hai: đi thêm một vòng cho mọi người có cảnh đẹp hơn. Chắc máy nhận diện lỗi. Tour vẫn còn thời gian. | Chữ “23:24” · Tick |
| 2:28 | T07 | **DUY**: Nấc ba: đuổi theo đốm sáng lấy góc máy! Mọi người ở đây, anh chạy lên rồi quay lại ngay! | Bịch bịch · Gió |
| 2:38 | T07 | **MN**: Duy chạy, bỏ lại cả đoàn giữa đồng. Người chạy, ma đuổi; hợp đồng tour không có mục khách tự tìm đường về. | |
| 2:50 | T07 | **MT**: Anh chạy nhanh thế! Đợi em với! Em ra chơi mà, có mang hóa đơn đâu. | |
| 2:58 | T07 | **DUY**: Mọi người nhìn đi! Đốm lửa xanh đuổi ngay sau anh! Anh đang quay trực tiếp đây! | Chữ “REC · 23:31” |
| 3:06 | T08 | **MT**: Anh dừng, em dừng. Anh thở đi, em không vội. | |
| 3:13 | T08 | **MN**: Duy dừng ở bờ ruộng. Ma trơi dừng ngay sau gáy. Đoàn khách ở xa, đèn pin chĩa vào nhau như họp khẩn ngoài trời. | Đèn pin quét · Dế |
| 3:26 | T08 | **DUY**: Anh quay được rồi! Có tiếng, có hình. Video này đăng lên là mọi người phải tin. | |
| 3:35 | T13 | **MN**: Về phòng, Duy xem clip nét căng, không cắt. Pin cạn, màn hình tắt đen. Trong mặt kính có mặt Duy. Trên vai anh, đốm lửa xanh vẫn đậu nguyên, đang nhìn vào máy. | Bíp pin yếu · Im 2 s · không chữ |
| 3:54 | T03 | **MT**: Em xem cùng anh mà. | |
| 3:58 | T09 | **DUY**: Ma trơi thật! Không drone! Không chỉnh sửa! Thật một trăm phần trăm! | Chữ “BẰNG CHỨNG THẬT 100%” |
| 4:07 | T10 | **MN**: Bình luận đầu tiên: “Lại drone à anh?” Bình luận thứ hai: “Pin trâu nhỉ.” Ba tháng đăng ma giả, đến cái thật thì nền tảng gắn nhãn: “Nội dung có thể đã chỉnh sửa.” | Bình luận hiện trên màn hình · Chữ cảnh báo vàng |
| 4:25 | T11 | **KHACH**: Anh cam kết thấy ma, xong quăng máy chạy, bỏ cả đoàn giữa đồng? Bọn tôi tự soi đèn về. Hoàn tiền đi! | |
| 4:36 | T09 | **DUY**: Nhưng tối nay có ma thật mà! Tôi quay được rõ ràng. | |
| 4:42 | T03 | **MT**: Em diễn miễn phí mà. Vé anh bán, em đâu có được chia. | |
| 4:48 | T12 | **MN**: Khách đòi tiền trước mười hai giờ. Duy trả từng người, vừa giải thích vừa mở clip. Ai cũng nhìn nhãn cảnh báo trước khi nhìn anh. | Chữ “23:58” |
| 5:00 | T12 | **MN**: Duy làm đúng hết: dừng lại, quay bằng chứng thật, tự tay đăng nó. Chỉ có điều, người nói thật là người đã bán giả suốt ba tháng. | |
| 5:12 | T12 → S33 → S34 | **MN**: Duy đổi tên kênh thành “Toàn ma giả”. Từ đó, video nào cũng bị hỏi có drone không. Bịa ma ba tháng, gặp ma thật lại phải tự đi mà kể. Như tao đây này. | Chữ “TOÀN MA GIẢ” |
| 5:28 | B04 | **MN**: Tập sau: ông công chức âm phủ quay lại. Bảng lương có mười hai người không tồn tại… mà âm phủ thì làm theo giấy. | Chữ “TẬP SAU” · Mõ sắt ×1 |
| 5:38 | S06 | **MN**: Bấm đăng ký đi. Không thì đêm Noel chụp ảnh, máy tự thêm một người theo dõi. | Chữ “ĐĂNG KÝ” · Mõ CỘC |

## SHORTS

### SH1 — TRỌN — 9:16 — 30–40 s

- **KHACH**: Anh Duy, ảnh có ba khuôn mặt. Bọn mình có hai người thôi mà. (T02) · pop “24/12 · 23:10”
- **MT**: Chụp lại đi chị. Em nhắm mắt mất rồi. (T02) · pop “MA TRƠI”
- **MN**: Hai người selfie. Máy nhận diện ba mặt. Ô thứ ba nhỏ bằng quả quýt, xanh lè, đang cười. (T02) · pop “3 KHUÔN MẶT”
- **KHACH**: Anh Duy, drone của anh biết chớp mắt à? (T01)
- **DUY**: Drone ở trong ba lô mà. Anh mở ra đây, vẫn nằm im. (T06)
- **MN**: Máy ảnh tuyển thêm khách, Duy lại quên thu thêm tiền vé. (T06)
- *(không lời, 0.8 s)* (T06)
- **MN**: Chụp chung miễn phí. Mặt thứ ba thì không chịu rời ảnh. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN — 9:16 — 30–40 s

- **MT**: Em không dọa ai đâu. Ai chạy thì em chạy theo. Ai đứng thì em đứng. Thế thôi. Vui mà. (T03) · pop “MA TRƠI”
- **DUY**: Mọi người nhìn đi! Đốm lửa xanh đuổi ngay sau anh! Anh đang quay trực tiếp đây! (T07) · pop “REC”
- **MN**: Duy chạy. Bỏ lại cả đoàn khách giữa đồng. Người chạy, ma đuổi. Luật muôn đời. (T07)
- **MT**: Anh dừng, em dừng. Anh thở đi, em không vội. (T08)
- **DUY**: Anh quay được rồi! Video này đăng lên là mọi người phải tin. (T08)
- **MN**: Khách mua tour săn ma, chủ tour chạy cardio. (T08)
- *(không lời, 0.8 s)* (T08)
- **MN**: Duy chạy đủ một vòng, khách đi bộ về trước. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN — 9:16 — 30–40 s

- **DUY**: Chào mừng tới tour săn ma trơi đêm Giáng sinh! Bốn trăm chín mươi chín nghìn, cam kết thấy ma! (T04) · pop “TOUR 499K”
- **MN**: Ma của Duy gắn cánh quạt. Ba tháng nay, đêm nào kênh cũng có ma. (T05)
- **MT**: Ma của anh ấy không có mắt, lại kêu vo vo. Em thấy bị xúc phạm. (T03) · pop “MA TRƠI”
- **DUY**: Chắc máy nhận diện lỗi. Tour vẫn còn thời gian. (T04)
- **MN**: Khách mua tour săn ma, drone hết pin. Ma thật còn bị hỏi có nằm trong gói không. (T05)
- **MT**: Em diễn miễn phí mà. Vé anh bán, em đâu có được chia. (T03)
- **MN**: Tour có ma miễn phí, hóa đơn vẫn tính đủ. (T05)
- *(không lời, 0.8 s)* (T05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN — 9:16 — 30–40 s

- **MN**: Hai người selfie. Máy nhận diện ba mặt. Ô thứ ba nhỏ bằng quả quýt, xanh lè, đang cười. (T02) · pop “3 KHUÔN MẶT”
- **KHACH**: Anh Duy, drone của anh biết chớp mắt à? (T01)
- **DUY**: Không thể nào. Drone ở trong ba lô mà. Anh mở ra đây, vẫn nằm im. (T06)
- **MT**: Em xin một tấm ảnh cũng tính là cạnh tranh à? (T03) · pop “MA TRƠI”
- **MN**: Drone còn trong ba lô. Đốm lửa thì nằm ngay trong ảnh. (T06)
- **MN**: Duy kiểm kê thiết bị, quên kiểm kê khách trên ảnh. (T06)
- *(không lời, 0.8 s)* (T06)
- **MN**: Thế cái gì vừa chụp ảnh chung? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN — 9:16 — 30–40 s

- **MN**: Duy chạy. Bỏ lại cả đoàn khách giữa đồng. Người chạy, ma đuổi. (T07) · pop “LUẬT MA TRƠI”
- **DUY**: Đốm lửa xanh đuổi ngay sau anh! Anh đang quay trực tiếp đây! (T07)
- **MT**: Anh chạy nhanh thế! Đợi em với! Em ra chơi mà, có mang hóa đơn đâu. (T07) · pop “MA TRƠI”
- **DUY**: Anh quay được rồi! Có tiếng, có hình. Video này đăng lên là mọi người phải tin. (T08)
- **MN**: Dừng được ma rồi. Giờ thử dừng ba tháng đăng ma giả xem. (T08)
- **MN**: Khách mua tour săn ma, cuối cùng xem chủ tour chạy cardio. (T08)
- *(không lời, 0.8 s)* (T08)
- **MN**: Cái clip đó có ai tin không? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER — 9:16 — 30–40 s

- **MN**: Gần sáng Duy về phòng, xem lại clip bốn mươi phút. Nét căng, không cắt. (T09) · pop “40 PHÚT”
- **DUY**: Ma trơi thật! Không drone! Không chỉnh sửa! Thật một trăm phần trăm! (T09)
- **MN**: Phút cuối, pin cạn. Màn hình tắt đen. Trong mặt kính có mặt Duy. (T13)
- **MN**: Trên vai Duy, đốm lửa xanh vẫn đậu nguyên, đang nhìn vào máy. (T13)
- **MN**: Ba tháng đăng ma giả, nhãn cảnh báo vẫn theo anh vào tận phòng. (T10)
- *(không lời, 0.8 s)* (T13)
- **MN**: Ba tháng làm ma giả, giờ clip thật có ai tin anh không? (T10)

### SH7 — TRAILER — 9:16 — 30–40 s

- **DUY**: Chào mừng tới tour săn ma trơi đêm Giáng sinh! Bốn trăm chín mươi chín nghìn, cam kết thấy ma! (T04) · pop “TOUR 499K”
- **MN**: Ba tháng nay, đêm nào kênh Duy cũng đăng ma. Rồi đêm Noel, một đốm lửa thật chen vào ảnh. (T02)
- **DUY**: Drone ở trong ba lô mà. Thế cái gì vừa chụp chung? (T06)
- **MN**: Duy chạy. Bỏ lại cả đoàn khách giữa đồng. Người chạy, ma đuổi. (T07)
- **MT**: Anh dừng, em dừng. Anh mệt chưa? Em chưa. (T08) · pop “MA TRƠI”
- **MN**: Trước mười hai giờ, Duy phải đưa đoàn về và giữ lời cam kết. Anh sẽ chứng minh thế nào? (T08)

## Hình

**Tận dụng:** B02, ep01 S01/S26/S33/S34 (Ma Nó), B04 (teaser thần trùng), S06 (CTA).

**Vẽ mới trong v2:**

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| T00 | Sheet ma trơi: đốm lửa xanh tròn cỡ quả quýt, hai mắt to, miệng cười tinh nghịch; 5 biểu cảm | Có |
| T01 | Cánh đồng ven đô đêm Noel: bờ ruộng, đôi trẻ đội mũ Noel selfie, đèn pin; xa là cần cẩu và tòa nhà dở dang | Có |
| T02 | Cực cận màn hình điện thoại: ảnh selfie hai người, ba ô vuông nhận diện, ô giữa là đốm lửa xanh có mắt, trống chữ | Có |
| T03 | Đốm lửa xanh lơ lửng trên bờ ruộng, sương, cỏ may, xa là cần cẩu khu đô thị | Có |
| T04 | Duy đội mũ len đỏ Noel, cầm gậy selfie, dẫn 6 khách đi bờ ruộng | Có |
| T05 | Drone nhỏ gắn đèn LED xanh bay thấp; Duy giấu tay điều khiển sau lưng | Có |
| T06 | Cận Duy mở ba lô thấy drone nằm im bên trong, mặt tái | Có |
| T07 | Duy chạy trên bờ ruộng giơ điện thoại quay, đốm lửa xanh bám sát sau | Có |
| T08 | Duy dừng chống gối thở dốc; đốm lửa dừng ngay sau gáy, cười | Có |
| T09 | Phòng trọ gần sáng: Duy ngồi giường xem điện thoại, mặt tái; cận tay run bấm đăng | Có |
| T10 | Cực cận điện thoại: clip đăng lên, bình luận và nhãn cảnh báo vàng, trống chữ | Có |
| T13 | Màn hình điện thoại tắt đen, phản chiếu mặt Duy và đốm lửa xanh có mắt đậu trên vai | Có |
| T11 | Khách tour vây Duy, giơ điện thoại đòi tiền, Duy ôm đầu | Có |
| T12 | Duy ngồi một mình trên bờ ruộng lúc gần sáng, đốm lửa ngồi cạnh như bạn | Có |

## Lịch

- LONG — Thứ Hai 21/12, 18:00 (+07).
- SH1 — Thứ Hai 21/12, 19:00.
- SH2 — Thứ Ba 22/12, 11:30.
- SH3 — Thứ Ba 22/12, 19:00.
- SH4 — Thứ Tư 23/12, 11:30.
- SH5 — Thứ Tư 23/12, 19:00.
- SH6 — Thứ Năm 24/12, 11:30.
- SH7 — Thứ Năm 24/12, 19:00.
