# Dự án 31 — Ma lang thang "Quy trình nuôi vong" (v3, 2026-11-24)

- Đặt hạn chót trước buổi livestream hoàn tiền lúc 9 giờ sáng; trượt hạn, bà Nhàn ở lại và thầy Khang mất tiền lẫn quyền tự quyết trong căn hộ.
- Làm rõ ba nấc chủ động của bà Nhàn: đòi đúng bữa ăn, buộc thầy theo giáo trình, rồi chọn công khai sự thật với học viên.
- Đẩy điểm thấp xuống ngay trước livestream: thầy Khang đã bán đồ nhưng vẫn định đổ lỗi cho học viên và bà Nhàn.
- Giữ khoảnh khắc rợn ở nếp nhăn trên búp bê nhựa; không thêm hình dọa hay tiếng búp bê nói.
- Rút LONG về khoảng 3 phút; mỗi short 70–110 chữ, TRỌN có câu đùa chốt trước câu chỉ link.
- Kết bằng teaser P32 vào Thứ Năm và lời kêu đăng ký của Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Trước 9 giờ sáng, bà Nhàn có buộc được thầy Khang hoàn tiền cho học viên và nuôi bà như chính giáo trình ông ta rao bán không?
- **Đồng hồ / cái giá:** Buổi livestream hoàn tiền bắt đầu lúc 9 giờ sáng. Nếu trượt, bà Nhàn ở lại căn hộ và thầy Khang mất tiền lẫn quyền quyết định trong nhà mình.
- **Ba nấc leo thang:** Bà đòi cơm nóng thay sữa kẹo; thầy lén ngủ ngoài và bị bà buộc theo giáo trình; bà chọn xuất hiện trước học viên để buộc thầy công khai và hoàn tiền.
- **Điểm thấp:** Thầy Khang định đổ lỗi cho học viên, căn hộ trống đồ, đồng hồ còn mười phút.
- **Cú lật:** Bà Nhàn tự bước vào khung livestream, nhận mình là vong thật duy nhất trong lớp. Bà trả giá bằng việc ở lại căn hộ, còn thầy phải nuôi bà đúng lời mình rao.
- **Khoảnh khắc rợn:** Nếp nhăn xuất hiện trên mặt búp bê nhựa; hộp sữa còn nguyên, cạnh đó là chiếc tăm tre đã dùng.
- **Câu kết:** Thầy Khang vẫn bán khóa học, giờ đổi tên thành “Chăm sóc người cao tuổi”.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| KHANG | Thầy Khang, áo lụa trắng, vòng trầm, tóc búi; lên sóng huyền bí, tắt máy con buôn | U02, U04 | Adam bựa | `atempo=1.05` |
| NHAN | Bà Nhàn, vong lang thang bảy mươi tuổi, áo cánh nâu, tay nải, khó tính và cay | U03 | Ngọc Huyền | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |
| TU | Anh Tú, học viên gọi video | U10 | Thiền Tâm Đức | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "KHANG": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "NHAN": {"preset": "Ngọc Huyền", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}, "TU": {"preset": "Thiền Tâm Đức", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | U01 | *(không lời, 2 s)* | Tivi ngâm Kiều, đàn nhị nỉ non |
| 0:02 | U02 | **KHANG**: Ai bật tivi giờ này? | Bấm điều khiển |
| 0:05 | U03 | **NHAN**: Đang hay. Đừng tắt. | Tivi nhỏ dần |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Có người bán búp bê có vong. Một bà cụ nghe xong, dọn thẳng vào nhà người bán. | “NUÔI VONG GIỮ LỘC” |
| 0:16 | U04 | **KHANG**: Búp bê đã thỉnh vong lành. Học phí mười lăm triệu, tặng kèm một bé. Nhà nào có vong là nhà có lộc. | Livestream, chuông gió |
| 0:25 | U05 | **MN**: Giáo trình thầy viết: mỗi ngày một hộp sữa, một gói kẹo; mỗi tuần một món đồ chơi. Nuôi tử tế thì vong phù hộ. | Lật trang |
| 0:35 | U06 | **MN**: Kho hàng nhập theo cân. Ba mươi nghìn một con, mười lăm triệu một học viên. Phần chênh lệch gọi là học phí nâng cao. | “30K → 15 TRIỆU” |
| 0:43 | U02 | **KHANG**: Tôi không bán búp bê. Tôi bán cảm giác trong nhà có thêm người. | Livestream tắt |
| 0:50 | U07 | **MN**: Bà Nhàn, bảy mươi tuổi lúc mất, lang thang hết dãy trọ này sang dãy trọ khác. Nghe thầy rao nhà có vong là nhà có lộc, bà tìm tới căn hộ tầng mười hai. | Gió phố đêm |
| 1:02 | U04 | **KHANG**: Đạo tràng tại căn hộ của thầy. Cô bác cứ ghé. | Tiếng livestream vọng |
| 1:08 | U03 | **NHAN**: Có người cần vong à? Thế thì bà đến. | |
| 1:13 | U04 → U08 | **MN**: Búp bê mẫu hôm qua còn trơn láng. Sáng nay, khóe mắt có nếp nhăn. Môi mím như bà chủ nhà vừa thấy bếp bẩn. | Nhạc tắt |
| 1:26 | U08 | **MN**: Hộp sữa còn nguyên. Bên cạnh là chiếc tăm tre đã dùng. | Im lặng 1.5 s |
| 1:32 | U03 | **NHAN**: Cái hộp nhựa chật quá. Bà ra ngoài ở. | |
| 1:37 | U09 | **KHANG**: Dạ, theo giáo trình, sữa với kẹo mút ạ. | |
| 1:42 | U03 | **NHAN**: Sữa với kẹo cho bà già bảy mươi à? Cơm nóng, rau luộc, miếng trầu. Mai đi chợ. | |
| 1:50 | U05 | **MN**: Nấc một: bà đòi bữa cơm. Thầy đưa sữa, thất bại. Bà cần ăn đúng bữa. | “NẤC 1 · CƠM NÓNG” |
| 2:00 | U02 → U01 | **KHANG**: Tôi ngủ ngoài phòng khách một đêm thôi. | |
|  | U03 | **NHAN**: Theo chương ba: vong cần chỗ ở. Thầy viết mà. | |
|  | U01 | **MN**: Thầy ngủ ngoài cửa. Ba giờ sáng, tivi bật ngâm Kiều. Dép biến mất, điều khiển nằm trong tủ lạnh. | Tivi ngâm Kiều |
| 2:12 | U03 | **NHAN**: Bà không quậy. Bà làm đúng quy trình thầy bán. | “NẤC 2 · THEO GIÁO TRÌNH” |
| 2:18 | U10 | **TU**: Thầy ơi, lớp ba mươi người hỏi tiền. Ba tháng không thấy vong, chỉ thấy hóa đơn sữa. Chín giờ tụi em livestream hoàn tiền nhé? | Cuộc gọi video |
| 2:28 | U02 | **KHANG**: Vong của anh đang bận. Tôi sẽ xử lý. | |
| 2:33 | U03 | **NHAN**: Bà là vong thật duy nhất trong lớp. Chín giờ mà thầy không trả tiền, bà tự vào hình. | Đũa chạm bàn |
| 2:41 | U06 | **MN**: Thầy bán xe, bán sofa, gom tiền. Tám giờ năm mươi, căn hộ trống trơn. Ba mươi học viên chờ. Thầy tính đổ lỗi cho ai. | Đồng hồ tích tắc |
| 2:54 | U02 | **KHANG**: Tôi sẽ nói lớp học chưa phù hợp. Ai không hài lòng thì tự— | |
| 3:00 | U03 | **NHAN**: Bà sẽ tự nói. Cứ mở máy. | |
| 3:04 | U04 → U03 | **MN**: Bà chọn bước vào khung hình. Bà muốn mọi người thấy ông thầy bán lời hứa mà chính ông không chịu giữ. | “08:59” |
| 3:15 | U03 | **NHAN**: Chào các cô các chú. Bà là vong trong lớp này. Thầy nói nhận vong thì phải nuôi. Bà nhận lời ở đây. Thầy trả tiền cho người ta đi. | Livestream sáng đèn |
| 3:29 | U10 | **TU**: Thầy vừa nói bà là vong thật. Phần học phí thật, thầy chuyển giúp em. | Tin nhắn đến |
| 3:36 | U02 | **KHANG**: Ba mươi người, thầy chuyển đủ. Nhưng bà ở lại thật à? | |
| 3:42 | U03 | **NHAN**: Cơm nóng. Rau luộc. Miếng trầu. Thầy tự rao đấy nhé. | |
| 3:48 | U06 | **MN**: Chín giờ, tiền bắt đầu được hoàn. Thầy giữ căn hộ. Quyền chọn món ăn thì đã chuyển chủ. | “HOÀN TIỀN · 30 HỌC VIÊN” |
| 3:57 | U11 | **MN**: Thầy Khang đi chợ mỗi sáng. Bà Nhàn chấm điểm như lớp học cũ. | Chợ sớm |
| 4:05 | U09 | **NHAN**: Rau hơi nhừ. Nhưng ăn được. Ba năm nữa, biết đâu nấu khá. | Têm trầu |
| 4:12 | U02 | **KHANG**: Ba năm nữa ạ? | |
| 4:16 | U04 | **MN**: Thầy vẫn mở lớp. Đổi tên thành “Chăm sóc người cao tuổi”. Học phí giảm một nửa. Cơm trưa thầy nấu miễn phí. | “LỚP MỚI · CÓ CƠM TRƯA” |
| 4:27 | S33 → S34 | **MN**: Bà Nhàn có chỗ ở. Thầy có học viên mới. Ai cũng có lộc, miễn đừng hỏi lộc của ai. | Rít điếu cày |
| 4:38 | B02 → S01 | **MN**: Tập sau: cô nàng đi cắt tiền duyên để lấy đại gia. Chồng kiếp trước nghe tin, mừng quá. Ông cũng muốn cắt. | “TẬP SAU” |
| 4:52 | S06 | **MN**: Bấm đăng ký đi. Không cần nuôi tao. Tao tự biết đường về. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **NHAN**: Đang hay. Đừng tắt. (U01) · pop "BÀ NHÀN"
- **KHANG**: Ai bật tivi giờ này? (U02)
- **NHAN**: Bà đang xem ngâm Kiều. Ông tắt nữa, mai bà xem lại từ đầu. Bà bảy mươi tuổi, đi thuê trọ, gõ cửa đâu cũng bị từ chối. Nghe ông rao nhà có vong là nhà có lộc, bà mới tìm đến. (U03)
- **MN**: Ba giờ sáng, tivi bật ngâm Kiều. Dép biến mất, điều khiển nằm trong tủ lạnh. Trong nhà có khán giả khó tính nhất khu phố. (U01)
- **MN**: Nhà có vong, chủ nhà có thêm người chọn kênh. (U01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **MN**: Ba mươi nghìn một con. Bán mười lăm triệu, kèm giáo trình nuôi vong. Mỗi ngày một hộp sữa, một gói kẹo; mỗi tuần một món đồ chơi. Phần chênh lệch gọi là học phí nâng cao. (U06)
- **KHANG**: Tôi bán cảm giác trong nhà có thêm người. (U02)
- **NHAN**: Bà đến rồi đây. Cơm nóng, rau luộc, miếng trầu. Mai đi chợ sớm. (U03) · pop "BÀ NHÀN"
- **MN**: Thầy bán búp bê, bán cảm giác, rồi bán luôn cảm giác đi chợ sớm. (U11)
- **MN**: Học phí nâng cao, bài tập là xách giỏ. (U11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN

- **MN**: Bà cụ bảy mươi tuổi đi thuê trọ, gõ cửa đâu cũng bị từ chối. Bà nghe thầy rao nhà có vong là nhà có lộc, bèn tìm tới căn hộ tầng mười hai. (U07)
- **KHANG**: Đạo tràng tại căn hộ của thầy. Cô bác cứ ghé, thầy tiếp. (U04)
- **NHAN**: Có người cần vong à? Thế thì bà đến. (U03) · pop "BÀ NHÀN"
- **MN**: Bà đến thật. Thầy hết đường đổi địa chỉ. Từ giờ căn hộ có thêm người ở, còn chủ nhà có thêm người chấm điểm. (U07)
- **MN**: Mười lăm triệu mua một bé, ở kèm mua thêm. (U07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN

- **MN**: Hôm qua mặt búp bê trơn láng. Sáng nay, khóe mắt có nếp nhăn. Môi mím lại như bà chủ nhà vừa thấy bếp bẩn. (U08)
- **MN**: Hộp sữa còn nguyên. Bên cạnh là chiếc tăm tre đã dùng. (U08)
- **NHAN**: Cái hộp nhựa chật quá. Bà ra ngoài ở. (U03) · pop "BÀ NHÀN"
- **MN**: Nhà nào có vong là nhà có lộc. Chỉ thiếu mỗi người chịu rửa bát. (U09)
- **MN**: Hộp sữa chưa mở, hợp đồng thuê nhà thì có rồi. (U09)
- **MN**: Còn chuyện ai đang ở nhà ai, tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN

- **KHANG**: Dạ, theo giáo trình, sữa với kẹo mút ạ. (U09)
- **NHAN**: Sữa với kẹo cho bà già bảy mươi à? Cơm nóng, rau luộc, miếng trầu. Mai đi chợ sớm. (U03) · pop "BÀ NHÀN"
- **MN**: Bà đòi bữa cơm. Thầy đưa sữa, thất bại. Bà không cần bùa phép. Bà cần ăn đúng bữa. (U05)
- **NHAN**: Thầy viết giáo trình nuôi vong mà không có chương nấu cơm à? Vậy giáo trình này thiếu chương quan trọng nhất rồi. (U03)
- **MN**: Giáo trình bán theo cân, bữa cơm thầy phải nấu. (U09)
- **MN**: Còn thầy phải làm gì lúc ba giờ sáng? Tao kể ở bản đầy đủ, link dưới. (U01)

### SH6 — TRAILER

- **TU**: Thầy ơi, lớp ba mươi người hỏi tiền. Nuôi ba tháng không thấy vong, chỉ thấy hóa đơn sữa. Chín giờ tụi em vào buổi hoàn tiền nhé? (U10)
- **KHANG**: Vong của anh đang bận. Tôi sẽ xử lý. Tôi sẽ nói lớp học chưa phù hợp. Ai không hài lòng thì tự— (U02)
- **NHAN**: Bà là vong thật duy nhất trong lớp. Chín giờ mà thầy không trả tiền, bà tự vào hình. Bà sẽ tự nói. Cứ mở máy. (U03) · pop "BÀ NHÀN"
- **MN**: Chín giờ sáng, ai sẽ phải giữ lời? Thầy mở máy đi, còn phần còn lại tao kể ở bản đầy đủ. (U04)

### SH7 — TRAILER

- **MN**: Chín giờ. Ba mươi học viên chờ tiền hoàn. Thầy đã bán xe, bán sofa; căn hộ trống trơn. Bà Nhàn ngồi yên, còn thầy tính đổ lỗi cho ai. (U06)
- **KHANG**: Tôi sẽ nói lớp học chưa phù hợp. Ai không hài lòng thì tự— (U02)
- **NHAN**: Bà sẽ tự nói. Cứ mở máy. Bà là vong thật duy nhất trong lớp này. (U03) · pop "BÀ NHÀN"
- **MN**: Bà sắp bước vào khung hình. Còn thầy sẽ nói gì khi ba mươi người cùng nghe? Bản đầy đủ, link dưới. (U04)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới: 11 ảnh (16:9)

| Mã | Cảnh | v3 dùng |
|---|---|---|
| U01 | Căn hộ lúc 3 giờ sáng, tivi tự bật phát ngâm Kiều ánh xanh, sofa, dép lê một chiếc | Có |
| U02 | Thầy Khang cận: áo lụa trắng, vòng trầm, tóc búi; bản ngái ngủ, bản đếm tiền | Có |
| U03 | Bà Nhàn: áo cánh nâu, quần đen, tay nải, răng đen, mặt khó tính; viền người mờ; ngồi sofa / đứng sau lưng thầy cầm đũa | Có |
| U04 | Bàn livestream: búp bê nhựa mặc áo đỏ, khói nhang, chuông gió, đèn LED tím; thầy Khang ngồi sau | Có |
| U05 | Cận cuốn giáo trình bìa vàng mở, hình vẽ hộp sữa, kẹo, đồ chơi | Có |
| U06 | Kho hàng: thùng các-tông chất đầy búp bê nhựa, nhãn giá để trống | Có |
| U07 | Phố đêm: bà cụ áo nâu xách tay nải đi dọc dãy nhà trọ, đèn đường vàng | Có |
| U08 | Cực cận mặt búp bê nhựa có nếp nhăn khóe mắt, môi mím; cạnh đó hộp sữa nguyên, một chiếc tăm tre | Có |
| U09 | Bếp căn hộ: bà Nhàn ngồi đầu bàn, thầy Khang bưng hộp sữa và kẹo mút; bản sau là bữa cơm rau luộc, cá rô, đĩa trầu | Có |
| U10 | Anh Tú cận trên màn hình gọi video, búp bê nhựa áo đỏ trên đùi, mặt chán | Có |
| U11 | Chợ sớm: thầy Khang vẫn áo lụa trắng xách giỏ, mua rau muống, buồng cau | Có |

## Lịch

| Nội dung | Ngày | Giờ |
|---|---|---|
| LONG | Thứ Hai 08/03 | 18:00 (+07) |
| SH1 | Thứ Hai 08/03 | 19:00 (+07) |
| SH2 | Thứ Ba 09/03 | 11:30 (+07) |
| SH3 | Thứ Ba 09/03 | 19:00 (+07) |
| SH4 | Thứ Tư 10/03 | 11:30 (+07) |
| SH5 | Thứ Tư 10/03 | 19:00 (+07) |
| SH6 | Thứ Năm 11/03 | 11:30 (+07) |
| SH7 | Thứ Năm 11/03 | 19:00 (+07) |
