# Dự án 1 — Ma lai "Mở nhẹ thôi con" (v3, 2026-11-18 15:40 +07)

Theo bible-v2 §7: trào phúng, không hù, sợ vì tò mò · 1 long + 7 shorts · hook đầu + gợi tập sau/subscribe cuối.
**Không vẽ mới.** Toàn bộ hình dùng lại `ep01/scenes/S01–S34.png` (2048×1152) + `assets/muse-v2/B02, B03`.
Giọng: MN = Ma Nó (Thiện Minh trầm) · BT = bà Tư (Ngọc Linh) · TUNG = Tùng (Thanh Bình) · HANH = bà Hạnh (Quỳnh Anh).

## Cách làm hình từ ảnh cũ (thay cho zoom 32 s/ảnh)
| Kỹ thuật | Cách | Tool |
|---|---|---|
| Cắt khung | Mỗi ảnh tách 2–4 khung: toàn → trung → cận mặt/đồ vật. Mỗi khung 2–4 s | Remotion crop |
| Nhân vật động | Tách nhân vật khỏi nền → nhún, nghiêng, rung khi hoảng, trượt vào/ra | rembg/BiRefNet + Remotion |
| Chiều sâu | Depth map → nền trôi chậm, nhân vật trôi nhanh (parallax) | Depth Anything + Remotion |
| Chữ bật | Câu then chốt + bình luận livestream hiện chữ to | Remotion |
| Âm thanh | Nhạc nền nhẹ liên tục + sfx theo hành động (nắp nồi, gió, rung điện thoại, mõ CỘC) | `ythub asset` |
| Short 9:16 | Cắt dọc từ ảnh 16:9 (648×1152 → 1080×1920) | Remotion |

Ký hiệu khung: `S03/toàn`, `S03/cận-mặt-BT`, `S03/cận-mâm`…

---

## LONG (657 chữ lời ≈ 3,5–4 phút theo tốc độ TTS ep01 ~203 chữ/phút + khoảng lặng; mốc giờ bên dưới là ước tính)

### 0:00 — Cold open
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S28/cận-tay-nắp-nồi, chấm LIVE đỏ | *(im, chỉ tiếng nắp)* | sfx "cạch" · chữ "7:02 SÁNG · ĐANG LIVE" |
| B03 (đầu trong nồi) | **BT** (nhỏ, tỉnh bơ): Mở nhẹ thôi con. Nóng. | |
| S29/cận-mặt-Tùng đơ | | chữ bật "300.000 người đang xem" |

### 0:10 — Ma Nó mồi
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S01/toàn → cận | **MN**: Khoan. Đừng hỏi vội. | mõ CỘC |
| S16/toàn | **MN**: Một bà cụ. Cái đầu. Trong nồi cơm điện. Đang lên sóng. | |
| S01/cận-mắt | **MN**: Muốn biết vì sao thì lùi lại ba tháng. Tao kể. | tua ngược (rewind) |

### 0:30 — Bữa cơm giả
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S03/toàn | **BT**: Ba tháng trước, thằng con tôi mở kênh. Tên kênh: Bữa cơm với mẹ già. | chữ "BỮA CƠM VỚI MẸ GIÀ 🔴" |
| S03/cận-mâm | **BT**: Mâm nào cũng cá kho, canh cua, trứng rán. | |
| S02/cận-tim bay | **BT**: Ba triệu người xem. Người ta khóc. Người ta donate. | sfx ting ting |
| S04/toàn | **BT**: Tắt máy cái, nó dọn mâm. Đổ vào túi nilon, mang trả quán. | sfx nilon sột soạt |
| S04/cận-bát-cháo | **BT**: Còn tôi ăn cháo trắng. | |
| S07/toàn | **BT**: Nó không ác đâu. Nó nợ app. Điện thoại rung cả ngày. | sfx rung |
| S05/cận-mặt | **BT**: Tôi không giận. Vì tôi cũng có bí mật. Đêm nào tôi cũng đi ăn khuya… | |
| S05/cận-mắt | **BT**: …bằng cái đầu thôi. | nhạc tắt 1 nhịp |

### 1:20 — Luật của ma lai
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S10/toàn, vòng sáng quanh cổ | **BT**: Tôi là ma lai. Hai giờ sáng, đầu tôi nhấc khỏi cổ, bay qua song cửa. Trước khi gà gáy thì về lắp lại. | sfx gió nhẹ |
| S11/toàn, khăn đỏ bay | **BT**: Thành phố bây giờ khó bay lắm. Camera khắp nơi. | |
| S12/toàn → cận mèo | **BT**: Ăn gì à? Cá kho thừa ở thùng rác. Chia đôi với con mèo mướp. Nó đang chửa. | |
| S13/toàn | **BT**: Bà ngoại tôi dặn đúng một luật. | |
| S14/cận-BT chỉ cổ | **BT**: Con ơi. Mẹ ngủ thì đừng đắp chăn lên cổ mẹ. | chữ to "ĐỪNG ĐẮP CHĂN LÊN CỔ MẸ" |
| S14/cận-Tùng cười | **TUNG**: Mẹ lại mê tín. | |
| S14/toàn | **BT**: Nó cười. Rồi nó quên. | |

### 2:10 — Tò mò leo thang
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S15/toàn | **BT**: Rồi nó nghĩ ra trò mới: live cả lúc tôi ngủ. Tám tiếng chữa lành cùng mẹ già. | chữ "8 TIẾNG CHỮA LÀNH 🔴" |
| S15/cận-điện thoại | **BT**: Hai giờ bảy phút, bình luận nổ. | chữ chạy: "ơ cái gì vừa bay qua cửa sổ??" · "tua 0.25x đi ad" |
| S17/toàn | **BT**: Hôm sau, nó lắp thêm đèn. Chĩa thẳng ra cửa sổ. | sfx tách công tắc |
| S18/toàn, chấm LIVE | **BT**: Đêm ấy camera quay được bốn giây. Bốn giây cái chăn… phẳng ở chỗ cổ. | im 1 s · tiếng tích tắc |
| S19/trái → phải | **MN**: Cả mạng phát cuồng. Người phóng to từng điểm ảnh. Ông thầy phong thủy bán vòng tay chống ma lai, giảm giá năm mươi phần trăm. | |
| S20/cận | **MN**: Người sợ ma. Ma sợ… thuật toán. | mõ CỘC |
| S21/toàn | **BT**: Chỉ bà Hạnh phòng bên là không bình luận. Bà sang, ngồi, nhìn tôi rất lâu. | |
| S21/cận-Hạnh | **HANH**: Bà Tư này. Bà cẩn thận. | |
| S21/cận-BT | **BT**: Không phải "con bà cẩn thận". Mà là "bà cẩn thận". Hóa ra có người biết mình là ma… mà vẫn lo cho mình. | |

### 3:30 — Đêm quyết định
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S22/toàn → cận camera | **BT**: Đêm đó nó gắn camera lên nóc tủ. Đặt tiêu đề: | chữ to "LIVE KHÔNG CẮT — SỰ THẬT VỀ MẸ TÔI" |
| S23/toàn | **BT**: Hai giờ mười lăm, nó ngủ gục. Chín nghìn người thức thay nó. | |
| S10/cận-cổ | **BT**: Và đầu tôi… nhẹ dần. | sfx gió, nhạc hạ |
| S24/toàn | **BT**: Điện thoại rung. Nó tỉnh. Nó nhìn sang giường. | sfx rung |
| S18/cận-cổ chăn | **BT**: Cái chăn hoa. Phẳng ở chỗ cổ. | im 2 s |
| S24/cận-mặt (rung nhẹ) | **BT**: Nó không hét. Nó không dám lật chăn. Tay run, nó kéo chăn trùm kín. Kín cổ. Kín hết. | sfx chăn sột soạt |
| S25/cận-cửa sổ | **BT**: Ngoài cửa sổ, tôi thấy hết. Con tôi vừa đắp chăn cho mẹ… lần đầu tiên trong ba tháng. | |
| S25/toàn | **BT**: Và tôi không về được nữa. | nhạc tắt |
| S26/cận (Ma Nó hoảng) | **MN**: Tao suýt đánh rơi điếu cày. Còn hai tiếng là gà gáy. Bà ấy trốn đâu? | |

### 4:40 — Nồi cơm
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S27/toàn | **BT**: Chỗ nào tối, ấm, tròn vừa một cái đầu? | |
| S27/cận | **BT**: Cái nồi cơm điện. | sfx nắp sập "cụp" |
| B03 | **BT**: Gặp nắng là tan. Nhưng trong nồi cơm thì lấy đâu ra nắng. Năm mươi năm làm ma lai, lần đầu tôi ngủ trong nồi cơm. Ấm hơn cái chăn. | |

### 5:10 — Cú lật
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S28/toàn | **BT**: Bảy giờ sáng. Live vẫn chạy. Ba trăm nghìn người. Và nó làm cái việc sáng nào cũng làm: mở nồi vo gạo. | sfx gà gáy |
| B03 | **BT**: Mở nhẹ thôi con. Nóng. | |
| S29/toàn | | chữ chạy: "FILTER GÌ VẬY AD???" · "xin tên app!!!" · "kỹ xảo đỉnh thật sự" |
| S30/toàn | **HANH**: Tùng! Ai dạy mày trùm kín chăn người già thế! Mẹ mày ngạt bây giờ! | |
| S30/cận-chăn | **BT**: Bà Hạnh giật phăng cái chăn. Gió lùa vào cổ. Vút một cái… | sfx vút + "cạch" |
| S31/toàn | **BT**: …đầu tôi về chỗ cũ. Tôi ngồi dậy, xoay cổ. Thằng Tùng ngất. Ba trăm nghìn người… vỗ tay. | sfx vỗ tay |

### 5:50 — Kết
| Khung | Lời | Chữ / SFX |
|---|---|---|
| S32/toàn | **BT**: Clip ấy giờ ba mươi triệu view. Không ai tin là thật. Tốt. Không ai tin thì tôi vẫn đi ăn khuya được. | |
| S32/cận-Tùng | **BT**: Nó trả hết nợ. Tối nào vẫn dựng máy trước mâm. Nhưng tắt máy rồi, nó ngồi ăn với tôi. | |
| S32/cận-tờ giấy | **BT**: Còn tôi đưa nó một tờ giấy. | chữ to "50% DOANH THU. CÁI ĐẦU NÀY CỦA MẸ." |
| S33/toàn | **MN**: Ma lai năm mươi năm chưa dọa được ai. Lên mạng ba tháng, có hợp đồng chia tiền. Tao ngồi nóc tủ mấy trăm năm, chưa ai trả đồng nào. | |
| S34/cận | **MN**: Tuần sau: một ông công chức âm phủ đến xưởng may điểm danh… và điểm nhầm đúng một người. Bấm đăng ký đi. Không thì tối nay tao ngồi nóc tủ nhà mày đấy. | mõ CỘC · thẻ "Tập sau" |

---

## 7 SHORTS (45–60 s, ~150–180 chữ, 9:16, cắt từ long)
Cuối mỗi short: gắn "Video liên quan" → long. Hình = khung dọc của cảnh tương ứng.

### SH1 — "Bữa cơm với mẹ già" (đăng ngày 1)
- **Hook (S04 dọc, túi nilon):** BT: Ba triệu người xem mẹ già ăn cơm. Không ai thấy con trai bà đổ mâm đi.
- **Thân:** đoạn 0:30 (S03→S04→S07): mâm cá kho → donate → túi nilon → cháo trắng → nợ app.
- **Kết (S05 cận mắt):** BT: Tôi không giận. Vì tôi cũng có bí mật… bằng cái đầu thôi. · chữ "Bí mật là gì? → video đầy đủ"

### SH2 — "Luật duy nhất" (ngày 2)
- **Hook (S14 cận BT chỉ cổ):** BT: Mẹ chỉ dặn con đúng một điều.
- **Thân:** S10 ma lai bay → S12 chia cá với mèo → S13 bà ngoại → S14 "Đừng đắp chăn lên cổ mẹ" → TUNG "Mẹ lại mê tín."
- **Kết:** BT: Nó cười. Rồi nó quên. · chữ "Nó quên vào đêm nào?"

### SH3 — "2 giờ 07 phút" (ngày 3)
- **Hook (S15 cận điện thoại, bình luận chạy):** chữ "2:07 — ơ cái gì vừa bay qua cửa sổ??"
- **Thân:** live 8 tiếng chữa lành → bình luận nổ → S17 lắp đèn → S19 thầy phong thủy bán vòng tay → S20 MN "Người sợ ma. Ma sợ thuật toán."
- **Kết:** BT: Đêm sau, camera quay được bốn giây… · chữ "Bốn giây gì?"

### SH4 — "Bốn giây cổ trống" (ngày 4)
- **Hook (S18 toàn, chấm LIVE):** BT: Bốn giây. Cái chăn phẳng ở chỗ cổ.
- **Thân:** S21 bà Hạnh "Bà cẩn thận" → S22 "LIVE KHÔNG CẮT" → S23 ngủ gục, 9.000 người xem → S10 "đầu tôi nhẹ dần".
- **Kết (S24 cận mặt Tùng):** BT: Nó tỉnh dậy. Nó nhìn sang giường. · chữ "Nó làm gì tiếp?"

### SH5 — "Đắp chăn" (ngày 5)
- **Hook (S24):** BT: Con tôi đắp chăn cho mẹ lần đầu tiên trong ba tháng. Và đó là điều tệ nhất.
- **Thân:** kéo chăn trùm kín → S25 đầu ngoài cửa sổ "không về được nữa" → S26 MN hoảng "Bà ấy trốn đâu?"
- **Kết (S27):** BT: Chỗ nào tối, ấm, tròn vừa một cái đầu? · chữ "Đoán đi 👇"

### SH6 — "Mở nhẹ thôi con" (ngày 6)
- **Hook (B03):** BT: Mở nhẹ thôi con. Nóng.
- **Thân:** S28 7 giờ sáng, 300.000 người xem, mở nồi vo gạo → bình luận "FILTER GÌ VẬY AD???" → S30 bà Hạnh giật chăn → "cạch" → S31 Tùng ngất, người xem vỗ tay.
- **Kết:** chữ "Vì sao đầu bà ở trong nồi cơm? → video đầy đủ"

### SH7 — "Hợp đồng 50%" (ngày 7)
- **Hook (S32 cận tờ giấy):** chữ "50% DOANH THU. CÁI ĐẦU NÀY CỦA MẸ."
- **Thân:** 30 triệu view, không ai tin → trả hết nợ → tắt máy ngồi ăn với mẹ → S33 MN "Ma lai năm mươi năm chưa dọa được ai…"
- **Kết (S34):** MN: Tuần sau: công chức âm phủ điểm danh nhầm người. Đăng ký đi. · CỘC

## Còn thiếu hình?
Không bắt buộc vẽ thêm. Tùy chọn sau này: bộ khẩu hình (miệng) cho bà Tư/Ma Nó nếu muốn nhép môi.
