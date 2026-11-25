Nội dung phân tích và phương án vận hành chi tiết cho vòng 2 đã được lưu tại [agy-r2.md](file:///Users/nino/Projects/FIRE10.DEV/REPO/oh-my-channels/channels/ma-no-ke/debate/15-tan-suat/agy-r2.md). Dưới đây là câu trả lời cụ thể cho 5 câu hỏi:

---

### 1. 2 tập/tuần có lợi gì so với 1 tập/tuần cho kênh mới 3 ngày tuổi? Có rủi ro gì?

#### Lợi ích:
* **Tăng tốc độ tích lũy thư viện nội dung (Catalogue):** Kênh mới (~0 sub) rất cần kho nội dung để thuật toán nhận diện chủ đề và tìm đúng nhóm khán giả thích hoạt hình ma trào phúng. 2 tập/tuần giúp kênh tích lũy được 16 tập sau 2 tháng (thay vì 8 tập), tạo điều kiện cho người xem mới xem liên tục nhiều tập (*binge-watching*), tăng tổng thời lượng xem.
* **Nhân đôi tốc độ thử nghiệm đề tài (Topic Testing):** Kênh đang ở giai đoạn đầu dò tìm thị hiếu. Mỗi tập khai thác một loài ma khác nhau; 2 loài ma/tuần giúp kiểm chứng nhanh chóng trope/loài ma nào hook người xem Việt Nam tốt nhất.
* **Cung cấp nguyên liệu tự nhiên cho 14 Short/tuần mà KHÔNG bị loãng:** Giải quyết triệt để vấn đề ở vòng 1 (bẻ 1 tập 3 phút thành 14 short sẽ lặp cảnh và nhiều short đệm). Với 2 tập độc lập, cấu trúc chuẩn (5 short kể trọn có punchline riêng + 2 trailer) được bảo toàn nguyên vẹn cho cả 14 short.
* **Tăng điểm chạm kéo phễu:** 14 Short đóng vai trò là 14 vệ tinh độc lập đưa người xem về 2 video dài.

#### Rủi ro:
* **Quá tải vận hành & Cạn quota AI (Rủi ro lớn nhất):** Dự án do 1 người làm. Dù kịch bản đã có sẵn đến P15, việc prompt ảnh Muse, duyệt ảnh thủ công, chạy TTS và dựng Remotion cho 2 LONG + 14 Short/tuần là khối lượng công việc rất lớn, dễ dẫn đến kiệt sức hoặc phải hạ chuẩn chất lượng hình ảnh/âm thanh.
* **YouTube không ưu tiên tần suất đăng thuần túy:** Theo Todd Beaupré (Trưởng bộ phận Khám phá YouTube) và tài liệu chính thức [[Hệ thống đề xuất](https://support.google.com/youtube/answer/11914225)], thuật toán đánh giá dựa trên mức độ hài lòng của khán giả trên từng video riêng biệt (*viewer satisfaction per video*), không cộng điểm ưu tiên chỉ vì kênh đăng dày. Nếu chất lượng nội dung bị vội vã làm giảm tỷ lệ giữ chân, việc tăng số tập không mang lại hiệu quả view.
* **Phân tán nguồn lực khi LONG chưa có tệp:** LONG hiện mới 33–56 view (chủ yếu do kênh mới, chưa có đề xuất tự nhiên). Nếu ra 2 LONG/tuần trong khi tỷ lệ chuyển đổi từ Short sang LONG chưa được tối ưu, chi phí sản xuất video dài sẽ bị lãng phí.

---

### 2. Lịch tuần cụ thể: Giờ đăng, cách xếp Short chạy chồng, vị trí Trailer

#### Cơ chế xếp chồng: Mô hình "2 Làn sóng" (Wave 3,5 ngày)
Không nên trộn lẫn Ma A (trưa) và Ma B (tối) trong cùng một ngày vì sẽ làm phân mảnh nhận diện câu chuyện. Lịch tuần nên chia gọn làm 2 làn sóng:
* **Làn sóng A (Tập A - Ma A):** Chạy từ **Thứ Hai đến trưa Thứ Năm** (LONG A công chiếu vào tối Thứ Tư).
* **Làn sóng B (Tập B - Ma B):** Chạy từ **tối Thứ Năm đến hết Chủ Nhật** (LONG B công chiếu vào tối Chủ Nhật).

#### Khung giờ đăng tối ưu tại Việt Nam:
* **Short 1 (Trưa): 11:30 – 12:00** (Giờ nghỉ trưa của học sinh/văn phòng; ưu tiên các Short kể trọn có punchline hài/nhẹ nhàng).
* **Short 2 (Tối): 19:00 – 19:30** (Khung giờ vàng thư giãn; ưu tiên Short rùng rợn, cao trào hoặc Trailer).
* **LONG: 19:30 – 20:00** (Đăng ngay sau Short tối 30 phút vào Thứ Tư và Chủ Nhật).
* *Khoảng cách giữa 2 Short:* ~7,5 tiếng, đảm bảo mỗi video có chu kỳ phân phối độc lập, tránh lỗi nghẽn hàng đợi như case đăng dồn 4 short trong 2 phút (P01-SH5–7).

#### Vị trí đặt Trailer so với LONG:
* *Quy định YouTube:* Nút "Video liên quan" (*Related video* - [[YouTube Help 13812810](https://support.google.com/youtube/answer/13812810)]) chỉ dẫn được tới video đã upload trên kênh.
* **Trailer 1 (Teaser mồi tò mò):** Đăng **trước LONG 24 giờ** (19:00 ngày hôm trước). Short này gợi mở tình huống bí ẩn để người xem tò mò, hẹn giờ đón xem.
* **Trailer 2 (Kêu gọi hành động ngay - CTA):** Đăng **cùng ngày với LONG lúc 19:00** (trước giờ LONG lên 30 phút). Ngay khi LONG công chiếu lúc 19:30, nút "Video liên quan" trên Short này sẽ kích hoạt để kéo người xem chuyển tiếp sang xem trọn vẹn bản dài.

---

### 3. Video liên quan (Related Video): Short của tập A ra sau khi LONG B lên thì vẫn trỏ về A hay đổi?

**VẪN TRỎ VỀ LONG A. TUYỆT ĐỐI KHÔNG ĐỔI SANG B.**

* **Trải nghiệm người xem (UX):** Người xem đang xem Short về Ma A và bấm vào nút liên kết vì muốn xem tiếp cái kết của Ma A. Nếu chuyển họ sang Ma B, họ sẽ cảm thấy bị đánh lừa (*mismatch/bait-and-switch*), dẫn đến thoát video ngay trong 3–5 giây đầu.
* **Tác hại thuật toán [Suy đoán kỹ thuật]:** Việc người xem click vào và thoát ra ngay lập tức sẽ kéo tụt chỉ số *Average Percentage Viewed (APV)* của LONG B, khiến thuật toán đánh giá LONG B giữ chân kém và bóp đề xuất.
* **Giá trị trường tồn (Evergreen Asset):** Short có thể được thuật toán phân phối lại sau vài tuần hoặc vài tháng. Việc giữ đúng liên kết giúp mỗi Short là một phễu dẫn vĩnh viễn và chuẩn xác về tập gốc trong thư viện kênh.

---

### 4. Đo gì, sau mấy tuần, để quyết định giữ 2 tập/tuần hay quay về 1?

#### Thời gian đo lường:
* **Tối thiểu 3 đến 4 tuần liên tục (khoảng 6–8 tập LONG, 42–56 Short).**
* *Lý do:* Kênh mới 3 ngày tuổi chưa có số liệu nền (*baseline*). Các so sánh phải dựa trên **tuổi video ở mốc 7 ngày** (không lấy số liệu tổng view của video vừa đăng so với video cũ).

#### 4 Chỉ số cốt lõi trong YouTube Studio Analytics:
1. **Lưu lượng chuyển đổi từ Short sang LONG (*Traffic Source: Related video*):** Kiểm tra xem số lượt click từ Short vào 2 video LONG hàng tuần có tăng lên tương ứng không. Nếu ra 14 short mà view LONG vẫn đứng im ở mức 30–50 view $\rightarrow$ phễu không hiệu quả.
2. **Tỷ lệ Được xem so với Đã vuốt qua (*Viewed vs Swiped Away*):** So sánh tỷ lệ này ở slot trưa (11:30) và slot tối (19:00). *[Suy đoán vận hành]* Nếu một trong hai slot liên tục có tỷ lệ xem tụt sâu hoặc lượt hiển thị (*Shown in feed*) bị kẹt dưới 100 view ở mốc 7 ngày $\rightarrow$ tần suất đang bị dư thừa.
3. **Thời lượng xem trung bình & Giữ chân (*APV / Retention*):** Đánh giá xem việc tăng sản lượng có làm sụt giảm thời lượng xem trung bình của Short hoặc LONG không.
4. **Tải vận hành thực tế (*Operational Load*):** Đánh giá mức độ khả thi của 1 solo creator: có duy trì được việc duyệt ảnh Muse, TTS và dựng Remotion đúng hạn mà không bị kiệt sức hay cạn quota tài khoản không.

#### Quy tắc quyết định sau 4 tuần [Đề xuất vận hành]:
* **GIỮ 2 tập/tuần nếu:** Cả 2 khung giờ Short đều đạt view ổn định ở mốc 7 ngày, tổng view LONG tăng trưởng từ nguồn Short, và creator kiểm soát tốt khối lượng sản xuất.
* **QUAY VỀ 1 tập/tuần nếu:** Bị quá tải/cạn quota AI; hoặc lượng click từ Short sang LONG không tăng; hoặc một trong hai slot Short liên tục bị kẹt view thấp.

---

### 5. Chốt khuyến nghị & Mẫu lịch 1 tuần

**Khuyến nghị:** Kịch bản đã có sẵn đến P15 (bản v2) là lợi thế lớn giúp loại bỏ nút thắt viết kịch bản. Phương án **2 LONG × 7 Short = 14 Short/tuần** hoàn toàn khả thi về mặt nội dung và vượt trội hơn hẳn so với việc bẻ vụn 1 tập 3 phút. **Khuyến nghị cho phép thử nghiệm nhịp 2 tập/tuần trong 3–4 tuần (P03 đến P08)** theo lịch 2 làn sóng dưới đây.

#### Mẫu lịch 1 tuần (14 Short + 2 LONG):

| Ngày | Giờ (+07) | Loại | Mã video | Nội dung & Mục tiêu | Gắn Related Video |
|---|---|---|---|---|---|
| **Thứ Hai** | 11:30 | Short | P[A]-SH1 | Kể trọn 1: Hồ sơ/Gag mở đầu về Ma A (hài hước) | Chưa gắn (chờ LONG A) |
| | 19:00 | Short | P[A]-SH2 | Kể trọn 2: Tình huống ma quái A | Chưa gắn |
| **Thứ Ba** | 11:30 | Short | P[A]-SH3 | Kể trọn 3: Tình huống trớ trêu/Twist Ma A | Chưa gắn |
| | 19:00 | Short | **P[A]-SH6** | **Trailer 1 (Teaser):** Treo bí ẩn Ma A, hẹn tối mai | Chưa gắn (hoặc link lịch) |
| **Thứ Tư** | 11:30 | Short | P[A]-SH4 | Kể trọn 4: Góc nhìn Ma Nó cà khịa Ma A | Chưa gắn |
| *(Ra mắt A)* | 19:00 | Short | **P[A]-SH7** | **Trailer 2 (CTA):** Cao trào gay cấn, giục xem bản đầy đủ | **Trỏ ngay về P[A]-LONG** |
| | **19:30** | **LONG** | **P[A]-LONG** | **TẬP DÀI MA A (~3 phút) LÊN SÓNG** | *(Gắn link cho SH1–4)* |
| **Thứ Năm** | 11:30 | Short | P[A]-SH5 | Kể trọn 5: Cái kết mở/Hậu trường Ma A | **Trỏ về P[A]-LONG** |
| | 19:00 | Short | P[B]-SH1 | Kể trọn 1: Hồ sơ/Gag mở đầu về Ma B | Chưa gắn |
| **Thứ Sáu** | 11:30 | Short | P[B]-SH2 | Kể trọn 2: Tình huống rùng rợn Ma B | Chưa gắn |
| | 19:00 | Short | P[B]-SH3 | Kể trọn 3: Tình huống trớ trêu/Twist Ma B | Chưa gắn |
| **Thứ Bảy** | 11:30 | Short | P[B]-SH4 | Kể trọn 4: Góc nhìn Ma Nó về Ma B | Chưa gắn |
| | 19:00 | Short | **P[B]-SH6** | **Trailer 1 (Teaser):** Mồi bí ẩn Ma B, hẹn tối Chủ Nhật | Chưa gắn |
| **Chủ Nhật**| 11:30 | Short | P[B]-SH5 | Kể trọn 5: Cảnh hài đắt giá Ma B | Chưa gắn |
| *(Ra mắt B)* | 19:00 | Short | **P[B]-SH7** | **Trailer 2 (CTA):** Kêu gọi hành động, xem trọn vẹn tập dài | **Trỏ ngay về P[B]-LONG** |
| | **19:30** | **LONG** | **P[B]-LONG** | **TẬP DÀI MA B (~3 phút) LÊN SÓNG** | *(Gắn link cho SH1–5)* |

*(Thao tác vận hành: Khi LONG lên sóng lúc 19:30, vào YouTube Studio gắn bổ sung link "Related video" cho các Short đã đăng trước đó của tập đó).*
ONG** |
| | **19:30** | **LONG** | **P[B]-LONG** | **TẬP DÀI MA B (~3 phút) LÊN SÓNG** | *(Cập nhật gắn link cho SH1–5)* |

*Ghi chú vận hành:* Khi P[A]-LONG lên sóng vào tối Thứ Tư, vào YouTube Studio gắn link "Related video" cho các short SH1, SH2, SH3, SH4 đã đăng trước đó (chỉ mất 1–2 phút). Tương tự cho tập B vào tối Chủ Nhật.
