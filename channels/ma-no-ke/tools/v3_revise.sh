#!/bin/zsh
# v3_revise.sh scripts/pNN-*-v3.md "nhận xét" — Codex sửa v3 theo báo cáo v3_check.py + nhận xét biên tập (Claude). Ghi đè, giữ bản cũ .prev.md.
set -u
cd "${0:A:h}/.."
F=$1; NOTE=${2:-}
REP=$(python3 tools/v3_check.py $F 2>&1)
cp $F ${F%.md}.prev.md
tools/llm.sh "Không chạy lệnh, không đọc/ghi file. Sửa kịch bản v3 dưới đây theo BRIEF, BÁO CÁO KIỂM và NHẬN XÉT BIÊN TẬP. Giữ nguyên những gì không bị nêu. Trả về đúng toàn bộ file markdown đã sửa, bắt đầu bằng dòng '# Dự án'.

===== BRIEF =====
$(cat tools/v3_brief.md)

===== BÁO CÁO KIỂM (máy) =====
$REP

===== NHẬN XÉT BIÊN TẬP =====
$NOTE
- Short TRỌN phải có PUNCH riêng (câu đùa chốt) trước câu chỉ link; mỗi short 70–110 chữ lời (≈30–40 s), được dùng lại nguyên văn câu của LONG để đủ độ dài.
- Mốc thời gian LONG tính theo ~3,2 chữ/giây, tổng ≈3:00–3:15.

===== KỊCH BẢN HIỆN TẠI =====
$(cat $F)" < /dev/null > $F.tmp 2>>${F%.md}.codex.log
if grep -q '^# Dự án' $F.tmp; then sed -n '/^# Dự án/,$p' $F.tmp > $F; fi; rm -f $F.tmp
python3 tools/v3_check.py $F
