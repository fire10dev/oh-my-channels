#!/bin/zsh
# review.sh SCRIPT OUT — agy chấm 1 kịch bản theo tiêu chí debate/06-p02
S=$1; OUT=$2
agy --disable-slash-commands -p "Bạn là biên tập viên khó tính của kênh YouTube 'Ma Nó Kể'. Chấm kịch bản bên dưới giống cách đã chấm P02. Video dựng từ ảnh tĩnh 2D + TTS tiếng Việt, lời phải ngắn, nghe một lần hiểu.
Không dùng tool, không đọc/ghi file. Trả lời tiếng Việt, markdown, gọn.
Đầu ra:
1. Bảng điểm 1–10 (1 dòng lý do): Mồi 15 s · Tò mò/rợn ở ý (không hù) · Trào phúng · Logic luật dân gian và luật truyện · Cú lật · Kết + nhử tập sau/đăng ký · Nghe-hiểu TTS · Shorts.
2. 5 chỗ yếu nhất + câu thoại thay thế cụ thể.
3. Logic: chỗ nào khán giả sẽ cãi, sửa thế nào.
4. Văn hóa dân gian Bắc Bộ: chỗ sai/lệch; có thành hướng dẫn nghi lễ không.
5. Rủi ro chính sách/nhạy cảm (trẻ em, cái chết, dân tộc, tôn giáo, thương hiệu).
6. Hình: cảnh thừa/thiếu.
Cuối: 3 việc phải sửa trước tiên.

===== LUẬT KÊNH =====
$(sed -n '/## 2. Luật kể/,/## 4. Năm tập/p' bible-v2.md; sed -n '/## 7./,$p' bible-v2.md)

===== KỊCH BẢN =====
$(cat $S)" > $OUT.tmp 2>> ${OUT%.md}.err && mv $OUT.tmp $OUT
