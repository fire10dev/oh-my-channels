# Dự án 15 — Cô hồn chợ “Kiểm định miễn phí” (v3, 2026-11-24)

- Rút LONG còn khoảng 600 chữ, mỗi câu thoại không quá 20 chữ.
- Giữ hạn chót trước bình minh, ba lần thử đồ và điểm thấp nhất của Vượng.
- Giữ cú lật do anh Tư chọn lấy nhẫn, với cái giá là cả chợ giao hàng cho băng cô hồn kiểm định.
- Cắt gọn SH2, SH3 và SH5; thêm punchline riêng trước CTA ở mỗi short TRỌN.
- Giữ teaser tập sau vào thứ Năm và câu kết theo giọng Ma Nó.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Trước bình minh, Vượng có chứng minh được sạp mình bán đồ “ma thấy là chạy” hay không?
- **Đồng hồ / cái giá:** Trước khi chợ mở sáng hôm sau, Vượng phải tìm cách giữ hàng; nếu trượt, hàng bị lấy sạch, sạp mất uy tín và chiếc nhẫn “gia truyền” cũng thành món kiểm định cuối.
- **Ba nấc leo thang:** Anh Tư thử vòng trừ tà, chạm được → thử tỳ hưu và bùa in máy, vẫn chạm được → Vượng treo ba lá bùa xin trên chùa để giữ sạp, nhưng hàng vẫn biến mất.
- **Điểm thấp:** Vượng ngồi canh giữa đêm, nghe móc kẽo kẹt; từng chiếc vòng ngừng lắc rồi biến mất, còn ba lá bùa đứng im.
- **Cú lật:** Anh Tư chủ động lấy nhẫn của Vượng để cả chợ có ví dụ kiểm định cuối cùng. Cả dãy sạp giao hàng cho băng anh thử, biến họ thành dịch vụ “kiểm định không công”.
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
| 0:00 | C01 | **VUONG**: Vòng trừ tà! Ma thấy là chạy!<br>**TU**: Thấy rồi. Chưa chạy.<br>**CH**: Anh ơi, cái này đeo được! | Chợ ồn · rao loa · mõ cộc |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Sạp này bán đồ ma thấy là chạy. Có điều ma đang đứng ngay đây. | mõ cộc |
| 0:18 | C01 | **MN**: Thầy Vượng bán bùa, vòng, tỳ hưu. Cận Tết, khách xếp hàng nghe lời hứa bình an, lộc tới tận cửa.<br>**VUONG**: Đá núi thiêng, cầm vào ấm tay. Ba triệu tám. Rằm này thầy làm lễ, không lấy tiền.<br>**MN**: Cửa nhà khách mở đón lộc. Cửa sạp thầy mở đón lời quảng cáo. | rao loa |
| 0:38 | C03 → C04 | **MN**: Gầm sạp là vòng nhựa sơn, đá bột ép, mua theo cân. Ấm tay thật. Để cạnh bóng đèn mà.<br>**VUONG**: Ai mua hôm nay, tiền vào như nước!<br>**MN**: Nước rửa tay sau khi đếm tiền, khách tự lo. | “50K / KG” |
| 0:55 | S26 | **MN**: Thầy rao ma thấy là chạy. Thầy chưa gặp ma bao giờ. Thầy quen gặp khách hỏi nguồn gốc. | |
| 1:05 | C05 → C06 | **MN**: Chợ nào cũng có cô hồn. Sống bằng rau rụng, đồng xu lăn gầm sạp. Đêm nay băng anh Tư tính chuyện Tết.<br>**TU**: Chợ âm mở hội. Cả làng diện. Băng mình tay trắng, nhục. Đồ thầy quảng cáo dữ thế, chắc có phép thật.<br>**CH**: Bùa trừ tà, bọn em đụng vào là bỏng tay! | Quạt điện · gà xa |
| 1:29 | C06 | **TU**: Đồ có linh khí thì ma không chạm được. Thử cái vòng trước. Nhẹ tay nhé, ba triệu tám đấy.<br>**MN**: Luật do thầy Vượng tự đặt, in bảng lớn rồi bán vé cho khách đứng xem. | |
| 1:45 | C07 | **MN**: Anh Tư chạm vòng trừ tà. Không bỏng. Chạm tỳ hưu. Cũng không.<br>**TU**: Thử bùa trấn trạch nữa. Rỗng! Rỗng hết! Hốt!<br>**MN**: Bùa in máy mềm như tờ rơi; lời hứa cứng như bảng giá. | Lách cách |
| 2:02 | C08 → C03 | **MN**: Sáng ra, sạp trống trơn. Ổ khóa còn nguyên. Vượng trượt một đêm. Trước bình minh mai, thầy phải giữ được hàng hoặc mất sạp lẫn uy tín.<br>**VUONG**: Trộm! Tôi gọi công an! Khoan, đừng quay vào gầm sạp!<br>**BAN**: Camera không thấy ai. Chỉ thấy quạt nhà thầy tự quay. | Gà gáy · “TRƯỚC BÌNH MINH” |
| 2:25 | C10 | **MN**: Vượng lên chùa xin ba lá bùa thật, treo giữa sạp rồi ngủ lại canh. Thầy tăng cấp từ bán hàng sang kiểm hàng, không phụ cấp ca đêm. | |
| 2:39 | C05 → C11 | **MN**: Bốn giờ sáng. Tiếng hạt chuỗi lách cách chạy dọc mái tôn. Không ai gọi tên thầy. Không ai bước qua cửa.<br>**MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. | Hạt chuỗi nhiều lớp · nhạc tắt · móc kẽo kẹt |
| 2:58 | C11 | **MN**: Ba lá bùa thật không lay. Vượng ghì chiếc nhẫn, nghe từng móc trống dần. Ngoài kia, tiếng đếm vẫn tiếp tục.<br>**MN**: Sáng ra, chỉ còn ba lá bùa. Thầy nhìn sạp trống, rồi nhìn nhẫn đỏ như món hàng cuối cùng. | Im 2 s |
| 3:20 | C09 → C12 | **BAN**: Thứ gì mất là đồ giả à? Thứ gì ở lại thì thầy bán lại lần nữa?<br>**MN**: Cả dãy đem trầm, gỗ sét đánh, gương bát quái, nhang ra qua đêm. Còn thì thật. Mất thì thôi đừng rao nữa.<br>**TU**: Kiểm định miễn phí cho cả chợ. Anh nhận hàng, bọn em nhận trách nhiệm. | “CÒN = THẬT · MẤT = GIẢ” |
| 3:43 | C13 → C14 | **MN**: Vượng nhập lô nào, mất lô ấy. Sạp dán giấy sang nhượng. Thầy vẫn khẳng định đồ có linh khí; linh khí chỉ thích đi theo khách hơn ở lại với chủ.<br>**MN**: Sáng cuối cùng, chiếc nhẫn ba đời gia truyền cũng biến mất. Vượng sờ ngón tay trần, lần đầu không có giá để rao.<br>**TU**: Anh lấy đấy. Anh chọn món cuối cùng để kiểm định, biết sáng mai cả chợ sẽ giao hàng cho bọn anh thử. Tết này băng anh có việc rồi: miễn phí, khách tự chịu trách nhiệm. | Nhạc Tết rè |
| 4:13 | S33 → S34 | **MN**: Muốn biết đồ nhà mày thật hay giả? Để ngoài chợ một đêm. Còn thì mừng. Mất thì… đỡ phải đeo. | |
| 4:23 | S26 | **MN**: Tập sau: tài xế xe công nghệ chạy đêm săn thưởng Tết. Khách che ô đen, gọi cuốc chín trăm chín mươi chín nghìn. Và có mã giảm giá. | “TẬP SAU” · whoosh |
| 4:38 | S06 | **MN**: Bấm đăng ký đi. Đăng ký thật, không phải đăng ký bột ép. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Ma thấy là chạy? (9:16)

- **VUONG**: Vòng trừ tà! Ma thấy là chạy! (C01)
- **TU**: Thấy rồi. Chưa chạy. (C02) · pop “ANH TƯ”
- **CH**: Anh ơi, cái này đeo được! (C02)
- **MN**: Sạp thầy rao ma thấy là chạy, bọn anh Tư vẫn đứng chọn vòng theo màu. Hỏi món nào xịn nhất, ông chủ bảo món đắt nhất. (C01)
- **MN**: Ma nghe xong gật gù: không có phép thì phải có giá. (C02)
- **MN**: Khách âm chọn mẫu nhanh hơn khách dương trả tiền. (C01)
- *(không lời, 0.8 s)* (C02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Ấm tay vì bóng đèn (9:16)

- **VUONG**: Đá núi thiêng, cầm vào ấm tay. Ba triệu tám. (C03)
- **MN**: Gầm sạp là vòng nhựa sơn, đá bột ép, mua theo cân. Ấm tay thật. Để cạnh bóng đèn mà. (C04)
- **MN**: Thiếu tem “linh khí”, chắc nhà in chưa kịp nhận đơn. (C04)
- **TU**: Anh sờ thử, mềm như nhựa, giá cứng như đá. Bóng đèn làm phép tốt hơn thầy: bật lên là hàng nóng, tắt đi thì hết linh nghiệm. (C03)
- **MN**: Đèn bàn không thu phí làm lễ. (C04)
- *(không lời, 0.8 s)* (C04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Băng cô hồn họp Tết (9:16)

- **TU**: Chợ âm mở hội. Cả làng diện. Băng mình tay trắng, nhục. Đồ thầy quảng cáo dữ thế, chắc có phép thật. (C06) · pop “ANH TƯ”
- **CH**: Bùa trừ tà, bọn em đụng vào là bỏng tay! (C06)
- **TU**: Thử cái vòng trước. Nhẹ tay nhé, ba triệu tám đấy. (C06)
- **MN**: Luật là ma không chạm được đồ có linh khí. Luật do thầy Vượng tự đặt, in bảng lớn rồi bán vé xem. (S26)
- **TU**: Anh chạm vòng. Không bỏng. Chạm tỳ hưu. Cũng không. Tay nguyên, quảng cáo sứt mẻ. (C07)
- **MN**: Bùa trừ tà chưa trừ được kiểm định. (C06)
- *(không lời, 0.8 s)* (C06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Ba lá bùa không lay (9:16)

- **MN**: Bốn giờ sáng. Chợ tối có tiếng hạt chuỗi lách cách, như trăm người cùng lần. (C05)
- **MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. (C11)
- **MN**: Ba lá bùa thật ở giữa không lay chút nào. Tay Vượng ghì chiếc nhẫn đỏ; từng chiếc móc trống dần mà thầy vẫn ngồi im. (C11)
- **MN**: Ban sáng thầy sẽ kiểm hàng, kiểm sổ, rồi kiểm tra xem còn gì để sang nhượng. Một đêm làm ca trưởng mà mất sạch cả vốn lẫn niềm tin; ít nhất ba lá bùa vẫn không xin nghỉ. (C10)
- **MN**: Ca đêm này không có lương, chỉ có móc trống. (C11)
- *(không lời, 0.8 s)* (C11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Kiểm định miễn phí (9:16)

- **MN**: Cả dãy đem trầm, gỗ sét đánh, gương bát quái, nhang ra qua đêm. Còn thì thật. Mất thì thôi đừng rao nữa. (C12)
- **TU**: Kiểm định miễn phí cho cả chợ. Anh nhận hàng, bọn em nhận trách nhiệm. Dậy sớm xem thứ gì còn. (C06)
- **MN**: Dịch vụ tận tâm: khách không cần trả, hàng cũng chẳng cần về. (C12)
- **MN**: Phí kiểm định là món hàng khách quý nhất. (C06)
- *(không lời, 0.8 s)* (C12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Nhẫn gia truyền (9:16)

- **MN**: Sáng cuối cùng, chiếc nhẫn ba đời gia truyền cũng biến mất. Vượng sờ ngón tay trần, lần đầu không có giá để rao. (C03b)
- **TU**: Anh lấy đấy. Cho cả chợ biết hàng thầy thật tới đâu. Anh chọn món cuối cùng để kiểm định, biết sáng mai cả chợ sẽ giao hàng cho bọn anh thử. (C14) · pop “ANH TƯ”
- **MN**: Nhưng nếu nhẫn là hàng giả, sao anh Tư lại chọn đúng món thầy quý nhất? Sáng mai, ai sẽ phải kiểm định ai? (C03b)
- *(cắt trước đáp án)*

### SH7 — TRAILER · Móc trống dần (9:16)

- **MN**: Bốn giờ sáng. Chợ tối có tiếng hạt chuỗi lách cách, như trăm người cùng lần. (C05)
- **MN**: Đèn pin bật. Vòng trên móc tự đung đưa. Cái nào ngừng lắc, móc ấy trống. (C11)
- **MN**: Vượng ngồi giữa sạp. Ba lá bùa thật không lay. Móc ngoài cùng vừa trống. Tiếng đếm dừng ngay sau lưng thầy. Đèn pin chỉ rọi vào chiếc nhẫn đỏ. Tay thầy siết chặt, tiếng đếm ngoài kia vẫn chưa dừng. (C11)
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
