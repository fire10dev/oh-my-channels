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

  init(path: String, schema: String) throws {
    db = try DB(path: path)
    try db.exec(schema)
  }

  // MARK: channels

  func channels() throws -> [Channel] {
    try db.rows("SELECT * FROM channel ORDER BY sort, name COLLATE NOCASE").map {
      Channel(id: Int64($0["id"]!)!, name: $0["name"]!, handle: $0["handle"]!, url: $0["url"]!,
              lang: $0["lang"]!, notes: $0["notes"]!)
    }
  }

  func insertChannel(_ c: Channel) throws -> Int64 {
    try db.run("INSERT INTO channel(name, handle, url, lang, notes) VALUES (?,?,?,?,?)",
               [c.name, c.handle, c.url, c.lang, c.notes])
  }

  func updateChannel(_ c: Channel) throws {
    try db.run("UPDATE channel SET name=?, handle=?, url=?, lang=?, notes=? WHERE id=?",
               [c.name, c.handle, c.url, c.lang, c.notes, c.id])
  }

  func deleteChannel(id: Int64) throws {
    try db.run("DELETE FROM channel WHERE id=?", [id])
  }

  // MARK: videos

  private static let textCols: [(String, WritableKeyPath<Video, String>)] = [
    ("title", \.title), ("description", \.description), ("tags", \.tags),
    ("pinned_comment", \.pinnedComment), ("yt_url", \.ytUrl), ("linked_url", \.linkedUrl),
    ("file_path", \.filePath), ("thumb_path", \.thumbPath), ("script_path", \.scriptPath),
    ("notes", \.notes), ("published_at", \.publishedAt),
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
