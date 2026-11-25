# Dự án 34 — Ma rừng "Rừng giữ vía" (v3, 2026-11-24)

- Thêm hạn chót 20:00: nếu bài tự đăng, công ty của Hạ nhận phạt và đoàn mất điện thoại.
- Ba lần thử lấy lại máy leo thang, đẩy Hạ và đoàn sâu hơn vào dấu vết rác họ để lại.
- Cú lật do Ma Rừng chọn đăng ảnh rác lên các tài khoản đã hẹn giờ; nó giữ máy đến khi chủ máy tự nhặt sạch rác.
- Giữ khoảnh khắc rợn ở mười hai nhạc chuông từ mười hai hướng; Ma Nó không báo trước cú lật.
- Chốt bằng câu đùa về vác rác và teaser Ông Kẹ tập Thứ Hai.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Đoàn của Hạ có lấy lại điện thoại và rời rừng trước giờ đăng ảnh mà không để lộ đống rác do mình để lại không?
- **Đồng hồ / cái giá:** Trước 20:00, gói tour tự đăng ảnh; nếu trượt, mười hai tài khoản công khai bằng chứng xả rác, công ty Hạ bị phạt và đoàn chưa lấy được máy.
- **Ba nấc leo thang:** Hạ tìm máy quanh lều nhưng thất bại; gọi hỗ trợ tour để hủy bài nhưng lịch đã khóa; dẫn đoàn dò chuông trong sương nhưng cả đoàn phải quay lại lều.
- **Điểm thấp:** 19:59, Hạ không còn máy, không hủy được bài, đoàn nghe chuông dồn lên từ bốn phía.
- **Cú lật:** Ma Rừng chọn dùng chính máy ảnh đã hẹn giờ để đăng ảnh rác lên tài khoản từng người; đổi lại, nó giữ điện thoại đến khi chủ máy nhặt sạch đống rác của mình.
- **Khoảnh khắc rợn:** Mười hai nhạc chuông quen thuộc đồng loạt reo từ mười hai hướng trong sương; khối sương cúi xuống nhìn lều.
- **Câu kết:** “Ba ngày thiền không ai thấy nhẹ người. Ba tiếng vác rác thì thấy nhẹ thật.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HA | Coach Hạ | R04 | Ngọc Huyền | `atempo=1.05` |
| RUNG | Ma Rừng | R07 | Thiền Tâm Đức | `atempo=0.80,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.7:150:0.4` |
| PHUC | Anh Phúc | R06 | Adam bựa | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"HA":{"preset":"Ngọc Huyền","fx":"atempo=1.05"},"RUNG":{"preset":"Thiền Tâm Đức","fx":"atempo=0.80,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.7:150:0.4"},"PHUC":{"preset":"Adam bựa","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | R01 | *(không lời, 2 s)* | Gió qua tán · sương trầm |
| 0:02 | R02 | **PHUC**: Điện thoại của tôi đâu? | Sột soạt trong túi ngủ |
| 0:05 | R01 | *(không lời, 2 s)* | Một tiếng chuông xa · mõ CỘC |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Đi chữa lành bao giờ chưa? Chữa xong có đem rác về không? | Mõ CỘC |
| 0:13 | S26 | **MN**: Không à? Thế nghe chuyện này. Có khu rừng cũng đi chữa lành. Theo kiểu của rừng. | |
| 0:19 | R03 | **MN**: Coach Hạ mở tour “Thiền rừng chữa lành”. Bảy triệu, ba ngày, vào khu rừng cấm vì “nhiều năng lượng”. | Chuông xoay · “7 TRIỆU · 3 NGÀY” |
| 0:27 | R04 | **HA**: Hít vào năng lượng của rừng. Thở ra mọi điều tiêu cực. Gửi hết cho đất mẹ. Còn ảnh thì yên tâm, gói tour đăng hộ ảnh đẹp đúng giờ vàng. | |
| 0:37 | R05 | **MN**: Ba ngày, mười hai người. Họ thở ra điều tiêu cực, để lại bốn mươi ký rác. Chai nhựa, khăn ướt, vỏ bánh, với mấy hòn đá cổ sơn chữ “yêu thương”. | Túi nylon · “40 KG” |
| 0:50 | R06 | **PHUC**: Ảnh đẹp thế này đăng lên chắc nghìn like. Rác thì có người dọn. | |
| 0:56 | R07 | **MN**: Rừng ấy có chủ. Không mặt, không tên. Chỉ là một khối sương già hơn mấy cái cây. | Sương trầm |
| 1:04 | S26 | **MN**: Dân gian bảo ma rừng bắt vía người xâm phạm. Mất vía thì về nhà ngơ ngẩn, như thiếu một phần mình. | “MA RỪNG BẮT VÍA” |
| 1:12 | R07 | **RUNG**: …Vía. | Gió qua tán |
| 1:15 | S26 | **MN**: Ngày xưa vía ở trong người. Ngày nay vía ở đâu? Trong cái máy mày cầm để chụp mình đang thở. | |
| 1:24 | R01 | **MN**: Đêm cuối. Sương xuống dày đến mức không thấy lều bên cạnh. Còn chưa tới giờ đăng ảnh. | “ĐÊM CUỐI · 19:42” |
| 1:33 | R02 | **PHUC**: Điện thoại tôi đâu? | Sột soạt |
| 1:36 | R02 | **MN**: Mười hai người tỉnh dậy. Mười hai cái điện thoại không còn. | |
| 1:41 | R04 | **HA**: Cả nhà cứ bình tĩnh. Chắc ban tổ chức đang làm một hoạt động trải nghiệm… rất sâu. Ai có máy dự phòng không ạ? | |
| 1:50 | R03 | **MN**: Hạ thử tìm quanh lều. Không thấy. Gọi người dẫn đường cũng không được. Sương nuốt mất lối mòn sau ba bước; cả đoàn quay lại, vẫn đủ mười hai người. | Gió · bước chân |
| 2:00 | R08 | **MN**: Rồi mười hai tiếng chuông reo cùng lúc, từ mười hai hướng khác nhau. Đúng nhạc chuông từng người. | 12 nhạc chuông chồng lên · nhạc tắt |
| 2:10 | R07 | *(không lời, 2 s)* | Im lặng |
| 2:12 | R07 | **MN**: Khối sương trước lều nhích lại một bước. Như có ai vừa cúi xuống nhìn. | Im 2 s |
| 2:19 | R08 | **HA**: Mười hai máy, mười hai hướng. Mình đi từng nhóm nhé. Phúc, em đi trước, chị… giữ tinh thần cả đoàn. | |
| 2:27 | R02 | **PHUC**: Chị giữ tinh thần, em giữ mạng. Em không đi đâu cả. | |
| 2:31 | R04 | **HA**: Gọi tổng đài lần nữa cũng không có sóng. Có cách nào hủy bài từ máy khác không? | |
| 2:36 | R04 | **MN**: Hạ thử gọi tổng đài lần nữa. Vẫn không sóng. Bài đăng đã hẹn giờ, không hủy được từ đây. Còn ba phút. | “19:57 · CÒN 3 PHÚT” · tick |
| 2:47 | R04 | **HA**: Cả nhà ơi, chắc đây là một bài học về buông bỏ. Ai có thể buông điện thoại trước thì… buông giúp chị nhé. | |
| 2:55 | R01 | **MN**: Mười hai người đứng im giữa sương. 19:59. Không máy, không đường ra, không ai buông gì cả. | “19:59” · tick · nhạc tắt |
| 3:03 | R10 | **MN**: 20:00. Mười hai tài khoản tự đăng ảnh. Gói tour lấy tấm mới nhất trong máy, đúng như đã hẹn. Tấm ấy không phải ảnh người. | Ting ×12 |
| 3:14 | R11 → R12 | **MN**: Mười hai đống rác trong rừng. Mỗi ảnh đúng chỗ chủ tài khoản vứt. Trên tài khoản Hạ có hòn đá sơn “yêu thương”. | “12 TÀI KHOẢN · 12 ĐỐNG RÁC” |
| 3:25 | R04 | **HA**: Cả nhà ơi, đây là… thông điệp của rừng ạ. Một cách nhìn lại hành trình rất… chân thật. Ai đăng những ảnh này vậy? | Ting |
| 3:34 | R13 | **MN**: Ảnh lan ra ngoài. Kiểm lâm đối chiếu vị trí: khu rừng cấm. Công ty của Hạ nhận biên bản phạt. | Máy in · “BIÊN BẢN” |
| 3:43 | R07 | **RUNG**: …Vào. | Gió |
| 3:45 | R14 | **MN**: Hạ muốn lấy máy về. Máy nào cũng nằm trên đống rác của chủ nó. Muốn cầm điện thoại thì nhặt rác trước. | Túi nylon |
| 3:55 | R06 | **PHUC**: Lần này về… thấy người nhẹ thật. | |
| 4:00 | S26 | **MN**: Rừng không thương ai. Nó chỉ không chịu được rác người nằm trên đất của nó. Ai mang vào thì người ấy mang ra. | |
| 4:09 | R14 → S33 | **MN**: Ba ngày thiền không ai thấy nhẹ người. Ba tiếng vác rác thì thấy nhẹ thật. Coach Hạ đang tính mở tour mới: bảy triệu, ba tiếng, tự vác. | Rít điếu cày |
| 4:22 | B02 → S34 | **MN**: Thứ Hai, một ông bố đêm nào cũng dọa con “không ngủ là Ông Kẹ bắt”. Còn ông thì thức đến ba giờ sáng. Ông Kẹ nghe thấy. | “TẬP SAU · THỨ HAI” |
| 4:32 | S06 | **MN**: Bấm đăng ký đi. Vía mày tao không giữ. Tao chỉ giữ lượt xem. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Điện thoại của tôi đâu? · 9:16

- **PHUC**: Điện thoại của tôi đâu? (R02) · pop “ANH PHÚC”
- **MN**: Mười hai người tỉnh dậy. Mười hai cái điện thoại không còn. (R01)
- **HA**: Ai có máy dự phòng không ạ? (R04)
- **MN**: Hạ thử tìm quanh lều. Không thấy. Gọi người dẫn đường cũng không được. (R03)
- **PHUC**: Chị giữ tinh thần, em giữ mạng. Em không đi đâu cả. (R02)
- **MN**: Cả đoàn mười hai người, không có nổi một cái điện thoại để hỏi đường về. Thế mà lúc còn máy thì máy nào cũng biết đường vào rừng. (R02)
- *(không lời)* Chuông xa, 0.8 s lặng (R01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · Bốn mươi ký chữa lành · 9:16

- **HA**: Hít vào năng lượng của rừng. Thở ra mọi điều tiêu cực. Gửi hết cho đất mẹ. (R04) · pop “COACH HẠ”
- **MN**: Ba ngày, mười hai người. Họ thở ra điều tiêu cực, để lại bốn mươi ký rác. (R05)
- **PHUC**: Ảnh đẹp thế này đăng lên chắc nghìn like. Rác thì có người dọn. (R06) · pop “ANH PHÚC”
- **MN**: Chai nhựa, khăn ướt, vỏ bánh, với mấy hòn đá cổ sơn chữ “yêu thương”. (R05)
- **HA**: Còn ảnh thì yên tâm, gói tour đăng hộ ảnh đẹp đúng giờ vàng. (R04)
- **MN**: Người chữa lành thì về. Rác ở lại. (R05)
- *(không lời)* Nhạc tắt, 0.8 s lặng (R05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · Vía ở trong điện thoại · 9:16

- **MN**: Ngày nay vía ở đâu? Trong cái máy mày cầm để chụp mình đang thở. (S26)
- **RUNG**: …Vía. (R07) · pop “MA RỪNG”
- **MN**: Dân gian bảo ma rừng bắt vía người xâm phạm. Mất vía thì về nhà ngơ ngẩn, như thiếu một phần mình. (S26)
- **PHUC**: Điện thoại tôi đâu? (R02)
- **MN**: Mất máy xong, họ mới biết mình đi chữa lành hay đi chụp ảnh. (R09)
- *(không lời)* Gió tắt, 0.8 s lặng (R07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · Mười hai hướng chuông · 9:16

- **MN**: Mười hai người tỉnh dậy. Mười hai cái điện thoại không còn. (R02)
- **HA**: Mười hai máy, mười hai hướng. Mình đi từng nhóm nhé. Phúc, em đi trước, chị… giữ tinh thần cả đoàn. (R08) · pop “COACH HẠ”
- **PHUC**: Chị giữ tinh thần, em giữ mạng. Em không đi đâu cả. (R02) · pop “ANH PHÚC”
- **MN**: Rồi mười hai tiếng chuông reo cùng lúc, từ mười hai hướng khác nhau. Đúng nhạc chuông từng người. (R08)
- **MN**: Khối sương trước lều nhích lại một bước. Như có ai vừa cúi xuống nhìn. (R07)
- *(không lời)* Chuông tắt, 0.8 s lặng (R07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · Rừng đăng ảnh hộ · 9:16

- **MN**: Gói tour lấy tấm mới nhất trong máy, đúng như đã hẹn. Tấm ấy không phải ảnh người. (R10)
- **MN**: Mười hai tài khoản tự đăng ảnh. Mười hai đống rác của chính họ. (R12)
- **HA**: Đây là… thông điệp của rừng ạ. Ai đăng những ảnh này vậy? (R04) · pop “COACH HẠ”
- **MN**: Trên tài khoản Hạ có hòn đá sơn “yêu thương”. (R11 → R12)
- **MN**: Kiểm lâm đối chiếu vị trí: khu rừng cấm. Công ty của Hạ nhận biên bản phạt. (R13)
- **MN**: Người ta chọn giờ đăng. Rừng chọn ảnh. (R12)
- *(không lời)* Ting ×12, 0.8 s lặng (R12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · Máy ở trên đống rác · 9:16

- **MN**: Hạ muốn lấy máy về. Máy nào cũng nằm trên đống rác của chủ nó. Muốn cầm điện thoại thì nhặt rác trước. (R14)
- **RUNG**: …Vào. (R07) · pop “MA RỪNG”
- **HA**: Ai vứt đống này ra đây vậy? (R14)
- **MN**: Có người vừa buông bỏ. Giờ đến lượt họ nhặt lên. (R14)
- *(không lời)* Túi nylon sột soạt rồi cắt đen (R14) · chữ “AI NHẶT TRƯỚC?”

### SH7 — TRAILER · Bài đăng lúc 20:00 · 9:16

- **MN**: Còn ba phút nữa, gói tour tự đăng ảnh. Hạ không có máy để hủy. (R04)
- **HA**: Cả nhà ơi, chắc đây là một bài học về buông bỏ. Ai có thể buông điện thoại trước thì… buông giúp chị nhé. (R04) · pop “COACH HẠ”
- **MN**: Mười hai người đứng im giữa sương. 19:59. Không máy, không đường ra, không ai buông gì cả. (R01)
- **MN**: 20:00. Mười hai tài khoản tự đăng. (R10)
- *(không lời)* Ting đầu tiên · cắt trước khi thấy ảnh (R10) · chữ “AI ĐĂNG?”

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| R01 | Rừng già ban đêm, mười hai lều nhỏ, sương trắng đặc phủ kín, đèn lều mờ | ✓ |
| R02 | Cận bàn tay sờ soạng trong túi ngủ, không thấy điện thoại | ✓ |
| R03 | Đoàn người đồ linen trắng ngồi thiền giữa rừng, coach Hạ gõ chuông xoay | ✓ |
| R04 | Coach Hạ cận: đồ linen trắng, vòng đá, mắt nhắm, giọng thì thầm; bản sau hoảng nhìn màn hình | ✓ |
| R05 | Bãi thiền sau buổi tập: chai nhựa, khăn ướt, vỏ bánh vương vãi; một hòn đá cổ sơn hình trái tim | ✓ |
| R06 | Anh Phúc cận: áo linen, mũ tai bèo, vứt chai nhựa sau gốc cây rồi giơ điện thoại tự sướng; bản sau vác bao rác | ✓ |
| R07 | Khối sương lớn trôi giữa các thân cây cổ thụ, hai đốm sáng mờ như đôi mắt; bản cận sương nhích về phía lều | ✓ |
| R08 | Rừng đêm sương đặc, mười hai vệt sáng nhỏ màn hình điện thoại rải rác sâu trong rừng | ✓ |
| R09 | Căn hộ thành phố: anh Phúc ngồi sofa ngơ ngẩn, tay chạm túi quần trống | — |
| R10 | Màn hình máy tính, trang mạng xã hội tự đăng bài (trống chữ) | ✓ |
| R11 | Ảnh chụp sát đất trong rừng: chai nhựa sau gốc cây cổ thụ, sương lơ lửng | ✓ |
| R12 | Lưới mười hai ô ảnh, mỗi ô một đống rác khác nhau giữa rừng | ✓ |
| R13 | Trạm kiểm lâm: cán bộ dán ảnh in lên bảng, bàn có biên bản (trống chữ) | ✓ |
| R14 | Rừng ban ngày: mười hai người đeo bao tải nhặt rác; trên mỗi đống rác có một chiếc điện thoại | ✓ |

## Lịch

| Nội dung | Ngày | Giờ |
|---|---|---|
| LONG | Thứ Năm 18/03 | 18:00 (+07) |
| SH1 | Thứ Năm 18/03 | 19:00 (+07) |
| SH2 | Thứ Sáu 19/03 | 11:30 (+07) |
| SH3 | Thứ Sáu 19/03 | 19:00 (+07) |
| SH4 | Thứ Bảy 20/03 | 11:30 (+07) |
| SH5 | Thứ Bảy 20/03 | 19:00 (+07) |
| SH6 | Chủ Nhật 21/03 | 11:30 (+07) |
| SH7 | Chủ Nhật 21/03 | 19:00 (+07)
