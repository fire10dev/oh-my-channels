# Dự án 5 — Ma da "Tuyển người thay ca" (v3, 2026-11-23)

- Thêm đồng hồ: ca đêm của ma da đã kéo dài bảy năm; ông Hùng phải nhận ca trước khi sà lan hút cát lại chạy.
- Ba lần ma da thử tìm người thay: ông câu cá, thanh niên bơi qua sông, rồi ông Hùng tự nhận khúc sông là nhà.
- Cú lật đổi “thế” thành “thay ca”: Hùng còn sống, nhưng phải trực sông mỗi đêm.
- Dời khoảnh khắc rợn vào tờ phiếu giao ca trong đôi ủng; cold open chỉ treo bàn tay và câu “chưa ký đơn”.
- Kết giữ Hùng tham tiền, teaser P06 chuyển đúng sang Thứ Năm.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Ma da có tìm được người thay ca để rời khúc sông mà không kéo ai chết đuối không?
- **Đồng hồ / cái giá:** Trước đêm sà lan chạy chuyến tiếp theo, ma da phải có người nhận ca; nếu không, lão tiếp tục bảy năm không nghỉ, còn bến cát tiếp tục làm sạt bờ.
- **Ba nấc leo thang:** Ma da hỏi ông câu cá — thất bại vì vợ gọi về ăn cơm; hỏi thanh niên bơi qua sông — thất bại vì cậu ta lên bờ đi làm; thử nói chuyện với Hùng — thất bại vì Hùng chỉ nhận mình là chủ bến, cho đến khi tự tuyên bố khúc sông là nhà mình.
- **Điểm thấp:** Bến vẫn chạy đêm, ma da vẫn chưa được về; Hùng phủ nhận trách nhiệm và chuẩn bị cho chuyến hút cát tiếp theo.
- **Cú lật:** Ma da chọn nhận lời tuyên bố của Hùng làm đơn xin thay ca. Lão trả giá bằng việc phải giao ca cho kẻ đã phá bờ; Hùng trả giá bằng những đêm trực sông, không được để ai đuối nước.
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
| 0:16 | S26 | **MN**: Nó đang tuyển người thay. Và lần này, có đứa tự nộp đơn. | |
| 0:21 | B07 | **MD**: Tao là ma da. Tao ở khúc sông này bảy năm. | sóng |
| 0:26 | B07 | **MD**: Luật sông: muốn đi, phải có người xuống thế. Ai cũng nghĩ ma da thích kéo người. Không. Ma da thích về nhà. | “LUẬT: CÓ NGƯỜI THẾ → ĐƯỢC ĐI” |
| 0:36 | S26 | **MN**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. Công đoàn dưới nước cũng không có. | |
| 0:43 | D03 | **MD**: Ứng viên thứ nhất: ông câu cá. Mười năm chưa câu được con nào. Kiên nhẫn lắm. Nhưng tối nào vợ cũng gọi về ăn cơm. Loại. | “✖ CÓ NGƯỜI CHỜ CƠM” · phao câu |
| 0:57 | D03 | **MD**: Tao hỏi một câu: thích sông hơn nhà không? Ông ấy bảo: “Thích cá hơn, nhưng vợ gọi thì phải về.” | sóng |
| 1:04 | D03 | **MD**: Thế là về. Người có cơm chờ thì khó tuyển. | |
| 1:09 | D03 | **MD**: Ứng viên thứ hai: thằng bơi qua sông tập thể dục. Bơi xong lại trèo lên bờ đi làm. Loại. Tao cần đứa ở đây cả đêm. | “✖ CÒN PHẢI ĐI LÀM” |
| 1:22 | B07 | **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. Bảy năm, chưa ai đạt. | “TUYỂN: THÍCH SÔNG HƠN NHÀ” |
| 1:31 | D01 | **MN**: Rồi ông Hùng về. Ba cái sà lan, chạy đêm. Giấy phép thì ghi khai thác cát ở chỗ khác. | máy hút cát rền |
| 1:40 | D05 | **HUNG**: Sông là của chung! Cát là của tôi! | loa rè |
| 1:44 | D06 | **MN**: Hút một mùa, bờ sạt ba mét. Ruộng bà Thơm trôi theo sà lan. | sạt đất · “−3 MÉT” |
| 1:51 | D06 | **BA**: Mấy sào ngô, sào đỗ nhà tôi… giờ thành mâm cho cá nó rỉa. | |
| 1:58 | B07 | **MD**: Lão hút cát, tao ngủ không được. Cái giường của tao cũng là cát. | |
| 2:04 | D07 | **MN**: Dân làng kéo ra bến phản đối. Ông Hùng cho cắm một cái biển. | |
| 2:10 | D07 | **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! | “KHU VỰC TƯ NHÂN · KHÚC SÔNG NÀY LÀ NHÀ TÔI · KÝ: HÙNG” · đóng cọc |
| 2:19 | B07 | **MD**: Nhà… là khúc sông. Có chữ ký. | nhạc đổi |
| 2:24 | S26 | **MN**: Bảy năm mới có một bộ hồ sơ đạt. | |
| 2:28 | D02 | **MD**: Đêm đó lão ngồi mép sà lan đếm tiền. Chân thõng xuống nước. | sóng |
| 2:34 | D02 | **MD**: Tao chạm thử. Rồi buông. Tao không kéo ai. Tao chỉ giao ca. | im 1 s |
| 2:41 | D08 | **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. | nước chảy ra |
| 2:47 | D08 | **MN**: Trong ủng có một tờ giấy. | “PHIẾU GIAO CA · NGƯỜI NHẬN: HÙNG · CA: 0:00–5:00 · MỖI ĐÊM” · im 2 s |
| 2:56 | D09 | **MD**: Nó tự nhận khúc sông là nhà. Có biển, có tên. Kéo nó chết thì thành ma mới. Để nó sống… tao mới có đứa trực thay. | “THẾ = THAY CA” |
| 3:08 | D09 | **HUNG**: Tôi là chủ bến! Tôi có giấy phép! | |
| 3:12 | B07 | **MD**: Giấy phép ghi chỗ khác. Biển của anh ghi chỗ này. | |
| 3:18 | D13 | **MD**: Nửa đêm mà nằm trên bờ, hai chân buốt như ngâm nước. Ngồi lên phao mới ngủ được. Muốn về nhà thì cứ về. | “0:00–5:00” |
| 3:30 | D10 | **MN**: Nửa đêm đến năm giờ sáng, lão phải ngồi giữa sông. Sà lan hết chạy ca đêm. Hai tháng, bờ không sạt thêm một phân. | máy tắt dần · “0 SÀ LAN” |
| 3:42 | D09 | **MD**: Việc đầu tiên của ca đêm: không được để ai đuối nước. Lão phải canh hết. | |
| 3:50 | D09 | **HUNG**: Đi chỗ khác! Hút sạt thì tao lấy đâu chỗ cắm phao! | loa rè |
| 3:57 | S26 | **MN**: Ông chủ bến giờ thành nhân viên cứu hộ không lương. | |
| 4:02 | D11 | **MD**: Bảy năm. Lần đầu tao được về sớm. | gà gáy · “HẾT CA” |
| 4:08 | D12 | **MN**: Sáng hôm sau bến có biển mới. | |
| 4:12 | D12 | **HUNG**: Cấm tắm. Ai tắm… thu phí. | “CẤM TẮM · AI TẮM — THU PHÍ” · mõ CỘC |
| 4:18 | S33 → S34 | **MN**: Ngâm nước cả đêm, mở mồm ra vẫn đòi thu vé. Hà Bá cũng phải lạy. | rít điếu cày |
| 4:25 | S06 mờ | **MN**: Thứ Năm, nhà thầu chặt cây đa đầu làng để phân lô… và bản vẽ tự khoanh đỏ một mảnh đất không ai bán. | “TẬP SAU · THỨ NĂM” · whoosh |
| 4:35 | S06 | **MN**: Bấm đăng ký đi. Không thì đêm nay đi tắm, kiểm tra trong ủng xem có phiếu giao ca không. | “ĐĂNG KÝ” · mõ CỘC |

## SHORTS

### SH1 — TRỌN
- **MN**: Lại mò vào à? Hôm nay khách của tao làm ca đêm bảy năm chưa được nghỉ. (S01) · pop “MA DA”
- **MN**: Nó đang tuyển người thay. Và lần này, có đứa tự nộp đơn. (S26)
- **MD**: Chưa ký đơn… thì ai cho giao ca? (D02)
- **MD**: Mà sắp rồi. (B07)
- *(không lời, 0.8 s)* (B07)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN
- **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. (B07) · pop “MA DA”
- **MD**: Ứng viên thứ nhất: ông câu cá. Mười năm chưa câu được con nào. Kiên nhẫn lắm. Nhưng tối nào vợ cũng gọi về ăn cơm. Loại. (D03)
- **MD**: Ứng viên thứ hai: thằng bơi qua sông tập thể dục. Bơi xong lại trèo lên bờ đi làm. Loại. Tao cần đứa ở đây cả đêm. (D03)
- **MN**: Bảy năm, chưa ai đạt. (S26)
- *(không lời, 0.8 s)* (D03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN
- **HUNG**: Sông là của chung! Cát là của tôi! (D05) · pop “ÔNG HÙNG”
- **MN**: Hút một mùa, bờ sạt ba mét. Ruộng bà Thơm trôi theo sà lan. (D06)
- **BA**: Mấy sào ngô, sào đỗ nhà tôi… giờ thành mâm cho cá nó rỉa. (D06)
- **MN**: Ruộng trôi rồi. Cát vẫn tính tiền. (D06)
- *(không lời, 0.8 s)* (D06)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN
- **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! (D07) · pop “ÔNG HÙNG”
- **MD**: Nhà… là khúc sông. Có chữ ký. (B07)
- **MN**: Bảy năm mới có một bộ hồ sơ đạt. (S26)
- **MD**: Để nó sống… tao mới có đứa trực thay. (D09)
- *(không lời, 0.8 s)* (D09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN
- **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. (D08) · pop “PHIẾU GIAO CA”
- **MN**: Trong ủng có một tờ giấy. (D08)
- *(không lời, 2 s)* (D08)
- **MD**: Kéo nó chết thì thành ma mới. Để nó sống… tao mới có đứa trực thay. (D09)
- **MN**: Ông chủ bến giờ thành nhân viên cứu hộ không lương. (S26)
- *(không lời, 0.8 s)* (D09)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER
- **MD**: Chưa ký đơn… thì ai cho giao ca? (D02) · pop “MA DA”
- **MN**: Bảy năm không nghỉ lễ, không lương, không bảo hiểm. Công đoàn dưới nước cũng không có. (S26)
- **MD**: Tiêu chuẩn của tao chỉ có một dòng: thích sông hơn nhà. (B07)
- **HUNG**: Khúc sông này là nhà tôi! Ai vào, tôi coi là vào nhà tôi! (D07)
- **MD**: Nhà… là khúc sông. Có chữ ký. (B07)
- *(không lời, 1 s)* (D07)
- **MN**: Ông ta vừa tự nộp đơn gì vậy? (D07)

### SH7 — TRAILER
- **MD**: Bảy năm. Lần đầu tao được về sớm. (D11) · pop “HẾT CA”
- **MN**: Sáng ra, đôi ủng cao su của lão trên bờ đầy nước sông. (D08)
- **MN**: Trong ủng có một tờ giấy. (D08)
- *(không lời, 2 s)* (D08)
- **MN**: “Người nhận: Hùng.” (D08)
- *(không lời, 1 s)* (D09)
- **MN**: Ông chủ bến… nhận ca gì? (D09)

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
