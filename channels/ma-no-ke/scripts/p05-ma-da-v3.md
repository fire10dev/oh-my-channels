# Dự án 5 — Ma da "Tuyển người thay ca" (v3, 2026-11-23)

- Chốt hạn vào đêm rằm tháng này, khi nước rút; trượt hạn thì ma da phải trực thêm bảy năm.
- Làm rõ ba lần tuyển người thất bại, với lần thứ ba ma da chủ động thử ông Hùng.
- Bỏ câu Ma Nó báo trước có người tự nộp đơn; giữ cú lật ở lựa chọn của ma da.
- Bổ sung punch cho các short TRỌN và kéo đủ độ dài từng short.
- Giữ teaser tập sau vào Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ma da có tìm được người thay ca trước đêm rằm tháng này mà không kéo ai chết đuối không?
- **Đồng hồ / cái giá:** Đêm rằm tháng này, khi nước rút, là hạn cuối. Nếu chưa có người nhận ca, ma da phải trực thêm bảy năm; nếu nhận ca, ông Hùng phải canh khúc sông mỗi đêm và không được để ai đuối nước.
- **Ba nấc leo thang:** Ma da hỏi ông câu cá — thất bại vì vợ gọi về ăn cơm; hỏi thanh niên bơi qua sông — thất bại vì cậu ta lên bờ đi làm; thử chạm cổ chân ông Hùng rồi buông — thất bại vì Hùng chưa nhận khúc sông là nhà. Khi Hùng tự tuyên bố khúc sông là nhà và ký tên lên biển, ma da có cơ hội liều.
- **Điểm thấp:** Đêm rằm, nước sắp rút; không ai nhận ca, bến vẫn chuẩn bị chạy, ma da đứng trước nguy cơ trực thêm bảy năm.
- **Cú lật:** Ma da chủ động chọn nhận lời tuyên bố và chữ ký của Hùng làm đơn xin thay ca. Lão trả giá bằng việc giao ca cho kẻ phá bờ; Hùng trả giá bằng những đêm trực sông, không được để ai đuối nước.
- **Khoảnh khắc rợn:** Sáng ra, đôi ủng Hùng trên bờ đầy nước; trong ủng là phiếu giao ca ghi tên ông.
- **Câu kết:** Hùng vẫn dựng biển thu phí; Ma Nó châm “Ngâm nước cả đêm, mở mồm ra vẫn đòi thu vé. Hà Bá cũng phải lạy.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó, giọng Thiện Minh, châm chọc khô | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| MD | Ma da, xưng “tao”, mệt như công nhân hết ca | B07 | Thanh Bình | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.2` |
| HUNG | Ông Hùng, chủ bến cát, tham và lì | D02/D05/D07/D09/D12 | Adam bựa | `atempo=1.05` |
| BA | Bà Thơm, mất ruộng vì sạt lở, bán nước ở bến | D06 | Ngọc Huyền | `anull` |

```json voices
{"MN": {"preset": "Thiện Minh", "fx": "atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"}, "MD": {"preset": "Thanh Bình", "fx": "asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:50:0.2"}, "HUNG": {"preset": "Adam bựa", "fx": "atempo=1.05"}, "BA": {"preset": "Ngọc Huyền", "fx": "anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | D01 | *(không lời, 2 s)* | “1:00 SÁNG · BẾN CÁT” · máy hút cát rền |
| 0:02 | D02 | *(không lời, 2 s)* | sóng vỗ · nhạc tắt |
| 0:04 | D02 | **MD**: Chưa ký đơn… thì ai cho giao ca? | bàn tay xanh nhạt chạm cổ chân rồi rút · im 1 s |
| 0:08 | B07 | **MD**: Mà sắp rồi. | |
| 0:10 | S01 → S26 | **MN**: Lại mò vào à? Hôm nay khách của tao làm ca đêm bảy năm chưa được nghỉ. | mõ CỘC |
| 0:16 | S26 | **MN**: Đêm rằm này nước rút. Chưa có người nhận ca thì lão trực thêm bảy năm nữa. | |
| 0:22 | B07 | **MD**: Tao là ma da. Tao ở khúc sông này bảy năm. | sóng |
| 0:27 | B07 | **MD**: Luật sông: muốn đi, phải có người xuống thế. Ai cũng nghĩ ma da thích kéo người. Không. Ma da thích về nhà. | “LUẬT: CÓ NGƯỜI THẾ → ĐƯỢC ĐI” |
| 0:37 | S26 | **MN**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. Công đoàn dưới nước cũng không có. | |
| 0:44 | D03 | **MD**: Ứng viên thứ nhất: ông câu cá. Mười năm chưa câu được con nào. Kiên nhẫn lắm. Nhưng tối nào vợ cũng gọi về ăn cơm. Loại. | “✖ CÓ NGƯỜI CHỜ CƠM” · phao câu |
| 0:58 | D03 | **MD**: Tao hỏi một câu: thích sông hơn nhà không? Ông ấy bảo: “Thích cá hơn, nhưng vợ gọi thì phải về.” | sóng |
| 1:05 | D03 | **MD**: Thế là về. Người có cơm chờ thì khó tuyển. | |
| 1:10 | D03 | **MD**: Ứng viên thứ hai: thằng bơi qua sông tập thể dục. Bơi xong lại trèo lên bờ đi làm. Loại. Tao cần đứa ở đây cả đêm. | “✖ CÒN PHẢI ĐI LÀM” |
| 1:23 | B07 | **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. Bảy năm, chưa ai đạt. | “TUYỂN: THÍCH SÔNG HƠN NHÀ” |
| 1:32 | D01 | **MN**: Rồi ông Hùng về. Ba cái sà lan, chạy đêm. Giấy phép thì ghi khai thác cát ở chỗ khác. | máy hút cát rền |
| 1:41 | D05 | **HUNG**: Sông là của chung! Cát là của tôi! | loa rè |
| 1:45 | D06 | **MN**: Hút một mùa, bờ sạt ba mét. Ruộng bà Thơm trôi theo sà lan. | sạt đất · “−3 MÉT” |
| 1:52 | D06 | **BA**: Mấy sào ngô, sào đỗ nhà tôi… giờ thành mâm cho cá nó rỉa. | |
| 1:59 | B07 | **MD**: Lão hút cát, tao ngủ không được. Cái giường của tao cũng là cát. | |
| 2:29 | D02 | **MD**: Đêm đó lão ngồi mép sà lan đếm tiền. Chân thõng xuống nước. | sóng |
| 2:35 | D02 | **MD**: Tao chạm thử cổ chân. Rồi buông. Lão chưa đạt: lão mới nhận cát là của lão, chưa nhận sông là nhà. Tao không kéo ai. | im 1 s |
| 2:44 | D01 | **MN**: Đêm rằm này nước rút. Chưa ai nhận ca; trượt hạn, ma da trực thêm bảy năm. | “ĐÊM RẰM · HẠN CUỐI” · máy hút cát rền |
| 2:05 | D07 | **MN**: Dân làng kéo ra bến phản đối. Ông Hùng cho cắm một cái biển. | |
| 2:11 | D07 | **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! | “KHU VỰC TƯ NHÂN · KHÚC SÔNG NÀY LÀ NHÀ TÔI · KÝ: HÙNG” · đóng cọc |
| 2:20 | B07 | **MD**: Nhà… là khúc sông. Có chữ ký. | nhạc đổi |
| 2:25 | S26 | **MN**: Bảy năm mới có một bộ hồ sơ đạt. | |
| 2:52 | D08 | **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. | nước chảy ra |
| 2:58 | D08 | **MN**: Trong ủng có một tờ giấy. | “PHIẾU GIAO CA · NGƯỜI NHẬN: HÙNG · CA: 0:00–5:00 · MỖI ĐÊM” · im 2 s |
| 3:07 | D09 | **MD**: Nó tự nhận khúc sông là nhà. Có biển, có tên. Tao chọn nhận chữ ký ấy làm đơn. Kéo nó chết thì thành ma mới; để nó sống, tao có đứa trực thay. | “THẾ = THAY CA” |
| 3:21 | D09 | **HUNG**: Tôi là chủ bến! Tôi có giấy phép! | |
| 3:25 | B07 | **MD**: Giấy phép ghi chỗ khác. Biển của anh ghi chỗ này. | |
| 3:31 | D13 | **MD**: Nửa đêm mà nằm trên bờ, hai chân buốt như ngâm nước. Ngồi lên phao mới ngủ được. Muốn về nhà thì cứ về. | “0:00–5:00” |
| 3:43 | D10 | **MN**: Nửa đêm đến năm giờ sáng, lão phải ngồi giữa sông. Sà lan hết chạy ca đêm. Hai tháng, bờ không sạt thêm một phân. | máy tắt dần · “0 SÀ LAN” |
| 3:55 | D09 | **MD**: Việc đầu tiên của ca đêm: không được để ai đuối nước. Lão phải canh hết. | |
| 4:03 | D09 | **HUNG**: Đi chỗ khác! Hút sạt thì tao lấy đâu chỗ cắm phao! | loa rè |
| 4:10 | S26 | **MN**: Ông chủ bến giờ thành nhân viên cứu hộ không lương. | |
| 4:15 | D11 | **MD**: Bảy năm. Lần đầu tao được về sớm. | gà gáy · “HẾT CA” |
| 4:21 | D12 | **MN**: Sáng hôm sau bến có biển mới. | |
| 4:25 | D12 | **HUNG**: Cấm tắm. Ai tắm… thu phí. | “CẤM TẮM · AI TẮM — THU PHÍ” · mõ CỘC |
| 4:31 | S33 → S34 | **MN**: Ngâm nước cả đêm, mở mồm ra vẫn đòi thu vé. Hà Bá cũng phải lạy. | rít điếu cày |
| 4:38 | S06 mờ | **MN**: Tập sau: nhà thầu chặt cây đa đầu làng để phân lô… và bản vẽ tự khoanh đỏ một mảnh đất không ai bán. | “TẬP SAU” · whoosh |
| 4:48 | S06 | **MN**: Bấm đăng ký đi. Không thì đêm nay đi tắm, kiểm tra trong ủng xem có phiếu giao ca không. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN
- **MN**: Lại mò vào à? Hôm nay khách của tao làm ca đêm bảy năm chưa được nghỉ. (S01) · pop “MA DA”
- **MD**: Tao là ma da. Tao ở khúc sông này bảy năm. (B07)
- **MD**: Luật sông: muốn đi, phải có người xuống thế. Ai cũng nghĩ ma da thích kéo người. Không. Ma da thích về nhà. (B07)
- **MD**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. (B07)
- **MD**: Có người hỏi tao quyền lợi. Tao bảo: được ngâm nước miễn phí, không giới hạn.
- **MD**: Công đoàn dưới nước cũng không có. (S26)
- *(không lời, 0.8 s)* (B07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN
- **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. (B07) · pop “MA DA”
- **MD**: Ứng viên thứ nhất: ông câu cá. Mười năm chưa câu được con nào. Kiên nhẫn lắm. Nhưng tối nào vợ cũng gọi về ăn cơm. Loại. (D03)
- **MD**: Ứng viên thứ hai: thằng bơi qua sông tập thể dục. Bơi xong lại trèo lên bờ đi làm. Loại. Tao cần đứa ở đây cả đêm. (D03)
- **MN**: Bảy năm, chưa ai đạt. (S26)
- **MD**: Người có cơm chờ thì khó tuyển. (D03)
- **MD**: Phúc lợi thì có mỗi một cục cát làm gối. (B07)
- *(không lời, 0.8 s)* (D03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN
- **HUNG**: Sông là của chung! Cát là của tôi! (D05) · pop “ÔNG HÙNG”
- **MN**: Hút một mùa, bờ sạt ba mét. Ruộng bà Thơm trôi theo sà lan. (D06)
- **BA**: Mấy sào ngô, sào đỗ nhà tôi… giờ thành mâm cho cá nó rỉa. (D06)
- **MN**: Ruộng trôi rồi. Cát vẫn tính tiền. (D06)
- **BA**: Mất ruộng còn phải ra đây bán nước cho người hút cát. (D06)
- **MN**: Bờ sạt ba mét; cái biển thu tiền chắc vẫn đứng vững. (D06)
- *(không lời, 0.8 s)* (D06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN
- **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! (D07) · pop “ÔNG HÙNG”
- **MD**: Nhà… là khúc sông. Có chữ ký. (B07)
- **MN**: Bảy năm mới có một bộ hồ sơ đạt. (S26)
- **MD**: Tao chạm thử cổ chân. Rồi buông. Lão chưa đạt: lão mới nhận cát là của lão, chưa nhận sông là nhà. (D02)
- **MD**: Để nó sống… tao mới có đứa trực thay. (D09)
- **MN**: Tự khoanh địa chỉ nhà, tự ký đơn xin trực sông. Nhân sự khỏi phải chạy quảng cáo. (D07)
- *(không lời, 0.8 s)* (D09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN
- **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. (D08) · pop “PHIẾU GIAO CA”
- **MN**: Trong ủng có một tờ giấy. (D08)
- *(không lời, 2 s)* (D08)
- **MD**: Kéo nó chết thì thành ma mới. Để nó sống… tao mới có đứa trực thay. (D09)
- **MN**: Ông chủ bến giờ thành nhân viên cứu hộ không lương. (S26)
- **MD**: Ca từ nửa đêm đến năm giờ sáng. Thêm điều khoản: không được để ai đuối nước. (D09)
- **MN**: Phiếu giao ca có đủ tên, giờ, điều khoản; thiếu mỗi mục lương. (D08)
- *(không lời, 0.8 s)* (D09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER
- **MD**: Chưa ký đơn… thì ai cho giao ca? (D02) · pop “MA DA”
- **MN**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. Công đoàn dưới nước cũng không có. (S26)
- **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. (B07)
- **MN**: Đêm rằm này nước rút. Chưa có người nhận ca thì lão trực thêm bảy năm nữa. (D01)
- **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! (D07)
- **MD**: Nhà… là khúc sông. Có chữ ký. (B07)
- **MD**: Nhưng chạm thử cổ chân, tao lại phải buông. (D02)
- **MN**: Hùng vừa ký vào thứ gì vậy? (D07)

### SH7 — TRAILER
- **MD**: Đêm rằm này nước rút. Trượt hạn, tao trực thêm bảy năm. (D01) · pop “MA DA”
- **MD**: Bảy năm. Lần đầu tao được về sớm. (D11)
- **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. (D08)
- **MN**: Trong ủng có một tờ giấy. (D08)
- *(không lời, 2 s)* (D08)
- **MN**: “Người nhận: Hùng.” (D08)
- **MD**: Tao chọn nhận chữ ký của lão làm đơn. (D09)
- **MN**: Còn ca trực của ông chủ bến bắt đầu từ mấy giờ? (D09)

## Hình

| Mã | Cảnh | V3 dùng |
|---|---|---|
| B07 | Ma da, khăn mặt kẻ ô, áo ba lỗ | ✓ |
| B02 | Ma Nó | ✓ |
| D01 | Sông Bắc Bộ đêm mùa lũ, sà lan hút cát, đèn pha vàng, bờ đất nứt | ✓ |
| D02 | Hùng ngồi mép sà lan đếm tiền, chân thõng nước; bàn tay xanh nhạt sắp chạm cổ chân | ✓ |
| D03 | Ông câu cá trên bờ; ma da cầm sổ phỏng vấn dưới nước; xa xa thanh niên bơi qua sông | ✓ |
| D13 | Phòng ngủ đêm: chân Hùng thò khỏi chăn, vệt nước sông mờ quanh cổ chân | ✓ |
| D05 | Hùng đứng trên sà lan cầm loa | ✓ |
| D06 | Bờ ruộng sạt, bà Thơm đội nón nhìn, cạnh gánh nước chè | ✓ |
| D07 | Hùng cắm biển gỗ, dân làng phản đối phía sau | ✓ |
| D08 | Đôi ủng cao su đầy nước; tờ giấy ướt trong ủng | ✓ |
| D09 | Hùng ngồi trên phao giữa sông, khăn kẻ ô ngoài áo khoác da | ✓ |
| D10 | Sà lan nằm im, máy tắt, trăng | ✓ |
| D11 | Bình minh, ma da vắt khăn lên vai đi lên bờ | ✓ |
| D12 | Bến ban ngày, biển mới, Hùng cạnh thùng thu tiền | ✓ |
| S01/S26/S33/S34 | Ma Nó, tái dùng ep01 | ✓ |
| S06 | CTA, tái dùng ep01 | ✓ |

## Lịch

| Nội dung | Lịch đăng |
|---|---|
| LONG | Thứ Hai 07/12 18:00 (+07) |
| SH1 — TRỌN | Thứ Hai 07/12 19:00 (+07) |
| SH2 — TRỌN | Thứ Ba 08/12 11:30 (+07) |
| SH3 — TRỌN | Thứ Ba 08/12 19:00 (+07) |
| SH4 — TRỌN | Thứ Tư 09/12 11:30 (+07) |
| SH5 — TRỌN | Thứ Tư 09/12 19:00 (+07) |
| SH6 — TRAILER | Thứ Năm 10/12 11:30 (+07) |
| SH7 — TRAILER | Thứ Năm 10/12 19:00 (+07) |
