# Dự án 50 — Bù nhìn "Cò đất gặp cò thật" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá cụ thể**: Sang ấn định hạn chót 6:00 sáng ngày thứ ba máy xúc về san phẳng, nhổ cọc bù nhìn chẻ củi; bù nhìn đối mặt nguy cơ mất rễ 30 năm và người cấy mất nguồn sống (cái giá rõ ràng, không đe dọa trẻ em).
- **3 nấc leo thang chủ động**: Nấc 1 vặn gió rơm dọa quỷ khóc → Sang giật rơm châm thuốc; Nấc 2 bóng nước giơ tay cảnh cáo đêm trăng → Sang thuê máy xúc gầm rú đầu bờ; Nấc 3 nước liều quay lưng 180 độ gọi chim di cư về chiếm đất.
- **Cold open không lộ đáp án**: Treo câu hỏi bằng tiếng búa nện cọc đêm và cái bóng dưới nước cử động, không hé lộ kết cục đàn chim.
- **Điểm thấp nhất**: 3 giờ sáng ngày thứ ba (còn 3 tiếng), bà Nụ ngồi khóc bên thửa mạ, máy ủi nổ rục rịch ngoài đê, bù nhìn đứng trơ trọi sắp bị nghiền nát.
- **Cú lật do nhân vật CHỌN và TRẢ GIÁ**: Bù nhìn chọn lách luật cụ tổ ("chỉ giữ ruộng cho người cấy; ruộng bỏ hoang không giữ"), phá tiền lệ đuổi chim để gọi cò thật về; Sang trả giá bằng mười tỷ tiền cọc và nợ ngân hàng.
- **Khuôn chuẩn v3**: Lời thoại LONG rút gọn đúng 591 chữ (≈3:00); đủ 5 Short TRỌN + 2 Short TRAILER; teaser cuối LONG khớp P51 Thứ Hai (chim lợn nhại giọng thầy Hiển).

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu một ông già rơm cọc tre ba mươi năm có giữ nổi đất cho bà lão cấy nhờ trước khi gã cò đất đem máy xúc san phẳng cả cánh đồng thành đất nền?
- **Đồng hồ + cái giá**: 6:00 sáng ngày thứ ba máy xúc vào ủi phẳng cả đồng. Trượt hạn: cọc tre ba mươi năm bị nhổ chẻ củi, ruộng lúa biến mất, bà Nụ hết đường sinh sống.
- **3 nấc leo thang**:
  - Nấc 1: Bù nhìn gồng sức vặn gió rơm rít như quỷ khóc → Sang giễu cợt, giật rơm ngực châm thuốc.
  - Nấc 2: Đêm trăng, cái bóng bù nhìn dưới ruộng từ từ giơ tay chỉ thẳng mặt Sang (khoảnh khắc rợn) → Sang hoảng hồn bỏ chạy, nhưng chiều hôm sau điều hai máy xúc đỗ đầu bờ thách thức.
  - Nấc 3: 4 giờ sáng ngày thứ ba, Bù nhìn dồn linh lực quay lưng 180 độ, mở toang bầu trời mời đàn chim di cư kéo về làm tổ kín ruộng hoang.
- **Điểm thấp nhất**: 3 giờ sáng ngày thứ ba (còn 3 tiếng), bà Nụ ôm mạ khóc thút thít, tiếng máy ủi rục rịch ngoài đê, cọc tre bù nhìn rung lên bất lực.
- **Cú lật**: Bù nhìn chủ động chọn quay lưng (đúng luật: ruộng bỏ hoang không người cấy thì không giữ); đàn cò thật rợp trời kéo về khiến đoàn liên ngành ập tới cắm biển bảo tồn nghiêm ngặt; Sang mất trắng tiền cọc, ôm nợ ngân hàng giữa trời phân chim; thửa bà Nụ cấy được bù nhìn quay mặt che chở, lúa chín vàng trĩu hạt.
- **Khoảnh khắc rợn**: Đêm thứ hai, giữa cánh đồng trăng sáng lặng ngắt, bù nhìn đứng im dang hai tay nhưng cái bóng in trên mặt nước ruộng từ từ giơ một cánh tay chỉ thẳng vào Sang.
- **Câu kết**: "Chân ai lấm bùn thì tôi giữ ruộng cho người đó" — triết lý nông dân thâm thúy hạ bệ thói đầu cơ đất đai.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện) | S01, S26, S33, S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| BU | Ông Bù Nhìn (người kể chính, nông dân già cáu kỉnh) | B01, B02, B03, B07, B10 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2` |
| SANG | Sang (cò đất hống hách, thực dụng) | B04, B05 | Adam bựa | `atempo=1.05` |
| NU | Bà Nụ (bà lão nghèo cấy lúa nhờ) | B06 | Ngọc Huyền | `asetrate=48000*0.95,aresample=48000` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "BU": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2"},
  "SANG": {"preset": "Adam bựa", "fx": "atempo=1.05"},
  "NU": {"preset": "Ngọc Huyền", "fx": "asetrate=48000*0.95,aresample=48000"}
}
```

## LONG (591 chữ, dựng ≈ 180 s)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | B01 | *(không lời, 2.5 s)* | "ĐỒNG HOANG · ĐÊM TRĂNG" · cộc… cộc · gió rít |
| 0:03 | B01 | **BU**: Ba mươi năm đứng đây, chưa từng phá luật. Đêm nay thì khác. | "CHƯA TỪNG PHÁ LUẬT" · nhạc tắt |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay là ông rơm ba mươi năm giữa đồng. Cáu kỉnh lắm. | "BÙ NHÌN 30 NĂM" · coc · braam |
| 0:13 | S34 | **MN**: Lần đầu tiên, ông ấy đụng một con thú dữ hơn ma: cò đất. | "CÒ ĐẤT" · bassdown |
| 0:17 | B03 | **BU**: Tôi là bù nhìn. Rơm khô, nón rách, cốt tre ngâm bùn ba mươi năm. | "CỐT TRE 30 NĂM" · rom |
| 0:22 | B03 | **BU**: Luật cụ tổ dạy: đứng giữa đồng đuổi chim, giữ lúa cho người cấy. | "LUẬT: GIỮ LÚA CHO NGƯỜI CẤY" |
| 0:27 | B04 | **BU**: Cho đến khi gã này đến. Sơ mi trắng, giày da, ôm cặp sổ đỏ. Sang cò đất. | "SANG CÒ ĐẤT" · loi |
| 0:33 | B04 → B05 | **SANG**: Gom sạch rồi! Ruộng hoang chờ lên thổ cư. Cấm cấy lúa làm mất giá đất! | "CHỜ LÊN THỔ CƯ" · pops |
| 0:39 | B06 | **NU**: Cậu Sang ơi, cho cấy nhờ mấy sào. Nhà tôi trông vào nồi cơm này thôi. | "XIN CẤY NHỜ" · gio |
| 0:44 | B05 | **SANG**: Ruộng tao, để cỏ mọc cũng là của tao! Sáng thứ ba máy xúc về san phẳng, cút! | "HẠN: SÁNG THỨ BA" · chotdon |
| 0:51 | B03 | **BU**: Sáng thứ ba máy xúc về. Cọc tre bị nhổ chẻ củi, người cấy đứt bữa. | "CỌC TRE CHẺ CỦI" · tick |
| 0:56 | S26 | **MN**: Hạn đúng ba ngày. Máy xúc mười tấn đấu với ông già rơm không chân. | "MÁY XÚC vs ÔNG GIÀ RƠM" · braam |
| 1:01 | B04 → B03 | **BU**: Trưa ấy gã cắm mốc. Tôi gồng sức vặn gió, rơm rít lên như quỷ khóc. | "NẤC 1: VẶN GIÓ" · giorit · rom |
| 1:07 | B05 | **SANG**: Gió vớ vẩn. Ma quỷ không trả lãi ngân hàng hộ tao đâu! | "LÃI NGÂN HÀNG" · cuoikhay |
| 1:12 | B05 → B03 | **BU**: Gã giật rơm ngực tôi châm thuốc, nhổ toẹt vào gốc cọc. Nấc một… thua trắng. | "NẤC 1: THUA TRẮNG" · batlua · nho |
| 1:18 | B01 | **BU**: Đêm thứ hai, trăng sáng. Gã ra đóng cọc rào. Tiếng búa nện chát chúa. | "ĐÊM THỨ HAI" · coc… coc |
| 1:23 | B02 | **BU**: Tôi đứng im dang tay. Nhưng cái bóng dưới ruộng… từ từ giơ một tay chỉ thẳng vào gã. | "BÓNG GIƠ TAY" · imlang · timdap |
| 1:30 | B02 | *(không lời, 1.8 s)* | ech nhai im bat · nhac tat |
| 1:32 | B05 | **SANG**: Cái bóng cử động! Ma… ma thật rồi! | "MA THẬT RỒI!" · run |
| 1:35 | B05 | **SANG**: Mày dọa ai? Mai tao cho máy xúc cào phẳng cả mày lên! | "CÀO PHẲNG CẢ MÀY" |
| 1:40 | B04 → B03 | **BU**: Gã chạy thục mạng. Nhưng chiều hôm sau, máy xúc đã đỗ đầu bờ. Nấc hai… lại hỏng. | "NẤC 2: LẠI HỎNG" · tiengmayxuc |
| 1:47 | B06 | **BU**: Ba giờ sáng ngày thứ ba. Còn đúng ba tiếng nữa là trời sáng. | "3:00 SÁNG" · "CÒN 3 GIỜ" · tick |
| 1:52 | B06 | **NU**: Mất đất rồi ông rơm ơi. Sáng mai người ta ủi hết, lấy gì nuôi cháu? | "LẤY GÌ NUÔI CHÁU?" · khoc |
| 1:58 | B03 | **BU**: Máy ủi rục rịch ngoài đê. Chẳng lẽ ba mươi năm nghề của tôi… kết thúc thế này? | "ĐIỂM THẤP NHẤT" · bassdown |
| 2:04 | B07 | **BU**: Không. Luật là giữ lúa cho người cấy. Ruộng bỏ hoang thì nó đâu phải người cấy! | "RUỘNG BỎ HOANG ≠ NGƯỜI CẤY" |
| 2:10 | B07 | **BU**: Bốn giờ sáng. Tôi dồn sức quay lưng một trăm tám mươi độ khỏi đất của gã. | "4:00 SÁNG" · "QUAY LƯNG 180°" · rorop |
| 2:16 | B07 → B08 | **BU**: Ba mươi năm đuổi chim… hôm nay tao mở toang trời mời chúng mày về! | "MỜI CHIM VỀ!" · whoosh |
| 2:22 | B08 | **MN**: Bù nhìn quay lưng, hàng ngàn con cò, vạc, diệc thiên di rợp trời sà xuống kín ruộng hoang. | "CÒ THẬT VỀ KÍN ĐỒNG" · chimkeu |
| 2:29 | B09 | **MN**: Sáu giờ sáng, máy xúc vừa hạ gầu thì cán bộ ập tới cắm biển: vùng chim di cư bảo tồn, cấm san lấp! | "6:00 SÁNG" · "VÙNG BẢO TỒN" · coixe |
| 2:37 | B05 | **SANG**: Mười tỷ cọc của tao! Lãi ngày đang chạy, giờ tao ôm một bãi phân chim à? | "ÔM BÃI PHÂN CHIM" · laito |
| 2:43 | B05 → B03 | **BU**: Cò đất ôm một vùng cò thật. Ba mươi năm, chưa bao giờ tôi thấy hả hê thế này. | "CÒ ĐẤT ÔM CÒ THẬT" · cuoikhoai |
| 2:49 | B10 | **BU**: Riêng thửa bà Nụ ở rìa, tôi quay mặt che chở. Lúa chín vàng, chim không phạm một hạt. | "RUỘNG BÀ NỤ: NGUYÊN VẸN" · giolua |
| 2:55 | B06 | **NU**: Chim đậu trắng đồng mà ruộng mình không mất hạt nào. Cảm ơn ông rơm. | "LÚA CHÍN VÀNG" · cuoituoi |
| 3:00 | B03 | **BU**: Không có gì. Chân ai lấm bùn thì tôi giữ ruộng cho người đó. | "GIỮ CHO NGƯỜI LẤM BÙN" |
| 3:05 | S26 | **MN**: Đất đai là để nuôi người, không phải để đầu cơ thổi giá. | "ĐẤT ĐỂ NUÔI NGƯỜI" |
| 3:09 | S33 → S34 | **MN**: Tính khôn bằng trời cũng không qua được một ông già rơm cáu kỉnh. | dieu cay |
| 3:14 | S26 | **MN**: Tập sau: một thầy phán hạn qua mạng dọa người mua lễ giải, nửa đêm trên nóc nhà bỗng có tiếng chim lợn nhại đúng giọng thầy. | "TẬP SAU" · chimlon |
| 3:22 | S06 | **MN**: Bấm đăng ký đi. Không thì có ngày bù nhìn quay lưng, chim trời kéo về làm tổ trên nóc xe mày. | "ĐĂNG KÝ" · coc |

---

## SHORTS (5 TRỌN + 2 TRAILER)

### SH1 (TRỌN) — Hồ sơ ông Bù Nhìn & Cò Đất
- **MN**: Hồ sơ ông bù nhìn giữ đồng. Ba mươi năm đuổi chim, lần đầu gặp cò đất. (B03) · pop "BÙ NHÌN"
- **BU**: Tôi là bù nhìn. Rơm khô, nón rách, cốt tre ngâm bùn ba mươi năm. (B03) · pop "30 NĂM CẮM RỄ"
- **BU**: Luật cụ tổ dạy: đứng giữa đồng đuổi chim, giữ lúa cho người cấy. (B03)
- **SANG**: Ruộng hoang chờ lên thổ cư. Cấm cấy lúa làm mất giá đất! (B04) · pop "CÒ ĐẤT"
- **BU**: Ruộng không ai cấy thì tao giữ cho cái sổ đỏ của mày à? (B07)
- **BU**: Cò đất ôm một vùng cò thật. Ba mươi năm, chưa bao giờ tôi thấy hả hê thế này. (B08) · pop "CÒ ĐẤT ÔM CÒ THẬT"
- *(lặng 0.8 s)*
- **MN**: Cò đất khóc tiếng mán ra sao? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH2 (TRỌN) — Nấc 1: Giật rơm châm thuốc
- **MN**: Khi cò đất đụng phải ông bù nhìn ba mươi năm cắm rễ. (B01) · pop "BÙ NHÌN"
- **BU**: Trưa ấy gã cắm mốc. Tôi gồng sức vặn gió, rơm rít lên như quỷ khóc. (B03) · pop "NẤC 1: VẶN GIÓ"
- **SANG**: Gió vớ vẩn. Ma quỷ không trả lãi ngân hàng hộ tao đâu! (B05) · pop "LÃI NGÂN HÀNG"
- **BU**: Gã giật rơm ngực tôi châm thuốc, nhổ toẹt vào gốc cọc. (B05)
- **BU**: Nấc một… thua trắng. (B03) · pop "NẤC 1: THUA TRẮNG"
- *(lặng 0.8 s)*
- **MN**: Sang ngông được đúng ba ngày. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH3 (TRỌN) — Nấc 3: Bù nhìn quay lưng
- **MN**: Luật con ma ba mươi năm: không phá luật, chỉ lách luật. (B03) · pop "BÙ NHÌN"
- **NU**: Mất đất rồi ông rơm ơi. Sáng mai người ta ủi hết, lấy gì nuôi cháu? (B06) · pop "SÁNG MAI ỦI HẾT"
- **BU**: Luật là giữ lúa cho người cấy. Ruộng bỏ hoang thì nó đâu phải người cấy! (B07) · pop "LUẬT: GIỮ CHO NGƯỜI CẤY"
- **BU**: Bốn giờ sáng. Tôi dồn sức quay lưng một trăm tám mươi độ khỏi đất của gã. (B07) · pop "QUAY LƯNG 180°"
- **BU**: Ba mươi năm đuổi chim… hôm nay tao mở toang trời mời chúng mày về! (B08) · pop "MỜI CHIM VỀ"
- *(lặng 0.8 s)*
- **MN**: Cánh đồng biến thành sân chim ra sao? Tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH4 (TRỌN) — Cò đất gặp cò thật
- **SANG**: Gom sạch rồi! Ruộng hoang chờ lên thổ cư. Cấm cấy lúa làm mất giá đất! (B04) · pop "GOM ĐẤT"
- **MN**: Sang vác mười tỷ tiền cọc gom ruộng hoang, cấm người nghèo cấy lúa. (B04)
- **BU**: Cốt tôi là cọc tre ngâm bùn ba mươi năm. Đất này chưa đến lượt mày làm càn. (B03) · pop "BÙ NHÌN"
- **MN**: Sáu giờ sáng, máy xúc vừa hạ gầu thì cán bộ ập tới cắm biển: vùng chim di cư bảo tồn, cấm san lấp! (B09) · pop "VÙNG BẢO TỒN CHIM"
- **SANG**: Mười tỷ cọc của tao! Lãi ngày đang chạy, giờ tao ôm một bãi phân chim à? (B05) · pop "ÔM PHÂN CHIM"
- *(lặng 0.8 s)*
- **MN**: Cò đất mất trắng thế nào? Tao kể ở bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH5 (TRỌN) — Thửa ruộng bà Nụ
- **NU**: Chim đậu trắng đồng mà ruộng mình không mất hạt nào. Cảm ơn ông rơm. (B06) · pop "RUỘNG KHÔNG MẤT HẠT"
- **BU**: Riêng thửa bà Nụ ở rìa, tôi quay mặt che chở. Lúa chín vàng, chim không phạm một hạt. (B10) · pop "BÙ NHÌN"
- **MN**: Cả cánh đồng mười héc-ta thành khu bảo tồn, chỉ một thửa nhỏ vàng óng hạt thóc. (B10)
- **BU**: Không có gì. Chân ai lấm bùn thì tôi giữ ruộng cho người đó. (B03) · pop "GIỮ CHO NGƯỜI CẤY"
- **MN**: Đất đai là để nuôi người, không phải để đầu cơ thổi giá. (S26)
- *(lặng 0.8 s)*
- **MN**: Chuyện ông rơm giữ lúa ba mươi năm. Tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH6 (TRAILER) — Cái bóng dưới nước giơ tay
- **BU**: Ba mươi năm đứng đây, chưa từng phá luật. Đêm nay thì khác. (B01) · pop "BÙ NHÌN"
- **BU**: Đêm thứ hai, trăng sáng. Gã ra đóng cọc rào. Tiếng búa nện chát chúa. (B01) · pop "ĐÊM THỨ HAI"
- **BU**: Tôi đứng im dang tay. Nhưng cái bóng dưới ruộng… từ từ giơ một tay chỉ thẳng vào gã. (B02) · pop "CÁI BÓNG GIƠ TAY"
- **SANG**: Cái bóng cử động! Ma… ma thật rồi! (B05) · pop "MA THẬT RỒI"
- **MN**: Người đứng im, sao bóng lại giơ tay? Xem bản đầy đủ để biết câu trả lời. (S26) · pop "XEM BẢN ĐẦY ĐỦ"

### SH7 (TRAILER) — Hạn chót 3 giờ sáng
- **BU**: Ba giờ sáng ngày thứ ba. Còn đúng ba tiếng nữa là trời sáng. (B01) · pop "3:00 SÁNG" · pop "BÙ NHÌN"
- **SANG**: Sáng thứ ba máy xúc về san phẳng, cút! (B05) · pop "SÁNG MAI SAN PHẲNG"
- **NU**: Mất đất rồi ông rơm ơi. Sáng mai người ta ủi hết, lấy gì nuôi cháu? (B06)
- **BU**: Máy ủi rục rịch ngoài đê. Chẳng lẽ ba mươi năm nghề của tôi… kết thúc thế này? (B03) · pop "CÒN 3 TIẾNG"
- **BU**: Không. Luật là giữ lúa cho người cấy! (B07)
- **MN**: Ba tiếng trước bình minh, ông già rơm sẽ làm gì để cứu cánh đồng? Xem bản đầy đủ ngay dưới. (S01) · pop "BẢN ĐẦY ĐỦ LINK DƯỚI"

---

## Hình
Tận dụng: B02 (cận mặt nước ruộng) + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Ảnh vẽ mới (10 ảnh, đúng danh sách v2, không thêm mã):
| Mã | Cảnh | Trạng thái v3 |
|---|---|---|
| B01 | Cánh đồng đêm trăng, ông bù nhìn rơm dang tay giữa ruộng nước; bản có Sang đóng cọc rào bằng đèn pin | DÙNG |
| B02 | Cận mặt nước ruộng dưới trăng: cái bóng bù nhìn giơ một tay chỉ ngang (trong khi hình thật dang tay) | DÙNG |
| B03 | Ông bù nhìn cận: rơm khô, áo tơi rách, nón mê thủng, mặt vẽ than, giữa đồng lúa xanh | DÙNG |
| B04 | Sang lội ruộng: áo sơ mi trắng, kính râm, giày da không xắn quần, cặp sổ đỏ | DÙNG |
| B05 | Sang cận: kính râm, cười đắc ý; bản ôm sổ đỏ giữa đàn cò | DÙNG |
| B06 | Bà Nụ cận: nón lá, áo nâu, ôm bó mạ; bản gặt lúa cười | DÙNG |
| B07 | Bù nhìn quay lưng về phía các thửa ruộng bỏ hoang cỏ mọc | DÙNG |
| B08 | Ruộng hoang: bản vài con cò trắng; bản hàng trăm cò, vạc, diệc làm tổ trắng xóa | DÙNG |
| B09 | Cán bộ môi trường áo xanh cắm biển khoanh vùng (trống chữ), chụp ảnh đàn chim | DÙNG |
| B10 | Thửa ruộng nhỏ bà Nụ lúa chín vàng ở rìa, bù nhìn quay mặt về phía ấy, không có chim | DÙNG |

---

## Lịch
- **LONG**: Thứ Năm 13/05 18:00 (+07)
- **SH1** (TRỌN): Thứ Năm 13/05 19:00
- **SH2** (TRỌN): Thứ Sáu 14/05 11:30
- **SH3** (TRỌN): Thứ Sáu 14/05 19:00
- **SH4** (TRỌN): Thứ Bảy 15/05 11:30
- **SH5** (TRỌN): Thứ Bảy 15/05 19:00
- **SH6** (TRAILER): Chủ Nhật 16/05 11:30
- **SH7** (TRAILER): Chủ Nhật 16/05 19:00
- *(Tập sau P51 Chim lợn ra Thứ Hai 17/05 18:00)*
