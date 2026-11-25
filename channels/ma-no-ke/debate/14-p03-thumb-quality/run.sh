#!/bin/zsh
cd "${0:A:h}"
P="$(cat brief.md)"
codex --search exec --skip-git-repo-check -s read-only -i current-T123.jpg -i mobile-T123.jpg -i covers-SH1-7.jpg "Bạn là chuyên gia thumbnail YouTube (CTR), phản biện thẳng. Xem 3 ảnh đính kèm (current-T123.jpg = 3 thumbnail LONG, mobile-T123.jpg = cùng 3 cái ở cỡ điện thoại, covers-SH1-7.jpg = 7 bìa short). Không ghi file, không chạy lệnh. Trả lời tiếng Việt.

$P" < /dev/null > codex-r1.md 2> codex.log &
agy --disable-slash-commands -p "Bạn là chuyên gia thumbnail YouTube (CTR), cãi thẳng, không xã giao. Không dùng tool, không đọc/ghi file, không chạy lệnh. Ảnh không gửi kèm được: dựa vào mô tả trong brief. Trả lời tiếng Việt, markdown.

$P" > agy-r1.md 2> agy.log &
wait
