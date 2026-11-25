#!/bin/zsh
cd "${0:A:h}"
P="$(cat brief.md)"
codex --search exec --skip-git-repo-check -s read-only -i current-U123.jpg -i assets-p02.jpg "Bạn là chuyên gia thumbnail YouTube (CTR). Xem 2 ảnh đính kèm (current-U123.jpg = thumbnail hiện tại, assets-p02.jpg = asset). Không ghi file, không chạy lệnh. Trả lời tiếng Việt.

$P" < /dev/null > codex-r1.md 2> codex.log &
agy --disable-slash-commands -p "Bạn là chuyên gia thumbnail YouTube (CTR), cãi thẳng, không xã giao. Không dùng tool, không đọc/ghi file, không chạy lệnh. Ảnh không gửi kèm được: dựa vào mô tả trong brief. Trả lời tiếng Việt, markdown.

$P" > agy-r1.md 2> agy.log &
wait
