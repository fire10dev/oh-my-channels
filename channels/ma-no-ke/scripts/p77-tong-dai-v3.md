# Dự án 77 — Cô tổng đài "Gọi ai cũng ra mẹ" (v3, 2026-11-24)

v3 nâng cấp theo tiêu chuẩn kịch tính P04 v4:
- **Đồng hồ + cái giá cụ thể**: Hạn chót trước **9:00 sáng** (giờ ngân hàng mở cửa, người già ra nộp tiền); nếu để lọt một cuộc lừa đảo trót lọt, 30 năm danh bạ bưu điện huyện thành đồng lõa lừa đảo (cái giá của con ma, không đe dọa trẻ em).
- **Luật con ma**: Nghề bưu điện cấm tự ý cúp máy của khách; muốn chặn ổ lừa, cô Ngân buộc phải tìm cách lách luật của chính mình.
- **3 nấc leo thang chủ động**: Nấc 1 phát xung nhiễu nghẽn mạng → Đạt tăng kích sóng 4G, ép gọi dồn dập → Nấc 2 nửa đêm kích 30 máy smartphone reo chuông quay số bưu điện cổ dọa ma → Đạt coi là chập điện, sáng ra tăng tốc xả sạch danh bạ → Nấc 3 nước liều: 8:30 sáng, Đạt sắp chốt đơn tiền dưỡng già của một bà cụ, cô Ngân cắm phập giắc dồn toàn bộ 30 cổng máy về số máy bàn của mẹ Đạt ở quê.
- **Điểm thấp nhất**: 8:30 sáng, còn đúng 30 phút. Đạt dồn ép bà cụ khóc nấc tìm sổ tiết kiệm. Cô Ngân giơ tay định giật dây nhưng luật nghề ghìm lại — không được ngắt máy.
- **Cú lật do ma CHỌN và TRẢ GIÁ**: Cô Ngân không phạm luật cúp máy mà chọn đổi cổng giắc cắm; trả giá bằng việc làm cháy rụi cụm giắc đồng cổ khi dồn tải 30 cuộc gọi cùng lúc. Kẻ lừa tự tay đọc kịch bản cho mẹ ruột nghe.
- **Cold open**: Giấu sạch cú lật, chỉ treo câu hỏi bằng hình ảnh 30 smartphone đời mới reo tiếng chuông quay số cổ và tiếng cắm giắc "tạch".

---

## Xương sống kịch tính
1. **Câu hỏi kịch tính trung tâm**: Cô tổng đài bưu điện cũ làm cách nào chặn đứng ổ lừa ba mươi máy trước chín giờ sáng ngân hàng mở cửa, khi luật nghề cấm cô tự ý ngắt máy của khách?
2. **Đồng hồ + cái giá**: 9:00 sáng (giờ mở cửa ngân hàng). Nếu trượt, một cụ già mất sạch tiền dưỡng già và 30 năm uy tín bưu điện huyện thành đồng lõa với quân lừa đảo.
3. **3 nấc leo thang**:
   - Nấc 1: Cô Ngân truyền xung nhiễu làm nghẽn sóng → Thất bại: Đạt lắp thêm kích sóng 4G, ép mười nhân viên gọi dồn dập.
   - Nấc 2: Nửa đêm kích hoạt 30 máy cùng reo chuông quay số đời cũ dọa ma → Thất bại: Đạt tưởng chập điện tòa nhà cũ, sáng hôm sau ra lệnh xả sạch danh bạ.
   - Nấc 3 (nước liều): 8:30 sáng, Đạt sắp lừa được bà cụ → Cô Ngân dùng bó cáp đồng cổ dưới sàn, cắm nối tắt toàn bộ 30 cổng máy về máy bàn của mẹ Đạt ở quê.
4. **Điểm thấp nhất**: 8:30 sáng, còn 30 phút. Bà cụ đầu dây bên kia hoảng loạn đi tìm sổ tiết kiệm. Cô Ngân đứng trước bàn giắc, luật nghề không cho phép tự ý ngắt cuộc gọi.
5. **Cú lật**: Cô Ngân không cúp máy mà chuyển hướng giắc cắm (trả giá bằng cháy hỏng cụm giắc đồng). Đạt đọc kịch bản "con bác tai nạn cấp cứu" cho chính mẹ ruột nghe. Đổi 30 máy khác nhau đều nối về một người mẹ.
6. **Khoảnh khắc rợn**: Nửa đêm, phòng thuê tối om, 30 chiếc smartphone trên bàn bỗng cùng sáng màn hình không hiện số, đồng loạt reng tiếng chuông quay số cổ sau mỗi tiếng giắc cắm "tạch".
7. **Câu kết bible**: Ổ lừa giải tán, Đạt về quê gánh rau. Kẻ lừa ba trăm người già cuối cùng chịu thua một bà mẹ quê.

---

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó (người dẫn chuyện) | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| DAT | Đạt (cầm đầu ổ lừa, sơ mi trắng giả cán bộ) | D04 | Adam bựa | `atempo=1.02,anull` |
| NGAN | Cô Ngân (điện thoại viên tổng đài bưu điện xưa) | D06 | Đoan Trang | `atempo=0.95,aecho=0.8:0.4:30:0.2,highpass=f=300,lowpass=f=3400` |
| ME | Bà Lan (mẹ Đạt ở quê, nghe điện thoại) | D07 | Ngọc Huyền | `asetrate=48000*0.93,aresample=48000,highpass=f=400,lowpass=f=3000` |

```json voices
{
  "MN": {
    "preset": "Thiện Minh",
    "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"
  },
  "DAT": {
    "preset": "Adam bựa",
    "fx": "atempo=1.02,anull"
  },
  "NGAN": {
    "preset": "Đoan Trang",
    "fx": "atempo=0.95,aecho=0.8:0.4:30:0.2,highpass=f=300,lowpass=f=3400"
  },
  "ME": {
    "preset": "Ngọc Huyền",
    "fx": "asetrate=48000*0.93,aresample=48000,highpass=f=400,lowpass=f=3000"
  }
}
```

---

## LONG (579 chữ lời thoại, dựng ~180 s)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | D01 | *(không lời, 2.5 s)* | im lặng · tiếng máy thở gió |
| 0:02 | D02 | **MN**: Ba mươi chiếc điện thoại đời mới. Nhưng chuông reo... là tiếng này. | "tạch" · reng reng cổ · coc |
| 0:06 | D02 | *(không lời, 1.2 s)* | reng reng kéo dài · nhạc tắt |
| 0:08 | S01 | **MN**: Lại mò vào à? Bố mẹ mày từng nhận cuộc gọi báo con gặp nạn chưa? | "LẠI MÒ VÀO À?" · coc |
| 0:13 | S26 | **MN**: Có rồi thì nghe chuyện này. Chuyện một ổ lừa đảo gọi nhầm người không được phép lừa. | braam |
| 0:18 | D03 | **MN**: Đạt thuê căn phòng ở bưu điện cũ. Mười đứa, ba mươi máy, kịch bản dán kín tường. | "Ổ LỪA ĐẢO" · tiếng gõ phím |
| 0:24 | D04 | **DAT**: Alô, bác Tuấn à? Con bác tai nạn giao thông, đang cấp cứu. Bác chuyển gấp ba mươi triệu viện phí! | "CẤP CỨU GẤP" · tút tút |
| 0:31 | D04 | **DAT**: Cứ người già mà gọi. Nghe con gặp nạn là cuống, cuống là chuyển tiền. Dễ ăn. | "DỄ ĂN" · cười khẩy |
| 0:37 | D05 | **MN**: Nhưng phòng này xưa là tổng đài bưu điện huyện. Nơi cô Ngân cắm giắc ba mươi năm. | "TỔNG ĐÀI BƯU ĐIỆN HUYỆN" |
| 0:43 | D06 | **NGAN**: Tổng đài xin nghe. Ba mươi năm, tôi nhớ giọng từng người trong huyện. | "TỔNG ĐÀI XIN NGHE" · tạch |
| 0:49 | D06 | **NGAN**: Luật tổng đài: khách quay số là phải cắm giắc nối máy, không được tự cúp. Nhưng nối đi đâu... là tay tôi. | "LUẬT: KHÔNG TỰ CÚP MÁY" |
| 0:56 | D08 | **MN**: Dưới sàn bong tróc, bó cáp đồng cũ to bằng cổ tay vẫn còn nối mạch. Mọi sóng điện thoại đều chạy qua đó. | "BÓ CÁP ĐỒNG CŨ" · rù rù |
| 1:04 | S26 | **MN**: Luật bưu điện có một cái hạn. Đúng chín giờ sáng, các cụ già sẽ ra ngân hàng nộp tiền. | "HẠN: 9:00 SÁNG" · tick |
| 1:11 | D06 | **NGAN**: Trước chín giờ, để lọt một cuộc lừa, ba mươi năm nghề của tôi thành quân cướp ngày. | "30 NĂM NGHỀ" · bassdown |
| 1:17 | D03 | **MN**: Tám giờ sáng, nấc đầu tiên. Cô Ngân truyền xung nhiễu, làm nghẽn sóng cả phòng. | "8:00 SÁNG · NẤC 1" · re re |
| 1:23 | D04 | **DAT**: Mạng lag à? Bật thêm kích sóng bốn gờ lên! Sáng nay phải xả sạch danh bạ! | "BẬT KÍCH SÓNG 4G" |
| 1:29 | B02 | **MN**: Đạt không dừng lại. Đêm trước đó, cô Ngân đã thử nấc thứ hai. | "ĐÊM TRƯỚC · NẤC 2" |
| 1:33 | D01 | *(không lời, 1.8 s)* | nhạc tắt · im bặt |
| 1:35 | D02 | **MN**: Nửa đêm, phòng tắt điện. Ba mươi chiếc smartphone trên bàn bỗng cùng sáng rực. | sáng lóe · không số |
| 1:40 | D02 | **MN**: Không có nhạc chuông. Chỉ có tiếng cắm giắc tạch tạch, rồi chuông quay số đời cũ reng lên từng hồi. | "tạch" ×3 · reng reng ×30 |
| 1:47 | D04 | **DAT**: Chập điện dọa ma đấy à? Kệ nó, sáng mai cứ đúng kịch bản mà giã! | "KỆ NÓ!" |
| 1:53 | S26 | **MN**: Đạt trơ tráo. Gã quyết chốt mớ tiền lớn trước giờ ngân hàng mở cửa. | braam |
| 1:58 | D03 | **MN**: Tám giờ ba mươi sáng. Điểm thấp nhất. Chỉ còn đúng ba mươi phút. | "8:30 SÁNG · CÒN 30 PHÚT" · tick |
| 2:03 | D04 | **DAT**: Bác đừng chần chừ! Máu ra nhiều lắm, không chuyển tiền ngay là con bác không qua khỏi đâu! | "KHÔNG QUA KHỎI ĐÂU!" |
| 2:10 | D07 | **MN**: Đầu dây bên kia, một bà cụ bật khóc, run rẩy tìm cuốn sổ tiết kiệm. | tiếng khóc run · nhạc thắt |
| 2:16 | D06 | **NGAN**: Luật bưu điện không cho phép tôi cúp máy của khách. | "KHÔNG ĐƯỢC CÚP MÁY" |
| 2:20 | D06 | **NGAN**: Không được cúp... thì tôi đổi cổng giắc! | "ĐỔI CỔNG GIẮC!" · tạch đanh |
| 2:23 | D08 | **MN**: Cô Ngân cắm phập giắc tổng đài vào sợi cáp đồng chạy thẳng về quê Đạt. Nước liều cuối cùng. | "NƯỚC LIỀU" · tóe điện |
| 2:30 | D07 | **ME**: Alô... Đạt đấy à con? | lọc điện thoại · mẹ Đạt |
| 2:33 | D04 | **DAT**: Bác sĩ đây! Con bác sắp chết... | hốt hoảng |
| 2:36 | D07 | **ME**: Đạt ơi, mẹ nghe giọng con mà! Con bị làm sao? Mẹ gửi tiền cho con nhé? | "MẸ NGHE GIỌNG CON MÀ" |
| 2:42 | D04 | **MN**: Đạt giật bắn người, vội dập máy. Mặt gã cắt không còn hột máu. | "CẮT KHÔNG CÒN HỘT MÁU" · cua |
| 2:47 | D04 | **DAT**: Nhầm số rồi! Chúng mày gọi số khác mau! | "GỌI SỐ KHÁC MAU!" |
| 2:50 | D03 | **MN**: Nhưng cô Ngân đã khóa cổng giắc. Ba mươi máy gọi đi đâu cũng chỉ vang lên một giọng. | "KHÓA CỔNG GIẮC" |
| 2:56 | D07 | **ME**: Đạt à? Sao bạn con máy nào cũng gọi bảo con gặp nạn thế? Con ở đâu? | "CON Ở ĐÂU?" |
| 3:02 | S26 | **MN**: Kịch bản lừa ba trăm người già vỡ tan tành trước một người mẹ quê. | "VỠ TAN KỊCH BẢN" · coc |
| 3:07 | D06 | **NGAN**: Cuộc gọi đã kết thúc. Cảm ơn quý khách. | "tạch" rút giắc · mỉm cười |
| 3:11 | D03 | **MN**: Căn phòng giải tán ngay trưa ấy. Đạt về quê, ngày ngày phụ mẹ gánh rau. | "TRẢ PHÒNG" |
| 3:16 | S34 | **MN**: Giờ ai gọi đến Đạt cũng dạ vâng. Vì gã sợ nhất nghe tiếng giắc cắm tạch một cái. | rít điếu cày · tạch |
| 3:22 | B02 | **MN**: Tập sau: một cặp vợ chồng làm đám cưới giả để thu tiền mừng, rồi ly hôn ngay. Đám cưới ấy có một vị khách không mời: Ông Tơ. | "TẬP SAU" · whoosh |
| 3:30 | S06 | **MN**: Bấm đăng ký đi. Không thì mai điện thoại mày reo tiếng giắc, người nghe khéo lại là mẹ mày đấy. | "ĐĂNG KÝ" · coc |

---

## SHORTS

### SH1 (TRỌN) — Hồ sơ cô tổng đài bưu điện cũ
- **MN**: Hồ sơ cô tổng đài bưu điện huyện. Ba mươi năm cắm giắc, lần đầu gặp quân lừa đảo. (D05) · pop "HỒ SƠ MA · CÔ TỔNG ĐÀI"
- **MN**: Một. Bó cáp đồng dưới sàn bưu điện cũ vẫn còn nối mạch. (D08) · pop "BÓ CÁP ĐỒNG CŨ"
- **NGAN**: Tổng đài xin nghe. Ba mươi năm, tôi nhớ giọng từng người trong huyện. (D06) · pop "CÔ NGÂN · TỔNG ĐÀI VIÊN"
- **MN**: Hai. Luật bưu điện: khách quay số là phải nối máy, cấm tự cúp. (D06) · pop "LUẬT: CẤM TỰ CÚP MÁY"
- **MN**: Ba. Ổ lừa gọi đi đâu, cô cắm giắc nối thẳng về máy mẹ thằng cầm đầu. (D03) · pop "NỐI VỀ MẸ"
- **ME**: Đạt à? Sao bạn con máy nào cũng gọi bảo con gặp nạn thế? (D07) · pop "MẸ NGHE MÁY"
- *(không lời, 0.8 s)*
- **MN**: Lừa ai không lừa, lừa đúng mẹ mình. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

### SH2 (TRỌN) — Kịch bản người già nghe con gặp nạn
- **DAT**: Cứ người già mà gọi. Nghe con gặp nạn là cuống, cuống là chuyển tiền. Dễ ăn. (D04) · pop "KỊCH BẢN: DỄ ĂN"
- **MN**: Đạt cầm đầu ba mươi máy, lừa người già chuyển tiền viện phí cấp cứu. (D03) · pop "30 MÁY LỪA ĐẢO"
- **DAT**: Alô, bác Tuấn à? Con bác tai nạn giao thông, đang cấp cứu. Bác chuyển gấp ba mươi triệu viện phí! (D04) · pop "CON BÁC TAI NẠN!"
- **MN**: Nhưng hôm nay, người bắt máy lại là một bà cụ khác. (D07) · pop "BÀ CỤ KHÁC"
- **ME**: Đạt ơi, mẹ nghe giọng con mà! Con bị làm sao? Mẹ gửi tiền cho con nhé? (D07) · pop "MẸ ĐẠT Ở QUÊ"
- **DAT**: Nhầm số rồi! Chúng mày gọi số khác mau! (D04) · pop "MẶT CẮT KHÔNG CÒN MÁU"
- *(không lời, 0.8 s)*
- **MN**: Gọi ba mươi số vẫn ra mẹ. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

### SH3 (TRỌN) — Luật của ma tổng đài
- **NGAN**: Luật tổng đài: khách quay số là phải cắm giắc nối máy, không được tự cúp. Nhưng nối đi đâu... là tay tôi. (D06) · pop "CÔ TỔNG ĐÀI BƯU ĐIỆN"
- **MN**: Ổ lừa ba mươi máy hoạt động hết công suất trong tòa bưu điện cũ. (D03) · pop "TÒA NHÀ BƯU ĐIỆN CŨ"
- **DAT**: Bác đừng chần chừ! Máu ra nhiều lắm, không chuyển tiền ngay là con bác không qua khỏi đâu! (D04) · pop "DỒN ÉP NẠN NHÂN"
- **NGAN**: Không được cúp... thì tôi đổi cổng giắc! (D06) · pop "ĐỔI CỔNG GIẮC!"
- **ME**: Alô... Đạt đấy à con? (D07) · pop "ALÔ... ĐẠT ĐẤY À CON?"
- **NGAN**: Cuộc gọi đã kết thúc. Cảm ơn quý khách. (D06) · pop "KẾT THÚC CUỘC GỌI"
- *(không lời, 0.8 s)*
- **MN**: Kẻ lừa đảo câm nín trước mẹ ruột. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

### SH4 (TRAILER) — Ba mươi máy reo chuông quay số lúc nửa đêm
- **MN**: Nửa đêm, phòng lừa đảo tắt điện. Ba mươi chiếc smartphone trên bàn bỗng cùng sáng rực. (D01) · pop "NỬA ĐÊM · PHÒNG TẮT ĐIỆN"
- **MN**: Màn hình không hiện số người gọi. (D02) · pop "MÀN HÌNH KHÔNG HIỆN SỐ"
- **MN**: Rồi có tiếng cắm giắc kim loại tạch, tạch. Chuông quay số đời cũ reng lên từng hồi điếc tai. (D02) · pop "TIẾNG GIẮC CẮM TỔNG ĐÀI"
- **DAT**: Chập điện dọa ma đấy à? Kệ nó, sáng mai cứ đúng kịch bản mà giã! (D04) · pop "CHẬP ĐIỆN DỌA MA?"
- **MN**: Đạt tưởng chập điện. Gã không biết dưới chân mình, có người vừa cắm giắc. (D08) · pop "AI VỪA CẮM GIẮC?"
- **MN**: Người ấy là ai? Xem ngay bản đầy đủ ở link dưới. (S26) · pop "XEM NGAY BẢN ĐẦY ĐỦ"

### SH5 (TRỌN) — Bó cáp đồng dưới sàn gạch
- **MN**: Tòa bưu điện huyện sửa sang bao nhiêu lần, riêng bó cáp đồng cũ dưới sàn thì không ai đụng tới. (D08) · pop "BÓ CÁP ĐỒNG HUYỆN"
- **MN**: Đạt thuê đúng căn phòng tổng đài cũ để mở ổ lừa ba mươi máy. (D03) · pop "THUÊ ĐÚNG PHÒNG TỔNG ĐÀI"
- **DAT**: Sáng nay phải xả sạch danh bạ! Gom hết tiền trước chín giờ! (D04) · pop "XẢ SẠCH DANH BẠ"
- **MN**: Mọi cuộc gọi bốn gờ đi qua bó cáp đồng đều bị cô Ngân bẻ ngoặt về một đầu dây. (D06) · pop "BẺ NGOẶT ĐƯỜNG TRUYỀN"
- **ME**: Đạt à? Sao bạn con máy nào cũng gọi bảo con gặp nạn thế? Con ở đâu? (D07) · pop "MẸ ĐẠT TRÊN 30 MÁY"
- **DAT**: Tắt máy! Tắt máy hết cho tao! (D04) · pop "HOẢNG LOẠN"
- *(không lời, 0.8 s)*
- **MN**: Cáp đồng bưu điện chưa bao giờ nối sai. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

### SH6 (TRAILER) — Tám giờ ba mươi sáng
- **MN**: Tám giờ ba mươi sáng. Chỉ còn ba mươi phút nữa là ngân hàng mở cửa. (D03) · pop "8:30 SÁNG · ĐIỂM THẤP NHẤT"
- **DAT**: Bác đừng chần chừ! Máu ra nhiều lắm, không chuyển tiền ngay là con bác không qua khỏi đâu! (D04) · pop "BƯỚC ĐƯỜNG CÙNG"
- **MN**: Bà cụ ở quê bật khóc, run rẩy vớ lấy cuốn sổ tiết kiệm cả đời. (D07) · pop "SỔ TIẾT KIỆM CẢ ĐỜI"
- **MN**: Cô tổng đài đứng sau lưng, tay cầm sợi giắc cắm kim loại. (D06) · pop "CÔ TỔNG ĐÀI XUẤT HIỆN"
- **NGAN**: Luật bưu điện không cho phép tôi cúp máy của khách. (D06) · pop "LUẬT: CẤM CÚP MÁY"
- **MN**: Ba mươi triệu ấy có rơi vào tay kẻ lừa? Bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

### SH7 (TRỌN) — Người thứ ba trăm lẻ một
- **MN**: Lừa trót lọt ba trăm người già cả đời gom góp. Đến người thứ ba trăm lẻ một thì đứt cước. (S26) · pop "NGƯỜI THỨ 301"
- **DAT**: Alô, con bác tai nạn giao thông đang cấp cứu... (D04) · pop "ĐỌC KỊCH BẢN QUEN THUỘC"
- **ME**: Đạt à? Con nói giọng gì lạ thế? Con gặp nạn thật à? (D07) · pop "MẸ Ở QUÊ NHẬN RA"
- **DAT**: Bác nhầm rồi... Tôi là bác sĩ! (D04) · pop "BÁC SĨ GIẢ DANH"
- **ME**: Ba mươi cuộc gọi đều bảo con gặp nạn. Đạt ơi... con làm nghề này à? (D07) · pop "ĐẠT ƠI... CON LÀM NGHỀ NÀY À?"
- **MN**: Lần đầu tiên, gã cầm đầu ổ lừa không còn kịch bản nào để đọc. (D04) · pop "HẾT KỊCH BẢN"
- *(không lời, 0.8 s)*
- **MN**: Người thứ ba trăm lẻ một là mẹ ruột gã. Tao kể ở bản đầy đủ, link dưới. (S26) · pop "BẢN ĐẦY ĐỦ · LINK DƯỚI"

---

## Hình
Tận dụng tài nguyên cũ: B02 + ep01 S01, S06, S26, S33, S34 (Ma Nó).

### Danh sách ảnh vẽ mới (16:9) — Giữ nguyên mã v2:
- **D01** [v3 dùng]: Phòng thuê tối trong tòa nhà cũ, ba mươi điện thoại thông minh xếp trên dãy bàn, cửa sổ chấn song.
- **D02** [v3 dùng]: Cận một điện thoại rung, màn hình sáng không hiện số; bản ba mươi máy cùng sáng rực trong bóng tối.
- **D03** [v3 dùng]: Phòng lừa ban ngày: mười thanh niên đeo tai nghe đọc kịch bản dán tường, Đạt đi lại kiểm tra; bản trống trơn khi giải tán.
- **D04** [v3 dùng]: Đạt cận: sơ mi trắng giả cán bộ, tai nghe; các biểu cảm: cười đểu khi lừa được, đơ người khi nghe tiếng mẹ, ngồi im hoảng loạn.
- **D05** [v3 dùng]: Ảnh màu cũ: phòng tổng đài bưu điện huyện, các cô điện thoại viên áo dài xanh nhạt trước bàn cắm giắc.
- **D06** [v3 dùng]: Cô Ngân mờ: áo dài xanh nhạt, tai nghe gọng sắt, tay cầm giắc cắm kim loại; bản đổi cổng giắc và bản mỉm cười rút giắc.
- **D07** [v3 dùng]: Nhà quê: bà cụ ngồi cạnh điện thoại bàn cũ, mặt buồn bã hoang mang; bản khóc tìm sổ tiết kiệm.
- **D08** [v3 dùng]: Cận sàn gạch bong tróc một viên, lộ bó cáp đồng cũ to bằng cổ tay chạy ngầm.

---

## Lịch
- **LONG**: Thứ Hai 16/08 lúc 18:00 (+07).
- **SH1**: Thứ Hai 16/08 lúc 19:00 (+07).
- **SH2**: Thứ Ba 17/08 lúc 11:30 (+07).
- **SH3**: Thứ Ba 17/08 lúc 19:00 (+07).
- **SH4**: Thứ Tư 18/08 lúc 11:30 (+07).
- **SH5**: Thứ Tư 18/08 lúc 19:00 (+07).
- **SH6**: Thứ Năm 19/08 lúc 11:30 (+07).
- **SH7**: Thứ Năm 19/08 lúc 19:00 (+07).
- *(Tập sau P78 — Ông Tơ ra mắt Thứ Năm 19/08 lúc 18:00)*.
