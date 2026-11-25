# Dự án 47 — Chợ âm “Cân cái bóng” (v3, 2026-11-24)

- Thêm hạn chót: chợ tan lúc gà gáy; ông Bá phải đổi được tuổi thọ trước khi chợ đóng.
- Leo thang ba lần: đưa tiền, làm từ thiện trước máy ảnh, rồi âm thầm giúp người mà không để lại tên.
- Cú lật đến từ lựa chọn cuối của ông Bá: bỏ quyền được ghi công để đổi một năm.
- Giữ khoảnh khắc rợn véo bóng và tiếng cân; bỏ lời Ma Nó gợi trước đáp án.
- Kết châm biếm bằng ông Bá tự nhận ra ba mươi năm qua mình mua báo; teaser đúng tập sau P48 vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ông Bá có đổi được tuổi thọ ở chợ âm trước khi gà gáy, khi chợ chỉ nhận phúc chứ không nhận tiền?
- **Đồng hồ / cái giá:** Chợ đóng lúc gà gáy; nếu trượt, ông Bá không mua được năm nào và bà bán thọ mất một đêm buôn bán.
- **Ba nấc leo thang:** Ông Bá chìa tiền → bị từ chối; khoe từ thiện có máy ảnh → cân không nhúc nhích; lặng lẽ giúp người không ghi tên → cân nhích.
- **Điểm thấp:** Trời sắp sáng, cân vẫn đứng; ông Bá nhìn cái bóng mỏng đi và hiểu tiền không mua nổi một năm.
- **Cú lật:** Ông Bá tự chọn bỏ tên mình khỏi việc tốt, trả giá bằng cách không được ai ghi nhận; đổi được một năm.
- **Khoảnh khắc rợn:** Bà bán thọ véo lớp bóng như lụa, bóng ông Bá nhạt đi và mép sờn; tiếng cân khẽ “tách”.
- **Câu kết:** Ông Bá hiểu ba mươi năm làm từ thiện, mình đã mua báo; Ma Nó chốt rằng cái bóng thì phóng viên không chụp được.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34, S06 | Thiện Minh | atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25 |
| BA | Ông Bá, chủ chuỗi nhà máy | C04, C05 | Adam bựa | atempo=0.95 |
| BAN | Bà bán thọ | C09 | Ngọc Huyền | atempo=0.80,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.6:80:0.3 |
| MUOI | Chú Mười, tài xế | C08 | Thiền Tâm Đức | anull |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"BA":{"preset":"Adam bựa","fx":"atempo=0.95"},"BAN":{"preset":"Ngọc Huyền","fx":"atempo=0.80,asetrate=48000*0.96,aresample=48000,aecho=0.8:0.6:80:0.3"},"MUOI":{"preset":"Thiền Tâm Đức","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | C01 | **MN**: Chợ này không có trên bản đồ. Đêm nào cũng mở, nhưng người sống muốn mua gì… phải trả lời được cái cân. | Rì rầm chợ âm · đèn dầu xì |
| 0:08 | C02 → C03 | *(không lời, 2 s)* | Cân “tách” · mõ CỘC nhẹ |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Có tiền chưa chắc mua được thời gian. Hôm nay, một ông chủ giàu nhất tỉnh đem cả gia tài đến chợ. | Mõ CỘC |
| 0:20 | C04 | **MN**: Ông Bá bảy mươi tuổi, chủ chuỗi nhà máy. Tủ kính có sâm, đông trùng, thuốc trường thọ đủ nước. Thiếu mỗi thứ không đóng chai được: thời gian. | “THIẾU THỜI GIAN” |
| 0:30 | C05 | **BA**: Tiền tôi có. Tôi chỉ thiếu thời gian. Ở đâu bán thời gian, tôi mua. | |
| 0:36 | C06 → C07 | **MN**: Một ông cò chỉ đường ra bãi đất đầu làng. Chợ âm họp nửa đêm, tan lúc gà gáy. Muốn mua bán, theo luật chợ. | Xe đỗ · rì rầm |
| 0:47 | C07 | **MUOI**: Ông ơi, chỗ này lạ lắm. Con đứng đây chờ ông. | |
| 0:52 | C01 → C09 | **MN**: Sạp cuối chợ chỉ có bà đội nón và cái cân đồng. Không bảng giá, không quẹt thẻ. Kế toán chợ âm làm việc bằng tay. | “CHỢ ÂM · LUẬT CHỢ” |
| 1:02 | C05 | **BA**: Bà bán tuổi thọ? Tôi mua ba mươi năm. Bao nhiêu tiền cũng được. | |
| 1:08 | C09 | **BAN**: Chợ này không nhận tiền. Chợ này nhận phúc. Trước gà gáy, cân đủ thì đổi. Không đủ, chợ đóng. | Gà gáy xa |
| 1:18 | C05 | **BA**: Tôi xây ba trường học, ủng hộ lũ lụt mười tỷ. Cứ cân đi. | |
| 1:24 | C03 → C10 | **MN**: Bà cúi xuống, không chạm vào ông Bá. Hai ngón tay véo cái bóng trên mặt đất, nhấc lên lớp mỏng như lụa đen. | Nhạc tắt |
| 1:34 | C02 → C10 | **MN**: Bóng ông nhạt đi một chút. Mép sờn như vải cũ. Kim cân nhích khẽ. | Im · cân “tách” |
| 1:42 | C09 | **BAN**: Phúc ông nặng ba ngày. | |
| 1:46 | C05 | **BA**: Ba ngày? Tôi đã giúp cả tỉnh! | |
| 1:50 | C09 | **BAN**: Ông giúp, ai biết? | |
| 1:53 | C05 | **BA**: Cả tỉnh biết! Báo nào cũng đăng! | |
| 1:58 | C09 | **BAN**: Thế thì ông được trả rồi. Bằng báo. | |
| 2:02 | C08 | **MN**: Chú Mười bước vào, đưa áo khoác cho ông chủ. Bà cân cái bóng chú. Kim nhảy vọt. | Cân “tách” mạnh |
| 2:11 | C08 | **MUOI**: Con chỉ hay chở bà con trong xóm đi viện, không lấy tiền. | |
| 2:17 | S26 | **MN**: Chú Mười chẳng đi tìm tuổi thọ. Chú chỉ sợ ông chủ lạnh. Vậy mà cân của chú nặng hơn cả tủ thuốc. | “TÀI XẾ > ÔNG CHỦ” |
| 2:27 | C11 | **MN**: Ông Bá về làm từ thiện ngay. Phóng viên đến trước, phong bì theo sau. Băng rôn đủ lớn để che mất cái cân. | Máy ảnh chụp liên tục |
| 2:38 | C02 → C09 | **BA**: Cân lại. Lần này tôi ủng hộ gấp đôi. | |
| 2:42 | C02 | **MN**: Đêm sau, bà đặt lớp bóng lên cân. Kim đứng im. | Cân im |
| 2:48 | C09 | **BAN**: Phúc có máy ảnh thì không nặng. Báo trả hết rồi. | |
| 2:54 | C05 | **MN**: Ông Bá nhìn ra bãi đất. Trời sắp sáng. Bóng dưới chân mỏng đi, cân vẫn trống. Lần đầu, ông không biết phải mua gì. | Nhạc tắt · gió đồng |
| 3:05 | C12 | **MN**: Ông quay về. Một bao gạo trước cửa nhà đang cần. Ông đặt xuống, trả tiền viện phí giúp người hàng xóm, rồi đi. Không gọi ai. Không để tên. | Gió đồng |
| 3:18 | C02 | **MN**: Một năm sau, ông trở lại. Bà cân cái bóng. Kim nhích một đoạn. | Cân “tách” |
| 3:26 | C09 | **BAN**: Một năm. Ba trường học, mười tỷ, được ba ngày. Bao gạo không tên, được một năm. | |
| 3:34 | C05 | **BA**: Ba mươi năm làm từ thiện… hóa ra tôi mua báo. | Gà gáy xa |
| 3:42 | S33 → S34 | **MN**: Chợ âm không cân tiền, cũng không cân ảnh. Cân cái bóng. Mà cái bóng thì phóng viên không chụp được. | Rít điếu cày |
| 3:51 | B02 → S26 | **MN**: Thứ Năm, đoàn kiểm toán cõi âm gõ cửa nóc tủ thờ nhà tao. Lập biên bản: kể chuyện cõi âm cho người sống nghe. Chúng mày làm chứng cho tao nhé. | “TẬP CUỐI MÙA · THỨ NĂM” |
| 4:01 | S06 | **MN**: Bấm đăng ký đi. Lần này có biên bản, đừng bảo không ai báo trước. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN · Chợ không có trên bản đồ · 9:16

- **MN**: Chợ này không có trên bản đồ. Đêm nào cũng mở, nhưng người sống muốn mua gì… phải trả lời được cái cân. (C01)
- **MN**: Ông Bá giàu nhất tỉnh, đem tiền đến mua ba mươi năm tuổi thọ. (C04) · pop “ÔNG BÁ”
- **BA**: Bao nhiêu tiền cũng được. (C05)
- **BAN**: Chợ này không nhận tiền. Chợ này nhận phúc. (C09)
- **MN**: Chợ âm không cân tiền. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH2 — TRỌN · Phúc nặng ba ngày · 9:16

- **BA**: Tôi xây ba trường học, ủng hộ lũ lụt mười tỷ. Cứ cân đi. (C05)
- **MN**: Bà véo một lớp bóng như lụa đen, đặt lên cân. (C03)
- **BAN**: Phúc ông nặng ba ngày. (C09)
- **BA**: Ba ngày? Tôi đã giúp cả tỉnh! (C05)
- **BAN**: Thế thì ông được trả rồi. Bằng báo. (C09)
- **MN**: Mười tỷ đổi được ba ngày. Tao kể ở bản đầy đủ, link dưới. (S26)

### SH3 — TRỌN · Chú Mười nặng phúc · 9:16

- **MN**: Chú Mười bước vào, đưa áo khoác cho ông chủ. Bà cân cái bóng chú. Kim nhảy vọt. (C08)
- **MUOI**: Con chỉ hay chở bà con trong xóm đi viện, không lấy tiền. (C08) · pop “CHÚ MƯỜI”
- **MN**: Chú chẳng đi tìm tuổi thọ. Chú chỉ sợ ông chủ lạnh. (S26)
- **BAN**: Chợ này nhận phúc. (C09)
- **MN**: Cái cân chọn ai? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH4 — TRỌN · Phúc có máy ảnh · 9:16

- **MN**: Ông Bá về làm từ thiện ngay. Phóng viên đến trước, phong bì theo sau. (C11) · pop “ÔNG BÁ”
- **BA**: Cân lại. Lần này tôi ủng hộ gấp đôi. (C05)
- **MN**: Đêm sau, kim đứng im. (C02)
- **BAN**: Phúc có máy ảnh thì không nặng. Báo trả hết rồi. (C09)
- **MN**: Thế không có ai nhìn thì sao? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH5 — TRỌN · Một năm không tên · 9:16

- **MN**: Trời sắp sáng. Cân vẫn trống. Ông Bá lần đầu không biết phải mua gì. (C05) · pop “ÔNG BÁ”
- **MN**: Ông đặt bao gạo trước cửa nhà cần giúp, trả viện phí, rồi đi. Không gọi ai. Không để tên. (C12)
- **MN**: Một năm sau, kim nhích. (C02)
- **BAN**: Bao gạo không tên, được một năm. (C09)
- **BA**: Hóa ra tôi mua báo. (C05)
- **MN**: Cái cân đã đổi gì? Tao kể ở bản đầy đủ, link dưới. (S26)

### SH6 — TRAILER · Cái bóng trên cân · 9:16

- **MN**: Hai ngón tay véo cái bóng ông Bá, nhấc lên lớp mỏng như lụa đen. (C03) · pop “ÔNG BÁ”
- **MN**: Bóng dưới chân nhạt đi. Mép sờn như vải cũ. (C10)
- **BA**: Tôi xây ba trường học. Cứ cân đi. (C05)
- **BAN**: Phúc ông nặng… (C09)
- **MN**: Cân xong, bà nói gì? (C02)

### SH7 — TRAILER · Trước tiếng gà gáy · 9:16

- **BAN**: Trước gà gáy, cân đủ thì đổi. Không đủ, chợ đóng. (C09) · pop “BÀ BÁN THỌ”
- **MN**: Ông Bá đem tiền. Không đủ. Đem từ thiện có máy ảnh. Cũng không đủ. (C11)
- **MN**: Trời sắp sáng, cân vẫn trống. (C02)
- **BA**: Tôi còn kịp làm gì? (C05)
- **MN**: Cắt trước câu trả lời. Bản đầy đủ, link dưới. (S26)

## Hình

Ảnh dùng lại: B02, ep01 S01/S26/S33/S34, S06.  
Ảnh mới từ v2; dấu **✓** là dùng trong v3:

| Mã | Cảnh | V3 |
|---|---|---|
| C01 | Bãi đất đầu làng, sạp chợ và đèn dầu | ✓ |
| C02 | Cân tiểu ly đồng, đĩa trống và các vị trí kim | ✓ |
| C03 | Bóng ông Bá, hai ngón tay véo lớp bóng | ✓ |
| C04 | Biệt thự, tủ kính thuốc, ông Bá | ✓ |
| C05 | Ông Bá với áo măng tô, khăn, gậy | ✓ |
| C06 | Ông cò thì thầm | ✓ |
| C07 | Ô tô đỗ, chú Mười chờ, ông Bá vào chợ | ✓ |
| C08 | Chú Mười và cảnh cân bóng | ✓ |
| C09 | Bà bán thọ, nón rộng vành, tay đặt trên cân | ✓ |
| C10 | Chân ông Bá, bóng nhạt và mép sờn | ✓ |
| C11 | Ông Bá từ thiện, phóng viên chụp ảnh | ✓ |
| C12 | Ông Bá âm thầm đặt bao gạo trước cửa | ✓ |

## Lịch

- LONG — Thứ Hai 03/05, 18:00 (+07)
- SH1 — Thứ Hai 03/05, 19:00
- SH2 — Thứ Ba 04/05, 11:30
- SH3 — Thứ Ba 04/05, 19:00
- SH4 — Thứ Tư 05/05, 11:30
- SH5 — Thứ Tư 05/05, 19:00
- SH6 — Thứ Năm 06/05, 11:30
- SH7 — Thứ Năm 06/05, 19:00
