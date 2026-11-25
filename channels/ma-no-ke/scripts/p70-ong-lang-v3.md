# Dự án 70 — Ông lang "Không chữa được thì nói không chữa được" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá rõ ràng**: Hạn sáng thứ Hai ký hợp đồng nhượng quyền chuỗi 10 phòng khám gom cọc 5 tỷ. Cái giá: Toàn đối mặt trắng tay, đền cọc và vào tù; còn cụ Hòe bảo vệ 60 năm y đức không để bị biến thành tấm bình phong đầu độc người lành.
- **3 nấc leo thang chủ động**: (1) Toàn bị nhập phát ngôn nói thật -> chuyển sang câm nín kê đơn giấy; (2) Ngòi bút tự ngoáy chữ "ĐI VIỆN" -> Toàn thuê người bán thay thì người làm ngửi thấy tân dược cấm cũng hét toáng bảo bệnh nhân đi viện; (3) Toàn liều lĩnh vung búa định chở vứt tủ thuốc cổ ra bãi rác để trừ vía.
- **Điểm thấp nhất & Cú lật do nhân vật chọn và trả giá**: Toàn mất trắng hợp đồng, dân vây cửa đòi nợ; muốn mở miệng nói dối để sống tiếp thì phải tự tay bắc thang hạ biển tên cụ Hòe, trả tủ thuốc về làng.
- **Cold open không lộ đáp án**: Treo câu hỏi bằng tiếng kéo ngăn tủ và bí mật của tủ thuốc trăm ngăn giữa đêm, cắt bỏ hoàn toàn việc Ma Nó spoil trước cú lật.
- **Gọt lời thoại LONG chuẩn 587 chữ (khuôn 560–600 chữ, ≈3:00)**, phân cảnh bảng 4 cột chuẩn P04 v4.
- **SHORTS**: Đủ 5 TRỌN + 2 TRAILER (9:16, 30–40 s), có pop tên con ma, punchline sắc và câu điều hướng link chuẩn Ma Nó.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu kẻ mượn danh ông lang đã khuất để bán thuốc giả có giữ nổi thương hiệu tiền tỷ khi chính vong linh cụ lang về bắt gã phải sống đúng cái danh ấy?
- **Đồng hồ + cái giá**: Hạn chót sáng thứ Hai ký hợp đồng nhượng quyền chuỗi phòng khám gom cọc 5 tỷ. Trượt hạn: Toàn vỡ nợ, đền cọc và đối mặt kiện tụng; cụ Hòe: 60 năm thanh danh y đức dưới suối vàng không để bị vấy bẩn thành trò lừa đảo.
- **3 nấc leo thang**:
  1. Toàn mở miệng định hô 3 triệu thì miệng tự thốt ra sự thật thuốc trộn thuốc tây; gã chuyển sang ngậm miệng kê đơn bằng giấy.
  2. Bút tự ngoáy chữ "ĐI VIỆN"; Toàn thuê người bán thay thì người làm cũng ngửi thấy mùi tân dược cấm và hô bệnh nhân đi viện; dân kéo đến quây kín phòng khám đòi tiền.
  3. Đêm Chủ nhật, Toàn cùng đường vung búa định chở vứt tủ thuốc cổ ra bãi rác để diệt vía cụ Hòe.
- **Điểm thấp nhất**: Đêm Chủ nhật, đối tác đe dọa hủy hợp đồng phạt cọc, công an nhận đơn tố cáo, phòng khám bị bao vây, Toàn trơ trọi giữa căn phòng tối om đối diện tủ thuốc trăm ngăn lạnh ngắt.
- **Cú lật**: Toàn muốn thoát cảnh câm mồm và bị vía vật thì buộc phải tự tay chọn hạ tấm biển "Cụ Lang Hòe", trả tủ thuốc về làng. Đội danh người ngay thì phải chịu cái giá của người ngay.
- **Khoảnh khắc rợn**: Trăm ngăn kéo tủ thuốc đồng loạt tự trượt tung ra trong đêm tối, mùi thuốc bắc tràn ngập siết nghẹt lồng ngực, môi Toàn mím chặt nhưng tiếng cụ Hòe gầm vang từ trong chính xương sườn gã.
- **Câu kết**: Châm biếm thói đời đông y trộn tân dược; Toàn chuyển sang bán bảo hiểm vẫn buột miệng nói thật; teaser mâm cô hồn P71.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HOE | Cụ Lang Hòe (người kể) | L07, L08 | Thiền Tâm Đức | `atempo=0.95,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.4:40:0.2` |
| TOAN | "Thần y" Toàn | L04 | Adam bựa | `atempo=1.03` |
| BN | Bà Thoa (bệnh nhân) | L06 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HOE": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.95,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.4:40:0.2"}, "TOAN": {"preset": "Adam bựa", "fx": "atempo=1.03"}, "BN": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG (587 chữ lời thoại, dựng ≈ 3:15)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | L01 | *(không lời, 2.0 s)* | dongho · keogo |
| 0:02 | L01 | **HOE**: Tủ thuốc sáu mươi năm của tôi. Trăm ngăn gỗ lim. Nhắm mắt tôi cũng biết ngăn nào cam thảo, ngải cứu. | "TỦ THUỐC 60 NĂM" |
| 0:08 | L01 → L02 | **HOE**: Tôi mất mười năm rồi. Nhưng cái tủ… đêm nay lại tự mở. | "10 NĂM" · keogo2 |
| 0:13 | S01 → S26 | **MN**: Lại mò vào à? Uống thuốc nam "gia truyền" bao giờ chưa? | "GIA TRUYỀN?" · coc · braam |
| 0:18 | S34 | **MN**: Hôm nay để chính ông lang trong ảnh thờ kể cho mà nghe. | |
| 0:22 | L07 | **HOE**: Tôi là Hòe. Cả đời bốc thuốc giữ đúng một câu: không chữa được thì nói không chữa được. | "CỤ LANG HÒE" · "KHÔNG CHỮA ĐƯỢC THÌ NÓI KHÔNG CHỮA ĐƯỢC" |
| 0:28 | L03 | **HOE**: Mười năm sau khi tôi mất, thằng Toàn mua tủ cũ, rồi vác tên tôi lên biển hiệu ngoài phố. | "MUA LẠI BIỂN TÊN" |
| 0:34 | L04 | **TOAN**: Thuốc nam cụ Hòe! Đau khớp mấy mươi năm, ba hôm nhảy chân sáo! Một liệu ba triệu! | "3 HÔM HẾT ĐAU" · "3 TRIỆU" · ting |
| 0:40 | L05 | **HOE**: Nó trộn thuốc tây vào viên hoàn. Uống đỡ ngay thì khen thần y, nhưng ba tháng sau mục xương, phù mặt. | "TRỘN THUỐC TÂY" · naphu |
| 0:47 | L03 → B02 | **MN**: Toàn sắp đổi đời. Sáng thứ Hai tới, gã ký nhượng quyền mười phòng khám, ẵm cọc năm tỷ. | "HẠN: THỨ HAI" · "CỌC 5 TỶ" · tick |
| 0:54 | L08 | **HOE**: Ký xong đợt này thì sáu mươi năm y đức của tôi coi như ô uế. | bassdown |
| 0:59 | L08 | **HOE**: Rước đồ người chết về lòe đời, vía người ta theo về đòi nợ. Tôi về. | "VÍA THEO VỀ" · whoosh |
| 1:05 | L06 | **MN**: Sáng thứ Sáu, bà Thoa sang lấy thêm thuốc, mặt tròn xoe vì phù nước. | "BÀ THOA" · "MẶT PHÙ" |
| 1:10 | L06 | **BN**: Thầy Toàn bốc tôi liệu nữa! Uống vào êm ru! | |
| 1:14 | L04 | **MN**: Toàn định hô ba triệu, nhưng cổ họng nghẹn đắng mùi quế. | nghen |
| 1:18 | L04 | **TOAN**: Bà ơi! Thuốc tôi trộn thuốc tây đấy! Mặt bà phù rồi, đi viện gấp, tôi không chữa được! | "TRỘN THUỐC TÂY ĐẤY!" · "ĐI VIỆN GẤP!" |
| 1:25 | L06 | **BN**: Thầy nói cái gì gở mồm thế? | |
| 1:28 | L04 | **MN**: Toàn bịt chặt mồm, mắt trợn trừng. Gã định chữa lời, miệng lại buột ra: "Đi viện khám thận ngay!" | "ĐI VIỆN KHÁM THẬN NGAY!" |
| 1:34 | L08 | **HOE**: Đội tên tôi thì phải nói lời tôi. | "NÓI LỜI TÔI" |
| 1:37 | L04 | **MN**: Toàn câm nín kê đơn. Tay run lẩy bẩy, ngòi bút tự ngoáy hai chữ to tướng: ĐI VIỆN. | "NẤC 1: VIẾT ĐƠN" · "ĐI VIỆN" · but |
| 1:44 | L03 | **MN**: Gã thuê người bán thay. Người làm vừa mở hũ thuốc liền hét toáng: "Thuốc trộn tân dược cấm, đi viện bà con ơi!" | "NẤC 2: THUÊ NGƯỜI" · lahet |
| 1:52 | L03 | **MN**: Dân kéo đến đòi tiền. Toàn chốt cửa trốn trong bóng tối. | "ĐÒI TIỀN" · dapcua |
| 1:57 | L01 | **MN**: Đêm Chủ nhật, còn sáu tiếng nữa là ký hợp đồng. Toàn cùng đường làm liều. | "ĐÊM CHỦ NHẬT" · "CÒN 6 TIẾNG" · tick |
| 2:03 | L01 | **TOAN**: Tại cái tủ ma này! Tao thuê xe chở mày ra bãi rác đốt hết! | "NẤC 3: ĐỐT TỦ" |
| 2:08 | L01 → L02 | **HOE**: Nó vung búa, gió độc thốc bung cửa sổ. | gio · vukinh |
| 2:12 | L02 | **MN**: Phòng khám lạnh ngắt. Trăm ngăn kéo tủ thuốc đồng loạt tự trượt ra kêu côm cốp. | nhactat · comcop |
| 2:17 | L02 | *(không lời, 1.5 s)* | imlang · muithuoc |
| 2:19 | L02 → L04 | **HOE**: Mùi quế chi, cam thảo xộc chẹn họng. Môi nó mím chặt, giọng tôi gầm lên từ ngực gã: Bốc thuốc hại người, chết không đất chôn! | "GIỌNG TRONG NGỰC" · braam |
| 2:28 | L04 | **TOAN**: Con lạy cụ! Con câm rồi… làm sao cho con nói lại? | "ĐIỂM THẤP" · lay |
| 2:33 | L08 | **HOE**: Muốn làm người sống, thì gỡ cái tên người chết xuống! | "GỠ TÊN NGƯỜI CHẾT" |
| 2:38 | L03 | **MN**: Sáng ra, đối tác hủy hẹn, dân vây kín. Toàn run rẩy bắc thang, tự tay giật phăng tấm biển ném xuống đất. | "CÚ LẬT: TỰ HẠ BIỂN" · xoang |
| 2:46 | L01 | **HOE**: Cái tủ trăm ngăn được chở trả về làng. Ngăn thứ bảy mươi hai vẫn đượm mùi cam thảo. | huongtram |
| 2:52 | L03 → B02 | **MN**: Phòng khám sập tiệm. Bà Thoa đi viện kịp nên thận chưa hỏng. Thằng Toàn đi bán bảo hiểm, mở miệng vẫn quen tật: "Hợp đồng lừa đấy, đừng mua!" | "BÁN BẢO HIỂM" · haha |
| 3:01 | S33 → S34 | **MN**: Ra đường thấy ai bảo "thuốc gia truyền ba đời", cứ hỏi: "Thầy dám bảo tôi đi viện không?" Thầy không dám, thì thầy là thằng Toàn. | rít điếu cày · coc |
| 3:08 | B02 | **MN**: Tập sau: tháng bảy âm đến. Một ông giàu nhất phố cúng cô hồn mâm to nhất, quay video khoe. Phát lộc cho trẻ con thì… phát tiền âm phủ. | "TẬP SAU" · whoosh |
| 3:15 | S06 | **MN**: Bấm đăng ký đi. Kênh tao chỉ kể chuyện ma, không bán thuốc mọc tóc. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN) — Tủ thuốc 60 năm và kẻ mượn danh
- **MN**: Uống thuốc nam "gia truyền", đã bao giờ hỏi gia truyền của ai chưa? (S01) · pop "GIA TRUYỀN CỦA AI?"
- **HOE**: Tủ thuốc sáu mươi năm của tôi. Thằng Toàn ngoài phố mua tủ cũ, rồi vác luôn tên tôi lên biển hiệu. (L03) · pop "CỤ LANG HÒE"
- **TOAN**: Thuốc nam cụ Hòe! Đau khớp mấy mươi năm, ba hôm nhảy chân sáo! Một liệu ba triệu! (L04) · pop "3 HÔM HẾT ĐAU?"
- **HOE**: Nó trộn thuốc tây vào viên hoàn, người uống mục xương, phù mặt. (L05) · pop "TRỘN THUỐC TÂY"
- **MN**: Định ăn trên lưng người chết, ai ngờ cụ hiện về đòi chia hoa hồng. (S34)
- *(không lời, 0.8 s)*
- **MN**: Cụ về đòi thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN) — Đỡ ngay nhưng hại lâu
- **BN**: Thầy Toàn bốc tôi liệu nữa! Uống vào êm ru, chạy phăng phăng! (L06) · pop "UỐNG VÀO CHẠY ĐƯỢC"
- **MN**: Bà Thoa chạy được thật. Chỉ có điều sau ba tháng, mặt bà tròn như cái mâm đồng. (S26) · pop "MẶT TRÒN NHƯ MÂM"
- **HOE**: Nó đâu biết bốc thuốc. Dưới quầy giấu cối thuốc tây giảm đau tán vụn. (L05) · pop "CỐI THUỐC GIẤU DƯỚI QUẦY"
- **HOE**: Uống đỡ ngay thì khen thần y, nhưng ba tháng sau là mục xương, suy thận. (L05) · pop "MỤC XƯƠNG · SUY THẬN"
- **TOAN**: Cứ khen đi, một liệu ba triệu, tháng kiếm trăm củ dễ như chơi. (L04)
- **MN**: Kiếm được ba hôm thì tổ nghề về nhập vào mồm. (S34)
- *(không lời, 0.8 s)*
- **MN**: Tổ nghề bảo gì? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN) — Miệng thần y tự bảo đi viện
- **MN**: Lần đầu tiên thấy thầy lang mở miệng đuổi bệnh nhân đi viện. (S01) · pop "THẦY LANG ĐUỔI BỆNH NHÂN"
- **BN**: Thầy Toàn bốc tôi liệu nữa! Uống vào sướng lắm! (L06)
- **MN**: Toàn định hô ba triệu, nhưng cổ họng nghẹn đắng mùi quế chi. (L04)
- **TOAN**: Bà ơi! Thuốc tôi trộn thuốc tây đấy! Mặt bà phù rồi, đi viện gấp, tôi không chữa được! (L04) · pop "TÔI KHÔNG CHỮA ĐƯỢC!"
- **BN**: Thầy nói cái gì gở mồm thế? (L06)
- **TOAN**: Đi viện khám thận ngay! (L04) · pop "ĐI VIỆN KHÁM THẬN!"
- **HOE**: Đội tên tôi thì phải nói lời tôi. (L08) · pop "CỤ LANG HÒE"
- *(không lời, 0.8 s)*
- **MN**: Thần y bị ép nói thật sống sao nổi? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN) — Ba nấc chống đối của thầy lang dỏm
- **MN**: Khi bị ma nhập bắt nói thật, kẻ lừa đảo sẽ giãy giụa thế nào? (S01) · pop "3 NẤC CHỐNG ĐỐI"
- **MN**: Nấc một: ngậm mồm viết đơn thuốc. Ngòi bút tự ngoáy: ĐI VIỆN. (L04) · pop "BÚT TỰ VIẾT: ĐI VIỆN"
- **MN**: Nấc hai: thuê dược sĩ bán thay. Vừa mở hũ thuốc, dược sĩ hét toáng: "Tân dược cấm, đi viện bà con ơi!" (L03) · pop "THUÊ NGƯỜI CŨNG THUA"
- **MN**: Nấc ba: vác búa định chở tủ thuốc ra bãi rác đốt phi tang. (L01) · pop "CÙNG ĐƯỜNG ĐỐT TỦ"
- **HOE**: Trăm ngăn kéo tự giật tung ra, siết nghẹt cổ họng nó. (L02) · pop "CỤ LANG HÒE"
- *(không lời, 0.8 s)*
- **MN**: Cái giá để được nói lại bình thường là gì? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN) — Nghề mới của thần y
- **MN**: Thần y lừa đảo sau khi bị ma bắt nói thật thì đi làm gì? (S01) · pop "NGHỀ MỚI"
- **HOE**: Tôi bảo rồi: muốn làm người sống, thì buông cái tên người chết ra. (L08) · pop "CỤ LANG HÒE"
- **MN**: Toàn sợ vỡ mật, tự tay trèo thang giật phăng tấm biển hiệu xuống đất. (L03) · pop "TỰ GIẬT BIỂN"
- **MN**: Phòng khám dẹp tiệm. Toàn chuyển nghề đi bán bảo hiểm nhân thọ. (L04) · pop "BÁN BẢO HIỂM"
- **TOAN**: Hợp đồng này công ty cài điều khoản lừa đấy, đừng ký! (L04) · pop "ĐỪNG KÝ!"
- **MN**: Vía cụ Hòe vẫn chưa tha. Giờ đố gã nói dối được câu nào. (S34)
- *(không lời, 0.8 s)*
- **MN**: Toàn cảnh màn đối đầu giữa cụ Hòe và gã lang băm, tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER) — Còn sáu tiếng trước hợp đồng năm tỷ
- **MN**: Sáng thứ Hai ký hợp đồng nhượng quyền năm tỷ. Đêm Chủ nhật, phòng khám bị bao vây. (S01) · pop "HẠN: SÁNG THỨ HAI"
- **TOAN**: Tại cái tủ ma này! Tao thuê xe chở mày ra bãi rác đốt hết! (L01) · pop "ĐỐT TỦ KHỬ VÍA"
- **HOE**: Nó vung búa, gió độc thốc bung cửa sổ. (L01) · pop "CỤ LANG HÒE"
- **MN**: Không khí phòng khám lạnh buốt xuống mười độ. (L02) · pop "LẠNH BUỐT"
- **MN**: Môi Toàn mím chặt đến rách toạc, nhưng từ trong lồng ngực gã gầm lên một giọng già nua đáng sợ. (L04)
- *(cắt đen đột ngột)*
- **MN**: Giọng nói ấy đã phán điều gì khiến Toàn quỳ sụp? Xem bản đầy đủ, link ngay dưới. (S26)

### SH7 (TRAILER) — Tủ trăm ngăn tự mở giữa nửa đêm
- **HOE**: Tủ thuốc sáu mươi năm của tôi. Trăm ngăn gỗ lim. Nhắm mắt tôi cũng biết ngăn nào cam thảo, ngải cứu. (L01) · pop "TỦ THUỐC 60 NĂM"
- **MN**: Nửa đêm, phòng khám đóng cửa cài then. Nhưng cái tủ thuốc cổ bắt đầu phát ra tiếng động lạ. (L01) · pop "TIẾNG ĐỘNG LẠ"
- **MN**: Ngăn này trượt ra, rồi ngăn kia trượt ra. Từng ngăn một như có bàn tay vô hình đang kiểm thuốc. (L02) · pop "TỰ ĐỘNG MỞ"
- **MN**: Mùi quế chi, cam thảo tràn ngập phòng khám. Rồi trăm ngăn cùng đóng sầm lại một tiếng chấn động! (L02)
- *(cắt đen đột ngột)*
- **MN**: Sáng hôm sau, thứ gì nằm trong sọt rác dưới quầy của thần y? Bản đầy đủ, link ngay dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó) — [v3 DÙNG TOÀN BỘ].

### Danh sách ảnh vẽ mới (16:9): 8 ảnh
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| L01 | Phòng khám đêm: tủ thuốc bắc trăm ngăn bằng gỗ áp tường, đèn mờ, đồng hồ quả lắc; bản tủ về lại nhà cổ ở làng | DÙNG |
| L02 | Cận các ngăn kéo gỗ nhỏ có nhãn chữ Nôm (trống chữ), một ngăn trượt ra; bản nhiều ngăn mở, hơi thuốc lan | DÙNG |
| L03 | Phòng khám sáng sủa, biển lớn (trống chữ), bệnh nhân xếp hàng; bản vắng tanh; bản Toàn hạ biển | DÙNG |
| L04 | "Thần y" Toàn cận: blouse trắng ngoài áo lụa, vòng trầm, ngồi bàn khám; bản bịt miệng hoảng | DÙNG |
| L05 | Dưới quầy: mấy hũ nhựa không nhãn đựng bột trắng, cối tán; bản hũ trong sọt rác nắp mở | DÙNG |
| L06 | Bà Thoa cận: mặt hơi phù, cười; bản ở bệnh viện với bác sĩ | DÙNG |
| L07 | Ảnh màu cũ: cụ Hòe áo the bắt mạch cho người già ở hiên nhà, tủ trăm ngăn phía sau | DÙNG |
| L08 | Cụ Hòe mờ: áo the nâu, khăn xếp, râu bạc, đứng nhìn lên tấm biển tên mình | DÙNG |

## Lịch
- LONG: Thứ Năm 22/07 18:00 (+07).
- SH1: Thứ Năm 22/07 19:00
- SH2: Thứ Sáu 23/07 11:30
- SH3: Thứ Sáu 23/07 19:00
- SH4: Thứ Bảy 24/07 11:30
- SH5: Thứ Bảy 24/07 19:00
- SH6: Chủ Nhật 25/07 11:30
- SH7: Chủ Nhật 25/07 19:00
- Tập sau (P71): Thứ Hai 26/07 18:00.
