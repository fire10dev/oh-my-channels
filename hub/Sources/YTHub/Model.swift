import Foundation

enum Kind: String, CaseIterable, Identifiable {
  case long, short
  var id: String { rawValue }
  var label: String { self == .long ? "Long" : "Short" }
}

/// The three statuses the user tracks; each Stage falls into one.
enum StatusGroup: String, CaseIterable, Identifiable {
  case doing, ready, done
  var id: String { rawValue }
  var label: String {
    switch self {
    case .doing: "Đang làm"
    case .ready: "Xong, chưa đăng"
    case .done: "Đã đăng"
    }
  }
}

enum Stage: String, CaseIterable, Identifiable {
  case idea, script, assets, render, ready, published
  var id: String { rawValue }
  var label: String {
    switch self {
    case .idea: "Ý tưởng"
    case .script: "Kịch bản"
    case .assets: "Gen hình / asset"
    case .render: "Render"
    case .ready: "Xong, chưa đăng"
    case .published: "Đã đăng"
    }
  }
  /// Fits one step of the detail's stage bar.
  var shortLabel: String {
    switch self {
    case .idea: "Ý tưởng"
    case .script: "Kịch bản"
    case .assets: "Gen hình"
    case .render: "Render"
    case .ready: "Chờ đăng"
    case .published: "Đã đăng"
    }
  }
  var group: StatusGroup {
    switch self {
    case .published: .done
    case .ready: .ready
    default: .doing
    }
  }
}

struct Channel: Identifiable, Hashable {
  var id: Int64 = 0
  var name = ""
  var handle = ""
  var url = ""
  var lang = ""
  var notes = ""
  var repoPath = ""  // channel folder, relative to the repo root (setting root)
  var ytChannelId = ""
}

struct Video: Identifiable, Hashable {
  var id: Int64 = 0
  var channelId: Int64 = 0
  var code = ""
  var kind: Kind = .long
  var stage: Stage = .idea
  var title = ""
  var description = ""
  var tags = ""
  var pinnedComment = ""
  var ytUrl = ""
  var linkedUrl = ""
  var filePath = ""
  var thumbPath = ""
  var scriptPath = ""
  var notes = ""
  var publishedAt = ""
  var branch = ""
  var updatedAt = ""

  var group: StatusGroup { stage.group }
}

/// channel id → status → count
func statusCounts(_ videos: [Video]) -> [Int64: [StatusGroup: Int]] {
  var out: [Int64: [StatusGroup: Int]] = [:]
  for v in videos { out[v.channelId, default: [:]][v.group, default: 0] += 1 }
  return out
}

/// Long before short, then code in natural order (s2 < s10); items without a code last.
func sortedVideos(_ videos: [Video]) -> [Video] {
  videos.sorted { x, y in
    if x.channelId != y.channelId { return x.channelId < y.channelId }
    if x.kind != y.kind { return x.kind == .long }
    if x.code.isEmpty != y.code.isEmpty { return !x.code.isEmpty }
    let c = x.code.localizedStandardCompare(y.code)
    return c == .orderedSame ? x.id < y.id : c == .orderedAscending
  }
}

// MARK: - v2 state (was HANDOFF.md)

struct Event: Identifiable, Hashable {
  var id: Int64
  var at: String
  var actor: String
  var kind: String
  var message: String
}

/// Named HubTask: `Task` is Swift concurrency's.
struct HubTask: Identifiable, Hashable {
  var id: Int64
  var channelId: Int64
  var videoId: Int64?
  var owner: String
  var text: String
  var createdAt: String
}

struct LinkedAsset: Identifiable, Hashable {
  var id: Int64
  var path: String
  var kind: String
  var role: String
  var license: String
  var attribution: String  // asset.notes: the credit line the licence asks for
}

struct Fact: Hashable {
  var key: String
  var value: String
}

// MARK: - v3 dashboard: what needs a human look, across every channel

/// Being worked on, yet nothing happened since `cutoff` (event or edit; "YYYY-MM-DD HH:MM").
func stalled(_ videos: [Video], lastEvent: [Int64: Event], cutoff: String) -> [Video] {
  videos.filter { v in
    let seen = max(String(v.updatedAt.prefix(16)), lastEvent[v.id]?.at ?? "")
    return v.group == .doing && seen < cutoff
  }
}

/// Not published and the latest thing logged on it is a blocker.
func blocked(_ videos: [Video], lastEvent: [Int64: Event]) -> [Video] {
  videos.filter { $0.group != .done && lastEvent[$0.id]?.kind == "blocker" }
}

/// Stage events ("render → ready") counted by the stage they arrived at.
func stageMoves(_ events: [Event]) -> [Stage: Int] {
  var out: [Stage: Int] = [:]
  for e in events where e.kind == "stage" {
    if let to = e.message.components(separatedBy: "→ ").last.flatMap({ Stage(rawValue: $0.trimmingCharacters(in: .whitespaces)) }) {
      out[to, default: 0] += 1
    }
  }
  return out
}

/// channel id → stage → count
func stageMatrix(_ videos: [Video]) -> [Int64: [Stage: Int]] {
  var out: [Int64: [Stage: Int]] = [:]
  for v in videos { out[v.channelId, default: [:]][v.stage, default: 0] += 1 }
  return out
}

// MARK: - v3 manifest: build/<CODE>/hub.json, written by each channel's adapter

/// Order matters: a part shows its worst step.
enum StepState: Int, Comparable {
  case ok, todo, fail
  init(_ raw: String?) { self = raw == "ok" ? .ok : raw == "fail" ? .fail : .todo }
  static func < (a: StepState, b: StepState) -> Bool { a.rawValue < b.rawValue }
}

struct Slot: Decodable, Hashable {
  var start: Double
  var end: Double
  var speaker: String
  var text: String
  var words: Int
  var wpm: Double { end > start ? Double(words) / (end - start) * 60 : 0 }
}

struct ManifestPart: Decodable, Identifiable, Hashable {
  var id: String
  var title: String
  var start: Double
  var seconds: Double
  var steps: [String: String]
  var slots: [Slot]
  var issues: [String] = []
  var contactSheet: String?

  enum CodingKeys: String, CodingKey { case id, title, start, seconds, steps, slots, issues, contactSheet }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = try c.decode(String.self, forKey: .id)
    title = try c.decode(String.self, forKey: .title)
    start = try c.decode(Double.self, forKey: .start)
    seconds = try c.decode(Double.self, forKey: .seconds)
    steps = try c.decodeIfPresent([String: String].self, forKey: .steps) ?? [:]
    slots = try c.decodeIfPresent([Slot].self, forKey: .slots) ?? []
    issues = try c.decodeIfPresent([String].self, forKey: .issues) ?? []
    contactSheet = try c.decodeIfPresent(String.self, forKey: .contactSheet)
  }

  /// "skip" steps don't count; a missing step is still to do.
  func state(_ names: [String]) -> StepState {
    names.filter { steps[$0] != "skip" }.map { StepState(steps[$0]) }.max() ?? .ok
  }
}

struct Manifest: Decodable, Hashable {
  var version: Int
  var code: String
  var generatedAt: String
  var durationS: Double
  var steps: [String]
  var parts: [ManifestPart]

  static func decode(_ data: Data) throws -> Manifest {
    let d = JSONDecoder()
    d.keyDecodingStrategy = .convertFromSnakeCase
    return try d.decode(Manifest.self, from: data)
  }

  /// Share of non-skipped steps that are ok, over every part.
  var okRatio: Double {
    let all = parts.flatMap { p in steps.filter { p.steps[$0] != "skip" }.map { StepState(p.steps[$0]) } }
    return all.isEmpty ? 0 : Double(all.filter { $0 == .ok }.count) / Double(all.count)
  }

  func part(at t: Double) -> ManifestPart? { parts.last { $0.start <= t } }
}
