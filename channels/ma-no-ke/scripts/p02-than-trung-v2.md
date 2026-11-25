# Dự án 2 — Thần trùng "Điểm danh nhầm" (v2, 2026-11-19 23:45 +07)

Theo bible-v2 §7: trào phúng, không hù dọa, gây sợ bằng tò mò · 1 long và 7 short · mỗi video có hook ở đầu, gợi ý tập sau hoặc kêu gọi đăng ký ở cuối.
Tiền đề đã hứa ở cuối P01, giữ nguyên: **"một ông công chức âm phủ đến xưởng may điểm danh… và điểm nhầm đúng một người."**

## Sửa so với v1 (sau khi agy chấm, `debate/06-p02/agy-r1.md`)
| agy chê (điểm v1) | v2 sửa | Nhận hay không |
|---|---|---|
| Logic 5.5: vì sao thần trùng lại bắt giám đốc; "người nhà" bị ép | Giám đốc **tự ký tờ khai thay gia đình, ghi quan hệ "như người nhà"** (đúng khẩu hiệu "xưởng là nhà"). Thần trùng làm theo giấy nên nhầm thật, nhưng nhầm đúng quy trình. Câu của giám đốc "Giấy ghi thế nào, sự thật là thế" quay lại trói chính lão | Nhận |
| Cold open lộ đáp án ngay giây thứ 10 | Thần trùng chỉ nói: "Âm phủ làm theo giấy. Giấy có tên anh. Có mặt." | Nhận. Không nhận câu "ba giờ sáng mai ta tới lấy mạng" (thành hù dọa, trái §7) |
| Thần trùng kể lể như phát thanh viên | Ma Nó kể đoạn hóng hớt (xưởng, camera, tờ khai). Thần trùng chỉ còn câu biên bản cộc lốc, câu phán và câu thủ tục | Nhận một phần: thần trùng vẫn là "khách" kể, vì kênh là ma tự kể chuyện |
| Con gái nhỏ gây ác cảm | Bỏ. Chỉ còn người vợ ở quê. Nhờ cái nhầm mà vợ anh Lộc thoát | Nhận |
| "Lấy lịch" nghe hiền | Thành thủ tục: người nhà thì phải để tang; giấy chưa đúng thì cứ là người nhà; hết 49 ngày mà giấy vẫn sai thì điểm danh lần nữa, "lần đó không cần thẻ". Thêm gag hối lộ: "Tôi đốt cho ông cái xe hơi!" / "Ta đi làm bằng xe đạp." | Nhận |
| Vì sao sửa giấy lại hết trùng | Hai giờ mười không phải giờ trùng, hồ sơ không còn người nhà, thần trùng "hết thẩm quyền" | Nhận |
| Câu TTS dài | Câu của thần trùng cắt ngắn, mỗi câu một ý | Nhận |
| Hình: gộp N07+N08, bỏ N18, thêm cực cận tờ khai; sửa prompt khăn tang, Ông Địa Thần Tài, bàn thờ | Đã sửa | Nhận |
| YouTube "gắt" với chuyện mất vì tăng ca | Giữ cách nói nhẹ ("gục xuống máy may, không dậy nữa"), không có thi thể, chỉ có ghế trống | Nhận cách nói nhẹ. Mức độ rủi ro agy nêu là phỏng đoán, chưa có nguồn |

**Ý chính v2:** giám đốc sửa giờ mất của công nhân từ 2:10 tại xưởng thành 5:00 tại nhà để né đền tai nạn lao động, rồi tự ký tờ khai thay gia đình với quan hệ "như người nhà". Năm giờ sáng là giờ trùng, nên thần trùng phải quay lại điểm danh một người nhà. Tờ khai ghi người nhà là giám đốc, vậy là điểm nhầm giám đốc. Thần trùng không lấy mạng, chỉ lấy lịch: giám đốc phải để tang cho tới khi giấy đúng.
**Khoảnh khắc rợn duy nhất:** 3 giờ sáng, điện thoại hiện "Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00", kèm ba tiếng mõ sắt.

## Nhân vật và giọng (VieNeu)
| Mã | Nhân vật | Hình | Giọng | fx đề xuất |
|---|---|---|---|---|
| TT | Thần trùng: công chức âm phủ, xưng "ta", nói như đọc biên bản | **B04** | Thiền Tâm Đức (mới) | `asetrate=48000*0.95,aresample=48000,aecho=0.8:0.5:40:0.2` |
| MN | Ma Nó: hóng chuyện, bình luận | B02, ep01 S01/S26/S33/S34 | Thiện Minh | như P01 |
| PHAT | Giám đốc Phát | vẽ mới | Adam bựa (mới) | `atempo=1.05` |
| HONG | Chị Hồng, tổ trưởng | vẽ mới | Ngọc Huyền (mới) | không |
| (Lộc, vợ Lộc) | Không có thoại | vẽ mới | — | — |

Bước 3: thêm `TT`, `PHAT`, `HONG` vào `tools/tts_lines.py`, đọc thử mỗi giọng một câu trước khi đọc cả bài.
SFX mới cần thêm: mõ sắt (khác mõ gỗ CỘC của Ma Nó), máy chấm công in thẻ, máy may chạy, loa cầm tay rè, ngòi bút sột soạt, đóng dấu, tiếng dế.

---

## LONG (lời ≈ 700 chữ ≈ 3,5–4 phút; mốc giờ là ước tính)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N14/cận-máy chấm công, xưởng tối | *(im)* | mõ sắt ×3 · chữ "3:00 SÁNG" |
| N15 (thẻ nhô ra) | | in thẻ tạch tạch · chữ "NGUYỄN VĂN PHÁT — CÓ MẶT" |
| N13/cận-mặt Phát, ánh điện thoại | **PHAT** (thì thào): Tôi… tôi còn sống mà? Điểm danh tôi làm gì? | rung |
| B04/cận-mặt | **TT**: Âm phủ làm theo giấy. Giấy có tên anh. Có mặt. | |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn → cận | **MN**: Khoan. Công chức âm phủ, đi làm đúng giờ, điểm danh một ông giám đốc còn sống nhăn. | mõ CỘC |
| S26/cận | **MN**: Nhầm à? Nhầm thật. Mà nhầm đúng người. | |
| S01/cận-mắt | **MN**: Lùi lại mười ngày. Tao kể. | tua ngược |

### 0:28 — Xưởng "chấm vào, không chấm ra"
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N09/toàn | **TT**: Ta là thần trùng. Ta không bắt ai. Ta làm sổ. | lật sổ |
| N01/toàn → cận | **TT**: Hồ sơ. Xưởng may Phát Đạt. Ba trăm công nhân. Ca đêm đến hai giờ sáng. | máy may rào rào |
| N03/toàn → cận-mặt | **MN**: Giám đốc Phát. Câu cửa miệng: xưởng là nhà. | chữ "XƯỞNG LÀ NHÀ ❤" |
| N04/toàn → cận-tay | **MN**: Mà ở nhà thì ai tính giờ về? Nên máy chấm công ở đây chỉ có nút vào. Không có nút ra. | chữ "CHẤM VÀO ✔ · CHẤM RA ✖" · tách |
| N12/cận-Phát cầm loa | **PHAT**: Tăng ca là cống hiến! Ai về sớm, trừ chuyên cần! | loa rè · chữ "TRỪ CHUYÊN CẦN" |

### 0:55 — Anh Lộc
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N05/toàn | **TT**: Trần Văn Lộc. Tổ may số ba. Hai giờ mười sáng thứ Năm, gục xuống máy may. | máy may tắt dần |
| N06/toàn | **TT**: Không dậy nữa. Sổ ghi: hai giờ mười. Tại xưởng. | nhạc tắt 1 nhịp · tích tắc |
| N05/cận-Hồng | **HONG**: Anh Lộc… anh Lộc ơi. | |
| N03/cận-Phát | **MN**: Việc đầu tiên lão giám đốc hỏi không phải anh Lộc thế nào. Lão hỏi: chỗ đó camera có quay tới không. | |

### 1:20 — Tờ khai
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N07/toàn | **MN**: Mất ở xưởng, trong giờ làm, là tai nạn lao động. Phải đền. Thanh tra còn hỏi vì sao máy chấm công không có nút ra. | |
| N07/cận-tay bút | **MN**: Nên đêm đó lão tự viết tờ khai. Hai giờ mười, sửa thành năm giờ sáng. Tại xưởng, sửa thành tại nhà. | ngòi bút sột soạt · chữ gạch "2:10 · TẠI XƯỞNG" → "5:00 · TẠI NHÀ" |
| N08/cực cận tờ khai | **MN**: Vợ anh Lộc ở quê chưa lên kịp. Lão ký luôn chỗ người khai. Mục quan hệ, lão viết: như người nhà. | chữ "NGƯỜI KHAI: NGUYỄN VĂN PHÁT · QUAN HỆ: NHƯ NGƯỜI NHÀ" · đóng dấu |
| N07/cận-khe cửa | **MN**: Chị tổ trưởng Hồng đứng sau cửa. Thấy hết. | |
| N07/cận-Phát | **PHAT**: Giấy ghi thế nào, sự thật là thế. | (gieo câu, sẽ trả lại ở 2:55) |

### 1:50 — Luật của thần trùng
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N09/cận-sổ | **TT**: Ta không đọc đồng hồ. Ta đọc giấy. Giấy là thủ tục. Thủ tục là ta. | mõ sắt ×1 |
| N10/toàn → cận-kính lúp | **TT**: Năm giờ sáng là giờ trùng. Ai mất vào giờ trùng, ta phải quay lại điểm danh thêm một người nhà. | chữ to "GIỜ TRÙNG" |
| N11/toàn (bàn thờ, vợ anh Lộc) | **TT**: Người nhà anh Lộc: một người vợ. Ở quê. | im 1 s |
| S26/cận (Ma Nó hoảng) | **MN**: Khoan khoan. Giám đốc sửa giấy, mà nhà người ta phải trả à? | bass down |

### 2:10 — Tin đồn
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N12/toàn | **MN**: Tin đồn chạy khắp xưởng, nhanh hơn kim máy may. Trùng tang. | rì rầm |
| N12/cận-Hồng | **HONG**: Anh Lộc mất ở đây, lúc hai giờ mười. Cả tổ ba đều biết. | |
| N12/cận-Phát | **PHAT**: Trùng tang là mê tín! Ai nghỉ làm vì ma, trừ lương! | loa rè · chữ "TRỪ LƯƠNG" |
| S19/phải (ông bán vòng) | **MN**: Ông thầy đầu ngõ lại bán vòng chống trùng, giảm năm mươi phần trăm. Vẫn ông ấy. | chữ "-50%" |

### 2:35 — Đêm điểm danh (cái nhầm)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N14/toàn | **TT**: Ba giờ sáng thứ Bảy. Xưởng may. Ta gõ mõ ba nhịp, mở hồ sơ. | mõ sắt ×3 |
| N08/cực cận tờ khai | **TT**: Cần điểm danh: một người nhà. Tờ khai ghi: Nguyễn Văn Phát. Như người nhà. | |
| N14/cận-mặt TT | **TT**: Ta điểm danh người nhà. | |
| N15 | | in thẻ · chữ "NGUYỄN VĂN PHÁT" |
| N13/toàn → cận-điện thoại | **MN**: Cùng giây đó, điện thoại giám đốc sáng lên. | thông báo "🔔 Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00" · rung · mõ sắt ×3 |
| N13/cận-mặt (rung) | **PHAT**: Tôi là giám đốc! Tôi không phải người nhà nó! | |
| B04/cận-mặt | **TT**: Giấy anh ký. Giấy ghi thế nào, sự thật là thế. | chữ to "GIẤY GHI THẾ NÀO, SỰ THẬT LÀ THẾ" |
| S01/cận | **MN**: Đấy. Nhầm. Nhưng nhầm đúng quy trình. Nhờ cái nhầm ấy, vợ anh Lộc ở quê vẫn ngủ ngon. | |

### 3:15 — Lấy lịch
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N23/Phát mếu (cutout) | **PHAT**: Tha cho tôi! Tôi đốt cho ông cái xe hơi! | |
| B04/cận-mặt | **TT**: Ta đi làm bằng xe đạp. Mạng anh chưa đến giờ. Ta không lấy. | sfx chuông xe đạp |
| N09/cận-TT đóng dấu | **TT**: Ta lấy lịch của anh. | đóng dấu "cộp" |
| N16/toàn → cận-Phát | **TT**: Người nhà thì phải để tang. Ba giờ sáng mỗi đêm, quấn khăn, quỳ trước ảnh anh Lộc. Như con trai. | chữ "3:00 SÁNG · MỖI ĐÊM" |
| N17/toàn | **MN**: Ban ngày đi gặp đối tác. Khăn tang không tháo ra được. | dế kêu · chữ "?" trên đầu đối tác |
| N15/cận (rung, in dồn dập) | **MN**: Đêm nào lão ngủ quên, máy chấm công tự in tên. Sáng ra, tên giám đốc dán kín cửa xưởng. | in thẻ dồn dập |
| N16/cận-Phát mếu | **PHAT**: Bao giờ mới hết? | |
| B04/cận-mặt | **TT**: Khi giấy đúng. Hết bốn mươi chín ngày mà giấy vẫn sai, ta điểm danh lần nữa. Lần đó không cần thẻ. | im 1 s · mõ sắt ×1 |

### 4:00 — Cú lật và kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| N19/toàn → cận-phong bì | **MN**: Đêm thứ bốn mươi tám, lão tự sửa lại giấy. Hai giờ mười. Tại xưởng. Tai nạn lao động. Tiền đền đến tay vợ anh Lộc. | |
| N10/cận | **TT**: Hai giờ mười không phải giờ trùng. Hồ sơ không còn người nhà. Hết thẩm quyền. | |
| N21/toàn | **MN**: Máy chấm công giờ có nút ra. Tăng ca thì tính tiền. | chữ "CHẤM RA ✔" · vỗ tay nhỏ |
| N20/toàn | **TT**: Ta đóng sổ. Ta không lấy mạng nó. Ta lấy lịch của nó. Với loại người này, thế còn đau hơn. | gập sổ |
| N20/cận-mặt nhếch | **TT**: À. Ba đêm nó quỳ muộn. Tháng này, trừ chuyên cần. | chữ "TRỪ CHUYÊN CẦN" · mõ sắt ×1 |
| S33/toàn → S34/cận | **MN**: Ba trăm năm ngồi nóc tủ, lần đầu tao thấy âm phủ làm việc đúng giờ hơn công ty. | |
| B05 (ma xó ôm hũ) | **MN**: Tuần sau: đứa trẻ giữ của ba đời trong căn nhà phố cổ, và cái hũ không ai được mở. | thẻ "Tập sau" |
| S06 mờ + cutout Ma Nó | **MN**: Bấm đăng ký đi. Không thì ba giờ sáng nay, máy chấm công nhà mày in tên mày đấy. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## 7 SHORTS (9:16, mỗi short ~100–170 chữ, cắt từ long)
Hook 0–3 s là câu hoặc hình gắt nhất. Kết bằng câu hỏi bỏ lửng cộng CTA của Ma Nó, gắn "Video liên quan" → long. Câu trùng với long thì dùng lại wav.

### SH1 — "Chấm vào, không chấm ra" (26/11)
- **Hook (N04 dọc):** MN: Máy chấm công xưởng này chỉ có nút vào. Không có nút ra.
- **Thân:** N01 → N03 "Xưởng là nhà" → N12 PHAT "Ai về sớm, trừ chuyên cần!" → N05 anh Lộc gục 2:10 → N06 ghế trống.
- **Kết (N03 cận Phát):** MN: Lão hỏi: chỗ đó camera có quay tới không. · chữ "Lão định làm gì?"

### SH2 — "Như người nhà" (27/11)
- **Hook (N08 tờ khai):** MN: Ông giám đốc ký vào tờ khai bốn chữ: như người nhà. Bốn chữ đắt nhất đời ông ấy.
- **Thân:** N07 tai nạn lao động phải đền → sửa 2:10 thành 5:00, xưởng thành nhà → Hồng sau khe cửa → PHAT "Giấy ghi thế nào, sự thật là thế."
- **Kết (N10):** TT: Năm giờ sáng… là giờ trùng. · chữ "Giờ trùng là gì? 👇"

### SH3 — "Giờ trùng" (28/11)
- **Hook (N10 kính lúp):** TT: Ai mất vào giờ này, ta phải quay lại điểm danh thêm một người nhà.
- **Thân:** N09 "Ta đọc giấy, không đọc đồng hồ" → N11 vợ anh Lộc ở quê → S26 MN "Giám đốc sửa giấy mà nhà người ta phải trả à?" → N12 PHAT "Trùng tang là mê tín! Trừ lương!"
- **Kết (N14):** TT: Ba giờ sáng thứ Bảy. Ta đến xưởng. · chữ "Ai bị điểm danh?"

### SH4 — "Giấy ghi thế nào" (29/11)
- **Hook (N14 + mõ ×3):** chữ "3:00 SÁNG · XƯỞNG MAY KHÔNG MỘT BÓNG NGƯỜI"
- **Thân:** N08 "Tờ khai ghi: Nguyễn Văn Phát. Như người nhà." → "Ta điểm danh người nhà." → N15 in thẻ → N13 thông báo.
- **Kết (N13 cận):** PHAT: Tôi không phải người nhà nó! · chữ "Thần trùng trả lời sao?"

### SH5 — "Có mặt 03:00" (30/11)
- **Hook (N13 cận điện thoại):** thông báo "🔔 Máy chấm công: Nguyễn Văn Phát — CÓ MẶT 03:00" · PHAT: Tôi còn sống mà?
- **Thân:** B04 "Giấy ghi thế nào, sự thật là thế." → MN "Nhầm đúng quy trình" → PHAT "Tôi đốt cho ông cái xe hơi!" → TT "Ta đi làm bằng xe đạp."
- **Kết (N09 đóng dấu):** TT: Ta không lấy mạng. Ta lấy… thứ khác. · chữ "Lấy gì? 👇"

### SH6 — "Khăn tang của giám đốc" (1/12)
- **Hook (N16 cận Phát quấn khăn tang):** MN: Giám đốc quỳ để tang công nhân của mình. Mỗi đêm, ba giờ sáng.
- **Thân:** N09 "Ta lấy lịch của anh" → N16 → N17 gặp đối tác đeo khăn tang → N15 ngủ quên in tên → PHAT "Bao giờ mới hết?"
- **Kết (B04):** TT: Hết bốn mươi chín ngày mà giấy vẫn sai… lần đó không cần thẻ. · chữ "Lão có sửa không? → video đầy đủ"

### SH7 — "Trừ chuyên cần" (2/12)
- **Hook (N20 cận TT):** TT: Ta không lấy mạng nó. Ta lấy lịch của nó.
- **Thân:** N19 sửa giấy, đền tiền → N10 "Hết thẩm quyền" → N21 có nút ra → N20 "Ba đêm quỳ muộn. Tháng này, trừ chuyên cần."
- **Kết (B05 → Ma Nó):** MN: Tuần sau: ma xó giữ của ba đời. Đăng ký đi. · CỘC

---

## Hình

### Tận dụng (không vẽ)
| Ảnh | Dùng cho |
|---|---|
| `assets/muse-v2/B04.png` | Mọi cận mặt, cận bút, cận sổ của TT; thumbnail; cutout |
| `assets/muse-v2/B02.png`, ep01 `S01, S26, S33, S34` | Ma Nó |
| ep01 `S19` (nửa phải) | Gag ông bán vòng (callback P01) |
| ep01 `S06` | Nền mờ cho CTA |
| `assets/muse-v2/B05.png` | Teaser tập sau |

### Vẽ mới: 21 ảnh (16:9, 2048×1152)
| Mã | Cảnh | Khung sẽ cắt |
|---|---|---|
| N01 | Xưởng may đêm, hàng máy may, đèn tuýp, công nhân cúi đầu, đồng hồ 2 giờ | toàn · cận công nhân · cận đồng hồ |
| N03 | Phòng giám đốc: ghế da, két sắt, bàn thờ Ông Địa Thần Tài dưới sàn, xoay bút máy | toàn · cận mặt · cận bút |
| N04 | Phát gỡ nút "ra" khỏi máy chấm công ở cửa xưởng, cười | toàn · cận tay |
| N05 | Hồi tưởng êm: anh Lộc ngủ gục trên máy may; chị Hồng ở máy bên quay sang | toàn · cận Hồng |
| N06 | Ghế trống, áo khoác vắt ghế, cuộn chỉ, ánh trăng | toàn · cận áo |
| N07 | (gộp N07+N08 cũ) Phát sửa giấy dưới đèn bàn, thấy rõ tay cầm bút; Hồng nhìn qua khe cửa | toàn · cận tay bút · cận khe cửa · cận Phát |
| N08 | (mới) Cực cận tờ khai trắng có chữ ký nguệch ngoạc mực tím và dấu đỏ tròn; chữ sẽ đè bằng Remotion | cận |
| N09 | Văn phòng âm phủ kiểu cơ quan 80s; TT lật sổ, con dấu | toàn · cận sổ · cận dấu |
| N10 | TT soi tờ giấy bằng kính lúp | toàn · cận |
| N11 | Bàn thờ quê đơn sơ: ảnh anh Lộc, bát hương; vợ anh Lộc khăn tang ngồi lặng; vài công nhân | toàn · cận ảnh |
| N12 | Căn tin: công nhân thì thầm; Phát đứng ghế nhựa đỏ cầm loa; Hồng khoanh tay | toàn · cận Phát · cận Hồng |
| N13 | 3 giờ sáng: Phát trên giường, điện thoại rọi sáng mặt, mắt trợn | toàn · cận mặt · cận điện thoại |
| N14 | Xưởng tối, máy may phủ vải trắng; TT đứng cạnh máy chấm công gõ mõ sắt | toàn · cận TT · cận máy |
| N15 | Cực cận máy chấm công đẩy ra tấm thẻ trắng phát sáng | cận |
| N16 | Phát quấn khăn tang, quỳ trước ảnh anh Lộc trong xưởng lúc đêm; công nhân ca đêm nhìn | toàn · cận Phát |
| N17 | Phát quấn khăn tang ngồi họp với đối tác vest, đối tác ngơ ngác | toàn |
| N19 | Phát cúi đầu đưa phong bì cho vợ anh Lộc; Hồng gật; TT phía sau đóng dấu sổ | toàn · cận phong bì |
| N20 | TT gập sổ, đẩy kính, nhếch mép rất nhẹ | toàn · cận mặt |
| N21 | Xưởng ban ngày: công nhân chấm công ra về, Hồng vẫy tay | toàn |
| N22 | Sheet biểu cảm TT: 4 tư thế, nền chàm trơn | cutout |
| N23 | Sheet biểu cảm Phát: 4 tư thế (cười gian, hoảng, mếu xin tha, quỳ khăn tang) | cutout |

Bỏ so với v1: N08 cũ (gộp vào N07), N18 (xe máy đêm, trùng ý với N17).

### Cách tạo và chi phí
| Cách | Ảnh ra | Chi phí | Nhận xét |
|---|---|---|---|
| **A. Muse (đề xuất)**: 1 tin như `ep01/muse-msg.txt`, đính kèm B04. Agent lái trình duyệt, user đăng nhập sẵn | 2048×1152, cùng style B01–B10/ep01 | Trong gói Muse, không tốn thêm tiền. Hạn mức gói chưa rõ | Đồng bộ nhất |
| B. Google Flow | tùy chọn | Theo gói Google | Note 18/11: từng bị cảnh báo unusual activity |
| C. `agy` (Nano Banana), `rice-and-empires/tools/imagegen/agy_gen.py` | 1376×768 | Trong quota Google AI, ngoài Claude | Khung dọc mờ, chỉ để dự phòng |

### Tin nhắn Muse (nháp, dùng ở bước 2)
```
Episode 2 scene images for 'Ma No Ke'. Cloud only. Make 21 images, ALL 16:9, named N01, N03, N04, N05, N06, N07, N08, N09, N10, N11, N12, N13, N14, N15, N16, N17, N19, N20, N21, N22, N23 (.png), same V2 style as B01–B10 and the episode 1 scenes. No readable text, letters or digits anywhere (papers, cards, screens are blank or scribbled). Characters, keep consistent across all images:
- Than Trung = EXACTLY the bureaucrat demon of B04 (attached): grey skin, crow-like iron beak, thick retro brown glasses, faded green cadre cap with small star, green 1980s cadre tunic, ledger and fountain pen; bored, deadpan.
- Phat = factory director, Vietnamese man in his 50s, big belly, slicked hair, gold chain, tight polo shirt, gold ring, always holding a fountain pen; smug caricature.
- Hong = Vietnamese woman ~40, sewing-line team leader, factory uniform, hair scarf, calm sharp eyes.
- Loc = thin kind Vietnamese man ~40, factory uniform (only in N05 and as a portrait photo). Loc's wife = simple countryside woman ~40.
- Vietnamese mourning headband = plain white cotton band loosely tied around the forehead with two short tails hanging down (not a karate headband, not a hood).
STYLE: flat 2D cartoon illustration, cute-creepy and satirical, clean bold outlines, flat color shapes with soft simple shading, big-headed characters with very expressive faces, Vietnamese everyday setting; night palette of deep indigo and dark moss green with warm accents from oil lamp, yellow night light and phone glow; tidy, charming, slightly eerie, never gross; no gore, no wrinkles detail, no text, not a children's cartoon: sharp sly eyes and adult wit.
SCENES:
N01: Night garment factory, long rows of green sewing machines, cold tube lights, tired workers bent over machines, wall clock near 2 o'clock.
N03: Director Phat on a leather chair in his office, a safe behind him and a small Vietnamese floor altar with Ong Dia and Than Tai ceramic figurines and tiny red electric lights in the corner, twirling a fountain pen, smug.
N04: Phat grinning while pulling the 'out' button off an old factory time-clock machine at the factory door.
N05: Memory tone, soft and peaceful: Loc asleep with his head on his sewing machine late at night, Hong at the next machine turning to look at him. No pain, no blood.
N06: Empty chair by a sewing machine, a worker jacket hanging on it, a spool of thread, moonlight through the window.
N07: Phat secretly altering a blank form under a desk lamp, his chubby ringed hand and fountain pen clearly visible, purple ink; Hong watching through a door gap behind him.
N08: Extreme close-up of a blank official form on a desk: a big messy purple-ink signature scrawl and a round red stamp, fountain pen lying on it; no readable letters.
N09: Underworld office like a 1980s Vietnamese state office: stacks of dossiers, ceiling fan, oil lamp with blue-green flame, rubber stamp; Than Trung flipping a huge ledger.
N10: Than Trung inspecting a blank form with a magnifying glass, purple glint on the lens.
N11: Simple rustic Vietnamese countryside altar: black-and-white portrait of Loc smiling in a wooden frame, brass incense burner with burning joss sticks, no Chinese characters; Loc's wife in a mourning headband sitting quietly; a few factory workers.
N12: Factory canteen, workers whispering; Phat standing on a red plastic stool shouting into a hand-held megaphone; Hong with arms crossed.
N13: 3 a.m., Phat in bed, phone glowing hard on his face, eyes wide; his wife asleep with her back turned.
N14: Dark factory at 3 a.m., sewing machines covered with white cloth, Than Trung standing by the time-clock machine striking a small iron clapper.
N15: Extreme close-up of the time-clock machine pushing out a blank white card, faint glow.
N16: Night, Phat in a white mourning headband kneeling before Loc's portrait inside the factory, night-shift workers watching.
N17: Phat in a white mourning headband at a fancy meeting table with business partners in suits, partners puzzled.
N19: Phat bowing and handing an envelope to Loc's wife; Hong nodding; Than Trung behind them stamping his ledger.
N20: Than Trung closing his ledger, pushing up his glasses, the faintest smirk, underworld office.
N21: Factory by day: workers clocking out happily at the time clock, Hong waving.
N22: Character sheet of Than Trung, 4 poses on plain deep indigo background: bored, raising an eyebrow reading the ledger, striking the iron clapper, faint smirk.
N23: Character sheet of Phat, 4 poses on plain deep indigo background: sly grin, panicked, crying and begging with clasped hands, kneeling with mourning headband.
When all are done, zip as ep02-scenes.zip and give me a public link; list any scene you changed.
```

## Còn cần user quyết
1. Tên nhân vật: Phát, Phát Đạt, Lộc, Hồng.
2. Teaser cuối long: P03 ma xó.
3. Cách vẽ: A (Muse, đề xuất) / B (Flow) / C (agy).
