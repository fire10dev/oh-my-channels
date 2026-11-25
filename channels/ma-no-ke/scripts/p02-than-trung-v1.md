# Dự án 2 — Thần trùng "Điểm danh nhầm" (v1, 2026-11-19 23:30 +07)

Theo bible-v2 §7: trào phúng, không hù dọa, gây sợ bằng tò mò · 1 long và 7 short · mỗi video có hook ở đầu, gợi ý tập sau hoặc kêu gọi đăng ký ở cuối.
Giữ đúng tiền đề đã hứa ở cuối P01: **"một ông công chức âm phủ đến xưởng may điểm danh… và điểm nhầm đúng một người."**
Cốt truyện lấy từ bible §4 tập 2 và các sửa ở §6: giám đốc sửa giờ chết, máy chấm công in tên, ba tiếng mõ, thần trùng không lấy mạng mà lấy lịch, câu "trừ chuyên cần".

**Ý chính:** giám đốc dùng bút máy sửa giờ chết của công nhân để né bồi thường tai nạn lao động. Giờ sửa lại rơi đúng giờ trùng. Theo luật, thần trùng phải quay lại điểm danh thêm một người nhà. Thần trùng soi giấy và thấy nét bút không phải của người nhà. Luật âm phủ quy định ai đặt giờ chết cho người ta thì người đó là người nhà. Vì vậy giám đốc bị "điểm nhầm". Ma Nó gọi là nhầm, còn âm phủ bảo không nhầm.

**Khoảnh khắc rợn duy nhất:** 3 giờ sáng, điện thoại giám đốc hiện thông báo "Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00", kèm ba tiếng mõ sắt.
**Cú lật:** thần trùng không lấy mạng mà lấy lịch. Giám đốc phải để tang 49 ngày như con trai ruột của người công nhân, cuối cùng phải tự sửa lại giấy cho đúng và bồi thường.

## Nhân vật và giọng (VieNeu)
| Mã | Nhân vật | Hình | Giọng | fx đề xuất |
|---|---|---|---|---|
| TT | Thần trùng: công chức âm phủ, xưng "ta", giọng lạnh như đọc biên bản | **B04** (mũ cối xanh, kính dày, mỏ sắt, áo cán bộ 80s, sổ + bút máy) | Thiền Tâm Đức (mới) | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2`, chậm, đều |
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34 | Thiện Minh | giữ như P01 |
| PHAT | Giám đốc Phát: bụng to, dây chuyền vàng, áo polo, luôn cầm bút máy | **vẽ mới** | Adam bựa (mới) | `atempo=1.05` |
| HONG | Chị Hồng, tổ trưởng chuyền may, ~40 tuổi, khăn trùm tóc, áo đồng phục | **vẽ mới** | Ngọc Huyền (mới) | không |
| (Lộc) | Anh Lộc, công nhân đã mất. Chỉ xuất hiện qua ảnh thờ và cảnh hồi tưởng nhẹ, không có thoại | **vẽ mới** | — | — |

Cần thêm 3 giọng vào `tools/tts_lines.py` (`TT`, `PHAT`, `HONG`). Ở bước 3 sẽ đọc thử 1 câu mỗi giọng trước khi đọc cả bài.

## Kỹ thuật dựng (giữ như P01)
Shot 2–4 s cắt từ ảnh 2048×1152, có rung, chớp trắng, cutout bay (rembg `isnet-anime`), chữ bật, chữ thông báo điện thoại, sfx, nhạc nền có duck.
SFX mới cần thêm: **mõ sắt 3 nhịp** (khác mõ gỗ CỘC của Ma Nó), máy chấm công in thẻ "tạch tạch", máy may chạy rào rào, loa cầm tay rè, ngòi bút sột soạt.
Ký hiệu khung giống P01: `N05/toàn`, `B04/cận-mặt`, `N13/cận-điện thoại`…

---

## LONG (675 chữ lời, 46 câu ≈ 3,5–4 phút; mốc giờ là ước tính)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N14/cận-máy chấm công, xưởng tối | *(im)* | mõ sắt ×3 "cốc… cốc… cốc" · chữ "3:00 SÁNG" |
| N15 (thẻ nhô ra, phát sáng) | | sfx in thẻ tạch tạch · chữ bật "NGUYỄN VĂN PHÁT — CÓ MẶT" |
| N13/cận-mặt Phát, ánh điện thoại | **PHAT** (thì thào): Tôi… tôi chưa chết mà? | rung điện thoại |
| B04/cận-mặt | **TT**: Ta biết. Nhưng giấy của anh ghi anh là người nhà người chết. | |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn → cận | **MN**: Khoan. Một ông công chức âm phủ, đi làm đúng giờ, điểm danh một ông giám đốc còn sống nhăn. | mõ CỘC |
| S26/cận | **MN**: Nhầm à? Âm phủ bảo: không nhầm. | |
| S01/cận-mắt | **MN**: Lùi lại mười ngày. Tao kể. | tua ngược |

### 0:30 — Xưởng "chấm vào, không chấm ra"
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N09/toàn (văn phòng âm phủ) | **TT**: Ta là thần trùng. Ta không bắt ai. Ta làm sổ. | sfx lật sổ |
| N01/toàn → cận | **TT**: Hồ sơ: xưởng may Phát Đạt. Ba trăm công nhân. Ca đêm đến hai giờ sáng. | máy may rào rào |
| N03/toàn → cận-mặt | **TT**: Giám đốc: Nguyễn Văn Phát. Câu cửa miệng: xưởng là nhà. | chữ "XƯỞNG LÀ NHÀ ❤" |
| N04/toàn → cận-tay | **TT**: Ở nhà thì không ai tính giờ. Nên máy chấm công của xưởng chỉ có nút vào. Không có nút ra. | chữ "CHẤM VÀO ✔ · CHẤM RA ✖" · sfx tách |
| N12/cận-Phát cầm loa | **PHAT**: Tăng ca là cống hiến! Ai về sớm, trừ chuyên cần! | loa rè · chữ "TRỪ CHUYÊN CẦN" |

### 1:00 — Anh Lộc
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N05/toàn | **TT**: Công nhân Trần Văn Lộc, bốn mươi mốt tuổi, tổ may số ba. Hai giờ mười sáng thứ Năm, anh gục xuống máy may. | máy may tắt dần |
| N06/toàn | **TT**: Và không dậy nữa. Sổ của ta ghi: hai giờ mười. Tại xưởng. | nhạc tắt 1 nhịp · tích tắc |
| N05/cận-Hồng | **HONG**: Anh Lộc… anh Lộc ơi. | |
| N03/cận-Phát | **TT**: Giám đốc nghe tin không hỏi anh Lộc thế nào. Anh ta hỏi: lúc đó có camera không. | |

### 1:25 — Cây bút máy
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N07/toàn | **TT**: Chết ở xưởng, trong giờ làm, là tai nạn lao động. Phải bồi thường. Thanh tra sẽ hỏi vì sao máy chấm công không có nút ra. | |
| N08/cận-tay bút | **TT**: Nên anh ta mở nắp bút máy. Hai giờ mười, sửa thành năm giờ sáng. Tại xưởng, sửa thành tại nhà riêng. | chữ gạch "2:10 · TẠI XƯỞNG" → "5:00 · TẠI NHÀ" · ngòi bút sột soạt |
| N07/cận-khe cửa | **TT**: Chị tổ trưởng Hồng đứng sau cửa, thấy hết. | |
| N07/cận-Phát | **PHAT**: Giấy ghi thế nào, sự thật là thế. | |

### 1:55 — Luật của thần trùng
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N09/cận-sổ | **TT**: Ta không đọc đồng hồ. Ta đọc giấy. Giấy là thủ tục. Thủ tục là ta. | mõ sắt ×1 |
| N10/toàn → cận-kính lúp | **TT**: Năm giờ sáng hôm ấy rơi đúng giờ trùng. Ai mất vào giờ trùng, ta phải quay lại điểm danh thêm một người nhà. | chữ to "GIỜ TRÙNG" |
| N11/toàn (ảnh thờ) | **TT**: Nhà anh Lộc còn một người vợ, một con gái nhỏ. | im 1 s |
| S26/cận (Ma Nó hoảng) | **MN**: Khoan khoan. Giám đốc sửa giấy, mà nhà người ta phải trả à? | bass down |

### 2:20 — Tin đồn
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N12/toàn | **TT**: Tin đồn chạy khắp xưởng, nhanh hơn kim máy may. Trùng tang. | rì rầm |
| N12/cận-Hồng | **HONG**: Anh Lộc mất ở đây, lúc hai giờ mười. Cả tổ ba đều biết. | |
| N12/cận-Phát | **PHAT**: Trùng tang là mê tín! Ai nghỉ làm vì ma, trừ lương! | loa rè · chữ "TRỪ LƯƠNG" |
| S19/phải (ông bán vòng) | **MN**: Ông thầy đầu ngõ lại bán vòng chống trùng, giảm giá năm mươi phần trăm. Vẫn ông ấy. | chữ "-50%" |

### 2:45 — Đêm điểm danh
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N14/toàn | **TT**: Ba giờ sáng thứ Bảy, ta đến xưởng. Gõ mõ ba nhịp. Mở sổ. | mõ sắt ×3 |
| N10/cận-giấy | **TT**: Người cần điểm danh: một người nhà anh Lộc. Ta soi lại tờ giấy lần cuối. Dòng giờ chết, mực tím. Không phải chữ bệnh viện. | |
| B04/cận-bút máy | **TT**: Nét bút này không phải của vợ anh Lộc. Cũng không phải của con gái anh ấy. | |
| N14/cận-mặt TT | **TT**: Luật âm phủ: ai đặt giờ chết cho người ta, người đó là người nhà. | chữ to "AI SỬA GIỜ — NGƯỜI ĐÓ LÀ NGƯỜI NHÀ" |
| N15 | | in thẻ tạch tạch · chữ "NGUYỄN VĂN PHÁT" |
| N13/toàn → cận-điện thoại | **TT**: Cùng giây đó, điện thoại giám đốc sáng lên. | thông báo "🔔 Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00" · rung · mõ sắt ×3 |
| N13/cận-mặt (rung) | **PHAT**: Tôi chưa chết mà? | |
| B04/cận-mặt | **TT**: Ta biết. Mạng anh chưa đến giờ. Ta không lấy mạng anh. | im 1 s |

### 3:25 — Lấy lịch
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N09/cận-TT đóng dấu | **TT**: Ta lấy lịch của anh. | sfx đóng dấu "cộp" |
| N16/toàn → cận-Phát | **TT**: Người nhà thì phải để tang. Bốn mươi chín ngày, cứ ba giờ sáng anh có mặt ở xưởng, quấn khăn tang, quỳ trước ảnh anh Lộc như con trai ruột. | chữ "49 NGÀY · 3:00 SÁNG" |
| N17/toàn | **TT**: Ban ngày đi gặp đối tác, khăn tang không tháo ra được. | sfx dế kêu · chữ "?" bật trên đầu đối tác |
| N18/toàn (xe máy, khăn bay) | **TT**: Hôm nào anh ta ngủ quên, máy chấm công tự in tên. Sáng ra cả xưởng thấy tên giám đốc dán kín cửa. | whoosh · in thẻ dồn dập |
| N16/cận-Phát mếu | **PHAT**: Bao giờ mới hết? | |
| B04/cận-mặt | **TT**: Khi giấy đúng. | mõ sắt ×1 |

### 4:00 — Cú lật và kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N19/toàn → cận-phong bì | **TT**: Ngày thứ bốn mươi chín, giám đốc tự tay sửa lại giấy: hai giờ mười, tại xưởng, tai nạn lao động. Tiền bồi thường đến tay vợ anh Lộc. | |
| N21/toàn | **TT**: Máy chấm công giờ có thêm nút ra. Tăng ca thì tính tiền. | chữ "CHẤM RA ✔" · tiếng công nhân vỗ tay nhỏ |
| N20/toàn | **TT**: Ta đóng sổ. Ta không lấy mạng nó. Ta lấy lịch của nó. Với loại người này, thế còn đau hơn. | sfx gập sổ |
| N20/cận-mặt nhếch | **TT**: À. Có ba buổi nó đến muộn. Tháng này, trừ chuyên cần. | chữ "TRỪ CHUYÊN CẦN" · mõ sắt ×1 |
| S33/toàn → S34/cận | **MN**: Ba trăm năm ngồi nóc tủ, lần đầu tao thấy âm phủ làm việc đúng giờ hơn công ty. | |
| B05 (ma xó ôm hũ) | **MN**: Tuần sau: đứa trẻ giữ của ba đời trong căn nhà phố cổ, và cái hũ không ai được mở. | thẻ "Tập sau" |
| S06 mờ + cutout Ma Nó | **MN**: Bấm đăng ký đi. Không thì ba giờ sáng nay, máy chấm công nhà mày in tên mày đấy. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## 7 SHORTS (9:16, mỗi short ~100–170 chữ, cắt từ long)
Mỗi short: hook 0–3 s là câu hoặc hình gắt nhất của đoạn; kết bằng câu hỏi bỏ lửng cộng CTA của Ma Nó, gắn "Video liên quan" → long.
Câu trùng với bản long thì dùng lại wav; chỉ đọc mới hook và CTA (giống P01).

### SH1 — "Chấm vào, không chấm ra" (26/11)
- **Hook (N04 dọc, tay rút nút):** TT: Máy chấm công xưởng này chỉ có nút vào. Không có nút ra.
- **Thân:** N01 xưởng đêm → N03 "Xưởng là nhà" → N12 Phát "Ai về sớm, trừ chuyên cần!" → N05 anh Lộc gục 2:10 → N06 ghế trống.
- **Kết (N03 cận Phát):** TT: Giám đốc không hỏi anh Lộc. Anh ta hỏi: có camera không. · chữ "Anh ta định làm gì?" · MN CTA

### SH2 — "Một cây bút máy" (27/11)
- **Hook (N08 cận tay bút):** TT: Hai giờ mười thành năm giờ sáng. Chỉ cần một cây bút.
- **Thân:** N07 tai nạn lao động phải bồi thường → N08 sửa giấy → N07 Hồng sau khe cửa → PHAT "Giấy ghi thế nào, sự thật là thế."
- **Kết (N10):** TT: Năm giờ sáng hôm ấy… là giờ trùng. · chữ "Giờ trùng là gì? 👇"

### SH3 — "Giờ trùng" (28/11)
- **Hook (N10 kính lúp):** TT: Ai mất vào giờ này, ta phải quay lại lấy thêm một người.
- **Thân:** N09 "Ta đọc giấy, không đọc đồng hồ" → N11 nhà anh Lộc còn vợ, con gái nhỏ → S26 MN "Giám đốc sửa giấy mà nhà người ta phải trả à?" → N12 PHAT "Trùng tang là mê tín! Trừ lương!"
- **Kết (N14 toàn):** TT: Ba giờ sáng thứ Bảy, ta đến xưởng. · chữ "Ai bị điểm danh?"

### SH4 — "Mực tím" (29/11)
- **Hook (N14 + mõ ×3):** chữ "3:00 SÁNG · XƯỞNG MAY KHÔNG MỘT BÓNG NGƯỜI" · mõ sắt ×3
- **Thân:** N10 soi giấy, mực tím, không phải chữ bệnh viện → B04 cận bút "không phải của vợ, cũng không phải của con" → N14 "Ai sửa giờ, người đó là người nhà."
- **Kết (N15 thẻ in):** sfx tạch tạch · chữ "Thẻ in tên ai?"

### SH5 — "Có mặt 03:00" (30/11)
- **Hook (N13 cận điện thoại):** thông báo "🔔 Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00" · PHAT: Tôi chưa chết mà?
- **Thân:** B04 "Ta biết. Giấy của anh ghi anh là người nhà người chết." → N15 → B04 "Ta không lấy mạng anh."
- **Kết (N09 đóng dấu):** TT: Ta lấy… thứ khác. · chữ "Lấy gì? 👇"

### SH6 — "49 đêm khăn tang" (1/12)
- **Hook (N16 cận Phát quấn khăn tang):** TT: Giám đốc quỳ để tang công nhân của mình. Bốn mươi chín đêm.
- **Thân:** N16 quỳ 3 giờ sáng → N17 gặp đối tác đeo khăn tang → N18 ngủ quên, tên dán kín cửa → PHAT "Bao giờ mới hết?"
- **Kết (B04):** TT: Khi giấy đúng. · chữ "Giấy có đúng không? → video đầy đủ"

### SH7 — "Trừ chuyên cần" (2/12)
- **Hook (N20 cận TT):** TT: Ta không lấy mạng nó. Ta lấy lịch của nó.
- **Thân:** N19 sửa lại giấy, bồi thường đến tay vợ anh Lộc → N21 có nút ra → N20 "Ba buổi đến muộn. Tháng này, trừ chuyên cần."
- **Kết (B05 → Ma Nó):** MN: Tuần sau: ma xó giữ của ba đời. Đăng ký đi. · CỘC

(Lịch: long trước T5 26/11; short nối tiếp từ 26/11 đến 2/12, mỗi ngày một video.)

---

## Hình: tận dụng gì, vẽ mới gì

### Tận dụng (không vẽ)
| Ảnh | Dùng cho |
|---|---|
| `assets/muse-v2/B04.png` (1344×1792, có sẵn xưởng may + máy chấm công + bút máy) | Mọi cận mặt, cận bút, cận sổ của TT; thumbnail. Cutout rembg để TT "bay" vào các cảnh |
| `assets/muse-v2/B02.png`, ep01 `S01, S26, S33, S34` | Ma Nó: mồi, hoảng, chốt |
| ep01 `S19` (nửa phải: ông mỏ quạ bán vòng) | Gag "ông thầy bán vòng, vẫn ông ấy" (callback P01) |
| ep01 `S06` (ngõ đêm) | Nền mờ cho CTA, như P01 |
| `assets/muse-v2/B05.png` (ma xó ôm hũ) | Teaser tập sau |

### Thiếu: 21 cảnh mới (16:9, 2048×1152)
Phần thiếu là không có ảnh xưởng, giám đốc, chị Hồng, đám tang hay cảnh ba giờ sáng. B04 chỉ đủ cho các cận mặt của thần trùng.
Không có các cảnh này thì long chỉ xoay vòng quanh 1 ảnh B04, đúng kiểu P01 cũ mà user đã chê là "toàn zoom".

| Mã | Cảnh | Khung sẽ cắt |
|---|---|---|
| N01 | Xưởng may đêm: hàng dài máy may xanh, đèn tuýp lạnh, công nhân cúi đầu, đồng hồ tường 2 giờ | toàn · cận công nhân · cận đồng hồ |
| N02 | *(bỏ, gộp vào N04/N14)* | — |
| N03 | Phòng giám đốc Phát: bụng to, dây chuyền vàng, áo polo, ghế da, két sắt, tượng thần tài, xoay bút máy | toàn · cận mặt · cận bút |
| N04 | Phát cười tươi gỡ nút "ra" khỏi máy chấm công cũ ở cửa xưởng | toàn · cận tay |
| N05 | Anh Lộc (gầy, hiền, áo đồng phục) ngủ gục trên máy may lúc khuya; chị Hồng ở máy bên quay sang. Tông hồi tưởng, êm, không đau đớn | toàn · cận Hồng |
| N06 | Ghế trống cạnh máy may, áo khoác vắt ghế, cuộn chỉ, ánh trăng qua cửa sổ | toàn · cận áo |
| N07 | Phát lén sửa giấy dưới đèn bàn; chị Hồng nhìn qua khe cửa phía sau | toàn · cận khe cửa · cận Phát |
| N08 | Cận tay mập đeo nhẫn vàng cầm bút máy sửa tờ giấy (không chữ) | cận · cực cận ngòi |
| N09 | Văn phòng âm phủ kiểu cơ quan 80s: chồng hồ sơ, quạt trần, đèn dầu ánh xanh, con dấu; TT lật sổ | toàn · cận sổ · cận dấu |
| N10 | TT soi tờ giấy bằng kính lúp, ánh tím trên mặt kính | toàn · cận kính |
| N11 | Bàn thờ nhỏ ở nhà: ảnh anh Lộc mỉm cười, hương khói; vợ và con gái nhỏ áo tang trắng ngồi lặng; vài công nhân | toàn · cận ảnh thờ |
| N12 | Căn tin xưởng: công nhân thì thầm; Phát đứng trên ghế nhựa đỏ, cầm loa cầm tay quát; chị Hồng khoanh tay | toàn · cận Phát · cận Hồng |
| N13 | 3 giờ sáng: Phát nằm trên giường, điện thoại sáng rực trên mặt, mắt trợn; vợ quay lưng ngủ | toàn · cận mặt · cận điện thoại |
| N14 | Xưởng tối 3 giờ: TT đứng cạnh máy chấm công, tay gõ mõ sắt, máy may phủ vải trắng | toàn · cận TT · cận máy |
| N15 | Cận máy chấm công: tấm thẻ giấy trắng trồi ra, phát sáng mờ (không chữ) | cận |
| N16 | Phát quấn khăn tang trắng, quỳ trước ảnh anh Lộc trong xưởng lúc đêm; công nhân ca đêm nhìn | toàn · cận Phát mếu |
| N17 | Phát quấn khăn tang ngồi bàn họp sang trọng với đối tác vest, đối tác ngơ ngác | toàn |
| N18 | Phát mặc vest, khăn tang bay, phóng xe máy trong đêm về xưởng | toàn |
| N19 | Phát cúi đầu đưa phong bì cho vợ anh Lộc; chị Hồng gật; TT đứng sau đóng dấu vào sổ | toàn · cận phong bì |
| N20 | TT gập sổ, đẩy kính, nhếch mép rất nhẹ, văn phòng âm phủ | toàn · cận mặt |
| N21 | Xưởng ban ngày sau đó: công nhân chấm công ra về, cười; chị Hồng vẫy tay | toàn |
| N22 | Sheet biểu cảm TT, 4 tư thế trên nền chàm trơn (chán đời, nhướng mày đọc sổ, gõ mõ, nhếch mép) | cutout gag |
| N23 | Sheet biểu cảm Phát, 4 tư thế (cười gian, hoảng, mếu, quỳ khăn tang) | cutout gag |

= 22 ảnh (N01, N03–N23).

### Cách tạo và chi phí
| Cách | Ảnh ra | Chi phí | Nhận xét |
|---|---|---|---|
| **A. Muse (đề xuất)**: gửi 1 tin như `ep01/muse-msg.txt`, đính kèm B04 làm tham chiếu nhân vật. Agent lái trình duyệt, user đăng nhập sẵn | 2048×1152, cùng style B01–B10 và ep01 | Nằm trong gói Muse của user, không tốn thêm tiền. Hạn mức gói Muse: chưa rõ, cần user xác nhận | Đồng bộ nhất với P01; ep01 đã chạy 34 ảnh một lần |
| B. Google Flow | ~1376×768 hoặc tùy chọn | Theo gói Google | Note 18/11 ghi Flow bị **cảnh báo unusual activity, đang dừng**, nên chỉ dùng khi user muốn thử lại |
| C. `agy` (Antigravity, Nano Banana), script `rice-and-empires/tools/imagegen/agy_gen.py` | 1376×768 | Nằm trong quota Google AI, chạy ngoài Claude | Độ phân giải thấp: khung dọc chỉ còn ~430 px ngang, mờ khi lên 1080. Chỉ dùng làm dự phòng |

Không đề xuất clip AI video: không cần và tốn tiền (Kling/Hailuo ~$0,05–0,17/s).

### Tin nhắn Muse (nháp, dùng ở bước 2)
```
Episode 2 scene images for 'Ma No Ke'. Cloud only. Make 22 images, ALL 16:9, named N01.png, N03.png ... N23.png (no N02), same V2 style as B01–B10 and the episode 1 scenes. No text, letters or digits anywhere in images (paper, cards, screens are blank). Characters, keep consistent across all images:
- Than Trung = EXACTLY the bureaucrat demon of B04 (attached): grey skin, crow-like iron beak, thick retro brown glasses, faded green cadre cap with small star, green 1980s cadre tunic, ledger and fountain pen; bored, deadpan.
- Phat = factory director, Vietnamese man in his 50s, big belly, slicked hair, gold chain, tight polo shirt, gold ring, always holding a fountain pen; smug caricature.
- Hong = Vietnamese woman ~40, sewing-line team leader, factory uniform, hair scarf, calm sharp eyes.
- Loc = thin kind Vietnamese man ~40, factory uniform (only in N05 and as a smiling portrait photo).
STYLE: flat 2D cartoon illustration, cute-creepy and satirical, clean bold outlines, flat color shapes with soft simple shading, big-headed characters with very expressive faces, Vietnamese everyday setting; night palette of deep indigo and dark moss green with warm accents from oil lamp, yellow night light and phone glow; tidy, charming, slightly eerie, never gross; no gore, no wrinkles detail, no text, not a children's cartoon: sharp sly eyes and adult wit.
SCENES:
N01: Night garment factory, long rows of green sewing machines, cold tube lights, tired workers bent over machines, wall clock near 2 o'clock.
N03: Director Phat in his office on a leather chair, safe and golden God-of-Wealth statue behind, twirling a fountain pen, smug.
N04: Phat grinning while pulling the 'out' button off an old factory time-clock machine at the factory door.
N05: Memory tone, soft and peaceful: Loc asleep with his head on his sewing machine late at night, Hong at the next machine turning to look at him. No pain, no blood.
N06: Empty chair by a sewing machine, a worker jacket hanging on it, a spool of thread, moonlight through the window.
N07: Phat secretly altering a paper under a desk lamp, Hong watching through a door gap behind him.
N08: Close-up of a chubby hand with a gold ring altering a blank form with a fountain pen, purple ink.
N09: Underworld office like a 1980s Vietnamese state office: stacks of dossiers, ceiling fan, oil lamp with blue-green flame, rubber stamp; Than Trung flipping a huge ledger.
N10: Than Trung inspecting a blank paper with a magnifying glass, purple glint on the lens.
N11: Small home altar with a smiling portrait of Loc and incense smoke; his wife and small daughter in white mourning clothes sitting quietly; a few factory workers.
N12: Factory canteen, workers whispering; Phat standing on a red plastic stool shouting into a hand-held megaphone; Hong with arms crossed.
N13: 3 a.m., Phat in bed, phone glowing hard on his face, eyes wide; his wife asleep with her back turned.
N14: Dark factory at 3 a.m., sewing machines covered with white cloth, Than Trung standing by the time-clock machine striking a small iron clapper.
N15: Close-up of the time-clock machine pushing out a blank white card, faint glow.
N16: Night, Phat wearing a white mourning headband, kneeling before Loc's portrait inside the factory, night-shift workers watching.
N17: Phat in a white mourning headband at a fancy meeting table with business partners in suits, partners puzzled.
N18: Phat in a suit riding a motorbike through the night, white mourning headband flapping, rushing to the factory.
N19: Phat bowing and handing an envelope to Loc's wife; Hong nodding; Than Trung behind them stamping his ledger.
N20: Than Trung closing his ledger, pushing up his glasses, the faintest smirk, underworld office.
N21: Factory by day: workers clocking out happily at the time clock, Hong waving.
N22: Character sheet of Than Trung, 4 poses on plain deep indigo background: bored, raising an eyebrow reading the ledger, striking the iron clapper, faint smirk.
N23: Character sheet of Phat, 4 poses on plain deep indigo background: sly grin, panicked, crying pout, kneeling with mourning headband.
When all are done, zip as ep02-scenes.zip and give me a public link; list any scene you changed.
```

## Cần user quyết
1. Tên giám đốc "Phát", xưởng "Phát Đạt", anh "Lộc", chị "Hồng": đổi được.
2. Chi tiết "con gái nhỏ" chỉ được nhắc tới, luật không thực hiện tới cô bé. Bé tạo tò mò và chưa từng gặp nguy. Nếu muốn an toàn hơn thì bỏ, chỉ giữ "người vợ".
3. Teaser cuối long là P03 ma xó (theo thứ tự bible §4). Có thể đổi sang tập khác.
4. Cách vẽ: A (Muse, đề xuất) / B (Flow) / C (agy).
