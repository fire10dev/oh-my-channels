#!/bin/zsh
# v3_make.sh N — nhờ Codex nâng scripts/pNN-*-v2.md thành v3 theo tools/v3_brief.md (mẫu P04 v4). Không tốn token Claude.
# Ra: scripts/pNN-<slug>-v3.md (+ .codex.log). Lịch: khuôn 2 tập/tuần, P05 = T2 7/12/2026, xen kẽ T2/T5.
set -eu
cd "${0:A:h}/.."
N=$(printf %02d $1); V2=$(ls scripts/p${N}-*-v2.md | head -1); SLUG=${${V2:t}%-v2.md}; OUT=scripts/${SLUG}-v3.md
[[ -s $OUT ]] && { echo "đã có $OUT"; exit 0; }
NX=$(printf %02d $(( $1 + 1 ))); NXV2=$(ls scripts/p${NX}-*-v2.md 2>/dev/null | head -1 || true)
SCHED=$(python3 - $1 <<'PY'
import sys, datetime as D
n=int(sys.argv[1]); k=n-5; base=D.date(2026,12,7)
def day(k): return base+D.timedelta(days=7*(k//2)+(3 if k%2 else 0))
wd=['Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy','Chủ Nhật']
d=day(k); nx=day(k+1); f=lambda x:x.strftime('%d/%m')
sl=[(d,'19:00')]+[(d+D.timedelta(days=i),t) for i in (1,2,3) for t in ('11:30','19:00')]
print(f"LONG {wd[d.weekday()]} {f(d)} 18:00 (+07). 7 short: "+", ".join(f"{wd[x.weekday()]} {f(x)} {t}" for x,t in sl[:7])+f". Teaser cuối LONG nói về P{n+1:02d} nhưng KHÔNG nêu thứ/ngày: \"Tập sau: …\", chữ trên hình \"TẬP SAU\".")
PY
)
P="$(cat tools/v3_brief.md)

===== LỊCH TẬP NÀY =====
$SCHED

===== TẬP SAU (cho teaser) =====
(Teaser cuối LONG phải nói về TẬP SAU dưới đây. TUYỆT ĐỐI không chép teaser của mẫu P04 — \"bến cát lậu… ma da\" là P05, đã qua.)
$( [[ -n $NXV2 ]] && sed -n 1,25p $NXV2 || echo 'không có' )

===== MẪU CHUẨN: P04 v4 (đã dựng) =====
$(cat scripts/p04-ma-giau-v4.md)

===== KỊCH BẢN CẦN NÂNG: ${V2:t} =====
$(cat $V2)"
tools/llm.sh "Không chạy lệnh, không đọc/ghi file. Trả về đúng nội dung file markdown v3, bắt đầu bằng dòng '# Dự án'.

$P" < /dev/null > $OUT.tmp 2> ${OUT%.md}.codex.log
sed -n '/^# Dự án/,$p' $OUT.tmp > $OUT; rm $OUT.tmp
[[ -s $OUT ]] && echo "XONG $OUT $(wc -l < $OUT) dòng" || { echo "FAIL $OUT"; exit 1; }
