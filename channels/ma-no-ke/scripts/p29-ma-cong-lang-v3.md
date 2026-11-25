# Dự án 29 — Ma cổng làng “Bà Mõ hát đè” (v3, 2026-11-24)

- Rút LONG còn khoảng 580 chữ thoại, với mốc theo nhịp dựng 3,2 chữ/giây.
- Bỏ ảnh B07; dùng ảnh tái dùng S33 cho teaser tập sau.
- Bổ sung độ dài cho 5 TRỌN và 2 TRAILER; mỗi TRỌN có punch riêng trước câu dẫn link.
- Giữ cú lật do bà Mõ chủ động chọn và trả giá bằng việc không còn hát độc diễn.
- Giữ teaser tập sau vào Thứ Năm và câu kết kiểu Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Bà Mõ có khiến Dương đổi giờ quán trước khi hết đêm mà không làm hại ai không?
- **Đồng hồ / cái giá:** Trước mười giờ tối ngày thứ bảy, Dương phải chốt giờ hoạt động mới; nếu trượt, bà Mõ rời cổng và quán tiếp tục mở đến ba giờ sáng, còn bà mất chỗ rao giờ ngủ.
- **Ba nấc leo thang:** Bà thử khép cổng — cổng bật lại; bà chiếm một mic — Dương đổi mic; bà chiếm cả tám phòng — khách bỏ về, quán đêm mất doanh thu.
- **Điểm thấp:** Dương bảo sẽ tháo dàn loa và chuyển quán đi nơi khác; bà Mõ không còn cổng để rao, còn tiếng ồn vẫn chưa có giờ dừng.
- **Cú lật:** Bà Mõ tự chọn nhường mic cho các cụ và chỉ hát ban ngày, đổi lại Dương giữ quán nhưng phải đóng lúc mười giờ tối; bà trả giá bằng sân khấu độc diễn.
- **Khoảnh khắc rợn:** Cổng gỗ lim tự khép; bản lề thở dài; bên kia cổng vang ba tiếng mõ.
- **Câu kết:** “Bấm đăng ký đi. Rồi đi ngủ sớm. Bà Mõ đang nhận đặt lịch hát ru.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DUONG | Dương, chủ quán karaoke | K06 | Adam bựa | `anull` |
| MO | Bà Mõ, người gõ mõ rao việc làng xưa | K03 | Ngọc Huyền | `atempo=0.95,aecho=0.8:0.6:60:0.3` |
| TRUONG | Ông trưởng thôn | K05 | Thiền Tâm Đức | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"DUONG":{"preset":"Adam bựa","fx":"anull"},"MO":{"preset":"Ngọc Huyền","fx":"atempo=0.95,aecho=0.8:0.6:60:0.3"},"TRUONG":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | K01 | *(không lời, 2 s)* | Bass karaoke dội · nhạc ầm |
| 0:02 | K02 | *(không lời, 2 s)* | Bản lề rung khẽ |
| 0:04 | K03 | **MO**: Ba tháng rồi đấy. | Mõ tre: cốc |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Nhà mày gần quán karaoke không? Có khi nào cả làng muốn bấm “bỏ qua quảng cáo” mà quảng cáo cứ hát tiếp? | Mõ CỘC |
| 0:14 | K01 | **MN**: Cổng làng này bốn mươi năm không đóng. Quán karaoke bên ngoài mở tới ba giờ sáng. Đêm nào bass cũng lách qua cổng, vào tận giường các cụ. | Bass |
| 0:23 | K04 | **MN**: Dương mở tám phòng. Trên giấy, phòng nào cũng cách âm. Ngoài đời, cái cổng nghe đủ danh sách bài hát. | Bass |
| 0:30 | K05 | **TRUONG**: Cháu ơi, làng có người già, trẻ con đi học. Cháu tắt loa sớm giúp. | |
| 0:36 | K06 | **DUONG**: Kinh doanh hợp pháp mà bác. Cháu gửi bác túi chè. Tháng sau cháu lắp thêm loa, bass sâu hơn. | SFX túi giấy |
| 0:43 | S26 | **MN**: Túi chè xanh, cái loa đỏ. Cân bằng lợi ích địa phương. | Bass lớn thêm |
| 0:48 | K07 | **MN**: Xưa làng có người gõ mõ rao giờ đóng cổng, giờ đi ngủ. Ông Mõ ốm, vợ cầm dùi đi thay. Bà rao hay quá, làng giữ nghề luôn. Bà Mõ đanh đá, hát chèo hay nhất vùng. | Mõ tre · dế |
| 1:00 | K03 | **MO**: Canh hai đóng cổng. Nhà nào nhà nấy ngủ. Tao rao cả đời, giờ ba tháng không ngủ. | |
| 1:07 | K02 | **MO**: Cổng gỉ cứng rồi. Tao khép thử một lần. | Bản lề rít nhẹ |
| 1:11 | K02 | *(không lời, 1 s)* | Cổng nhích rồi bật lại |
| 1:12 | K03 | **MO**: Cứng đầu y như chủ quán. | Mõ tre |
| 1:15 | K09 | **MN**: Bà thử xin một mic. Phòng ba đang hát nhạc trẻ. Bà chờ đúng nhịp nghỉ. | Nhạc trẻ dừng |
| 1:22 | K09 | **MO**: Ới làng ơi, canh hai rồi đấy. Ai hát thì hát, đừng hát lúc người ta ngủ. | Chèo không lời · loa méo |
| 1:30 | K06 | **DUONG**: Mic hỏng! Đổi mic! Đổi đầu máy! | Mic hú |
| 1:34 | K09 | **MN**: Đổi mic, bà vẫn hát. Đổi đầu máy, bà vẫn hát. Kỹ thuật viên bảo Dương: “Em chỉ sửa được thiết bị.” | |
| 1:41 | K10 | **MN**: Máy chấm điểm hiện một trăm. Điểm của bà Mõ. Khách tưởng khuyến mãi; bà tưởng cuối cùng cũng có người nghe. | “100” |
| 1:49 | K03 | **MO**: Một phòng không đủ. Tám phòng thì nghe rõ. | Bass giảm |
| 1:53 | K09 | **MN**: Nửa đêm ngày thứ ba, bà chiếm cả tám phòng. Phòng nhạc trẻ ra chèo. Phòng rap ra hát ru. Phòng bolero bắt nhịp quan họ. | Cắt nhanh · chèo |
| 2:03 | K09 | **MN**: Khách tưởng loa bắt nhầm đài radio cũ. Có người vỗ tay, người khác đòi hoàn tiền vì bài mình chọn không còn trong danh sách. | |
| 2:12 | K06 | **DUONG**: Tôi mua tám bộ mic! Tám cái mic đều hát một giọng! | Mic hú |
| 2:18 | K04 | **MN**: Một tuần, khách đêm bỏ hết. Dương nhìn bãi xe trống, tính tám phòng đang khấu hao trong im lặng. | Xe nổ máy xa |
| 2:26 | K06 | **DUONG**: Bà muốn gì? Tôi tháo dàn loa, chuyển quán đi chỗ khác. | |
| 2:32 | K03 | **MO**: Mày đi thì tao còn cổng để rao. Nhưng làng vẫn mất ngủ nếu quán khác mở thay. | |
| 2:39 | K03 | **MN**: Bà không dọa. Bà cũng chẳng biến giấy phép kinh doanh thành giờ ngủ được. Trước mười giờ tối ngày thứ bảy, Dương phải chốt giờ mới. Trượt hạn, bà rời cổng; quán cứ mở tới ba giờ. | “HẠN: 22:00 · NGÀY 7” · tích tắc |
| 2:51 | K08 | **MN**: Đêm cuối. Cổng gỗ lim tự khép. Chậm. Bản lề thở dài như người vừa nín nhịn suốt ba tháng. | Bass nhỏ dần · bản lề |
| 2:59 | K08 | *(không lời, 2 s)* | Mõ tre ×3 · im |
| 3:01 | K03 | **MO**: Tao hát được cả tám phòng. Nhưng tao muốn ngủ. | |
| 3:05 | K11 | **MN**: Sáng hôm sau, các cụ đứng ngoài quán. Họ nghe giọng bà suốt tuần, nhớ giai điệu, muốn hát cùng. | Vỗ tay các cụ |
| 3:12 | K09 | **MO**: Ban ngày thì cho các cụ hát. Tao hát đỡ. Mười giờ tối đóng loa, đóng cổng. | |
| 3:20 | K06 | **DUONG**: Sáng tám giờ mở, tối mười giờ nghỉ. Tôi tính rồi. Ban ngày đông hơn ban đêm. | |
| 3:27 | K05 | **TRUONG**: Cả làng ngủ được, quán vẫn có khách. Chốt giờ thế này là phải. | |
| 3:33 | K09 | **MN**: Cụ nào hát, bà Mõ hát đỡ. Máy vẫn chấm một trăm. Lần này các cụ biết điểm ấy không phải của máy. | Chèo không lời · cười |
| 3:42 | K06 | **MN**: Dương thay biển “Karaoke Chèo Bà Mõ”. Ca sĩ độc quyền, không cát-xê. Túi chè của trưởng thôn vẫn tính vào chi phí. | |
| 3:51 | K08 | **MN**: Mười giờ tối, cổng khép. Quán tắt loa. Bà gõ ba tiếng mõ rồi đi ngủ. Cả làng ngủ theo. | Bản lề · mõ ×3 |
| 3:59 | S33 → S34 | **MN**: Tao cũng gõ mõ, nhưng chỉ một tiếng mỗi tập. Bà Mõ nhận hát ru, lịch kín hơn phòng karaoke tối thứ bảy. | Rít điếu cày |
| 4:08 | S33 | **MN**: Tập sau: đại gia tặng bồ bó hoa kết bằng tiền thật. Trong nhà ông, có người chờ quà ba mươi năm. | “TẬP SAU” · whoosh |
| 4:17 | S06 | **MN**: Bấm đăng ký đi. Rồi đi ngủ sớm. Bà Mõ đang nhận đặt lịch hát ru. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MO**: Ba tháng rồi đấy. (K03) · pop “Bà Mõ”
- **MN**: Bốn mươi năm cổng không đóng. Quán ngoài cổng mở tới ba giờ sáng. Đêm nào bass cũng đi qua cổng, vào tận giường các cụ. (K01)
- **MO**: Tao rao cả đời, giờ ba tháng không ngủ. (K03)
- **MN**: Cổng làng đóng lúc canh hai. Quán karaoke thì chưa có khái niệm ấy. (K01)
- **MN**: Một cái cổng nghỉ hưu bốn mươi năm, giờ phải làm bảo vệ âm thanh. (K02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH2 — TRỌN

- **TRUONG**: Cháu ơi, làng có người già, trẻ con đi học. Cháu tắt loa sớm giúp. (K05) · pop “Ông trưởng thôn”
- **DUONG**: Kinh doanh hợp pháp mà bác. Cháu gửi bác túi chè. Tháng sau cháu lắp thêm loa, bass sâu hơn. (K06) · pop “Dương”
- **MN**: Túi chè xanh, cái loa đỏ. Cân bằng lợi ích địa phương. (S26)
- **TRUONG**: Cả làng cần ngủ, cháu ạ. (K05)
- **DUONG**: Cháu nghe rồi. Cháu chỉ chưa nghe thấy gì ảnh hưởng doanh thu. (K06)
- **MN**: Đúng là đối thoại có tiến triển: một bên nói “ngủ”, một bên nghe thấy “thêm loa”. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH3 — TRỌN

- **MO**: Canh hai đóng cổng. Nhà nào nhà nấy ngủ. Tao rao cả đời, giờ ba tháng không ngủ. (K03) · pop “Bà Mõ”
- **MN**: Xưa bà đi rao giờ đóng cổng. Giờ phải đi nhắc quán karaoke. (K07)
- **MO**: Bốn mươi năm cổng không đóng, tao chịu. Ba tháng tao không ngủ, tao không chịu. (K03)
- **MN**: Cổng gỉ cứng rồi. Tao khép thử một lần. (K02)
- **MN**: Cổng nhích rồi bật lại. Cứng đầu y như chủ quán. (K02)
- **MN**: Ít ra hôm đó có thứ đóng cửa đúng giờ. (K03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH4 — TRỌN

- *(không lời, 2 s)* (K02) · chữ “CỔNG GỈ 40 NĂM”
- **MN**: Đêm cuối, cổng gỗ lim tự khép. Chậm. Bản lề thở dài như người vừa nín nhịn suốt ba tháng. (K02)
- *(không lời, 0.8 s)* (K08)
- **MN**: Bên kia cổng, ba tiếng mõ. Rồi im. (K08)
- *(không lời, 0.8 s)* (K08)
- **MN**: Ba tiếng thôi. Chắc cái cổng cũng đang nhắc quán đến giờ nghỉ. (K08)
- **MN**: Cả làng nín thở nghe. Cổng gỗ khép thêm một gang tay, chậm như thể nó cũng đang cân nhắc tiền điện. (K02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH5 — TRỌN

- **MN**: Phòng nhạc trẻ ra chèo. Phòng rap ra hát ru. Phòng bolero bắt nhịp quan họ. (K09)
- **DUONG**: Tôi mua tám bộ mic! Tám cái mic đều hát một giọng! (K06) · pop “Dương”
- **MN**: Máy chấm điểm hiện một trăm. Điểm của bà Mõ. (K10)
- **MN**: Khách tưởng loa bắt nhầm đài radio cũ. Có người vỗ tay, người khác đòi hoàn tiền vì bài mình chọn không còn trong danh sách. (K09)
- **MN**: Tám phòng, một giọng. Dương mua mic theo lô nên tiết kiệm được phần chọn nhạc. (K06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S01)

### SH6 — TRAILER

- **MO**: Một phòng không đủ. Tám phòng thì nghe rõ. (K03) · pop “Bà Mõ”
- **MN**: Nửa đêm ngày thứ ba, bà chiếm cả tám phòng. Phòng nhạc trẻ ra chèo. Phòng rap ra hát ru. Phòng bolero bắt nhịp quan họ. (K09)
- **DUONG**: Tôi mua tám bộ mic! Tám cái mic đều hát một giọng! (K06) · pop “Dương”
- **MN**: Một tuần, khách đêm bỏ hết. Dương nhìn bãi xe trống, tính tám phòng đang khấu hao trong im lặng. (K04)
- **MN**: Rồi Dương bảo sẽ tháo dàn loa, chuyển quán đi chỗ khác. Bà Mõ chỉ còn một đêm để chọn. (S26)

### SH7 — TRAILER

- **MO**: Tao hát được cả tám phòng. Nhưng tao muốn ngủ. (K03) · pop “Bà Mõ”
- **MN**: Sáng hôm sau, các cụ đứng ngoài quán. Họ nghe giọng bà suốt tuần, nhớ giai điệu, muốn hát cùng. (K11)
- **DUONG**: Sáng tám giờ mở, tối mười giờ nghỉ. Tôi tính rồi. Ban ngày đông hơn ban đêm. (K06) · pop “Dương”
- **MN**: Bà Mõ sẽ nhường sân khấu cho các cụ, hay hát độc diễn đến hết đêm? (S26)
- **MN**: Cái giá của lựa chọn ấy còn ở phía trước. (S26)

## Hình

Ảnh tái dùng: B02, S01, S06, S26, S33, S34.

| Mã | Cảnh | v3 dùng |
|---|---|---|
| K01 | Cổng làng cổ ban đêm, cánh gỗ mở, quán karaoke LED ngoài cổng | Có |
| K02 | Cận bản lề gỉ của cánh cổng gỗ, đang khép dần | Có |
| K03 | Bà Mõ áo nâu, khăn vấn, cầm mõ tre và dùi, ngồi trên nóc cổng; cau có hoặc cười đanh đá | Có |
| K04 | Quán karaoke tám phòng ngoài cổng, xe máy kín; bản vắng khách | Có |
| K05 | Ông trưởng thôn áo sơ mi cũ, mũ cối, mặt khó xử | Có |
| K06 | Dương áo phông bó, đèn LED trên vai, mic, túi quà | Có |
| K07 | Tranh màu ngả nâu: bà Mõ gõ mõ đi dọc làng xưa | Có |
| K08 | Cổng làng đóng kín, quán sáng ngoài cổng, làng tối bên trong | Có |
| K09 | Phòng karaoke: nhóm thanh niên ngơ ngác; bản khác là các cụ hát | Có |
| K10 | Cận màn hình chấm điểm karaoke, để trống số | Có |
| K11 | Hội người cao tuổi áo dài, khăn vấn, cầm quạt kéo vào quán | Có |

## Lịch

| Nội dung | Giờ đăng |
|---|---|
| LONG | Thứ Hai 01/03 18:00 (+07) |
| SH1 | Thứ Hai 01/03 19:00 (+07) |
| SH2 | Thứ Ba 02/03 11:30 (+07) |
| SH3 | Thứ Ba 02/03 19:00 (+07) |
| SH4 | Thứ Tư 03/03 11:30 (+07) |
| SH5 | Thứ Tư 03/03 19:00 (+07) |
| SH6 | Thứ Năm 04/03 11:30 (+07) |
| SH7 | Thứ Năm 04/03 19:00 (+07) |
