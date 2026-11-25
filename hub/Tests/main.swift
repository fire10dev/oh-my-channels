import Foundation

// Headless tests for Model + Store. Run: ./Tools/test.sh
var failures = 0
func check(_ cond: Bool, _ msg: String, line: Int = #line) {
  if !cond { failures += 1; print("✗ line \(line): \(msg)") }
}

let schema = try! String(contentsOfFile: CommandLine.arguments[1], encoding: .utf8)
let migrate = try! String(contentsOfFile: CommandLine.arguments[2], encoding: .utf8)
let path = NSTemporaryDirectory() + "ythub-test-\(UUID().uuidString).db"
defer { try? FileManager.default.removeItem(atPath: path) }
let store = try! Store(path: path, schema: schema, migrate: migrate)
_ = try! Store(path: path, schema: schema, migrate: migrate)  // second open: migration is idempotent

// channels
let a = try! store.insertChannel(Channel(name: "Off Limits Life", handle: "@OffLimitsLife"))
let b = try! store.insertChannel(Channel(name: "Tiny Leg Theory"))
check(try! store.channels().map(\.name) == ["Off Limits Life", "Tiny Leg Theory"], "channels listed")
check((try? store.insertChannel(Channel(name: "Tiny Leg Theory"))) == nil, "channel name unique")

// videos + stage groups
var v = Video(channelId: a, code: "IX001", kind: .long, stage: .script, title: "Submarine")
v.id = try! store.insertVideo(v)
check(v.group == .doing, "script = đang làm")
v.stage = .published; v.ytUrl = "https://youtu.be/pX1CrKt3sYA"
try! store.updateVideo(v)
let got = try! store.videos().first { $0.id == v.id }!
check(got.stage == .published && got.group == .done && got.ytUrl == v.ytUrl, "update persisted")
check(Stage.ready.group == .ready && Stage.render.group == .doing, "groups")

// empty codes don't collide; duplicate code in one channel does
_ = try! store.insertVideo(Video(channelId: b, kind: .short))
_ = try! store.insertVideo(Video(channelId: b, kind: .short))
check(try! store.videos().filter { $0.channelId == b && $0.code.isEmpty }.count == 2, "empty codes allowed")
_ = try! store.insertVideo(Video(channelId: b, code: "s2", kind: .short, stage: .ready))
check((try? store.insertVideo(Video(channelId: b, code: "s2", kind: .short))) == nil, "code unique per channel")
_ = try! store.insertVideo(Video(channelId: b, code: "s10", kind: .short, stage: .ready))

// counts
let counts = statusCounts(try! store.videos())
check(counts[a]?[.done] == 1 && counts[b]?[.ready] == 2 && counts[b]?[.doing] == 2, "counts \(counts)")

// natural sort: long before short, s2 before s10
let codes = sortedVideos(try! store.videos().filter { $0.channelId == b && !$0.code.isEmpty }).map(\.code)
check(codes == ["s2", "s10"], "natural sort \(codes)")

// text with quotes / unicode round-trips
var q = Video(channelId: a, code: "IX002", title: "Nam Cực — \"300 Club\" 'x'", description: "a\nb")
q.id = try! store.insertVideo(q)
check(try! store.videos().first { $0.id == q.id }!.title == q.title, "unicode/quotes")

// v2: events, tasks, facts
let l8 = try! store.insertVideo(Video(channelId: b, code: "L8", kind: .long, stage: .render))
try! store.addEvent(channelId: b, videoId: l8, kind: "stage", actor: "user", message: "render → ready")
_ = try! store.addTask(channelId: b, videoId: l8, owner: "user", text: "xem render")
let t2 = try! store.addTask(channelId: b, videoId: nil, owner: "user", text: "chọn nhạc kênh")
try! store.db.run("INSERT INTO fact(video_id, key, value) VALUES (?,?,?)", [l8, "images", "51/51"])
check(try! store.events(videoId: l8).map(\.message) == ["render → ready"], "events")
check(try! store.openTasks().count == 2, "open tasks")
try! store.setTaskDone(id: t2, actor: "user")
check(try! store.openTasks().map(\.text) == ["xem render"], "task done")
check(try! store.facts(videoId: l8) == [Fact(key: "images", value: "51/51")], "facts")
try! store.db.run("INSERT INTO asset(path, kind, license, notes) VALUES (?,?,?,?)",
                  ["shared/library/music/a.mp3", "music", "CC BY 4.0 · ghi công bắt buộc", "Music: A by B (CC BY 4.0)"])
try! store.db.run("INSERT INTO video_asset(video_id, asset_id, role) VALUES (?, 1, 'music')", [l8])
let la = try! store.assets(videoId: l8)
check(la.count == 1 && la[0].role == "music" && la[0].attribution == "Music: A by B (CC BY 4.0)", "assets \(la)")

// v3 dashboard: latest event per video, stalled, blockers, stage moves
try! store.addEvent(channelId: b, videoId: l8, kind: "render", actor: "agent", message: "c01 ok")
try! store.addEvent(channelId: b, videoId: l8, kind: "blocker", actor: "agent", message: "thiếu nhạc")
let last = try! store.lastEvents()
check(last[l8]?.kind == "blocker" && last[l8]?.message == "thiếu nhạc", "last event \(String(describing: last[l8]))")
let vs = [Video(id: 1, stage: .script, updatedAt: "2026-11-01 10:00:00"),
          Video(id: 2, stage: .render, updatedAt: "2026-11-17 10:00:00"),
          Video(id: 3, stage: .published, updatedAt: "2026-11-01 10:00:00"),
          Video(id: 4, stage: .assets, updatedAt: "2026-11-01 10:00:00")]
let ev: [Int64: Event] = [4: Event(id: 9, at: "2026-11-16 09:00", actor: "a", kind: "blocker", message: "x")]
check(stalled(vs, lastEvent: ev, cutoff: "2026-11-11 00:00").map(\.id) == [1], "stalled = doing + no activity since cutoff")
check(blocked(vs, lastEvent: ev).map(\.id) == [4], "blocked = latest event is a blocker")
let moves = stageMoves([Event(id: 1, at: "", actor: "", kind: "stage", message: "render → ready"),
                        Event(id: 2, at: "", actor: "", kind: "stage", message: "ready → published"),
                        Event(id: 3, at: "", actor: "", kind: "note", message: "a → b")])
check(moves == [.ready: 1, .published: 1], "stage moves \(moves)")
check(stageMatrix(vs)[0]?[.script] == 1 && stageMatrix(vs)[0]?[.published] == 1, "channel × stage matrix")

// v3 manifest: build/<CODE>/hub.json written by the channel's adapter
let mj = """
  {"version": 1, "code": "L1-en", "generated_at": "2026-11-18 14:00", "duration_s": 60.0, "extra": true,
   "steps": ["script", "tts", "render", "review"],
   "parts": [{"id": "c00p0", "title": "Intro", "start": 0, "seconds": 20,
              "steps": {"script": "ok", "tts": "ok", "render": "ok", "review": "todo"},
              "slots": [{"start": 0, "end": 4, "speaker": "pen", "text": "a b c d e f g h i j", "words": 10}]},
             {"id": "c01p0", "title": "One", "start": 20, "seconds": 40,
              "steps": {"script": "ok", "tts": "fail", "render": "skip"}, "issues": ["clipped audio"],
              "contact_sheet": "build/L1-en/c01p0/output/preview-contact-sheet.png", "slots": []}]}
  """
let m = try! Manifest.decode(Data(mj.utf8))
check(m.parts.count == 2 && m.parts[1].issues == ["clipped audio"] && m.parts[0].issues.isEmpty, "manifest decoded")
check(m.parts[0].state(m.steps) == .todo && m.parts[1].state(m.steps) == .fail, "part state = worst step")
check(m.parts[0].slots[0].wpm == 150, "wpm \(m.parts[0].slots[0].wpm)")
check(m.okRatio == 4.0 / 7.0, "ok ratio over non-skip steps \(m.okRatio)")
check(m.part(at: 25)?.id == "c01p0" && m.part(at: 5)?.id == "c00p0", "part at time")


// channel folder + facts upsert
var ch = try! store.channels().first { $0.id == b }!
ch.repoPath = "channels/tiny-leg-theory"; try! store.updateChannel(ch)
check(try! store.channels().first { $0.id == b }!.repoPath == "channels/tiny-leg-theory", "repo_path persisted")
try! store.setFact(videoId: l8, key: "agent_session", value: "s1")
try! store.setFact(videoId: l8, key: "agent_session", value: "s2")
check(try! store.facts(videoId: l8).first { $0.key == "agent_session" }?.value == "s2", "setFact upserts")

// MARK: v4 studio — studio.json, template expansion, agent stream parsing
let cfgJSON = """
{"version":1,
 "actions":[{"id":"render","stage":"render","label":"Render","run":["python3","long/make_long.py","{code}"],"kind":"render","refresh_manifest":true},
            {"id":"up","stage":"ready","label":"Upload","run":["node","tools/upload.mjs","{code}","--private"],"confirm":true,"only":"short"}],
 "prompts":[{"stage":"script","label":"Draft","text":"Viết kịch bản {code}: {title}"}],
 "editors":[{"id":"remotion","label":"Remotion","run":["npx","remotion","studio","--port","{port}"]}]}
"""
let cfg = try! StudioConfig.decode(Data(cfgJSON.utf8))
check(cfg.actions.count == 2 && cfg.actions[0].refreshManifest == true && cfg.actions[1].confirm == true, "studio config")
check(cfg.actions(stage: .render, kind: .long).map(\.id) == ["render"], "actions by stage")
check(cfg.actions(stage: .ready, kind: .long).isEmpty && cfg.actions(stage: .ready, kind: .short).count == 1, "only filter")
check(cfg.prompts(stage: .script).first?.label == "Draft" && cfg.editors.first?.id == "remotion", "prompts + editors")
let vars = ["code": "L1-en", "title": "It's \"fine\""]
check(expand("Viết {code}: {title} {missing}", vars) == "Viết L1-en: It's \"fine\" {missing}", "expand")
check(shellLine(["python3", "a b.py", "{code}", "it's"].map { expand($0, vars) }) == "python3 'a b.py' L1-en 'it'\\''s'", "shell quoting \(shellLine(["a b", "it's"]))")
check(firstURL(in: "  ➜  Local:   http://localhost:3000/ \n") == "http://localhost:3000/", "url from server log")
check(firstURL(in: "Server ready at http://127.0.0.1:5173") == "http://127.0.0.1:5173", "url 127")

// claude -p --output-format stream-json
check(parseAgentLine(#"{"type":"system","subtype":"init","session_id":"abc","tools":[]}"#) == [.session("abc")], "claude init")
check(parseAgentLine(#"{"type":"assistant","message":{"content":[{"type":"text","text":"Xin chào"},{"type":"tool_use","name":"Bash","input":{"command":"ls -la"}}]}}"#)
      == [.text("Xin chào"), .tool("Bash", "ls -la")], "claude assistant")
check(parseAgentLine(#"{"type":"assistant","message":{"content":[{"type":"tool_use","name":"Edit","input":{"file_path":"/a/b.md"}}]}}"#) == [.tool("Edit", "/a/b.md")], "tool summary path")
check(parseAgentLine(#"{"type":"result","subtype":"success","is_error":false,"result":"xong","total_cost_usd":0.0123,"session_id":"abc"}"#)
      == [.session("abc"), .done(cost: 0.0123, error: nil)], "claude result")
check(parseAgentLine(#"{"type":"result","subtype":"error_max_turns","is_error":true,"session_id":"abc"}"#)
      == [.session("abc"), .done(cost: nil, error: "error_max_turns")], "claude error")
// codex exec --json
check(parseAgentLine(#"{"type":"thread.started","thread_id":"t1"}"#) == [.session("t1")], "codex thread")
check(parseAgentLine(#"{"type":"item.completed","item":{"id":"i","type":"agent_message","text":"ok"}}"#) == [.text("ok")], "codex message")
check(parseAgentLine(#"{"type":"item.started","item":{"id":"i","type":"command_execution","command":"bash -lc ls"}}"#) == [.tool("shell", "bash -lc ls")], "codex command")
check(parseAgentLine("not json").isEmpty && parseAgentLine(#"{"type":"user"}"#).isEmpty, "ignore noise")
// agy --output-format stream-json ("event" key)
check(parseAgentLine(#"{"event":"init","conversation_id":"c1","init":{"cwd":"/x"}}"#) == [.session("c1")], "agy init")
check(parseAgentLine(#"{"event":"step_update","step_update":{"step_index":1,"state":"ACTIVE","step_type":"agent_response","text_delta":"ok"}}"#).isEmpty, "agy delta ignored")
check(parseAgentLine(#"{"event":"step_update","step_update":{"step_index":2,"state":"DONE","step_type":"run_command","command":"ls"}}"#) == [.tool("run_command", "ls")], "agy tool step")
check(parseAgentLine(#"{"event":"result","result":{"conversation_id":"c1","status":"SUCCESS","response":"ok\n"}}"#)
      == [.session("c1"), .text("ok"), .done(cost: nil, error: nil)], "agy result")
check(parseAgentLine(#"{"event":"result","result":{"conversation_id":"c1","status":"FAILED","response":""}}"#)
      == [.session("c1"), .done(cost: nil, error: "FAILED")], "agy failed")
// argv for one agent turn
let ca = agentArgv(.claude, message: "hi", session: nil, context: "ctx", mode: "acceptEdits")
check(ca.prefix(4) == ["claude", "-p", "hi", "--output-format"] && !ca.contains("--resume") && ca.contains("ctx"), "claude argv \(ca)")
check(agentArgv(.claude, message: "hi", session: "s", context: "", mode: "acceptEdits").suffix(2) == ["--resume", "s"], "claude resume")
check(agentArgv(.codex, message: "hi", session: "t1", context: "ctx", mode: "").starts(with: ["codex", "exec", "resume", "t1"]), "codex resume")

// MARK: v4 studio — project.json (one per video: ideas, scenes → shots, titles, thumbnails)
let pj = try! Project.decode(Data(#"{"code":"P1","scenes":[{"id":"s1","vo":"one two three four"}],"futureField":1}"#.utf8))
check(pj.version == 1 && pj.scenes.count == 1 && pj.ideas.isEmpty && pj.scenes[0].shots.isEmpty, "project tolerant decode")
check(estSeconds("one two three four", wpm: 120) == 2, "est seconds")
check(pj.scenes[0].duration(wpm: 120) == 2, "scene duration from vo")
var pj2 = pj; pj2.scenes[0].seconds = 5
check(pj2.scenes[0].duration(wpm: 120) == 5 && pj2.totalSeconds == 5, "explicit seconds win")
let round = try! Project.decode(pj2.encoded())
check(round == pj2, "encode/decode round trip")
let md = """
# Tiêu đề lớn
Lời mở đầu.

## Hook
Câu một.
Câu hai.

## Thân bài
Nội dung.
"""
let mdp = Project.importMarkdown(md, code: "X1")
check(mdp.scenes.map(\.title) == ["Mở đầu", "Hook", "Thân bài"], "md scenes \(mdp.scenes.map(\.title))")
check(mdp.scenes[1].vo == "Câu một.\nCâu hai." && mdp.scenes.map(\.id) == ["s01", "s02", "s03"], "md scene text + ids")
let tl = #"{"id":"L1-en","title":"Why","chapters":[{"title":"Hook","lines":[{"speaker":"pen","vo":"Hi there.","text":"WAIT","actor":"typing","prop":"laptop"},{"speaker":"buff","vo":"No."}]}]}"#
let tlp = Project.importScriptJSON(Data(tl.utf8), code: "L1-en")!
check(tlp.scenes.count == 1 && tlp.scenes[0].title == "Hook" && tlp.scenes[0].vo == "PEN: Hi there.\nBUFF: No.", "json chapters → scenes")
check(tlp.scenes[0].shots.count == 2 && tlp.scenes[0].shots[0].prompt == "typing · laptop · \"WAIT\"" && tlp.scenes[0].shots[0].id == "s01-1", "lines → shots \(tlp.scenes[0].shots)")
check(tlp.titles.first?.text == "Why", "title imported")
check(Project.importScriptJSON(Data("{}".utf8), code: "x") == nil, "unknown json")
let shortsMd = """
# Shorts from IX004
## 1. sx-ix004-huet · `out/a.mp4`
Hook text.
#oilrig #northsea
## 2. sx-ix004-cabin · `out/b.mp4`
Cabin text.
"""
check(markdownSection(shortsMd, code: "sx-ix004-huet") == "## 1. sx-ix004-huet · `out/a.mp4`\nHook text.\n#oilrig #northsea", "section by code \(String(describing: markdownSection(shortsMd, code: "sx-ix004-huet")))")
check(markdownSection(shortsMd, code: "IX999") == nil, "no section")
check(Project.importMarkdown("## A\n#tag #tag2\ntext", code: "x").scenes.count == 1, "hashtags are not headings")
// pipeline steps + image queue + frame times
var pp = Project(code: "Z")
check(pp.done(.brainstorm, videoFile: false, published: false) == false, "brainstorm todo")
pp.logline = "x"
check(pp.done(.brainstorm, videoFile: false, published: false), "logline = brainstorm done")
pp.scenes = [StoryScene(id: "s01", title: "A", vo: "one two", visual: "red door"), StoryScene(id: "s02", title: "B", vo: "three")]
check(pp.done(.script, videoFile: false, published: false) && !pp.done(.storyboard, videoFile: false, published: false), "script done, storyboard not")
let iq = pp.imageQueue(style: "flat ink")
check(iq.count == 2 && iq[0] == ["s01.jpg", "red door. Style: flat ink"] && iq[1][1] == "three. Style: flat ink", "scene queue \(iq)")
pp.scenes[0].image = "storyboard/s01.jpg"
check(pp.imageQueue(style: "").map { $0[0] } == ["s02.jpg"] && pp.imageQueue(style: "")[0][1] == "three", "skip scenes with image, no style suffix")
pp.scenes[1].shots = [Shot(id: "s02-1", prompt: "close on hand")]
check(pp.shotQueue(scene: "s02", style: "") == [["s02-1.jpg", "close on hand"]], "shot queue")
pp.scenes[0].seconds = 10
check(pp.sceneStarts() == [0, 10], "scene starts")
check(pp.nextStep(videoFile: false, published: false) == .storyboard, "next step = first not done")
check(nextId(["s01", "s03"], prefix: "s") == "s04" && nextId([], prefix: "i") == "i01", "next id")

// cascade delete
try! store.deleteChannel(id: a)
check(try! store.videos().allSatisfy { $0.channelId != a }, "cascade delete")

print(failures == 0 ? "✓ all tests passed" : "✗ \(failures) failure(s)")
exit(failures == 0 ? 0 : 1)
