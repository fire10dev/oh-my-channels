import Foundation

// MARK: - A video project: channels/<kênh>/videos/<CODE>/project.json
// Written by the Studio and by agents (they get the schema in their context). Unknown keys are ignored,
// missing ones take defaults, so a hand- or agent-written file never fails to open.

private extension KeyedDecodingContainer {
  func v<T: Decodable>(_ k: Key, _ d: T) -> T { ((try? decodeIfPresent(T.self, forKey: k)) ?? nil) ?? d }
}

struct Idea: Codable, Identifiable, Hashable {
  var id: String
  var text = ""
  var by = "user"      // user | agent name
  var pinned = false   // pinned ideas feed the script
  init(id: String, text: String, by: String = "user", pinned: Bool = false) {
    self.id = id; self.text = text; self.by = by; self.pinned = pinned
  }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = c.v(.id, UUID().uuidString); text = c.v(.text, ""); by = c.v(.by, "user"); pinned = c.v(.pinned, false)
  }
}

struct Shot: Codable, Identifiable, Hashable {
  var id: String
  var prompt = ""   // what the frame shows (image prompt)
  var camera = ""   // wide | medium | close | insert | pan…
  var image = ""    // relative to the project folder
  var seconds: Double = 0
  var notes = ""
  init(id: String, prompt: String = "", camera: String = "", image: String = "", seconds: Double = 0) {
    self.id = id; self.prompt = prompt; self.camera = camera; self.image = image; self.seconds = seconds
  }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = c.v(.id, UUID().uuidString); prompt = c.v(.prompt, ""); camera = c.v(.camera, ""); image = c.v(.image, "")
    seconds = c.v(.seconds, 0); notes = c.v(.notes, "")
  }
}

struct StoryScene: Codable, Identifiable, Hashable {
  var id: String
  var title = ""
  var vo = ""        // voice-over / dialogue
  var visual = ""    // storyboard description of the scene
  var image = ""     // storyboard key frame, relative to the project folder
  var seconds: Double?  // nil = estimated from vo
  var status = "todo"   // todo | draft | ok
  var shots: [Shot] = []
  init(id: String, title: String = "", vo: String = "", visual: String = "", shots: [Shot] = []) {
    self.id = id; self.title = title; self.vo = vo; self.visual = visual; self.shots = shots
  }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = c.v(.id, UUID().uuidString); title = c.v(.title, ""); vo = c.v(.vo, ""); visual = c.v(.visual, "")
    image = c.v(.image, ""); seconds = c.v(.seconds, nil as Double?); status = c.v(.status, "todo"); shots = c.v(.shots, [])
  }
  func duration(wpm: Double) -> Double { seconds ?? estSeconds(vo, wpm: wpm) }
  /// Key frame: the storyboard image, else the first shot that has one.
  var keyImage: String { image.isEmpty ? (shots.first { !$0.image.isEmpty }?.image ?? "") : image }
}

struct TitleOption: Codable, Identifiable, Hashable {
  var id: String
  var text = ""
  var chosen = false
  init(id: String, text: String, chosen: Bool = false) { self.id = id; self.text = text; self.chosen = chosen }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = c.v(.id, UUID().uuidString); text = c.v(.text, ""); chosen = c.v(.chosen, false)
  }
}

struct ThumbOption: Codable, Identifiable, Hashable {
  var id: String
  var path = ""    // relative to the project folder (or absolute)
  var text = ""    // big words on the thumbnail / the concept
  var chosen = false
  init(id: String, path: String = "", text: String = "", chosen: Bool = false) {
    self.id = id; self.path = path; self.text = text; self.chosen = chosen
  }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    id = c.v(.id, UUID().uuidString); path = c.v(.path, ""); text = c.v(.text, ""); chosen = c.v(.chosen, false)
  }
}

struct Project: Codable, Hashable {
  var version = 1
  var code = ""
  var logline = ""   // the one-sentence promise of the video
  var wpm: Double = 150
  var ideas: [Idea] = []
  var scenes: [StoryScene] = []
  var titles: [TitleOption] = []
  var thumbnails: [ThumbOption] = []

  init(code: String) { self.code = code }
  init(from d: Decoder) throws {
    let c = try d.container(keyedBy: CodingKeys.self)
    version = c.v(.version, 1); code = c.v(.code, ""); logline = c.v(.logline, ""); wpm = c.v(.wpm, 150)
    ideas = c.v(.ideas, []); scenes = c.v(.scenes, []); titles = c.v(.titles, []); thumbnails = c.v(.thumbnails, [])
  }

  static func decode(_ data: Data) throws -> Project { try JSONDecoder().decode(Project.self, from: data) }
  func encoded() throws -> Data {
    let e = JSONEncoder()
    e.outputFormatting = [.prettyPrinted, .withoutEscapingSlashes, .sortedKeys]
    return try e.encode(self)
  }

  var totalSeconds: Double { scenes.reduce(0) { $0 + $1.duration(wpm: wpm) } }
  var shotCount: Int { scenes.reduce(0) { $0 + $1.shots.count } }

  /// One scene per `#`/`##`/`###` heading; text before the first sub-heading is "Mở đầu".
  /// The first `#` line is the document title and does not start a scene.
  static func importMarkdown(_ md: String, code: String) -> Project {
    var p = Project(code: code)
    var title = "Mở đầu", body: [String] = [], sawTitle = false
    func flush() {
      let text = body.joined(separator: "\n").trimmingCharacters(in: .whitespacesAndNewlines)
      if !text.isEmpty || title != "Mở đầu" {
        p.scenes.append(StoryScene(id: String(format: "s%02d", p.scenes.count + 1), title: title, vo: text))
      }
      body = []
    }
    for line in md.components(separatedBy: "\n") {
      if line.hasPrefix("# "), !sawTitle, p.scenes.isEmpty, body.allSatisfy({ $0.trimmingCharacters(in: .whitespaces).isEmpty }) {
        sawTitle = true
        p.titles = [TitleOption(id: "t01", text: String(line.dropFirst(2)).trimmingCharacters(in: .whitespaces))]
        continue
      }
      if headingLevel(line) > 0 {
        let h = line.drop { $0 == "#" }.trimmingCharacters(in: .whitespaces)
        if !h.isEmpty { flush(); title = h; continue }
      }
      body.append(line)
    }
    flush()
    return p
  }

  /// `{title, chapters:[{title, lines:[{speaker, vo, text?, actor?, prop?}]}]}` (tiny-leg long format and alike):
  /// chapter → scene, line → shot. nil when the JSON has no chapters.
  static func importScriptJSON(_ data: Data, code: String) -> Project? {
    guard let o = (try? JSONSerialization.jsonObject(with: data)) as? [String: Any],
          let chapters = o["chapters"] as? [[String: Any]], !chapters.isEmpty else { return nil }
    var p = Project(code: code)
    if let t = o["title"] as? String, !t.isEmpty { p.titles = [TitleOption(id: "t01", text: t)] }
    for (i, ch) in chapters.enumerated() {
      let sid = String(format: "s%02d", i + 1)
      let lines = ch["lines"] as? [[String: Any]] ?? []
      let vo = lines.compactMap { l -> String? in
        guard let v = l["vo"] as? String else { return nil }
        let sp = (l["speaker"] as? String ?? "").uppercased()
        return sp.isEmpty ? v : "\(sp): \(v)"
      }.joined(separator: "\n")
      let shots = lines.enumerated().map { j, l -> Shot in
        var parts = [l["actor"], l["prop"]].compactMap { $0 as? String }.filter { !$0.isEmpty }
        if let t = l["text"] as? String, !t.isEmpty { parts.append("\"\(t)\"") }
        return Shot(id: "\(sid)-\(j + 1)", prompt: parts.isEmpty ? (l["vo"] as? String ?? "") : parts.joined(separator: " · "))
      }
      p.scenes.append(StoryScene(id: sid, title: ch["title"] as? String ?? "Cảnh \(i + 1)", vo: vo, shots: shots))
    }
    return p
  }
}

// MARK: - Pipeline helpers (the Studio's step bar and the image generator)

enum Step: String, CaseIterable, Identifiable {
  case brainstorm, script, storyboard, shots, title, edit, publish
  var id: String { rawValue }
}

extension Project {
  /// Whether a pipeline step has its result. The Studio ticks it and suggests the first one that hasn't.
  func done(_ s: Step, videoFile: Bool, published: Bool) -> Bool {
    switch s {
    case .brainstorm: return !logline.isEmpty || ideas.contains { $0.pinned } || !scenes.isEmpty
    case .script: return !scenes.isEmpty && scenes.allSatisfy { !$0.vo.isEmpty }
    case .storyboard: return !scenes.isEmpty && scenes.allSatisfy { !$0.keyImage.isEmpty }
    case .shots: return !scenes.isEmpty && scenes.allSatisfy { !$0.shots.isEmpty }
    case .title: return titles.contains { $0.chosen } && thumbnails.contains { $0.chosen }
    case .edit: return videoFile
    case .publish: return published
    }
  }

  func nextStep(videoFile: Bool, published: Bool) -> Step {
    Step.allCases.first { !done($0, videoFile: videoFile, published: published) } ?? .publish
  }

  private static func prompt(_ text: String, _ style: String) -> String {
    style.isEmpty ? text : "\(text). Style: \(style)"
  }

  /// [[file, prompt]] for scenes without a storyboard image (shared/imagegen/agy_gen.py format).
  func imageQueue(style: String) -> [[String]] {
    scenes.filter { $0.image.isEmpty }.map { s in
      let base = s.visual.isEmpty ? s.vo.components(separatedBy: "\n").prefix(3).joined(separator: " ") : s.visual
      return ["\(s.id).jpg", Self.prompt(base, style)]
    }
  }

  func shotQueue(scene: String, style: String) -> [[String]] {
    (scenes.first { $0.id == scene }?.shots ?? []).filter { $0.image.isEmpty && !$0.prompt.isEmpty }
      .map { ["\($0.id).jpg", Self.prompt($0.camera.isEmpty ? $0.prompt : "\($0.camera) shot: \($0.prompt)", style)] }
  }

  /// Start second of every scene on the video's timeline.
  func sceneStarts() -> [Double] {
    var t = 0.0
    return scenes.map { s in defer { t += s.duration(wpm: wpm) }; return t }
  }
}

/// 1 for "# x", 2 for "## x"…; 0 when not a heading ("#tag" has no space).
func headingLevel(_ line: String) -> Int {
  let n = line.prefix { $0 == "#" }.count
  return n > 0 && n <= 6 && line.dropFirst(n).first == " " ? n : 0
}

/// The part of a markdown file about one video: from the heading that names the code to the next
/// heading of the same or higher level. nil when no heading names it.
func markdownSection(_ md: String, code: String) -> String? {
  let lines = md.components(separatedBy: "\n")
  guard !code.isEmpty, let start = lines.firstIndex(where: { headingLevel($0) > 0 && $0.localizedCaseInsensitiveContains(code) })
  else { return nil }
  let level = headingLevel(lines[start])
  var end = lines.count
  for i in (start + 1)..<lines.count where (1...level).contains(headingLevel(lines[i])) { end = i; break }
  return lines[start..<end].joined(separator: "\n").trimmingCharacters(in: .whitespacesAndNewlines)
}

func estSeconds(_ text: String, wpm: Double) -> Double {
  let words = text.split { $0 == " " || $0 == "\n" }.count
  return wpm > 0 ? Double(words) / wpm * 60 : 0
}

/// "s03" after s01, s03 → "s04".
func nextId(_ ids: [String], prefix: String) -> String {
  let n = ids.compactMap { $0.hasPrefix(prefix) ? Int($0.dropFirst(prefix.count).prefix { $0.isNumber }) : nil }.max() ?? 0
  return String(format: "\(prefix)%02d", n + 1)
}

/// Schema handed to agents so they edit project.json the way the Studio reads it.
let projectSchemaHelp = """
project.json (Studio đọc lại mỗi 2 giây; giữ nguyên field không biết):
{"version":1,"code":"…","logline":"lời hứa 1 câu","wpm":150,
 "ideas":[{"id":"i01","text":"…","by":"claude","pinned":false}],
 "scenes":[{"id":"s01","title":"Hook","vo":"lời thoại","visual":"mô tả hình cả cảnh","image":"storyboard/s01.png","seconds":null,"status":"todo|draft|ok",
            "shots":[{"id":"s01-1","prompt":"mô tả khung hình","camera":"wide|medium|close|insert","image":"shots/s01-1.png","seconds":3}]}],
 "titles":[{"id":"t01","text":"…","chosen":false}],
 "thumbnails":[{"id":"th01","path":"thumbs/a.png","text":"chữ to trên thumbnail / concept","chosen":false}]}
Ảnh để trong thư mục dự án: storyboard/, shots/, thumbs/. Đường dẫn ảnh tương đối với thư mục dự án.
"""
