#!/bin/zsh
# research → debate, chạy nền, không tốn token Claude
cd ${0:A:h}
REPO=${0:A:h:h:h}
if [[ ! -s market.md ]]; then
  agy --disable-slash-commands -p "Nghiên cứu thị trường. CHỈ dùng tool web search / đọc web, KHÔNG chạy lệnh shell, KHÔNG đọc/ghi file — mọi kết quả in thẳng ra câu trả lời (ghi nguồn URL) cho brief dưới đây. Tìm: (a) repo open-source nổi tiếng về tạo video bằng code/AI: remotion, HyperFrames (heygen-com/hyperframes), Motion Canvas, Revideo, OpenCut, MoneyPrinterTurbo, ShortGPT, NarratoAI, short-video-maker, các 'AI YouTube automation' repo nhiều sao; (b) sản phẩm: Descript, Opus Clip, InVideo AI, Pictory, CapCut, Runway, Hedra, Kapwing, vidIQ, TubeBuddy; (c) cách nhúng agent CLI vào app desktop: Claude Code stream-json/SDK, Agent Client Protocol (Zed), Conductor, Crystal/Claude Squad, opcode/claudia. Với mỗi cái: điểm hay đáng học cho Studio 1 người + AI, cấu trúc project/metadata họ dùng, license. Kết thúc bằng bảng 'học gì → áp vào đâu'. Tiếng Việt, markdown.

$(cat brief.md)" > market.md.tmp 2> market.err && mv market.md.tmp market.md
fi
{ cat brief.md; print "\n\n## market.md\n"; cat market.md } > brief-full.md
codex login status && $REPO/channels/ma-no-ke/tools/debate.sh brief-full.md debate 3
