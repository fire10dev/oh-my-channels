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

// cascade delete
try! store.deleteChannel(id: a)
check(try! store.videos().allSatisfy { $0.channelId != a }, "cascade delete")

print(failures == 0 ? "✓ all tests passed" : "✗ \(failures) failure(s)")
exit(failures == 0 ? 0 : 1)
