import Foundation
import SQLite3

private let SQLITE_TRANSIENT = unsafeBitCast(-1, to: sqlite3_destructor_type.self)

struct DBError: Error, CustomStringConvertible {
  let description: String
}

/// Thin wrapper over the SQLite C API. Every value is read back as text.
final class DB {
  private var h: OpaquePointer?

  init(path: String) throws {
    guard sqlite3_open(path, &h) == SQLITE_OK else { throw DBError(description: "open \(path) failed") }
    // WAL + busy timeout: the CLI (Tools/ythub.py) may write while the app is open.
    try exec("PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 3000;")
  }
  deinit { sqlite3_close(h) }

  private var lastError: DBError { DBError(description: String(cString: sqlite3_errmsg(h))) }

  func exec(_ sql: String) throws {
    guard sqlite3_exec(h, sql, nil, nil, nil) == SQLITE_OK else { throw lastError }
  }

  private func prepare(_ sql: String, _ args: [Any?]) throws -> OpaquePointer? {
    var st: OpaquePointer?
    guard sqlite3_prepare_v2(h, sql, -1, &st, nil) == SQLITE_OK else { throw lastError }
    for (i, a) in args.enumerated() {
      let idx = Int32(i + 1)
      switch a {
      case let n as Int64: sqlite3_bind_int64(st, idx, n)
      case let s as String: sqlite3_bind_text(st, idx, s, -1, SQLITE_TRANSIENT)
      default: sqlite3_bind_null(st, idx)
      }
    }
    return st
  }

  @discardableResult
  func run(_ sql: String, _ args: [Any?] = []) throws -> Int64 {
    let st = try prepare(sql, args)
    defer { sqlite3_finalize(st) }
    guard sqlite3_step(st) == SQLITE_DONE else { throw lastError }
    return sqlite3_last_insert_rowid(h)
  }

  func rows(_ sql: String, _ args: [Any?] = []) throws -> [[String: String]] {
    let st = try prepare(sql, args)
    defer { sqlite3_finalize(st) }
    var out: [[String: String]] = []
    while true {
      let rc = sqlite3_step(st)
      if rc == SQLITE_DONE { break }
      guard rc == SQLITE_ROW else { throw lastError }
      var row: [String: String] = [:]
      for i in 0..<sqlite3_column_count(st) {
        let name = String(cString: sqlite3_column_name(st, i))
        row[name] = sqlite3_column_text(st, i).map { String(cString: $0) } ?? ""
      }
      out.append(row)
    }
    return out
  }
}

final class Store {
  let db: DB

  /// `migrate` = Resources/migrate.sql: column additions, one statement at a time; a
  /// "duplicate column" error means it ran before.
  init(path: String, schema: String, migrate: String = "") throws {
    db = try DB(path: path)
    try db.exec(schema)
    for stmt in migrate.split(separator: ";") {
      let sql = stmt.split(separator: "\n").filter { !$0.trimmingCharacters(in: .whitespaces).hasPrefix("--") }
        .joined(separator: "\n").trimmingCharacters(in: .whitespacesAndNewlines)
      guard !sql.isEmpty else { continue }
      do { try db.exec(sql) } catch let e as DBError where e.description.contains("duplicate column") {}
    }
  }

  /// Repo root, written by the CLI; relative paths in the DB resolve against it.
  func root() throws -> String? {
    try db.rows("SELECT value FROM setting WHERE key='root'").first?["value"]
  }

  // MARK: v2 — events, tasks, facts

  func addEvent(channelId: Int64, videoId: Int64?, kind: String, actor: String, message: String) throws {
    try db.run("INSERT INTO event(channel_id, video_id, kind, actor, message) VALUES (?,?,?,?,?)",
               [channelId, videoId, kind, actor, message])
  }

  func events(videoId: Int64, limit: Int64 = 100) throws -> [Event] {
    try db.rows("SELECT * FROM event WHERE video_id=? ORDER BY at DESC, id DESC LIMIT ?", [videoId, limit]).map {
      Event(id: Int64($0["id"]!)!, at: $0["at"]!, actor: $0["actor"]!, kind: $0["kind"]!, message: $0["message"]!)
    }
  }

  /// Latest event of every video (highest id), keyed by video id.
  func lastEvents() throws -> [Int64: Event] {
    var out: [Int64: Event] = [:]
    for r in try db.rows("""
      SELECT e.* FROM event e JOIN (SELECT MAX(id) m FROM event WHERE video_id IS NOT NULL GROUP BY video_id) x
      ON e.id = x.m
      """) {
      out[Int64(r["video_id"]!)!] = Event(id: Int64(r["id"]!)!, at: r["at"]!, actor: r["actor"]!, kind: r["kind"]!,
                                          message: r["message"]!)
    }
    return out
  }

  func events(since: String) throws -> [Event] {
    try db.rows("SELECT * FROM event WHERE at >= ? ORDER BY at DESC, id DESC", [since]).map {
      Event(id: Int64($0["id"]!)!, at: $0["at"]!, actor: $0["actor"]!, kind: $0["kind"]!, message: $0["message"]!)
    }
  }

  @discardableResult
  func addTask(channelId: Int64, videoId: Int64?, owner: String, text: String) throws -> Int64 {
    try db.run("INSERT INTO task(channel_id, video_id, owner, text) VALUES (?,?,?,?)", [channelId, videoId, owner, text])
  }

  func openTasks() throws -> [HubTask] {
    try db.rows("SELECT * FROM task WHERE status='open' ORDER BY id").map {
      HubTask(id: Int64($0["id"]!)!, channelId: Int64($0["channel_id"]!)!, videoId: Int64($0["video_id"] ?? ""),
              owner: $0["owner"]!, text: $0["text"]!, createdAt: $0["created_at"]!)
    }
  }

  func setTaskDone(id: Int64, actor: String) throws {
    try db.run("UPDATE task SET status='done', done_at=strftime('%Y-%m-%d %H:%M','now','localtime'), done_by=? WHERE id=?",
               [actor, id])
  }

  func assets(videoId: Int64) throws -> [LinkedAsset] {
    try db.rows("""
      SELECT a.id, a.path, a.kind, va.role, a.license, a.notes FROM video_asset va
      JOIN asset a ON a.id = va.asset_id WHERE va.video_id=? ORDER BY va.role, a.path
      """, [videoId]).map {
      LinkedAsset(id: Int64($0["id"]!)!, path: $0["path"]!, kind: $0["kind"]!, role: $0["role"]!,
                  license: $0["license"]!, attribution: $0["notes"]!)
    }
  }

  func setFact(videoId: Int64, key: String, value: String) throws {
    try db.run("""
      INSERT INTO fact(video_id, key, value) VALUES (?,?,?)
      ON CONFLICT(video_id, key) DO UPDATE SET value=excluded.value,
      updated_at=strftime('%Y-%m-%d %H:%M','now','localtime')
      """, [videoId, key, value])
  }

  func facts(videoId: Int64) throws -> [Fact] {
    try db.rows("SELECT key, value FROM fact WHERE video_id=? ORDER BY key", [videoId]).map {
      Fact(key: $0["key"]!, value: $0["value"]!)
    }
  }

  // MARK: channels

  func channels() throws -> [Channel] {
    try db.rows("SELECT * FROM channel ORDER BY sort, name COLLATE NOCASE").map {
      Channel(id: Int64($0["id"]!)!, name: $0["name"]!, handle: $0["handle"]!, url: $0["url"]!,
              lang: $0["lang"]!, notes: $0["notes"]!, repoPath: $0["repo_path"] ?? "",
              ytChannelId: $0["yt_channel_id"] ?? "")
    }
  }

  func insertChannel(_ c: Channel) throws -> Int64 {
    try db.run("INSERT INTO channel(name, handle, url, lang, notes, repo_path, yt_channel_id) VALUES (?,?,?,?,?,?,?)",
               [c.name, c.handle, c.url, c.lang, c.notes, c.repoPath, c.ytChannelId])
  }

  func updateChannel(_ c: Channel) throws {
    try db.run("UPDATE channel SET name=?, handle=?, url=?, lang=?, notes=?, repo_path=?, yt_channel_id=? WHERE id=?",
               [c.name, c.handle, c.url, c.lang, c.notes, c.repoPath, c.ytChannelId, c.id])
  }

  func deleteChannel(id: Int64) throws {
    try db.run("DELETE FROM channel WHERE id=?", [id])
  }

  // MARK: videos

  private static let textCols: [(String, WritableKeyPath<Video, String>)] = [
    ("title", \.title), ("description", \.description), ("tags", \.tags),
    ("pinned_comment", \.pinnedComment), ("yt_url", \.ytUrl), ("linked_url", \.linkedUrl),
    ("file_path", \.filePath), ("thumb_path", \.thumbPath), ("script_path", \.scriptPath),
    ("notes", \.notes), ("published_at", \.publishedAt), ("branch", \.branch),
  ]

  private func args(_ v: Video) -> [Any?] {
    let head: [Any?] = [v.channelId, v.code.isEmpty ? nil : v.code, v.kind.rawValue, v.stage.rawValue]
    return head + Self.textCols.map { (_, kp) -> Any? in v[keyPath: kp] }
  }

  func videos() throws -> [Video] {
    let list = try db.rows("SELECT * FROM video").map { r in
      var v = Video(id: Int64(r["id"]!)!, channelId: Int64(r["channel_id"]!)!, code: r["code"]!,
                    kind: Kind(rawValue: r["kind"]!) ?? .long, stage: Stage(rawValue: r["stage"]!) ?? .idea,
                    updatedAt: r["updated_at"]!)
      for (col, kp) in Self.textCols { v[keyPath: kp] = r[col] ?? "" }
      return v
    }
    return sortedVideos(list)
  }

  func insertVideo(_ v: Video) throws -> Int64 {
    let cols = ["channel_id", "code", "kind", "stage"] + Self.textCols.map(\.0)
    let marks = Array(repeating: "?", count: cols.count).joined(separator: ",")
    return try db.run("INSERT INTO video(\(cols.joined(separator: ","))) VALUES (\(marks))", args(v))
  }

  func updateVideo(_ v: Video) throws {
    let sets = (["channel_id", "code", "kind", "stage"] + Self.textCols.map(\.0)).map { "\($0)=?" }
    try db.run("UPDATE video SET \(sets.joined(separator: ",")), updated_at=datetime('now') WHERE id=?",
               args(v) + [v.id])
  }

  func deleteVideo(id: Int64) throws {
    try db.run("DELETE FROM video WHERE id=?", [id])
  }
}
