# Dự án 23 — Thổ Địa “Tượng sống” (v3, 2026-11-24)

- Giữ câu chuyện Lâm đổi tiền lẻ rồi bị buộc đứng thay tượng Thổ Địa.
- Làm rõ hạn mười ngày lễ, cái giá của Lâm và ba lần anh thử thoát thế bí.
- Cú lật đến từ lựa chọn của Thổ Địa; ông nhận kỳ nghỉ phép, Lâm nhận ca đứng tượng.
- Cold open chỉ gợi tiếng tiền và đá; không hé lộ người đứng thay.
- Rút lời LONG về khoảng 3 phút; thêm PUNCH riêng cho các short TRỌN.
- Giữ câu kết mồm mép của Lâm và teaser P24 vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Lâm có thoát khỏi vai tượng trước khi hết mười ngày lễ, hay phải đứng thay ông Thổ Địa đến mùa sau?
- **Đồng hồ / cái giá:** Mười ngày lễ. Nếu bỏ trốn trước khi đền đóng cửa ngày cuối, Lâm bị giữ làm tượng đến mùa sau. Cái giá đặt lên Lâm.
- **Ba nấc leo thang:** Lâm đổi tiền ăn chênh, nhưng khách vẫn cài tiền lên tượng → anh gỡ tiền ban đêm để quay vòng, nhưng bàn tay đá giữ cổ tay → anh thử rời khám lúc đền mở, thân thể cứng như đá; nước liều là chịu đủ mười ngày rồi trả lại tiền.
- **Điểm thấp:** Lâm đứng cứng đờ giữa nắng, nghe khách khấn xin tiền trong khi chính anh đã lấy tiền của tượng.
- **Cú lật:** Thổ Địa chủ động chọn giữ Lâm làm tượng và tự đi nghỉ. Ông trả giá bằng một kỳ nghỉ phép; Lâm trả giá bằng mười ngày bị cài tiền, xoa bụng và không thể chạy.
- **Khoảnh khắc rợn:** Những ngón tay đá khép quanh cổ tay Lâm; đôi mắt vẽ nhìn xuống anh.
- **Câu kết:** Lâm đổi nghề làm bảo vệ, vẫn nhắc khách bỏ tiền vào hòm. Thổ Địa ngứa tay, còn Lâm hết đường vòng vo.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| THO | Ông Thổ Địa: béo tròn, râu bạc, áo vàng sờn, cầm quạt mo; cười hiền mà láu | R06, R09; tượng ở R01, R06 | Thiền Tâm Đức | `atempo=0.90,aecho=0.8:0.5:50:0.25` |
| LAM | Lâm: áo khoác gió, túi đeo bụng căng tiền lẻ, mồm mép | R01, R03, R04, R05, R07, R10, R11 | Adam bựa | `atempo=1.05` |
| KHACH | Bà khách đi lễ, áo dài nhung | R02 | Ngọc Huyền | `atempo=1.02` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "THO": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.90,aecho=0.8:0.5:50:0.25"}, "LAM": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "KHACH": {"preset": "Ngọc Huyền", "fx": "atempo=1.02"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | R06 | *(không lời, 2 s)* | Tiền giấy sột soạt · lễ hội xa |
| 0:02 | R08 | *(không lời, 1 s)* | Đá nghiến khẽ · nhạc tắt |
| 0:03 | S01 → S26 | **MN**: Lại mò vào à? Đi lễ đầu năm, chen nhau cài tiền lên tay tượng. Có người còn xoa bụng ông lấy may. Hôm nay kể chuyện một người đứng thay. | Mõ CỘC |
| 0:12 | R03 | **MN**: Lâm ngồi ngay cổng đền đổi tiền lẻ. Một trăm nghìn, anh đưa khách tám mươi nghìn tiền lẻ. Chênh hai mươi phần trăm, gọi là phí phục vụ lòng thành. | Đếm tiền |
| 0:22 | R04 | **LAM**: Cài vào tay ông càng nhiều càng linh. Tai ông thính lắm, khấn gì ông cũng nghe. Còn tiền trong túi tôi thì không nghe tiếng gọi về đâu. | |
| 0:31 | R02 → R03 | **MN**: Khách đổi tiền, cài lên tượng rồi đi về nhẹ lòng. Lâm thu tiền mặt, nhẹ túi khách, nặng túi mình. Hết ngày, anh bán cùng một xấp tiền mấy lượt. | Tiền sột soạt |
| 0:43 | R05 | **MN**: Nhưng xấp tiền không chịu nằm yên. Tối, đền đóng cửa, Lâm trèo vào khám gỡ tiền xuống. Sáng mai anh lại mang ra cổng đổi tiếp. | Gió đêm |
| 0:54 | S26 | **MN**: Một tờ hai nghìn đi mười vòng: khách đổi, khách cài, Lâm gỡ, rồi khách khác đổi. Ai cũng nghĩ mình vừa cho lộc. Lâm nghĩ mình tìm được máy in tiền chạy bằng chân. | “1 TỜ · 10 VÒNG” |
| 1:07 | R06 | **MN**: Ông Thổ Địa ngồi ở đền này hai trăm năm. Thần đất, biết ai làm gì trên đất của ông. Cán bộ địa chính lâu năm, chỉ thiếu bàn tiếp dân. | Chim sẻ |
| 1:17 | R06 | **THO**: Tay ta cài tiền. Tai ta cài tiền. Bụng bị xoa đến bóng như mặt bàn. Khách xin thi cử, xin việc, xin hết nợ. Chưa ai xin ta một ngày nghỉ. | |
| 1:30 | S26 | **MN**: Lâm thì chẳng xin gì. Anh chỉ lấy. Lộc dâng thần mà lấy không xin là lấy của thần. Thần đất nhớ dai; đất còn nhớ dấu chân, huống gì người trèo vào gỡ tiền. | |
| 1:43 | R05 | **MN**: Đêm mùng năm, Lâm trèo vào như mọi tối. Anh rút xấp tiền cuối khỏi tay tượng. | Gió đêm · tiền sột soạt |
| 1:52 | R07 | **MN**: Những ngón tay đá khép quanh cổ tay anh. Chậm. Nhẹ. Chắc. Đá lạnh như vừa kéo từ giếng lên. | Nhạc tắt · đá nghiến · im 1 s |
| 2:02 | R08 | **MN**: Lâm ngẩng lên. Đôi mắt vẽ của tượng, hai trăm năm nhìn ra cửa, đang nhìn xuống anh. | Im 2 s |
| 2:10 | R06 | **THO**: Mày thích tiền trên tay ta thế. Mười ngày lễ, đứng đây mà nhận. Ta đi nghỉ phép. | |
| 2:18 | R01 | **MN**: Sáng mùng sáu, đền mở cửa. Trong khám có ông tượng mới: gầy hơn, áo khoác gió, mặt người đang cố tỏ ra mình không phải người. | Lễ hội đông |
| 2:29 | R02 | **KHACH**: Đền mới tô tượng à? Trông thật quá. | Máy ảnh |
| 2:34 | R01 | **MN**: Người ta cài tiền lên tay Lâm, cài lên tai, xoa bụng rồi chụp ảnh. Anh cứng đờ. Ban ngày, cửa mở là phải đứng như đá; cửa đóng mới được ngồi, ăn xôi cúng thừa, ngủ trong khám. | Tiền sột soạt |
| 2:48 | R11 | **MN**: Đêm đầu, Lâm ngồi trong khám, tiền dính khắp áo, ăn đĩa xôi nguội. Anh thử nhấc chân qua bậc cửa. Không nhúc nhích. Cổng đền là đất của ông Thổ Địa. | Gió đêm · nhai xôi |
| 3:00 | R09 | **MN**: Còn ông Thổ Địa đi chợ, ăn bánh đúc, phe phẩy quạt. Hai trăm năm mới có kỳ nghỉ phép. Ông chỉ để Lâm trông hộ cái nghề đứng yên. | Chiêng xa |
| 3:11 | R01 → R11 | **MN**: Ngày thứ hai, Lâm thôi tìm lối ra. Ngày thứ năm, thôi mặc cả. Mỗi sáng mở cửa lại đứng; mỗi tối đóng cửa lại ngồi. Mười ngày, anh nghe đủ chuyện xin lộc mà không chen được câu nào. | “NGÀY 2 · NGÀY 5 · NGÀY 10” |
| 3:25 | R06 | **THO**: Mười ngày rồi. Nghe đủ chưa? | |
| 3:29 | R04 | **LAM**: Đủ rồi ông. Toàn xin tiền, xin may. Tiền thì con lấy hết. Nhưng con xin trả lại. | |
| 3:36 | R10 | **MN**: Lâm đổ cả mùa tiền vòng vo vào hòm công đức. Cụ từ ghi sổ; cuối năm tiền dùng tu sửa đền, lát lại đường làng. Lần đầu, tiền của Lâm đi đúng một đường. | Tiền đổ ào |
| 3:48 | R03 | **MN**: Hết lễ, Lâm được thả. Anh chuyển nghề làm bảo vệ đền. Ai cài tiền lên tay tượng, anh nhắc nhỏ… | |
| 3:55 | R03 | **LAM**: Bỏ vào hòm công đức đi bác. Ông Thổ Địa ngứa tay lắm. | |
| 4:00 | S33 → S34 | **MN**: Đi lễ thì bỏ tiền vào hòm. Nhét lên tay tượng, có khi người đứng đó đang đợi được nghỉ phép. | Rít điếu cày |
| 4:08 | S33 | **MN**: Tập sau, vía Thần Tài: bốn giờ sáng, người ta xếp hàng mua vàng. Ông Thần Tài dưới âm phủ đang mở sổ đối chiếu. | “TẬP SAU” · whoosh |
| 4:18 | S06 | **MN**: Bấm đăng ký đi. Không thì lần tới, đến lượt mày đứng canh hòm công đức. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN

- **MN**: Tượng đá giữa mùa lễ hội… vừa nhíu mày. (R06) · pop “THỔ ĐỊA”
- **MN**: Khách cài tiền lên tay, xoa bụng lấy may. Người đổi tiền lẻ ngoài cổng lại là Lâm. (R06 → R03)
- **LAM**: Cài vào tay ông càng nhiều càng linh. Tai ông thính lắm, khấn gì ông cũng nghe. (R04)
- **THO**: Tay ta cài tiền. Tai ta cài tiền. Bụng thì bị xoa đến bóng như mặt bàn. (R06)
- **MN**: Thần đất biết ai lấy lộc của mình. Còn người lấy… tưởng ông không thấy. (S26)
- **MN**: Lâm trèo vào đền ban đêm. Tao kể ở bản đầy đủ, link dưới. (R05)

### SH2 — TRỌN

- **MN**: Một tờ hai nghìn đi mười vòng, còn Lâm gọi đó là kinh doanh. (R03) · pop “LÂM”
- **MN**: Khách đổi tiền lẻ, cài lên tượng rồi đi về. Đêm đến, Lâm gỡ tiền ra. (R03 → R05)
- **MN**: Sáng hôm sau, cũng xấp tiền ấy lại nằm ở cổng đền. (R03)
- **MN**: Một tờ hai nghìn đi mười vòng: khách đổi, khách cài, Lâm gỡ, rồi khách khác đổi. Ai cũng nghĩ mình vừa cho lộc. Lâm nghĩ mình tìm được máy in tiền chạy bằng chân. (S26)
- **MN**: Đến đêm thứ năm, bàn tay đá khép lại. (R07)
- **MN**: Lâm mở quầy đổi tiền… ở ngay trong khám. PUNCH. (R03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (R05)

### SH3 — TRỌN

- **THO**: Tay ta cài tiền. Tai ta cài tiền. Bụng thì bị xoa đến bóng như mặt bàn. (R06) · pop “THỔ ĐỊA”
- **MN**: Ông Thổ Địa biết ai làm gì trên đất. Lâm đêm nào cũng trèo vào gỡ tiền. (R06 → R05)
- **THO**: Khách xin thi cử, xin việc, xin hết nợ. Chưa ai xin ta một ngày nghỉ. (R06)
- **MN**: Hai trăm năm ngồi trong khám, ông tìm được người đứng thay. (R06)
- **THO**: Mày thích tiền trên tay ta thế. Mười ngày lễ, đứng đây mà nhận. Ta đi nghỉ phép. (R06)
- **MN**: Hai trăm năm chờ nghỉ phép, ông chọn đúng người… chuyên gỡ tiền. PUNCH. (R06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (R01)

### SH4 — TRAILER

- **MN**: Nửa đêm trong đền, Lâm rút xấp tiền cuối khỏi tay tượng. (R05) · pop “LÂM”
- **MN**: Những ngón tay đá khép quanh cổ tay anh. Chậm. Nhẹ. Chắc. Đá lạnh như vừa kéo từ giếng lên. (R07)
- **MN**: Lâm ngẩng lên. Đôi mắt vẽ của tượng đang nhìn xuống anh. (R08)
- **THO**: Mày thích tiền trên tay ta thế. (R06)
- **MN**: Rồi sáng hôm sau, cánh cửa đền mở ra. (R01)
- **MN**: Và người đứng trong khám… lại không phải ông. (R01)

### SH5 — TRỌN

- **MN**: Có tượng mới trong khám. Gầy hơn. Áo khoác gió. Mặt đang cố tỏ ra mình không phải người. (R01) · pop “LÂM”
- **KHACH**: Đền mới tô tượng à? Trông thật quá. (R02)
- **MN**: Người ta cài tiền lên tay Lâm, cài lên tai, xoa bụng rồi chụp ảnh. Anh cứng đờ. (R01)
- **MN**: Mở cửa là đứng như đá; đóng cửa mới được ngồi, ăn xôi cúng thừa, ngủ trong khám. (R11)
- **MN**: Hai trăm năm mới có kỳ nghỉ phép. Ông Thổ Địa đi dạo, còn Lâm đứng thay. (R09)
- **MN**: Mười ngày sau Lâm được thả. (R10)
- **MN**: Ông đi nghỉ phép, Lâm nhận ca mười ngày. Cả hai cuối cùng cũng có chỗ đứng. PUNCH. (R09 → R01)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (R10)

### SH6 — TRỌN

- **MN**: Mười ngày lễ. Một người đứng im nghe thiên hạ xin tiền, trong khi chính anh đã lấy tiền của tượng. (R01) · pop “LÂM”
- **THO**: Mười ngày rồi. Nghe đủ chưa? (R06)
- **LAM**: Đủ rồi ông. Toàn xin tiền, xin may. Tiền thì con lấy hết. Nhưng con xin trả lại. (R04)
- **MN**: Lâm đổ cả mùa tiền vòng vo vào hòm công đức. Cụ từ ghi sổ; cuối năm tiền dùng tu sửa đền, lát lại đường làng. (R10)
- **MN**: Lần đầu, tiền của Lâm đi đúng một đường. (R10)
- **MN**: Từ gỡ tiền tượng sang bảo vệ hòm. Tiến bộ vừa đủ để khỏi phải đứng im. PUNCH. (R03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (R03)

### SH7 — TRAILER

- **MN**: Mùa lễ, khách cài tiền lên tay tượng. Tối đến, Lâm trèo vào gỡ sạch. (R06 → R05) · pop “LÂM”
- **MN**: Đêm mùng năm, anh rút xấp tiền cuối khỏi tay tượng. (R07)
- **MN**: Những ngón tay đá khép quanh cổ tay anh. (R07)
- **MN**: Đôi mắt vẽ của tượng, hai trăm năm nhìn ra cửa, đang nhìn xuống anh. (R08)
- **THO**: Mày thích tiền trên tay ta thế. Mười ngày lễ, đứng đây mà nhận. (R06)
- **MN**: Sáng mùng sáu, cánh cửa đền mở ra. (R01)
- **MN**: Trong khám có một ông tượng mới. Mặt người. Áo khoác gió. (R01)

## Hình

| Mã | Cảnh | v3 dùng |
|---|---|---|
| R01 | Khám thờ ngày lễ: Lâm thành tượng sống, tiền lẻ cài kín tay và tai; khách xoa bụng, chụp ảnh | ✓ |
| R02 | Bà khách đi lễ áo dài nhung, tay xoa bụng tượng | ✓ |
| R03 | Cổng đền, Lâm ngồi ghế nhựa với xấp tiền lẻ và biển đổi tiền lẻ | ✓ |
| R04 | Lâm cận, áo khoác gió, túi đeo bụng căng tiền lẻ, cười mồm mép | ✓ |
| R05 | Đền ban đêm, Lâm đèn pin đội đầu gỡ tiền trên tượng | ✓ |
| R06 | Tượng Thổ Địa sơn màu, tay cài tiền; dạng người mờ bên cạnh | ✓ |
| R07 | Cực cận bàn tay đá khép quanh cổ tay Lâm, tiền lẻ kẹt giữa | ✓ |
| R08 | Cực cận mặt tượng, đôi mắt vẽ nhìn xuống | ✓ |
| R09 | Ông Thổ Địa dạng người dạo chợ quê, ăn bánh đúc | ✓ |
| R10 | Lâm đổ tiền vào hòm công đức, cụ từ ghi sổ | ✓ |
| R11 | Đền đêm cửa đóng, Lâm ngồi trong khám ăn xôi cúng thừa | ✓ |

Tận dụng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Hai 08/02 · 18:00 (+07) |
| SH1 | Thứ Hai 08/02 · 19:00 |
| SH2 | Thứ Ba 09/02 · 11:30 |
| SH3 | Thứ Ba 09/02 · 19:00 |
| SH4 | Thứ Tư 10/02 · 11:30 |
| SH5 | Thứ Tư 10/02 · 19:00 |
| SH6 | Thứ Năm 11/02 · 11:30 |
| SH7 | Thứ Năm 11/02 · 19:00 |
