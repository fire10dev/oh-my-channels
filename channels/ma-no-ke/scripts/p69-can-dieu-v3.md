# Dự án 69 — Bà Cân "Thiếu hai lạng" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ rệt**: Hạn chót 4 giờ chiều xe 10 tấn cam giao cho đại lý tại trạm cân; trễ hạn hoặc thiếu hàng thì đền cọc 200 triệu và mất sạp hoa quả (cái giá đánh thẳng vào túi tiền bà Lệ).
- **3 nấc leo thang chủ động**: Bà Lệ nghi thiên hạ điêu → Nấc 1: mang cân điện tử sạp ra đo đối chất hàng thịt, hàng gạo vẫn hụt 2 lạng → Nấc 2: mua đồ niêm phong siêu thị thì bục đáy rỉ đúng 2/10, bà Lệ vác bùa đốt vía xua đuổi → Nấc 3: tự tay chỉ đạo cân thủ công từng sọt cam bằng cân sạp, càng cân càng hụt 20%.
- **Điểm thấp nhất & cú lật do chọn lựa**: 4 giờ chiều, đối tác dọa hủy hợp đồng; bà Lệ không còn đường lùi, phải tự tay lấy kìm bẻ vụn con chip gian lận mười năm và móc sạch túi tiền đền cho khách trước mặt cả chợ mới cứu được số cân xe hàng.
- **Cold open giấu đáp án**: Chỉ mở bằng tiếng quả cân lạch cạch trượt trên đĩa trống lúc 3 giờ sáng; Ma Nó không báo trước quy luật quả báo.
- **Kết chuẩn bible**: Giữ nguyên tính châm biếm đanh đá, bà Lệ cân đủ chỉ để giữ mạng chứ không hóa thánh lương thiện sến sẩm.

---

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Ăn bớt của người nghèo mỗi cân hai lạng suốt mười năm để xây nhà, đến khi cả thành phố bớt lại của mình đúng hai lạng, bà Lệ chịu tự tay bẻ chip cân hay chấp nhận phá sản mất trắng chuyến hàng cả đời?
- **Đồng hồ + cái giá**: 4 giờ chiều xe 10 tấn cam nhập vườn phải qua trạm cân để giao đại lý; thiếu cân hoặc trễ hẹn sẽ bị đền cọc 200 triệu và siết sạp.
- **3 nấc leo thang**:
  - *Nấc 1*: Mua gạo, mua thịt thấy hụt 2 lạng, vác cân điện tử "chuẩn" của mình ra chợ đo đối chất, cân của bà cũng tự nhảy số thiếu 2 lạng.
  - *Nấc 2*: Mua can dầu ăn niêm phong siêu thị có in sẵn dung tích; đem về sạp can dầu bục đáy chảy đúng 2/10; bà Lệ đốt vía khấn vái đuổi vong.
  - *Nấc 3 (nước liều)*: Xe 10 tấn về trạm cân xe tải báo hụt 2 tấn; bà Lệ không tin trạm cân, bắt phụ xe hạ sọt cân tay từng sọt bằng cân sạp; càng cân càng thiếu, đồng hồ điểm 4 giờ chiều.
- **Điểm thấp nhất**: 4 giờ chiều, đối tác dọa hủy cọc, 10 tấn cam nguy cơ đổ bỏ thối rữa, cái cân đòn cổ của bà Cân khẽ đung đưa chỉ đúng vạch thiếu 20%.
- **Cú lật**: Bà Lệ hiểu ra quy luật trời cân, quỳ lạy trước cái cân đòn, tự tay lấy kìm bẻ gãy con chip gian lận và dốc túi tiền đeo bụng đền cho khách quen; bảng số trạm cân xe tải lập tức nhảy đủ 10 tấn.
- **Khoảnh khắc rợn**: 3 giờ sáng chợ tối om, quả cân sắt trên đòn cân đồng ba mươi năm không ai đụng tự trượt từng nấc lạch cạch trên đĩa cân trống trơn rồi đòn cân hạ xuống thăng bằng tuyệt đối.
- **Câu kết**: Ông Tư bảo chắc bà Lệ sắp ốm nặng nên mới đổi tính; bà Lệ gắt "tôi cân đủ để giữ mạng đấy!".

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| LE | Bà Lệ (buôn hoa quả, túi tiền đeo bụng, đanh đá) | C04 | Ngọc Huyền | `atempo=1.05` |
| CAN | Bà Cân (hồn ma bà cụ nón mê thời bao cấp) | C07 | Đoan Trang | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:50:0.25` |
| KHACH | Ông Tư bán bún (khách quen bị hụt cân) | C05 | Thiền Tâm Đức | `anull` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "LE": {"preset": "Ngọc Huyền", "fx": "atempo=1.05"},
  "CAN": {"preset": "Đoan Trang", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:50:0.25"},
  "KHACH": {"preset": "Thiền Tâm Đức", "fx": "anull"}
}
```

---

## LONG (588 chữ lời thoại, ≈3:00)

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2.0 s)* | tieng dem · xe tai xa |
| 0:02 | C01 → C02 | **MN**: Chợ ba giờ sáng chưa mở. Cái cân đòn cổ kia… đang cân gì? | "3:00 SÁNG" · lach cach |
| 0:08 | S01 | **MN**: Lại mò vào à? Đi chợ mua đồ, bao giờ đem cân lại chưa? | mõ CỘC · braam |
| 0:13 | S26 | **MN**: Thiếu một lạng là quen tay, thiếu hai lạng là làm giàu. Góc chợ này có cái cân nhớ hết. | "THIẾU 2 LẠNG" |
| 0:21 | C03 | **MN**: Sạp bà Lệ khét tiếng chợ đầu mối. Cân một cân, thực ra tám lạng. | bip · cho on |
| 0:28 | C04 | **LE**: Cân nhà em chuẩn nhất chợ, sai đền gấp mười! Cứ yên tâm! | chotdon |
| 0:34 | C03 | **MN**: Bán sỉ bà cân đủ, khách lẻ thì bà xén ngọt hai lạng. | "BÁN SỈ: ĐỦ" · "KHÁCH LẺ: -2 LẠNG" |
| 0:40 | C05 | **KHACH**: Mua mười năm, cân lại lúc nào cũng hụt. Nhưng già rồi ngại cãi. | tho dai |
| 0:47 | C04 | **MN**: Xén từng lạng của người nghèo mười năm, bà Lệ xây căn nhà ba tầng. | "10 NĂM = CĂN NHÀ 3 TẦNG" |
| 0:54 | C01 | **MN**: Cột sạp treo cái cân đòn đồng bao cấp, di vật của bà Cân. | keo ket |
| 1:00 | C06 | **MN**: Ngày xưa ai nghi cân điêu thì nhờ bà Cân đo lại, không mất tiền. | cho xua |
| 1:07 | C01 | **MN**: Bà Cân mất, bà Lệ treo cân làm cảnh cho khách tin. | "TREO LÀM CẢNH" |
| 1:12 | S26 | **MN**: Ăn gian một lạng, trời cân một cân. Treo cân người ngay trên đầu, bà tưởng thế là khôn. | bassdown |
| 1:20 | C01 | **MN**: Ba giờ sáng rằm tháng Bảy. Chợ tối om. Bà Lệ ra dọn hàng. | nhac tat · gio lanh |
| 1:26 | C02 | **MN**: Cái cân đòn ba mươi năm bất động bỗng khẽ đung đưa kẽo kẹt. | can keo ket |
| 1:32 | C02 | **MN**: Quả cân sắt tự trượt từng nấc lạch cạch. Đĩa trống trơn, nhưng đòn cân hạ xuống thăng bằng. | lach cach · rung ron |
| 1:40 | C07 | **CAN**: Cân điêu một chén, đền lại một mâm. Hôm nay đến hạn. | "HÔM NAY ĐẾN HẠN" · echo ma |
| 1:46 | C04 | **MN**: Hạn chót bốn giờ chiều: xe mười tấn cam về trạm, trễ là đền cọc hai trăm triệu. | "HẠN: 16:00" · "ĐỀN 200 TRIỆU" · tick |
| 1:53 | C08 | **MN**: Sáng đó bà mua mười cân gạo, về còn tám. Mua hai cân thịt, còn một cân sáu. | bip · bip |
| 2:01 | C04 | **LE**: Cả chợ ăn cướp à? Đem cái cân điện tử chuẩn của tao ra đây! | dap ban |
| 2:07 | C08 | **MN**: Đặt thịt lên cân điện tử của sạp, màn hình vẫn nhảy: một cân sáu. | "1.6 KG" · bassdown |
| 2:13 | C08 | **MN**: Hoảng quá, bà mua can dầu niêm phong. Vác về, can dầu nứt đáy chảy mất đúng hai phần mười. | chay nuoc · hoang loan |
| 2:21 | C04 | **LE**: Ma ám rồi! Mau đốt vía đuổi vong đi! | lua chay |
| 2:25 | C09 | **MN**: Ba giờ chiều. Xe mười tấn cam trờ tới. Sổ đỏ bà Lệ cắm cả vào đây. | xe tai gam |
| 2:32 | C09 | **MN**: Xe lên bàn cân. Bảng điện tử nhảy số đỏ lòm: tám tấn. Hụt đúng hai tấn cam. | "8.0 TẤN" · ting bao dong |
| 2:39 | C04 | **LE**: Trạm cân gian lận! Hạ sọt xuống, lấy cân sạp tao cân tay từng sọt mau! | hoang loan |
| 2:45 | C09 | **MN**: Nhưng sọt nào cũng tự hụt hai lạng. Bốn giờ chiều rồi, đối tác dọa hủy hợp đồng. | chuong reng · tick |
| 2:52 | C04 | **MN**: Tiền cọc sắp mất, cam sắp thối, hai tấn hàng bốc hơi giữa ban ngày. | "ĐIỂM THẤP NHẤT" · nhac tat |
| 2:58 | C02 | **MN**: Bà nhìn lên cột sạp. Quả cân đồng của bà Cân trượt đúng vạch thiếu hai mươi phần trăm. | keo ket |
| 3:05 | C04 | **LE**: Con lạy bà Cân! Con sai rồi! Mười năm nay con ăn bớt của thiên hạ, con xin trả đủ! | sup lay |
| 3:12 | C03 | **MN**: Trước mặt cả chợ, bà Lệ bẻ gãy chip cân, dốc túi tiền đền cho khách. | rac · chip gay · rot tien |
| 3:19 | C09 | **MN**: Chip gãy, bảng trạm cân xe tải lập tức nhảy vọt lên mười tấn tròn trịa. | "10.0 TẤN" · ting |
| 3:25 | C03 | **MN**: Chuyến cam được cứu. Nhưng từ hôm ấy, sạp bà Lệ cân một cân ra đúng mười lạng. | "1 CÂN = 10 LẠNG" |
| 3:32 | C05 | **KHACH**: Cân đủ thật này. Chắc bà Lệ sắp ốm nặng nên mới tử tế. | cuoi mia |
| 3:37 | C04 | **LE**: Ốm cái đầu ông! Tôi cân đủ để giữ mạng đấy! | quat lon |
| 3:42 | S33 → S34 | **MN**: Đi chợ nhớ mang cân. Buôn bán nhớ kĩ: ăn bớt người nghèo một lạng, trời cân lại một xe. | rit dieu cay |
| 3:49 | B07 | **MN**: Tập sau: phòng khám thần y bán thuốc nam gia truyền trộn thuốc tây. Cái tên ấy… là của một ông lang có thật. | "TẬP SAU" · whoosh |
| 3:56 | S06 | **MN**: Bấm đăng ký đi. Ở đây tao cân đủ chữ, không thiếu một giây. | "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS

### SH1 (TRỌN) — Quả cân tự trượt lúc ba giờ sáng
- **MN**: Hồ sơ ma chợ đầu mối. Cái cân đòn ba mươi năm không ai đụng, nửa đêm tự cân ai? (C01) · pop "MA BÀ CÂN"
- **MN**: Ba giờ sáng rằm tháng Bảy. Chợ tối om. Sạp bà Lệ chưa dọn hàng. (C01)
- **MN**: Cái cân đòn đồng trên cột bỗng đung đưa kẽo kẹt. Quả cân sắt tự trượt từng nấc. Đĩa cân trống trơn, nhưng đòn cân hạ xuống thăng bằng. (C02) · pop "ĐĨA TRỐNG · ĐÒN THĂNG BẰNG"
- **CAN**: Cân điêu một chén, đền lại một mâm. Hôm nay đến hạn. (C07)
- *(lặng 0.8 s)*
- **MN**: Ai đến hạn và phải đền cái gì? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN) — Mười năm ăn bớt hai lạng một cân
- **LE**: Cân nhà em chuẩn nhất chợ, sai đền gấp mười! Cứ yên tâm! (C04) · pop "CÂN ĐIỆN TỬ ĐỘ CHIP"
- **MN**: Chuẩn nhất chợ cho khách mua sỉ. Còn khách lẻ một hai cân, bà xén ngọt hai lạng. (C03)
- **KHACH**: Mua mười năm, cân lại lúc nào cũng hụt. Nhưng già rồi ngại cãi. (C05)
- **MN**: Ăn bớt từng lạng của người nghèo mười năm, bà Lệ xây căn nhà ba tầng. Nhưng quả báo thì không tính bằng tiền lẻ. (C04) · pop "ĂN BỚT 10 NĂM"
- *(lặng 0.8 s)*
- **MN**: Cả thành phố cân điêu lại cho bà ta thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN) — Cả thành phố cân hụt cho một người
- **LE**: Cả chợ ăn cướp à? Đem cái cân điện tử chuẩn của tao ra đây! (C04) · pop "CÂN AI CŨNG HỤT"
- **MN**: Mua mười cân gạo, về còn tám. Mua hai cân thịt, cân lại một cân sáu. (C08)
- **MN**: Bà vác cân điện tử của mình ra đè lên tảng thịt. Màn hình vẫn nhảy: một cân sáu. (C08)
- **MN**: Mua can dầu niêm phong siêu thị, mang về nứt đáy chảy đúng hai phần mười. Ăn gian của người bao nhiêu, thiên hạ bớt lại bấy nhiêu. (C08) · pop "-20% TOÀN THÀNH PHỐ"
- *(lặng 0.8 s)*
- **MN**: Nhưng đỉnh điểm là chuyến xe chiều hôm đó. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN) — Một chuyến xe đền mười năm ăn bớt
- **MN**: Ba giờ chiều. Xe mười tấn cam trờ tới trạm cân. Sổ đỏ bà Lệ cắm cả vào đây. (C09) · pop "XE 10 TẤN CAM"
- **MN**: Xe lên bàn cân. Bảng điện tử nhảy số đỏ lòm: tám tấn. Hụt đúng hai tấn cam giữa ban ngày. (C09) · pop "MẤT TRẮNG 2 TẤN"
- **LE**: Trạm cân gian lận! Hạ sọt xuống, lấy cân sạp tao cân tay từng sọt mau! (C04)
- **MN**: Sọt nào đặt lên cân sạp cũng tự hụt hai lạng. Bốn giờ chiều điểm chuông, đối tác dọa hủy hợp đồng đền hai trăm triệu. (C09)
- *(lặng 0.8 s)*
- **MN**: Làm sao để lấy lại hai tấn cam bốc hơi? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN) — Bẻ gãy chip cân trước mặt cả chợ
- **LE**: Con lạy bà Cân! Con sai rồi! Mười năm nay con ăn bớt của thiên hạ, con xin trả đủ! (C04) · pop "QUỲ LẠY TRƯỚC SẠP"
- **MN**: Quả cân đồng của bà Cân trượt đúng vạch thiếu hai mươi phần trăm. Không còn đường chối cãi. (C02)
- **MN**: Trước mặt cả chợ, bà Lệ bẻ gãy chip cân, dốc túi tiền đền cho khách. (C03) · pop "BẺ GÃY CHIP GIAN"
- **MN**: Chip gãy, bảng trạm cân xe tải lập tức nhảy vọt lên mười tấn tròn trịa. (C09)
- *(lặng 0.8 s)*
- **MN**: Chuyện ly kỳ sau khi bà Lệ tháo chip, tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER) — Chiếc cân đòn nhớ hết
- **MN**: Hồ sơ ma bà Cân. Người đàn bà ba mươi năm trước chuyên cân hộ cả chợ đầu mối. (C06) · pop "MA BÀ CÂN"
- **MN**: Người ta chết đi, nhưng cái cân đòn đồng vẫn treo trên cột sạp. (C01)
- **MN**: Ba mươi năm không ai đụng. Đúng ba giờ sáng rằm tháng Bảy, quả cân bỗng tự trượt từng nấc. Đĩa cân trống trơn. (C02)
- **MN**: Chiếc cân đòn ấy đang cân cái gì? (C02) · pop "ĐANG CÂN CÁI GÌ?"
- **MN**: Bản đầy đủ có câu trả lời, link ngay dưới bình luận. (S26)

### SH7 (TRAILER) — Đồng hồ bốn giờ chiều
- **MN**: Còn đúng ba mươi phút nữa là đến hạn chót bốn giờ chiều. (C09) · pop "HẠN CHÓT 16:00"
- **MN**: Chuyến xe mười tấn cam cắm cả sổ đỏ, qua trạm cân chỉ còn đúng tám tấn. (C09)
- **MN**: Không giao đủ mười tấn trước bốn giờ, đền cọc hai trăm triệu và mất trắng sạp hàng. (C04)
- **LE**: Trạm cân gian lận! Hạ sọt xuống cân tay mau! (C04)
- **MN**: Hai tấn cam bay đi đâu giữa ban ngày? Ai sẽ cứu chuyến hàng này? (C02) · pop "HAI TẤN CAM Ở ĐÂU?"
- **MN**: Bản đầy đủ có câu trả lời, link ngay dưới bình luận. (S26)

---

## Hình

Tận dụng: B02, B07 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (v3 dùng đủ cả 9 ảnh):
- [x] **C01**: Chợ đầu mối 3 giờ sáng còn tối, sạp hoa quả, cột sạp treo cái cân đòn đồng cũ.
- [x] **C02**: Cận cân đòn đồng: đòn, quả cân, đĩa trống; các bản quả cân ở các nấc, bản thăng bằng.
- [x] **C03**: Sạp hoa quả bà Lệ ban ngày đông khách, cân điện tử sáng số (trống số); bản tháo chip.
- [x] **C04**: Bà Lệ cận: áo khoác lửng, túi đeo bụng đầy tiền; bản hoảng, bản ngồi bệt trên thùng cam, bản quỳ lạy.
- [x] **C05**: Ông Tư bán bún cận: xách túi cam; bản cân lại ở nhà gật gù cười mỉa.
- [x] **C06**: Ảnh màu cũ thời bao cấp: góc chợ, bà cụ nón mê cầm cân đòn đồng, người xếp hàng cân lại.
- [x] **C07**: Bà Cân mờ: áo cánh nâu, nón mê, cầm cân đòn đồng phát sáng nhẹ.
- [x] **C08**: Bộ ba: tiệm gạo, hàng thịt cân tảng thịt, can dầu niêm phong nứt đáy rỉ nước (trống số).
- [x] **C09**: Trạm cân xe tải: xe cam trên bàn cân, bảng số điện tử đỏ lòm (bản 8.0 tấn, bản 10.0 tấn).

---

## Lịch

- **LONG**: Thứ Hai 19/07 18:00 (+07).
- **SH1** (TRỌN): Thứ Hai 19/07 19:00 (+07).
- **SH2** (TRỌN): Thứ Ba 20/07 11:30 (+07).
- **SH3** (TRỌN): Thứ Ba 20/07 19:00 (+07).
- **SH4** (TRỌN): Thứ Tư 21/07 11:30 (+07).
- **SH5** (TRỌN): Thứ Tư 21/07 19:00 (+07).
- **SH6** (TRAILER): Thứ Năm 22/07 11:30 (+07).
- **SH7** (TRAILER): Thứ Năm 22/07 19:00 (+07).
- *(Tập sau P70 — Cụ Lang Hòe phát sóng Thứ Năm 22/07 18:00)*.
