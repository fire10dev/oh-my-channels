#!/bin/zsh
# render.sh in.svg|in.html out.png W H — render bằng Chrome headless
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$C" --headless=new --disable-gpu --hide-scrollbars --default-background-color=00000000 --window-size=$3,$4 --screenshot="$2" "file://${1:A}" >/dev/null 2>&1
ls -la "$2"
