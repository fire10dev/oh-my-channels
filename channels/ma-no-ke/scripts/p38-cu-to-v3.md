# Dự án 38 — Cụ tổ “Vàng lá bay về” (v3, 2026-11-24)

- Rút gọn lời LONG xuống khoảng 580 chữ, giữ lại các tình tiết đã nêu.
- Sửa ảnh trong LONG sang mã có trong danh sách Hình; bỏ toàn bộ mã C01–C13.
- Bổ sung cho SH1 lời thoại và câu đùa chốt trước câu chỉ link.
- Bổ sung câu punch cho các short TRỌN trước câu chỉ link.
- Giữ cấu trúc, nhân vật, giọng và lịch theo thông tin hiện có.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Trước sáng Thanh minh, Cụ tổ có khiến vàng trên lăng trở về đúng người đã góp, để lộ khoản hoa hồng của Ông Hòa không?
- **Đồng hồ / cái giá:** Trước sáng Thanh minh; nếu trượt, Cụ tổ vẫn bị bịt kín tầm nhìn dưới lăng, còn khoản tiền bất chính tiếp tục mang danh hiếu nghĩa.
- **Ba nấc leo thang:** Cụ tổ nhắc Ông Hòa giữ lối nhìn ra đồng — bị phớt lờ; làm một lá vàng rung giữa đêm — bị quy cho thợ dán ẩu; hiện ra trước Ông Hòa — ông đổ lỗi cho người thợ. Cụ tổ chọn nước liều: cho toàn bộ vàng tự tìm về đúng nguồn, khiến cả làng nhìn thấy đường đi của nó.
- **Điểm thấp:** Ông Hòa mừng vì nghĩ cụ già đã im, nhưng phát hiện phong bì hoa hồng trống rỗng và không biết vàng sẽ về đâu.
- **Cú lật:** Cụ tổ chọn để vàng bay về nhà người góp, còn phần của Ông Hòa bay về nhà thợ đá; cái giá là bí mật của ông bị phơi ra và Cụ tổ phải rời lăng.
- **Khoảnh khắc rợn:** Chữ vàng bong ra trong nghĩa trang tối om, lơ lửng rồi bay đi dù không có gió.
- **Câu kết:** Cả họ đắp lại nấm đất; Ông Hòa được giao tưới cỏ hằng ngày. Ma Nó đùa về chỗ nằm và mời đăng ký, rồi teaser P39 cho Thứ Hai.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HOA | Ông Hòa, trưởng chi giàu nhất họ | B02 | Adam bựa | `anull` |
| CU | Cụ tổ | B02 | Thiền Tâm Đức | `atempo=0.85,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3` |
| NA | Cô Út Na | B02 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"HOA":{"preset":"Adam bựa","fx":"anull"},"CU":{"preset":"Thiền Tâm Đức","fx":"atempo=0.85,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3"},"NA":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | B02 | *(không lời, 2 s)* | Nghĩa trang đêm · ếch nhái · gió đồng |
| 0:02 | B02 | *(không lời, 1 s)* | Tiếng vàng lá khẽ như cánh côn trùng |
| 0:03 | S01 → S26 | **MN**: Lại mò vào à? Thanh minh rồi. Mộ nhà mày quét chưa? Hay đang góp tiền cho cái mái rồng thứ ba? | Mõ CỘC |
| 0:10 | S34 | **MN**: Một ông cụ muốn nhìn ra đồng. Một ông khác muốn nhìn hóa đơn. | |
| 0:16 | B02 | **MN**: Ông Hòa là trưởng chi giàu nhất họ. Họp họ, ông đưa bản vẽ lăng đá hoa cương, mái rồng, chữ dát vàng. | Xì xào họp họ |
| 0:25 | B02 | **HOA**: Mỗi suất đinh năm mươi triệu. Ai không góp là bất hiếu. Tôi góp một tỷ. | Vỗ tay rời rạc |
| 0:32 | B02 | **NA**: Nhà em vay thêm. Bán con lợn nái là đủ. | Lợn kêu xa |
| 0:37 | S26 | **MN**: Năm mươi triệu với ông Hòa là một bữa nhậu. Với cô Út Na là con lợn nái, cộng lãi suất biết nói. | “50 TRIỆU” |
| 0:45 | B02 | **MN**: Mộ cũ là nấm đất cỏ xanh cạnh cây ngâu, nhìn ra cánh đồng cụ khai hoang. Thanh minh, con cháu nhổ cỏ, đắp đất. | Gió đồng · chim |
| 0:54 | B02 | **MN**: Nay đá phủ kín, cây ngâu chặt, chẳng còn ngọn cỏ nào để nhổ. Lại tiện, khỏi cúi lưng. | Máy cắt đá · búa đục |
| 1:02 | B02 | **CU**: Hòa. Để một lối nhìn ra đồng. | Gió lịm |
| 1:07 | B02 | **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. | |
| 1:11 | B02 | **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. | |
| 1:15 | S26 | **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. | |
| 1:22 | B02 | **MN**: Đêm đó, một lá vàng rung lên. Không có gió. | Tiếng lá vàng khẽ |
| 1:28 | B02 | **HOA**: Thợ dán ẩu. Mai bảo nó làm lại. | Cụng ly |
| 1:32 | B02 | **MN**: Tối khai công, thợ đá mời trưởng chi đi nhậu. Phong bì dày sang tay. Hai người cụng ly như vừa cứu được nghệ thuật. | Cụng ly · phong bì |
| 1:42 | B02 | **CU**: Thằng Hòa. Bé ăn vụng xôi cúng, lớn ăn cả tiền dựng mộ. | |
| 1:50 | B02 | **HOA**: Cụ già rồi, chắc nghe gió. Mái rồng đủ, chữ vàng đủ. Họ mình còn chê gì? | |
| 1:57 | B02 | **CU**: Ta nghe tiếng đất. Nó nhẹ hơn tiếng vàng. | |
| 2:03 | B02 | **MN**: Nấc thứ ba, cụ hiện ngay cạnh lăng. Ông Hòa nhìn xuyên qua cụ rồi gọi thợ. | Nhạc ngắt |
| 2:12 | B02 | **HOA**: Mai tháo mấy chữ méo đi. Ai hỏi thì bảo cụ không hợp phong thủy. | |
| 2:18 | B02 | **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. | Ếch nhái · nhạc tắt |
| 2:28 | B02 | **HOA**: Phong bì đâu? Mày nói một tỷ. Tao nói với cả họ một tỷ. | Sột soạt giấy |
| 2:33 | B02 | **MN**: Phong bì trống. Ông Hòa nhìn lăng. Cụ im thật, mà vàng cũng biến mất. | Im |
| 2:41 | B02 | **MN**: Chữ vàng trên lăng tự bong ra. Từng lá lơ lửng trong bóng tối, như đom đóm. | Tiếng vàng lá · nhạc tắt |
| 2:50 | B02 | **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. | Im |
| 2:58 | B02 | **MN**: Lăng đá còn trơ những rãnh chữ đen. | Im 2 s |
| 3:03 | B02 | **MN**: Sáng Thanh minh, bàn thờ nhà cô Út Na có thỏi vàng nhỏ, đúng số tiền cô đã góp. | Gà gáy |
| 3:12 | B02 | **NA**: Đủ chuộc con lợn rồi… | Lợn kêu |
| 3:16 | B02 | **MN**: Phần một tỷ bay về nhà thợ đá. Cả làng đứng ngoài cổng. Hoa hồng nào giao tận nhà thế này? | Xì xào |
| 3:24 | B02 | **MN**: Ông Hòa chẳng bỏ đồng nào. Thợ đá trả ông một tỷ để nhận thầu, rồi đội giá lên đầu cả họ. Vàng làm kế toán hộ. | |
| 3:34 | B02 | **HOA**: Tôi… gửi ông ấy giữ hộ. | |
| 3:38 | B02 | **CU**: Của ai, về nấy. Đất cho ta. | Gió đồng |
| 3:43 | B02 | **MN**: Cả họ tháo bớt đá, đắp lại nấm đất, trồng cỏ và cây ngâu. Cụ chọn để vàng nói thay. Đến sáng, cụ rời lăng. | Cuốc đất · tiếng người |
| 3:54 | B02 | **CU**: Thấy đồng rồi. | Gió đồng |
| 3:58 | B02 | **MN**: Ông Hòa tưới cỏ mộ hằng ngày. Không ai gọi là phạt. Cả họ gọi là… vinh dự. | Xô nước |
| 4:06 | S33 → S34 | **MN**: Sửa mộ cho ông bà thì cứ sửa. Ông bà nhìn tiền, không nhìn đá. Tao nằm đâu cũng được, miễn có chỗ đặt điếu cày. | Rít điếu cày |
| 4:16 | B02 → S26 | **MN**: Tập sau: dân phượt lẻn vào hang cấm, trốn vé chuyến cuối. Trong hang có bến đò. Ông lái đò soát vé kỹ hơn kiểm lâm. | “TẬP SAU” · mái chèo |
| 4:26 | S06 | **MN**: Bấm đăng ký đi. Miễn phí, khỏi họp họ. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN — Lá vàng rung mà không có gió (9:16)

- **MN**: Lại mò vào à? Thanh minh rồi. Mộ nhà mày quét chưa? Hay đang góp tiền cho cái mái rồng thứ ba? (S01 → S26)
- **MN**: Nghĩa trang tối om. Trên lăng đá, một lá vàng khẽ rung. (B02 → B02)
- **MN**: Không có gió. (B02)
- **HOA**: Thợ dán ẩu. Mai bảo nó làm lại. (B02)
- **MN**: Người ta đổ cho thợ trước khi đổ cho ma. Tiết kiệm được một lần họp họ. (B02)
- **MN**: Lặng 0.8 s. (B02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN — Không góp là bất hiếu (9:16)

- **HOA**: Mỗi suất đinh năm mươi triệu. Ai không góp là bất hiếu. Tôi góp một tỷ. (B02) · pop “ÔNG HÒA”
- **NA**: Nhà em vay thêm. Bán con lợn nái là đủ. (B02) · pop “ÚT NA”
- **MN**: Năm mươi triệu với ông Hòa là một bữa nhậu. Với cô Út Na là con lợn nái, cộng lãi suất biết nói. (S26)
- **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. (S26)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (B02) · pop “CỤ TỔ”
- **MN**: Bất hiếu tính theo suất; cái lăng tính theo mét vuông. Họp họ đúng là biết quy đổi. (S26)
- **MN**: Lặng 0.8 s. (B02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN — Bốn trăm năm nhìn ra đồng (9:16)

- **MN**: Mộ cũ là nấm đất cỏ xanh cạnh cây ngâu, nhìn ra cánh đồng cụ khai hoang. Thanh minh, con cháu nhổ cỏ, đắp đất. (B02)
- **MN**: Nay đá phủ kín, cây ngâu chặt, chẳng còn ngọn cỏ nào để nhổ. Lại tiện, khỏi cúi lưng. (B02)
- **CU**: Hòa. Để một lối nhìn ra đồng. (B02) · pop “CỤ TỔ”
- **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. (B02)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (B02)
- **MN**: Đá tốt đến mấy cũng khó ngắm đồng qua một bức tường. Cụ hỏi đường nhìn, ông đưa bảng giá. (B02)
- **MN**: Lặng 0.8 s. (B02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN — Chữ vàng bay như đom đóm (9:16)

- **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. (B02)
- **MN**: Trên lăng, từng lá vàng trong dòng chữ tự bong ra. Lơ lửng. Như đom đóm. (B02)
- **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. (B02)
- **CU**: Của ai, về nấy. Đất cho ta. (B02)
- **MN**: Vàng đi một lượt, kiểm toán cả họ miễn phí. Kế toán này còn biết bay. (B02)
- **MN**: Lặng 0.8 s. (B02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN — Một tỷ về nhà thợ đá (9:16)

- **MN**: Phong bì trống. Ông Hòa nhìn lăng. Tối nay cụ im thật, mà vàng vẫn biến mất. (B02)
- **MN**: Phần một tỷ bay về nhà thợ đá. Cả làng đứng ngoài cổng. Hoa hồng nào giao tận nhà thế này? (B02)
- **MN**: Ông Hòa chẳng bỏ đồng nào. Thợ đá trả ông một tỷ để nhận thầu, rồi đội giá lên đầu cả họ. Vàng làm kế toán hộ. (B02)
- **HOA**: Tôi… gửi ông ấy giữ hộ. (B02)
- **MN**: Phong bì thì trống, câu trả lời lại có người giữ hộ. Họ nhà này chia việc thật khéo. (B02)
- **MN**: Lặng 0.8 s. (B02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER — Cụ tổ muốn nhìn ra đồng (9:16)

- **CU**: Hòa. Để một lối nhìn ra đồng. (B02) · pop “CỤ TỔ”
- **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. (B02)
- **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. (S26)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (B02)
- **MN**: Lần thứ hai, một lá vàng rung lên trong đêm. Không có gió. (B02)
- **MN**: Đêm khai công, thợ đá mời trưởng chi đi nhậu. Phong bì dày sang tay. Hai người cụng ly như vừa cứu được nghệ thuật. (B02)
- **CU**: Thằng Hòa. Bé ăn vụng xôi cúng, lớn ăn cả tiền dựng mộ. (B02)

### SH7 — TRAILER — Vàng về đâu? (9:16)

- **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. (B02)
- **HOA**: Phong bì đâu? Mày nói một tỷ. Tao nói với cả họ một tỷ. (B02) · pop “ÔNG HÒA”
- **MN**: Phong bì trống. Ông Hòa nhìn lăng. Tối nay cụ im thật, mà vàng vẫn biến mất. (B02)
- **MN**: Trên lăng, từng lá vàng trong dòng chữ tự bong ra. Lơ lửng. Như đom đóm. (B02)
- **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. (B02)
- **MN**: Của ai bay về nhà nấy? (S26)

## Hình

*Danh sách mã ảnh v2 không có trong nội dung đầu vào được cung cấp. Các ảnh tái dùng trong LONG và SHORTS đều dùng mã B02, S01, S06, S26, S33, S34; không dùng mã C01–C13.*

## Lịch

*Thông tin giờ đăng LONG và 7 shorts không có trong nội dung đầu vào được cung cấp.*
