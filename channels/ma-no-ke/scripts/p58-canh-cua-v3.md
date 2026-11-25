# Dự án 58 — Hai cánh cửa "Khóa vân tay" (v3, 2026-11-24)

v3 đổi gì so với v2:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước **bảy giờ sáng mai**, thợ nhôm kính đến đục nốt khung gỗ lim cũ để thay khung thép đồng bộ; nếu khung bị đục, hồn hai cánh cửa lim năm mươi năm sẽ tan biến thành mùn cưa và bà mẹ già vĩnh viễn mất đi người mở cửa (cái giá đặt lên con ma, không hại mẹ già).
- **3 nấc leo thang chủ động**: (1) Cửa làm chập cảm ứng báo đỏ → Tuấn không sợ mà còn chốt lịch đục khung; (2) Đêm cuối, hai cánh cửa dùng linh lực xóa vân tay Tuấn, biến khóa chỉ nhận dấu tay mòn vẹt của mẹ; (3) Nước liều: hiện vân tay mờ trên kính, khóa tự mở cho mẹ vào rồi sập cửa nhốt Tuấn ngoài gió rét.
- **Điểm thấp nhất**: 11 giờ đêm, Tuấn đứng bấm khóa trong vô vọng giữa gió buốt, bàn phím liệt, chìa cơ đã vứt thùng rác, chính thức trở thành "người ngoài" trước cửa nhà mình.
- **Cú lật do nhân vật chọn và trả giá**: Hai cánh cửa dồn hết linh lực ép khóa thông minh nhận diện đúng "người trong nhà"; Tuấn phải trả giá bằng việc đứng đợi ngoài rét và cất tiếng xin mẹ mở cửa, sáng hôm sau phải tự tay khiêng đôi cửa lim ra lắp lại.
- **Chuẩn hóa khuôn v3**: LONG đạt 587 chữ lời thoại (chuẩn 560–600 chữ); đủ 5 Short TRỌN + 2 Short TRAILER theo đúng format.

---

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Khóa điện tử bốn chấm không liệu có thông minh hơn hai cánh cửa lim năm mươi năm gác giữ người trong nhà?
- **Đồng hồ + cái giá**: Trước bảy giờ sáng mai, thợ đến đục nốt cái khung gỗ lim cũ. Nếu trượt, hồn hai cánh cửa tan thành mùn cưa, mẹ già từ nay về muộn không còn ai mở cửa.
- **3 nấc leo thang**:
  1. *Nấc 1*: Hai cánh cửa làm chập cảm ứng báo đỏ liên tục → Thất bại: Tuấn tưởng khóa lỗi vặt, quyết định sáng mai cho đục luôn khung cũ để thay cả cụm.
  2. *Nấc 2*: Đêm cuối trước giờ đục khung, cửa đổi vai: xóa nhận diện Tuấn và vợ, chỉ nhận đúng vân tay mẹ → Tuấn đi nhậu về bấm liệt tay, khóa báo sai đỏ lòm.
  3. *Nấc 3 (nước liều)*: Hiện vân tay mòn vẹt sáng rực trên mặt kính máy quét, tự mở chốt đón bà mẹ đi chùa về rồi sập cửa khóa chặt Tuấn ở ngoài gió lạnh.
- **Điểm thấp nhất**: Tuấn say rượu đứng ngoài cửa lúc nửa đêm, bấm khóa vô tác dụng, nhận ra công nghệ bốn chấm không đã chính thức coi mình là kẻ lạ.
- **Cú lật**: Đổi vai — người mua khóa hiện đại để loại mẹ ra ngoài bị chính cái khóa nhốt ngoài; người chưa từng cài vân tay lại là người duy nhất mở được cửa.
- **Khoảnh khắc rợn duy nhất**: Mười một giờ đêm, Tuấn áp tay vào khóa đèn đỏ; ghé sát mặt kính thì thấy một dấu vân tay mờ nhăn nheo mòn vẹt hiện lên, rồi đèn xanh bật sáng, chốt nảy cạch, cửa tự hé mở vào khoảng tối không một bóng người.
- **Câu kết**: Tuấn khiêng đôi cửa lim lắp lại vào khung, cài vân tay mẹ trước tiên; hai cánh cửa cãi nhau vui vẻ; Ma Nó nhắc người xem coi chừng khóa nhà mình.

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TRAI | Cánh cửa trái (ông): gỗ lim sẫm, then cài, hay càu nhàu | C02, C06 | Thiền Tâm Đức | `atempo=1.0,asetrate=48000*0.93,aresample=48000,aecho=0.8:0.4:40:0.2` |
| PHAI | Cánh cửa phải (bà): gỗ lim bóng tay người, bênh mẹ | C02, C06 | Ngọc Huyền | `atempo=1.05,asetrate=48000*1.02,aresample=48000,aecho=0.8:0.4:40:0.2` |
| TUAN | Anh Tuấn: sơ mi công sở, say xỉn, chuộng công nghệ | C05, C08 | Adam bựa | `atempo=1.0,anull` |

```json voices
{
  "MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},
  "TRAI": {"preset": "Thiền Tâm Đức", "fx": "atempo=1.0,asetrate=48000*0.93,aresample=48000,aecho=0.8:0.4:40:0.2"},
  "PHAI": {"preset": "Ngọc Huyền", "fx": "atempo=1.05,asetrate=48000*1.02,aresample=48000,aecho=0.8:0.4:40:0.2"},
  "TUAN": {"preset": "Adam bựa", "fx": "atempo=1.0,anull"}
}
```

---

## LONG (587 chữ lời thoại, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | *(không lời, 2.0 s)* | "23:00" · "bíp bíp" đỏ · nhac tat |
| 0:02 | C01 | **TRAI**: Lần thứ ba rồi. | "bíp bíp" đỏ |
| 0:04 | C01 | **PHAI**: Ông im. Để nó tự nhìn. | mo coc · im |
| 0:07 | S01 → S26 | **MN**: Lại mò vào à? Khách hôm nay là hai cánh cửa lim. Năm mươi năm gác nhà, vừa bị đuổi ra kho. | "HAI CÁNH CỬA LIM" · coc · braam |
| 0:13 | S34 | **MN**: Thay bằng cái khóa thông minh bốn chấm không. | "KHÓA 4.0" |
| 0:16 | C02 | **TRAI**: Tôi cánh trái, bà này cánh phải. Ông chủ đóng chúng tôi năm bảy mươi bảy, gỗ lim đặc, nặng bằng hai con lợn tạ. | "LIM ĐẶC 1977" · go keo ket |
| 0:23 | C02 | **PHAI**: Bà chủ mở cửa mỗi sáng năm giờ. Năm mươi năm, chỗ tay bà vịn bóng như gương. | "50 NĂM" |
| 0:28 | C03 | **TRAI**: Thằng Tuấn lọt lòng qua cửa. Đi học về đập cửa. Lấy vợ rước dâu qua cửa. |  |
| 0:34 | S26 | **MN**: Cửa nhà có thần giữ. Năm mươi năm, ai là người trong nhà… cửa biết. | "CỬA BIẾT AI LÀ NGƯỜI TRONG NHÀ" |
| 0:39 | C04 | **PHAI**: Năm ngoái ông bố mất. Năm nay nó tháo cửa lim, thay cửa thép khóa vân tay. | khoan · bua |
| 0:45 | C05 | **TUAN**: Cài vân tay anh với vợ thôi. Mẹ lẫn, bấm sai lại rú còi. Chìa cơ vứt đi, thời này ai dùng chìa. | "bíp" xanh · chia roi thung rac |
| 0:52 | C06 | **TRAI**: Bọn tôi bị vứt vào kho. May cái khung gỗ lim nó giữ lại. Khung là xương. Hồn chúng tôi ở trong xương. | "KHUNG LÀ XƯƠNG" |
| 0:59 | C07 | **PHAI**: Cửa hiện đại nhưng vô tâm. Tuần ấy bà mẹ đi chùa về muộn ba lần, ba lần ngồi ghế đá chờ con xem xong bóng đá mới ra mở. | mo chua xa · gio dem |
| 1:07 | C06 | **TRAI**: Chiều nay nó gọi thợ. Bảy giờ sáng mai thợ đến đục nốt khung gỗ lim để thay khung thép. | "HẠN: 7:00 SÁNG MAI" · "ĐỤC KHUNG LIM" · tick |
| 1:13 | C02 | **PHAI**: Khung mất là hồn tan thành mùn cưa. Từ mai bà mẹ hết cửa vào nhà. | "HỒN TAN THÀNH MÙN CƯA" · bassdown |
| 1:18 | C05 | **TRAI**: Chập tối tôi làm chập cảm ứng, khóa đỏ lòm. Tưởng nó sợ mà lắp lại. | "bíp bíp" đỏ |
| 1:23 | C05 | **TUAN**: Khóa chập à? Mai đục khung thay cả cụm là êm! | "ĐỤC THAY CẢ CỤM" |
| 1:27 | C02 | **PHAI**: Nó thách ông đấy. Đêm nay là đêm cuối. Khóa nhận ngón tay à? Để tôi dạy nó biết thế nào là ngón tay. | "ĐÊM CUỐI" · whoosh |
| 1:34 | C08 | **MN**: Mười một giờ đêm. Anh Tuấn đi nhậu về, người nồng nặc men. Nó áp ngón tay vào khóa. | xe tat · nhac tat |
| 1:40 | C01 | *(không lời, 1.8 s)* | "bíp bíp" đỏ × 2 · nhac tat |
| 1:42 | C01 | **MN**: Đèn đỏ. Áp lại, vẫn đèn đỏ. Bàn phím số liệt ngắt. | "LIỆT PHÍM" · nhac tat |
| 1:46 | C01 | **MN**: Tuấn ghé sát mặt kính. Dưới đèn đường, trên mặt kính hiện mờ một dấu vân tay lạ. | nhac tat · tim dap |
| 1:52 | C01 | **MN**: Không phải của nó. Nhỏ xíu, chằng chịt nếp nhăn và mòn vẹt như tay người già. | "VÂN TAY MÒN VẸT" · im |
| 1:57 | C01 | *(không lời, 1.5 s)* | "BÍP" XANH · cach |
| 1:59 | C01 | **MN**: Đèn bật xanh. Chốt nảy cạch một cái, cửa từ từ mở. Bên trong tối om, không bóng người. | cua bat mo · gio lanh |
| 2:05 | C08 | **TUAN**: Ai đấy? Có ai ở nhà không? | vang |
| 2:08 | C01 | **PHAI**: Khóa tự mở đón bà mẹ đi chùa về. Còn thằng Tuấn bước vào thì cửa sập rầm. | "RẦM!" · ram · khoa chot |
| 2:14 | C05 | **TRAI**: Nó áp tay lại, đèn đỏ. Mật mã vô tác dụng. Chìa cơ nằm dưới bãi rác. | "VÔ TÁC DỤNG" · bip bip do |
| 2:19 | C08 | **TUAN**: Mẹ ơi! Mở cửa! | dap cua |
| 2:21 | C07 | **PHAI**: Năm mươi năm tay bà vịn khung gỗ. Khung nhớ từng nếp vân tay. Cái khóa thép này, giờ khung mới là chủ. | "KHUNG MỚI LÀ CHỦ" · "CHỈ NHẬN TAY MẸ" |
| 2:28 | C08 | **TUAN**: Mẹ ơi… mở cửa cho con… con lạnh quá. | gio dem · lac cach |
| 2:32 | C07 | **PHAI**: Bà lò dò ra mở. Mất đúng năm phút. Bằng thời gian bà ngồi run trên ghế đá đợi nó xem bóng đá. | dep le cham · "5 PHÚT" |
| 2:39 | C06 | **TRAI**: Đứng ngoài cửa nhà mình, thằng Tuấn mới hiểu cái ghế đá ngoài ngõ buốt thế nào. | "BUỐT TẬN XƯƠNG" |
| 2:44 | C06 | **MN**: Sáu giờ sáng, chưa đợi thợ đục khung, thằng Tuấn đã khiêng đôi cửa lim từ kho ra lắp lại. | bua · go keo ket |
| 2:50 | C09 | **TRAI**: Khóa vân tay vẫn gắn bên cạnh. Nhưng vân tay đầu tiên được cài… là ngón tay mòn vẹt của bà mẹ. | "bíp" xanh |
| 2:56 | C02 | **PHAI**: Thằng này biết điều đấy. Thôi đừng càu nhàu, gỗ lim ẩm là mốc. | coc |
| 2:59 | S33 | **MN**: Nhà mày dùng khóa gì? Cẩn thận tối về, cửa chỉ nhận vân tay mẹ mày thôi đấy. | rit dieu cay |
| 3:04 | S34 | **MN**: Tập sau: đại lý phân bón trộn đất sét bán cho nông dân. Mùa ấy… ông Thần Nông đi thăm đồng. | "TẬP SAU" · whoosh |
| 3:09 | S06 | **MN**: Bấm đăng ký đi. Khóa nhà tao nhận mọi loại ngón tay, trừ ngón tay quỵt. | "ĐĂNG KÝ" · coc |

---

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ hai cánh cửa lim. Năm mươi năm gác nhà, lần đầu bị đuổi ra kho. (C06) · pop "HỒ SƠ CỬA LIM"
- **TRAI**: Ông chủ đóng chúng tôi năm bảy mươi bảy, gỗ lim đặc, nặng bằng hai con lợn tạ. (C02) · pop "LIM ĐẶC 1977"
- **PHAI**: Thằng con lớn lên, tháo cửa lim, thay cửa thép khóa vân tay. (C04) · pop "CỬA THÉP 4.0"
- **TUAN**: Cài vân tay anh với vợ thôi. Mẹ già lẫn rồi, bấm sai lại rú còi. Chìa cơ vứt đi! (C05) · pop "CHÌA CƠ VỨT ĐI"
- **MN**: Khóa thông minh đọc được ngón tay, nhưng không đọc được lòng người. (S26) · pop "KHÔNG ĐỌC ĐƯỢC NGƯỜI"
- **TRAI**: Để rồi nửa đêm, chính nó phải quỳ ngoài cửa gọi mẹ ơi. (C08) · pop "QUỲ NGOÀI CỬA"
- *(không lời, 0.8 s)*
- **MN**: Chuyện đôi cửa lim dạy thằng con, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH2 (TRỌN)
- **TUAN**: Mở cửa! Khóa bị điên à? (C01) · pop "KHÓA BỊ ĐIÊN?"
- **MN**: Mười một giờ đêm, anh Tuấn đi nhậu về. Áp ngón tay vào khóa, đèn đỏ. (C08) · pop "23:00 · ĐÈN ĐỎ"
- **TRAI**: Nó áp lại ngón cái, vẫn đèn đỏ. Bàn phím số liệt ngắt. (C01) · pop "LIỆT PHÍM"
- **PHAI**: Thằng bé cúi sát mặt kính. Trên đó hiện mờ một dấu vân tay lạ. (C01) · pop "DẤU VÂN TAY LẠ"
- **MN**: Nhỏ xíu, chằng chịt nếp nhăn và mòn vẹt như tay bà già. (C01) · pop "MÒN VẸT"
- **PHAI**: Khóa bíp xanh, tự mở cửa. Nhưng bên trong không một bóng người. (C01) · pop "TỰ MỞ"
- *(không lời, 0.8 s)*
- **MN**: Dấu vân tay ấy của ai? Tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH3 (TRỌN)
- **PHAI**: Tuần ấy bà mẹ đi chùa về muộn ba lần. (C07) · pop "3 LẦN ĐI CHÙA"
- **PHAI**: Ba lần ngồi ghế đá ngoài cổng chờ con trai xem xong bóng đá mới ra mở. (C07) · pop "CHỜ XEM BÓNG ĐÁ"
- **TUAN**: Mẹ bấm sai khóa kêu ầm xóm, con không cài vân tay là vì tốt cho mẹ thôi! (C05) · pop "TỐT CHO MẸ?"
- **TRAI**: Nó bảo tốt cho mẹ, nhưng chìa cơ dự phòng thì ném thùng rác. (C05) · pop "NÉM THÙNG RÁC"
- **MN**: Cửa nhà có thần giữ. Năm mươi năm, ai là người trong nhà… cửa biết. (S26) · pop "CỬA BIẾT"
- **TRAI**: Đêm ấy khóa đổi vai, nhốt đúng thằng con ngoài rét đúng năm phút. (C08) · pop "NHỐT THẰNG CON"
- *(không lời, 0.8 s)*
- **MN**: Năm phút nếm mùi ghế đá, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH4 (TRỌN)
- **TRAI**: Người ta tháo chúng tôi vứt vào kho sau nhà. (C06) · pop "VỨT RA KHO"
- **PHAI**: Nhưng thằng con giữ lại cái khung gỗ lim. Khung là xương. Hồn chúng tôi ở trong xương. (C02) · pop "KHUNG LÀ XƯƠNG"
- **TRAI**: Chiều nay nó hẹn thợ, bảy giờ sáng mai đục nốt khung gỗ thay khung thép. (C06) · pop "7:00 SÁNG MAI ĐỤC"
- **PHAI**: Khung mất là hồn tan thành mùn cưa. Nên đêm nay, hai đứa tôi phải liều. (C02) · pop "ĐÊM NAY PHẢI LIỀU"
- **MN**: Một bên là khóa điện tử bốn chấm không, một bên là linh hồn đôi cửa lim năm mươi năm. (S26) · pop "4.0 VS LIM 50 NĂM"
- **TRAI**: Sáng ra, thằng con phải bò vào kho khiêng cửa lim ra lắp lại. (C06) · pop "KHIÊNG CỬA LẮP LẠI"
- *(không lời, 0.8 s)*
- **MN**: Cuộc chiến trong khung cửa, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH5 (TRỌN)
- **TUAN**: Thời này ai dùng chìa cơ nữa! Vân tay một chạm là xong! (C05) · pop "VÂN TAY 1 CHẠM"
- **MN**: Anh Tuấn thay cửa lim bằng cửa thép, tự hào công nghệ chống trộm đỉnh cao. (C04) · pop "CÔNG NGHỆ ĐỈNH CAO"
- **PHAI**: Công nghệ cao đến mức đêm về nhậu say, khóa nhận diện anh như thằng ăn trộm. (C08) · pop "NHƯ ĂN TRỘM"
- **TUAN**: Bíp bíp đỏ! Bàn phím liệt! Mẹ ơi ra mở cửa cho con! (C08) · pop "MẸ ƠI MỞ CỬA"
- **TRAI**: Năm mươi năm tay bà mẹ vịn khung gỗ. Khung nhớ nếp tay bà, chứ không nhớ cái mặt mày. (C09) · pop "KHUNG NHỚ TAY BÀ"
- **MN**: Công nghệ bốn chấm không quỳ gối trước hai cánh cửa lim. (S34) · pop "QUỲ GỐI"
- *(không lời, 0.8 s)*
- **MN**: Bài học nhớ đời của anh Tuấn, tao kể ở bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

### SH6 (TRAILER)
- **MN**: Mười một giờ đêm. Khóa vân tay báo lỗi, nhưng cửa bỗng tự bật mở. (C01) · pop "CỬA TỰ MỞ"
- **TRAI**: Lần thứ ba rồi. (C01) · pop "TRAI (CÁNH LIM TRÁI)"
- **PHAI**: Ông im. Để nó tự nhìn. (C01) · pop "PHAI (CÁNH LIM PHẢI)"
- **MN**: Thằng Tuấn ghé sát mặt kính. Trên đó hiện mờ một dấu vân tay lạ lùng. (C01) · pop "DẤU TAY LẠ"
- **MN**: Nhỏ xíu, nhăn nheo, mòn vẹt. Đèn xanh bật sáng, chốt khóa tự rút. (C01) · pop "ĐÈN XANH"
- **TUAN**: Ai đấy? Mẹ ở trong nhà à? (C08) · pop "AI ĐẤY?"
- **MN**: Bên trong tối om. Ai vừa mở khóa cửa? Bản đầy đủ, link dưới. (S26) · pop "LINK BẢN ĐẦY ĐỦ"

### SH7 (TRAILER)
- **MN**: Còn đúng tám tiếng nữa là bảy giờ sáng. (C06) · pop "CÒN ĐÚNG 8 TIẾNG"
- **TRAI**: Bảy giờ sáng mai, thợ sẽ đến đục nốt cái khung gỗ lim này. (C06) · pop "TRAI (CÁNH LIM TRÁI)"
- **PHAI**: Khung mất là hồn tan thành mùn cưa, vĩnh viễn không ai giữ nhà cho bà cụ. (C02) · pop "PHAI (CÁNH LIM PHẢI)"
- **TRAI**: Đêm nay là cơ hội duy nhất. Khóa không nhận thì ép cho nó nhận. (C01) · pop "CƠ HỘI DUY NHẤT"
- **TUAN**: Đập cửa! Sao khóa lại báo đỏ thế này! Mở ra! (C08) · pop "ĐÈN ĐỎ LIÊN TỤC"
- **MN**: Cuộc đối đầu giữa linh hồn cửa lim và cái khóa thép thông minh. Ai sẽ thắng trước bảy giờ sáng? Bản đầy đủ, link dưới. (S34) · pop "LINK BẢN ĐẦY ĐỦ"

---

## Hình
Tái sử dụng: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9)
| Mã | Cảnh | Sử dụng trong v3 |
|---|---|---|
| C01 | Cận khóa vân tay trên cửa thép ban đêm, đèn đỏ; bản cực cận mặt kính có dấu vân tay mờ nhăn nheo; bản đèn xanh cửa hé | Có (v3 dùng chính) |
| C02 | Ảnh màu cũ: đôi cửa lim nhà ống, ông bố trẻ đứng bên, bà mẹ trẻ bế con; bản hai cánh cửa lim nhân hóa nhẹ (vân gỗ như nếp mặt) | Có (v3 dùng chính) |
| C03 | Ghép nhiều năm: cậu bé chạy qua cửa, thiếu niên trèo cửa, chú rể rước dâu qua cửa | Có (v3 dùng chính) |
| C04 | Thợ tháo đôi cửa lim, lắp cửa thép khóa vân tay vào khung gỗ cũ | Có (v3 dùng chính) |
| C05 | Anh Tuấn cận: sơ mi, cà vạt lỏng; bản cài vân tay, bản bấm đèn đỏ gắt, bản đứng ngoài gọi | Có (v3 dùng chính) |
| C06 | Kho sau nhà: đôi cửa lim dựng góc phủ bạt; bản anh Tuấn khiêng ra lắp lại | Có (v3 dùng chính) |
| C07 | Tối: bà Hiền (78 tuổi, áo bông, túi lễ chùa) ngồi ghế đá ngoài cổng nhìn vào nhà sáng đèn; bản lò dò ra mở cửa | Có (v3 dùng chính) |
| C08 | Đêm: anh Tuấn xuống xe máy trước cửa nhà, đèn đường, hơi men | Có (v3 dùng chính) |
| C09 | Cận bàn tay nhăn nheo của bà Hiền chạm khóa đèn xanh; bản vịn vào chỗ gỗ bóng trên cánh cửa lim | Có (v3 dùng chính) |

---

## Lịch
- **LONG (Video dài)**: Thứ Năm 10/06 lúc 18:00 (+07).
- **7 Short**:
  - SH1: Thứ Năm 10/06 lúc 19:00
  - SH2: Thứ Sáu 11/06 lúc 11:30
  - SH3: Thứ Sáu 11/06 lúc 19:00
  - SH4: Thứ Bảy 12/06 lúc 11:30
  - SH5: Thứ Bảy 12/06 lúc 19:00
  - SH6: Chủ Nhật 13/06 lúc 11:30
  - SH7: Chủ Nhật 13/06 lúc 19:00
- **Tập sau (P59 — Thần Nông "Tráo kho")**: Thứ Hai 14/06 lúc 18:00.
