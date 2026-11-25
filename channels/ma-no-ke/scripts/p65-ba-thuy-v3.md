# Dự án 65 — Bà Thủy "Biệt thự view hồ" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Xương sống kịch tính**: Bổ sung đồng hồ đếm ngược 72 giờ trước lễ khánh thành/bàn giao sổ đỏ; nếu trượt hạn ông Vĩnh vỡ nợ, đối mặt án tù vì lừa đảo.
- **3 nấc leo thang chủ động**: Trát xi măng bịt sàn gạch → thuê 6 máy bơm hút cạn → đổ bê tông tươi bịt họng cống ngầm.
- **Điểm thấp nhất & Cú lật do nhân vật chọn và trả giá**: Vĩnh không tự nhiên thoát nạn; để không vào tù và cứu dự án, Vĩnh buộc phải tự tay ký lệnh phá bỏ chính căn biệt thự đắt nhất của mình ở tim hồ để múc lại hồ điều hòa.
- **Gọn ảnh & thoại chuẩn định dạng**: Rút gọn còn 12 ảnh mới (bỏ H06, H08, H14); toàn bộ bảng LONG viết đúng chuẩn từng dòng thoại, tổng lời thoại đạt chuẩn 588 chữ (nằm trọn trong khung 560–600 chữ).
- **Hệ thống Shorts**: Quy hoạch chuẩn 5 TRỌN + 2 TRAILER có pop chữ, hook rõ và link về bản đầy đủ.

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Liệu ông Vĩnh có bơm cạn nước để cứu dự án nghìn tỷ trước hạn bàn giao 72 giờ, hay phải trả lại lòng hồ cho Bà Thủy?
- **Đồng hồ + cái giá**: Hạn chót đúng 72 giờ trước lễ cắt băng khánh thành và bàn giao sổ đỏ đợt một. Nếu trượt hạn: ngân hàng phong tỏa toàn bộ dự án, khách hàng khởi kiện tội lừa đảo, mất trắng sự nghiệp.
- **3 nấc leo thang chủ động**:
  1. *Nấc 1*: Nghe tiếng ếch kêu rền dưới sàn gạch và sen nhú khe đá → Vĩnh cho thợ quét hóa chất, trát xi măng chống thấm bịt kín chân tường. Đêm sau sen vẫn mọc, mạch nước đẩy phồng rộp sàn nhà.
  2. *Nấc 2*: Mưa đầu mùa làm nước dâng ngập 1 mét theo viền hồ cũ → Vĩnh thuê 6 máy bơm công suất lớn hút xả ngày đêm ra cống cái. Sau hai ngày đêm, 6 máy bơm cháy sạch mô-tơ, nước không hạ một phân mà dâng lên tầng hai.
  3. *Nấc 3 (nước liều)*: Vĩnh cãi cùn "hợp đồng view hồ giờ có hồ thật", điều xe bồn chở bê tông tươi đổ thẳng xuống họng cống ngầm ép nước rút. Mạch ngầm tức nước vỡ bờ phụt tung sàn gạch hoa cương, biến biệt thự của Vĩnh thành lòng chảo cô lập.
- **Điểm thấp nhất**: Đêm trước giờ G bàn giao. Máy bơm cháy rụi, điện toàn khu bị cắt. Vĩnh đứng co ro trên ban công tầng hai giữa biển nước mênh mông, điện thoại ngân hàng báo siết nợ dồn dập, ngoài cổng loa cư dân đòi tiền cọc réo liên hồi.
- **Cú lật (ai chọn gì, trả giá gì)**: Để thoát cảnh tù tội và cứu cả dự án, Vĩnh buộc phải tự tay ký lệnh điều máy xúc đập bỏ chính căn biệt thự đắt nhất khu (nằm đúng tim hồ sâu nhất) để múc lại hồ điều hòa. Vĩnh chọn mất trắng cơ ngơi để đổi lấy việc hồ rút nước.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm mùa khô, cả tháng không mưa. Biệt thự im phăng phắc. Dưới sàn gạch hoa phòng khách vang lên tiếng ếch kêu dày đặc, rền rĩ như cả đầm lầy đang thở dưới lớp gạch bóng loáng. Vĩnh cúi sát tai xuống sàn gạch lạnh ngắt, nghe thấy tiếng bọt nước sủi tăm và tiếng cá quẫy ngay dưới chân. Bật đèn thì im bặt, nhưng ngoài sân, một búp sen nhú xuyên qua khe đá vỉa hè, đọng giọt sương lạnh buốt.
- **Câu kết**: Nước rút về hồ mới, biệt thự xung quanh khô ráo thành "view hồ" thật giá tăng vọt; cư dân khen chủ đầu tư có tâm, chỉ riêng ông Vĩnh mất nhà, chiều nào cũng ra bờ hồ ngắm sen nở trên nền phòng khách cũ.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (Host) | S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| VINH | Ông Vĩnh (chủ đầu tư, giọng bán hàng kênh kiệu) | H04, H13 | Adam bựa | `atempo=1.02` |
| THUY | Bà Thủy (quản nước, mát lạnh, chậm rãi) | H07 | Đoan Trang | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:80:0.35` |
| DAN | Chị Mai Anh (cư dân mua biệt thự, chua chát) | H12 | Trúc Ly | `atempo=1.05` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "VINH": {"preset": "Adam bựa", "fx": "atempo=1.02"},
  "THUY": {"preset": "Đoan Trang", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.7:80:0.35"},
  "DAN": {"preset": "Trúc Ly", "fx": "atempo=1.05"}
}
```

## LONG (588 chữ lời thoại, dựng ≈ 3:20)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | H01 | *(không lời, 2.5 s)* | "PHÒNG KHÁCH ĐÊM" · im lặng · bọt nước sủi |
| 0:03 | H01 | **MN**: Cả tháng không mưa. Nghe dưới nền nhà. | echkeu · bassdown |
| 0:06 | H01 | *(không lời, 1.8 s)* | ếch kêu rền dưới nền · mõ CỘC |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Mua nhà view hồ bao giờ chưa? Ở đây có ai từng mua biệt thự view hồ chưa? | "VIEW HỒ?" · coc · braam |
| 0:14 | S26 | **MN**: Thế mày có biết cái hồ ấy... ngày xưa là cái gì không? | tick |
| 0:17 | S26 | **MN**: Có kẻ lấp hồ điều hòa của phường, xây biệt thự ba chục tỷ bán view hồ. | "30 TỶ / CĂN" · braam |
| 0:22 | S34 | **MN**: Giờ hồ về đòi đất. Còn đúng bảy mươi hai giờ trước hạn giao nhà. | "HẠN: 72 GIỜ" · bassdown · tick |
| 0:27 | H02 → H03 | **MN**: Hồ điều hòa ba mươi năm của phường, mưa bão mấy cũng không ngập một giọt. | "HỒ ĐIỀU HÒA 30 NĂM" · mayxuc |
| 0:33 | H03 → H04 | **MN**: Ông Vĩnh cho máy xúc lấp sạch, cắm lên ba chục căn biệt thự. | "LẤP SẠCH" · catdo |
| 0:38 | H04 | **VINH**: Biệt thự view hồ, sống giữa thiên nhiên! Hồ ở đâu à? Ra ngay cổng mà nhìn! | "SỐNG GIỮA THIÊN NHIÊN" · pops |
| 0:44 | H05 | **MN**: Cái hồ nghệ thuật ở cổng to bằng cái giường, vòi phun lách tách. | "HỒ BẰNG CÁI GIƯỜNG" · voiphun |
| 0:49 | H04 | **VINH**: Hợp đồng ghi view hồ, hồ nghệ thuật cũng là hồ! Chốt căn cuối! | chotdon |
| 0:54 | S26 | **MN**: Bán sạch veo. Riêng căn đè đúng rốn hồ sâu nhất, ông Vĩnh giữ lại ở. | "CĂN ĐÈ RỐN HỒ" |
| 0:59 | H07 | **MN**: Dân gian bảo ao hồ có bà Thủy quản nước. Lấp chỗ bà ở thì nước tìm đường về. | "BÀ THỦY" · nuoc |
| 1:05 | H07 | **THUY**: Ba mét cát. Đè lên lưng tao. | echo · nuoc |
| 1:09 | S26 | **MN**: Bà không dọa ai. Nhưng nước thì kiên nhẫn hơn bê tông nhiều. | tick |
| 1:13 | H01 | **MN**: Nửa đêm mùa khô, cả tháng không mưa. Biệt thự ba chục tỷ im phăng phắc. | nhạc tắt |
| 1:18 | H01 | **MN**: Dưới nền gạch hoa vọng lên tiếng ếch kêu. Dày. Đều. Như cả cái ao dưới chân. | echkeuday |
| 1:24 | H01 | **VINH**: Thợ làm ẩu để ngấm nước à? Mai đổ xi măng chống thấm, bịt kín chân tường cho tao! | cong-tac |
| 1:29 | H09 | **MN**: Thợ trát kín vữa. Nhưng sáng hôm sau, một búp sen non nhú qua khe vỉa hè, đọng giọt nước buốt. | "BÚP SEN TRÊN ĐÁ" · bassdown |
| 1:35 | H09 | *(không lời, 1.8 s)* | giọt nước rơi · tong |
| 1:37 | H10 | **MN**: Tháng bảy, mưa rào trút xuống. Nước dâng phẳng lặng, đúng theo mép viền hồ cũ. Trong veo. | muarao · nuocdang |
| 1:44 | H11 | **MN**: Sáng ra, mở cửa sổ tầng hai nhìn xuống: bốn phía mênh mông nước. Biệt thự hóa thành ốc đảo. | "BIỆT THỰ ĐẢO" · songbien |
| 1:50 | H12 | **DAN**: Ba chục tỷ một căn, giờ mặc đầm công sở chèo thuyền mủng đi làm à? | "30 TỶ ĐI MỦNG" · thuyenkhua |
| 1:55 | H04 | **VINH**: Ba ngày nữa khánh thành! Thuê ngay sáu máy bơm khủng, hút cạn nước tống ra ngoài cho tao! | "HẠN: 3 NGÀY" · maybom |
| 2:01 | H15 | **MN**: Sáu máy bơm gầm rú hai ngày đêm rồi cháy rụi mô-tơ. Nước không giảm một phân. | "6 MÁY BƠM CHÁY RỤI" · khoi · re |
| 2:07 | H15 | **MN**: Nước dâng ngập hết tầng một, mấp mé chạm mép ban công tầng hai. | nuocvo |
| 2:12 | H13 | **MN**: Còn hai mươi tư giờ. Ngân hàng dọa phong tỏa. Cư dân chèo mủng vây cổng đòi tiền. | "CÒN 24 GIỜ" · tick · còi loa |
| 2:18 | H13 | **VINH**: Hợp đồng ghi view hồ, giờ có hồ thật thì kiện gì! Đổ bê tông chặn họng cống lại! | "VIEW HỒ XỊN" |
| 2:24 | H13 → H07 | **MN**: Bê tông vừa đổ xuống, mạch ngầm phụt tung sàn gạch. Biệt thự của Vĩnh lún nghiêng đúng tim hồ sâu nhất. | rachgach · phuttung · nuoc |
| 2:31 | H07 | **THUY**: View hồ. | echo · nuoc |
| 2:34 | H13 | **MN**: Nước dâng tới gối. Lấp chỗ của bà, bà lấy chính nhà ông làm đáy hồ. | bassdown |
| 2:39 | H13 | **VINH**: Đem máy xúc vào ngay! Phá... phá căn này đi! Múc lại cái hồ cho tao! | "PHÁ NHÀ · ĐÀO HỒ" · hoang |
| 2:44 | H03 | **MN**: Nửa đêm, gầu máy xúc bổ xuống phá tan căn biệt thự đắt nhất khu, đào lại lòng hồ điều hòa. | mayxuc · gachvo · am |
| 2:50 | H02 | **MN**: Hồ vừa thông, nước từ các ngả rút ào ào về lòng hồ. Đường sá quanh khu khô cong. | nuocchay · kho |
| 2:56 | H02 | **DAN**: Ơ, tự nhiên có view hồ xịn thật, gió mát lại không lo ngập! | pops |
| 3:00 | H02 → S33 | **MN**: Cư dân khen chủ đầu tư có tâm. Còn ông Vĩnh ngày nào cũng ra bờ hồ, nhìn sen mọc trên nền phòng khách cũ. | "CHỦ ĐẦU TƯ CÓ TÂM" · rít điếu cày |
| 3:07 | S34 | **MN**: Mua nhà view hồ nhớ hỏi hồ có từ bao giờ. Hồ mới đào… khéo dưới đáy là phòng khách thằng khác. | cuoi |
| 3:13 | S34 | **MN**: Tập sau: một gã chuyên giật tít sét đánh vì quả báo trên nỗi bất hạnh người khác. Mùa này… Thiên Lôi cũng đọc báo. | "TẬP SAU" · sấm sét · braam |
| 3:19 | S06 | **MN**: Bấm đăng ký đi. View nóc tủ thờ, bảo đảm không ngập nước. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ Bà Thủy. Quản nước mấy trăm năm, lần đầu bị đè ba mét cát. (S01) · pop "BÀ THỦY"
- **VINH**: Biệt thự view hồ, sống giữa thiên nhiên! Hồ ở đâu à? Ra ngay cổng mà nhìn! (H04) · pop "BIỆT THỰ VIEW HỒ"
- **MN**: Cái hồ nghệ thuật ở cổng to bằng cái giường, vòi phun lách tách. (H05) · pop "HỒ BẰNG CÁI GIƯỜNG"
- **VINH**: Hợp đồng ghi view hồ, hồ nghệ thuật cũng là hồ! Chốt căn cuối! (H04) · pop "CHỐT CĂN CUỐI"
- **MN**: Người mua tưởng hời. Nhưng lấp chỗ bà ở thì nước tìm đường về. (H07)
- **THUY**: Ba mét cát. Đè lên lưng tao. (H07) · pop "3 MÉT CÁT"
- *(lặng 0.8 s)*
- **MN**: Trận mưa đầu mùa nó về đòi nợ thế nào, tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **DAN**: Ba chục tỷ một căn, giờ mặc đầm công sở chèo thuyền mủng đi làm à? (H12) · pop "30 TỶ ĐI MỦNG"
- **MN**: Tháng bảy, mưa rào trút xuống. Nước dâng phẳng lặng, đúng theo mép viền hồ cũ. (H10) · pop "NƯỚC DÂNG ĐÚNG MÉP HỒ"
- **MN**: Sáng ra, mở cửa sổ tầng hai nhìn xuống: bốn phía mênh mông nước. Biệt thự hóa thành ốc đảo. (H11) · pop "BIỆT THỰ ĐẢO"
- **VINH**: Hợp đồng ghi view hồ, giờ có hồ thật thì kiện gì! (H04) · pop "VIEW HỒ THẬT"
- **MN**: Nói xong thì biệt thự của chính ông Vĩnh ngập tới mép ban công tầng hai. (H13) · pop "NGẬP TỚI TẦNG 2"
- *(lặng 0.8 s)*
- **MN**: Chủ đầu tư trả giá thế nào, tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **MN**: Còn đúng ba ngày trước lễ khánh thành, biệt thự ba chục tỷ ngập tới nóc. (S01) · pop "HẠN: 3 NGÀY"
- **VINH**: Ba ngày nữa khánh thành! Thuê ngay sáu máy bơm khủng, hút cạn nước tống ra ngoài cho tao! (H04) · pop "6 MÁY BƠM KHỦNG"
- **MN**: Sáu máy bơm gầm rú hai ngày đêm rồi cháy rụi mô-tơ. Nước không giảm một phân. (H15) · pop "CHÁY RỤI MÔ-TƠ"
- **MN**: Càng hút, nước ngầm càng đùn lên ngập mấp mé ban công tầng hai. (H13)
- **THUY**: View hồ. (H07) · pop "BÀ THỦY"
- *(lặng 0.8 s)*
- **MN**: Nước này không phải nước mưa, là nước đòi đất. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Biệt thự triệu đô bán xong hết, sao chủ đầu tư phải tự tay đập nhà mình? (S01) · pop "TỰ ĐẬP NHÀ"
- **MN**: Còn hai mươi tư giờ. Ngân hàng dọa phong tỏa. Cư dân chèo mủng vây cổng đòi tiền. (H13) · pop "CÒN 24 GIỜ"
- **MN**: Biệt thự của Vĩnh lún nghiêng đúng tim hồ sâu nhất. Nước dâng tới gối. (H13)
- **VINH**: Đem máy xúc vào ngay! Phá... phá căn này đi! Múc lại cái hồ cho tao! (H13) · pop "PHÁ NHÀ · ĐÀO HỒ"
- **MN**: Hồ vừa thông, nước từ các ngả rút ào ào về lòng hồ. Đường sá quanh khu khô cong. (H02) · pop "NƯỚC RÚT"
- **DAN**: Ơ, tự nhiên có view hồ xịn thật, gió mát lại không lo ngập! (H02) · pop "VIEW HỒ THẬT"
- *(lặng 0.8 s)*
- **MN**: Mất nhà mà vẫn được khen có tâm, tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Đi mua nhà view hồ, nhớ hỏi câu này nếu không muốn mất trắng. (S01) · pop "MẸO MUA NHÀ"
- **VINH**: Biệt thự view hồ, sống giữa thiên nhiên! Chốt căn cuối! (H04) · pop "CHỐT CĂN CUỐI"
- **MN**: Hỏi một: hồ này có từ bao giờ. (H02)
- **MN**: Hỏi hai: hồ cũ của phường bị lấp đi đâu rồi? (H03) · pop "HỒ CŨ ĐI ĐÂU?"
- **MN**: Hồ cũ không đi đâu cả. Nó nằm dưới chân mày chờ mưa thôi. (H07) · pop "BÀ THỦY"
- **MN**: Mua nhà view hồ nhớ hỏi hồ có từ bao giờ. Hồ mới đào… khéo dưới đáy là phòng khách thằng khác. (S34) · pop "PHÒNG KHÁCH DƯỚI ĐÁY"
- *(lặng 0.8 s)*
- **MN**: Chuyện khu biệt thự lấp hồ ở Hà Nội, tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER)
- **MN**: Nửa đêm mùa khô, cả tháng không một giọt mưa. (H01) · pop "CẢ THÁNG KHÔNG MƯA"
- **MN**: Biệt thự ba chục tỷ im phăng phắc. (H01)
- **MN**: Dưới nền gạch hoa vọng lên tiếng ếch kêu. Dày. Đều. Như cả cái ao dưới chân. (H01) · pop "TIẾNG ẾCH DƯỚI NỀN"
- **VINH**: Thợ làm ẩu để ngấm nước à? Mai đổ xi măng chống thấm, bịt kín chân tường cho tao! (H04)
- **MN**: Thợ trát kín vữa. Nhưng sáng hôm sau, một búp sen non nhú qua khe vỉa hè, đọng giọt nước buốt. (H09) · pop "SEN MỌC TRÊN ĐÁ"
- **MN**: Dưới nền căn biệt thự triệu đô này... đang chôn giấu thứ gì? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Còn đúng bảy mươi hai giờ trước lễ bàn giao sổ đỏ. (S01) · pop "HẠN: 72 GIỜ"
- **MN**: Một trận mưa ập xuống, nước dâng đúng mép hồ cũ, ngập sạch cả khu đô thị. (H10) · pop "NGẬP TOÀN KHU"
- **MN**: Sáu máy bơm khủng cháy rụi mô-tơ. Mặt nước vẫn không giảm một phân. (H15) · pop "CHÁY MÁY BƠM"
- **MN**: Còn hai mươi tư giờ. Ngân hàng dọa phong tỏa. Cư dân chèo mủng vây cổng đòi tiền. (H13) · pop "CÒN 24 GIỜ"
- **VINH**: Đổ bê tông chặn họng cống lại cho tao! (H13) · pop "BÊ TÔNG CHẶN CỐNG"
- **MN**: Bê tông vừa đổ xuống, mạch ngầm phụt tung sàn gạch. Liệu ông Vĩnh có thoát cảnh tù tội? Bản đầy đủ, link dưới. (S26)

## Hình
Tận dụng: ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Danh sách ảnh v2 (đánh dấu dùng v3: 12/15 ảnh)
| Mã | Dùng v3 | Mô tả cảnh |
|---|---|---|
| H01 | **CÓ** | Phòng khách biệt thự đêm, nền gạch hoa bóng, im lặng, đèn tắt |
| H02 | **CÓ** | Ảnh cũ: hồ điều hòa phường, sen; bản cuối hồ mới giữa khu biệt thự, người đi dạo |
| H03 | **CÓ** | Máy xúc lấp hồ, cát đổ; bản cuối máy xúc múc lại hồ điều hòa |
| H04 | **CÓ** | Ông Vĩnh cận: vest kem, trước bảng phối cảnh "biệt thự view hồ"; bản nghe điện thoại hoảng |
| H05 | **CÓ** | Cái hồ nghệ thuật nhỏ như cái giường ở cổng khu, vòi phun nước lách tách |
| H06 | *Bỏ* | Tranh màu ngả nâu: bà Thủy tóc bạc dài, áo màu nước |
| H07 | **CÓ** | Bà Thủy: tóc bạc dài ướt, áo lụa màu nước, đứng trên mặt nước không chìm |
| H08 | *Bỏ* | Ông Vĩnh cận bật đèn, mặt hoảng |
| H09 | **CÓ** | Cận búp sen non nhú qua khe vỉa hè lát đá hoa cương, đọng giọt nước buốt |
| H10 | **CÓ** | Mưa rào, cả khu biệt thự nước dâng phẳng lặng như mặt hồ đúng viền mép hồ cũ |
| H11 | **CÓ** | Từ cửa sổ tầng hai nhìn ra: bốn phía mặt hồ, sen nổi, biệt thự khác như đảo |
| H12 | **CÓ** | Chị Mai Anh mặc đầm công sở chèo thuyền mủng giữa khu biệt thự ngập |
| H13 | **CÓ** | Biệt thự giữa khu ngập tới tầng hai, ông Vĩnh đứng ban công co ro nhìn xuống nước |
| H14 | *Bỏ* | Cổng khu đô thị: ngoài cổng đường khô, trong cổng ngập sâu |
| H15 | **CÓ** | Sáu máy bơm lớn bốc khói cháy mô-tơ bên mép nước phẳng lặng |

## Lịch
- **LONG**: Thứ Hai 05/07 18:00 (+07)
- **SH1**: Thứ Hai 05/07 19:00
- **SH2**: Thứ Ba 06/07 11:30
- **SH3**: Thứ Ba 06/07 19:00
- **SH4**: Thứ Tư 07/07 11:30
- **SH5**: Thứ Tư 07/07 19:00
- **SH6**: Thứ Năm 08/07 11:30
- **SH7**: Thứ Năm 08/07 19:00
*(Tập sau P66 Thiên Lôi ra mắt vào Thứ Năm 08/07 18:00)*
