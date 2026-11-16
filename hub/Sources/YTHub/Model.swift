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

struct Fact: Hashable {
  var key: String
  var value: String
}
