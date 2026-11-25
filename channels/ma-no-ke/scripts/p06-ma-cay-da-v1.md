# Dự án 6 — Ma cây đa "View cây đa" (v1, 2026-11-21)

Theo `season-plan-p03-p48.md` dòng P06 (đã nắn lại cú lật). Đăng T2 14/12 18:00.
Cuối P05 đã hứa: **"nhà thầu chặt cây đa đầu làng để phân lô… và bản vẽ tự khoanh đỏ một mảnh đất không ai bán."**

**Ý chính:**
- Anh Long phân lô bãi đất đầu làng. Quảng cáo: "48 lô, view cây đa trăm năm". Nhưng bản vẽ thì cây đa nằm đúng lô góc đẹp nhất, lô anh giữ để xây biệt thự cho mình.
- Bản vẽ in ra lần nào cũng tự có một vòng khoanh đỏ quanh lô góc: "KHÔNG BÁN". Anh vẫn thuê người chặt cây đa, băm cành rải làm đất san nền cho cả 48 lô.
- Luật dân gian: cây đa có thần. Còn ai cũng biết cành đa cắm xuống đất là mọc.
- Ba tháng sau, mỗi lô mọc một cây đa con, không ai dám chặt. Đúng như quảng cáo: lô nào cũng "view cây đa".
- Gốc đa cũ mọc lại to nhất, ngay giữa biệt thự anh Long. Bà đa dọn vào ở cùng: "Mày chặt nhà bà thì bà ở nhà mày."

**Khoảnh khắc rợn duy nhất:** máy in bản vẽ chạy lúc nửa đêm. Tờ nào in ra cũng có vòng khoanh đỏ quanh lô góc, dòng chữ "LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN".
**Kiểu lật:** lời quảng cáo thành sự thật theo nghĩa đen ("view cây đa"), kèm chuyện thần ở nhờ.
**Né luật:**
- Không ai bị thương khi chặt cây. Không có lễ cúng xin chặt cây, không hướng dẫn nghi thức.
- Bà đa chỉ cằn nhằn như mẹ chồng, không hại ai.

## Nhân vật và giọng
| Mã | Nhân vật | Hình | Giọng | fx |
|---|---|---|---|---|
| BD | Bà đa: thần cây đa, xưng "bà", gọi người là "mày/con", đanh đá, nói như bà cụ chợ quê | vẽ mới (bà cụ tóc rễ đa, áo nâu, ngồi vắt vẻo trên cành) | Thiền Tâm Đức xử lý cao giọng, hoặc preset nữ già | `asetrate=48000*1.02,aresample=48000` |
| MN | Ma Nó | B02, S01/S26/S33/S34 | Thiện Minh | như cũ |
| LONG | Anh Long phân lô: kính râm, áo sơ mi hoa, điện thoại hai máy | vẽ mới | Adam bựa | `atempo=1.05` |
| CHU | Chú Tư, trưởng thôn, can ngăn | vẽ mới | giọng nam già | không |

SFX mới: cưa máy (xa, tắt nhanh), máy in bản vẽ, lá đa xào xạc, chim sẻ, tiếng cành mọc "rắc".

---

## LONG (lời ≈ 700 chữ ≈ 4 phút)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A01/toàn (văn phòng tạm, máy in khổ lớn đang chạy, nửa đêm) | *(máy in chạy)* | chữ "0:00" |
| A02/cực cận bản vẽ vừa in (vòng đỏ quanh lô góc) | | chữ "LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN" · im |
| A01/cận-Long ôm tờ giấy | **LONG**: Ai in cái này? Tao xóa rồi cơ mà! | |
| A03/cận-bóng bà đa sau cửa sổ | **BD**: Mày xóa trên máy. Bà không ở trong máy. | lá xào xạc |

### 0:12 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn | **MN**: Lại mò vào à? Khách hôm nay ba trăm tuổi, đanh đá nhất làng, và vừa bị người ta bán mất cái nhà. | mõ CỘC |
| S26/cận | **MN**: Nhà bà là một cái cây. | |

### 0:25 — Cây đa đầu làng
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A04/toàn (cây đa cổ thụ, quán nước, ghế nhựa đỏ, trẻ con chạy dưới bóng) | **BD**: Bà là cây đa đầu làng. Ba trăm năm. Bà che nắng cho ba trăm năm quán nước, đám cưới, đám ma, và mấy thằng trốn vợ ra ngồi hút thuốc lào. | chim sẻ |
| S26/cận | **MN**: Trong đó có tao. | |
| A03/toàn (bà đa ngồi vắt vẻo trên cành) | **BD**: Bà không đòi gì. Ai đi qua cúi đầu một cái là được. | |

### 0:50 — 48 lô, view cây đa
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A05/toàn (Long đứng trước bảng quảng cáo, hai điện thoại) | **LONG**: Bốn mươi tám lô! Sổ đỏ từng lô! View cây đa trăm năm, phong thủy vượng khí! | chữ "48 LÔ · VIEW CÂY ĐA" · ting ting |
| A02/toàn (bản vẽ phân lô: cây đa nằm giữa lô góc) | **MN**: Ở bản vẽ, cây đa nằm đúng lô góc đẹp nhất. Lô đó anh Long giữ, xây biệt thự cho mình. | |
| A06/cận-Long | **LONG**: Cây thì chặt. View thì để trên biển quảng cáo. | |
| B02/cận-Ma Nó nhíu mày | **MN**: Bán view cái cây mình định chặt. Đến ma cũng phải xin học. | |

### 1:20 — Can ngăn
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A07/toàn (chú Tư trưởng thôn chắn trước gốc đa) | **CHU**: Cây này có thần. Ông bà dặn không ai được động. | |
| A07/cận-Long cười | **LONG**: Thần có sổ đỏ không chú? Không có thì là đất trống. | |
| A03/cận-bà đa nheo mắt | **BD**: Sổ đỏ. Bà nhớ rồi. | |

### 1:45 — Bản vẽ khoanh đỏ (khoảnh khắc rợn)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A01/toàn | **MN**: Đêm đó anh Long in bản vẽ nộp hồ sơ. | máy in |
| A02/cực cận | **MN**: Tờ nào in ra cũng có một vòng đỏ quanh lô góc. Xóa file, in lại. Vẫn vòng đỏ. Đổi máy in. Vẫn vòng đỏ. | chữ "LÔ 00 · CHỦ ĐẤT: BÀ · KHÔNG BÁN" ×3, mỗi lần một tờ |
| A01/cận-Long mồ hôi | **LONG**: Lỗi máy. Mai gọi thợ. | |
| A03/cận | **BD**: Bà khoanh rồi đấy. Bà không khoanh lần hai. | lá ngừng xào xạc · im 2 s |

### 2:15 — Chặt
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A08/toàn (xe cẩu, gốc đa trơ, cành băm chất đống, người làm đội mũ) | **MN**: Sáng hôm sau anh Long thuê thợ ngoài tỉnh. Cây đa ba trăm năm, bốn tiếng là xong. | cưa máy xa, tắt nhanh |
| A08/cận-đống cành băm | **LONG**: Cành đừng chở đi, tốn tiền. Băm ra, rải san nền cho cả 48 lô! | |
| S26/cận | **MN**: Ai ở quê cũng biết: cành đa cắm đâu, mọc đấy. Anh Long không ở quê. | chữ "CÀNH ĐA: CẮM ĐÂU MỌC ĐẤY" |

### 2:45 — View cây đa (cú lật)
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A09/toàn (khu phân lô, mỗi lô một cây đa con xanh mướt) | **MN**: Ba tháng sau. Bốn mươi tám lô. Bốn mươi tám cây đa. | rắc rắc · chữ "48 LÔ · 48 CÂY ĐA" |
| A09/cận-người mua đứng nhìn cây đa giữa nền | **MN**: Không ai dám chặt. Chặt đa là chặt nhà thần. Mà nhà thần thì… đã có tiền lệ. | |
| A05/cận-Long nghe điện thoại | **LONG**: Hợp đồng ghi view cây đa! Thì đấy, view cây đa! Lô nào cũng có! | |
| A10/toàn (biệt thự của Long, gốc đa cũ mọc to xuyên giữa phòng khách) | **MN**: Lô góc của anh Long thì khác. Gốc đa cũ mọc lại to nhất. Ngay giữa phòng khách. | |
| A10/cận-bà đa ngồi trên sofa | **BD**: Mày chặt nhà bà, thì bà ở nhà mày. Sổ đỏ đứng tên mày. Bà ở nhờ. | chữ "Ở NHỜ" |

### 3:25 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| A10/cận-Long ăn cơm, bà đa gắp | **MN**: Giờ tối nào anh Long ăn cơm cũng có một bà cụ ngồi cạnh. Chê mặn. Chê nhạt. Hỏi bao giờ lấy vợ. | |
| A03/cận-nhếch | **BD**: Nó bán view cây đa. Giờ nó có view cây đa trong phòng ngủ. | mõ CỘC |
| S33/toàn → S34/cận | **MN**: Tao thì vẫn ra gốc đa con ở lô số bảy ngồi hút thuốc lào. Chủ lô ấy chưa xây. Chờ… xin phép. | rít điếu cày |
| (thẻ chữ trên nền tối, ánh điện thoại) | **MN**: Thứ Năm: đêm săn sale, một cô bán kem trẻ hóa bằng gương mặt không phải của mình… và một con cáo nghìn năm thấy bị xúc phạm. | thẻ "Tập sau · T5" |
| S06 mờ + cutout | **MN**: Bấm đăng ký đi. Không thì mai in tài liệu, kiểm tra xem có vòng đỏ nào không. | chữ "ĐĂNG KÝ" · mõ CỘC |

---

## SHORTS (7; nếu chốt 3 thì giữ SH1, SH4, SH6)
| # | Tên | Hook 3 s | Thân | Kết |
|---|---|---|---|---|
| SH1 | Bản vẽ tự khoanh đỏ | A02 vòng đỏ | Cold open → "bà không ở trong máy" | chữ "Bà là ai? 👇" |
| SH2 | Bán view cái cây mình định chặt | A05 quảng cáo | 48 lô → lô góc → "cây thì chặt" | **MN**: "Đến ma cũng phải xin học." |
| SH3 | Thần có sổ đỏ không? | A07 chú Tư chắn gốc | Can ngăn → "sổ đỏ, bà nhớ rồi" | chữ "Bà sẽ làm gì? 👇" |
| SH4 | In mãi vẫn vòng đỏ | A02 ×3 tờ | Xóa, in, đổi máy → "bà không khoanh lần hai" | chữ "Anh ta vẫn chặt? → video đầy đủ" |
| SH5 | Cành đa cắm đâu mọc đấy | A08 cành băm | "Rải san nền cả 48 lô!" | **MN**: "Anh Long không ở quê." |
| SH6 | 48 lô, 48 cây đa | A09 | View cây đa đúng hợp đồng → gốc cũ giữa phòng khách | **BD**: "Bà ở nhờ." |
| SH7 | View cây đa trong phòng ngủ | A10 ăn cơm | Bà chê mặn nhạt → câu đùa → teaser quỷ ăn tro | đăng ký |

---

## Hình
Tận dụng: B02 và ep01 S01/S26/S33/S34 (Ma Nó), S06 (CTA).

### Vẽ mới: 10 ảnh (16:9) + 1 sheet nhân vật
| Mã | Cảnh |
|---|---|
| A00 | Sheet bà đa (3:4): bà cụ nhỏ, tóc như rễ đa buông, áo nâu, khăn mỏ quạ, mắt sắc, ngồi vắt vẻo trên cành; 4 biểu cảm (nheo mắt, nhếch mép, chê, gắp thức ăn) |
| A01 | Văn phòng tạm bằng container, máy in khổ lớn đang nhả giấy, đèn tuýp, nửa đêm; anh Long kính râm đẩy lên đầu |
| A02 | Cực cận bản vẽ phân lô 48 ô vuông, vòng đỏ quanh lô góc (để trống chữ) |
| A03 | Bà đa ngồi vắt vẻo trên cành đa cổ thụ ban đêm, nhìn xuống |
| A04 | Cây đa cổ thụ đầu làng ban ngày: quán nước, ghế nhựa đỏ, ấm chè, điếu cày, chim sẻ |
| A05 | Long trước biển quảng cáo phân lô (trống chữ), hai điện thoại, áo sơ mi hoa |
| A06 | Cận Long cười gian (có thể nằm trong sheet Long) |
| A07 | Chú Tư (trưởng thôn, áo bộ đội cũ) đứng chắn trước gốc đa; Long cười khẩy |
| A08 | Gốc đa trơ, xe cẩu, đống cành băm, thợ đội mũ bảo hộ |
| A09 | Khu phân lô: 48 nền đất, lô nào cũng một cây đa con xanh mướt; vài người mua đứng ngẩn |
| A10 | Phòng khách biệt thự: gốc đa xuyên sàn lên trần, bà đa ngồi sofa gắp thức ăn cho Long đang mếu |
