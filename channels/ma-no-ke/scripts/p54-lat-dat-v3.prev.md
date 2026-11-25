# Dự án 54 — Con lật đật "Đồ nhà bán, con không được chơi" (v3, 2026-11-24)

v3 nâng kịch tính theo bài học P04:
- **Đồng hồ + cái giá rõ ràng**: Hạn chót rạng sáng mùng một tháng Sáu (hội thiếu nhi lớn nhất năm). Nếu lật đật trượt hạn, hai nghìn món đồ chơi nhiễm chì sẽ tràn vào cặp học sinh quanh trường, còn kỷ vật ba mươi năm của ông nội thành vô dụng.
- **3 nấc leo thang chủ động của con lật đật**: Lắc kệ làm đổ xe nhựa cản đường (thất bại: Khôi quét dọn, đại hạ giá xả tháo) → Dùng vía lăn búp bê về cửa phòng ngủ (thất bại: Khôi mắng oan con gái, khóa chặt tiệm cất chìa) → Nước liều: ba giờ sáng đứng thẳng dậy, dùng cạn ba mươi năm vía ép chủ tiệm mộng du vác cả đống hàng độc lên giường ôm ngủ.
- **Điểm thấp nhất**: Hai giờ sáng đêm cuối, tiệm bị khóa hai lớp, chìa cất dưới gối, bé Bông bị mắng oan; lật đật già nua bất lực trước lòng tham người lớn.
- **Cú lật do nhân vật chọn và trả giá**: Khôi ôm hàng độc ngủ cả đêm, sáng ra ngạt mùi sơn chì nôn mửa; câu hỏi ngây thơ của bé Bông ("Bố còn ôm chúng nó ngủ được cơ mà?") bóc trần sự thật. Khôi trả giá bằng nỗi sợ mùi nhựa đến mức nôn mật xanh mật vàng, tiêu hủy toàn bộ lô hàng và buộc phải bán hàng kiểm định đắt tiền.
- **Khoảnh khắc rợn duy nhất**: Ba giờ sáng đêm thứ ba, phố lặng, lật đật từ từ đứng thẳng thì cả kệ đồ chơi nhựa đồng loạt ngã gục như quân bài domino.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Con lật đật gỗ ba mươi năm tuổi làm cách nào ngăn được hai nghìn món đồ chơi nhiễm chì tuồn vào tay trẻ nhỏ trước giờ mở cửa ngày Quốc tế Thiếu nhi?
- **Đồng hồ & Cái giá**: Trước sáu giờ sáng mùng một tháng Sáu; cái giá là hai nghìn đứa trẻ bị nhiễm độc và lời dặn "làm đồ cho trẻ con phải thật lòng" của ông nội vĩnh viễn bị chôn vùi.
- **3 nấc leo thang**:
  1. Nấc 1: Đêm 1, lắc đổ kệ xe nhựa cảnh báo → Khôi coi là chuột bọ phá, dán tem đại hạ giá bán tháo.
  2. Nấc 2: Đêm 2, kéo búp bê độc lăn về cửa phòng ngủ → Khôi mắng con gái nghịch lén, khóa trái cửa tiệm, nhét chìa dưới gối.
  3. Nấc 3 (nước liều): 3 giờ sáng đêm 3, lật đật đứng dậy hất rạp toàn bộ kệ nhựa, dùng sạch vía kéo Khôi mộng du vác cả đống hàng độc lên giường ôm ngủ.
- **Điểm thấp**: 2 giờ sáng đêm cuối, cửa tiệm khóa chặt, hạn chót cận kề; một món đồ chơi gỗ cũ kỹ không cắn không nói được trước lòng tham con người.
- **Cú lật**: Sáng ra Khôi tỉnh dậy giữa đống đồ chơi nhựa độc hại, ngạt mùi suýt chết; bé Bông hỏi một câu ngây thơ khiến bố chết lặng. Khôi tiêu hủy hàng vì ám ảnh sợ mùi nhựa buồn nôn, không phải vì bỗng dưng thức tỉnh lương tâm.
- **Khoảnh khắc rợn**: 3 giờ sáng, tiệm tối om, không gió, con lật đật gỗ từ từ đứng thẳng dậy thì cả kệ đồ chơi nhựa đồng loạt ngã gục khô khốc như quân bài.
- **Câu kết**: Châm biếm thói buôn gian dán tem giả; teaser tập sau Bà Gió (Thứ Hai).

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (dẫn chuyện) | B02, S01, S26, S33, S34, S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| LAT | Con lật đật gỗ (người kể) | D01 | Thiền Tâm Đức | atempo=0.95,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2 |
| KHOI | Anh Khôi (chủ tiệm) | D05 | Adam bựa | atempo=1.02,anull |
| BONG | Bé Bông (con gái 6 tuổi) | D07 | Trúc Ly | asetrate=48000*1.22,aresample=48000 |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "LAT": {"preset": "Thiền Tâm Đức", "fx": "atempo=0.95,asetrate=48000*0.92,aresample=48000,aecho=0.8:0.4:30:0.2"},
  "KHOI": {"preset": "Adam bựa", "fx": "atempo=1.02,anull"},
  "BONG": {"preset": "Trúc Ly", "fx": "asetrate=48000*1.22,aresample=48000"}
}
```

## LONG (591 chữ thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | D01 | *(không lời, 2.5 s)* | "TIỆM ĐỒ CHƠI · ĐÊM" · gỗ cót két khẽ · nhạc tắt |
| 0:02 | D01 | **LAT**: Tôi là lật đật. Ngã thế nào tôi cũng đứng dậy. | "LẬT ĐẬT GỖ" · nhactat |
| 0:05 | D01 | **LAT**: Đêm nay, tôi nằm im… để chờ một đứa trẻ. | "NẰM IM… ĐỂ CHỜ" |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Sắp Tết thiếu nhi rồi, mua quà cho con chưa? | "SẮP 1/6" · coc · braam |
| 0:15 | S26 | **MN**: Xem tem chưa? Tem in thì dễ, chứ thứ trên kệ tiệm này… đố máy nào in được. | "TEM IN ĐƯỢC?" |
| 0:21 | D01 → D03 | **LAT**: Tôi đứng trên kệ cao nhất tiệm anh Khôi. Bằng gỗ mít sơn tay, đã bạc màu. | "KỆ CAO NHẤT" · chuongcua |
| 0:27 | D01 | **LAT**: Ba mươi năm trước, ông đẽo tôi cho anh. Khóc là ôm tôi ngủ. | "30 NĂM TRƯỚC" |
| 0:32 | D03 | **LAT**: Giờ anh làm chủ. Dưới chân tôi là hai nghìn món đồ nhựa nồng mùi sơn. | "2.000 MÓN ĐỒ NHỰA" |
| 0:38 | D04 → D05 | **KHOI**: Chị yên tâm, hàng dán tem chuẩn. Mai thiếu nhi em giảm mười phần trăm! | "GIẢM 10%" · mayin · xebangdinh |
| 0:44 | S26 | **MN**: Tem in tại chỗ, dán vào là thành an toàn. Nhanh, tiện, rẻ. | "TEM IN TẠI CHỖ" · ting |
| 0:49 | D03 | **LAT**: Hạn chót sáng mai. Hai nghìn món đồ độc này sẽ chui vào cặp học sinh. | "HẠN: SÁNG MAI" · tick |
| 0:54 | D06 | **LAT**: Bé Bông con gái anh với tay lấy con búp bê nhựa mới nhập. |  |
| 0:58 | D05 | **KHOI**: Bỏ xuống ngay! Đồ nhà bán, con tuyệt đối không được chơi! | "CẤM CHƠI ĐỒ TIỆM" · bassdown |
| 1:02 | D07 | **BONG**: Sao các bạn mua được chơi, mà con lại không được hả bố? | "SAO CÁC BẠN ĐƯỢC CHƠI?" |
| 1:07 | D05 → D06 | **LAT**: Anh Khôi giật lại, không nói được câu nào. Người bán luôn biết rõ hàng mình nhất. | giatdo |
| 1:13 | D02 | **LAT**: Đêm thứ nhất, tôi lắc kệ gỗ, hất đổ hàng xe nhựa để anh đổi ý. | "NẤC 1" · lachcach |
| 1:18 | D05 | **KHOI**: Chuột bọ phá quá! Càng đổ càng phải đại hạ giá bán tháo! | "BÁN THÁO!" |
| 1:23 | D04 | **LAT**: Anh quét sàn, dán tem hạ giá bán gấp. Lần một: thất bại. | "LẦN 1: THẤT BẠI" |
| 1:27 | D02 → D10 | **LAT**: Đêm thứ hai, tôi kéo mấy con búp bê lăn về cửa phòng ngủ anh. | "NẤC 2" · buocchan |
| 1:32 | D05 | **KHOI**: Bông lại tha đồ lên đây à? Lần sau bố phạt! | "PHẠT!" |
| 1:36 | D05 | **LAT**: Anh khóa tiệm, cất chìa dưới gối. Sáng mai mở hội, tôi sắp thua. | "LẦN 2: THẤT BẠI" · khoacua |
| 1:41 | D01 | **LAT**: Hai giờ sáng đêm cuối. Còn bốn tiếng nữa là tiệm mở cửa. | "2:00 SÁNG" · "CÒN 4 TIẾNG" · tick |
| 1:46 | D01 | **LAT**: Tôi là đồ chơi cũ, làm sao ngăn được lòng tham người lớn? | nhactat |
| 1:50 | D01 | *(không lời, 1.5 s)* | imlang · nhactat |
| 1:52 | D01 | **LAT**: Ba giờ sáng. Tiệm tối om. Tôi nằm nghiêng trên kệ cao, rồi từ từ đứng thẳng dậy. | "3:00 SÁNG" · cotket · nhactat |
| 1:58 | D02 | **MN**: Lật đật đứng dậy, cả kệ đồ chơi nhựa ngã gục như quân bài. Từ đầu đến cuối kệ. | "NGÃ RẠP" · lachcach2 · braam |
| 2:05 | D01 | **LAT**: Tôi dùng hết chút vía ba mươi năm, gọi anh Khôi dậy. | "NƯỚC LIỀU" |
| 2:09 | D10 | **MN**: Anh Khôi mộng du. Mắt nhắm nghiền, xuống tiệm ôm từng chồng đồ chơi nhựa nồng nặc lên giường. | "MỘNG DU" · buocchan |
| 2:15 | D08 | **LAT**: Hồi bé anh ôm tôi ngủ thế nào, giờ ôm đống hàng độc hại y như thế. | "ÔM HÀNG ĐỘC NGỦ" |
| 2:21 | D05 | **KHOI**: Ai bê vào đây?! Đầu đau như búa bổ… Mùi gì hắc thế?! | "ĐAU ĐẦU" |
| 2:25 | D08 | **MN**: Sáng ra, Khôi tỉnh dậy giữa đống nhựa. Mắt cay, đầu váng, nôn thốc nôn tháo. | "NÔN THỐC NÔN THÁO" · non |
| 2:30 | D07 | **BONG**: Bố ơi… Bố cho con chơi với. Bố còn ôm chúng nó ngủ cả đêm được cơ mà? | "CÂU HỎI CỦA CON" · bassdown |
| 2:37 | D05 → D01 | **LAT**: Anh Khôi lặng đi. Ba mươi năm trước, ông nội từng dặn anh: Đồ cho trẻ con thì phải thật lòng. | "PHẢI THẬT LÒNG" · boong |
| 2:44 | D09 | **MN**: Sợ chết khiếp, anh Khôi đem hàng đi viện kiểm định. Hàm lượng chì vượt ngưỡng mười lần. | "CHÌ GẤP 10 LẦN" |
| 2:50 | D03 | **MN**: Anh tiêu hủy cả lô hàng. Không phải vì giác ngộ, mà vì giờ ngửi thấy mùi nhựa là buồn nôn. | "TIÊU HỦY" · "SỢ MÙI NHỰA" |
| 2:56 | D07 | **BONG**: Bố tự tay đẽo lật đật mới cho con à? |  |
| 2:59 | D01 | **LAT**: Đồ cho con nít thì phải làm lâu. Giờ tiệm vắng hơn, nhưng trên kệ đã có hàng đạt chuẩn. | "HÀNG ĐẠT CHUẨN" · cotket |
| 3:05 | S33 → S34 | **MN**: Muốn biết đồ mình bán có độc không, tối nay ôm nó ngủ thử một đêm là rõ ngay. | rithuoc |
| 3:10 | B02 | **MN**: Thứ Hai: biển quảng cáo khổng lồ che kín cửa sổ cả dãy nhà. Đầu mùa có một bà đi qua. Bà là gió. | "TẬP SAU · THỨ HAI" · whoosh |
| 3:16 | S06 | **MN**: Bấm đăng ký đi. Không thì nửa đêm nay, đồ chơi nhà mày nó tự đứng dậy đấy. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ con lật đật gỗ. Ba mươi năm không ngã, lần đầu tiên phải dạy chủ tiệm làm người. (D01) · pop "CON LẬT ĐẬT GỖ"
- **LAT**: Tôi đứng trên nóc kệ tiệm anh Khôi. Ba mươi năm trước, ông nội đẽo tôi cho anh. (D01)
- **MN**: Giờ anh mở tiệm, nhập hai nghìn món đồ chơi nhựa không rõ nguồn gốc. Máy in tem tại chỗ, dán vào là an toàn. (D04) · pop "TEM IN TẠI CHỖ"
- **KHOI**: Đồ nhà bán, con tuyệt đối không được chơi! (D05)
- **MN**: Con mình thì cấm tiệt, nhưng đem bán cho con người khác. (D06)
- **LAT**: Ba giờ sáng, tôi đứng dậy. Đêm ấy anh Khôi mộng du, tự ôm cả đống đồ chơi nhựa lên giường ngủ say như chết. (D10) · pop "ÔM HÀNG ĐỘC NGỦ"
- *(lặng 0.8 s)*
- **MN**: Muốn biết đồ mình bán có độc không, tối nay ôm nó ngủ một đêm là rõ. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRAILER)
- **MN**: Còn đúng bốn tiếng nữa là mùng một tháng Sáu. Tiệm đồ chơi mở cửa, hai nghìn đứa trẻ sẽ gặp nạn. (D03) · pop "HẠN: SÁNG 1/6"
- **LAT**: Hạn chót sáng mai. Hai nghìn món đồ độc này sẽ chui vào cặp học sinh quanh trường. (D01) · pop "CON LẬT ĐẬT GỖ"
- **LAT**: Tôi lắc đổ kệ xe, anh dán tem đại hạ giá. Tôi kéo búp bê lên sàn, anh khóa tiệm cất chìa dưới gối. (D02)
- **LAT**: Hai giờ sáng. Tôi là đồ chơi cũ, làm sao ngăn được lòng tham người lớn? (D01)
- **LAT**: Ba giờ sáng. Tôi nằm nghiêng trên kệ cao, rồi từ từ đứng thẳng dậy. (D01) · pop "3:00 SÁNG"
- **MN**: Một con lật đật gỗ già nua, sẽ làm gì để cứu cả nghìn đứa trẻ? Bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **KHOI**: Bỏ xuống ngay! Đồ nhà bán, con tuyệt đối không được chơi! (D05) · pop "CẤM CHƠI ĐỒ NHÀ BÁN"
- **BONG**: Sao các bạn mua được chơi, mà con lại không được hả bố? (D07)
- **MN**: Anh Khôi giật lại con búp bê nhựa, không nói được câu nào. Người bán luôn biết rõ hàng mình nhất. (D06)
- **LAT**: Đêm ấy, anh Khôi mộng du xuống tiệm, ôm đúng đống đồ chơi nhựa hôi hắc lên giường ngủ. (D10) · pop "CON LẬT ĐẬT GỖ"
- **BONG**: Bố ơi… Bố cho con chơi với. Bố còn ôm chúng nó ngủ cả đêm được cơ mà? (D07) · pop "BỐ CÒN NGỦ VỚI NÓ ĐƯỢC"
- *(lặng 0.8 s)*
- **MN**: Câu hỏi của đứa trẻ sáu tuổi làm lộ tẩy gã buôn gian. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRAILER)
- **LAT**: Ba giờ sáng. Tiệm tối om. Tôi nằm nghiêng trên kệ cao… (D01) · pop "CON LẬT ĐẬT GỖ"
- **MN**: Phố đứng gió. Không một tiếng động. Con lật đật gỗ ba mươi năm tuổi từ từ đứng thẳng dậy. (D01) · pop "3:00 SÁNG"
- **MN**: Lật đật vừa đứng lên, cả kệ đồ chơi nhựa đồng loạt ngã gục như quân bài domino. Rạp xuống từ đầu đến cuối kệ! (D02) · pop "CẢ KỆ ĐỔ RẠP"
- **LAT**: Tôi dùng hết chút vía ba mươi năm, gọi anh Khôi dậy. (D01)
- **MN**: Cánh cửa phòng ngủ mở ra, anh Khôi bước xuống tiệm với đôi mắt nhắm nghiền. Chuyện gì xảy ra tiếp theo? Bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **KHOI**: Chị yên tâm, hàng nhà em dán tem kiểm định đàng hoàng! (D05) · pop "TEM KIỂM ĐỊNH?"
- **MN**: Máy in tem mua trên mạng, tem an toàn in theo cuộn. Dán cái rẹt là xong kiểm định. (D04) · pop "IN TẠI CHỖ"
- **LAT**: Con lật đật gỗ trên nóc kệ không in được tem. Nhưng nó biết gọi vía. (D01) · pop "CON LẬT ĐẬT GỖ"
- **MN**: Sáng hôm sau, chủ tiệm tỉnh dậy giữa đống đồ chơi dán tem giả. Đầu đau như búa bổ, mắt cay xè, nôn thốc nôn tháo vì ngạt mùi sơn chì. (D08) · pop "CHÌ GẤP 10 LẦN"
- *(lặng 0.8 s)*
- **MN**: Tem in giả được, chứ lá phổi thì không. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRỌN)
- **KHOI**: Ai bê đống này vào đây?! Đầu đau như búa bổ… Mùi gì mà hắc thế?! (D05) · pop "TỈNH DẬY GIỮA HÀNG ĐỘC"
- **MN**: Camera quay lại: chính ông chủ tiệm mộng du nửa đêm xuống bốc từng bọc đồ chơi độc hại lên giường ôm ngủ. (D10)
- **BONG**: Bố ơi, bố cho con chơi với. Bố còn ôm chúng nó ngủ cả đêm được cơ mà? (D07) · pop "CÂU HỎI CHÍ MẠNG"
- **LAT**: Ba mươi năm trước, ông nội từng dặn anh: Đồ cho trẻ con thì phải thật lòng. (D01) · pop "CON LẬT ĐẬT GỖ"
- **MN**: Mang đi kiểm định, hàm lượng chì vượt ngưỡng mười lần. Khôi phải tự tay tiêu hủy sạch hai nghìn món hàng. (D09)
- *(lặng 0.8 s)*
- **MN**: Bán hàng thất đức thì có ngày tự ôm lấy mà ngửi. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **LAT**: Ba mươi năm trước, ông nội đẽo tôi cho anh Khôi. Ông bảo: Đồ cho con nít thì phải làm lâu. (D01) · pop "CON LẬT ĐẬT GỖ"
- **MN**: Ba mươi năm sau, anh Khôi nhập hai nghìn món đồ chơi độc hại về dán tem giả bán cho trẻ con. (D03)
- **LAT**: Anh cấm con gái chơi đồ của tiệm. Nhưng anh bán cho con người khác. (D06) · pop "ĐỒ NHÀ BÁN CẤM CHƠI"
- **LAT**: Đêm trước mùng một tháng Sáu, tôi quyết định không đứng nhìn nữa. (D01)
- **MN**: Con lật đật gỗ đã làm gì để người lớn phải trả giá? Bản đầy đủ, link ngay dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Mô tả cảnh | Trạng thái v3 |
|---|---|---|
| D01 | Tiệm đồ chơi đêm, con lật đật gỗ sơn tay đỏ vàng bạc màu trên kệ cao; bản nằm nghiêng, bản đứng thẳng giữa đồ chơi nằm rạp; bản cuối cạnh một con lật đật mới | [x] Đã dùng |
| D02 | Kệ đồ chơi nhựa sặc sỡ (robot, búp bê, xe); bản ngã gục lần lượt như quân bài domino | [x] Đã dùng |
| D03 | Tiệm đồ chơi gần trường tiểu học ban ngày, phụ huynh đông, kệ đầy hàng; bản sau kệ thưa, hàng có tem kiểm định | [x] Đã dùng |
| D04 | Cận máy in tem nhỏ nhả tem dán (trống chữ), tay dán lên hộp đồ chơi nhựa | [x] Đã dùng |
| D05 | Anh Khôi cận: áo thun, tạp dề tiệm; bản xởi lởi, giật đồ chơi, ôm đầu đau đớn, lặng đi | [x] Đã dùng |
| D06 | Tối, phòng khách: bé Bông cầm búp bê nhựa, anh Khôi giật phắt lại | [x] Đã dùng |
| D07 | Bé Bông (6 tuổi, tóc buộc hai chỏm) cận, ngơ ngác; bản đứng cửa phòng; bản ôm lật đật gỗ mới | [x] Đã dùng |
| D08 | Phòng ngủ sáng: giường chất đầy đồ chơi nhựa, anh Khôi nằm giữa, mặt tái mét, nôn ọe | [x] Đã dùng |
| D09 | Phòng thí nghiệm: kỹ thuật viên áo blouse đưa tờ kết quả kiểm định vượt chì, anh Khôi bịt mũi | [x] Đã dùng |
| D10 | Đêm: anh Khôi mặc đồ ngủ, mắt nhắm nghiền, ôm chồng đồ chơi nhựa đi lên cầu thang mộng du | [x] Đã dùng |

## Lịch
- **LONG**: Thứ Năm 27/05 18:00 (+07).
- **SHORTS**:
  - SH1: Thứ Năm 27/05 19:00
  - SH2: Thứ Sáu 28/05 11:30
  - SH3: Thứ Sáu 28/05 19:00
  - SH4: Thứ Bảy 29/05 11:30
  - SH5: Thứ Bảy 29/05 19:00
  - SH6: Chủ Nhật 30/05 11:30
  - SH7: Chủ Nhật 30/05 19:00
- **Tập sau (P55)**: Thứ Hai 31/05 18:00 (Bà Gió "Biển quay mặt vào tường").
