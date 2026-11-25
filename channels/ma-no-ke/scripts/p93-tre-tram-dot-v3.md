# Dự án 93 — Cây tre trăm đốt "Thực tập chín mươi chín ngày" (v3, 2026-11-24)

- **Đồng hồ + cái giá rõ ràng**: Hạn chót 9:00 sáng ngày thứ một trăm (quỹ đầu tư rót vốn mười tỷ); nếu trượt hạn, hợp đồng bị hủy, công ty vỡ nợ, Khải dính chặt vào hàng ghế rết suốt đời làm trò cười cho cả ngành.
- **3 nấc leo thang chủ động của kẻ xấu (Khải)**: 1. Cho thợ cưa máy vào cắt khớp nối ghế (gãy 3 lưỡi thép) → 2. Kế toán chuyển khoản gộp tiền hỗ trợ và Khải đọc bừa tên (Bụt từ chối) → 3. Khải phải lội kho rác tìm hồ sơ cũ, thức trắng ba ngày đêm van xin từng người và trả đủ tiền công.
- **Cold open không lộ đáp án**: Hà quay lại lấy sạc lúc nửa đêm, chỉ nghe tiếng gió rặng tre qua điều hòa và thấy cái ghế đầu tiên từ từ tự xoay lại.
- **Điểm thấp nhất & Cú lật do nhân vật chọn và trả giá**: 8:55 sáng ngày thứ 100, đối tác bước vào sảnh nhưng ghế thứ 100 kẹt cứng vì mất hồ sơ; Hà xuất hiện, Khải phải trả đủ lương và dâng hợp đồng chính thức; Hà nhận lương xứng đáng nhưng từ chối ở lại ("Em đi chỗ khác"). Ghế tách ra, Khải đứng dậy nhưng trơ trọi, đối tác thấy văn phòng rỗng tuếch liền hủy hợp đồng.
- **Khuôn chuẩn v3**: Lời thoại LONG đạt đúng 592 chữ (chuẩn 560–600 chữ, ≈3:00); 5 short TRỌN + 2 short TRAILER đúng cấu trúc 9:16 có pop tên và nút chuyển link; khớp bảng preset giọng VieNeu chuẩn.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu giám đốc Bách Trúc có nhớ nổi một cái tên để gỡ hàng ghế một trăm đốt trước hạn chót ký hợp đồng sinh tử?
- **Đồng hồ / Cái giá**: 9:00 sáng ngày thứ một trăm (quỹ đầu tư rót vốn 10 tỷ). Trượt hạn: mất vốn, công ty phá sản, dính chặt hàng ghế rết suốt đời làm linh vật di động cho cả giới khởi nghiệp mỉa mai.
- **3 nấc leo thang**:
  1. Cắt cơ học: cho thợ vác cưa máy cắt khớp nối ghế → gãy 3 lưỡi cưa thép, khớp tre không xước một vệt.
  2. Lách luật: kế toán chuyển khoản gộp tiền hỗ trợ vào danh sách email cũ và Khải đọc bừa vài cái tên → Bụt từ chối ("Nợ đốt nào, trả đốt ấy", phải đọc đúng tên, trả đủ tiền trăm ngày, và cảm ơn).
  3. Hạ mình cùng cực: Khải lội kho rác tìm hồ sơ cũ, thức trắng ba ngày đêm gọi điện van xin từng người, trả đủ từng đồng để gỡ 99 ghế chạy đua với giờ G.
- **Điểm thấp nhất**: 8:55 sáng ngày thứ 100, đối tác đã bước vào sảnh, tiền túi cạn kiệt, nhưng sau mông Khải vẫn dính chặt ghế thứ 100. Hồ sơ rách mất dấu, Khải không nhớ nổi tên đứa vừa bị đuổi hôm qua, quỳ khóc bất lực.
- **Cú lật (ai chọn gì, trả giá gì)**: Khải chọn cúi đầu, trả đủ lương trăm ngày và dâng hợp đồng chính thức cho Hà để được giải thoát. Hà chọn tự do: nhận tiền công xứng đáng nhưng từ chối làm việc ("Em đi chỗ khác"). Ghế tách ra, Khải đứng dậy nhưng trơ trọi, đối tác thấy văn phòng rỗng tuếch liền quay xe hủy kèo.
- **Khoảnh khắc rợn duy nhất**: Nửa đêm, văn phòng tối om, một trăm cái ghế xoay nối lưng thành hàng dài kẽo kẹt rùng mình dưới luồng gió điều hòa như rặng tre giữa bão; cái ghế đầu tiên sát bàn giám đốc từ từ tự xoay 180 độ về phía người nhìn.
- **Câu kết**: Nhả căng trào phúng ("Đừng để tre nó nhớ mặt từng đứa"), teaser P94 (ông chồng hoa thuê ngồi bậc cửa ba ngày), kêu đăng ký kiểu Ma Nó ("Ở đây tao không bắt mày làm không công").

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34/S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| HA | Hà, thực tập sinh, người kể | T03 | Ngọc Huyền | `atempo=1.03` |
| KHAI | Anh Khải, giám đốc Bách Trúc | T04 | Adam bựa | `atempo=1.0` |
| BUT | Ông già chống gậy tre (Bụt) | T06 | Thiền Tâm Đức | `asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.3` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "HA": {"preset": "Ngọc Huyền", "fx": "atempo=1.03"}, "KHAI": {"preset": "Adam bựa", "fx": "atempo=1.0"}, "BUT": {"preset": "Thiền Tâm Đức", "fx": "asetrate=48000*0.92,aresample=48000,aecho=0.8:0.5:60:0.3"}}
```

## LONG (592 chữ, dựng ≈ 3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2.5 s)* | "BÁCH TRÚC SOLUTIONS · 0:00" · dieuhoa · keoket |
| 0:02 | T01 | **HA**: Nửa đêm. Tôi chỉ quay lại lấy cái sạc. | nhac tat |
| 0:05 | T02 | **HA**: Nhưng văn phòng… nghe như có tiếng tre gặp gió. | loccoc · keoket |
| 0:08 | T02 | *(không lời, 1.8 s)* | coc |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Mày đi thực tập chưa? Ai từng hứa "cố thêm chút là lên chính thức" không? | "CỐ THÊM CHÚT" · coc · braam |
| 0:16 | S26 | **MN**: Ngày xưa phú ông lật lọng. Ngày nay phú ông mặc polo, vẽ văn hóa gia đình. | "VĂN HÓA GIA ĐÌNH" |
| 0:21 | S34 | **MN**: Truyện thì vẫn thế. Nhưng cây tre lần này… mọc bánh xe. | "TRE MỌC BÁNH XE" · whoosh |
| 0:25 | T03 | **HA**: Tôi là thực tập sinh lứa thứ hai mươi của Bách Trúc Solutions. Không lương. | "LỨA 20 · KHÔNG LƯƠNG" · phim |
| 0:30 | T04 | **KHAI**: Ở đây là gia đình. Trải nghiệm mới quý, tiền bạc tính sau. Cố trăm ngày, anh ký chính thức. | "GIA ĐÌNH · TRẢI NGHIỆM" |
| 0:36 | T03 | **HA**: Tôi làm báo cáo, thiết kế, kiêm pha cà phê. Ngày chín mươi tám, tôi biết sự thật. | in · go |
| 0:42 | S26 | **MN**: Năm năm, một trăm đứa vào. Đúng ngày chín mươi chín đều nhận email: Chưa phù hợp. | "NGÀY 99 · EMAIL" · ping |
| 0:48 | T05 | **HA**: Ghế họ ngồi, anh Khải nhét kho cho lứa sau. Ghế tôi là của lứa thứ mười. | "100 CÁI GHẾ TRONG KHO" |
| 0:54 | T06 | **HA**: Ngày chín mươi chín, một ông già chống gậy tre đến xin thực tập. | "XIN THỰC TẬP" · ting |
| 1:00 | T04 | **KHAI**: Bên con tuyển người trẻ. Nể ông, mời ông ngồi thử ghế trải nghiệm. | cuoi |
| 1:05 | T06 | **HA**: Ông không ngồi. Ông gõ gậy tre xuống sàn ba cái. | gaygo3 |
| 1:09 | T06 | **BUT**: Khắc nhập. | "KHẮC NHẬP" · echo · im 1s |
| 1:12 | T03 | **HA**: Ông biến mất. Năm giờ chiều, tôi nhận email cho nghỉ việc. | ping |
| 1:16 | S26 | **MN**: Bụt hiện lên không phát quà. Bụt tới giao nghiệp. | "GIAO NGHIỆP" · coc |
| 1:20 | T01 | **HA**: Nửa đêm, tôi quay lại lấy sạc. Đèn tắt ngấm. | nhac tat · toi |
| 1:24 | T07 | **HA**: Từ kho ra bàn giám đốc, một trăm cái ghế xoay nối lưng thành một hàng dài dằng dặc. | "100 GHẾ NỐI LƯNG" · keoket |
| 1:30 | T02 | **HA**: Chỗ nối khít rịt như đốt tre. Không ốc vít. Không keo dán. | im |
| 1:35 | T07 | **HA**: Gió điều hòa thốc tới. Cả hàng ghế kẽo kẹt rùng mình như tre gặp bão. | gio · trekeoket |
| 1:40 | T07 | *(không lời, 2.0 s)* | keoket · im |
| 1:42 | T07 | **HA**: Cái ghế đầu tiên trống không, bỗng xoay từ từ về phía tôi. Tôi cắm đầu chạy. | ghexoay · chay |
| 1:48 | T04 | **MN**: Sáng hôm sau Khải đến sớm chuẩn bị ký hợp đồng mười tỷ. | "KÝ QUỸ 10 TỶ" |
| 1:53 | T04 | **MN**: Anh vừa ngồi xuống ghế thì dính chặt. Đứng không dậy được. | "DÍNH CHẶT" · bassdown |
| 1:57 | T08 | **MN**: Anh lết đi, một trăm cái ghế sau lưng rồng rắn kéo theo, kẽo kẹt dọc hành lang. | loccoc · keoket |
| 2:03 | T04 | **KHAI**: Gọi thợ cưa máy vào cắt rời nó ra! | het |
| 2:06 | S26 | **MN**: Thợ cưa gãy ba lưỡi thép. Mối nối tre không xước một vệt. | "GÃY 3 LƯỠI CƯA" · cuasatt |
| 2:11 | T06 | **BUT**: Khắc xuất. Nợ đốt nào, trả đốt ấy. | "KHẮC XUẤT" · gaygo1 |
| 2:15 | S26 | **MN**: Luật rõ ràng: muốn gỡ cái nào, phải đọc đúng tên người từng ngồi, trả đủ tiền trăm ngày, và cảm ơn. | "ĐỌC TÊN · TRẢ LƯƠNG · CẢM ƠN" |
| 2:22 | T04 | **KHAI**: Kế toán đâu! Bắn tiền hỗ trợ cho danh sách email cũ đi! Đọc tên làm gì! | tingting |
| 2:27 | S26 | **MN**: Tiền đi, không ghế nào rụng. Bụt không nhận chuyển khoản gộp. | "TỪ CHỐI CHUYỂN KHOẢN GỘP" · coc |
| 2:31 | T08 | **MN**: Hạn chót: chín giờ sáng ngày thứ một trăm, đối tác tới ký quỹ. Trượt hạn là phá sản. | "HẠN: 9:00 SÁNG" · tick · bassdown |
| 2:37 | T08 | **MN**: Ba ngày đêm Khải lội rác tìm hồ sơ, van xin từng đứa, trả đủ từng đồng. | "3 NGÀY ĐÊM" · dial |
| 2:43 | T08 | **MN**: Tách. Tách. Chín mươi chín cái ghế rụng dần. | "TÁCH · TÁCH" · cach |
| 2:47 | T04 | **MN**: Tám giờ năm mươi lăm. Ghế cuối vẫn dính chặt. Hồ sơ mất dấu. Đối tác đã vào sảnh. | "8:55 · CÒN 1 GHẾ" · tick · ting |
| 2:53 | T04 | **KHAI**: Còn ai nữa? Đứa cuối tên gì? Cứu tao với! | hot hoang |
| 2:56 | T03 | **HA**: Tôi bước vào trả thẻ. Anh Khải nhận ra tôi. | cua |
| 2:59 | T04 | **KHAI**: Hà ơi! Anh trả đủ lương, ký chính thức luôn! Cứu anh một câu! | van xin |
| 3:03 | T03 | **HA**: Em cảm ơn anh. Em đi chỗ khác. | "EM ĐI CHỖ KHÁC" · cuoi |
| 3:06 | T08 | **MN**: Tách một tiếng. Khải đứng dậy được, nhưng đối tác thấy văn phòng trống trơn liền quay xe hủy kèo. | "CÁCH!" · cach · whoosh |
| 3:12 | S33 → S34 | **MN**: Hứa trăm ngày thì trả đủ trăm ngày. Đừng để tre nó nhớ mặt từng đứa. | dieucay |
| 3:17 | B02 | **MN**: Tập sau: một ông chồng đăng ảnh tặng hoa vợ, năm trăm lượt thích. Hoa thuê, trả lại ngay chiều hôm ấy. Đêm đó ông ngồi ở bậc cửa chờ vợ… và không đứng dậy được. | "TẬP SAU" · whoosh |
| 3:25 | S06 | **MN**: Bấm đăng ký đi. Ở đây tao không bắt mày làm không công ngày nào đâu. | "ĐĂNG KÝ" · coc |

## SHORTS

### SH1 (TRỌN)
- **MN**: Hồ sơ bóc lột công sở. Hứa trăm ngày lên chính thức, ngày chín mươi chín cho bay màu. (S01) · pop "BÁCH TRÚC SOLUTIONS"
- **KHAI**: Ở đây là gia đình. Trải nghiệm mới quý, tiền bạc tính sau. Cố trăm ngày, anh ký chính thức. (T04) · pop "ANH KHẢI · CEO BÁCH TRÚC"
- **MN**: Năm năm, một trăm đứa vào. Đúng ngày chín mươi chín đều nhận email: Chưa phù hợp. (S26) · pop "NGÀY 99 · EMAIL"
- **HA**: Ghế họ ngồi, anh Khải nhét kho cho lứa sau. Ghế tôi là của lứa thứ mười. (T05) · pop "HÀ · THỰC TẬP SINH LỨA 20"
- **MN**: Đến đứa thứ một trăm thì có một ông già chống gậy tre tới xin thực tập. (T06) · pop "BỤT CÔNG SỞ"
- *(không lời, 0.8 s)*
- **MN**: Cây tre trăm đốt thời nay mọc bánh xe. Tao kể ở bản đầy đủ, link dưới. (S34)

### SH2 (TRỌN)
- **HA**: Ngày chín mươi chín, một ông già chống gậy tre đến xin thực tập. (T06) · pop "XIN THỰC TẬP"
- **KHAI**: Bên con tuyển người trẻ. Nể ông, mời ông ngồi thử ghế trải nghiệm. (T04) · pop "ANH KHẢI"
- **HA**: Ông không ngồi. Ông gõ gậy tre xuống sàn ba cái. (T06) · pop "GÕ GẬY 3 TIẾNG"
- **BUT**: Khắc nhập. (T06) · pop "BỤT · KHẮC NHẬP"
- **HA**: Năm giờ chiều, tôi nhận email cho nghỉ việc. Còn anh Khải thì dính luôn vào ghế. (T03) · pop "DÍNH CHẶT"
- *(không lời, 0.8 s)*
- **MN**: Bụt tới không phát quà, Bụt tới giao nghiệp. Bản đầy đủ, link dưới. (S34)

### SH3 (TRỌN)
- **MN**: Giám đốc startup dính chặt vào ghế, sau lưng kéo theo một trăm cái ghế khác. (T08) · pop "RẾT 100 GHẾ"
- **KHAI**: Gọi thợ cưa máy vào cắt rời nó ra! (T04) · pop "ANH KHẢI"
- **MN**: Thợ cưa gãy ba lưỡi thép. Mối nối tre không xước một vệt. (S26) · pop "GÃY 3 LƯỠI CƯA"
- **BUT**: Khắc xuất. Nợ đốt nào, trả đốt ấy. (T06) · pop "BỤT · KHẮC XUẤT"
- **MN**: Muốn gỡ cái nào, phải đọc đúng tên người từng ngồi, trả đủ tiền trăm ngày, và cảm ơn. (S26) · pop "LUẬT GỠ GHẾ"
- *(không lời, 0.8 s)*
- **MN**: Năm năm quỵt lương không nhớ nổi một cái tên. Khải thoát bằng cách nào? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH4 (TRỌN)
- **KHAI**: Kế toán đâu! Bắn tiền hỗ trợ cho danh sách email cũ đi! Đọc tên làm gì! (T04) · pop "CHUYỂN KHOẢN GỘP"
- **MN**: Tiền đi, không ghế nào rụng. Bụt không nhận chuyển khoản gộp. (S26) · pop "TỪ CHỐI CHUYỂN KHOẢN"
- **MN**: Hạn chót: chín giờ sáng ngày thứ một trăm, đối tác tới ký quỹ. Trượt hạn là phá sản. (T08) · pop "HẠN: 9:00 SÁNG"
- **MN**: Ba ngày đêm Khải lội rác tìm hồ sơ, van xin từng đứa, trả đủ từng đồng. (T08) · pop "LỘI RÁC TÌM TÊN"
- **MN**: Tách. Tách. Chín mươi chín cái ghế rụng dần. Nhưng còn cái cuối cùng kẹt cứng. (T04) · pop "KẸT GHẾ CUỐI"
- *(không lời, 0.8 s)*
- **MN**: Cái ghế cuối cùng của ai? Tao kể ở bản đầy đủ, link dưới. (S34)

### SH5 (TRỌN)
- **MN**: Tám giờ năm mươi lăm. Ghế cuối vẫn dính chặt. Hồ sơ mất dấu. Đối tác đã vào sảnh. (T04) · pop "8:55 · CÒN 1 GHẾ"
- **KHAI**: Còn ai nữa? Đứa cuối tên gì? Cứu tao với! (T04) · pop "ANH KHẢI"
- **HA**: Tôi bước vào trả thẻ. Anh Khải nhận ra tôi. (T03) · pop "HÀ · LỨA 20"
- **KHAI**: Hà ơi! Anh trả đủ lương, ký chính thức luôn! Cứu anh một câu! (T04) · pop "VAN XIN"
- **HA**: Em cảm ơn anh. Em đi chỗ khác. (T03) · pop "EM ĐI CHỖ KHÁC"
- *(không lời, 0.8 s)*
- **MN**: Ghế tách ra, nhưng đối tác hủy kèo. Đáng đời phú ông thời nay. Bản đầy đủ, link dưới. (S34)

### SH6 (TRAILER)
- **HA**: Nửa đêm. Tôi chỉ quay lại lấy cái sạc. (T01) · pop "0:00 · BÁCH TRÚC SOLUTIONS"
- **HA**: Nhưng văn phòng… nghe như có tiếng tre gặp gió. (T02) · pop "TIẾNG TRE GẶP GIÓ"
- **HA**: Từ kho ra bàn giám đốc, một trăm cái ghế xoay nối lưng thành một hàng dài dằng dặc. (T07) · pop "100 GHẾ NỐI LƯNG"
- **HA**: Gió điều hòa thốc tới. Cả hàng ghế kẽo kẹt rùng mình như tre gặp bão. (T07)
- **HA**: Cái ghế đầu tiên trống không, bỗng xoay từ từ về phía tôi... (T07) · pop "GHẾ TỰ XOAY"
- **MN**: Ai đang ngồi trên hàng ghế đó? Xem bản đầy đủ, link dưới. (S34)

### SH7 (TRAILER)
- **MN**: Chín giờ sáng, đối tác rót vốn mười tỷ bước vào sảnh. Giám đốc vẫn dính một trăm cái ghế sau lưng. (T08) · pop "ĐẾM NGƯỢC 9:00 SÁNG"
- **KHAI**: Gọi thợ cưa máy vào cắt rời nó ra! (T04) · pop "ANH KHẢI"
- **MN**: Thợ cưa gãy ba lưỡi. Muốn gỡ, phải gọi đúng tên một trăm thực tập sinh bị quỵt lương. (S26) · pop "GỌI ĐÚNG 100 TÊN"
- **MN**: Ba ngày đêm gỡ được chín mươi chín cái. Tám giờ năm mươi lăm, cái ghế cuối cùng kẹt cứng vì mất hồ sơ! (T04) · pop "8:55 · CÒN 1 GHẾ"
- **KHAI**: Còn ai nữa? Đứa cuối tên gì? Cứu tao với! (T04)
- **MN**: Người cứu Khải là ai? Xem bản đầy đủ ngay dưới. (S34)

## Hình
Tận dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách 8 ảnh vẽ mới (16:9)
| Mã | Cảnh | Tình trạng v3 |
|---|---|---|
| T01 | Văn phòng mở ban đêm, đèn tắt, ánh đèn đường qua rèm, lối đi dài | [v3 dùng] |
| T02 | Cận bánh xe ghế văn phòng trên sàn; bản cận chỗ nối hai lưng ghế khít như đốt tre | [v3 dùng] |
| T03 | Văn phòng sáng, khẩu hiệu "BÁCH TRÚC — VƯƠN CAO CÙNG BẠN"; bản Hà ngồi bàn ngập việc; bản Hà đeo balo cười | [v3 dùng] |
| T04 | Anh Khải cận: polo logo tre, tai nghe, cốc cà phê; bản dính ghế mặt đỏ; bản sau lưng còn một ghế | [v3 dùng] |
| T05 | Kho văn phòng, ghế xoay cũ xếp chồng | [v3 dùng] |
| T06 | Sảnh gạch bóng: ông già áo nâu chống gậy tre; bản cận gậy gõ sàn; bản đứng cuối hành lang chỉ gậy | [v3 dùng] |
| T07 | Một trăm ghế xoay nối lưng nhau thành hàng dài cong theo lối đi trong văn phòng tối; bản cận ghế đầu xoay về cửa | [v3 dùng] |
| T08 | Anh Khải lết đi kéo theo hàng ghế dài như con rết, nhân viên dạt hai bên; bản hàng ghế ngắn dần; bản đứng dậy tập đi | [v3 dùng] |

## Lịch
- **LONG**: Thứ Hai 11/10 18:00 (+07).
- **7 SHORTS**:
  - SH1: Thứ Hai 11/10 19:00 (+07)
  - SH2: Thứ Ba 12/10 11:30 (+07)
  - SH3: Thứ Ba 12/10 19:00 (+07)
  - SH4: Thứ Tư 13/10 11:30 (+07)
  - SH5: Thứ Tư 13/10 19:00 (+07)
  - SH6: Thứ Năm 14/10 11:30 (+07)
  - SH7: Thứ Năm 14/10 19:00 (+07)
