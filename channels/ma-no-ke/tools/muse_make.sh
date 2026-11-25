#!/bin/zsh
# muse_make.sh NN — Codex soạn tin Muse (một đoạn tiếng Anh, khuôn p04/muse-msg.txt) từ mục Nhân vật + Hình của scripts/pNN-*-v3.md → pNN/muse-msg.txt
set -eu; cd "${0:A:h}/.."; N=$(printf %02d $1); V3=$(ls scripts/p${N}-*-v3.md | grep -v prev | head -1); O=p$N/muse-msg.txt
[[ -s $O ]] && { echo "đã có $O"; exit 0; }; mkdir -p p$N
tools/llm.sh "Không chạy lệnh, không đọc/ghi file. Viết tin nhắn gửi Muse (AI vẽ ảnh) cho tập $((10#$N)) kênh 'Ma No Ke', đúng khuôn và giọng của MẪU (tiếng Anh, MỘT đoạn liền không xuống dòng): giữ nguyên các câu khung (Cloud only, 16:9 full-bleed 2048x1152 NO black bars, no readable text/letters/digits, no logos, V2 style, STYLE block, zip + public link). Characters: con ma lấy EXACTLY từ ảnh tham chiếu B0x ghi trong kịch bản (bảo Muse tìm file đó trên máy), người sống mô tả cụ thể tuổi, quần áo, đạo cụ để nhất quán. Bối cảnh Việt Nam đúng tập. SCENES: mỗi mã ảnh MỚI trong mục Hình (không gồm B0x/S0x tái dùng), mô tả cụ thể theo cách kịch bản dùng ảnh đó, cute-creepy không ghê, trẻ em luôn an toàn. Tên file: thêm tiền tố \"P${N}-\" trước mã ảnh trong kịch bản (ví dụ mã T01 → P${N}-T01.png); character sheet của tập cũng gọi bằng tên có tiền tố. Đủ thông tin rồi, KHÔNG hỏi lại, KHÔNG viết tóm tắt/giải thích, chỉ in đoạn tin. Trả về đúng đoạn tin, không gì khác.

===== MẪU =====
$(cat p04/muse-msg.txt)

===== KỊCH BẢN =====
$(cat $V3)" < /dev/null 2>/dev/null | tr -d '\r' | awk '/Cloud only/ && length>m{m=length;l=$0} END{print l}' > $O
[[ $(wc -c < $O) -gt 1500 ]] && echo "XONG $O $(wc -c < $O) byte" || { echo "FAIL $O"; cat $O | head -3; exit 1; }
