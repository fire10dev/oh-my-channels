#!/bin/zsh
# Debate 3: chỉ agy (codex hết quota tới 22/12; model local bị cấm). agy đóng 2 vai: đề xuất & phản biện.
cd "${0:A:h}"
B=$(cat brief.md); T=""
log(){ echo "[$(date +%H:%M:%S)] $*" >> run.log; }
RULE="Không dùng tool, không đọc/ghi file, không chạy lệnh. Trả lời bằng tiếng Việt, markdown, gọn."
ask(){ # name round role
  local who=$1 r=$2 role=$3 out="r$2-$1.md"
  local P="Bạn là ${(U)who} trong cuộc tranh luận. Vòng $r. $role
$RULE

===== BRIEF =====
$B

===== CÁC LƯỢT TRƯỚC =====
$T"
  log "start $who r$r"
  agy --mode plan --disable-slash-commands -p "$P" > "$out.tmp" 2> $who.err && mv "$out.tmp" "$out"
  log "done $who r$r ($(wc -c < $out 2>/dev/null) bytes)"
  T="$T

----- ${(U)who} vòng $r -----
$(cat $out 2>/dev/null)"
  print -r -- "$T" > transcript.md
}
OPP="Bạn là người phản biện khó tính, đã từng chạy kênh faceless thất bại: chỉ ra chỗ sai/bịa/viển vông/không làm được bằng đồ nghề, rủi ro chính sách, rồi đưa BẢN CẬP NHẬT ĐẦY ĐỦ theo yêu cầu đầu ra."
ask builder 1 "Bạn là nhà sản xuất kênh faceless quốc tế có kinh nghiệm: mở màn, đưa đề xuất đầy đủ theo yêu cầu đầu ra."
ask critic 1 "$OPP"
ask builder 2 "Đọc phản biện, cãi lại chỗ critic sai, nhận chỗ đúng, đưa BẢN CHỐT đầy đủ theo yêu cầu đầu ra."
log ALL DONE
