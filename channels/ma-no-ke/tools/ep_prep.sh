#!/bin/zsh
# ep_prep.sh NN — chuẩn bị 1 tập tới trước bước vẽ Muse: v3 (Codex) → sửa theo v3_check (tối đa 2 lượt) → tin Muse → lines → TTS → hub.
# Sau đó Claude soát xương sống/logic, user gửi tin Muse. Ghi log từng bước vào pNN/prep.log.
set -u; cd "${0:A:h}/.."; N=$(printf %02d $1); mkdir -p p$N; LOG=p$N/prep.log
log(){ print -r -- "[$(date +%H:%M:%S)] $*" | tee -a $LOG }
log "v3"; tools/v3_make.sh $1 >> $LOG 2>&1 || { log FAIL v3; exit 1; }
V3=$(ls scripts/p${N}-*-v3.md | grep -v prev | head -1)
for k in 1 2; do python3 tools/v3_check.py $V3 >> $LOG 2>&1 && break; log "revise $k"; tools/v3_revise.sh $V3 "" >> $LOG 2>&1; done
python3 tools/v3_check.py $V3 | tail -n +1 >> $LOG
log "muse"; for t in 1 2 3; do tools/muse_make.sh $1 >> $LOG 2>&1 && rg -q "P$N-" p$N/muse-msg.txt && break; rm -f p$N/muse-msg.txt; log "muse thử lại $t"; done; [[ -s p$N/muse-msg.txt ]] || log "FAIL muse"
log "lines"; python3 tools/v3_lines.py $V3 >> $LOG 2>&1 || { log FAIL lines; exit 1; }
log "tts"; tools/tts_ep.sh $1 >> $LOG 2>&1
CODE=P$N-LONG; export YTHUB_ACTOR=agent:mnk-prep
ythub set $CODE --channel "Ma Nó Kể" --script $PWD/$V3 >/dev/null
ythub log $CODE "Chuẩn bị xuyên đêm: v3 (Codex + v3_check), tin Muse p$N/muse-msg.txt, TTS LONG+short xong. Chờ Claude soát + user gửi Muse." --kind note >/dev/null
log "XONG p$N"
