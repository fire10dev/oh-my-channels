#!/usr/bin/env python3
"""One-off (2026-11-16): move what was still open in each channel's HANDOFF.md into YT Hub tasks/events.
The HANDOFF files themselves are archived under channels/<slug>/docs/archive/HANDOFF-2026-11-16.md.
Idempotent: a task/event with the same text on the same video is not added twice.

  python3 Tools/migrate_handoff_20261116.py [--db PATH] [--channel NAME]
"""
import argparse

import ythub

RAE, VMM, TLT, LTCQ, OLL = "Rice and Empires", "VibeMusicMaker", "Tiny Leg Theory", "Lý Thuyết Chân Que", "Off Limits Life"
ARCH = "docs/archive/HANDOFF-2026-11-16.md"

# (channel, code or None, owner, text)
TASKS = [
    (RAE, "L003", "user", "Xem L003-v3.mp4 + đọc cột VI và claim C1–C27 trong kịch bản"),
    (RAE, "L003", "user", "Nghe tên tiếng Việt trong TTS (tools/say_l003.json)"),
    (RAE, "L003", "user", "Nhạc: chọn 2–3 track Audio Library (shorts/public/bgm/) hoặc OK nhạc tạm make_epic_bed"),
    (RAE, "L003", "user", "Đăng L003 (kéo file; title/mô tả trong YT Hub)"),
    (RAE, "L008", "user", "Xem L008-champa.mp4 rồi duyệt đăng"),
    (RAE, "L007", "user", "Content ID claim 'Shadows And Dust' trên L007: quyết định dispute (CC-BY) hay để nguyên"),
    (RAE, "L004", "user", "Đọc cột VI + claim table C1–C30 của L004"),
    (RAE, "L004", "agent", "L004 media: long_build.py + Kokoro → map states mongol_1258/yuan_1285/supply_1288 → ảnh (≤55) → clip 1,3 → render"),
    (RAE, "L005", "user", "Duyệt cột VI kịch bản L005 (nhánh rice/long-L005)"),
    (RAE, "L006", "user", "Duyệt cột VI kịch bản L006 (nhánh rice/long-L006)"),
    (RAE, "L006", "agent", "L006: thay 55 ảnh placeholder → render → loudnorm −14 → thumbnail"),
    (RAE, None, "user", "Xác minh kênh bằng SĐT trong Studio để ghim bình luận (L001, S012 và các Short)"),
    (RAE, None, "user", "Tạo OAuth client Desktop (Google Cloud) cho tools/upload/upload.mjs nếu muốn đăng bằng API"),
    (RAE, None, "agent", "Gộp code render của nhánh rice/video-long-001 (LongVideo/Root/Thumb/long_chapters xung đột với main) — render lại L001 để so"),
    (VMM, None, "agent", "Gắn 'Video có liên quan' cho Short G02-3 → G03-5 (video 1 giờ đã public) — xong thì ythub fact <code>-S related_video ✅"),
    (VMM, None, "user", "Pack 04–05: duyệt bấm 'Lên lịch' G04-1 (đang nháp riêng tư) và kéo 2 mix P04/P05 vào Studio (batch4/youtube_posts_batch4_shorts_mix_P04-05.md)"),
    (VMM, None, "user", "100 Short cắt thêm: tự đăng theo shorts/posts_shorts100.md tới 29/11"),
    (VMM, None, "agent", "Pack 06–20: nhạc Flow Music + ảnh Google Flow (batch4/image_prompts/<id>.txt) rồi render như pack 04–05"),
    (TLT, None, "user", "Nghe duyệt bằng tai các Short trước khi đăng tiếp; kiểm license nhạc"),
    (LTCQ, None, "user", "Nghe duyệt bằng tai các Short trước khi đăng tiếp; kiểm license nhạc"),
    (TLT, None, "user", "Duyệt 14 video dài L1–L7 (EN) trước khi đăng — chưa nghe bằng tai"),
]

FACTS = [
    (RAE, "L003", "duration", "9:08"), (RAE, "L003", "lufs", "-14.3"), (RAE, "L003", "images", "70/70"),
    (RAE, "L003", "music", "placeholder (make_epic_bed)"),
    (RAE, "L008", "duration", "9:01"), (RAE, "L008", "lufs", "-14.3"), (RAE, "L008", "images", "51/51 + 18 mới 16:9"),
    (RAE, "L007", "duration", "8:49"), (RAE, "L007", "lufs", "-14.3"),
    (RAE, "L006", "images", "0/55 (placeholder)"), (RAE, "L006", "tts", "488 s"),
    (RAE, "L001", "duration", "9:30"),
]


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--db")
    p.add_argument("--channel")
    a = p.parse_args()
    con = ythub.connect(a.db)
    added = 0
    for ch, code, owner, text in TASKS:
        if a.channel and ch != a.channel:
            continue
        vid = ythub.find_video(con, code, ch)["id"] if code else None
        exists = con.execute("SELECT 1 FROM task t JOIN channel c ON c.id=t.channel_id WHERE c.name=? AND "
                             "t.video_id IS ? AND t.text=?", (ch, vid, text)).fetchone()
        if not exists:
            ythub.task_add(con, code, text, owner, channel=ch)
            added += 1
    for ch, code, k, v in FACTS:
        if not a.channel or ch == a.channel:
            ythub.fact(con, code, k, v, channel=ch)
    # one migration event per video of the channels whose HANDOFF was archived
    for ch in {t[0] for t in TASKS} | {RAE, VMM}:
        if a.channel and ch != a.channel:
            continue
        for v in con.execute("SELECT v.code FROM video v JOIN channel c ON c.id=v.channel_id WHERE c.name=?", (ch,)).fetchall():
            msg = f"Trạng thái trước 16/11 lấy từ HANDOFF.md / note (lưu ở {ARCH})"
            if not con.execute("SELECT 1 FROM event e JOIN video v ON v.id=e.video_id JOIN channel c ON c.id=v.channel_id "
                               "WHERE c.name=? AND v.code=? AND e.kind='migration'", (ch, v["code"])).fetchone():
                ythub.log(con, v["code"], msg, kind="migration", actor="migration", channel=ch)
    print(f"+{added} task")


if __name__ == "__main__":
    main()
