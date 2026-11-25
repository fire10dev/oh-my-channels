# Dự án 8 — Ma xe khách "Ghế 46" (v2, 2026-11-21)

v2 sửa theo agy (`debate/08-scripts/p08-agy.md`; điểm v1: mồi 7.5 · rợn 9 · trào phúng 8.5 · logic 7.5 · lật 9 · kết 8.5 · TTS 7.5 · short 8.5):
- Ma Nó mồi không nói thẳng "đã mất": "người ta đi ăn giỗ của chính mình".
- Bỏ "camera đếm người" và "vé lơ lửng". CSGT rọi đèn pin đếm, đến ghế 46 thì thấy tấm vé kẹp vào nan ghế, mực dấu chưa ráo.
- Cường phát hiện tiền thành vàng mã ngay trong đêm, nên mới đòi đuổi.
- Lý do đi xe khách: đi đường đất mới theo được hương con cháu thắp. Đổi tên nhà xe thành "Lên Đi Lên Đi" cho chắc là hư cấu.

Theo `season-plan-p03-p48.md` dòng P08 (bản Claude sửa). Đăng T2 21/12 18:00.
Cuối P07 đã hứa: **"chuyến xe khách cuối năm nhồi bốn mươi lăm chỗ… và một tấm vé ghế số bốn mươi sáu."**

**Ý chính:**
- Nhà xe "Lên Đi Lên Đi" chạy tuyến về quê cuối năm. Xe 45 chỗ, bán 62 vé, kê ghế nhựa ở lối đi. Phụ xe bán cả vé "ghế 46", một cái ghế không có trên xe.
- Người mua vé ghế 46 là bác Tâm. Bác mất đã lâu, năm nào cũng đi xe về quê ăn giỗ cuối năm, lễ phép, trả tiền đủ. Tiền bác trả, nửa đêm hóa thành vàng mã.
- Bác chỉ đòi đúng một điều: **"Tôi có vé. Tôi ngồi đúng ghế."** Ai ngồi vào ghế nhựa số 46 cũng thấy lạnh, phải đứng dậy.
- Trạm kiểm tra: CSGT rọi đèn đếm người. Ghế 46 trống, nhưng có tấm vé kẹp vào nan ghế, dấu nhà xe chưa ráo. Biên bản tính cả ghế 46.

**Khoảnh khắc rợn duy nhất:** tấm vé in "GHẾ 46" trên xe 45 chỗ. Cái ghế nhựa số 46 ở lối đi trống suốt đêm, trong khi cả xe phải đứng.
**Kiểu lật:** luật trần áp lên chính kẻ lách luật. Vé nhà xe bán ra thành bằng chứng chở quá tải.
**Né luật:**
- Không nhắc tai nạn xe khách. Bác Tâm mất vì tuổi già, chỉ nói "mất đã lâu".
- Không dùng tên nhà xe hay tuyến đường có thật.
- Tục người đã khuất về nhà dịp giỗ chạp và Tết là tín ngưỡng thờ cúng tổ tiên. Kể nhẹ nhàng, không giễu.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng | fx |
|---|---|---|---|---|
| TAM | Bác Tâm: ông cụ áo bông cũ, mũ len, túi cói, xưng "tôi", lễ phép, cố chấp chuyện vé | vẽ mới (ma cute-creepy: da trắng xanh nhạt, mắt hiền lim dim, chân không chạm sàn) | Thiền Tâm Đức | `aecho=0.8:0.4:40:0.15` |
| MN | Ma Nó | B02, S01/S26/S33/S34 | Thiện Minh | như cũ |
| CUONG | Cường, phụ xe kiêm chủ: áo khoác da, túi đeo bụng đầy tiền, mồm "lên đi lên đi" | vẽ mới | Adam bựa | `atempo=1.08` |
| CSGT | Cán bộ trạm kiểm tra, một câu | vẽ mới | giọng nam (preset khác) | không |

SFX: động cơ xe khách, còi, tiếng "lên đi lên đi", nhạc bolero rè trên xe, gió lạnh rít, tiếng bộ đàm.

---

## LONG (lời ≈ 700 chữ ≈ 4 phút)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K01/toàn (trong xe khách đêm chật cứng, người đứng lối đi) | *(động cơ, bolero rè)* | chữ "XE 45 CHỖ · 23:40" |
| K02/cực cận tấm vé (trống chữ) | | chữ "GHẾ 46" · im |
| K03/toàn (ghế nhựa đỏ giữa lối đi trống trơn, xung quanh người đứng chen) | **MN**: Cả xe đứng. Chỉ một cái ghế trống. Không ai ngồi được quá năm giây. | gió lạnh rít |
| K03/cận-ghế (thoáng bóng ông cụ mũ len) | **TAM**: Ghế của tôi. Tôi có vé. | |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Khách tao hôm nay mua vé đàng hoàng nhất xe. Chỉ phiền một nỗi… bác ấy đi ăn giỗ của chính mình. | mõ CỘC |
| S26/cận | **MN**: Bác ấy chỉ muốn ngồi đúng chỗ đã trả tiền. Khó thế đấy. | |

### 0:25 — Ma cũng mua vé sớm
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K04/toàn (bến xe đêm, bác Tâm xếp hàng, túi cói) | **TAM**: Tôi là Tâm. Mất đã lâu. Năm nào cuối năm tôi cũng về quê ăn giỗ. Con cháu thắp hương gọi, thì mình về. | còi xe xa |
| K04/cận | **TAM**: Đi xe đường đất mới theo được hương con cháu thắp. Máy bay tít trên trời, hương không với tới. Mà phải mua vé từ tháng mười một. Muộn là hết. | chữ "MUA VÉ TỪ THÁNG 11" |
| S26/cận | **MN**: Ma cũng phải săn vé Tết. Đừng ai than nữa. | |

### 0:50 — Nhà xe "Lên Đi Lên Đi"
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K05/toàn (Cường đứng cửa xe vẫy khách, túi tiền đeo bụng) | **CUONG**: Lên đi lên đi! Còn chỗ! Còn chỗ! | "lên đi lên đi" |
| K01/toàn | **MN**: Xe bốn mươi lăm chỗ. Cường bán sáu mươi hai vé. Ghế nhựa kê kín lối đi, đánh số đến bốn mươi sáu. | chữ "45 CHỖ · 62 VÉ" |
| K02/cận-tay Cường xé vé | **CUONG**: Ghế bốn sáu đây bác. Ghế đẹp, gần cửa. | |
| K04/cận-bác Tâm đưa tiền lẻ cũ | **TAM**: Cảm ơn cậu. Tôi trả đủ. | xoảng xu |
| S26/cận | **MN**: Nhớ: vé đã xé. Có dấu nhà xe. | chữ "VÉ: CÓ DẤU ✔" |

### 1:25 — Ghế không ai ngồi được
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K06/toàn (một gã đàn ông ngồi phịch xuống ghế 46, mặt tái) | **MN**: Xe chạy được nửa tiếng, một ông khách đứng mỏi ngồi phịch xuống ghế bốn sáu. | |
| K06/cận | **MN**: Năm giây. Lạnh từ mông lên gáy. Đứng bật dậy. Không ai hỏi gì. Người thứ hai thử. Rồi người thứ ba. | gió rít ×3 · chữ "5 GIÂY" |
| K03/cận-ghế | **TAM**: Tôi không đuổi ai. Chỉ là chỗ này có người ngồi rồi. | |
| K07/cận-Cường quay lại quát | **CUONG**: Ghế trống mà không ai ngồi là sao? Ngồi đi! Tôi còn bán thêm! | |
| K13/cực cận túi tiền đeo bụng, xấp tiền lẻ lẫn tờ vàng mã | **MN**: Cường chột dạ, mở túi tiền đếm. Xấp tiền lẻ của ông cụ ghế bốn sáu… đã thành một xấp vàng mã. | sột soạt · chữ "TIỀN ÂM PHỦ" |

### 1:55 — Vé là vé
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K08/toàn (Cường cúi xuống ghế trống, tấm vé kẹp vào nan ghế) | **MN**: Cường cúi xuống ghế bốn sáu. Tấm vé kẹp chặt vào nan ghế. Nét chữ của chính Cường. | |
| K02/cận | **TAM**: Tiền tôi trả đủ. Vé cậu xé tay. Tôi không lấn một tấc. Cậu đừng bớt của tôi một phân. | |
| K07/cận-Cường run | **CUONG**: Ông… ông xuống xe ngay! | |
| K03/cận | **TAM**: Tôi có vé. | im 1 s |
| S26/cận | **MN**: Mời ma xuống xe thì phải trả lại tiền. Mà tiền thì thành vàng mã rồi. | |

### 2:25 — Trạm kiểm tra (cú lật)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K09/toàn (trạm kiểm tra đêm, xe dừng, đèn pin) | **MN**: Hai giờ sáng. Trạm kiểm tra. | bộ đàm |
| K10/toàn (CSGT rọi đèn pin dọc lối đi, đếm) | **MN**: Cán bộ rọi đèn dọc lối đi, đếm từng ghế. Bốn lăm ghế đệm. Mười sáu ghế nhựa có người. Một ghế nhựa… trống. | chữ đếm "45 · 61 · 62?" |
| K11/cực cận ghế 46: tấm vé kẹp nan ghế dưới đèn pin, hơi lạnh | **MN**: Ghế trống, nhưng có vé. Vé đỏ, kẹp chặt vào nan ghế. Mực dấu nhà xe còn chưa ráo. | gió lạnh rít |
| K07/cận-Cường | **CUONG**: Sáu mươi hai thôi anh! Thừa một là… là ma! | |
| K03/cận-ghế (bóng mũ len mờ) | **TAM**: Tôi có vé, anh ạ. | thì thầm, rất nhỏ |
| K09/cận-CSGT | **CSGT**: Bốn lăm ghế đệm, mười bảy ghế nhựa. Vé anh bán, ghế anh kê. Ghế nào có vé là có khách. Xuống xe ký biên bản! | chữ "QUÁ TẢI 18 NGƯỜI" · đóng dấu |

### 3:15 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| K12/toàn (sáng, bác Tâm xuống xe ở cổng làng, nhà xa có khói hương) | **MN**: Sáng ra xe vào đến làng. Bác Tâm xuống đúng cổng nhà, đúng giờ con cháu thắp hương. | gà gáy |
| K12/cận | **TAM**: Cậu Cường à. Sang năm tôi đặt lại ghế bốn sáu nhé. | |
| K07/cận-Cường mếu | **MN**: Năm sau Cường đổi sang xe bốn mươi lăm chỗ… bán đúng bốn mươi lăm vé. Ai hỏi thì bảo: "Chừa một ghế cho bác." | chữ "45 CHỖ · 45 VÉ" · mõ CỘC |
| S33/toàn → S34/cận | **MN**: Ma đi xe còn có vé. Người sống thì đứng cả đêm. Năm nay đặt vé sớm đi. | rít điếu cày |
| (thẻ chữ trên nền tối, đèn Noel) | **MN**: Thứ Năm, đêm Noel: một tấm ảnh hai người, camera nhận diện ra ba khuôn mặt… và một đốm lửa xanh cũng muốn chụp chung. | thẻ "Tập sau · T5" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Không thì chuyến xe Tết năm nay, mày ngồi cạnh ghế bốn sáu. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7; nếu chốt 3 thì giữ SH1, SH4, SH6)
| # | Tên | Hook 3 s | Thân | Kết |
|---|---|---|---|---|
| SH1 | Vé ghế 46 trên xe 45 chỗ | K02 vé | Cold open → "tôi có vé" | chữ "Ai ngồi ghế 46? 👇" |
| SH2 | Ma cũng phải săn vé Tết | K04 bến xe | Bác Tâm về giỗ, mua vé từ tháng 11 | **MN**: "Đừng ai than nữa." |
| SH3 | 45 chỗ, 62 vé | K05 "lên đi lên đi" | Nhồi khách → bán ghế 46 → tiền thành vàng mã | chữ "VÉ: CÓ DẤU ✔" |
| SH4 | Ghế không ai ngồi quá 5 giây | K06 | 3 người thử → "chỗ này có người rồi" | **CUONG**: "Tôi còn bán thêm!" |
| SH5 | Đuổi ma xuống xe | K08 tấm vé trên ghế | "Khách như tôi tìm đâu ra" → "tôi có vé" | chữ "Trạm kiểm tra phía trước… → video đầy đủ" |
| SH6 | Ghế trống nhưng có vé | K11 vé kẹp nan ghế | CSGT đếm → "thừa một là ma" → vé có dấu | **CSGT**: "Ghế nào có vé là có khách." |
| SH7 | Chừa một ghế cho bác | K12 cổng làng | Kết → teaser Noel | đăng ký |

---

## Hình
Tận dụng: B02, ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới: 13 ảnh (16:9) + 1 sheet
| Mã | Cảnh |
|---|---|
| K00 | Sheet bác Tâm (3:4): ông cụ ma hiền, áo bông cũ, mũ len, túi cói, da trắng xanh nhạt, chân không chạm sàn; 4 tư thế (ngồi ghế nhựa, giơ vé, cúi chào, xuống xe) |
| K01 | Trong xe khách giường/ghế ngồi đêm, đèn xanh mờ, khách đứng chen lối đi, ghế nhựa đỏ kê giữa lối |
| K02 | Cực cận tấm vé xe khách giấy hồng có dấu đỏ (trống chữ) |
| K03 | Ghế nhựa đỏ trống giữa lối đi, sương lạnh mờ quanh ghế, người đứng xung quanh né ra |
| K04 | Bến xe đêm cuối năm: hàng người xếp, bác Tâm xách túi cói, xe khách đỗ |
| K05 | Cường áo khoác da, túi đeo bụng đầy tiền, đứng cửa xe vẫy khách |
| K06 | Gã đàn ông ngồi phịch xuống ghế 46, mặt tái, hơi lạnh bốc lên |
| K07 | Sheet Cường 3 biểu cảm: quát, run, mếu |
| K08 | Cường cúi xuống ghế trống, nhặt tấm vé trên ghế |
| K09 | Trạm kiểm tra đêm: CSGT cầm đèn pin, xe khách dừng, bộ đàm |
| K10 | CSGT rọi đèn pin dọc lối đi xe khách, khách ngồi ghế nhựa nheo mắt |
| K11 | Cực cận ghế nhựa đỏ trống dưới vệt đèn pin, tấm vé hồng kẹp vào nan ghế, hơi lạnh mờ |
| K13 | Cực cận túi tiền đeo bụng mở ra: tiền lẻ lẫn vài tờ vàng mã đỏ vàng |
| K12 | Sáng sớm cổng làng Bắc Bộ: bác Tâm xuống xe, mái nhà xa có khói hương bay lên |
