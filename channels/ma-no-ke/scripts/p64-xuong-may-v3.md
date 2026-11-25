# Dự án 64 — Ma xưởng may "Khâu kín túi" (v3, 2026-11-24)

v3 nâng cấp kịch tính theo bài học P04:
- **Đồng hồ + cái giá cụ thể**: Hạn chót 9 giờ sáng thứ Hai — giờ ký hợp đồng xuất khẩu triệu đô quyết định sống còn của xưởng. Nếu trượt: công nhân bãi công giải tán, đối tác hủy hợp đồng, xe sang bị ngân hàng siết nợ; về phía cô Tư: thợ bỏ xưởng thì món nợ mồ hôi vĩnh viễn không bao giờ đòi lại được.
- **3 nấc leo thang chủ động**: (1) Dùng kéo cắt chỉ và dọa đuổi việc → đêm sau chỉ mọc dày gấp đôi; (2) Mua cả tủ vest mới toanh thay thế → vừa mặc vào túi tự dính chặt, khuy áo tự khâu chết vào nẹp; (3) Cầm dao rạch áo thì đường chỉ siết nghẹt cổ, cùng đường trước giờ ký hợp đồng.
- **Điểm thấp nhất**: 7 giờ sáng thứ Hai (còn 2 tiếng), ông Phú bốc mùi sau 3 ngày mặc nguyên bộ vest bó chặt, ví không mở được để lấy tiền cọc, thợ dọn đồ rời xưởng.
- **Cú lật do nhân vật chọn và trả giá**: Không tự thức tỉnh; ông Phú buộc phải bán tháo xe sang ngay trong 30 phút lấy tiền mặt phát đủ 3 tháng lương tận tay công nhân để giải thoát cho chính mình trước giờ đối tác tới.
- **Khuôn mẫu chuẩn**: Rút gọn lời thoại xuống 580 chữ (≈3:00), chia bảng theo cảnh chuẩn P04 v4, đủ 5 short TRỌN có PUNCH riêng + 2 short TRAILER.

## Xương sống kịch tính
- **Câu hỏi trung tâm**: Liệu ông chủ xưởng nợ lương có chịu nhả tiền mồ hôi của hai trăm thợ trước 9 giờ sáng thứ Hai khi mọi chiếc túi và khuy áo đều bị ma khâu chết?
- **Đồng hồ / Cái giá**: 9:00 sáng thứ Hai (ký hợp đồng xuất khẩu triệu đô). Trượt: xưởng vỡ nợ, xe bị siết, 200 gia đình mất trắng tiền lương.
- **3 nấc leo thang**:
  1. Cắt chỉ bằng kéo, dọa đuổi việc thợ → Đêm sau đường chỉ khâu kín cả ví, thẻ, túi xách.
  2. Mua tủ vest mới toanh thay thế → Vừa xỏ vào, túi dính tịt, khuy áo tự khâu chết vào nẹp không cởi ra được.
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

## LONG (580 chữ thoại, ≈3:00)
| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | X01 | *(không lời, 2.5 s)* | "2:00 SÁNG" · im |
| 0:02 | X02 | *(không lời, 1.5 s)* | tạch… tạch… tạch |
| 0:04 | X02 | **MN**: Đêm ở xưởng may, sợ nhất không phải trộm. Sợ nhất là nghe tiếng máy may tự chạy. | coc |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Đi làm bị nợ lương chưa? Sếp nợ ba tháng mà tuần nào cũng đổi xe mới? | "NỢ 3 THÁNG" · coc · braam |
| 0:15 | S34 | **MN**: Có ông chủ nợ dai như thế. Và có cô thợ may… quyết định khâu túi ông lại. | whoosh |
| 0:20 | X03 | **MN**: Ông Phú, chủ xưởng may hai trăm thợ, nợ lương ba tháng ròng. | "200 CÔNG NHÂN" · xonxao |
| 0:24 | X04 | **PHU**: Khó khăn chung! Đối tác chưa trả, anh em ráng nhịn! Công ty là nhà! | "CÔNG TY LÀ NHÀ" |
| 0:28 | X05 | **NGA**: Nhà gì mà ông chủ tậu xe sang, công nhân ăn mì tôm ba tháng? | bipbip |
| 0:32 | X03 | **MN**: Chín giờ sáng thứ Hai là hạn ký hợp đồng. Thợ dọa bãi công, nhưng ông Phú mặc kệ, tiền cọc đã nằm trong chiếc xe mới. | "HẠN: 9:00 THỨ HAI" · tick |
| 0:40 | X02 | **MN**: Góc xưởng có cái máy may đạp chân cũ thời bao cấp. Của cô Tư. | "CÔ TƯ · MÁY MAY CŨ" |
| 0:44 | X06 | **MN**: Ba mươi năm trước, cô bị quỵt lương cả năm rồi mất trên đường đi đòi. Hồn cô ở lại xưởng. | "30 NĂM CHỜ TRẢ" |
| 0:50 | X07 | **TU**: Hai trăm đứa… giống hệt tổ tôi năm ấy. Giữ tiền mồ hôi người ta thì cái túi anh không được đựng gì hết. | eecho |
| 0:57 | X01 | **MN**: Hai giờ sáng. Cầu dao ngắt, xưởng tối om. | cauda · nhactat |
| 1:00 | X02 | *(không lời, 2.0 s)* | tạch… tạch… tạch |
| 1:02 | X02 | **MN**: Cái máy may góc xưởng bỗng rùng mình. Tạch… tạch… tạch. | tachtach |
| 1:05 | X01 | **MN**: Rồi cái thứ hai. Cái thứ mười. Hai trăm cái máy may đồng loạt chạy rầm rập, đèn kim rực sáng dù không có điện. | maymay_day · sang |
| 1:12 | X08 | **MN**: Bàn đạp sắt dập thình thịch. Dưới gầm máy… không có chân ai. | "KHÔNG CÓ CHÂN AI" · bassdown |
| 1:16 | X09 | **MN**: Sáng ra, ông Phú thò tay lấy chìa khóa xe. Không đút vào được. Túi quần, túi áo, ví da bị khâu kín mít. | "KHÂU KÍN TÚI" |
| 1:22 | X04 | **PHU**: Đứa nào chơi xỏ tao? Cắt hết cho tao! Đứa nào khâu tao đuổi việc! | keocat |
| 1:26 | X09 | **MN**: Cắt xong, đêm sau chỉ mọc dày gấp đôi. Ông Phú tức tối mua cả tủ vest mới toanh thay thế. | "MUA ĐỒ MỚI" |
| 1:32 | X04 | **PHU**: Hàng hiệu tiền triệu, thợ ma nào khâu nổi! | chotdon |
| 1:35 | X09 | **MN**: Vừa mặc vào, mọi miệng túi dính chặt. Khuy áo sơ mi tự khâu chết vào nẹp, không cởi ra được. | "KHUY ÁO KHÂU CHẾT" · siet |
| 1:41 | X10 | **MN**: Ba ngày liền, ông Phú như phát điên. Cầm ví như cầm gạch, điện thoại kẹp nách, mặc nguyên bộ vest bốc mùi. | "CẦM VÍ NHƯ CẦM GẠCH" |
| 1:47 | X10 | **PHU**: Mở ra! Chúng mày mở túi ra cho tao lấy thẻ trả tiền! | hoangloan |
| 1:51 | X07 | **TU**: Tiền trong túi anh là cơm của hai trăm thợ. Anh không nhả, cái áo này sẽ thành vải bọc anh. | eecho · rợn |
| 1:57 | X03 | **MN**: Bảy giờ sáng thứ Hai, còn hai tiếng tới giờ ký. Thợ dọn đồ ra về. Hợp đồng triệu đô sắp hủy, xe sang sắp bị siết. | "7:00 THỨ HAI · CÒN 2 GIỜ" · tick |
| 2:05 | X04 | **PHU**: Còn hai tiếng… Tôi mất trắng thật sao? | run |
| 2:08 | X04 | **MN**: Lấy dao rạch áo thì đường chỉ siết nghẹt cổ họng. Ông ta hiểu ra: chỉ còn một đường sống. | daorach · sietco |
| 2:13 | X03 | **PHU**: Bán xe! Bán ngay cho showroom bên cạnh, lấy tiền mặt lập tức! | "BÁN XE TRẢ LƯƠNG" · het |
| 2:17 | X03 | **MN**: Tám rưỡi sáng. Tiền mặt chia đủ hai trăm phong bì, trao tận tay công nhân. | tienmat · xonxao |
| 2:22 | X05 | **NGA**: Lần đầu thấy ông chủ trả lương mà mặt cắt không còn giọt máu! | cuoi |
| 2:26 | X09 | **MN**: Phong bì cuối vừa rời tay, rột xoạt một tiếng, toàn bộ đường chỉ trên người ông Phú tự tuột sạch xuống đất. | "CHỈ TỰ TUỘT" · sột soạt |
| 2:32 | X02 | **MN**: Góc xưởng, chiếc máy may cũ đứng im. Thước dây buông thõng. | im |
| 2:36 | S33 | **MN**: Ký được hợp đồng, nhưng từ đó ông Phú chỉ dám mặc áo cộc tay không túi. | hutdieu |
| 2:41 | S34 | **MN**: Tập sau: khu đô thị lấp hồ điều hòa làm biệt thự, mưa là ngập. Dưới đáy hồ cũ có một bà… quản nước. | "TẬP SAU" · whoosh |
| 2:48 | S06 | **MN**: Bấm đăng ký đi. Không thì sáng mai thức dậy, có người khâu kín túi quần mày đấy. | "ĐĂNG KÝ" · coc |

## SHORTS
### SH1 (TRỌN)
- **MN**: Hồ sơ ma xưởng may. Quỵt lương thợ, coi chừng đêm có người khâu túi. (X01) · pop "MA XƯỞNG MAY"
- **MN**: Xưởng nợ lương ba tháng, nhưng ông chủ vừa tậu xe sang. (X03) · pop "NỢ LƯƠNG · TẬU XE"
- **MN**: Hai giờ sáng tắt cầu dao, hai trăm máy may bỗng tự chạy rầm rập. (X01) · pop "200 MÁY TỰ CHẠY"
- **MN**: Sáng ra, toàn bộ túi quần, ví da của ông chủ bị khâu kín mít. (X09) · pop "KHÂU KÍN TÚI"
- **TU**: Tiền trong túi anh là cơm của thợ. Anh không nhả, áo này thành vải bọc anh. (X07) · pop "CÔ TƯ"
- **MN**: Quỵt lương mua Mẹc làm gì, để giờ đi đái cũng không mở được khóa quần! (X04) · pop "ĐI ĐÁI KHÔNG XONG"
- *(lặng 0.8 s)*
- **MN**: Ông chủ chịu nhả tiền thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 (TRỌN)
- **PHU**: Khó khăn chung! Đối tác chưa trả, anh em ráng nhịn! Công ty là nhà! (X04) · pop "CÔNG TY LÀ NHÀ"
- **MN**: Miệng hô khó khăn chung, nhưng tuần trước ông chủ vừa tậu xe sang tiền tỉ. (X03) · pop "TẬU XE SANG"
- **NGA**: Nhà gì mà ông chủ đi xe sang, công nhân ăn mì tôm ba tháng? (X05) · pop "ĂN MÌ TÔM 3 THÁNG"
- **MN**: Nửa đêm, cái máy may cũ của cô Tư bỗng rùng mình đòi nợ. (X02) · pop "CÔ TƯ"
- **MN**: Coi công ty là nhà, nên cô Tư quyết định khâu mồm túi của người nhà lại! (X09) · pop "KHÂU KÍN TÚI"
- *(lặng 0.8 s)*
- **MN**: Cái giá phải trả đắt thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 (TRỌN)
- **MN**: Góc xưởng có cái máy may cũ kỹ không ai dám đụng vào. (X02) · pop "MÁY MAY CŨ"
- **MN**: Ba mươi năm trước, cô Tư bị quỵt lương rồi mất trên đường đi đòi. (X06) · pop "CÔ TƯ"
- **MN**: Hồn cô ở lại canh xưởng, chờ ngày tính sổ với kẻ quỵt tiền thợ. (X07)
- **TU**: Hai trăm đứa giống hệt tôi năm ấy. Giữ tiền mồ hôi người ta thì túi anh đừng hòng đựng gì! (X07)
- **MN**: Nợ lương ai thì nợ, nợ thợ may là xác định khâu kín cả túi lẫn đường thở! (X09) · pop "KHÂU KÍN ĐƯỜNG THỞ"
- *(lặng 0.8 s)*
- **MN**: Đòn trừng phạt kết thúc ra sao? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 (TRỌN)
- **MN**: Sáng dậy lấy chìa khóa xe, ông chủ tá hỏa thấy túi quần bị khâu kín mít. (X09) · pop "KHÂU KÍN TÚI"
- **PHU**: Đứa nào chơi xỏ tao? Cắt hết cho tao! Đứa nào khâu tao đuổi việc! (X04) · pop "CẮT CHỈ"
- **MN**: Cắt xong, đêm sau chỉ mọc dày gấp đôi. Mua tủ vest mới thì khuy áo tự khâu chết vào nẹp. (X09) · pop "KHUY ÁO KHÂU CHẾT"
- **MN**: Đi ăn nhà hàng, cầm ví như cầm gạch vì cô Tư đã may kín khóa kéo. (X10) · pop "CÔ TƯ"
- **MN**: Đúng là giàu nứt đố đổ vách, mà ba ngày không cởi nổi cái quần để đi tắm! (X10) · pop "3 NGÀY KHÔNG TẮM"
- *(lặng 0.8 s)*
- **MN**: Đến khi nào chiếc túi mới mở ra? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 (TRỌN)
- **MN**: Chín giờ sáng thứ Hai là hạn ký hợp đồng xuất khẩu triệu đô. (X03) · pop "HẠN: 9:00 THỨ HAI"
- **MN**: Bảy giờ sáng, thợ bãi công ra về, ông chủ vẫn bị cô Tư khâu chết trong bộ vest bốc mùi. (X10) · pop "CÔ TƯ"
- **PHU**: Còn hai tiếng… Tôi mất trắng thật sao? (X04) · pop "SẮP MẤT TRẮNG"
- **MN**: Lấy dao rạch áo thì chỉ siết nghẹt cổ. Cùng đường, ông chủ đành hét lên. (X04)
- **PHU**: Bán xe! Bán ngay cho showroom bên cạnh, lấy tiền mặt trả lương! (X03) · pop "BÁN XE TRẢ LƯƠNG"
- **MN**: Tiền vừa trao tay thợ thì chỉ tuột sạch. Hóa ra khóa kéo xịn nhất chính là tiền lương sòng phẳng! (X09) · pop "CHỈ TỰ TUỘT"
- *(lặng 0.8 s)*
- **MN**: Màn nhả tiền ngoạn mục thế nào? Tao kể ở bản đầy đủ, link dưới. (S26)

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
