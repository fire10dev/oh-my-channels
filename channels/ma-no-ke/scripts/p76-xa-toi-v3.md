# Dự án 76 — Xá tội vong nhân "Ngồi thay một đêm" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá**: hạn chót trước tiếng gà gáy rạng sáng ngày Rằm (đúng 10 tiếng mở ngục); luật ngục âm ty "buồng giam không được để trống" — vong muốn ra ngoài phải có kẻ nợ mình ngồi thay, nếu không mất lượt xá tội, mang án oan vĩnh viễn; kẻ thủ ác chịu một đêm ngục đổi một năm tù oan.
- **Cold open giấu đáp án**: chỉ có tiếng ghế kéo lê và tiếng gắt dọn ghế của Toản, không giải thích vội lệ âm phủ hay xà lim đá.
- **Bỏ câu Ma Nó báo trước cú lật**: Ma Nó chỉ dẫn chuyện châm biếm, không mớm trước bí mật chiếc ghế hay điều khoản thế mạng.
- **3 nấc leo thang chủ động**: (1) Bình hiện về đòi Toản giao hồ sơ để xóa nợ → Toản cậy tiền đốt vàng mã xua đuổi; (2) Bình làm đèn chớp dọa án phạt → Toản thách thức cậy tiền đè chết ma đói; (3) Điểm thấp nhất lúc 1h sáng ở nhà vợ con nghèo, Bình kích hoạt quy chế "kẻ ăn lộc oan tự nguyện thế mạng".
- **Cú lật do Toản CHỌN và TRẢ GIÁ**: Toản ngạo mạn giật ghế đầu mâm để độc chiếm tài lộc → tự mình kích hoạt điều khoản thế mạng, rơi vào ngục đá đếm 2.500 vạch ngày, sợ hãi trước tờ lịch năm sau mà tự nguyện đi đầu thú.
- **Hình ảnh**: giảm ảnh mới xuống 12 ảnh (bỏ X04, dùng X03 và X08).

## Xương sống kịch tính
- **Câu hỏi kịch tính trung tâm**: Làm sao một kế toán đã chết đòi lại được bảy năm tù oan từ kẻ biển thủ quyền thế, trước khi tiếng gà gáy khép lại cửa ngục đêm Rằm?
- **Đồng hồ + cái giá**: Từ chạng vạng (19:00) đến tiếng gà gáy đầu tiên (5:00). Cửa ngục khép lại, vong mất cơ hội minh oan vĩnh viễn; kẻ thủ ác phải trả nợ bằng bảy đêm Rằm ngồi ngục đá buốt xương (1 đêm = 1 năm).
- **3 nấc leo thang**:
  1. *Nấc 1*: Bình hiện về ở mâm cúng 19:00 đòi Toản nộp hồ sơ thật → Toản ném tiền vàng mã xua đuổi.
  2. *Nấc 2*: 23:00 Bình làm đèn chớp, gió lốc dọa án phạt âm ty → Toản ngạo mạn bảo tiền trần gian đè bẹp ma đói.
  3. *Nấc 3 (nước liều)*: 02:00 Bình dùng luật ngục gài bẫy hoán đổi qua ghế cúng oan → Toản tham lam nhảy vào ghế độc chiếm lộc, tự nhận thế mạng.
- **Điểm thấp nhất**: 01:00 sáng, Bình nhìn về gian nhà lá rách nát, vợ con vẫn mang tiếng "nhà có kẻ tham ô", gà sắp gáy mà Toản vẫn nhởn nhơ.
- **Cú lật (ai chọn gì, trả giá gì)**: Toản chọn ngồi ghế đầu mâm để ăn cỗ và giữ biệt thự → kích hoạt điều khoản thế mạng, rơi xuống buồng giam đá lạnh cắt da thịt; sáng ra thấy tờ lịch khoanh đỏ năm sau liền sợ hãi tự chọn đi đầu thú.
- **Khoảnh khắc rợn duy nhất**: Đôi đũa vừa chạm môi, đèn chùm phụt tắt cái rắc; Toản mở mắt thấy mình ngồi trong buồng đá ướt lạnh, tay sờ phải 2.500 vạch cào tay và chữ "Bình".
- **Câu kết**: Nhả căng trào phúng: dân nhà giàu quen máy lạnh hai mươi sáu độ, xuống hầm đá chịu rét kém thật.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TOAN | Ông Toản, giám đốc biển thủ | X01, X03, X11, X13 | Adam bựa | `atempo=1.02` |
| BINH | Anh Bình, vong kế toán | X03, X07, X08, X10 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2` |
| VO | Chị Hoa, vợ anh Bình | X05, X06 | Ngọc Huyền | `atempo=1.0,anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "TOAN": {"preset": "Adam bựa", "fx": "atempo=1.02"}, "BINH": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2"}, "VO": {"preset": "Ngọc Huyền", "fx": "atempo=1.0,anull"}}
```

## LONG (580 chữ lời thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | X01 | *(không lời, 2.4 s)* | "RẰM THÁNG BẢY" · gió rít · bát đũa va |
| 0:02 | X01 | **TOAN**: Cúng xong rồi, dọn cái ghế đầu mâm đi. Nhà có ai đâu mà bày. | batdua |
| 0:06 | X02 | **BINH**: Ghế đấy… là của tôi mà giám đốc. | "GHẾ ĐẦU MÂM" · ghekeo · coc |
| 0:09 | S01 | **MN**: Lại mò vào à? Hôm nay Rằm tháng Bảy, xá tội vong nhân. Âm phủ mở cửa ngục thả người về thăm nhà. | "XÁ TỘI VONG NHÂN" · braam |
| 0:15 | S26 | **MN**: Nhưng có một ông kế toán… về để đòi lại bảy năm tù. | "ĐÒI 7 NĂM TÙ" · bassdown |
| 0:18 | X03 | **MN**: Mười năm trước, công ty thụt két ba mươi tỷ. Giám đốc Toản ký khống, đẩy hết án cho kế toán Bình. | "THỤT KÉT 30 TỶ" · giayto |
| 0:24 | X03 | **TOAN**: Chú nhận thay anh vụ này. Vợ con chú ở ngoài, tao lo hết. | hop |
| 0:29 | X05 | **MN**: Anh Bình đi tù bảy năm, ra tù ốm mất. Vợ con mang tiếng nhà có kẻ tham ô, đi đâu cũng cúi đầu. Còn ông Toản lên tổng giám đốc, xây biệt phủ. | "7 NĂM TÙ OAN" · tiengkhoc |
| 0:39 | X06 | **VO**: Bảy năm trời anh ấy viết đơn kêu oan. Không ai mở ra đọc. | nhactat |
| 0:45 | X07 | **MN**: Đêm Rằm tháng Bảy, âm phủ mở cửa ngục đúng mười tiếng. Từ chạng vạng đến tiếng gà gáy. | "HẠN: 10 TIẾNG" · cuasat · gio |
| 0:52 | X08 | **BINH**: Luật ngục âm ty: buồng giam không được để trống. Tôi muốn ra ngoài một đêm, phải có kẻ nợ tôi vào ngồi thay. | "LUẬT: BUỒNG KHÔNG ĐƯỢC TRỐNG" · xichsat |
| 1:00 | X01 | **MN**: Bảy giờ tối. Mâm cúng nhà ông Toản ê hề sơn hào hải vị. Anh Bình hiện về kéo ghế đầu mâm. | "19:00 · MÂM CÚNG" · ghekeo |
| 1:07 | X01 | **BINH**: Anh Toản. Nộp tập hồ sơ thật cho công an, trả lại tên cho tôi. Tôi xóa nợ. | "TRẢ LẠI TÊN" |
| 1:13 | X01 | **TOAN**: Mày chết mười năm rồi! Bằng chứng tao đốt sạch. Tiền vàng tao cúng cả đống, cút về dưới mà tiêu! | "ĐỐT SẠCH" · lua |
| 1:20 | X01 | **MN**: Mười một giờ đêm. Anh Bình làm đèn chùm chớp tắt, gió lạnh thốc bay vàng mã. Nhưng ông Toản vẫn trơ tráo cười khẩy. | "23:00" · denchop · giolanh |
| 1:28 | X01 | **TOAN**: Trần sao âm vậy! Tiền tao đè chết người sống, sợ gì con ma đói như mày! | cuoikhey |
| 1:35 | X05 | **MN**: Một giờ sáng. Ở gian nhà dột nát, mâm cơm cúng của chị Hoa chỉ có đĩa rau luộc và bát cơm vơi. | "1:00 SÁNG" · nhactat |
| 1:42 | X06 | **VO**: Mười năm rồi… ra đường người ta vẫn bảo hai đứa nhỏ là con thằng tù. | nghennghao |
| 1:48 | X08 | **BINH**: Còn bốn tiếng nữa gà gáy. Cửa ngục khép lại, tôi mang án oan muôn kiếp. | "CÒN 4 TIẾNG" · tick · bassdown |
| 1:54 | B02 | **MN**: Không ai chịu nhận tội giùm. Thì dân kế toán… tự cân đối sổ sách. | "TỰ CÂN ĐỐI SỔ SÁCH" · coc |
| 2:00 | X08 | **BINH**: Kẻ nào ngồi vào ghế ăn lộc oan, kẻ đó tự nguyện thế mạng. | "THẾ MẠNG" · whoosh |
| 2:05 | X01 | **MN**: Hai giờ sáng. Ông Toản ngạo nghễ ngồi vào ghế đầu mâm, vung đũa gắp miếng thịt gà. | "2:00 SÁNG" · batdua |
| 2:11 | X01 | **TOAN**: Mày không ăn để tao xơi! Nhà này là của tao! | cuoilon |
| 2:15 | X09 | **MN**: Đôi đũa vừa chạm môi. Đèn chùm vụt tắt. | "RẮC!" · denoff · im |
| 2:18 | X10 | **MN**: Ông Toản mở mắt. Không còn đèn chùm. Bốn bề là tường đá lạnh buốt, ướt sũng. | "XÀ LIM ĐÁ" · nuocnho · lanhbuot |
| 2:24 | X11 | **TOAN**: Mở cửa! Bảo vệ đâu? Mở cửa cho tao! | "MỞ CỬA!" · dapcuasat |
| 2:28 | X10 | **MN**: Dưới ô cửa sắt, trên tường đá chi chít hai nghìn năm trăm vạch đếm ngày. Góc tường khắc sâu một chữ: Bình. | "2.500 VẠCH ĐẾM NGÀY" · caoda |
| 2:36 | X10 | **BINH**: Bảy năm tù oan lạnh thế này đấy anh Toản. Một đêm âm phủ đổi một năm trần gian. | "1 ĐÊM = 1 NĂM" · vangvong |
| 2:45 | X01 | **MN**: Năm giờ sáng. Tiếng gà gáy rộ. Ông Toản bật dậy trên bàn ăn nguội ngắt, tay vẫn cầm đũa, người ướt đẫm mồ hôi. | "5:00 SÁNG" · gagay · thohohhon |
| 2:52 | X12 | **MN**: Cạnh bát cơm có một tờ lịch Rằm tháng Bảy năm sau, khoanh đỏ. | "RẰM NĂM SAU · KHOANH ĐỎ" |
| 2:57 | X08 | **BINH**: Mới trả được một năm thôi. Còn sáu đêm Rằm nữa. | "CÒN 6 ĐÊM" · coc |
| 3:02 | X13 | **MN**: Bảy giờ sáng, ông giám đốc ôm tập hồ sơ gốc chạy vào đồn công an đầu thú. Người giàu quen điều hòa mát rượi, chịu rét kém thật. | "ĐẦU THÚ" · cuocdoi · ha |
| 3:11 | X06 | **VO**: Mười năm rồi… giờ con tôi mới được ngẩng đầu. | nucuoi |
| 3:16 | S33 | **MN**: Tập sau: một ổ lừa đảo gọi điện giả danh, dọa người già chuyển tiền. Tòa nhà ấy xưa là bưu điện. Có một cô tổng đài… vẫn nối máy. | "TẬP SAU" · whoosh |
| 3:23 | S06 | **MN**: Bấm đăng ký đi. Để tối nay tao xem dưới gầm giường mày… có ai đang chờ ngồi thay không. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **TOAN**: Cúng xong rồi, dọn cái ghế đầu mâm đi. Nhà có ai đâu mà bày. (X01) · pop "GHẾ THỪA ĐÊM RẰM"
- **BINH**: Ghế đấy… là của tôi mà giám đốc. (X02) · pop "VONG KẾ TOÁN"
- **MN**: Rằm tháng Bảy, âm phủ thả vong về thăm nhà. Người ta về ăn cỗ, ông này về đòi bảy năm tù oan. (S01)
- **TOAN**: Mày chết mười năm rồi! Tiền vàng tao cúng cả đống, cút về dưới mà tiêu! (X01) · pop "TIỀN VÀNG MÃ"
- **MN**: Vong không lấy tiền mã. Vong chỉ cần ông ngồi vào chiếc ghế đó. (S26)
- **MN**: Sáng hôm sau tỉnh dậy, cạnh bát cơm có tờ lịch năm sau khoanh đỏ. (X12) · pop "CÒN SÁU ĐÊM RẰM"
- *(lặng 0.8 s)*
- **MN**: Tại sao một giám đốc lại phải ngồi tù thay cho con ma? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN)
- **MN**: Hồ sơ luật âm ty: Đêm xá tội vong nhân. (S01) · pop "LUẬT XÁ TỘI"
- **BINH**: Luật ngục âm ty: buồng giam không được để trống. Tôi muốn ra ngoài một đêm, phải có kẻ nợ tôi vào ngồi thay. (X08) · pop "VONG KẾ TOÁN"
- **MN**: Anh kế toán đi tù oan bảy năm. Âm phủ tính lãi: một đêm ngục đổi một năm trần gian. (S26) · pop "1 ĐÊM = 1 NĂM"
- **TOAN**: Tao là giám đốc! Tiền tao đè chết người sống, sợ gì con ma đói! (X01)
- **MN**: Hai giờ sáng, ông giám đốc ngạo nghễ ngồi vào ghế ăn cỗ. Đúng một giây sau, rơi thẳng xuống buồng đá lạnh buốt. (X10) · pop "RƠI VÀO XÀ LIM"
- *(lặng 0.8 s)*
- **MN**: Người giàu chịu rét kém thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN)
- **MN**: Cách dân kế toán đòi nợ sau khi chết. (S01) · pop "KẾ TOÁN ĐÒI NỢ"
- **TOAN**: Bằng chứng tao đốt sạch rồi. Nhận tội thay tao là số mày mạt! (X03)
- **BINH**: Tôi chết rồi, nhưng sổ nợ âm ty thì chưa xóa. (X08) · pop "VONG KẾ TOÁN"
- **MN**: Đêm Rằm, kẻ biển thủ cúng mâm ba mươi triệu để đuổi tà. Vong kế toán hiện về kéo đúng cái ghế đầu mâm. (X01)
- **BINH**: Kẻ nào ngồi vào ghế ăn lộc oan, kẻ đó tự nguyện thế mạng. (X02) · pop "TỰ NGUYỆN THẾ MẠNG"
- **MN**: Giám đốc vung đũa ăn trọn miếng thịt gà. Thế là kích hoạt hợp đồng ngồi tù thay. (X10) · pop "HOÁN ĐỔI VỊ TRÍ"
- *(lặng 0.8 s)*
- **MN**: Kế toán tính sổ sách âm phủ gắt thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **MN**: Mở mắt trong xà lim đá giữa đêm Rằm tháng Bảy. (S01) · pop "XÀ LIM ĐÁ LẠNH"
- **TOAN**: Mở cửa! Bảo vệ đâu? Mở cửa cho tao! (X11)
- **MN**: Không có bảo vệ. Chỉ có tường đá buốt xương và hai nghìn năm trăm vạch đếm ngày cào bằng móng tay. (X10) · pop "2.500 VẠCH ĐẾM NGÀY"
- **BINH**: Bảy năm tù oan lạnh thế này đấy anh Toản. (X08) · pop "VONG KẾ TOÁN"
- **MN**: Một đêm ngục âm phủ dài bằng đúng bảy năm trần gian. Năm giờ sáng gà gáy, ông giám đốc chạy thục mạng đi đầu thú. (X13) · pop "TỰ NGUYỆN ĐẦU THÚ"
- *(lặng 0.8 s)*
- **MN**: Bản hợp đồng thế mạng đêm Rằm diễn ra ra sao? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN)
- **VO**: Bảy năm trời anh ấy viết đơn kêu oan. Không ai mở ra đọc. (X06) · pop "BẢY NĂM ĐƠN OAN"
- **MN**: Mười năm trước, giám đốc ăn ba mươi tỷ, đẩy kế toán đi tù rồi chết oan. (X03)
- **MN**: Vợ con mang tiếng nhà có kẻ tham ô, đi đâu cũng phải cúi đầu. (X05)
- **BINH**: Đêm nay Rằm tháng Bảy. Âm phủ mở cửa ngục đúng mười tiếng. (X07) · pop "VONG KẾ TOÁN"
- **MN**: Đúng mười tiếng đó, một bản án hoán đổi đã ép kẻ thủ ác phải tự tay mang tập hồ sơ thật ra đồn công an. (X13) · pop "ĐÒI LẠI DANH DỰ"
- *(lặng 0.8 s)*
- **MN**: Con ma kế toán đã lật kèo giám đốc như thế nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **MN**: Đêm Rằm tháng Bảy, nhà tổng giám đốc dọn mâm cúng đại tiệc nhưng thừa đúng một cái ghế. (X01) · pop "CÁI GHẾ ĐẦU MÂM"
- **TOAN**: Cúng xong rồi, dọn cái ghế đầu mâm đi! (X01)
- **BINH**: Ghế đấy… là của tôi mà giám đốc. (X02) · pop "VONG KẾ TOÁN"
- **MN**: Chiếc ghế gỗ tự kéo ra một gang tay. Đôi đũa trên mâm tự đặt ngay ngắn. (X09) · pop "ĐŨA TỰ ĐẶT"
- **TOAN**: Mày không ăn để tao xơi! Nhà này là của tao! (X01)
- **MN**: Đôi đũa vừa chạm môi, đèn chùm phụt tắt cái rắc! (X09) · pop "RẮC!"
- **MN**: Ông giám đốc mở mắt ra ở đâu? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **BINH**: Còn bốn tiếng nữa gà gáy. Cửa ngục khép lại, tôi mang án oan muôn kiếp. (X08) · pop "VONG KẾ TOÁN"
- **MN**: Hạn chót trước tiếng gà gáy. Không có người thế mạng vào buồng giam, vong kế toán sẽ bị xích lại vĩnh viễn. (X07) · pop "HẠN: TIẾNG GÀ GÁY"
- **TOAN**: Tiền tao đè chết người sống, sợ gì con ma đói như mày! (X01)
- **MN**: Đồng hồ điểm hai giờ sáng. Vong kế toán mỉm cười lật con bài cuối cùng. (B02)
- **BINH**: Kẻ nào ngồi vào ghế ăn lộc oan, kẻ đó tự nguyện thế mạng. (X02) · pop "BẪY THẾ MẠNG"
- **MN**: Cánh cửa xà lim đá đêm nay sẽ nhốt ai? Bản đầy đủ, link dưới. (S26)

## Hình
Tận dụng: B02 + ep01 S01/S06/S26/S33/S34 (Ma Nó).

### Ảnh mới: 12 ảnh (16:9)
| Mã | Cảnh | v3 dùng |
|---|---|---|
| X01 | Mâm cơm cúng Rằm tháng Bảy trong phòng ăn nhà to, đèn chùm, ghế đầu mâm trống; bản sáng ông Toản gục trên bàn, mâm nguội | Có |
| X02 | Cận cái ghế gỗ đầu mâm tự kéo ra một gang tay | Có |
| X03 | Văn phòng công ty mười năm trước: ông Toản đẩy tập hồ sơ về phía anh Bình | Có |
| X04 | Anh Bình cận: sơ mi cũ, kính cận, gầy, cầm tập hồ sơ ngơ ngác | Bỏ (dùng X03, X08) |
| X05 | Anh Bình bị dẫn đi ở cổng công ty, vợ con khóc; bản nhà chị Hoa mâm cơm đơn sơ | Có |
| X06 | Chị Hoa cận: áo cũ, mặt khắc khổ; bản cầm tờ quyết định minh oan | Có |
| X07 | Tranh màu ngả nâu: cửa ngục âm phủ mở, các vong ra từng hàng, đèn lồng đêm Rằm | Có |
| X08 | Anh Bình mờ đứng trong xà lim đá nhìn ô cửa sắt; bản mỉm cười | Có |
| X09 | Cận đôi đũa trên mâm tự đặt ngay ngắn trước ghế trống | Có |
| X10 | Xà lim đá lạnh, ô cửa sắt nhỏ, tường kín vạch khắc đếm ngày nhóm năm vạch | Có |
| X11 | Ông Toản cận trong xà lim đập cửa sắt, mặt hoảng | Có |
| X12 | Cận tờ lịch Rằm tháng Bảy năm sau khoanh đỏ đặt cạnh bát cơm | Có |
| X13 | Ông Toản đứng ở cổng đồn công an, ôm tập hồ sơ cũ | Có |

## Lịch
- **LONG**: Thứ Năm 12/08 18:00 (+07)
- **SH1**: Thứ Năm 12/08 19:00 (+07)
- **SH2**: Thứ Sáu 13/08 11:30 (+07)
- **SH3**: Thứ Sáu 13/08 19:00 (+07)
- **SH4**: Thứ Bảy 14/08 11:30 (+07)
- **SH5**: Thứ Bảy 14/08 19:00 (+07)
- **SH6**: Chủ Nhật 15/08 11:30 (+07)
- **SH7**: Chủ Nhật 15/08 19:00 (+07)
*(Tập sau P77 đăng Thứ Hai 16/08 18:00).*
