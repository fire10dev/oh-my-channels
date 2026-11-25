# Dự án 96 — Rối nước "Tễu lên tiếng" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót đúng 45 phút đêm diễn ra mắt trực tiếp trước đoàn đối tác quốc tế và đài truyền hình; nếu Tễu diễn trọn ba hồi bóc phốt, hợp đồng nhượng quyền 5 tỷ tiêu tan, thương hiệu Bảo Heritage phá sản danh dự.
- **Cold open treo bí ẩn**: Không lộ máy móc hỏng hay chuyện ma; mở đầu bằng tiếng sào khua nước cộc cạch trong buồng trò trống trơn, con rối tự rẽ nước bơi ra.
- **3 nấc leo thang chủ động**:
  + Nấc 1: Tễu đọc vè bóc phốt sa thải thợ → Bảo ngắt điện toàn bộ hệ thống âm thanh, máy móc → Sào tre cơ học vẫn khua, kèn mõ tự nổi vang lộng.
  + Nấc 2: Bảo hạ mành tre bịt kín sân khấu → Tễu dẫn bầy rối bơi vụt ra trước mành, áp sát hàng ghế VIP diễn cảnh tráo ruột di sản.
  + Nấc 3: Bảo liều mình lao xuống gầm thủy đình toan giật van xả cạn hồ → Gió lật mành, khoảnh khắc rợn xuất hiện với buồng trò không người nhưng cuộn sóng chân tổ nghề.
- **Điểm thấp & Cú lật do nhân vật chọn và trả giá**: Bảo đối mặt với cõi âm, buộc phải quỳ lạy nhận lỗi, đưa mic mời cụ Lộc cùng 12 nghệ nhân lội xuống buồng trò tiếp quản để cứu buổi diễn. Cái giá: Trả đủ lương thưởng trọn đời và chịu Tễu cảnh cáo treo lơ lửng "chậm lương mai Tễu kể tiếp".
- **Lời thoại tinh gọn đúng chuẩn**: 582 chữ (nằm trọn trong khung 560–600 chữ, ≈3:00), nhịp kịch dồn dập, gọt bỏ dẫn giải dài dòng.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu ông chủ chuỗi di sản có thể bịt miệng được chú Tễu gỗ trước khi toàn bộ trò bẩn bị bóc mẽ trước đối tác quốc tế và sóng truyền hình trực tiếp?
- **Đồng hồ + cái giá**: 45 phút của đêm diễn ra mắt; trượt hạn thì hợp đồng nhượng quyền 5 tỷ bị hủy và bộ mặt bòn rút di sản phơi bày trên sóng trực tiếp.
- **3 nấc leo thang**:
  1. Ngắt điện: Bảo cắt cầu dao loa máy → Tễu vẫn khua sào bơi nổi, kèn mõ tự đánh, đọc vè bóc phốt đuổi người.
  2. Hạ mành tre: Bảo cho buông mành che mắt khán giả → Tễu dẫn bầy rối bơi vụt ra trước mành, áp sát hàng ghế VIP diễn cảnh bớt xén tiền công.
  3. Xả cạn hồ: Bảo toan giật van tháo nước để triệt hạ buổi diễn → Đối mặt buồng trò không người và dấu vết tổ nghề dưới đáy nước.
- **Điểm thấp nhất**: Bảo đứng run rẩy bên van xả, khán đài bên ngoài tiếng cười ồ vang dội, cụ Lộc nghẹn ngào nhìn di sản cha ông sắp bị đập nát.
- **Cú lật**: Bảo buộc phải tự miệng hạ mình xin lỗi, mời đích danh cụ Lộc và 12 nghệ nhân bước xuống nước tiếp quản buồng trò để Tễu chịu hạ màn.
- **Khoảnh khắc rợn duy nhất**: Giữa buổi diễn, gió hồ thốc mạnh lật tung góc mành tre: buồng trò sau mành trống không, tay máy gục đầu bất động trên giá sắt, nhưng mặt nước cuộn sóng từng vệt dài như hàng chục người đang lội khua sào theo nhịp trống cõi âm.
- **Câu kết**: Tễu nháy mắt đe dọa "chậm lương mai Tễu kể tiếp", Bảo nuốt cay đắng đếm tiền bán vé; Ma Nó chốt hạ bài học về người đứng sau mành.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (người dẫn chuyện) | B02, S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| LOC | Cụ Lộc (trùm phường cũ, người kể) | R03 | Thiền Tâm Đức | `atempo=0.95,asetrate=48000*0.96,aresample=48000` |
| BAO | Ông Bảo (chủ Bảo Heritage) | R04 | Quốc Tuấn | `atempo=1.05` |
| TEU | Chú Tễu (con rối gỗ trào phúng) | R05 | Adam bựa | `asetrate=48000*1.06,aresample=48000,aecho=0.7:0.4:30:0.2` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "LOC": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.95,asetrate=48000*0.96,aresample=48000"}, "BAO": {"preset": "Quốc Tuấn", "fx": "atempo=1.05"}, "TEU": {"preset": "Adam bựa", "fx": "asetrate=48000*1.06,aresample=48000,aecho=0.7:0.4:30:0.2"}}
```

## LONG (582 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | R02 | *(không lời, 2.0 s)* | "ĐÊM RA MẮT" · tieng-sao-khua-nuoc · mo-coc |
| 0:02 | R02 | **LOC**: Năm mươi năm tôi đứng sau mành. Đêm nay buồng trò trống không, mà rối vẫn bơi ra. | tieng-nuoc-gon |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Xem rối nước bao giờ chưa? Con rối nào cũng phải có người đứng sau. | "MA NÓ" · coc · braam |
| 0:14 | S26 | **MN**: Nhưng đêm nay, con rối gỗ tự bơi ra bóc phốt ông chủ. | "CON RỐI BÓC PHỐT" |
| 0:18 | R03 | **LOC**: Phường nợ tiền sửa thủy đình. Ông Bảo đến trả nợ rồi mua đứt luôn phường. | nhac-tram |
| 0:23 | R04 | **BAO**: Ngâm nước sáu tiếng là hủ lậu! Ba người bấm nút tay máy thay mười hai thợ lội nước. | "RỐI NƯỚC 4.0" · re-re |
| 0:30 | R03 | **LOC**: Mười hai thợ bị đuổi. Ông ấy in ảnh tôi lên tờ rơi: Kế thừa tinh hoa. | "SA THẢI 12 THỢ" |
| 0:36 | S26 | **MN**: Mua con rối thì dễ. Mua cái tay người đứng sau thì không có giá. | bassdown |
| 0:41 | R01 | **LOC**: Đêm ra mắt. Khán đài kín đối tác và truyền hình. | "KHÁN ĐÀI KÍN" · on-ao |
| 0:46 | R04 | **BAO**: Bốn mươi lăm phút nữa ký hợp đồng năm tỷ. Cấm để sơ suất! | "HẠN: 45 PHÚT" · "HỢP ĐỒNG 5 TỶ" · tick |
| 0:51 | R05 | **MN**: Mở màn là chú Tễu. Dân gian cho Tễu quyền nói thẳng, chọc cả quan làng. | "TỄU ĐƯỢC NÓI THẲNG" · trong-mo-man |
| 0:57 | R04 | **LOC**: Trống vừa điểm, tay máy giật khựng rồi gục đầu. Màn hình báo lỗi. | xoay-vong · tat-phut |
| 1:02 | R04 | **BAO**: Khởi động lại! Đám tay máy trăm triệu đâu rồi? | hoang-loan |
| 1:06 | R02 → R05 | **LOC**: Mặt nước rẽ sóng. Tễu trồi lên, quay thẳng mặt về phía ông Bảo. | re-song · boong |
| 1:11 | R05 | **TEU**: Làng có ông chủ to, mua phường lúc nợ, đuổi sạch thợ ra đường! In ảnh cụ trùm quảng cáo, rồi nhét cụ xuống hàng đuôi! | "TỄU LÊN TIẾNG" · trong · cuoi-ro |
| 1:20 | R04 | **BAO**: Ngắt điện! Tắt hết loa máy cho tao! | cauda · mayoff |
| 1:23 | S26 | **MN**: Điện tắt phụt. Sào tre vẫn khua. Tiếng kèn mõ tự nổi lên vang lộng. | sao-khua · ken-mo · coc |
| 1:28 | R06 | **TEU**: Cắt điện Tễu gõ mõ! Ông chủ ôm tiền tỷ, bớt xén tiền nhang, bỏ mặc hồ rêu mốc! | "BỚT XÉN TIỀN NHANG" · cuoi-ro |
| 1:35 | R06 | **LOC**: Các con rối khác bơi ra. Con rối vest kẻ kẹp giấy nợ, tay thò túi bớt tiền công. | ken-dam · re-song |
| 1:42 | R04 | **BAO**: Hạ mành xuống! Bịt kín sân khấu lại! | man-sap |
| 1:46 | R07 → R05 | **LOC**: Mành sập xuống. Tễu dẫn bầy rối bơi vụt ra trước mành, áp sát hàng VIP. | "VƯỢT MÀNH" · re-song-manh |
| 1:52 | R05 | **TEU**: Trốn sau mành làm chi? Ra xem quan lớn tráo ruột di sản nào bà con ơi! | "TRÁO RUỘT DI SẢN" · vo-tay-ran-ran |
| 1:58 | R04 | **BAO**: Mười phút nữa phát sóng! Tao rút van xả hồ, xem chúng mày bơi bằng gì! | "CÒN 10 PHÚT" · tick · nhac-tat |
| 2:04 | R04 → R07 | **LOC**: Ông Bảo toan giật van xả. Đúng lúc ấy, gió hồ thốc mạnh lật tung góc mành tre. | gio-thoc-manh · nhac-tat |
| 2:10 | R08 | **LOC**: Tôi nhìn qua khe hở. Buồng trò sau mành trống không. Tay máy gục đầu trên giá sắt. | *(không lời, 1.5 s)* · im-phang-phac |
| 2:17 | R08 | **LOC**: Vậy mà dưới nước, sóng cuộn lên như hàng chục người đang lội. Sào tre tự đưa đẩy theo nhịp trống. | sao-khua-nuoc · trong-coi-am |
| 2:24 | R08 | **LOC**: Các cụ tổ nghề đã về. Không ai mời, các cụ tự về giữ lấy nghề. | "TỔ NGHỀ VỀ" · am-vang |
| 2:29 | R04 | **BAO**: Không... không có ai điều khiển cả! | hoang-loan · run-ray |
| 2:33 | R04 | **LOC**: Ông Bảo quỵ bên mép nước. Hồ cạn thì trò lừa vỡ lở, tiêu tùng sự nghiệp. | "TIÊU TÙNG SỰ NGHIỆP" · bassdown |
| 2:38 | R04 → R03 | **BAO**: Cụ Lộc ơi cứu cháu! Cháu mời các cụ xuống buồng trò, trả đủ lương, giữ đúng lề lối! | quy-lay · nuc-no |
| 2:45 | R03 | **LOC**: Mười hai anh em xắn quần xuống hồ. Tay vừa chạm sào, mặt nước lập tức êm đềm trở lại. | nuoc-em · sao-em |
| 2:51 | R05 | **TEU**: Hoan hô ông chủ biết điều! Trả lương cho thợ thì Tễu múa mừng mùa màng no ấm! | "BIẾT ĐIỀU" · trong-hoi |
| 2:57 | R05 | **TEU**: Nhớ lấy nhé ông chủ ơi, chậm lương một bữa... mai Tễu lại kể tiếp ngay! | "CHẬM LƯƠNG · MAI KỂ TIẾP" · nhay-mat |
| 3:03 | R04 | *(không lời, 1.2 s)* | BAO-mat-meo · dem-tien |
| 3:05 | S33 → S34 | **MN**: Vé bán sạch. Đêm nào ông Bảo cũng thu tiền tỷ, và đêm nào cũng phải nghe Tễu chọc ngoáy. | "LÃI BAO NHIÊU · NHỤC BẤY NHIÊU" · coc |
| 3:11 | S34 | **MN**: Mua được con rối, nhưng cái hồn của phường nằm ở người dám lội nước buốt. | rit-dieu-cay |
| 3:16 | B07 | **MN**: Tập sau: quán bar trang trí Halloween bằng di ảnh cũ cho đúng chất ma Việt. Đêm ấy, một bá tước từ châu Âu mò sang... xin việc. | "TẬP SAU" · whoosh |
| 3:25 | S06 | **MN**: Bấm đăng ký đi. Không thì mai đi xem rối, con rối dưới nước lại ngẩng lên gọi đúng tên mày. | "ĐĂNG KÝ" · coc · tieng-nuoc-gon |

## SHORTS

### SH1 — Hồ sơ chú Tễu (TRỌN)
- **MN**: Hồ sơ chú Tễu. Con rối gỗ duy nhất được quyền chửi cả làng. (S01) · pop "HỒ SƠ: CHÚ TỄU"
- **MN**: Một. Cởi trần, đóng khố, cười toe. Nhưng nó nói thẳng mặt quan làng. (R05) · pop "CHỌC CẢ QUAN LÀNG"
- **MN**: Hai. Thay thợ bằng tay máy. Máy tính bảng lỗi, tay máy gục đầu. (R04) · pop "TAY MÁY GỤC"
- **TEU**: Làng có ông chủ to, mua phường lúc nợ, đuổi sạch thợ ra đường! In ảnh cụ trùm quảng cáo, rồi nhét cụ xuống hàng đuôi! (R05) · pop "TỄU LÊN TIẾNG"
- **MN**: Cắt điện, Tễu tự khua sào. Hạ mành, Tễu bơi ra trước mành. (S26) · pop "RỐI TỰ DIỄN"
- *(lặng 0.8 s)* (R05)
- **MN**: Ai đứng sau tấm mành đó? Tao kể ở bản đầy đủ, link dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH2 — Ba người thay mười hai thợ (TRỌN)
- **BAO**: Ngâm nước sáu tiếng là hủ lậu! Ba người bấm nút tay máy thay mười hai thợ lội nước. (R04) · pop "RỐI NƯỚC 4.0"
- **LOC**: Mười hai thợ bị đuổi. Ông ấy in ảnh tôi lên tờ rơi: Kế thừa tinh hoa. (R03) · pop "SA THẢI NGHỆ NHÂN"
- **MN**: Đêm ra mắt, tay máy tiền trăm triệu lăn ra chết lâm sàng. (R04) · pop "TAY MÁY LIỆT"
- **LOC**: Mặt nước rẽ sóng. Tễu trồi lên, quay thẳng mặt về phía ông Bảo. (R05) · pop "TỄU BƠI LÊN"
- **TEU**: Trốn sau mành làm chi? Ra xem quan lớn tráo ruột di sản nào bà con ơi! (R05) · pop "TRÁO RUỘT DI SẢN"
- *(lặng 0.8 s)* (R04)
- **MN**: Ông chủ toát mồ hôi hột giữa năm trăm khách. Tao kể ở bản đầy đủ, link dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH3 — Cắt điện thì Tễu gõ mõ (TRỌN)
- **BAO**: Ngắt điện! Tắt hết loa máy cho tao! (R04) · pop "NGẮT ĐIỆN!"
- **MN**: Điện tắt phụt. Sào tre vẫn khua. Tiếng kèn mõ tự nổi lên vang lộng. (S26) · pop "ĐIỆN TẮT · RỐI VẪN DIỄN"
- **TEU**: Cắt điện Tễu gõ mõ! Ông chủ ôm tiền tỷ, bớt xén tiền nhang, bỏ mặc hồ rêu mốc! (R06) · pop "BỚT XÉN TIỀN NHANG"
- **BAO**: Hạ mành xuống! Bịt kín sân khấu lại! (R04) · pop "HẠ MÀNH XUỐNG"
- **LOC**: Mành sập xuống. Tễu dẫn bầy rối bơi vụt ra trước mành, áp sát hàng VIP. (R05) · pop "VƯỢT MÀNH"
- *(lặng 0.8 s)* (R05)
- **MN**: Càng giấu, Tễu càng chửi to hơn. Tao kể ở bản đầy đủ, link dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH4 — Lãi bao nhiêu nhục bấy nhiêu (TRỌN)
- **MN**: Mua lại phường rối làng, đuổi hết nghệ nhân. Đêm ra mắt bị con rối bóc phốt trước cả ngàn người. (S01) · pop "MUA DANH · ĐUỔI THỢ"
- **LOC**: Đêm nào Tễu cũng bơi ra chọc, khán giả cười nghiêng ngả, vé bán sạch từ sáng sớm. (R01) · pop "CHÁY VÉ MỖI ĐÊM"
- **MN**: Đêm nào ông Bảo cũng thu tiền tỷ, và đêm nào cũng phải nghe Tễu chọc ngoáy. (R04) · pop "LÃI BAO NHIÊU · NHỤC BẤY NHIÊU"
- **TEU**: Nhớ lấy nhé ông chủ ơi, chậm lương một bữa... mai Tễu lại kể tiếp ngay! (R05) · pop "CHẬM LƯƠNG · MAI KỂ TIẾP"
- *(lặng 0.8 s)* (R04)
- **MN**: Bài học nhớ đời cho thói tráo ruột di sản. Tao kể ở bản đầy đủ, link dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH5 — Ai đứng sau mành? (TRỌN)
- **LOC**: Năm mươi năm tôi đứng sau mành. Đêm nay buồng trò trống không, mà rối vẫn bơi ra. (R02) · pop "BUỒNG TRÒ TRỐNG KHÔNG"
- **LOC**: Gió hồ thốc mạnh lật tung góc mành tre. Tôi nhìn qua khe hở. (R07) · pop "GIÓ LẬT MÀNH"
- **LOC**: Buồng trò sau mành trống không. Tay máy gục đầu trên giá sắt. (R08) · pop "TAY MÁY CHẾT ĐỨNG"
- **LOC**: Vậy mà dưới nước, sóng cuộn lên như hàng chục người đang lội. Sào tre tự đưa đẩy theo nhịp trống. (R08) · pop "SÓNG CUỘN CHÂN NGƯỜI"
- **LOC**: Các cụ tổ nghề đã về. Không ai mời, các cụ tự về giữ lấy nghề. (R08) · pop "CÁC CỤ TỔ VỀ"
- *(lặng 0.8 s)* (R08)
- **MN**: Nghề truyền đời, máy móc nào chạm tới được. Tao kể ở bản đầy đủ, link dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH6 — Hạn chót bốn mươi lăm phút (TRAILER)
- **BAO**: Bốn mươi lăm phút nữa ký hợp đồng năm tỷ. Cấm để sơ suất! (R04) · pop "HẠN: 45 PHÚT"
- **LOC**: Trống vừa điểm, tay máy giật khựng rồi gục đầu. Màn hình báo lỗi. (R04) · pop "LỖI HỆ THỐNG"
- **LOC**: Mặt nước rẽ sóng. Tễu trồi lên, quay thẳng mặt về phía ông Bảo. (R05) · pop "TỄU XUẤT HIỆN"
- **TEU**: Làng có ông chủ to, mua phường lúc nợ, đuổi sạch thợ ra đường! (R05) · pop "BÓC PHỐT ÔNG CHỦ"
- **BAO**: Mười phút nữa phát sóng! Tao rút van xả hồ, xem chúng mày bơi bằng gì! (R04) · pop "CÒN 10 PHÚT"
- **MN**: Khi van xả hồ hé mở, thứ gì đang chực chờ nuốt trọn ông ta? Link bản đầy đủ ngay dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

### SH7 — Đêm kinh hoàng của ông chủ Bảo Heritage (TRAILER)
- **MN**: Ông chủ chuỗi di sản sa thải sạch nghệ nhân để thay bằng tay máy bốn chấm không. (S01) · pop "BẢO HERITAGE 4.0"
- **MN**: Nhưng đêm ra mắt, tay máy tắt ngóm, con rối gỗ lại tự bơi ra bóc sạch mánh khóe bớt xén. (R06) · pop "CON RỐI TỰ DIỄN"
- **BAO**: Ngắt điện! Hạ mành xuống! Bịt miệng chúng nó lại! (R04) · pop "BỊT MIỆNG CON RỐI"
- **LOC**: Gió lật mành tre. Sau mành không có ai, nhưng mặt nước sôi sùng sục vệt chân người lội. (R07) · pop "SAU MÀNH LÀ AI?"
- **BAO**: Không... không có ai điều khiển cả! (R04) · pop "KHÔNG CÓ NGƯỜI!"
- **MN**: Ai đang thực sự kéo sào dưới đáy hồ đêm đó? Link bản đầy đủ ngay dưới. (S34) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

## Hình
Tái dùng: B02, B07 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh v2 (8 ảnh 16:9, toàn bộ được dùng trong v3):
| Mã | Trạng thái v3 | Cảnh |
|---|---|---|
| R01 | [DÙNG] | Thủy đình mái cong giữa hồ ban đêm, mành tre, đèn lồng, khán đài; bản băng rôn "BẢO HERITAGE — RỐI NƯỚC 4.0"; bản hàng người mua vé |
| R02 | [DÙNG] | Cận mép mành tre chạm mặt nước gợn sóng |
| R03 | [DÙNG] | Cụ Lộc: râu bạc, áo cánh nâu, tay nhăn, ngồi bậc thủy đình; bản cùng nghệ nhân xắn quần lội vào khoang nước |
| R04 | [DÙNG] | Ông Bảo: vest kẻ, khăn túi ngực, máy tính bảng; bản màn hình vòng xoay chờ, tay máy gục; bản đứng bật dậy; bản nhìn két tiền mặt méo |
| R05 | [DÙNG] | Chú Tễu gỗ cởi trần đóng khố, bụng tròn, cười toe, trồi khỏi nước; bản cúi chào; bản nháy mắt |
| R06 | [DÙNG] | Các con rối diễn: rối vest kẻ có khăn túi ngực cầm bút ký giấy, rối khác cắt dây đèn |
| R07 | [DÙNG] | Gió lật một góc mành tre; bản mành rơi xuống |
| R08 | [DÙNG] | Khoang buồng trò sau mành trống không, tay máy gục đầu trên giá, mặt nước gợn từng vệt sóng, sào tre tự đưa đẩy |

## Lịch
- LONG: Thứ Năm 21/10 18:00 (+07)
- SH1 (TRỌN): Thứ Năm 21/10 19:00 (+07)
- SH2 (TRỌN): Thứ Sáu 22/10 11:30 (+07)
- SH3 (TRỌN): Thứ Sáu 22/10 19:00 (+07)
- SH4 (TRỌN): Thứ Bảy 23/10 11:30 (+07)
- SH5 (TRỌN): Thứ Bảy 23/10 19:00 (+07)
- SH6 (TRAILER): Chủ Nhật 24/10 11:30 (+07)
- SH7 (TRAILER): Chủ Nhật 24/10 19:00 (+07)
