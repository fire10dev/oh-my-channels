#!/bin/zsh
# debate.sh BRIEF.md OUTDIR ROUNDS  — Codex và agy luân phiên phản biện, mỗi lượt đọc brief + toàn bộ transcript.
set -u
BRIEF=$1; OUT=$2; N=$3; mkdir -p $OUT; T=$OUT/transcript.md
[[ -f $T ]] || : > $T
log(){ print -r -- "[$(date +%H:%M:%S)] $*" | tee -a $OUT/run.log; }
turn(){ # $1=who $2=round
  local who=$1 r=$2 f=$OUT/r${r}-${1}.md
  [[ -s $f ]] && { log "skip $f (đã có)"; return; }
  local other=$([[ $who == codex ]] && echo agy || echo codex)
  local role="Bạn là ${who:u} trong cuộc tranh luận với ${other:u}. Vòng $r/$N."
  [[ $r == 1 && $who == codex ]] && role+=" Bạn mở màn: đưa đề xuất đầy đủ theo yêu cầu đầu ra."
  [[ $r -gt 1 || $who == agy ]] && role+=" Đọc kỹ lượt trước của ${other:u}: chỉ ra chỗ sai/nhạt/an toàn quá (thẳng thắn, cãi thật, không xã giao), giữ cái tốt, rồi đưa BẢN CẬP NHẬT ĐẦY ĐỦ theo yêu cầu đầu ra."
  [[ $r == $N ]] && role+=" Đây là vòng cuối: chốt danh sách cuối cùng, ghi rõ chỗ hai bên còn bất đồng."
  local prompt="$role
Không dùng tool, không đọc/ghi file, không chạy lệnh. Trả lời bằng tiếng Việt, markdown.

===== BRIEF =====
$(cat $BRIEF)

===== TRANSCRIPT CÁC LƯỢT TRƯỚC =====
$(cat $T)"
  log "start $who r$r"
  if [[ $who == codex ]]; then
    codex --search exec --skip-git-repo-check -s read-only "$prompt" < /dev/null > $f.tmp 2>>$OUT/codex.err
  else
    agy --mode plan --disable-slash-commands -p "$prompt" > $f.tmp 2>>$OUT/agy.err
  fi
  if [[ -s $f.tmp ]]; then mv $f.tmp $f; print -r -- "
## Vòng $r — ${who:u}
$(cat $f)
" >> $T; log "done $who r$r ($(wc -c < $f) bytes)"; else log "FAIL $who r$r"; return 1; fi
}
for r in $(seq 1 $N); do turn codex $r || exit 1; turn agy $r || exit 1; done
log "XONG $N vòng"
