#!/bin/zsh
# agy_turn.sh BRIEF OUTDIR ROUND N — chạy 1 lượt agy, đọc brief + transcript, append vào transcript
BRIEF=$1; OUT=$2; r=$3; N=$4; T=$OUT/transcript.md; f=$OUT/r${r}-agy.md
role="Bạn là AGY trong cuộc tranh luận với CODEX (ghế CODEX hiện do CLAUDE ngồi). Vòng $r/$N. Đọc kỹ lượt trước của CODEX: chỉ ra chỗ sai/nhạt/an toàn quá (thẳng thắn, cãi thật, không xã giao), giữ cái tốt, rồi đưa BẢN CẬP NHẬT ĐẦY ĐỦ theo yêu cầu đầu ra."
[[ $r == $N ]] && role+=" Đây là vòng cuối: chốt danh sách cuối cùng, ghi rõ chỗ hai bên còn bất đồng."
print -r -- "[$(date +%H:%M:%S)] start agy r$r" >> $OUT/run.log
agy --disable-slash-commands -p "$role
Không dùng tool, không đọc/ghi file, không chạy lệnh. Trả lời bằng tiếng Việt, markdown.

===== BRIEF =====
$(cat $BRIEF)

===== TRANSCRIPT CÁC LƯỢT TRƯỚC =====
$(cat $T)" > $f.tmp 2>>$OUT/agy.err
if [[ -s $f.tmp ]]; then mv $f.tmp $f; print -r -- "
## Vòng $r — AGY
$(cat $f)
" >> $T; print -r -- "[$(date +%H:%M:%S)] done agy r$r ($(wc -c < $f) bytes)" >> $OUT/run.log; else print -r -- "[$(date +%H:%M:%S)] FAIL agy r$r" >> $OUT/run.log; fi
