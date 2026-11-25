# ĐỀ XUẤT MỞ MÀN (VÒNG 1) — AGY

---

### TÓM TẮT CHIẾN LƯỢC: CÔNG THỨC HYBRID (B + E)
* **Loại bỏ Phương án A (`fire10.dev`):** Tự sát về quota (tài khoản này đang gánh OLL + TLT + LTCQ + Vibe, quota ~8 video/ngày không đủ chia; rủi ro "chết chùm" cả dàn kênh nếu dính cờ spam).
* **Loại bỏ Phương án C (Đăng chung OLL EN / Audio track):** Bất khả thi về kỹ thuật (thời lượng lệch 12–26%, chữ trên hình đã dịch thành video độc lập nên không thể ghép audio track; đăng lẫn lộn 4 thứ tiếng sẽ phá nát tệp khán giả và đề xuất của kênh chính).
* **Loại bỏ Phương án D (Đổi tên VibeMusicMaker):** Sai lầm về thuật toán (tệp khán giả cũ là nhạc EN, đổi sang animation ES sẽ bị ngộ độc metadata; hơn nữa vẫn kẹt quota trên `fire10.dev`).
* **Giải pháp tối ưu:** Mượn một Google Account độc lập (`leehwangjun88.1`), triển khai cuốn chiếu theo giai đoạn (Staggered Rollout) để cô lập rủi ro, kiểm soát quota và đo lường RPM thực tế.

---

### 1. Phán quyết: Kênh, Tài khoản & Thời điểm mở

| Ngôn ngữ | Kênh triển khai | Google Account | Thời điểm mở | Lý do chiến lược |
|---|---|---|---|---|
| **ES (Tây Ban Nha)** | Kênh Brand mới: *Off Limits Life en Español* | `leehwangjun88.1` | **24/11** | Dung lượng thị trường lớn nhất, kiểm tra khả năng bắt đề xuất của Shorts. |
| **FR (Pháp)** | Kênh Brand mới: *Off Limits Life en Français* | `leehwangjun88.1` | **24/11** | RPM cao nhất trong 3 thứ tiếng (tệp EU), độ lệch thời lượng thấp nhất (±3%). |
| **PT-BR (Bồ Đào Nha)** | Kênh Brand mới: *Off Limits Life - Brasil* | `leehwangjun88.1` | **28/11** (trễ 4 ngày) | RPM cực thấp ($0.01–0.03). Chờ xem quota của `leehwangjun88.1` có mượt không mới bung. |
| **EN (Gốc)** | Giữ nguyên kênh *Off Limits Life* | `fire10.dev` | Đang chạy | Giữ sạch tệp người xem tiếng Anh, bảo tồn tài khoản chính. |

> **Tại sao chọn `leehwangjun88.1`?** Tài khoản này hoàn toàn sạch, sở hữu trọn vẹn hạn ngạch ~8 video/ngày, cách ly rủi ro liên đới sang hệ thống kênh chính trên `fire10.dev`.

---

### 2. Lịch upload cụ thể khớp Quota (~8 video/ngày/account)

Toàn bộ 96 Shorts (32 video/ngôn ngữ) đã render xong. Lịch đăng bố trí an toàn dưới trần quota:

#### A. Trên tài khoản phụ: `leehwangjun88.1` (Chuyên biệt cho Bản Dịch)
* **Giai đoạn 1 (24/11 – 27/11): Thử lửa tài khoản**
  * ES: 2 video/ngày (khung giờ: 00:00 & 04:00 UTC — giờ vàng LatAm).
  * FR: 2 video/ngày (khung giờ: 11:00 & 17:00 UTC — giờ vàng Pháp/EU).
  * **Tổng upload:** **4 video/ngày** (dư 4 slot an toàn, tránh kích hoạt bot chống spam của YouTube).
* **Giai đoạn 2 (28/11 – 10/12): Đủ tải 3 kênh**
  * ES: 2 video/ngày.
  * FR: 2 video/ngày.
  * PT-BR: 2 video/ngày (khung giờ: 14:00 & 22:00 UTC — giờ vàng Brazil).
  * **Tổng upload:** **6 video/ngày** (nằm chắc chắn dưới giới hạn 8 video/ngày, dư 2 slot dự phòng lỗi upload).

#### B. Trên tài khoản chính: `fire10.dev` (Kênh Gốc & Kênh Khác)
* **OLL EN:** 1–2 video/ngày.
* **TLT / LTCQ:** Tối đa 4–5 video/ngày.
* **VibeMusicMaker:** **0 video/ngày (Dừng hoàn toàn)**.
* **Tổng upload:** **5–7 video/ngày** (đảm bảo không bao giờ bị nghẽn quota 8 video/ngày như ngày 14/11).

---

### 3. Xử lý kênh cũ yếu (VibeMusicMaker)

* **Phán quyết:** **ĐÓNG BĂNG NGAY LẬP TỨC (Freeze/Pause)**.
* **Lý do:**
  1. 61 video long + 17 short chỉ đạt 6–191 view chứng tỏ nội dung không có lực kéo tự nhiên.
  2. Việc tiếp tục đăng nhạc sẽ tiêu tốn lãng phí 1–2 slot trong quota eo hẹp của `fire10.dev`.
  3. Không xóa kênh/video (giữ làm footprint tuổi kênh), nhưng tắt toàn bộ lịch đăng để nhường tài nguyên cho OLL EN và TLT/LTCQ.

---

### 4. Rủi ro chính sách & Checklist User kiểm trong Studio

#### Rủi ro chính:
1. **Inauthentic Content / Mass-produced Spam:** 3 kênh mới toanh lập cùng lúc, dùng giọng AI Kokoro, hình thức animation đồng nhất dễ bị thuật toán quét lạm dụng mạng lưới (network abuse).
2. **Hạn chế tính năng kênh mới (Advanced Features):** Kênh mới lập chưa xác minh danh tính/lịch sử có thể bị siết quota ngày đầu dưới 8 video.

#### Checklist User tự kiểm trong YouTube Studio (Tối đa 5 mục):
1. **[ ] Kiểm tra Quota ngày 1 (`leehwangjun88.1`):** Lập 2 kênh ES + FR, upload thử và lên lịch 4 video đầu tiên xem có bị bảng thông báo "Daily upload limit reached" hay không.
2. **[ ] Tích chọn bắt buộc "Altered or synthetic content":** Ở từng video khi upload, tích chọn nội dung tạo bằng AI (khai báo giọng TTS) để tránh gậy vi phạm chính sách minh bạch.
3. **[ ] Không chèn link ngoài vào mô tả:** Kênh mới chưa có Advanced Features nếu chèn external URL trong bio/comment sẽ bị khóa tính năng hoặc dính cờ spam; chỉ để tag handle `@OffLimitsLife`.
4. **[ ] Phân tách trình duyệt (Browser Profile):** Đăng nhập `leehwangjun88.1` trên một Profile Chrome/Brave hoàn toàn riêng biệt với `fire10.dev` để tránh liên đới fingerprint/cookie khi thao tác.
5. **[ ] Kiểm tra tab Earn (Kiếm tiền) sau 48h:** Xem mục trạng thái kênh có bị cảnh báo vi phạm nguyên tắc cộng đồng hoặc hạn chế tính năng hay không.

---

### 5. Ngưỡng đo lường & Điều kiện Dừng / Mở rộng

Điểm mốc đánh giá: **Hết ngày 03/12 (sau 10 ngày chạy ES/FR, 6 ngày chạy PT-BR)**.

| Chỉ số (Metric) | Ngưỡng Tệ (Kém) | Ngưỡng Đạt (Kỳ vọng) | Ngưỡng Đột phá |
|---|---|---|---|
| **Median View / Short (sau 48h)** | < 100 view | 500 – 1.000 view | > 3.000 view |
| **Swipe-to-view (Viewed vs Swiped)** | < 50% | 60% – 70% | > 75% |
| **APV (Thời lượng xem trung bình)** | < 55% | 70% – 85% | > 90% |

#### Quy tắc hành động (Action Rules):
* **LỆNH DỪNG (Kill Switch):**
  * Kênh nào sau 10 video đầu tiên có **Median View < 100** và **Swipe-away > 50%**: Lập tức dừng upload ngôn ngữ đó. Không đốt thêm công sức. Dồn slot quota cho ngôn ngữ có chỉ số tốt hơn.
  * Đặc biệt với **PT-BR**: Nếu View không vượt trội (> 3x) so với FR/ES để bù đắp cho mức RPM siêu thấp ($0.01), dừng ngay sau đợt 32 video này, không sản xuất batch tiếp theo.
* **LỆNH MỞ RỘNG (Scale-up):**
  * Kênh đạt ngưỡng Kỳ vọng trở lên (View > 500, APV > 70%): Tiếp tục sản xuất Batch 2 sau ngày 10/12.
  * Nếu kênh FR đạt kết quả tốt: Ưu tiên nguồn lực cao nhất vì đây là thị trường có RPM tốt nhất trong 3 ngôn ngữ thử nghiệm.
