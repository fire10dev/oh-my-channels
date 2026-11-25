# Dự án 3 — Ma xó "Kiểm kê" (v2, 2026-11-21)

v2 sửa theo agy (`debate/08-scripts/p03-agy.md`; điểm v1: mồi 9 · rợn 8.5 · trào phúng 9 · logic 7 · lật 8.5 · kết 8.5 · TTS 7.5 · short 8.5):
- Logic: giấy nợ cũ không thể trừ vào 60 tỷ. Sửa: ba đời đều **cầm cố chính căn nhà**, nửa phố cầm giấy đến, nhà thành đất tranh chấp, công chứng dừng, bên mua rút, Khải đền cọc.
- Thêm câu vì sao ma xó coi giấy nợ là của ("cả gia tài nhà mình nằm trong hũ").
- Bên mua không tự gợi ý chuyện cái hũ: Khải đòi giữ hũ, Vy coi khinh hũ sành.
- Bỏ gag thước dây 413 mét. Viết lại câu nợ ba đời theo nhịp. Trong kho có ma xó ngồi trên bao tải.
- Không nhận: "ma xó là tín ngưỡng Tày/Nùng, phố cổ gọi là vong tiền chủ". Ma xó giữ của là truyện quen của người Kinh (bible §2).

Theo bible-v2 §7 và dàn tập `season-plan-p03-p48.md` dòng P03. Đăng T5 3/12 18:00.
Lời hứa cuối P02, giữ nguyên: **"đứa trẻ giữ của ba đời trong căn nhà phố cổ, và cái hũ không ai được mở."**

**Ý chính:**
- Ông Khải biến nhà cổ ba đời ở phố cổ thành homestay "giữ hồn phố cổ", rồi bán nhà cho chuỗi khách sạn để họ đập đi.
- Ma xó giữ của từ thời cụ cố, phá mọi buổi khảo sát nhà.
- Ông Khải tin dưới bếp có hũ vàng. Ông ép bên mua ký phụ lục "hũ dưới nền thuộc bên bán", rồi đêm cuối lẻn xuống đào trước.
- Ma xó khóa ông trong kho và đếm của cho ông nghe. Sáng ra mở hũ: 413 tờ giấy nợ ba đời, chủ nợ là nửa phố.
- Ba đời đều cầm cố chính căn nhà, nên nhà thành đất tranh chấp: giao dịch bị hủy, ông Khải đền cọc. Theo đúng phụ lục ông tự viết, cái hũ thuộc về ông.

**Khoảnh khắc rợn duy nhất:** kho tối, cửa tự khóa "cạch", sau tường có tiếng trẻ con đếm đều đều: "…bốn trăm mười hai, bốn trăm mười ba…"
**Kiểu lật:** bất ngờ vì quá nghèo, cộng với việc kẻ tham tự viết điều khoản trói mình. Khác P02: P02 là âm phủ làm theo giấy, còn P03 là giấy của chính người sống.
**Né luật:**
- Không nói ma xó chết thế nào. Tục "chôn người giữ của" tuyệt đối không nhắc.
- Ma xó chỉ là "đứa bé ở xó nhà từ thời cụ cố".
- Không ai bị hại. Ông Khải chỉ bị nhốt một đêm.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng (VieNeu) | Ghi chú |
|---|---|---|---|---|
| MX | Ma xó: xưng "con", gọi chủ là "ông", lễ phép, chậm, ngọt quá mức | **B05** | giọng nữ trẻ/trẻ con có sẵn, thử 2 preset | fx nhẹ: `aecho=0.8:0.4:30:0.15` |
| MN | Ma Nó | B02, ep01 S01/S26/S33/S34 | Thiện Minh | như P01/P02 |
| KHAI | Ông Khải, chủ homestay, 50 tuổi, áo polo nhét thùng, nói như MC tour | vẽ mới | Adam bựa (P02 PHAT) hoặc preset nam khác | `atempo=1.05` |
| VY | Chị Vy, đại diện chuỗi khách sạn, cầm iPad, nói câu cụt | vẽ mới | Ngọc Huyền (P02 HONG) | không |

SFX mới: tiếng đếm thì thầm (TTS MX, giảm âm lượng, lowpass), khóa cửa "cạch", hũ sành cọ đất, xoảng tiền xu, chuông gió phố cổ, máy khoan xa.

---

## LONG (lời ≈ 720 chữ ≈ 4 phút; mốc giờ ước tính)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X10/toàn (kho tối, đèn pin rơi dưới đất) | *(im)* | khóa cửa "cạch" · chữ "2:40 SÁNG" |
| X10/cận-tường | **MX** (thì thầm sau tường): …bốn trăm mười hai. Bốn trăm mười ba. | đếm đều |
| X11/cận-mặt Khải, mồ hôi | **KHAI**: Ai… ai đấy? Đếm cái gì đấy? | |
| B05/cận-mắt | **MX**: Đếm của nhà mình, ông ạ. Sắp xong rồi. | im 1 s |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn → cận | **MN**: Lại mò vào xem à? Tuần này ở phố cổ. Một căn nhà ba đời, một cái hũ chưa ai mở. | mõ CỘC |
| S26/cận | **MN**: Và một đứa giữ nó. Ngoan lắm. Ngoan đến phát sợ. | |
| S01/cận-mắt | **MN**: Lùi lại một tháng. Cho nó kể. | tua ngược |

### 0:25 — Nhà cổ ba đời, hai triệu một đêm
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X01/toàn (nhà ống phố cổ, biển homestay) | **MX**: Con là ma xó nhà này. Con ở cái xó cạnh bếp từ thời cụ cố. | chuông gió |
| B05/toàn | **MX**: Cụ dặn con đúng một câu: cả gia tài nhà mình nằm trong cái hũ dưới bếp. Giữ lấy. Con giữ. | |
| X02/toàn (Khải dẫn khách Tây chụp ảnh bàn thờ) | **KHAI**: Welcome! Nhà cổ ba đời, giữ trọn hồn phố cổ. Hai triệu một đêm, chụp bàn thờ thêm năm mươi nghìn. | chữ "GIỮ HỒN PHỐ CỔ · 2.000.000đ/ĐÊM" · tách máy ảnh |
| S26/cận | **MN**: Giữ hồn phố cổ bằng cách bán vé xem bàn thờ. Cụ cố mà biết thì cụ thu phí lại. | |

### 0:55 — Bán nhà
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X03/toàn (Vy cầm iPad, bản vẽ khách sạn) | **VY**: Sáu mươi tỷ. Đập trắng bên trong. Giữ lại cái cổng rêu cho khách Tây chụp ảnh bảo tồn. | chữ "60 TỶ" · máy khoan xa |
| X03/cận-Khải cười | **KHAI**: Ký! Đập luôn cái bếp cũng được. | |
| B05/cận-mặt | **MX**: Bán nhà là của ra khỏi nhà. Con phải giữ. | nhạc trầm 1 nhịp |

### 1:15 — Phá buổi khảo sát
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X04/toàn (đội khảo sát, thước dây, cửa đóng sập) | **MN**: Buổi khảo sát thứ nhất: cửa tự khóa. Thợ đo ngồi trong nhà vệ sinh hai tiếng. | khóa "cạch" · chữ "BUỔI 1" |
| X04/cận-thợ đo ngơ ngác | **MN**: Buổi thứ hai: căn nhà sâu mười mét, thợ kéo thước mãi không chạm tường sau. Nhìn đồng hồ, đã hai giờ sáng. | chữ "10 m… ?" · tích tắc |
| X05/cận-điện thoại (review 1 sao) | **MN**: Khách Tây để lại review một sao: "Phòng có trẻ con đếm tiền cả đêm." | chữ "★☆☆☆☆" · đọc review giọng máy |
| B05/cận-cười ngọt | **MX**: Con không dọa ai. Con chỉ đếm. | |

### 1:45 — Oản chuối
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X06/toàn (Khải bày mâm oản chuối ở xó bếp) | **KHAI**: Ma xó ơi. Ký xong tao chia mày phần. Đây, oản chuối. | |
| B05/cận | **MX**: Con không ăn hối lộ, ông ạ. Con chỉ ăn oản. | |
| X06/cận-mâm (oản biến mất, chuối còn) | | sfx "măm" · chữ "OẢN ✔ · HỢP ĐỒNG ✖" |
| S33/cận (Ma Nó nuốt nước bọt) | **MN**: Ăn oản không làm việc. Nghề này tao thèm thật. | |

### 2:05 — Cái hũ
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X07/toàn (Vy chỉ nền bếp, luật sư cầm giấy) | **KHAI**: Bán nhà thôi nhé. Cái hũ cụ cố chôn dưới bếp thì không tính! | |
| X03/cận-Vy nhún vai | **VY**: Hũ sành thì báu gì. Anh cứ giữ. |  |
| X07/cận-Khải, mắt sáng | **MN**: Ba đời không ai được mở. Ba đời giàu nhất phố. Trong đầu ông Khải, cái hũ chỉ có thể là vàng. | chữ "HŨ = VÀNG?" · xoảng xu |
| X08/cực cận phụ lục | **KHAI**: Thêm một dòng. Hũ dưới nền, thuộc bên bán. Toàn bộ, kể cả những gì bên trong. | ngòi bút sột soạt · chữ "PHỤ LỤC: HŨ VÀ TOÀN BỘ BÊN TRONG THUỘC BÊN BÁN" · đóng dấu |
| X03/cận-Vy | **VY**: Sáng thứ Bảy mở hũ, kiểm kê, ra công chứng. Anh đặt cọc sáu tỷ, em giữ. | chữ "CỌC 6 TỶ" |
| S26/cận | **MN**: Nhớ cái dòng đó. Tí nữa nó quay lại. | |

### 2:35 — Đêm cuối (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X09/toàn (Khải cầm xẻng, đèn pin, lẻn vào bếp) | **MN**: Đêm thứ Sáu, ông Khải lẻn xuống bếp với cái xẻng. Định lấy vàng trước. Sáng ra để hũ rỗng cho bên mua. | dế · bước chân |
| X10/toàn | **MN**: Ông chui vào kho lấy cuốc. Cửa kho đóng lại. | khóa "cạch" · nhạc tắt |
| X10/cận-tường | **MX**: …một. Hai. Ba. | đếm đều, nhỏ dần |
| X11/cận-mặt Khải | **KHAI**: Mở cửa! Tao là chủ nhà! | |
| B05/cận-mắt | **MX**: Con biết, ông ạ. Bán nhà thì phải kiểm kê. Cụ dặn. Con đếm cho ông nghe. | |
| X10/cận-tường (rung nhẹ) | **MX**: …bốn trăm mười hai. Bốn trăm mười ba. Hết. | im 2 s · chữ "413" |

### 3:05 — Mở hũ (cú lật)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X12/toàn (sáng, cả nhà vây quanh hũ sành nâu) | **MN**: Sáng thứ Bảy. Cửa kho tự mở. Hũ được đào lên trước mặt bên mua, luật sư, và nửa cái phố. | gà gáy · hũ cọ đất |
| X13/cực cận miệng hũ (giấy vàng ố cuộn chặt) | **MX**: Bốn trăm mười ba tờ. Giấy nợ, ông ạ. | chữ "413 GIẤY NỢ" |
| X16/cực cận một tờ giấy nợ (mực tím, điểm chỉ đỏ) | **MX**: Cụ cố vay mua đất. Ông nội vay đắp lãi. Bố ông vay đảo nợ. | chữ lần lượt "CỤ CỐ · ÔNG NỘI · BỐ" |
| X13/cận-tờ giấy | **MX**: Ba đời, chưa trả một đồng. Lần nào cũng cầm cố… chính căn nhà này. | chữ "CẦM CỐ: CĂN NHÀ NÀY" · im 1 s |
| X14/toàn (hàng xóm phố cổ cầm giấy, xếp hàng ở cửa) | **MN**: Chủ nợ thì ở ngay trong phố. Phố cổ mà. Nhà nào cũng còn giữ giấy. | rì rầm · chữ "CHỦ NỢ: NỬA CÁI PHỐ" |
| X03/cận-Vy gập iPad | **VY**: Nhà đang tranh chấp thì công chứng không ký. Bên em rút. Cọc anh đền. | chữ "HỦY GIAO DỊCH · ĐỀN CỌC" |
| X08/cực cận phụ lục | **VY**: À, phụ lục anh tự viết. Hũ và toàn bộ bên trong thuộc về anh. Chúc mừng. | đóng dấu "cộp" |
| X11/cận-Khải mếu | **KHAI**: Thế… tôi còn lại gì? | |
| B05/cận-cười ngọt | **MX**: Còn cái hũ, ông ạ. | |

### 3:45 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| X15/toàn (biển mới "NHÀ CỔ BA ĐỜI NỢ — VÉ XEM HŨ 50K", khách xếp hàng) | **MN**: Ông Khải không bán nhà nữa. Ông bán vé xem hũ. Khách đông gấp đôi. | chữ "VÉ XEM HŨ 50.000đ" |
| B05/toàn | **MX**: Con giữ của nhà này ba đời. Nhà này giàu nhất phố… về nợ. | mõ CỘC |
| S33/toàn → S34/cận | **MN**: Ba trăm năm ngồi nóc tủ, tao học được một điều: hũ nào không ai dám mở, đừng mở. | rít điếu cày |
| B06 (ma giấu trên ban công) | **MN**: Thứ Hai này: một nhà chung cư mất thằng con ba ngày… mà không ai biết. Vì cả nhà đang bận nhìn điện thoại. | thẻ "Tập sau · T2" |
| S06 mờ + cutout Ma Nó | **MN**: Bấm đăng ký đi. Không thì đêm nay, có đứa ngồi sau tủ nhà mày đếm số video mày chưa xem. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7 bản theo bible §7; nếu chốt 3 short thì giữ SH1, SH5, SH6)
| # | Tên | Hook 3 s đầu | Thân | Kết (kéo xem tiếp) |
|---|---|---|---|---|
| SH1 | Tiếng đếm sau tường | X10 + **MX**: "…bốn trăm mười hai. Bốn trăm mười ba." | Cold open → MN mồi | **MX**: "Đếm của nhà mình, ông ạ." · chữ "Đếm cái gì? 👇" |
| SH2 | Giữ hồn phố cổ, 2 triệu/đêm | X02 + **KHAI**: "Chụp bàn thờ thêm năm mươi nghìn." | Homestay → 60 tỷ → "đập luôn cái bếp" | **MX**: "Bán nhà là của ra khỏi nhà. Con phải giữ." |
| SH3 | Review 1 sao: trẻ con đếm tiền | X05 review | 3 buổi khảo sát hỏng | **MX**: "Con không dọa ai. Con chỉ đếm." |
| SH4 | Ma không ăn hối lộ, chỉ ăn oản | X06 + **KHAI**: "Ký xong tao chia mày phần." | Oản biến mất, hợp đồng không ký | **MN**: "Nghề này tao thèm thật." |
| SH5 | Ông chủ tự viết dòng chết người | X08 phụ lục | Hũ = vàng? → phụ lục → "nhớ cái dòng đó" | chữ "Trong hũ có gì? → video đầy đủ" |
| SH6 | 413 tờ | X13 + **MX**: "Bốn trăm mười ba tờ. Giấy nợ, ông ạ." | Ba đời cầm cố căn nhà → chủ nợ nửa phố → hủy giao dịch → phụ lục | **MX**: "Còn cái hũ, ông ạ." |
| SH7 | Vé xem hũ 50k | X15 biển mới | Kết → "giàu nhất phố… về nợ" | **MN**: teaser ma giấu + đăng ký |

---

## Hình

### Tận dụng (không vẽ)
| Ảnh | Dùng cho |
|---|---|
| `assets/muse-v2/B05.png` | Mọi cận/toàn của MX; cutout; thumbnail |
| `assets/muse-v2/B02.png`, ep01 `S01, S26, S33, S34` | Ma Nó |
| `assets/muse-v2/B06.png` | Teaser tập sau (ma giấu) |
| ep01 `S06` | Nền mờ cho CTA |

### Vẽ mới: 16 ảnh (16:9, 2048×1152)
| Mã | Cảnh |
|---|---|
| X01 | Nhà ống phố cổ Hà Nội ban đêm: mái ngói, tường vàng vôi, biển gỗ homestay, đèn lồng, chuông gió |
| X02 | Ông Khải (50 tuổi, polo nhét thùng, bụng tròn, cười kiểu MC tour) chỉ bàn thờ cho hai khách Tây cầm máy ảnh |
| X03 | Phòng khách: chị Vy (vest xám, tóc búi, cầm iPad) trải bản vẽ khách sạn kính trên bàn gỗ cổ; Khải cười tít |
| X04 | Đội khảo sát mũ bảo hộ, thước dây kéo dài vô lý ra tận cửa; cửa nhà vệ sinh đóng, bóng thợ bên trong |
| X05 | Cực cận điện thoại: trang review homestay 1 sao (để trống chữ, Remotion đè) |
| X06 | Xó bếp cũ: Khải ngồi xổm bày đĩa oản và nải chuối trước góc tối; bóng ma xó lấp ló |
| X07 | Bếp cũ: Vy chỉ nền gạch, luật sư đeo kính cầm tập giấy, Khải mắt sáng rực |
| X08 | Cực cận phụ lục hợp đồng trên bàn, bút bi, dấu đỏ (để trống chữ) |
| X09 | Đêm: Khải cầm xẻng và đèn pin lẻn vào bếp, bóng đổ dài |
| X10 | Kho chật tối: cuốc, bao tải, đèn pin rơi dưới đất rọi lên bức tường vôi nứt; trên chồng bao tải góc trên là bóng bé xíu của ma xó (như B05) cầm cái oản cắn dở, nhìn xuống |
| X11 | Sheet mặt Khải 4 biểu cảm: cười tham, hoảng mồ hôi, đập cửa, mếu |
| X12 | Sáng: hũ sành nâu vừa đào lên giữa bếp, Vy, luật sư, Khải và hàng xóm vây quanh |
| X13 | Cực cận miệng hũ: hàng trăm cuộn giấy vàng ố buộc chỉ đỏ |
| X14 | Cửa nhà: hàng xóm phố cổ (bà bán nước, ông sửa đồng hồ, cô bán phở) xếp hàng, mỗi người cầm một tờ giấy cũ |
| X16 | Cực cận một tờ giấy dó ố vàng: chữ viết tay mực tím (để trống, Remotion đè), dấu điểm chỉ đỏ |
| X15 | Ban ngày: biển mới treo trước nhà (trống chữ), khách du lịch xếp hàng, Khải bán vé ở ghế nhựa đỏ |

Prompt theo khuôn style V2 (`assets/prompts/muse-v2-oneline.txt`), đính kèm B05 làm tham chiếu ma xó.
