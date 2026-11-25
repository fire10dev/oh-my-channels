# Dự án 30 — Vong mẹ “Bó hoa một trăm triệu” (v3, 2026-11-24)

- Rút LONG còn khoảng 580 chữ thoại, nhịp dựng khoảng 3:00–3:15.
- Bổ sung ba lần bà Tư chủ động tìm cách lấy lại tiền; mỗi lần đều thất bại vì lựa chọn của Vinh.
- Giữ hạn 18:00 ngày 8/3 và cái giá đặt lên bà Tư, Ly và Vinh.
- Đặt Ly trước lựa chọn ở điểm thấp nhất; cô tự thú nhận với Hằng và trả lại tiền, chấp nhận mất quà lẫn quan hệ với Vinh.
- Mở rộng bốn short còn thiếu độ dài; mỗi TRỌN có punch riêng trước câu chỉ link.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ly có dám trả khoản tiền xây mộ cho Hằng trước 18:00 ngày 8/3, dù việc đó khiến cô mất bó hoa lẫn ông Vinh?
- **Đồng hồ / cái giá:** Trước 18:00 ngày 8/3, Hằng rời nhà. Nếu trượt, bà Tư mất dấu khoản tiền xây mộ và lại phải lang thang; Ly tiếp tục giữ món quà biết rõ là tiền lấy trộm; Vinh thoát được một ngày nữa.
- **Ba nấc leo thang:** Bà Tư xin Vinh trả tiền nhưng ông đuổi bà khỏi nhà. Bà nhờ Ly hỏi nguồn tiền; Vinh trấn an rồi từ chối chuyển lại. Ly định trả tiền vào két, nhưng Vinh đổi mã. Không ai ép được Vinh mở két.
- **Điểm thấp:** Một giờ trước hạn, Ly đứng trước cửa Hằng với những xấp tiền, không biết Hằng có tin mình hay Vinh sẽ chối.
- **Cú lật:** Ly tự chọn đem tiền đến nhà Hằng và kể hết. Cô trả giá bằng bó hoa và mối quan hệ với Vinh; bà Tư tìm lại khoản tiền mà không phá luật của mình.
- **Khoảnh khắc rợn:** Trong nhà hàng, cánh tiền rủ xuống, mép sẫm lại; bóng bà Tư hiện trong ly nước, ở chiếc ghế trống.
- **Câu kết:** Ma Nó châm biếm Vinh lấy tiền xây mộ mẹ mua hoa cho bồ; teaser P31 vào Thứ Hai, lớp nuôi vong và bà cụ đòi ăn cơm.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| VINH | Ông Vinh, giám đốc; vest xám, đồng hồ vàng, hào phóng ngoài đường, keo kiệt trong nhà | F05 | Adam bựa | `atempo=1.04` |
| LY | Ly; váy đỏ, tóc dài, nói thẳng, tỉnh táo | F03 | Ngọc Huyền | `atempo=1.02` |
| TU | Bà Tư; áo cánh nâu, khăn mỏ quạ, dáng nhỏ, nói nhẹ và chậm | F08 | Trúc Ly | `atempo=0.85,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.5:50:0.25` |
| HANG | Chị Hằng; vợ ông Vinh, bình tĩnh, ít lời | F02 | Mai Anh | `atempo=0.95` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"VINH":{"preset":"Adam bựa","fx":"atempo=1.04"},"LY":{"preset":"Ngọc Huyền","fx":"atempo=1.02"},"TU":{"preset":"Trúc Ly","fx":"atempo=0.85,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.5:50:0.25"},"HANG":{"preset":"Mai Anh","fx":"atempo=0.95"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | F01 | *(không lời, 1.5 s)* | Chuông cửa · đêm |
| 0:02 | F02 | **HANG**: Ai đấy? | Cửa hé |
| 0:04 | F03 | **LY**: Chị ơi. Cái này… là của chị. | Mõ cộc nhẹ |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Mùng tám tháng ba. Có người đem hoa đến nhà vợ. Người đem hoa… không phải chồng chị ấy. | “8/3” · mõ cộc |
| 0:14 | S34 | **MN**: Bó hoa này có giá một trăm triệu. |  |
| 0:17 | F04 | **MN**: Hai trăm bông hồng, mỗi bông gấp bằng tờ năm trăm nghìn. Tiền thật, hoa cũng thật. Chỉ có chuyện ông Vinh kể là giả. | Giấy polyme sột soạt |
| 0:27 | F05 | **VINH**: Ly thích hoa. Ly thích tiền. Bó này là cả hai. |  |
| 0:31 | F06 | **MN**: Tiền trong két nhà ông. Hằng dành mười năm xây lại mộ mẹ chồng. Ông lấy sạch, còn để mẩu giấy nhắc tiền dùng làm gì. | “TIỀN XÂY MỘ MẸ” · két cạch |
| 0:43 | S26 | **MN**: Hai mươi năm lấy nhau, Hằng chưa được chồng tặng hoa. Giỗ mẹ ông, chị lo đều. Ông lo quà cho người khác. |  |
| 0:52 | F07 | **MN**: Bà Tư, mẹ ông Vinh, bán rau nuôi con ăn học. Mất đã ba mươi năm. Mùng tám tháng ba nào, bà cũng chờ một nén nhang. | Khói nhang mỏng |
| 1:02 | F08 | **TU**: Tiền ấy con Hằng dành xây mộ cho bà. Thằng Vinh lấy rồi. Bà phải theo tiền mà tìm. |  |
| 1:10 | F09 | **MN**: Tối đó, nhà hàng sáng nến. Piano nhẹ. Ông Vinh đứng lên trao hoa. | Piano |
| 1:16 | F10 | **MN**: Hai bàn tay vừa chạm, cánh tiền rủ xuống như hoa thật. Mép tờ tiền sẫm lại. | Piano tắt · giấy rít |
| 1:24 | F11 | **MN**: Ly cúi nhìn ly nước. Trong mặt nước, một bà cụ ngồi ở chiếc ghế trống bên cạnh. | Im 1.5 s |
| 1:30 | F12 | **TU**: Cháu đừng sợ. Bà không làm gì cháu. Bà chỉ xin lại tiền. Hằng dành mười năm xây mộ cho bà. |  |
| 1:39 | F03 | **LY**: Anh ấy bảo tiền thưởng cuối năm. |  |
| 1:42 | F08 | **TU**: Bà xin nó trả. Nó đuổi bà khỏi nhà. Bà không thể ép nó. |  |
| 1:49 | F03 | **LY**: Vậy em gọi hỏi anh ấy ngay. | Điện thoại rung |
| 1:53 | F05 | **VINH**: Tiền thưởng. Em cứ nhận hoa. Chuyện trong nhà anh, đừng nghe người ngoài. |  |
| 2:00 | F08 | **TU**: Bà nhờ cháu hỏi. Nó nói thưởng, nhưng không chịu chuyển lại. Trước sáu giờ tối mùng tám. Hết ngày, bà lại mất dấu. | “HẠN: 18:00 · 8/3” · tick nhỏ |
| 2:11 | F03 | **LY**: Anh chuyển lại tiền cho chị Hằng. Em không giữ bó hoa này. |  |
| 2:16 | F05 | **VINH**: Em làm quá lên rồi. Tiền đó anh bù sau. Còn hoa cứ giữ. |  |
| 2:22 | F12 | **MN**: Ly thử cách thứ hai: gỡ hoa, đem tiền trả vào két. Vinh đổi mã. Hai trăm bông tiền trên bàn, không cửa nào mở. | Tick · giấy sột soạt |
| 2:34 | F08 | **TU**: Bà chỉ xin lại tiền. Bà không lấy gì của cháu. |  |
| 2:39 | F03 | **LY**: Em không muốn giữ thứ em biết là của người khác. |  |
| 2:44 | S26 | **MN**: Còn một giờ. Vinh không trả. Két không mở. Ly có thể ôm hoa về, chờ câu “bù sau” — thứ người ta nói rất lâu khi chưa phải chờ. | Tick nhỏ |
| 2:56 | F01 | **MN**: Mười bảy giờ, Ly đứng trước cửa nhà Hằng. Tiền đã gỡ thành từng xấp. Cô không biết Hằng tin mình hay đóng cửa. | Chuông cửa |
| 3:05 | F03 | **LY**: Chị ơi. Em là Ly. Anh Vinh lấy tiền trong két mua hoa cho em. Em xin lỗi. Đây là toàn bộ số tiền. |  |
| 3:15 | F02 | **HANG**: Chị biết két trống rồi. Chị chỉ chưa biết tiền đi đâu. Cảm ơn em đã đem về. |  |
| 3:23 | F13 | **MN**: Ly trả tiền. Hằng nhận. Không ai hóa thành bạn thân trong một buổi tối. Nhưng hai người ngồi uống trà, vì ngoài kia còn ông chồng phải giải thích. | Ấm trà rót |
| 3:35 | F13 | **VINH**: Anh… anh giải thích được. | Cặp da rơi |
| 3:39 | F02 | **HANG**: Giải thích với cái két đi. Nó nghe anh mười năm rồi. |  |
| 3:44 | F08 | **TU**: Ba mươi năm. Năm nay bà có hoa. |  |
| 3:48 | F14 | **MN**: Tháng sau Hằng xây lại mộ bà Tư. Ly đi cùng. Vinh đứng xa cầm túi. Lần đầu, ông được giao việc trong nhà mà không cần mật khẩu. | Gió đồng · chim |
| 3:58 | S33 → S34 | **MN**: Lấy tiền xây mộ mẹ đi tặng bồ thì nhớ: mẹ mày đi theo đấy. Mà mẹ thường đứng về phía con dâu. | Rít điếu cày |
| 4:07 | S26 | **MN**: Tập sau: lớp nuôi vong bán búp bê nhựa giá chục triệu. Rồi một bà cụ thật dọn vào nhà thầy, đòi ăn cơm. | “TẬP SAU” · whoosh |
| 4:16 | S06 | **MN**: Bấm đăng ký đi. Đỡ phải tự hỏi mẹ thích hoa gì. Gọi mẹ luôn đi. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN
- **LY**: Chị ơi. Cái này… là của chị. (F03) · pop “BỒ MANG HOA ĐẾN NHÀ VỢ”
- **HANG**: Ai đấy? (F02)
- **MN**: Mùng tám tháng ba. Có người đem hoa đến nhà vợ. Người đem hoa… không phải chồng chị ấy. (S01)
- **MN**: Ông Vinh lấy tiền trong két nhà, khoản Hằng dành mười năm để xây mộ mẹ chồng. (F06)
- **LY**: Chị ơi, em là Ly. Anh Vinh lấy tiền trong két để mua hoa cho em. Em xin lỗi. Đây là toàn bộ số tiền. (F03)
- **HANG**: Chị biết két trống rồi. Cảm ơn em đã đem về. (F02)
- **MN**: Quà 8/3 năm nay: bó hoa từ bồ, tiền từ két, chồng thì tự giải thích với cái két. (F13)
- *(không lời, 0.8 s)* (F13)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN
- **MN**: Ông Vinh đặt hai trăm bông hồng, mỗi bông gấp bằng tờ năm trăm nghìn. Một trăm triệu. (F04) · pop “BÓ HOA 100 TRIỆU”
- **VINH**: Ly thích hoa. Ly thích tiền. Bó này là cả hai. (F05)
- **MN**: Tiền lấy trong két nhà. Hằng bỏ ống mười năm, định xây lại mộ mẹ chồng. (F06)
- **MN**: Hai mươi năm lấy nhau, Hằng chưa được chồng tặng một bông hoa. Chị lo giỗ mẹ ông đều đặn. Ông lo quà cho người khác. (S26)
- **VINH**: Tiền thưởng. Em cứ nhận hoa. Chuyện trong nhà anh, em đừng nghe người ngoài. (F05)
- **MN**: Một bó hoa, hai trăm bông, một trăm triệu. Ngân sách tình cảm của ông Vinh hơi lệch khoản mục. (F04)
- *(không lời, 0.8 s)* (F06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN
- **TU**: Tiền ấy con Hằng dành xây mộ cho bà. Thằng Vinh lấy rồi. Bà phải theo tiền mà tìm. (F08) · pop “BÀ TƯ”
- **MN**: Dân gian có câu, tiền dành cho người âm thì người âm đi theo. Bà Tư không đến phạt ai. Bà đến tìm lại khoản tiền của mình. (S26)
- **TU**: Bà xin nó trả. Nó đuổi bà khỏi nhà. Bà không thể ép nó. (F08)
- **MN**: Ly biết sự thật. Còn người lấy tiền vẫn đang bận chọn hoa. (F04)
- **TU**: Bà chỉ xin lại tiền. Hằng dành mười năm để xây mộ cho bà. (F08)
- **MN**: Đúng là con trai có hiếu: lấy tiền xây mộ của mẹ để mua quà cho bồ. (F04)
- *(không lời, 0.8 s)* (F07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN
- **MN**: Hai bàn tay vừa chạm, cánh tiền rủ xuống như hoa thật. Mép tờ tiền sẫm lại. (F10) · pop “HOA TIỀN HÉO”
- **MN**: Ly cúi nhìn ly nước. Trong mặt nước, một bà cụ ngồi ở chiếc ghế trống bên cạnh. (F11)
- **LY**: Anh ấy bảo tiền thưởng cuối năm. (F03)
- **TU**: Cháu đừng sợ. Bà không làm gì cháu. Bà chỉ xin lại tiền. Hằng dành mười năm để xây mộ cho bà. (F12)
- **MN**: Không có tiếng hét. Chỉ có một bà mẹ chồng đến đòi đúng khoản phải thu. (F11)
- **MN**: Đáng sợ nhất ở nhà hàng vẫn là hóa đơn. (F09)
- *(không lời, 0.8 s)* (F11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN
- **HANG**: Chị biết két trống rồi. Chị chỉ chưa biết tiền đi đâu. Cảm ơn em đã đem về. (F02) · pop “QUÀ 8/3 BẤT NGỜ”
- **LY**: Em là Ly. Anh Vinh lấy tiền trong két để mua hoa cho em. Em xin lỗi. Đây là toàn bộ số tiền. (F03)
- **MN**: Ly trả tiền. Hằng nhận. Không ai hóa thành bạn thân trong một buổi tối. Hai người ngồi uống trà, vì ngoài kia còn ông chồng phải giải thích. (F13)
- **VINH**: Anh… anh giải thích được. (F13)
- **HANG**: Giải thích với cái két đi. Nó nghe anh mười năm rồi. (F02)
- **MN**: Hoa thì héo. Cái két vẫn nhớ. (F13)
- *(không lời, 0.8 s)* (F13)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER
- **MN**: Ông Vinh lấy tiền trong két nhà để mua bó hoa một trăm triệu. (F06) · pop “TIỀN ĐI ĐÂU?”
- **TU**: Tiền ấy con Hằng dành xây mộ cho bà. Thằng Vinh lấy rồi. Bà phải theo tiền mà tìm. (F08)
- **MN**: Ly biết sự thật. Trước sáu giờ tối mùng tám, cô phải quyết định sẽ làm gì với bó hoa. (F03)
- **LY**: Em không muốn giữ thứ em biết là của người khác. (F03)
- **MN**: Nhưng két đã đổi mã. Người lấy tiền lại chẳng chịu trả. Cửa nhà Hằng ở ngay trước mặt Ly. (F12)
- **MN**: Cô sẽ đem nó đi đâu? (F01)

### SH7 — TRAILER
- **MN**: Hai bàn tay vừa chạm, cánh tiền rủ xuống như hoa thật. Mép tờ tiền sẫm lại. (F10) · pop “CÓ AI Ở ĐÓ?”
- **LY**: Anh ấy bảo tiền thưởng cuối năm. (F03)
- **TU**: Bà chỉ xin lại tiền. Trước sáu giờ tối mùng tám. (F08)
- **MN**: Ly đứng trước một cánh cửa. Bên kia là người vợ của ông Vinh. (F01)
- **MN**: Vinh đã đổi mã két. Bà Tư không thể ép con trai mở ra. Ly thì cầm cả sự thật lẫn những xấp tiền. (F12)
- **MN**: Cánh cửa ấy có mở không? (F02)

## Hình

Ảnh tái dùng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| F01 | Cửa nhà phố ban đêm, đèn vàng; Ly váy đỏ ôm bó hoa hồng gấp bằng tiền đứng trước cửa | ✓ |
| F02 | Chị Hằng cận, đồ bộ ở nhà, tóc kẹp; hé cửa; bản sau cầm hoa và nhận tiền | ✓ |
| F03 | Ly cận, váy đỏ, tóc dài, vẻ sắc sảo nhưng lúng túng | ✓ |
| F04 | Tiệm hoa sang, thợ gấp tiền polyme thành hoa hồng; bó hoa hai trăm bông | ✓ |
| F05 | Ông Vinh cận, vest xám, đồng hồ vàng, cười nhìn điện thoại | ✓ |
| F06 | Két sắt nhỏ trong tủ quần áo mở, trống, còn mẩu giấy nhắc mục đích khoản tiền | ✓ |
| F07 | Bàn thờ gia đình, di ảnh bà Tư áo cánh nâu, khăn mỏ quạ, nén nhang đang cháy | ✓ |
| F08 | Bà Tư dáng nhỏ, áo cánh nâu, khăn mỏ quạ, mặt hiền, viền người mờ; cạnh di ảnh hoặc ngồi ghế | ✓ |
| F09 | Nhà hàng sang, nến, piano; Vinh đứng trao bó hoa tiền cho Ly | ✓ |
| F10 | Cận bó hoa tiền giữa hai bàn tay; cánh rủ, mép sẫm, khói nhang mỏng | ✓ |
| F11 | Cận ly nước nhà hàng, mặt nước phản chiếu bà cụ ở ghế trống bên cạnh | ✓ |
| F12 | Căn hộ đêm của Ly, bó hoa trên bàn kính, bà Tư ngồi đối diện hoặc Ly gỡ hoa | ✓ |
| F13 | Bàn trà; Hằng và Ly ngồi đối diện, ấm trà, bó hoa giữa bàn; bản sau Vinh đứng ở cửa, cặp rơi | ✓ |
| F14 | Nghĩa trang quê, mộ mới xây gọn, Hằng và Ly thắp nhang, Vinh đứng xa cầm túi | ✓ |

## Lịch

- LONG — Thứ Năm 04/03, 18:00 (+07).
- SH1 — Thứ Năm 04/03, 19:00 (+07).
- SH2 — Thứ Sáu 05/03, 11:30 (+07).
- SH3 — Thứ Sáu 05/03, 19:00 (+07).
- SH4 — Thứ Bảy 06/03, 11:30 (+07).
- SH5 — Thứ Bảy 06/03, 19:00 (+07).
- SH6 — Chủ Nhật 07/03, 11:30 (+07).
- SH7 — Chủ Nhật 07/03, 19:00 (+07).
