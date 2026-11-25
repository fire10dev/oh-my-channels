# Dự án 39 — Ma đưa đò “Trốn vé chuyến cuối” (v3, 2026-11-24)

- Rút LONG xuống khoảng 580 chữ lời thoại, giữ nguyên trục truyện và ba lần Long chủ động thất bại.
- Chuẩn hóa mã giọng và thêm khối JSON `voices`.
- Bổ sung punch riêng cho các short trọn; mỗi short có 70–110 chữ lời.
- Giữ cú lật do ông lão tự chọn, với cái giá là chuyến cuối đêm ấy.
- Giữ nhát rợn duy nhất ở hơi thở không khói và câu kết châm biếm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Long có xuống được khỏi chuyến đò âm trước khi ông lão đưa nó sang bờ bên kia không?
- **Đồng hồ / cái giá:** Chuyến đò phải quay đầu trước lúc qua bờ; nếu trễ, ông lão mất quyền trả Long về, còn Long mắc lại bên kia. Cái giá ông lão chọn trả là mất chuyến cuối đêm đó.
- **Ba nấc leo thang:** Long quay lén để câu tương tác nhưng đèn làm lộ chỗ ngồi; Long lẻn lên đò nhưng bị phát hiện; Long giật mái chèo để ép quay lại nhưng mái chèo không nhúc nhích.
- **Điểm thấp:** Giữa sông, Long hiểu mình là người sống duy nhất trên chuyến đò; hơi thở nó bốc khói, những người khác không ai thở ra làn khói nào. Ông lão báo đò sắp qua bờ.
- **Cú lật:** Ông lão chủ động quay đò về bến người sống, dù biết sẽ mất chuyến cuối và quyền đưa đò đêm ấy.
- **Khoảnh khắc rợn:** Hơi thở Long trắng khói; trên đò không một ai khác thở ra làn khói nào.
- **Câu kết:** Trốn vé âm cứu được mạng; ra tới cửa hang vẫn phải mua vé dương.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34; S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| LONG | Long “Phượt”, áo gió phản quang, đèn đội đầu, gậy quay | Đ04, Đ05 | Adam bựa | `anull` |
| LAO | Ông lão lái đò, nón lá rách, áo tơi, mái chèo gỗ | Đ03 | Thiền Tâm Đức | `atempo=0.8,aecho=0.8:0.7:150:0.4` |
| KL | Cô kiểm lâm ở chốt hang | Đ12 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"LONG":{"preset":"Adam bựa","fx":"anull"},"LAO":{"preset":"Thiền Tâm Đức","fx":"atempo=0.8,aecho=0.8:0.7:150:0.4"},"KL":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | Đ01 → Đ02 | *(không lời, 3 s)* | Nước nhỏ giọt vang hang · mái chèo không tiếng · nhạc tắt |
| 0:03 | Đ03 | **LAO**: …Vé. | Mõ cộc nhẹ |
| 0:06 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay trốn vé giỏi lắm. Có một chuyến, trốn được thì sống. | Mõ cộc · chữ “TRỐN VÉ CHUYẾN CUỐI” |
| 0:14 | Đ04 | **MN**: Long “Phượt”, chủ kênh “Đi không mất vé”. Hai trăm nghìn người theo dõi bí kíp đi chơi miễn phí. | Gió hang · chữ “ĐI KHÔNG MẤT VÉ” |
| 0:23 | Đ05 | **LONG**: Vé là cho người không biết đường. Anh em theo Long, đi đâu cũng free. Tập sau Long chỉ cách né… | Tiếng quay video |
| 0:30 | Đ06 | **MN**: Năm ngoái, đội cứu hộ mất hai ngày tìm Long trong hang ngập. Hai chục người kéo dây gọi tên. Long ra được, quay video: “Hang này chán, không đáng vé.” | Tiếng dây kéo · chữ “2 NGÀY TÌM KIẾM” |
| 0:42 | S26 | **MN**: Không đáng vé. Nhưng tiền cứu hộ thì Long vẫn chưa đóng. | Tiếng máy quay tắt |
| 0:48 | Đ07 | **MN**: Tháng tư, mưa đầu mùa. Hang nước đóng cửa. Long chèo kayak lách qua dây chắn lúc chạng vạng. Không sóng điện thoại. Không đường quen. | Mái chèo · gió cửa hang |
| 0:57 | Đ01 | **MN**: Dân gian kể người chết qua sông âm phải đi đò. Ông lái đò soát vé. Có vé mới sang. Người sống lên nhầm chuyến thì khó về. | Nước nhỏ giọt · chữ “ĐÒ ÂM SOÁT VÉ” |
| 1:06 | Đ08 | **MN**: Sâu trong hang, Long thấy bến đá, chiếc đò gỗ và mấy hành khách im lìm, mỗi người cầm tờ vàng mã triện đỏ. | Dơi bay xa |
| 1:16 | Đ05 | **LONG**: Đò du lịch chui. Có vé giấy, chắc thu tiền mặt. Anh em xem Long quay cận cảnh nhé. | Ting máy quay |
| 1:23 | Đ03 | **LAO**: Vé. | Mái chèo khua nhẹ |
| 1:26 | Đ05 | **LONG**: Ông cứ soát bên kia. Góc này ánh sáng đẹp, cháu quay giúp. | Tiếng máy quay |
| 1:30 | Đ03 → Đ05 | **MN**: Ông lão quay sang. Long giơ đèn, lia máy. Chỗ ngồi trống sáng rõ như sân khấu. Ông lão quay lại, thấy Long ngồi chình ình. | Đò chòng chành |
| 1:41 | Đ05 | **LONG**: Rồi, tắt máy. Em lên nhầm. Cho em xuống bến này. | Máy quay tắt |
| 1:47 | Đ09 | **MN**: Đò rời bến. Long chèo kayak theo, nhưng dòng nước kéo nó ngược lại. | Nước xiết · mái chèo |
| 1:54 | Đ03 | **LAO**: Đã lên đò thì ngồi yên. | Nước nhỏ giọt |
| 1:58 | Đ05 | **LONG**: Cho cháu xuống ngay. Cháu trả gấp đôi, gấp ba. Cháu có ví điện tử. | Điện thoại mất sóng |
| 2:04 | Đ03 | **LAO**: Không nhận tiền sống. | Nhạc dừng |
| 2:08 | Đ09 → Đ10 | **MN**: Long giật mái chèo, định kéo đò quay lại. Mái chèo nặng trơ. Đèn đội đầu rọi ngang mặt người trên đò. | Mái chèo khựng |
| 2:18 | Đ10 | **MN**: Hơi thở Long bốc khói trắng. Nó nhìn sang bà cụ, anh thanh niên, cô gái áo dài. Không ai thở ra khói. Không một làn nào. | Hơi thở · nhạc tắt |
| 2:29 | Đ03 | **LAO**: Có đứa sống. Trốn vé. | Im 1.5 s |
| 2:33 | Đ05 | **LONG**: Cháu còn sống. Cho cháu về. Cháu trả hết! | Hơi thở gấp |
| 2:38 | Đ03 | **LAO**: Sắp qua bờ. Muốn về thì ngồi yên. | Nước rền xa |
| 2:44 | Đ05 | **LONG**: Chú quay đò đi. Chú muốn gì cháu cũng— | Câu bị ngắt |
| 2:49 | Đ03 | **LAO**: Chuyến cuối của ta. | Mái chèo ngừng |
| 2:53 | Đ03 → Đ08 | **MN**: Ông lão nhìn Long, rồi nhìn bờ tối. Ông tự chọn quay đò về bến người sống, bỏ chuyến cuối đêm nay. | Mái chèo đổi nhịp |
| 3:04 | Đ08 | **MN**: Đò cập bến đá. Ông lão không đòi tiền, chỉ đẩy Long lên bờ. Hành khách vẫn ngồi im. | Mái chèo xa dần |
| 3:13 | S26 | **MN**: Cả đời trốn vé. Lần duy nhất trốn được là chuyến cần trốn nhất. Ông lão mất chuyến cuối; Long mất luôn cái cớ “đi không mất vé”. | Chữ “CHUYẾN CUỐI · BỎ” |
| 3:24 | Đ11 | **MN**: Gần sáng, nước cuốn kayak dạt ra cửa hang. Long nằm bẹp trong đó, ngay trước chốt kiểm lâm. | Chim sáng · nước chảy |
| 3:33 | Đ12 | **KL**: Lại anh à? Hang đóng cửa mùa mưa mà vẫn vào. Phạt, cộng vé, cộng tiền cứu hộ năm ngoái chưa đóng. Bên trong không ai thu vé thì bên ngoài có người thu. | Máy in biên lai |
| 3:46 | Đ05 | **LONG**: Em đóng hết. Mua luôn vé tham quan. Có hóa đơn không chị? | Tiếng máy in |
| 3:52 | Đ04 | **MN**: Long quay video cuối cùng, cầm vé tham quan, bảo “anh em mua vé đi”, rồi gỡ kênh “Đi không mất vé”. Có người thu đủ là kênh đóng cửa. | Máy quay tắt |
| 4:04 | S33 → S34 | **MN**: Trốn vé dương thì bị phạt. Trốn vé âm thì sống. Tao khuyên: mua vé dương cho đàng hoàng. Vé âm ấy à, tới lượt thì tự có. | Rít điếu cày |
| 4:13 | B02 → S34 | **MN**: Tập sau: xe hủ tiếu gõ đêm cạnh cổng nghĩa trang, chuyên dùng thịt thiu. Khách quen nhất ăn không cần trả tiền. Chỉ cần ngửi. | Thẻ “TẬP SAU” · whoosh |
| 4:24 | S06 | **MN**: Bấm đăng ký đi. Không cần vé. Tập sau nhớ đừng ngửi lúc đói. | Chữ “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN: Chiếc đò trôi ra không tiếng (9:16, 35 s)

- **MN**: Long chèo kayak trong hang đóng cửa. Tắt sóng, tắt đèn ngoài kia. Trong vệt đèn có một chiếc đò gỗ trôi ra, không nghe tiếng mái chèo. (Đ01 → Đ02) · pop “MA ĐƯA ĐÒ”
- **LAO**: …Vé. (Đ03)
- **MN**: Cái đò này soát vé kỹ hơn cửa soát tự động. Long thì quen đi đâu cũng không vé. (Đ03 → Đ05)
- **MN**: Đò ma không cần xăng, nhưng vẫn không chở khách miễn phí. (Đ03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 — TRỌN: Kênh đi không mất vé (9:16, 36 s)

- **MN**: Long “Phượt”, chủ kênh “Đi không mất vé”. Hai trăm nghìn người theo dõi bí kíp đi chơi miễn phí. (Đ04) · pop “MA ĐƯA ĐÒ”
- **LONG**: Vé là cho người không biết đường. Anh em theo Long, đi đâu cũng free. (Đ05)
- **MN**: Năm ngoái, đội cứu hộ mất hai ngày tìm Long trong hang ngập. Hai chục người kéo dây gọi tên. (Đ06)
- **LONG**: Hang này chán, không đáng vé. (Đ04)
- **MN**: Không đáng vé. Nhưng tiền cứu hộ thì Long vẫn chưa đóng. (S26)
- **MN**: Long lại vào hang đóng cửa mùa mưa. (Đ07)
- **MN**: Kênh miễn phí, hóa đơn cứu hộ thì chưa. (S26)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 — TRỌN: Đò âm cũng có soát vé (9:16, 34 s)

- **MN**: Sâu trong hang có bến đá, một chiếc đò gỗ, mấy hành khách cầm giấy vàng mã có triện đỏ. (Đ08) · pop “MA ĐƯA ĐÒ”
- **LAO**: Vé. (Đ03)
- **LONG**: Đò du lịch chui. Anh em xem Long lên không mất đồng nào này. (Đ05)
- **MN**: Ông lão quay sang soát người khác. Long lẻn ra đuôi đò, ngồi xuống. Quen tay. (Đ03 → Đ05)
- **MN**: Đò âm soát vé còn kỹ hơn người sống. Chui được lên đò, chưa chắc chui được về. (Đ09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 — TRỌN: Không ai thở ra khói (9:16, 37 s)

- **MN**: Giữa sông ngầm, đèn đội đầu rọi ngang mặt người trên đò. (Đ09) · pop “MA ĐƯA ĐÒ”
- **MN**: Hang lạnh buốt. Hơi thở Long bốc thành khói trắng. (Đ10)
- **MN**: Long nhìn sang bà cụ, anh thanh niên, cô gái áo dài. Không ai thở ra khói. Không một làn nào. (Đ10)
- *(không lời, 0.8 s)* (Đ10)
- **LAO**: Có đứa sống. Trốn vé. (Đ03)
- **MN**: Người sống mới có khói. Người chết thì đỡ tốn tiền sưởi. (Đ10)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 — TRỌN: Trốn vé mà sống (9:16, 36 s)

- **MN**: Đò âm phát hiện có người sống lên nhầm chuyến. Ông lão sắp đưa nó qua bờ bên kia. (Đ03 → Đ09) · pop “MA ĐƯA ĐÒ”
- **LONG**: Cho cháu xuống! Cháu không đi! Cháu còn sống! (Đ05)
- **LAO**: Nước này không bơi được. Ngồi im. Chưa đến lúc thì về. (Đ03)
- **MN**: Ông lão quay đò, thả Long lại bến bên này. Cả đời trốn vé; lần này trốn được là sống. (Đ08)
- **MN**: Ông bỏ chuyến cuối, Long bỏ luôn nghề review cửa cấm. (Đ08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 — TRỌN: Bên ngoài có người thu (9:16, 35 s)

- **MN**: Long vừa ra khỏi hang, chốt kiểm lâm đã chờ sẵn. (Đ11 → Đ12) · pop “MA ĐƯA ĐÒ”
- **KL**: Phạt. Cộng vé. Cộng tiền cứu hộ năm ngoái chưa đóng. Bên trong không ai thu vé thì bên ngoài có người thu. (Đ12)
- **LONG**: Em đóng hết. Mua luôn vé tham quan. Có hóa đơn không chị? (Đ05)
- *(không lời, 0.8 s)* (Đ12)
- **MN**: Sống sót một chuyến đò, lãnh nguyên một xấp biên lai. Tự do có giá, hóa đơn có dấu đỏ. (Đ12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S34)

### SH7 — TRAILER: Chuyến cuối (9:16, 35 s)

- **MN**: Long lên nhầm đò âm. Giữa sông, hơi thở nó bốc khói trắng. Những người khác chẳng ai thở ra khói. (Đ09 → Đ10) · pop “MA ĐƯA ĐÒ”
- **LAO**: Có đứa sống. Trốn vé. (Đ03)
- **MN**: Ông lão nói chuyến đò sắp qua bờ. Long còn một cơ hội để về. (Đ03 → Đ05)
- **LONG**: Chú quay đò đi. Chú muốn gì cháu cũng— (Đ05)
- *(không lời, 0.8 s)* (Đ03)
- **MN**: Ông lão sẽ chọn gì? Chuyến cuối đang đến gần. Bản đầy đủ, link dưới. (S34)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | v3 dùng |
|---|---|---|
| Đ01 | Sông ngầm trong hang tối, vệt đèn đội đầu quét trên mặt nước đen, thạch nhũ | ✓ |
| Đ02 | Trong vệt đèn, một chiếc đò gỗ cũ trôi ra từ bóng tối | ✓ |
| Đ03 | Ông lão lái đò: nón lá rách, áo tơi, mái chèo gỗ, gầy, mắt trũng; viền mờ | ✓ |
| Đ04 | Khung video kênh của Long: trèo rào, cười với máy quay; bản sau mặt tiều tụy cầm vé tham quan | ✓ |
| Đ05 | Long cận: áo gió phản quang, đèn đội đầu, gậy quay; bản run níu mạn đò; bản cầm biên lai dài | ✓ |
| Đ06 | Ảnh kiểu báo: đội cứu hộ kéo dây ở cửa hang ngập, đèn pha | ✓ |
| Đ07 | Cửa hang nước lúc chạng vạng, biển cấm (trống chữ), dây chắn, Long chèo kayak lách qua | ✓ |
| Đ08 | Bến đá trong hang: chiếc đò gỗ, ông lão, vài hành khách ngồi im các thời khác nhau (bà cụ, thanh niên, cô gái áo dài), mỗi người cầm một tờ giấy vàng mã nhỏ có triện đỏ | ✓ |
| Đ09 | Giữa sông ngầm, đèn đội đầu rọi lên các hành khách ngồi im trên đò | ✓ |
| Đ10 | Cận mặt Long trong đèn, hơi thở bốc khói trắng; phía sau mặt người khác không có khói | ✓ |
| Đ11 | Rạng sáng cửa hang, sương, dòng nước cuốn kayak dạt ra, Long nằm bẹp trong kayak, chốt kiểm lâm nhỏ bên bờ | ✓ |
| Đ12 | Cô kiểm lâm cận ở chốt, máy in biên lai, tấm biên lai dài | ✓ |

## Lịch

- LONG: Thứ Năm 08/04 18:00 (+07).
- SH1: Thứ Năm 08/04 19:00 (+07).
- SH2: Thứ Sáu 09/04 11:30 (+07).
- SH3: Thứ Sáu 09/04 19:00 (+07).
- SH4: Thứ Bảy 10/04 11:30 (+07).
- SH5: Thứ Bảy 10/04 19:00 (+07).
- SH6: Chủ Nhật 11/04 11:30 (+07).
- SH7: Chủ Nhật 11/04 19:00 (+07).
