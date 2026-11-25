#!/bin/zsh
# Debate runner: codex r1 -> agy r1 -> codex r2 -> agy r2 -> codex judge. Outputs r*-*.md, transcript.md
cd "${0:A:h}"
B=$(cat brief.md); T=""
log(){ echo "[$(date +%H:%M:%S)] $*" >> run.log; }
RULE="Không dùng tool, không đọc/ghi file, không chạy lệnh. Trả lời bằng tiếng Việt, markdown."
ask(){ # who round role
  local who=$1 r=$2 role=$3 out="r$2-$1.md"
  local P="Bạn là ${(U)who} trong cuộc tranh luận. Vòng $r. $role
$RULE

===== BRIEF =====
$B

===== CÁC LƯỢT TRƯỚC =====
$T"
  log "start $who r$r"
  if [[ $who == codex ]]; then
    print -r -- "$P" | codex exec --skip-git-repo-check -s read-only -o "$out" - > codex.err 2>&1
  else
    agy --mode plan --disable-slash-commands -p "$P" > "$out.tmp" 2> agy.err && mv "$out.tmp" "$out"
  fi
  log "done $who r$r ($(wc -c < $out 2>/dev/null) bytes)"
  T="$T

----- ${(U)who} vòng $r -----
$(cat $out 2>/dev/null)"
  print -r -- "$T" > transcript.md
}
OPP="Đọc kỹ lượt trước: chỉ ra chỗ sai/nhạt/an toàn quá (thẳng thắn, cãi thật), giữ cái tốt, rồi đưa BẢN CẬP NHẬT ĐẦY ĐỦ theo yêu cầu đầu ra."
ask codex 1 "Bạn mở màn: đưa đề xuất đầy đủ theo yêu cầu đầu ra."
ask agy 1 "$OPP"
ask codex 2 "$OPP"
ask agy 2 "$OPP Đây là lượt cuối của bạn."
ask codex 3 "Bạn là TRỌNG TÀI chốt: tổng hợp phương án cuối cùng duy nhất (không liệt kê lựa chọn), giải quyết mọi điểm còn cãi, ra danh sách lô đêm nay cuối cùng."
log ALL DONE
