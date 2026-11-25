# Dự án 95 — Từ thiện lũ "Nước lên tầng chín" (v3, 2026-11-24)

v3 nâng cấp kịch tính so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót là nửa đêm ngày thứ bảy khi con nước lũ ngoài biển rút. Nếu mười tỷ chưa về đủ tận tay bà con, vũng nước lũ ngập mắt cá bám chân vĩnh viễn (suốt đời đi đâu cũng lội trong vũng bùn rơm tanh hôi).
- **3 nấc leo thang chủ động**: Máy hút ẩm công nghiệp + nước hoa Pháp → Chuyển khoản online 10 tỷ qua app ngân hàng → Nước liều: Cố live chốt hợp đồng đại sứ (chập điện, nước cuộn trào lộ bùn rác trước 3 triệu mắt xem).
- **Cold open giấu đáp án**: Chỉ tiếng nước vỗ lóc bóc và câu hỏi ngơ ngác giữa đêm tầng chín khô ráo, không lộ mười tỷ hay nước lũ.
- **Cú lật do Vy Vy chọn và trả giá**: Chấp nhận vứt bỏ thể diện, lột sạch mi giả, lội bùn trao tận tay 120 hộ dân suốt một tháng để chuộc lại đôi chân khô.
- **Rút gọn lời thoại LONG đúng 579 chữ** (chuẩn khung 560–600 chữ, ≈3:00), bảng cảnh chuẩn hóa, fx VieNeu riêng biệt và 7 shorts (5 TRỌN + 2 TRAILER).

---

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Cô hot girl có chịu buông mười tỷ ăn chặn để đích thân lội bùn trả từng đồng trước khi con nước rút?
- **Đồng hồ + cái giá**: Hạn chót trước nửa đêm ngày thứ bảy, lúc con nước lũ ở miền Trung rút ra biển. Nếu mười tỷ chưa về đủ tận tay, vũng nước ngập mắt cá chân sẽ dính chặt suốt đời, đi đâu cũng kéo theo bùn rơm bốc mùi.
- **3 nấc leo thang chủ động**:
  - *Nấc 1*: Dùng tiền và máy móc tại chỗ: Thuê ba máy hút ẩm công nghiệp, xịt nửa chai nước hoa đắt tiền → Thất bại: Hút bao nhiêu nước đùn ra bấy nhiêu, mùi bùn át sạch mùi thơm.
  - *Nấc 2*: Dùng công nghệ để lách luật: Chuyển khoản sạch 10 tỷ về quỹ xã qua app ngân hàng → Thất bại: App báo thành công nhưng nước không rút một ly, lục bình vẫn trôi vào tận chân giường. Bác Thạch báo: "Thủy Tinh không nhận sao kê online".
  - *Nấc 3 (Nước liều)*: Đi ủng hiệu, trang điểm đậm, cố livestream chốt hợp đồng đại sứ triệu đô ngay tại studio ngập nước.
- **Điểm thấp nhất**: Giữa buổi livestream 3 triệu người xem, nước lũ dưới chân cuộn sóng, bùn non tràn lênh láng làm nổ chập giàn đèn, mùi rơm mục sực vào máy quay; hợp đồng bị hủy ngay trên sóng, chỉ còn đúng 24 giờ trước khi con nước rút.
- **Cú lật do nhân vật chọn và trả giá**: Vy Vy buộc phải chọn: bỏ thể diện hot girl sang chảnh, lột mi giả, mặc áo mưa rách, trực tiếp về miền Trung lội bùn trả tiền tận tay 120 hộ dân để cứu đôi chân mình; cái giá là đôi chân phồng rộp, da sạm nắng, mất trắng mười tỷ.
- **Khoảnh khắc rợn duy nhất (10%)**: Nửa đêm ở căn hộ tầng chín sang trọng, sàn gỗ trắng ngập một lớp nước nâu phẳng lặng như gương. Một khóm lục bình trôi chầm chậm từ phòng khách qua khe cửa phòng ngủ, dừng lại sát chân giường Vy Vy, xoay đúng một vòng. Ngoài cửa kính, cả thành phố khô ráo, đèn đường rực rỡ, không một giọt mưa.
- **Câu kết**: Vy Vy về thành phố, chân khô, livestream sao kê ba tiếng từng đồng. Bình luận hỏi: "Năm sau có kêu gọi nữa không chị?", cô nhìn xuống chân mình khẽ co rúm ngón chân. MN chốt trào phúng: "Thủy Tinh nhớ thù nghìn năm, mày tưởng nó tha cho mười tỷ à?"

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| BONG | Bông (trợ lý, người kể ngôi thứ nhất) | L01, L07, L08, L09 | Mai Anh | `atempo=1.02` |
| VY | Vy Vy (hot girl 3 triệu follow) | L03, L04, L08, L09 | Ngọc Huyền | `atempo=1.05,asetrate=48000*1.03,aresample=48000` |
| BAC | Bác Thạch (trưởng xóm vùng lũ) | L06 | Thiền Tâm Đức | `atempo=0.95,asetrate=48000*0.95,aresample=48000` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "BONG": {"preset": "Mai Anh", "fx": "atempo=1.02"}, "VY": {"preset": "Ngọc Huyền", "fx": "atempo=1.05,asetrate=48000*1.03,aresample=48000"}, "BAC": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.95,asetrate=48000*0.95,aresample=48000"}}
```

---

## LONG (579 chữ lời thoại, dựng ≈ 3:15)

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2.5 s)* | "TẦNG CHÍN · 2:00 SÁNG" · lóc bóc · nhạc tắt |
| 0:02 | L02 | *(không lời, 1.2 s)* | nhạc tắt |
| 0:04 | L01 | **BONG**: Ngoài trời không mưa. Sao dưới chân chị có tiếng nước vỗ? | lóc bóc · nhạc tắt |
| 0:07 | L02 | **VY**: Khùng à? Ngủ đi, mai còn ký hợp đồng triệu đô. | nhạc tắt |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Từng chuyển khoản cứu lũ chưa? Mười tỷ đi lạc, nhưng lũ thì không. | "MƯỜI TỶ ĐI LẠC" · coc · braam |
| 0:15 | S34 | **MN**: Lũ này biết định vị. Nó tìm thẳng lên tầng chín. | "TẦNG 9" |
| 0:18 | L03 | **BONG**: Tôi là trợ lý của chị Vy Vy. Hôm lũ miền Trung, chị livestream khóc nức nở. | "3 TRIỆU FOLLOW" · ting ting |
| 0:23 | L03 | **VY**: Bà con ơi, mỗi người một ly trà sữa. Em hứa từng đồng về tận tay! | pops |
| 0:27 | S26 | **MN**: Ba ngày. Mười tỷ về tài khoản riêng. | "10 TỶ · 3 NGÀY" · chotdon |
| 0:31 | L04 | **BONG**: Chị về vùng lũ đúng một buổi, đứng trên đê khô chụp ảnh với mấy thùng mì rồi về. | "ĐÊ KHÔ" · ghe may |
| 0:37 | L03 | **VY**: Số còn lại đang làm thủ tục giải ngân nhé cả nhà. |  |
| 0:41 | L05 | **MN**: Thần thoại bảo Thủy Tinh đến muộn, năm nào cũng dâng nước đi đòi. | "THỦY TINH ĐÒI LẠI" · song xa |
| 0:46 | L06 | **BAC**: Của nước trả về nước. Cầm mà không trả, Thủy Tinh đòi cả vốn lẫn lời. | mua xa |
| 0:52 | S26 | **MN**: Luật con nước rất sòng phẳng: hạn chót là nửa đêm ngày thứ bảy, khi nước rút ra biển. | "HẠN: NỬA ĐÊM THỨ BẢY" · tick |
| 0:59 | S26 | **MN**: Nước ngoài kia rút mà tiền chưa trả, vũng bùn này sẽ bám chặt chân suốt đời. | "BÁM CHÂN SUỐT ĐỜI" · bassdown |
| 1:05 | L01 | **BONG**: Đêm đó ở tầng chín. Hai giờ sáng, tôi giật mình vì tiếng nước vỗ lóc bóc. | nhac tat · loc boc |
| 1:11 | L07 | **BONG**: Sàn gỗ trắng ngập một lớp nước nâu đục. Mùi bùn non, rơm mục bốc lên nồng nặc. | "SÀN GỖ TẦNG 9" · im |
| 1:18 | L07 | *(không lời, 2.0 s)* | loc boc · im |
| 1:20 | L07 | **BONG**: Từ cửa phòng ngủ, một khóm lục bình trôi vào, dừng cạnh giường chị Vy, xoay đúng một vòng. | "LỤC BÌNH TRÔI VÀO PHÒNG" |
| 1:27 | L01 | **BONG**: Ngoài kính, cả thành phố khô cong, sáng rực, không một giọt mưa. | dieu hoa |
| 1:33 | L08 | **VY**: Bông! Kêu bảo vệ lên tát nước ngay! Hôi chết đi được! |  |
| 1:37 | L08 | **BONG**: Chị bước tới đâu, vũng nước ngập mắt cá đi tới đó. Sau lưng, sàn khô cong. | "NƯỚC THEO BƯỚC CHÂN" |
| 1:42 | L08 | **BONG**: Nấc một: chị thuê ba máy hút ẩm. Nhưng hút bao nhiêu, nước lại trào ra bấy nhiêu. | "NẤC 1: HÚT ẨM" · may hut |
| 1:49 | L03 | **BONG**: Nấc hai: chị cuống cuồng chuyển khoản sạch mười tỷ về quỹ xã. App báo thành công. | "NẤC 2: CHUYỂN KHOẢN 10 TỶ" · ting |
| 1:54 | L03 | **VY**: Xong rồi! Rút chưa Bông? Mau nhìn xem! |  |
| 1:57 | L06 | **BAC**: Tiền nhận bằng tay, phải mang chân về tận nơi trao. Thủy Tinh không nhận sao kê online. | "KHÔNG NHẬN SAO KÊ ONLINE" |
| 2:03 | S26 | **MN**: Còn hai mươi tư tiếng. Chiều đó, chị có lịch livestream ký hợp đồng mười tỷ. | "CÒN 24 GIỜ" · tick |
| 2:10 | L03 | **VY**: Đi ủng cao cổ, trang điểm đậm vào! Bảo đây là concept môi trường! |  |
| 2:14 | L03 | **BONG**: Ba triệu người đang xem. Bỗng nước cuộn sóng, bùn non tràn lênh láng studio. | "3 TRIỆU NGƯỜI XEM" · song cuon |
| 2:20 | L03 | **BONG**: Giàn đèn chập nổ, mùi bùn sực vào máy quay. Hợp đồng bị hủy ngay trên sóng. | "HỦY HỢP ĐỒNG" · no chap dien |
| 2:26 | L08 | **VY**: Bông… đặt vé về miền Trung ngay! Tao không muốn cả đời lội cống đâu! | "VỀ MIỀN TRUNG" |
| 2:30 | L09 | **BONG**: Chị lột mi giả, mặc áo mưa rách, lội bùn qua từng ngõ ngập. | ghe may · mua |
| 2:35 | L09 | **MN**: Một trăm hai mươi hộ dân, tiền trao tận tay. Cứ một nhà nhận đủ, ngấn nước rút một đốt ngón tay. | "1 NHÀ = 1 ĐỐT NGÓN TAY" |
| 2:42 | L09 | **BONG**: Mười một giờ đêm ngày thứ bảy, trao xong nhà cuối cùng. Nước rút sạch. Chỉ còn đôi chân phồng rộp. | "NƯỚC RÚT SẠCH" · tho phao |
| 2:48 | L03 | **BONG**: Về thành phố, chị livestream sao kê ba tiếng, không thiếu một đồng. | "SAO KÊ 3 TIẾNG" · ting ting |
| 2:53 | L03 | **MN**: Bình luận hỏi: Năm sau chị có kêu gọi nữa không? Chị nhìn xuống chân, im lặng rất lâu. | "IM LẶNG RẤT LÂU" |
| 2:58 | S34 | **MN**: Của nước trả về nước. Thủy Tinh nhớ thù nghìn năm, mày tưởng nó tha cho mười tỷ à? | rit dieu cay |
| 3:03 | B02 | **MN**: Tập sau: phường rối nước làng thay nghệ nhân bằng tay máy. Đêm ra mắt, tay máy hỏng hết. Mà con rối… vẫn diễn. | "TẬP SAU" · whoosh |
| 3:11 | S06 | **MN**: Bấm đăng ký đi. Ủng hộ tao thì không mất xu nào, mà lỡ có lũ… tao không kêu gọi từ thiện đâu. | "ĐĂNG KÝ" · coc |

---

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 (TRỌN) — Hồ sơ nước lên tầng chín
- **MN**: Hồ sơ nước lũ đi lạc. Ba ngày mười tỷ, tầng chín ngập mắt cá. (S01) · pop "NƯỚC LÊN TẦNG CHÍN"
- **MN**: Một. Kêu gọi từ thiện cứu lũ miền Trung, tiền về tài khoản riêng. (S26)
- **MN**: Hai. Về vùng lũ đứng trên đê khô chụp ba ngàn tấm ảnh rồi bay về. (L04) · pop "ĐỨNG ĐÊ KHÔ"
- **BONG**: Ba. Nửa đêm ở chung cư cao cấp, giật mình vì tiếng nước vỗ lóc bóc. (L01) · pop "2:00 SÁNG · TẦNG 9"
- **BONG**: Sàn gỗ trắng ngập nước nâu đục ngầu. Chị bước tới đâu, vũng nước trôi theo tới đó. (L08) · pop "NƯỚC THEO CHÂN"
- **MN**: Lũ miền Trung không đi lạc. Lũ tìm đúng người cầm tiền. (S26)
- *(lặng 0.8 s)*
- **MN**: Mười tỷ ấy đòi lại bằng cách nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN) — Bác Thạch và luật Thủy Tinh
- **MN**: Của thiên trả địa, nhưng của nước thì phải trả về nước. (S01) · pop "LUẬT THỦY TINH"
- **VY**: Số còn lại đang làm thủ tục giải ngân nhé cả nhà. (L03) · pop "10 TỶ ĐANG LÀM THỦ TỤC"
- **BAC**: Ở đây các cụ bảo của nước trả về nước. Cầm mà không trả, Thủy Tinh đòi cả vốn lẫn lời. (L06) · pop "ĐÒI CẢ VỐN LẪN LỜI"
- **MN**: Luật con nước sòng phẳng: hạn chót là nửa đêm ngày thứ bảy khi nước rút ra biển. (S26) · pop "HẠN: NỬA ĐÊM THỨ BẢY"
- **MN**: Nước ngoài kia rút mà tiền chưa trả, vũng bùn bám chặt chân cả đời. (S26)
- **MN**: Đố rửa sạch bằng nước hoa Pháp. (S34)
- *(lặng 0.8 s)*
- **MN**: Chị hot girl xoay xở thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN) — Nấc một & Nấc hai
- **VY**: Bông! Kêu bảo vệ lên tát nước ngay! Hôi chết đi được! (L08) · pop "HÔI CHẾT ĐI ĐƯỢC"
- **BONG**: Nấc một: chị thuê ba máy hút ẩm công nghiệp. Nhưng hút bao nhiêu, nước lại trào ra bấy nhiêu. (L08) · pop "NẤC 1: 3 MÁY HÚT ẨM"
- **BONG**: Nấc hai: chị hoảng quá, mở app chuyển khoản sạch mười tỷ về quỹ xã. App báo thành công. (L03) · pop "NẤC 2: CHUYỂN KHOẢN 10 TỶ"
- **VY**: Xong rồi! Rút chưa Bông? Mau nhìn xem! (L03)
- **BAC**: Tiền nhận bằng tay, phải mang chân về tận nơi trao. Thủy Tinh không nhận sao kê online. (L06) · pop "KHÔNG NHẬN SAO KÊ ONLINE"
- **MN**: Chuyển khoản không rút, vậy phải làm gì? (S26)
- *(lặng 0.8 s)*
- **MN**: Muốn rút một đốt ngón tay, phải trả giá thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN) — Sự cố livestream mười tỷ
- **MN**: Còn hai mươi tư tiếng trước khi nước rút. Chị hot girl liều mạng lên sóng. (S26) · pop "CÒN 24 GIỜ"
- **VY**: Đi ủng cao cổ, trang điểm đậm vào! Bảo đây là concept môi trường! (L03) · pop "CONCEPT MÔI TRƯỜNG"
- **BONG**: Ba triệu người đang xem live. Đột nhiên nước dưới chân chị cuộn sóng, bùn non tràn lênh láng studio. (L03) · pop "3 TRIỆU MẮT XEM"
- **BONG**: Giàn đèn chập nổ, mùi bùn sực vào máy quay. Hợp đồng mười tỷ bị hủy ngay trên sóng. (L03) · pop "HỦY HỢP ĐỒNG"
- **MN**: Cố giấu nước bẩn, nước bẩn tạt thẳng vào mặt. (S26)
- *(lặng 0.8 s)*
- **MN**: Cú lật nhục nhã của hot girl từ thiện. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN) — Trả giá từng đốt ngón tay
- **VY**: Bông… đặt vé về miền Trung ngay! Tao không muốn cả đời lội cống đâu! (L08) · pop "ĐẶT VÉ VỀ MIỀN TRUNG"
- **BONG**: Chị lột mi giả, mặc áo mưa rách, lội bùn qua từng ngõ ngập. (L09) · pop "LỘT MI GIẢ · LỘI BÙN"
- **MN**: Một trăm hai mươi hộ dân, tiền trao tận tay. Cứ một nhà nhận đủ, ngấn nước rút một đốt ngón tay. (L09) · pop "1 NHÀ = 1 ĐỐT NGÓN TAY"
- **BONG**: Mười một giờ đêm ngày thứ bảy, trao xong nhà cuối cùng. Nước rút sạch. Chỉ còn đôi chân phồng rộp. (L09) · pop "NƯỚC RÚT SẠCH"
- **MN**: Mi giả rơi ở nhà thứ ba, lòng tham rơi ở nhà thứ một trăm hai mươi. (S34)
- *(lặng 0.8 s)*
- **MN**: Hành trình lội bùn trả mười tỷ. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER) — Lục bình trong phòng ngủ tầng chín
- *(không lời)* TẦNG CHÍN · 2:00 SÁNG (L01) · sfx lóc bóc
- **BONG**: Ngoài trời không mưa. Sao dưới chân chị có tiếng nước vỗ? (L01) · pop "TIẾNG NƯỚC VỖ"
- **VY**: Khùng à? Ngủ đi, mai còn ký hợp đồng triệu đô. (L02)
- **BONG**: Sàn gỗ trắng ngập một lớp nước nâu đục. Mùi bùn non, rơm mục bốc lên nồng nặc. (L07) · pop "MÙI BÙN NON"
- **BONG**: Từ cửa phòng ngủ, một khóm lục bình trôi vào, dừng cạnh giường chị Vy, xoay đúng một vòng. (L07) · pop "LỤC BÌNH TRÔI VÀO PHÒNG"
- **BONG**: Ngoài kính, cả thành phố khô cong, sáng rực, không một giọt mưa. (L01)
- **MN**: Giữa chung cư cao cấp, tại sao lại có nước lũ miền Trung? (S26)
- *(cắt đen)*

### SH7 (TRAILER) — Hạn chót của Thủy Tinh
- **MN**: Còn hai mươi tư tiếng nữa là con nước rút. Nếu mười tỷ chưa về đúng chỗ, chuyện gì sẽ xảy ra? (S26) · pop "CÒN 24 GIỜ"
- **BAC**: Tiền nhận bằng tay, phải mang chân về tận nơi trao. Thủy Tinh không nhận sao kê online. (L06) · pop "KHÔNG NHẬN SAO KÊ ONLINE"
- **VY**: Đi ủng cao cổ, trang điểm đậm vào! Bảo đây là concept môi trường! (L03)
- **BONG**: Ba triệu người đang xem. Bỗng nước cuộn sóng, bùn non tràn lênh láng studio. (L03) · pop "NƯỚC CUỘN SÓNG"
- **BONG**: Giàn đèn chập nổ, mùi bùn sực vào máy quay! (L03) · sfx tiếng nổ chập điện
- **MN**: Cô hot girl chọn ôm mười tỷ hay chọn cứu lấy đôi chân mình? (S34)
- *(cắt đen)*

---

## Hình
Tái sử dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Ảnh vẽ mới (16:9, giữ nguyên mã từ v2):
| Mã | Mô tả | Trạng thái v3 |
|---|---|---|
| L01 | Căn hộ cao tầng sang trọng ban đêm, cửa kính nhìn ra thành phố khô ráo sáng đèn | DÙNG (Cold open, Khoảnh khắc rợn) |
| L02 | Cận chân giường trắng, vệt nước nâu loang dưới gầm | DÙNG (Cold open) |
| L03 | Vy Vy livestream trước đèn vòng (bản khóc; bản studio ngập nước có rơm và lục bình; bản mặt mộc sao kê; bản màn hình bình luận) | DÙNG (Mười tỷ, Studio, Sao kê) |
| L04 | Vùng lũ nước bạc, nhà ngập nửa cửa; Vy Vy đứng trên đê khô chụp ảnh cạnh thùng mì | DÙNG (Đê khô) |
| L05 | Tranh dân gian đơn giản núi và sóng dâng, không vẽ mặt thần | DÙNG (Tích Thủy Tinh) |
| L06 | Bác Thạch trưởng xóm đứng trong nhà ngập đến gối, nhìn ra cửa | DÙNG (Luật Thủy Tinh) |
| L07 | Sàn gỗ trắng căn hộ ngập nước nâu phẳng lặng, đèn ngủ phản chiếu; khóm lục bình trôi qua cửa phòng ngủ dừng cạnh giường | DÙNG (Khoảnh khắc rợn) |
| L08 | Vy Vy bước trên sàn, vũng nước nâu loang dưới chân đi theo, sau lưng khô cong | DÙNG (Nước theo chân, Nấc 1) |
| L09 | Vy Vy áo mưa xắn quần bê thùng hàng lội từ ghe vào nhà ngập; cận bàn chân ngấn nước hạ dần | DÙNG (Lội bùn trao tiền) |

---

## Lịch
- **LONG**: Thứ Hai 18/10 18:00 (+07).
- **7 Shorts**:
  - SH1: Thứ Hai 18/10 19:00
  - SH2: Thứ Ba 19/10 11:30
  - SH3: Thứ Ba 19/10 19:00
  - SH4: Thứ Tư 20/10 11:30
  - SH5: Thứ Tư 20/10 19:00
  - SH6: Thứ Năm 21/10 11:30
  - SH7: Thứ Năm 21/10 19:00
