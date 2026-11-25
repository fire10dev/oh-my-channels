# Dự án 44 — Tà thần đa cấp “Tuyến dưới” (v3, 2026-11-24)

- Đặt hạn chót năm ngón gập hết; nếu lễ không đủ, tà thần thu chính Master Vũ làm mâm.
- Làm rõ ba lần Vũ tìm cách thoát: xin rút, gom tiền mua lễ, rồi tìm người thế chỗ trước khi liều nói thật.
- Đẩy điểm thấp nhất đến lúc không ai chịu nhận tuyến; Vũ mắc kẹt ở đáy.
- Cú lật do Vũ tự chọn nói thật, chấp nhận mất hệ thống tuyển người và nguồn thu để phá nguồn lễ của tà thần.
- Giữ khoảnh khắc rợn ở ngón tay tượng tự gập; kết bằng châm biếm và teaser P45.

## Xương sống kịch tính

- **Câu hỏi trung tâm:** Master Vũ có thoát khỏi kim tự tháp của tà thần trước khi ngón thứ năm gập xuống không?
- **Đồng hồ / cái giá:** Năm sáng, năm ngón tay tượng gập hết; nếu lễ không đủ, tà thần thu chính Vũ làm mâm.
- **Ba nấc leo thang:** Vũ xin rút nhưng bị đòi tìm người thế chỗ → cố gom thêm học phí để mua lễ nhưng tiền vẫn thiếu → tìm người thay tuyến nhưng thất bại, rồi liều lên bục tự bóc mô hình trước học viên.
- **Điểm thấp:** Không ai chịu thế chỗ; Vũ nhận ra mình đang ở đúng đáy kim tự tháp của chính mình.
- **Cú lật:** Vũ tự chọn nói thật trước ba trăm học viên, chấp nhận mất tuyến dưới và nguồn thu; không người mới, không mâm mới, tà thần mất phép.
- **Khoảnh khắc rợn:** Đêm canh tượng, ngón thứ ba tự gập xuống, tiếng thạch cao cọt kẹt rất khẽ.
- **Câu kết:** “Bấm đăng ký đi. Không cần kéo ai, không có hoa hồng.”

## Nhân vật và giọng

| Mã | Nhân vật | Hình | Preset VieNeu | fx ffmpeg |
|---|---|---|---|---|
| MN | Ma Nó | B02, S01/S26/S33/S34, S06 | Thiện Minh | `atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25` |
| VU | Master Vũ, diễn giả vest trắng, micro cài tai | T03/T04 | Adam bựa | `atempo=1.08` |
| TA | Tà thần, nói qua tượng Kim Tài Thần | T06/T07 | Thiền Tâm Đức | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:90:0.3` |
| NGAN | Chị Ngân, học viên | T05 | Ngọc Huyền | `anull` |

```json voices
{"MN":{"preset":"Thiện Minh","fx":"atempo=0.92,asetrate=48000*0.97,aresample=48000,aecho=0.8:0.6:60:0.25"},"VU":{"preset":"Adam bựa","fx":"atempo=1.08"},"TA":{"preset":"Thiền Tâm Đức","fx":"asetrate=48000*0.95,aresample=48000,aecho=0.8:0.6:90:0.3"},"NGAN":{"preset":"Ngọc Huyền","fx":"anull"}}
```

## LONG

| Mốc | Ảnh | Lời | Chữ / SFX |
|---|---|---|---|
| 0:00 | T01 | *(không lời, 2 s)* | Hội trường tối · im |
| 0:02 | T02 | *(không lời, 2 s)* | Ngón thứ ba gập · thạch cao cọt kẹt rất khẽ |
| 0:04 | S01 | **MN**: Lại mò vào à? Có ai rủ mày “không cần làm, tiền tự chảy lên” chưa? | Mõ cộc |
| 0:10 | S26 | **MN**: Master Vũ rủ ba trăm người. Rồi một vị thần nghe xong… cũng thấy hay. | |
| 0:17 | T03 | **MN**: Khóa học “Bàn thờ chiêu tài”. Ba mươi triệu một suất, kèm bộ tượng Kim Tài Thần mạ vàng. Thần do ông tự nghĩ ra. | Nhạc hội trường · vỗ tay |
| 0:27 | T04 | **VU**: Kéo thêm một người, hưởng hai mươi phần trăm! Người đó kéo thêm, bạn hưởng tiếp! Không cần làm, tiền tự chảy lên! | Vỗ tay đồng loạt |
| 0:37 | T05 | **NGAN**: Em kéo được mẹ em, chị gái em, cả nhóm đồng nghiệp rồi ạ! | |
| 0:42 | S26 | **MN**: Tiền chảy lên thật. Chảy lên Master Vũ. Dân gian bảo, bàn thờ không có vị thần chính danh thì là ghế trống. Ghế trống thì kẻ vất vưởng ngồi vào. Kim Tài Thần là thần bịa. Đêm ấy, có một tà thần ngồi vào. Chuyên hút lộc. | Xì xào xa |
| 0:59 | T06 | **TA**: Ta nghe giảng mấy buổi rồi. Hay. Rất hay. | Mắt tượng ánh nhẹ |
| 1:05 | T07 | **TA**: Ngươi cúng ta, ta là tuyến trên. Ta kéo bảy vong làm tuyến dưới. Mỗi vong đòi một mâm. Mỗi vong lại kéo bảy vong nữa. | Xì xào ×7 |
| 1:16 | T04 | **VU**: Tuyến… tuyến dưới của thần? | |
| 1:20 | T06 | **TA**: Ngươi dạy họ thế nào, ta học thế ấy. Mỗi sáng ta gập một ngón. Năm ngón gập hết mà lễ chưa đủ, ta thu chính ngươi làm mâm. | Nhạc hạ |
| 1:32 | S26 | **MN**: Tuần một: bảy vong. Tuần hai: bốn mươi chín. Tuần ba: ba trăm bốn mươi ba. Phòng khách, cầu thang, gầm bàn. Đâu đâu cũng ngồi chờ. | Đếm trầm · xì xào dày |
| 1:46 | T04 | **VU**: Học phí ba trăm người vào không đủ mua lễ! Tôi đang ở… đáy? | Chuyển khoản ting chậm dần |
| 1:53 | T04 | **VU**: Mọi người đóng thêm một đợt nữa nhé! Đủ lễ rồi, tôi nâng cả lớp lên tuyến trên! | Ting chuyển khoản lẻ tẻ |
| 2:02 | T04 | **VU**: Không đủ. Ba trăm người, ba trăm triệu lý do hỏi hoàn tiền. | Tiếng ting tắt |
| 2:09 | T02 | **MN**: Sáng thứ hai, một ngón gập. Sáng thứ ba, ngón thứ hai. Thạch cao không gãy. Sơn không nứt. | |
| 2:18 | T01 | **MN**: Đêm ấy, Master Vũ ngồi canh. | Nhạc tắt · im |
| 2:23 | T02 | **MN**: Nửa đêm. Thạch cao cọt kẹt. Rất khẽ. Ngón thứ ba gập xuống. | Cọt kẹt · im 1.5 s |
| 2:32 | T04 | **VU**: Thần ơi, cho con rút khỏi hệ thống! | |
| 2:36 | T06 | **TA**: Muốn rút thì tìm người thế chỗ. Ngươi dạy thế mà. | |
| 2:42 | T03 | **VU**: Có ai… nhận tuyến của tôi không? Tôi nhường luôn chức tuyến trên. Không lấy hoa hồng. | Hội trường xì xào |
| 2:49 | S26 | **MN**: Không ai thế chỗ. Ba trăm học viên ngồi dưới. Ba trăm bốn mươi ba vong ngồi trên. Vũ đứng đúng nơi ông dành cho người khác: đáy. | Nhạc tắt |
| 3:00 | T04 → T03 | **VU**: Tôi xin nói thật. Không có tiền tự chảy lên. Tiền của mọi người chảy lên tôi. Tôi lấy tiền để kéo người vào, rồi lấy tiền mới mua lễ cho thần. Đừng nộp thêm, đừng kéo thêm ai nữa. | Micro · hội trường im phăng phắc |
| 3:14 | T08 | **MN**: Không người mới vào, không mâm mới. Đám vong quay sang đòi tuyến trên. Đúng luật đa cấp: tuyến dưới không có hoa hồng thì đòi tuyến trên. | Xì xào thành lớp |
| 3:25 | T06 → T08 | **MN**: Tà thần không trả nổi. Mất phép. Vong bỏ đi từng con, như học viên rời nhóm. Kim tự tháp sụp từ đáy lên. Còn Vũ mất luôn ba trăm suất học phí, uy tín và cái danh tuyến trên. | Xì xào thưa dần |
| 3:40 | T02 | **MN**: Sáng hôm sau, bàn tay tượng xòe ra như cũ. Thỏi vàng tróc sơn. Bên trong chỉ là thạch cao. | |
| 3:48 | T05 | **NGAN**: Mẹ ơi, chị ơi, đừng nộp tiền nữa nhé. Em xin lỗi, em cũng từng tin là tiền tự chảy lên. | |
| 3:55 | S33 → S34 | **MN**: Ai rủ mày làm tuyến dưới thì hỏi một câu: tuyến trên của anh là ai? Nếu họ chỉ lên bàn thờ… thì chạy. | Rít điếu cày |
| 4:04 | B02 | **MN**: Tập sau: ông bà đi đường làn khẩn cấp. Họ xuống xe con cháu, ngồi kín cả làn. Xe nào chen vào… xe ấy chết máy. | Thẻ “TẬP SAU” |
| 4:15 | S06 | **MN**: Bấm đăng ký đi. Không cần kéo ai, không có hoa hồng. | “ĐĂNG KÝ” · mõ cộc |

## SHORTS

### SH1 — TRỌN · Tượng thần đếm ngón

- **MN**: Nhìn bàn tay tượng Kim Tài Thần. Sáng thứ hai, một ngón gập. Sáng thứ ba, ngón thứ hai. (T02)
- **MN**: Đêm ấy Master Vũ ngồi canh. (T01)
- **MN**: Nửa đêm. Ngón thứ ba tự gập xuống. (T02)
- **MN**: Tượng thần biết bấm đốt ngón tay, còn chủ nhân thì vẫn chưa bấm máy tính. (T04)
- **MN**: Thần đếm hạn bằng ngón, Vũ đếm tiền bằng hy vọng. Cả hai đều thấy số dư đang giảm. (T02)
- *(không lời, 0.8 s)* (T02)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH2 — TRỌN · Tiền tự chảy lên

- **VU**: Kéo thêm một người, hưởng hai mươi phần trăm! Người đó kéo thêm, bạn hưởng tiếp! Không cần làm, tiền tự chảy lên! (T04)
- **NGAN**: Em kéo được mẹ em, chị gái em, cả nhóm đồng nghiệp rồi ạ! (T05)
- **MN**: Tiền chảy lên thật. Chảy lên Master Vũ. (S26)
- **MN**: “Tự chảy” nghe đúng đấy; chỉ quên nói là chảy khỏi túi người khác. (T03)
- **MN**: Mô hình này tiết kiệm công sức lắm: người dưới làm, người trên đếm, còn tượng thì ngồi nghe giảng miễn phí. (T04)
- *(không lời, 0.8 s)* (T04)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH3 — TRỌN · Ba trăm bốn mươi ba vong

- **MN**: Tuần một: bảy vong. Tuần hai: bốn mươi chín. Tuần ba: ba trăm bốn mươi ba. (T08)
- **VU**: Học phí ba trăm người vào không đủ mua lễ! Tôi đang ở… đáy? (T04)
- **MN**: Ba trăm học viên dưới Vũ. Ba trăm bốn mươi ba vong trên Vũ. (S26)
- **MN**: Học viên đóng tiền để lên tuyến, vong đóng mâm để xuống nhà. Ai cũng có lộ trình; chỉ có Vũ là không có lối ra. (T08)
- *(không lời, 0.8 s)* (T08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH4 — TRỌN · Muốn rút thì tìm người thế chỗ

- **VU**: Thần ơi, cho con rút khỏi hệ thống! (T04)
- **TA**: Muốn rút thì tìm người thế chỗ. Ngươi dạy thế mà. (T06)
- **VU**: Có ai… nhận tuyến của tôi không? (T03)
- **MN**: Không ai thế chỗ. Vũ đứng đúng nơi ông dành cho người khác: đáy. (S26)
- **MN**: Lúc bán khóa học, ông gọi đó là cơ hội. Lúc đến lượt mình, ông gọi đó là khẩn cấp. (T04)
- **MN**: Thế là buổi tuyển tuyến trên có ba trăm người dự, nhưng không ai đăng ký làm tuyến trên của Vũ. (T03)
- *(không lời, 0.8 s)* (T03)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH5 — TRỌN · Tự bóc mô hình

- **VU**: Tôi xin nói thật. Không có tiền tự chảy lên. Tiền của mọi người chảy lên tôi. Đừng nộp thêm, đừng kéo thêm ai nữa. (T03)
- **MN**: Không người mới vào, không mâm mới. Kim tự tháp vong sụp từ đáy lên. (T08)
- **MN**: Cả hội trường im thin thít. Lần đầu tiên trong buổi học, không ai giơ tay hỏi cách lên tuyến. (T03)
- **MN**: Vũ vừa mất ba trăm khách hàng tiềm năng, nhưng lần đầu tiên không phải tuyển thêm ai để cứu mình. (T03)
- *(không lời, 0.8 s)* (T08)
- **MN**: Tao kể ở bản đầy đủ, link dưới. (S06)

### SH6 — TRAILER · Ngón thứ năm

- **MN**: Mỗi sáng, tà thần gập thêm một ngón. Còn hai ngón nữa là hết hạn. (T02)
- **VU**: Thần ơi, cho con rút khỏi hệ thống! (T04)
- **TA**: Muốn rút thì tìm người thế chỗ. Ngươi dạy thế mà. (T06)
- **MN**: Không ai chịu nhận tuyến. Đêm nay, Vũ còn phải quyết định có giữ được tiền hay giữ được cả mạng mình. Ngón thứ năm đang chờ. (T03)
- **MN**: Mà tượng thì chẳng cần đồng hồ báo thức. (T02)
- *(không lời, 0.8 s)* (T02)

### SH7 — TRAILER · Ai ở đáy?

- **MN**: Ba trăm học viên ở dưới. Ba trăm bốn mươi ba vong ở trên. Master Vũ ở đúng chỗ ông dành cho người khác. (S26)
- **VU**: Có ai… nhận tuyến của tôi không? (T03)
- **MN**: Không ai thế chỗ. Vậy Vũ còn một cách để thoát: đứng lên bục và nói ra sự thật. (T04)
- **TA**: Ngươi dạy họ thế nào, ta học thế ấy. Còn hai ngón nữa thôi. (T06)
- **MN**: Nhưng lần này, nói thật sẽ làm ông mất thứ ông kiếm sống bằng nó. (T03)
- *(không lời, 0.8 s)* (T03)

## Hình

Tận dụng: B02 + ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

| Mã | Cảnh | Dùng trong v3 |
|---|---|---|
| T01 | Hội trường tối, bục giảng, tượng Kim Tài Thần mạ vàng, tay nâng thỏi vàng, khói hương | LONG, SH1 |
| T02 | Cực cận bàn tay tượng và thỏi vàng: bản xòe, gập một, hai, ba ngón; bản cuối thỏi vàng tróc sơn lộ thạch cao | LONG, SH1, SH6 |
| T03 | Hội trường ba trăm người, Master Vũ trên bục, màn hình sơ đồ kim tự tháp trống chữ; bản cuối màn hình tắt | LONG, SH4, SH5, SH6, SH7 |
| T04 | Master Vũ cận: vest trắng, micro cài tai; bản hô hào, ngơ ngác, đếm tiền, quỳ | LONG, SH1, SH2, SH3, SH4 |
| T05 | Chị Ngân cận: học viên áo công sở, sổ ghi chép, mắt sáng; bản sau gọi điện | LONG, SH2 |
| T06 | Cực cận mặt tượng Kim Tài Thần, mắt ánh lên trong bóng tối | LONG, SH4, SH6, SH7 |
| T07 | Phòng thờ nhà Master Vũ, tượng lớn, bảy bóng mờ ngồi quanh mâm cúng | LONG |
| T08 | Nhà Master Vũ kín bóng vong mờ: phòng khách, cầu thang, gầm bàn, ngồi chờ quanh mâm; bản sau mờ dần từ dưới lên | LONG, SH3, SH5 |

## Lịch

- **LONG:** Thứ Năm 22/04, 18:00 (+07).
- **SH1:** Thứ Năm 22/04, 19:00.
- **SH2:** Thứ Sáu 23/04, 11:30.
- **SH3:** Thứ Sáu 23/04, 19:00.
- **SH4:** Thứ Bảy 24/04, 11:30.
- **SH5:** Thứ Bảy 24/04, 19:00.
- **SH6:** Chủ Nhật 25/04, 11:30.
- **SH7:** Chủ Nhật 25/04, 19:00.
