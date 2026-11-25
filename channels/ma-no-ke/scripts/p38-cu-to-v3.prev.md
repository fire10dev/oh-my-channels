# Dự án 38 — Cụ tổ “Vàng lá bay về” (v3, 2026-11-24)

- Thêm hạn chót: trước sáng Thanh minh, vàng phải về đúng nguồn; nếu không, cụ tổ tiếp tục bị chôn dưới món nợ của cả họ.
- Làm rõ ba lần Cụ tổ thử đòi lại lối nhìn ra đồng; mỗi lần đều thất bại.
- Đưa Ông Hòa vào điểm thấp nhất: ông tin vàng đã bị lấy mất, còn hoa hồng của mình sắp lộ.
- Cụ tổ chủ động chọn cho vàng bay về đúng nguồn, chấp nhận bị lộ là đã giúp cuộc phơi bày.
- Giữ khoảnh khắc rợn duy nhất ở chữ vàng tự bong khỏi lăng trong đêm không gió.

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
| HOA | Ông Hòa, trưởng chi giàu nhất họ | C04 | Adam bựa | `anull` |
| CU | Cụ tổ | C08 | Thiền Tâm Đức | `atempo=0.85,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3` |
| NA | Cô Út Na | C05 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"HOA":{"preset":"Adam bựa","fx":"anull"},"CU":{"preset":"Thiền Tâm Đức","fx":"atempo=0.85,asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:80:0.3"},"NA":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2 s)* | Nghĩa trang đêm · ếch nhái · gió đồng |
| 0:02 | C02 | *(không lời, 1 s)* | Tiếng vàng lá khẽ như cánh côn trùng |
| 0:03 | S01 → S26 | **MN**: Lại mò vào à? Thanh minh rồi. Mộ nhà mày quét chưa? Hay đang góp tiền cho cái mái rồng thứ ba? | Mõ CỘC |
| 0:10 | S34 | **MN**: Chuyện này có một ông cụ muốn nhìn ra đồng. Một ông khác muốn nhìn thấy hóa đơn. |  |
| 0:16 | C03 | **MN**: Ông Hòa là trưởng chi giàu nhất họ. Họp họ, ông dán bản vẽ lăng đá hoa cương, mái rồng, chữ dát vàng. | Xì xào họp họ |
| 0:25 | C04 | **HOA**: Mỗi suất đinh năm mươi triệu. Ai không góp là bất hiếu. Tôi góp một tỷ. | Vỗ tay rời rạc |
| 0:32 | C05 | **NA**: Nhà em vay thêm. Bán con lợn nái là đủ. | Lợn kêu xa |
| 0:37 | S26 | **MN**: Năm mươi triệu với ông Hòa là một bữa nhậu. Với cô Út Na là con lợn nái, cộng lãi suất biết nói. | “50 TRIỆU” |
| 0:45 | C06 | **MN**: Mộ cũ là nấm đất cỏ xanh, cạnh cây ngâu, nhìn ra cánh đồng cụ khai hoang. Thanh minh con cháu nhổ cỏ, đắp đất. | Gió đồng · chim |
| 0:54 | C07 | **MN**: Nay đá phủ kín. Cây ngâu chặt. Không còn ngọn cỏ nào để nhổ. Lại tiện, khỏi cúi lưng. | Máy cắt đá · búa đục |
| 1:02 | C08 | **CU**: Hòa. Để một lối nhìn ra đồng. | Gió lịm |
| 1:07 | C04 | **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. |  |
| 1:11 | C08 | **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. |  |
| 1:15 | S26 | **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. |  |
| 1:22 | C02 | **MN**: Đêm đó, một lá vàng rung lên. Không có gió. | Tiếng lá vàng khẽ |
| 1:28 | C09 | **HOA**: Thợ dán ẩu. Mai bảo nó làm lại. | Cụng ly |
| 1:32 | C09 | **MN**: Tối khai công, ông thợ đá mời trưởng chi đi nhậu. Một phong bì dày sang tay. Cả hai cụng ly như vừa cứu được nghệ thuật. | Cụng ly · phong bì |
| 1:42 | C08 | **CU**: Thằng Hòa. Bé đã ăn vụng xôi cúng. Lớn ăn cả tiền dựng mộ. |  |
| 1:50 | C04 | **HOA**: Cụ già rồi, chắc nghe gió. Mái rồng lên đủ, chữ vàng đủ. Họ mình còn chê gì? |  |
| 1:57 | C08 | **CU**: Ta nghe tiếng đất. Nó nhẹ hơn tiếng vàng. |  |
| 2:03 | C04 | **MN**: Nấc thứ ba, cụ hiện ra ngay cạnh lăng. Ông Hòa nhìn thẳng qua cụ, rồi gọi điện cho thợ. | Nhạc ngắt |
| 2:12 | C04 | **HOA**: Mai tháo mấy chữ méo đi. Ai hỏi thì bảo cụ không hợp phong thủy. |  |
| 2:18 | C01 | **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. | Ếch nhái · nhạc tắt |
| 2:28 | C09 | **HOA**: Phong bì đâu? Mày nói một tỷ. Tao nói với cả họ một tỷ. | Sột soạt giấy |
| 2:33 | C09 | **MN**: Phong bì trống. Ông Hòa nhìn lăng. Tối nay cụ im thật, mà vàng vẫn biến mất. | Im |
| 2:41 | C10 | **MN**: Trên lăng, từng lá vàng trong dòng chữ tự bong ra. Lơ lửng. Như đom đom. | Tiếng vàng lá · nhạc tắt |
| 2:50 | C11 | **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. | Im |
| 2:58 | C02 | **MN**: Lăng đá còn trơ những rãnh chữ đen. | Im 2 s |
| 3:03 | C12 | **MN**: Sáng Thanh minh, bàn thờ nhà cô Út Na có một thỏi vàng nhỏ. Đúng số tiền cô đã góp. | Gà gáy |
| 3:12 | C05 | **NA**: Đủ chuộc con lợn rồi… | Lợn kêu |
| 3:16 | C13 | **MN**: Phần một tỷ bay về nhà ông thợ đá. Cả làng đứng ngoài cổng. Có khoản hoa hồng nào quảng cáo trả tại nhà đâu. | Xì xào |
| 3:24 | C13 | **MN**: Ông Hòa không bỏ đồng nào. Thợ đá trả ông một tỷ để nhận thầu, rồi đội giá lên đầu cả họ. Vàng chỉ làm kế toán hộ. |  |
| 3:34 | C04 | **HOA**: Tôi… gửi ông ấy giữ hộ. |  |
| 3:38 | C08 | **CU**: Của ai, về nấy. Đất cho ta. | Gió đồng |
| 3:43 | C07 | **MN**: Cả họ tháo bớt đá, đắp lại nấm đất, trồng cỏ và cây ngâu. Cụ đã chọn cho vàng nói thay. Đến sáng, cụ rời lăng. | Cuốc đất · tiếng người |
| 3:54 | C08 | **CU**: Thấy đồng rồi. | Gió đồng |
| 3:58 | C04 | **MN**: Ông Hòa được giao tưới cỏ mộ hằng ngày. Không ai gọi đó là phạt. Cả họ gọi là… vinh dự. | Xô nước |
| 4:06 | S33 → S34 | **MN**: Sửa mộ cho ông bà thì cứ sửa. Ông bà nhìn tiền, không nhìn đá. Tao thì nằm đâu cũng được, miễn có chỗ đặt điếu cày. | Rít điếu cày |
| 4:16 | B02 → S26 | **MN**: Thứ Hai: dân phượt lẻn vào hang cấm, trốn vé chuyến cuối. Trong hang có một bến đò. Ông lái đò soát vé kỹ hơn cả kiểm lâm. | “TẬP SAU · THỨ HAI” · mái chèo |
| 4:26 | S06 | **MN**: Bấm đăng ký đi. Miễn phí, khỏi họp họ. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN — Lá vàng rung mà không có gió

- **MN**: Lại mò vào à? Thanh minh rồi. Mộ nhà mày quét chưa? Hay đang góp tiền cho cái mái rồng thứ ba? (S01 → S26)
- **MN**: Nghĩa trang tối om. Trên lăng đá, một lá vàng khẽ rung. (C01 → C02)
- **MN**: Không có gió. (C02)
- **MN**: Mỗi suất đinh năm mươi triệu. Ai không góp là bất hiếu. (C04)
- **MN**: Lặng 0.8 s. (C02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN — Không góp là bất hiếu

- **HOA**: Mỗi suất đinh năm mươi triệu. Ai không góp là bất hiếu. Tôi góp một tỷ. (C04) · pop “ÔNG HÒA”
- **NA**: Nhà em vay thêm. Bán con lợn nái là đủ. (C05) · pop “ÚT NA”
- **MN**: Năm mươi triệu với ông Hòa là một bữa nhậu. Với cô Út Na là con lợn nái, cộng lãi suất biết nói. (S26)
- **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. (S26)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (C08)
- **MN**: Lặng 0.8 s. (C05)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN — Bốn trăm năm nhìn ra đồng

- **MN**: Mộ cũ là nấm đất cỏ xanh, cạnh cây ngâu, nhìn ra cánh đồng cụ khai hoang. Thanh minh con cháu nhổ cỏ, đắp đất. (C06)
- **MN**: Nay đá phủ kín. Cây ngâu chặt. Không còn ngọn cỏ nào để nhổ. Lại tiện, khỏi cúi lưng. (C07)
- **CU**: Hòa. Để một lối nhìn ra đồng. (C08) · pop “CỤ TỔ”
- **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. (C04)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (C08)
- **MN**: Lặng 0.8 s. (C08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN — Chữ vàng bay như đom đóm

- **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. (C01)
- **MN**: Trên lăng, từng lá vàng trong dòng chữ tự bong ra. Lơ lửng. Như đom đom. (C10)
- **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. (C11)
- **CU**: Của ai, về nấy. Đất cho ta. (C08)
- **MN**: Vàng đi một lượt, kiểm toán cả họ miễn phí. (C11)
- **MN**: Lặng 0.8 s. (C11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN — Một tỷ về nhà thợ đá

- **MN**: Phong bì trống. Ông Hòa nhìn lăng. Tối nay cụ im thật, mà vàng vẫn biến mất. (C09)
- **MN**: Phần một tỷ bay về nhà ông thợ đá. Cả làng đứng ngoài cổng. Có khoản hoa hồng nào quảng cáo trả tại nhà đâu. (C13)
- **MN**: Ông Hòa không bỏ đồng nào. Thợ đá trả ông một tỷ để nhận thầu, rồi đội giá lên đầu cả họ. Vàng chỉ làm kế toán hộ. (C13)
- **HOA**: Tôi… gửi ông ấy giữ hộ. (C04)
- **MN**: Lặng 0.8 s. (C13)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER — Cụ tổ muốn nhìn ra đồng

- **CU**: Hòa. Để một lối nhìn ra đồng. (C08) · pop “CỤ TỔ”
- **HOA**: Cụ cứ yên tâm. Đá này nhập loại tốt nhất. (C04)
- **MN**: Cụ nhắc lần một, ông Hòa nghe thành “đá tốt”. Người ta hay nghe đúng thứ mình đã trả tiền. (S26)
- **CU**: Ta không hỏi đá tốt không. Ta hỏi đồng đâu. (C08)
- **MN**: Lần thứ hai, một lá vàng rung lên trong đêm. Không có gió. (C02)
- **MN**: Đêm khai công, ông thợ đá mời trưởng chi đi nhậu. Một phong bì dày sang tay. Cả hai cụng ly như vừa cứu được nghệ thuật. (C09)
- **CU**: Thằng Hòa. Bé đã ăn vụng xôi cúng. Lớn ăn cả tiền dựng mộ. (C08)

### SH7 — TRAILER — Vàng về đâu?

- **MN**: Đêm trước Thanh minh. Cụ có đến sáng mai để lấy lại bầu trời. Nếu không, cả họ lại thắp hương trước một bức tường. (C01)
- **HOA**: Phong bì đâu? Mày nói một tỷ. Tao nói với cả họ một tỷ. (C09) · pop “ÔNG HÒA”
- **MN**: Phong bì trống. Ông Hòa nhìn lăng. Tối nay cụ im thật, mà vàng vẫn biến mất. (C09)
- **MN**: Trên lăng, từng lá vàng trong dòng chữ tự bong ra. Lơ lửng. Như đom đom. (C10)
- **MN**: Rồi bay đi. Mỗi lá một ngả, về phía những mái nhà trong làng. Không có gió. (C11)
- **MN**: Của ai bay về nhà nấy? (S26)

