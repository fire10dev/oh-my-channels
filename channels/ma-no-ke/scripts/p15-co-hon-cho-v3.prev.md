# Dự án 15 — Cô hồn chợ “Kiểm định miễn phí” (v3, 2026-11-24)

- Nêu rõ câu hỏi trung tâm và hạn chót: Vượng phải tìm cách giữ hàng trước bình minh, nếu không mất sạp lẫn uy tín.
- Cho băng cô hồn chủ động thử đồ ba lần, mỗi lần cho thấy hàng Vượng rao có linh khí vẫn bị chạm vào.
- Đưa Vượng xuống điểm thấp nhất khi thức canh mà hàng vẫn biến mất; ba lá bùa thật đứng yên giữa chợ tối.
- Để anh Tư tự chọn lấy chiếc nhẫn, chấp nhận cái giá là cả chợ dùng băng cô hồn kiểm định hàng.
- Mở rộng lời thoại LONG và các shorts theo nhịp dựng; thêm punchline trước CTA ở mỗi short TRỌN.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Trước bình minh, Vượng có chứng minh được sạp mình bán đồ “ma thấy là chạy” hay không?
- **Đồng hồ / cái giá:** Trước khi chợ mở sáng hôm sau, Vượng phải tìm cách giữ hàng; nếu trượt, hàng bị lấy sạch, sạp mất uy tín và chiếc nhẫn “gia truyền” cũng thành món kiểm định cuối.
- **Ba nấc leo thang:** Anh Tư thử vòng trừ tà, chạm được → thử tỳ hưu và bùa in máy, vẫn chạm được → Vượng treo ba lá bùa xin trên chùa để giữ sạp, nhưng hàng vẫn biến mất.
- **Điểm thấp:** Vượng ngồi canh giữa đêm, nghe móc kẽo kẹt; từng chiếc vòng ngừng lắc rồi biến mất, còn ba lá bùa đứng im.
- **Cú lật:** Anh Tư chủ động lấy nhẫn của Vượng để cả chợ có ví dụ kiểm định cuối cùng. Anh Tư trả giá khi cả dãy sạp sáng hôm sau đem hàng ra cho cô hồn thử, biến băng mình thành dịch vụ “kiểm định không công”.
- **Khoảnh khắc rợn:** Bốn giờ sáng, tiếng hạt chuỗi lách cách vang khắp chợ tối; vòng trên móc tự đung đưa, móc nào ngừng lắc thì trống, ba lá bùa thật không lay.
- **Câu kết:** “Đăng ký thật, không phải đăng ký bột ép.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| VUONG | Thầy Vượng, áo the nâu ngoài áo phông, chuỗi hạt to, nhẫn đá đỏ | C01, C03, C08, C10, C13 | Thiền Tâm Đức | `atempo=1.05` |
| TU | Anh Tư Chợ, áo ba lỗ, khăn vắt vai, dép lê, mờ như hơi nước, láu cá, xưng “anh” | C02, C06, C07, C14 | Adam bựa | `aecho=0.8:0.5:40:0.25` |
| CH | Đàn em cô hồn đồng thanh | C02, C06 | Trúc Ly | `aecho=0.8:0.5:40:0.25` |
| BAN | Chị bán rau sạp bên | C09 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"VUONG":{"preset":"Thiền Tâm Đức","fx":"atempo=1.05"},"TU":{"preset":"Adam bựa","fx":"aecho=0.8:0.5:40:0.25"},"CH":{"preset":"Trúc Ly","fx":"aecho=0.8:0.5:40:0.25"},"BAN":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | **VUONG**: Vòng trừ tà! Ma thấy là chạy! | Chợ ồn · rao loa |
| 0:04 | C02 | **TU**: Thấy rồi. Chưa chạy. | |
| 0:07 | C02 | **CH**: Anh ơi, cái này đeo được! | mõ cộc |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Sạp này bán đồ ma thấy là chạy. Có điều ma đang đứng ngay đây. | mõ cộc |
| 0:18 | C01 | **MN**: Thầy Vượng bán tỳ hưu hút lộc, thạch anh giữ vía, vòng trừ tà. Cận Tết, khách xếp hàng. Khách chọn món, thầy tặng lời khẳng định đi kèm: đeo vào là bình an, lộc tới tận cửa. Cửa nhà khách, chứ cửa sạp thầy thì đang mở toang cho lời quảng cáo chạy vào. | rao loa |
| 0:33 | C03 | **VUONG**: Đá núi thiêng, cầm vào ấm tay. Ba triệu tám. Rằm này thầy làm lễ, không lấy tiền. Ai mua hôm nay còn được thầy tặng một câu: “Tiền vào như nước.” Nước rửa tay sau khi đếm tiền, khách tự lo. | |
| 0:48 | C04 | **MN**: Gầm sạp là vòng nhựa sơn, đá bột ép, mua theo cân. Ấm tay thật. Để cạnh bóng đèn mà. Túi hàng còn nguyên tem cân ký, chỉ thiếu tem “linh khí”, chắc nhà in chưa kịp nhận đơn. | “50K / KG” |
| 1:02 | S26 | **MN**: Thầy rao ma thấy là chạy. Thầy chưa gặp ma bao giờ. Thầy quen gặp khách; khách hỏi nguồn gốc thì thầy nhìn sâu vào mắt họ, như thể câu trả lời đang nằm trong mắt người mua. | |
| 1:14 | C05 | **MN**: Chợ nào cũng có cô hồn. Sống bằng rau rụng, đồng xu lăn gầm sạp. Đêm nay băng anh Tư đang tính chuyện Tết. | Quạt điện · gà xa |
| 1:23 | C06 | **TU**: Tết này chợ âm mở hội. Cả làng diện. Băng mình tay trắng, nhục. Đi xin thì người sống bảo hết tiền lẻ. Mình chạm đồ của thầy Vượng xem sao; ông ấy quảng cáo dữ thế, chắc hàng phải có phép thật. | |
| 1:39 | C06 | **CH**: Bùa trừ tà, bọn em đụng vào là bỏng tay! Hay là bọn em đụng nhầm chỗ rẻ tiền? Có món nào được chạm mà không cần đăng ký trước không anh? | |
| 1:52 | S26 | **MN**: Đồ có linh khí thì ma không chạm được. Đấy là luật. Một luật do thầy Vượng tự đặt, in lên bảng lớn, rồi bán vé cho khách đứng xem. | |
| 2:03 | C06 | **TU**: Thử cái vòng trước. Đụng không được thì thôi. Nhẹ tay thôi nhé, hàng này ba triệu tám, nghe giá anh cũng hơi rén. | |
| 2:15 | C07 | **MN**: Anh Tư chạm vòng trừ tà. Không bỏng. Chạm tỳ hưu. Cũng không. Anh thử cả miếng bùa in máy; nó mềm như tờ rơi khuyến mãi, còn lời hứa thì cứng như bảng giá. | Lách cách |
| 2:30 | C07 → C06 | **TU**: Thử bùa trấn trạch nữa. Rỗng! Rỗng hết! Hốt! Hàng nhẹ thế này bọn mình bê cả sạp cũng không nặng vía. | |
| 2:42 | C08 | **MN**: Sáng ra, sạp trống trơn. Ổ khóa còn nguyên. Vượng trượt một đêm; trước bình minh mai phải tìm cách giữ hàng, hoặc mất cả sạp lẫn uy tín. Hạn chót rõ ràng: mặt trời lên, khách nhìn móc trống, còn thầy nhìn lại bảng quảng cáo. | Gà gáy · “TRƯỚC BÌNH MINH” |
| 2:58 | C03 | **VUONG**: Trộm! Trộm vào chợ! Tôi gọi công an! Nhưng khoan, đừng quay vào gầm sạp. Đấy là chỗ nhập hàng, không phải chỗ cần điều tra! | |
| 3:10 | C09 | **BAN**: Camera quay cả đêm, có ai đâu thầy. Chỉ thấy quạt nhà thầy tự quay. Chợ mất đồ mà quạt còn làm việc chăm, thế là nó chăm hơn người trông hàng rồi. | |
| 3:24 | C10 | **MN**: Vượng lên chùa xin ba lá bùa thật, treo giữa sạp. Đêm ấy, thầy ngủ lại canh. Thầy đã tăng cấp từ “thầy kiểm định” thành “thầy kiểm hàng”, không có phụ cấp ca đêm. | |
| 3:38 | C05 | **MN**: Bốn giờ sáng. Chợ tối có tiếng hạt chuỗi lách cách, như trăm người cùng lần. Tiếng ấy chạy dọc mái tôn, chậm rãi, đều đều. Không ai gọi tên thầy. Không ai bước qua cửa. | Hạt chuỗi nhiều lớp · nhạc tắt |
| 3:54 | C11 | **MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. Gió không đủ mạnh để lay sạp, chỉ đủ làm từng chiếc vòng nghiêng qua nghiêng lại như đang chờ đến lượt. | Móc kẽo kẹt |
| 4:10 | C11 | **MN**: Ba lá bùa thật ở giữa không lay chút nào. Vượng ngồi giữa sạp, nghe từng móc trống dần. Tay thầy ghì chặt chiếc nhẫn; ngoài kia hạt chuỗi vẫn đếm, từng tiếng một, đến lượt chiếc móc cuối cùng. | Im 2 s |
| 4:29 | C08 | **MN**: Sáng ra, chỉ còn ba lá bùa. Vượng không giữ nổi hàng, cũng chưa biết phải bán gì. Thầy nhìn ba lá giấy, nhìn sạp trống, rồi nhìn chiếc nhẫn đỏ như nhìn món hàng cuối cùng trong bảng kê. | |
| 4:44 | C09 | **BAN**: Ơ! Thế thứ gì mất là đồ giả à? Còn thứ gì ở lại thì thầy bán lại lần nữa? Chị hỏi để biết đường đứng xa khỏi quầy thôi. | |
| 4:57 | C12 | **MN**: Cả dãy đem trầm, gỗ sét đánh, gương bát quái, nhang trầm ra để qua đêm. Còn là thật. Mất thì thôi đừng rao nữa. Từ nay, hàng nào muốn nhận chứng nhận linh khí sẽ phải qua một đêm ở chợ; phí kiểm định là tự chấp nhận kết quả sáng hôm sau. | “CÒN = THẬT · MẤT = GIẢ” |
| 5:17 | C06 | **TU**: Kiểm định miễn phí cho cả chợ. Công xá thì tự lấy. Anh nhận hàng, bọn em nhận trách nhiệm. Chủ sạp khỏi phải thức, chỉ cần dậy sớm xem thứ gì còn. | |
| 5:31 | C13 | **MN**: Vượng nhập lô nào, mất lô ấy. Sạp dán giấy sang nhượng. Thầy vẫn khẳng định đồ nhà mình có linh khí; chỉ là linh khí hình như thích đi theo khách hơn ở lại với chủ. | |
| 5:48 | C03 → C03b | **MN**: Sáng cuối cùng, chiếc nhẫn ba đời gia truyền cũng biến mất. Vượng sờ ngón tay trần, lần đầu tiên không có giá nào để rao. | “GIA TRUYỀN?” |
| 6:00 | C14 | **TU**: Anh lấy đấy. Cho cả chợ biết hàng thầy thật tới đâu. Anh chọn món cuối cùng để kiểm định, biết sáng mai cả chợ sẽ giao hàng cho bọn anh thử. Tết này băng anh có việc rồi: làm miễn phí, khách tự chịu trách nhiệm. | Nhạc Tết rè |
| 6:18 | S33 → S34 | **MN**: Muốn biết đồ nhà mày thật hay giả? Để ngoài chợ một đêm. Còn thì mừng. Mất thì… đỡ phải đeo. | |
| 6:29 | S26 | **MN**: Thứ Năm: tài xế xe công nghệ chạy đêm săn thưởng Tết. Khách che ô đen, gọi cuốc chín trăm chín mươi chín nghìn. Và có mã giảm giá. | “TẬP SAU · THỨ NĂM” · whoosh |
| 6:41 | S06 | **MN**: Bấm đăng ký đi. Đăng ký thật, không phải đăng ký bột ép. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Ma thấy là chạy?

- **VUONG**: Vòng trừ tà! Ma thấy là chạy! (C01)
- **TU**: Thấy rồi. Chưa chạy. (C02) · pop “ANH TƯ”
- **CH**: Anh ơi, cái này đeo được! (C02)
- **MN**: Sạp thầy rao ma thấy là chạy, nhưng bọn anh Tư đứng sát quầy vẫn chọn được vòng theo màu. Hỏi cái nào xịn nhất, ông chủ bảo cái nào đắt nhất. Ma nghe xong gật gù: đúng là thứ gì không có phép thì phải có giá. (C01)
- **MN**: Hàng chưa kịp trừ tà đã được khách âm chọn mẫu. (C02)
- *(không lời, 0.8 s)* (C02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Ấm tay vì bóng đèn

- **VUONG**: Đá núi thiêng, cầm vào ấm tay. Ba triệu tám. (C03)
- **MN**: Gầm sạp là vòng nhựa sơn, đá bột ép, mua theo cân. Ấm tay thật. Để cạnh bóng đèn mà. Túi hàng còn nguyên tem cân ký, chỉ thiếu tem “linh khí”, chắc nhà in chưa kịp nhận đơn. (C04)
- **MN**: Thầy rao ma thấy là chạy. Thầy chưa gặp ma bao giờ. (S26)
- **TU**: Anh Tư sờ thử một chiếc, thấy ấm thật. Đá núi thiêng gì mà chạm vào mềm như nhựa, giá thì cứng như đá. Cái bóng đèn trên đầu còn làm phép tốt hơn thầy: bật lên là hàng nóng, tắt đi thì hết linh nghiệm. (C03)
- **MN**: Đèn bàn không thu phí làm lễ. (C04)
- *(không lời, 0.8 s)* (C04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Băng cô hồn họp Tết

- **TU**: Tết này chợ âm mở hội. Cả làng diện. Băng mình tay trắng, nhục. Đi xin thì người sống bảo hết tiền lẻ. Mình chạm đồ của thầy Vượng xem sao; ông ấy quảng cáo dữ thế, chắc hàng phải có phép thật. (C06) · pop “ANH TƯ”
- **CH**: Bùa trừ tà, bọn em đụng vào là bỏng tay! Hay là bọn em đụng nhầm chỗ rẻ tiền? (C06)
- **TU**: Thử cái vòng trước. Đụng không được thì thôi. (C06)
- **MN**: Đồ có linh khí thì ma không chạm được. Đấy là luật. Một luật do thầy Vượng tự đặt, in lên bảng lớn, rồi bán vé cho khách đứng xem. (S26)
- **TU**: Anh Tư chạm vòng trừ tà. Không bỏng. Chạm tỳ hưu. Cũng không. Bọn anh thử đến món cuối mà tay vẫn nguyên, chỉ có lời quảng cáo của thầy là hơi sứt mẻ. (C07)
- **MN**: Bùa trừ tà chưa trừ được kiểm định. (C06)
- *(không lời, 0.8 s)* (C06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Ba lá bùa không lay

- **MN**: Bốn giờ sáng. Chợ tối có tiếng hạt chuỗi lách cách, như trăm người cùng lần. (C05)
- **MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. (C11)
- **MN**: Ba lá bùa thật ở giữa không lay chút nào. Tay Vượng ghì chiếc nhẫn đỏ; từng chiếc móc trống dần mà thầy vẫn ngồi im. (C11)
- **MN**: Ban sáng thầy sẽ kiểm hàng, kiểm sổ, rồi kiểm tra xem còn gì để sang nhượng. Một đêm làm ca trưởng mà mất sạch cả vốn lẫn niềm tin; ít nhất ba lá bùa vẫn không xin nghỉ. (C10)
- **MN**: Ca đêm này không có lương, chỉ có móc trống. (C11)
- *(không lời, 0.8 s)* (C11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Kiểm định miễn phí

- **MN**: Cả dãy đem trầm, gỗ sét đánh, gương bát quái, nhang trầm ra để qua đêm. Còn là thật. Mất thì thôi đừng rao nữa. Từ nay, hàng nào muốn nhận chứng nhận linh khí sẽ phải qua một đêm ở chợ; phí kiểm định là tự chấp nhận kết quả sáng hôm sau. (C12)
- **TU**: Kiểm định miễn phí cho cả chợ. Công xá thì tự lấy. Anh nhận hàng, bọn em nhận trách nhiệm. Chủ sạp khỏi phải thức, chỉ cần dậy sớm xem thứ gì còn. (C06)
- **MN**: Dịch vụ tận tâm: khách không cần trả, hàng cũng chẳng cần về. (C12)
- **MN**: Miễn phí kiểm định, phụ thu bằng món hàng khách quý nhất. (C06)
- *(không lời, 0.8 s)* (C12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Nhẫn gia truyền

- **MN**: Sáng cuối cùng, chiếc nhẫn ba đời gia truyền cũng biến mất. Vượng sờ ngón tay trần, lần đầu tiên không có giá nào để rao. (C03b)
- **TU**: Anh lấy đấy. Cho cả chợ biết hàng thầy thật tới đâu. Anh chọn món cuối cùng để kiểm định, biết sáng mai cả chợ sẽ giao hàng cho bọn anh thử. Tết này băng anh có việc rồi: làm miễn phí, khách tự chịu trách nhiệm. (C14) · pop “ANH TƯ”
- **MN**: Nhưng nếu nhẫn là hàng giả, sao anh Tư lại chọn đúng món thầy quý nhất? Cả chợ đang chờ câu trả lời; sáng mai, ai sẽ phải kiểm định ai? (C03b)
- *(cắt trước đáp án)*

### SH7 — TRAILER · Móc trống dần

- **MN**: Bốn giờ sáng. Chợ tối có tiếng hạt chuỗi lách cách, như trăm người cùng lần. (C05)
- **MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. (C11)
- **MN**: Vượng ngồi giữa sạp. Ba lá bùa thật không lay. Móc ngoài cùng vừa trống. Trong tiếng lách cách, có một tiếng dừng ngay sau lưng thầy; thầy quay lại, nhưng đèn pin chỉ rọi đúng vào chiếc nhẫn đỏ. Tay thầy siết chặt, còn tiếng đếm ngoài kia vẫn chưa dừng. (C11)
- *(cắt trước đáp án)*

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới

| Mã | Cảnh | V3 dùng |
|---|---|---|
| C01 | Sạp bùa đá phong thủy sáng đèn vàng trong chợ đầu mối, tỳ hưu, quả cầu thạch anh, vòng treo móc; thầy Vượng áo the nâu ngoài áo phông, chuỗi hạt to, đang rao | Có |
| C02 | Ba bóng mờ như hơi nước, áo ba lỗ, dép lê, đứng sát sạp nhìn vòng đá, không ai trong chợ để ý | Có |
| C03 | Cận tay Vượng cân chuỗi hạt, nhẫn mặt đá đỏ to trên ngón áp út | Có |
| C03b | Cùng góc C03: tay Vượng trần, còn vệt da trắng hình chiếc nhẫn | Có |
| C04 | Gầm sạp: thùng các-tông mở, túi nilon đầy vòng đá rẻ tiền, nhãn giá viết tay để trống chữ | Có |
| C05 | Chợ đêm vắng, sạp phủ bạt xanh, đèn đường xa, vài bóng mờ ngồi vắt vẻo trên mái tôn | Có |
| C06 | Anh Tư áo ba lỗ, khăn vắt vai cùng 4–5 cô hồn ngồi họp quanh đống bạt, như băng trộm phim cũ | Có |
| C07 | Đêm, cận một ngón tay mờ chạm vào vòng đá trên móc | Có |
| C08 | Sáng sớm: sạp trống trơn, móc treo rỗng, Vượng đứng há mồm, ổ khóa còn nguyên | Có |
| C09 | Chị bán rau sạp bên, nón lá, rổ rau, nhìn sang tò mò | Có |
| C10 | Vượng treo ba lá bùa giấy vàng lên giữa sạp, mặt nghiêm | Có |
| C11 | Đèn pin rọi vào sạp đêm: hàng vòng đá trên móc đung đưa, vài móc đã trống; ba lá bùa vàng giữa đứng im | Có |
| C12 | Chợ chiều, dãy đồ thờ phong thủy: trầm hương, vòng gỗ, gương bát quái, bó nhang bày ra lối đi để qua đêm | Có |
| C13 | Sạp Vượng dán giấy sang nhượng để trống chữ, Vượng ngồi một mình trên ghế nhựa | Có |
| C14 | Chợ âm hội Tết: đèn lồng mờ, cô hồn đeo vòng đá, tỳ hưu, nhảy múa vui; anh Tư đeo kính râm và nhẫn đá đỏ | Có |

## Lịch

| Nội dung | Ngày giờ đăng (+07) |
|---|---|
| LONG | Thứ Hai 11/01 18:00 |
| SH1 | Thứ Hai 11/01 19:00 |
| SH2 | Thứ Ba 12/01 11:30 |
| SH3 | Thứ Ba 12/01 19:00 |
| SH4 | Thứ Tư 13/01 11:30 |
| SH5 | Thứ Tư 13/01 19:00 |
| SH6 | Thứ Năm 14/01 11:30 |
| SH7 | Thứ Năm 14/01 19:00 |
