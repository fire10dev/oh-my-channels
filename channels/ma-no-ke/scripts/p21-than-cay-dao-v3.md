# Dự án 21 — Thần cây đào “Gác cổng nhà đại gia” (v3, 2026-11-24)

- Thêm đồng hồ trước giờ khách mùng Hai đến: nếu trượt, cây đào bị chặt, hai thần mất gốc và Định, Phát tiếp tục kiếm lời.
- Cho hai thần ba lần chủ động chặn kế hoạch: cảnh cáo Định, đòi Phát trả cây, rồi Thần Trà tự biến mình thành người gác cổng.
- Cú lật đến từ lựa chọn của Thần Trà: dùng dây lau trói những kẻ mang phong bì qua cổng, kể cả khi phải để lộ hai vị thần.
- Điểm thấp nhất là lúc Phát ra lệnh cưa cây ngay trước khi khách tới.
- Định phải tự đẩy cây về đình; Ma Nó chốt bằng câu đùa, teaser P22 đúng lịch Thứ Năm và lời kêu đăng ký.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Hai vị thần có giữ được cây đào cổ và chặn được đám khách mang phong bì trước khi Phát mở cổng mùng Hai không?
- **Đồng hồ / cái giá:** Trước giờ khách đến chúc Tết mùng Hai; nếu trượt, cây đào bị chặt, hai thần mất gốc gác, còn Định và Phát tiếp tục kiếm lời từ nó.
- **Ba nấc leo thang:** Thần Trà cảnh cáo Định nhưng bị bán cây; hai thần đòi Phát trả cây nhưng bị sai người chặt; Thần Trà chọn trói khách qua cổng, để lộ phép và khiến Phát mất cả khách lẫn tiền.
- **Điểm thấp:** Phát ra lệnh cưa cây ngay trước lúc khách tới; hai thần bị chặn khỏi gốc.
- **Cú lật:** Thần Trà chủ động dùng dây lau trói những người mang phong bì qua cổng. Ông trả giá bằng việc lộ thân phận; Phát mất khách, mất tiền và phải đòi Định chở cây về đình.
- **Khoảnh khắc rợn:** Giữa gió giao thừa, cây đào đứng im; hai bóng cao đứng hai bên cổng; chó becgie lùi từng bước.
- **Câu kết:** Phát đón Tết với cổng trống, Định đẩy cây về đình; Ma Nó nhả câu đùa, teaser tập P22 và kêu đăng ký.

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01, S06, S26, S33, S34 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| TRA | Thần Trà: cao gầy, giáp cổ sờn, cầm dây lau, nói từng chữ | Đ02 | Thiền Tâm Đức | `aecho=0.8:0.6:60:0.3` |
| LUY | Thần Uất Lũy: to béo, giáp chật, hay ngáp, dễ tính | Đ02 | Adam bựa | `atempo=0.98,aecho=0.8:0.6:60:0.3` |
| DINH | Định, buôn đào, mau miệng, sợ mất tiền | Đ05, Đ06, Đ13 | Trúc Ly | `atempo=1.05` |
| PHAT | Đại gia Phát: áo len cổ lọ, kính râm trong nhà, tràng hạt | Đ06, Đ07 | Hải Đăng | `atempo=0.95,asetrate=48000*1.02,aresample=48000` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"TRA":{"preset":"Thiền Tâm Đức","fx":"aecho=0.8:0.6:60:0.3"},"LUY":{"preset":"Adam bựa","fx":"atempo=0.98,aecho=0.8:0.6:60:0.3"},"DINH":{"preset":"Trúc Ly","fx":"atempo=1.05"},"PHAT":{"preset":"Hải Đăng","fx":"atempo=0.95,asetrate=48000*1.02,aresample=48000"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | Đ01 | *(không lời, 2 s)* | Nhạc Tết rè · dây lau “sột” |
| 0:02 | Đ07 | **PHAT**: Thả khách tôi ra! Ai cho các ông đứng chắn cổng? | Gió rít nhẹ |
| 0:06 | Đ02 | **TRA**: Kẻ gác cổng. | Mõ “cộc” |
| 0:09 | S01 → S26 | **MN**: Lại mò vào à? Tết nhà mày cắm đào chưa? Người ta cắm để đẹp. Xưa hơn, là để hai ông gác cổng. | Mõ “cộc” |
| 0:17 | S26 | **MN**: Hai ông theo một cây đào cổ lên phố. Trước khi khách mùng Hai tới, cây phải còn nguyên ở đó. | “TRƯỚC MÙNG HAI” |
| 0:24 | Đ03 | **MN**: Tích xưa kể dưới gốc đào có thần Trà và Uất Lũy. Quỷ dữ qua cổng, hai ông trói bằng dây lau. Người cắm đào ngày Tết là mượn hai ông canh cửa. | Gió nhẹ · chữ “THẦN TRÀ – UẤT LŨY” |
| 0:37 | Đ04 | **MN**: Ở một sân đình có cây đào trăm năm. Hai ông ngủ dưới gốc. Làng hiền, quỷ ít, ca trực nhàn đến mức Uất Lũy ngáy át tiếng gà. | Gà gáy |
| 0:47 | Đ05 | **MN**: Đêm hai bảy Tết, Định mang xe cẩu đến đào cả gốc. Sáng ra, sân đình còn cái hố. | Cuốc xẻng · xe cẩu |
| 0:56 | Đ02 | **LUY**: Anh ơi, nhà mình đang bay. Có ai báo trước đổi chỗ ngủ không? | Tiếng xe cẩu |
| 1:02 | Đ02 | **TRA**: Gốc đi đâu, ta đi đó. | |
| 1:05 | Đ05 | **TRA**: Người đào cây. Dừng tay. | Dây lau “sột” |
| 1:09 | Đ05 | **DINH**: Cây này tôi mua bán cả mùa. Hai ông muốn cản thì gọi chủ mới. | |
| 1:14 | Đ06 | **MN**: Chủ mới là Phát. Năm trăm triệu mua cây, dựng ngay cổng biệt thự. | “500 TRIỆU” |
| 1:22 | Đ07 | **PHAT**: Mùng Hai khách sộp tới. Cây đào trăm năm đặt cổng, nhìn vào là biết nhà này có quan hệ. | Nhạc Tết |
| 1:31 | Đ02 | **TRA**: Cây này thuộc sân đình. Trả về chỗ cũ. | |
| 1:35 | Đ07 | **PHAT**: Tôi mua cây, không mua hai ông. Người đâu, khóa cổng. | Cổng sắt đóng |
| 1:42 | Đ08 | **MN**: Đêm giao thừa, gió quật cả vườn. Cây đào đứng im, không cánh hoa nào rung. | Gió lớn, rồi tắt |
| 1:51 | Đ09 | **MN**: Hai bóng cao đứng hai bên cổng như hai cây cột. Con becgie bước tới, dừng lại, cụp đuôi rồi lùi từng bước. | Chó rên khẽ · im 1.5 s |
| 2:01 | Đ10 | **MN**: Sáng mùng Một, trên cổng có cuộn dây lau mới bện. Trong nhà không ai nhận đã bện nó. | Nhạc ngắt |
| 2:09 | Đ02 | **LUY**: Bốn nghìn năm trói quỷ có sừng. Phố này toàn người thơm nước hoa. | |
| 2:15 | Đ02 | **TRA**: Quỷ thay áo theo thời. Kẻ mang của đút lót qua cổng để hại người, ấy là quỷ. Nhìn tay, đừng nhìn mặt. | “NHÌN TAY” |
| 2:25 | S26 | **MN**: Hai ông không đọc báo. Nhưng phong bì nặng nhẹ thì sờ một cái biết ngay. | |
| 2:32 | Đ11 | **MN**: Mùng Hai. Xe kín ngõ, khách vest xách giỏ quà. Ai cũng “cần việc”, ai cũng cầm phong bì. | Nhạc Tết · xe dừng |
| 2:42 | Đ02 | **TRA**: Phong bì nặng. Tay run. Mắt đảo. | Dây lau “sột” |
| 2:47 | Đ01 | **MN**: Người đầu tiên qua cổng thì đứng khựng. Người thứ hai cũng vậy. Đến người thứ ba, cả hàng khách đứng im như tượng. | Dây lau “sột” ×3 |
| 2:58 | Đ12 | **MN**: Hàng xóm quay clip. Chiều đó, cả mạng xem được cảnh “đón khách bằng dây trói”. | Máy ảnh chụp liên tục |
| 3:07 | Đ07 | **PHAT**: Thả họ ra! Tôi trả thêm tiền! | |
| 3:11 | Đ02 | **LUY**: Ông trả tiền mua cây. Cây có hai người gác. Gói này không kèm quyền chọn nhân viên. | |
| 3:18 | Đ07 | **PHAT**: Thợ đâu? Cưa cây đi! | Tiếng cưa khởi động |
| 3:23 | Đ02 | **TRA**: Nếu chặt, cây chết. Ta mất gốc. Nhưng cổng đã mở. | Nhạc hạ |
| 3:30 | Đ02 | **TRA**: Ta chọn giữ cửa. Dây lau, trói những tay cầm phong bì. | Dây lau “sột” |
| 3:37 | Đ01 | **MN**: Cưa tắt. Khách đứng im. Phát nhìn quanh, không còn ai để khoe cây. Hai ông lộ mặt trước hàng xóm; đổi lại, cây vẫn đứng. | Cưa tắt · máy ảnh |
| 3:48 | Đ07 | **PHAT**: Định! Trả tiền rồi chở cây về đình. Tự chở. | |
| 3:54 | Đ13 | **DINH**: Xe cẩu nghỉ Tết. Tôi thuê ba gác… tiền công tính riêng nhé? | Bánh xe lọc cọc |
| 4:02 | Đ04 | **MN**: Định đẩy cây hai mươi cây số. Phát mất khách, mất tiền, còn được lên mạng vì cách tiếp khách hơi… khó quên. | |
| 4:11 | Đ04 | **LUY**: Về đình rồi. Năm nay chắc lại ngủ ngon. | Gà gáy |
| 4:15 | S33 → S34 | **MN**: Cắm đào là mượn hai ông gác cổng. Khách nhà mày mang gì qua cửa, hai ông nhìn đấy. | Rít điếu cày |
| 4:23 | S34 | **MN**: Tập sau: Tết nhà người ta hỏi lương, phát lì xì giấy báo, còn có một đứa cháu cứ đòi mãi. | “TẬP SAU” |
| 4:31 | S06 | **MN**: Bấm đăng ký đi. Tay không cũng được, nhà tao không trói. | “ĐĂNG KÝ” · mõ “cộc” |

## SHORTS

### SH1 — TRỌN · Đôi giày đứng im (9:16, 35 giây)

- **TRA**: Kẻ gác cổng. (Đ01) · pop “THẦN TRÀ”
- **PHAT**: Thả khách tôi ra! Ai cho các ông đứng chắn cổng? (Đ07)
- **MN**: Tết nhà mày cắm đào chưa? Người ta cắm để đẹp. Xưa hơn, là để hai ông gác cổng. (S01 → S26)
- **TRA**: Quỷ dữ qua cổng, hai ông trói bằng dây lau. (Đ03)
- **MN**: Bốn nghìn năm sau, quỷ đổi áo. Phong bì vẫn nặng. (Đ02)
- **MN**: Cổng nhà giàu có hai ông gác. Một ông nhìn tay, một ông nhìn phong bì. Ai qua cửa cũng được đón rất chu đáo. (Đ01)
- **MN**: Khách mang quà, chủ mang tiếng. Tết này ai cũng có phần, kể cả người đứng ngoài cổng. (Đ12)
- *(không lời, 0.8 s)* (Đ01) · dây lau “sột”
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Nhà mình đang bay (9:16, 34 giây)

- **LUY**: Anh ơi, nhà mình đang bay. Có ai báo trước đổi chỗ ngủ không? (Đ02) · pop “UẤT LŨY”
- **MN**: Đêm hai bảy, Định cẩu cây đào cổ ở sân đình. (Đ05)
- **TRA**: Gốc đi đâu, ta đi đó. (Đ02)
- **DINH**: Cây này tôi mua bán cả mùa. Hai ông muốn cản thì gọi chủ mới. (Đ05)
- **MN**: Chủ mới trả năm trăm triệu để đặt cây trước cổng. (Đ06)
- **MN**: Hai ông theo cây lên phố, Định theo tiền. Cả ba đổi chỗ ngủ, chỉ có cây là chẳng được hỏi ý kiến. (Đ02)
- **LUY**: Ca trực mới có vẻ nhiều xe hơn gà. Chỗ ngủ thì chưa thấy, chắc nằm cạnh hóa đơn. (Đ02)
- *(không lời, 0.8 s)* (Đ06) · xe cẩu tắt
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Cổng có hai người gác (9:16, 36 giây)

- **MN**: Quỷ thay áo theo thời. Nhìn tay, đừng nhìn mặt. (Đ02) · pop “THẦN TRÀ”
- **MN**: Mùng Hai, khách vest xách giỏ quà, tay cầm phong bì. Ai cũng “cần việc”. (Đ11)
- **TRA**: Phong bì nặng. Tay run. Mắt đảo. (Đ02)
- **MN**: Người đầu tiên qua cổng thì đứng khựng. Người thứ hai cũng vậy. (Đ01)
- **LUY**: Cổng có gác. Không có ngoại lệ. (Đ02) · pop “UẤT LŨY”
- **MN**: Khách đi chúc Tết mang theo quà. Qua cổng nhà này, tự nhiên ai cũng có thời gian đứng lại ngắm cây đào cho thật lâu. (Đ11)
- **MN**: Đứng lâu vậy chắc đang thưởng hoa. Phong bì cầm chắc tay quá, ngắm kiểu gì cũng không rơi. (Đ01)
- *(không lời, 0.8 s)* (Đ01) · dây lau “sột”
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Cây đào không rung (9:16, 36 giây)

- **MN**: Đêm giao thừa, gió quật cả vườn. Cây đào đứng im, không cánh hoa nào rung. (Đ08) · pop “THẦN TRÀ”
- **MN**: Hai bóng cao đứng hai bên cổng như hai cây cột. (Đ09)
- **MN**: Con becgie bước tới, dừng lại, cụp đuôi rồi lùi từng bước. (Đ09)
- **MN**: Sáng mùng Một, trên cổng có cuộn dây lau mới bện. (Đ10)
- **MN**: Gió làm rung rèm, rung cành, rung cả tấm biển “nhà có gia phong”. Riêng cây đào đứng yên như đang trực đúng giờ. (Đ08)
- **MN**: Con chó đã xin phép rút lui. Người trong nhà chắc đang tìm cách gọi đó là kiểm tra an ninh định kỳ. (Đ09)
- *(không lời, 0.8 s)* (Đ10) · nhạc tắt
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Khách đứng như tượng (9:16, 35 giây)

- **PHAT**: Mùng Hai khách sộp tới. Cây đào trăm năm đặt cổng, nhìn vào là biết nhà này có quan hệ. (Đ07) · pop “PHÁT”
- **MN**: Khách qua cổng, tay cầm phong bì. Người đầu đứng khựng. Người thứ hai cũng vậy. (Đ01)
- **PHAT**: Thả họ ra! Tôi trả thêm tiền! (Đ07)
- **LUY**: Ông trả tiền mua cây. Cây có hai người gác. (Đ02) · pop “UẤT LŨY”
- **MN**: Chiều đó, cả mạng xem được cảnh “đón khách bằng dây trói”. (Đ12)
- *(không lời, 0.8 s)* (Đ12)
- **MN**: Chụp ảnh tập thể ngày Tết, nhà này khỏi cần dựng chân máy. Người đứng hàng đã tự khóa đội hình. (Đ12)
- **MN**: Mời khách tới cho đông, quà tới cho đủ. Chỉ thiếu mỗi người nhận, mà chủ nhà đang bận mặc cả. (Đ11)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Cưa cây trước giờ khách tới (9:16, 34 giây)

- **MN**: Mùng Hai khách tới. Phát cần cây đào đứng trước cổng. (Đ06) · pop “PHÁT”
- **TRA**: Cây này thuộc sân đình. Trả về chỗ cũ. (Đ02) · pop “THẦN TRÀ”
- **PHAT**: Người đâu, khóa cổng. (Đ07)
- **MN**: Cả hai lần cản đều thất bại. Rồi thợ cưa tới. (Đ07)
- **TRA**: Nếu chặt, cây chết. Ta mất gốc. (Đ02)
- **MN**: Còn khách đang tới. Thần Trà phải chọn: giữ kín thân phận, hay giữ cánh cổng? (Đ11)
- **MN**: Dây lau đã bện sẵn, máy cưa vừa nổ. Trước mặt Thần Trà là gốc cây, cánh cổng và đám người sắp bước qua. Chỉ còn vài nhịp để quyết định. (Đ10)
- *(không lời, 0.8 s)* (Đ02) · tiếng cưa khởi động
- **MN**: Còn vài giây thôi. Lựa chọn đó sẽ khiến ai mất cả khách lẫn tiền? (Đ11)

### SH7 — TRAILER · Cổng mở (9:16, 34 giây)

- **MN**: Khách nào cũng cầm phong bì. Cưa cây đã khởi động. (Đ11) · pop “THẦN TRÀ”
- **TRA**: Ta chọn giữ cửa. (Đ02)
- **MN**: Dây lau vừa động. Khách đứng khựng. Máy ảnh bắt đầu chụp. (Đ01 → Đ12)
- **PHAT**: Định! Trả tiền rồi chở cây về đình. (Đ07)
- **MN**: Nhưng ai sẽ tự đẩy cây hai mươi cây số về sân đình? (Đ13)
- **MN**: Cổng đã mở, dây lau đã căng. Hàng xóm giơ máy lên, Phát nhìn cây đào, còn Định nhìn hóa đơn. Chỉ một người trong đám đông biết cái giá của lựa chọn này. (Đ12)
- **MN**: Nếu hai vị thần lộ mặt, ai sẽ phải tự đẩy cây về đình? (Đ13)
- *(không lời, 0.8 s)* (Đ13) · bánh xe lọc cọc
