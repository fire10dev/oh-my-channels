# Dự án 64 — Ma xưởng may "Khâu kín túi" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót 9 giờ sáng thứ Hai — giờ ký hợp đồng xuất khẩu triệu đô quyết định sống còn của xưởng. Nếu trượt: công nhân bãi công giải tán, đối tác hủy hợp đồng, xe sang bị ngân hàng siết nợ; về phía cô Tư: thợ bỏ xưởng thì món nợ mồ hôi vĩnh viễn không bao giờ đòi lại được.
- **3 nấc leo thang chủ động**: (1) Dùng kéo cắt chỉ và dọa đuổi việc → đêm sau chỉ mọc dày gấp đôi; (2) Mua cả tủ vest mới toanh ở trung tâm thương mại → vừa mặc vào túi tự dính chặt, khuy áo tự khâu chết vào nẹp; (3) Cầm dao rạch áo thì đường chỉ siết nghẹt cổ, cùng đường trước giờ ký hợp đồng.
- **Điểm thấp nhất**: 7 giờ sáng thứ Hai (còn 2 tiếng), ông Phú bốc mùi sau 3 ngày mặc nguyên bộ vest bó chặt, ví không mở được để lấy tiền cọc, 200 thợ dọn đồ rời xưởng.
- **Cú lật do nhân vật chọn và trả giá**: Không tự thức tỉnh; ông Phú buộc phải bán tháo xe sang ngay trong 30 phút lấy tiền mặt phát đủ 3 tháng lương tận tay công nhân để giải thoát cho chính mình trước giờ đối tác tới.
- **Khuôn mẫu chuẩn**: Rút gọn lời thoại xuống 585 chữ (≈3:00), chia bảng theo cảnh chuẩn P04 v4, đủ 5 short TRỌN + 2 short TRAILER.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu ông chủ xưởng nợ lương có chịu nhả tiền mồ hôi của hai trăm thợ trước 9 giờ sáng thứ Hai khi mọi chiếc túi và khuy áo đều bị ma khâu chết?
- **Đồng hồ / Cái giá**: 9:00 sáng thứ Hai (ký hợp đồng xuất khẩu triệu đô). Trượt: xưởng vỡ nợ, xe bị siết, 200 gia đình mất trắng tiền lương.
- **3 nấc leo thang**:
  1. Cắt chỉ bằng kéo, dọa đuổi việc thợ → Đêm sau đường chỉ khâu kín cả ví, thẻ, túi xách.
  2. Mua tủ vest hàng hiệu mới toanh thay thế → Vừa xỏ vào, túi dính tịt, khuy áo tự khâu chết vào nẹp không cởi ra được.
  3. Dùng dao rạch áo → Chỉ siết nghẹt cổ họng, công nhân bãi công dọn đồ về.
- **Điểm thấp nhất**: 7:00 sáng thứ Hai, ông Phú kiệt sức bốc mùi trong bộ vest khâu chết, ví không mở được, đối tác gọi giục cọc, thợ may chuẩn bị bỏ đi hết.
- **Cú lật**: Ông Phú cắn răng bán tháo chiếc xe sang mới mua, lấy tiền mặt phát đủ 3 tháng nợ lương cho 200 thợ; phong bì cuối cùng vừa rời tay, đường chỉ mới tự tuột ra.
- **Khoảnh khắc rợn**: 2 giờ sáng, xưởng ngắt cầu dao tối om, 200 chiếc máy may đồng loạt tự chạy rầm rập, kim đâm lên xuống, đèn máy tự sáng dù không có điện, bàn đạp nhấp nhô không bóng người.
- **Câu kết**: Ký được hợp đồng nhưng từ đó ông chủ đi làm chỉ dám mặc áo cộc tay không túi; cô Tư buông thước dây.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34/S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| PHU | Ông Phú, chủ xưởng may quỵt lương | X04 | Adam bựa | `atempo=1.03` |
| TU | Cô Tư, thợ may cũ canh xưởng | X07 | Đoan Trang | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25` |
| NGA | Chị Ngà, tổ trưởng công nhân | X05 | Ngọc Huyền | `atempo=1.05` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "PHU": {"preset": "Adam bựa", "fx": "atempo=1.03"}, "TU": {"preset": "Đoan Trang", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.25"}, "NGA": {"preset": "Ngọc Huyền", "fx": "atempo=1.05"}}
```

## LONG (585 chữ thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | X01 | *(không lời, 2.5 s)* | "2:00 SÁNG" · im |
| 0:02 | X02 | *(không lời, 1.5 s)* | tạch… tạch… tạch |
| 0:04 | X02 | **MN**: Đêm ở xưởng may, sợ nhất không phải trộm. Sợ nhất là nghe tiếng máy may tự chạy. | coc |
| 0:08 | S01 → S26 | **MN**: Lại mò vào à? Đi làm bị nợ lương chưa? Sếp nợ ba tháng mà tuần nào cũng đổi xe mới? | "NỢ 3 THÁNG" · coc · braam |
| 0:14 | S34 | **MN**: Có ông chủ nợ dai như thế. Và có một cô thợ may… quyết định khâu túi ông lại. | whoosh |
| 0:18 | X03 | **MN**: Ông Phú, chủ xưởng may hai trăm thợ. Nợ lương ba tháng ròng. | "200 CÔNG NHÂN" · xonxao |
| 0:22 | X04 | **PHU**: Khó khăn chung! Đối tác chưa trả, anh em ráng nhịn! Công ty là nhà! | "CÔNG TY LÀ NHÀ" |
| 0:26 | X05 | **NGA**: Nhà gì mà ông chủ tậu xe sang, công nhân ăn mì tôm ba tháng? | bipbip |
| 0:30 | X03 | **MN**: Chín giờ sáng thứ Hai là hạn ký hợp đồng xuất khẩu lớn nhất năm. Công nhân dọa bãi công. Nhưng ông Phú mặc kệ, tiền cọc đã nằm gọn trong chiếc xe mới. | "HẠN: 9:00 THỨ HAI" · tick |
| 0:39 | X02 | **MN**: Góc xưởng có cái máy may đạp chân cũ kỹ từ thời bao cấp. Của cô Tư. | "CÔ TƯ · MÁY MAY CŨ" |
| 0:44 | X06 | **MN**: Ba mươi năm trước, cô bị quỵt lương cả năm rồi mất trên đường đi đòi. Hồn cô ở lại canh xưởng. | "30 NĂM CHỜ TRẢ" |
| 0:50 | X07 | **TU**: Hai trăm đứa… giống hệt tổ tôi năm ấy. Giữ tiền mồ hôi của người ta thì cái túi anh không được đựng gì hết. | eecho |
| 0:57 | X01 | **MN**: Hai giờ sáng. Cầu dao ngắt, xưởng tối om. | cauda · nhactat |
| 1:00 | X02 | *(không lời, 2.0 s)* | tạch… tạch… tạch |
| 1:02 | X02 | **MN**: Cái máy may góc xưởng bỗng rùng mình. Tạch… tạch… tạch. | tachtach |
| 1:06 | X01 | **MN**: Rồi cái thứ hai. Cái thứ mười. Hai trăm cái máy may đồng loạt chạy rầm rập! Đèn kim rực sáng dù không hề có điện. | maymay_day · sang |
| 1:13 | X08 | **MN**: Bàn đạp sắt dập thình thịch. Dưới gầm máy… không có chân ai. | "KHÔNG CÓ CHÂN AI" · bassdown |
| 1:18 | X09 | **MN**: Sáng ra, ông Phú thò tay lấy chìa khóa xe. Không đút vào được. Túi quần, túi áo, ví da bị khâu kín mít bằng chỉ trắng. | "KHÂU KÍN TÚI" |
| 1:25 | X04 | **PHU**: Đứa nào chơi xỏ tao? Cắt hết cho tao! Đứa nào khâu tao đuổi việc! | keocat |
| 1:29 | X09 | **MN**: Cắt xong, đêm sau chỉ mọc dày gấp đôi. Ông Phú tức tối mua cả tủ vest mới toanh ở trung tâm thương mại. | "MUA ĐỒ MỚI" |
| 1:35 | X04 | **PHU**: Hàng hiệu tiền triệu, thợ ma nào khâu nổi! | chotdon |
| 1:38 | X09 | **MN**: Nhưng vừa mặc vào, mọi miệng túi dính chặt. Khuy áo sơ mi tự khâu chết vào nẹp, không cởi ra được. | "KHUY ÁO KHÂU CHẾT" · siet |
| 1:44 | X10 | **MN**: Suốt ba ngày, ông Phú như kẻ điên. Cầm ví như cầm cục gạch, điện thoại kẹp nách, mặc nguyên bộ vest bốc mùi hôi hám. | "CẦM VÍ NHƯ CẦM GẠCH" |
| 1:51 | X10 | **PHU**: Mở ra! Chúng mày mở túi ra cho tao lấy thẻ trả tiền! | hoangloan |
| 1:55 | X07 | **TU**: Tiền trong túi anh là cơm của hai trăm thợ. Anh không nhả, cái áo này sẽ thành vải bọc anh. | eecho · rợn |
| 2:01 | X03 | **MN**: Bảy giờ sáng thứ Hai. Còn hai tiếng nữa tới giờ ký. Hai trăm công nhân thu dọn đồ ra về. Hợp đồng triệu đô sắp hủy, xe sang sắp bị ngân hàng siết. | "7:00 THỨ HAI · CÒN 2 GIỜ" · tick |
| 2:09 | X04 | **PHU**: Còn hai tiếng… Tôi mất trắng thật sao? | run |
| 2:12 | X04 | **MN**: Ông Phú lấy dao rạch áo thì đường chỉ siết nghẹt cổ họng. Ông ta hiểu ra: chỉ còn một đường sống. | daorach · sietco |
| 2:18 | X03 | **PHU**: Bán xe! Bán ngay cho showroom bên cạnh, lấy tiền mặt lập tức! | "BÁN XE TRẢ LƯƠNG" · het |
| 2:22 | X03 | **MN**: Tám giờ rưỡi. Hai trăm cọc tiền mặt được chia vào hai trăm phong bì, trao tận tay công nhân. | tienmat · xonxao |
| 2:27 | X05 | **NGA**: Lần đầu thấy ông chủ trả lương mà mặt cắt không còn giọt máu! | cuoi |
| 2:31 | X09 | **MN**: Phong bì cuối cùng vừa rời tay, rột xoạt một tiếng, toàn bộ đường chỉ trên người ông Phú tự động tuột sạch xuống đất. | "CHỈ TỰ TUỘT" · sột soạt |
| 2:37 | X02 | **MN**: Góc xưởng, chiếc máy may cũ đứng im. Thước dây buông thõng. | im |
| 2:41 | S33 | **MN**: Ký được hợp đồng, nhưng từ đó ông Phú đi làm chỉ dám mặc áo cộc tay không túi. | hutdieu |
| 2:46 | S34 | **MN**: Thứ Hai: khu đô thị lấp hồ điều hòa làm biệt thự, mưa là ngập. Dưới đáy hồ cũ có một bà… quản nước. | "TẬP SAU · THỨ HAI" · whoosh |
| 2:52 | S06 | **MN**: Bấm đăng ký đi. Không thì sáng mai thức dậy, có người khâu kín túi quần mày đấy. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Hồ sơ ma xưởng may. Quỵt lương công nhân, coi chừng đêm có người khâu túi. (X01) · pop "MA XƯỞNG MAY"
- **MN**: Một. Xưởng nợ lương hai trăm thợ ba tháng, nhưng ông chủ vừa tậu xe sang. (X03) · pop "NỢ 3 THÁNG · ĐỔI XE MỚI"
- **MN**: Hai. Cầu dao tắt tối om, hai trăm máy may bỗng tự chạy rầm rập giữa đêm. (X01) · pop "200 MÁY TỰ CHẠY"
- **MN**: Ba. Sáng ra mọi cái túi trên người ông chủ đều bị khâu kín mít, ví không mở được. (X09) · pop "KHÂU KÍN TÚI"
- **TU**: Tiền trong túi anh là cơm của thợ. Anh không nhả, cái áo này sẽ thành vải bọc anh. (X07) · pop "CÔ TƯ"
- **MN**: Cắt chỉ thì chỉ mọc dày thêm. Muốn cởi áo, phải bán xe. (X04) · pop "BÁN XE TRẢ LƯƠNG"
- *(lặng 0.8 s)*
- **MN**: Ông chủ chịu nhả tiền thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **PHU**: Khó khăn chung! Đối tác chưa trả, anh em ráng nhịn! Công ty là nhà! (X04) · pop "CÔNG TY LÀ NHÀ"
- **MN**: Miệng hô khó khăn chung, nhưng tuần trước ông chủ vừa xuống tiền tậu Mẹc mới. (X03) · pop "TẬU XE MỚI"
- **NGA**: Nhà gì mà ông chủ tậu xe sang, công nhân ăn mì tôm ba tháng? (X05) · pop "ĂN MÌ TÔM 3 THÁNG"
- **MN**: Đối tác thực ra trả đủ từng xu. Tiền lương của thợ nằm hết trong bốn cái bánh xe. (X03) · pop "TIỀN NẰM TRONG XE"
- **MN**: Đến nửa đêm, góc xưởng có tiếng đạp máy may cũ vang lên đòi nợ. (X02) · pop "CÔ TƯ ĐÒI NỢ"
- *(lặng 0.8 s)*
- **MN**: Quỵt lương thợ may thì cái giá phải trả đắt thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **MN**: Góc xưởng có cái máy may đạp chân cũ kỹ không ai dám đụng vào. (X02) · pop "CHIẾC MÁY MAY CŨ"
- **MN**: Ba mươi năm trước, cô Tư bị quỵt lương cả năm rồi mất trên đường đi đòi. (X06) · pop "CÔ TƯ · 30 NĂM CHỜ ĐÒI"
- **MN**: Hồn cô ở lại với cái máy may, chờ người ta trả cho những người thợ giống mình. (X07)
- **TU**: Hai trăm đứa… giống hệt tổ tôi năm ấy. Giữ tiền mồ hôi của người ta thì cái túi anh không được đựng gì hết. (X07) · pop "CÔ TƯ"
- **MN**: Đêm ấy, cô Tư khâu sạch mọi cái túi trong tủ đồ của ông chủ. (X09) · pop "KHÂU TỦ ĐỒ"
- *(lặng 0.8 s)*
- **MN**: Đòn trừng phạt của cô thợ may già kết thúc ra sao? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Sáng dậy thò tay lấy chìa khóa xe, ông chủ tá hỏa thấy miệng túi quần bị khâu kín mít. (X09) · pop "TÚI BỊ KHÂU KÍN"
- **PHU**: Đứa nào chơi xỏ tao? Cắt hết cho tao! Đứa nào khâu tao đuổi việc! (X04) · pop "LẤY KÉO CẮT"
- **MN**: Cắt xong, đêm sau chỉ mọc dày gấp đôi, khâu luôn cả khuy áo sơ mi vào nẹp. (X09) · pop "KHÂU CHẾT KHUY ÁO"
- **MN**: Đi ăn nhà hàng sang trọng, cầm ví như cầm cục gạch vì không thể mở khóa kéo. (X10) · pop "VÍ KHÔNG MỞ ĐƯỢC"
- **MN**: Ba ngày mặc nguyên bộ vest bốc mùi hôi hám, ông chủ biến thành trò cười. (X10)
- *(lặng 0.8 s)*
- **MN**: Đến khi nào chiếc túi mới chịu mở ra? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Đúng chín giờ sáng thứ Hai là hạn chót ký hợp đồng xuất khẩu triệu đô. (X03) · pop "HẠN: 9:00 THỨ HAI"
- **MN**: Bảy giờ sáng, công nhân bãi công dọn đồ ra về, ông chủ vẫn bị khâu chết trong bộ vest hôi rình. (X10) · pop "CÒN 2 TIẾNG"
- **PHU**: Còn hai tiếng… Tôi mất trắng thật sao? (X04) · pop "SẮP MẤT TRẮNG"
- **MN**: Lấy dao rạch áo thì đường chỉ siết nghẹt cổ. Chỉ còn một nước liều duy nhất. (X04)
- **PHU**: Bán xe! Bán ngay cho showroom bên cạnh, lấy tiền mặt lập tức! (X03) · pop "BÁN XE TRẢ LƯƠNG"
- **MN**: Tiền vừa trao tay thợ, mọi đường chỉ rùng mình tuột sạch xuống đất. (X09) · pop "CHỈ TỰ TUỘT"
- *(lặng 0.8 s)*
- **MN**: Màn giải cứu xưởng may ngoạn mục thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 (TRAILER)
- **MN**: Hai giờ sáng. Cầu dao xưởng may ngắt hoàn toàn. Tối om như mực. (X01) · pop "2:00 SÁNG · CẮT CẦU DAO"
- *(không lời, 1.5 s)* (X02) · tạch… tạch… tạch
- **MN**: Chiếc máy may cũ ở góc xưởng bỗng tự rùng mình hoạt động. (X02) · pop "MÁY TỰ CHẠY"
- **MN**: Rồi cả hai trăm chiếc máy may công nghiệp đồng loạt chạy rầm rập! Đèn kim rực sáng dù không có điện. (X01) · pop "200 MÁY MAY RẦM RẬP"
- **MN**: Bàn đạp sắt dập thình thịch lên xuống. Dưới gầm máy… tuyệt nhiên không có chân ai. (X08) · pop "KHÔNG CÓ CHÂN AI"
- **MN**: Ai đang ngồi may trong bóng tối và họ đang may thứ gì? Bản đầy đủ, link dưới. (S26)

### SH7 (TRAILER)
- **MN**: Còn đúng hai tiếng nữa là đến giờ ký hợp đồng cứu sống xưởng may. (X03) · pop "HẠN KÝ: CÒN 2 TIẾNG"
- **MN**: Toàn bộ túi quần, ví tiền bị khâu kín. Khuy áo sơ mi bị khâu chết cứng vào da thịt. (X09) · pop "KHÂU CHẾT KHUY ÁO"
- **MN**: Ông Phú lấy dao rạch vải thì đường chỉ siết nghẹt cổ họng không thở nổi. (X04) · pop "CHỈ SIẾT CỔ"
- **TU**: Tiền trong túi anh là cơm của hai trăm thợ. Anh không nhả, cái áo này sẽ thành vải bọc anh. (X07) · pop "CÔ TƯ"
- **MN**: Hai trăm công nhân đang bước chân ra khỏi cổng xưởng. Giữ xe sang hay giữ mạng sống? Bản đầy đủ, link dưới. (S26)

## Hình
Tái sử dụng: B02 + ep01 S01/S26/S33/S34/S06 (Ma Nó).

### Danh sách ảnh v2 và trạng thái dùng v3:
| Mã | Cảnh | Dùng v3 |
|---|---|---|
| X01 | Xưởng may công nghiệp tối om, hai trăm máy may xếp hàng; bản máy chạy đồng loạt, đèn nhỏ dưới mỗi máy sáng | Có (LONG, SH1, SH6) |
| X02 | Góc xưởng: cái máy may đạp chân cũ phủ khăn, thước dây vắt trên | Có (LONG, SH2, SH3, SH6) |
| X03 | Sân xưởng: hai trăm công nhân đồng phục, ông Phú trên bậc, xe sang mới phía sau; bản phát phong bì lương | Có (LONG, SH1, SH2, SH5, SH7) |
| X04 | Ông Phú cận: vest mỏng, chìa khóa xe sang; bản cầm kéo cắt chỉ | Có (LONG, SH1, SH2, SH4, SH5, SH7) |
| X05 | Chị Ngà cận: tổ trưởng, áo đồng phục, khăn trùm tóc; bản cầm phong bì | Có (LONG, SH2) |
| X06 | Ảnh màu cũ thập niên 90: tổ may, cô Tư kính lão, thước dây vắt cổ, cười | Có (LONG, SH3) |
| X07 | Cô Tư mờ: áo bà ba xanh, kính lão, thước dây vắt cổ, kim gài ngực áo, ngồi bên máy may cũ | Có (LONG, SH1, SH3, SH7) |
| X08 | Cực cận bàn đạp máy may công nghiệp nhấp nhô, không có chân | Có (LONG, SH6) |
| X09 | Cận túi quần âu bị khâu kín miệng bằng chỉ trắng; bản khuy áo khâu chết; bản chỉ tự tuột | Có (LONG, SH1, SH4, SH5, SH7) |
| X10 | Nhà hàng sang: ông Phú cầm ví không mở được, thẻ trên tay, điện thoại kẹp nách, vest nhàu | Có (LONG, SH4, SH5) |

*(Đủ 10/10 ảnh của v2, không thêm mã mới).*

## Lịch
- **LONG**: Thứ Năm 01/07 18:00 (+07).
- **SH1** (TRỌN): Thứ Năm 01/07 19:00 (+07).
- **SH2** (TRỌN): Thứ Sáu 02/07 11:30 (+07).
- **SH3** (TRỌN): Thứ Sáu 02/07 19:00 (+07).
- **SH4** (TRỌN): Thứ Bảy 03/07 11:30 (+07).
- **SH5** (TRỌN): Thứ Bảy 03/07 19:00 (+07).
- **SH6** (TRAILER): Chủ Nhật 04/07 11:30 (+07).
- **SH7** (TRAILER): Chủ Nhật 04/07 19:00 (+07).
*(Tập sau P65 ra mắt Thứ Hai 05/07 18:00).*
