#!/bin/zsh
# reg.sh NN slug "title" — đăng ký PNN-LONG lên ythub + chạy agy chấm nền
cd ${0:A:h}/../..
N=$1; SLUG=$2; T=$3; S=scripts/p$N-$SLUG-v1.md
export YTHUB_ACTOR=agent:mnk-scripts
ythub set P$N-LONG --channel "Ma Nó Kể" --kind long --stage script --title "$T" --script $PWD/$S >/dev/null &&
ythub log P$N-LONG "Kịch bản v1 (agy chấm nền: debate/08-scripts/p$N-agy.md)" --kind review >/dev/null && echo "hub ok P$N"
nohup zsh -c "for i in 1 2 3; do debate/08-scripts/review.sh $S debate/08-scripts/p$N-agy.md; [ -s debate/08-scripts/p$N-agy.md ] && break; sleep 30; done" >/dev/null 2>&1 &
