# Dự án 21 — Thần cây đào “Gác cổng nhà đại gia” (v3, 2026-11-24)

- Thêm đồng hồ: trước khi khách mùng Hai kéo đến; nếu trượt, hai vị thần mất cây đào và Định thoát tội.
- Cho hai thần ba lần chủ động chặn kế hoạch: cảnh cáo Định, thử ngăn Phát mở cổng, rồi tự biến mình thành “người gác cổng”.
- Cú lật đến từ lựa chọn của Thần Trà: dùng dây lau trói những kẻ mang phong bì qua cổng, kể cả khi phải để lộ hai vị thần.
- Điểm thấp nhất: Phát ra lệnh chặt cây ngay trước lúc khách tới.
- Đổi kết: Định phải tự đưa cây về đình; Ma Nó chốt bằng teaser P22 đúng lịch Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Hai vị thần có giữ được cây đào cổ và chặn được đám khách mang phong bì trước khi Phát mở cổng mùng Hai không?
- **Đồng hồ / cái giá:** Trước giờ khách đến chúc Tết mùng Hai; nếu trượt, cây đào bị chặt, hai thần mất gốc gác, còn Định và Phát tiếp tục kiếm lời từ nó.
- **Ba nấc leo thang:** Thần Trà cảnh cáo Định nhưng bị bán cây; hai thần đòi Phát trả cây nhưng bị sai người chặt; Thần Trà chọn trói khách qua cổng, để lộ phép và khiến Phát mất cả khách lẫn tiền.
- **Điểm thấp:** Phát ra lệnh cưa cây ngay trước lúc khách tới; hai thần bị chặn khỏi gốc.
- **Cú lật:** Thần Trà chủ động dùng dây lau trói những người mang phong bì vào cổng. Ông trả giá bằng việc lộ thân phận; Phát mất khách, mất tiền và phải đòi Định chở cây về đình.
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
| 4:23 | S34 | **MN**: Thứ Năm, Tết nhà người ta hỏi lương, phát lì xì giấy báo, còn có một đứa cháu cứ đòi mãi. | “TẬP SAU · THỨ NĂM” |
| 4:31 | S06 | **MN**: Bấm đăng ký đi. Tay không cũng được, nhà tao không trói. | “ĐĂNG KÝ” · mõ “cộc” |

## SHORTS

### SH1 — TRỌN · Đôi giày đứng im (9:16, 35 giây)

- **TRA**: Kẻ gác cổng. (Đ01) · pop “THẦN TRÀ”
- **PHAT**: Thả khách tôi ra! Ai cho các ông đứng chắn cổng? (Đ07)
- **MN**: Tết nhà mày cắm đào chưa? Người ta cắm để đẹp. Xưa hơn, là để hai ông gác cổng. (S01 → S26)
- **TRA**: Quỷ dữ qua cổng, hai ông trói bằng dây lau. (Đ03)
- **MN**: Bốn nghìn năm sau, quỷ đổi áo. Phong bì vẫn nặng. (Đ02)
- *(không lời, 0.8 s)* (Đ01) · dây lau “sột”
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Nhà mình đang bay (9:16, 34 giây)

- **LUY**: Anh ơi, nhà mình đang bay. Có ai báo trước đổi chỗ ngủ không? (Đ02) · pop “UẤT LŨY”
- **MN**: Đêm hai bảy, Định cẩu cây đào cổ ở sân đình. (Đ05)
- **TRA**: Gốc đi đâu, ta đi đó. (Đ02)
- **DINH**: Cây này tôi mua bán cả mùa. Hai ông muốn cản thì gọi chủ mới. (Đ05)
- **MN**: Chủ mới trả năm trăm triệu để đặt cây trước cổng. (Đ06)
- *(không lời, 0.8 s)* (Đ06) · xe cẩu tắt
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Cổng có hai người gác (9:16, 36 giây)

- **MN**: Quỷ thay áo theo thời. Nhìn tay, đừng nhìn mặt. (Đ02) · pop “THẦN TRÀ”
- **MN**: Mùng Hai, khách vest xách giỏ quà, tay cầm phong bì. Ai cũng “cần việc”. (Đ11)
- **TRA**: Phong bì nặng. Tay run. Mắt đảo. (Đ02)
- **MN**: Người đầu tiên qua cổng thì đứng khựng. Người thứ hai cũng vậy. (Đ01)
- **LUY**: Cổng có gác. Không có ngoại lệ. (Đ02) · pop “UẤT LŨY”
- *(không lời, 0.8 s)* (Đ01) · dây lau “sột”
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Cây đào không rung (9:16, 36 giây)

- **MN**: Đêm giao thừa, gió quật cả vườn. Cây đào đứng im, không cánh hoa nào rung. (Đ08) · pop “THẦN TRÀ”
- **MN**: Hai bóng cao đứng hai bên cổng như hai cây cột. (Đ09)
- **MN**: Con becgie bước tới, dừng lại, cụp đuôi rồi lùi từng bước. (Đ09)
- **MN**: Sáng mùng Một, trên cổng có cuộn dây lau mới bện. (Đ10)
- *(không lời, 0.8 s)* (Đ10) · nhạc tắt
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Khách đứng như tượng (9:16, 35 giây)

- **PHAT**: Mùng Hai khách sộp tới. Cây đào trăm năm đặt cổng, nhìn vào là biết nhà này có quan hệ. (Đ07) · pop “PHÁT”
- **MN**: Khách qua cổng, tay cầm phong bì. Người đầu đứng khựng. Người thứ hai cũng vậy. (Đ01)
- **PHAT**: Thả họ ra! Tôi trả thêm tiền! (Đ07)
- **LUY**: Ông trả tiền mua cây. Cây có hai người gác. (Đ02) · pop “UẤT LŨY”
- **MN**: Chiều đó, cả mạng xem được cảnh “đón khách bằng dây trói”. (Đ12)
- *(không lời, 0.8 s)* (Đ12)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Cưa cây trước giờ khách tới (9:16, 34 giây)

- **MN**: Mùng Hai khách tới. Phát cần cây đào đứng trước cổng. (Đ06) · pop “PHÁT”
- **TRA**: Cây này thuộc sân đình. Trả về chỗ cũ. (Đ02) · pop “THẦN TRÀ”
- **PHAT**: Người đâu, khóa cổng. (Đ07)
- **MN**: Cả hai lần cản đều thất bại. Rồi thợ cưa tới. (Đ07)
- **TRA**: Nếu chặt, cây chết. Ta mất gốc. (Đ02)
- **MN**: Còn khách đang tới. Thần Trà phải chọn: giữ kín thân phận, hay giữ cánh cổng? (Đ11)
- *(không lời, 0.8 s)* (Đ02) · tiếng cưa khởi động

### SH7 — TRAILER · Cổng mở (9:16, 34 giây)

- **MN**: Khách nào cũng cầm phong bì. Cưa cây đã khởi động. (Đ11) · pop “THẦN TRÀ”
- **TRA**: Ta chọn giữ cửa. (Đ02)
- **MN**: Dây lau vừa động. Khách đứng khựng. Máy ảnh bắt đầu chụp. (Đ01 → Đ12)
- **PHAT**: Định! Trả tiền rồi chở cây về đình. (Đ07)
- **MN**: Nhưng ai sẽ tự đẩy cây hai mươi cây số về sân đình? (Đ13)
- *(không lời, 0.8 s)* (Đ13) · bánh xe lọc cọc

## Hình

Ảnh tái dùng: B02, S01, S06, S26, S33, S34 (Ma Nó).

| Mã | Cảnh | V3 dùng |
|---|---|---|
| Đ01 | Cổng biệt thự; khách đứng im như tượng, cầm phong bì, dây lau; cây đào trên đầu | Có |
| Đ02 | Hai vị thần dưới gốc đào: Trà cao gầy giáp sờn; Uất Lũy to béo đang ngáp | Có |
| Đ03 | Tranh dân gian Đông Hồ: gốc đào, hai thần trói quỷ có sừng | Có |
| Đ04 | Sân đình làng, cây đào cổ trăm năm, mái đình cong | Có |
| Đ05 | Đêm sân đình, xe cẩu đào gốc cây, bọc bầu bao tải | Có |
| Đ06 | Cổng biệt thự, cây đào dựng giữa, Phát ngắm cây, Định cầm tiền | Có |
| Đ07 | Cận Phát: áo len cổ lọ, kính râm trong nhà, tràng hạt | Có |
| Đ08 | Vườn biệt thự đêm gió lớn; cây đào đứng im, hoa không rung | Có |
| Đ09 | Cổng đêm, hai bóng cao như cột; chó becgie cụp đuôi lùi | Có |
| Đ10 | Cận cổng sắt sáng sớm, cuộn dây lau mới bện | Có |
| Đ11 | Sáng mùng Hai, ô tô kín ngõ; khách vest, giỏ quà, phong bì | Có |
| Đ12 | Hàng xóm, người qua đường chụp hàng khách đứng im | Có |
| Đ13 | Mùng Bốn, Định đẩy ba gác chở gốc đào về sân đình | Có |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Năm 04/02 · 18:00 (+07) |
| SH1 | Thứ Năm 04/02 · 19:00 (+07) |
| SH2 | Thứ Sáu 05/02 · 11:30 (+07) |
| SH3 | Thứ Sáu 05/02 · 19:00 (+07) |
| SH4 | Thứ Bảy 06/02 · 11:30 (+07) |
| SH5 | Thứ Bảy 06/02 · 19:00 (+07) |
| SH6 | Chủ Nhật 07/02 · 11:30 (+07) |
| SH7 | Chủ Nhật 07/02 · 19:00 (+07) |
