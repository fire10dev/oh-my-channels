import AppKit
import SwiftUI

// MARK: - Theme pieces (BBSnap Retro Terminal look)

/// Kept BBSnap's sizes in the calls but read them 3 pt larger (user: too small to read).
let fontBoost: CGFloat = 3

extension Font {
  static func ui(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
    .term(size + fontBoost, weight: weight)
  }
}

extension StatusGroup {
  /// Ready-to-post is the work waiting on the user, so it gets the "primary action" coral.
  func color(_ p: Palette) -> Color {
    switch self {
    case .doing: p.sun
    case .ready: p.coral
    case .done: p.accent
    }
  }
}

/// Order the list shows the groups in: what needs posting first.
let groupOrder: [StatusGroup] = [.ready, .doing, .done]

struct HRail: View {
  let p: Palette
  var body: some View { Rectangle().fill(p.line).frame(height: 1) }
}

struct VRail: View {
  let p: Palette
  var body: some View { Rectangle().fill(p.line).frame(width: 1) }
}

struct SectionLabel: View {
  let text: String
  let p: Palette
  var body: some View {
    Text(text.uppercased()).font(.ui(10, weight: .bold)).tracking(1).foregroundStyle(p.muted)
  }
}

/// BBSnap's flat button: sunken face, 1px border, hard offset shadow.
struct RetroButton: View {
  var title = ""
  var symbol: String?
  var primary = false
  var compact = false
  let action: () -> Void
  @Environment(\.colorScheme) private var scheme
  @Environment(\.isEnabled) private var enabled

  var body: some View {
    let p = Palette.forScheme(scheme)
    Button(action: action) {
      HStack(spacing: 5) {
        if let symbol { Image(systemName: symbol).font(.system(size: compact ? 10 : 12, weight: .semibold)) }
        if !title.isEmpty { Text(title).font(.ui(compact ? 11 : 12, weight: .semibold)) }
      }
      .foregroundStyle(primary ? p.paperDeep : p.ink)
      .padding(.horizontal, compact ? 7 : 10)
      .frame(height: compact ? 26 : 32)
      .bg(primary ? p.coral : p.paperDeep)
      .overlay(Rectangle().stroke(p.line, lineWidth: 1))
      .background(Rectangle().fill(p.line).offset(x: 2, y: 2))
      .contentShape(Rectangle())
    }
    .buttonStyle(.plain)
    .fixedSize()
    .opacity(enabled ? 1 : 0.4)
  }
}

struct Chip: View {
  let title: String
  var count: Int?
  var color: Color?
  let active: Bool
  let action: () -> Void
  @Environment(\.colorScheme) private var scheme

  var body: some View {
    let p = Palette.forScheme(scheme)
    Button(action: action) {
      HStack(spacing: 5) {
        if let color { Rectangle().fill(color).frame(width: 7, height: 7) }
        Text(title).font(.ui(11, weight: active ? .bold : .regular))
        if let count { Text("\(count)").font(.ui(10)).opacity(0.75) }
      }
      .foregroundStyle(active ? p.paperDeep : p.ink)
      .padding(.horizontal, 8)
      .frame(height: 32)
      .bg(active ? p.accent : p.paperDeep)
      .overlay(Rectangle().stroke(active ? p.accent : p.line, lineWidth: 1))
      .contentShape(Rectangle())
    }
    .buttonStyle(.plain)
    .fixedSize()
  }
}

struct CopyButton: View {
  let text: String
  var label = "Copy"
  @Local private var done = false

  var body: some View {
    RetroButton(title: done ? "Đã copy" : label, symbol: done ? "checkmark" : "doc.on.doc", compact: true) {
      copyToClipboard(text)
      done = true
      DispatchQueue.main.asyncAfter(deadline: .now() + 1.2) { done = false }
    }
    .disabled(text.isEmpty)
  }
}

extension View {
  /// A colour background that stays inside the view (plain `.background(Color)` spreads into the
  /// hidden title bar's safe area — the top-bar chips grew to full bar height).
  func bg(_ color: Color) -> some View { background(color, ignoresSafeAreaEdges: []) }

  func retroField(_ p: Palette) -> some View {
    bg(p.paperDeep).overlay(Rectangle().stroke(p.line, lineWidth: 1))
  }
}

func copyToClipboard(_ s: String) {
  NSPasteboard.general.clearContents()
  NSPasteboard.general.setString(s, forType: .string)
}

func nowStamp() -> String {
  let f = DateFormatter()
  f.dateFormat = "yyyy-MM-dd HH:mm"
  return f.string(from: Date())
}

// MARK: - Main window

enum SidebarItem: Hashable {
  case all
  case channel(Int64)
}

struct ContentView: View {
  @EnvironmentObject var model: AppModel
  @Environment(\.colorScheme) private var scheme
  @Local private var side: SidebarItem = .all
  @Local private var group: StatusGroup? = nil
  @Local private var kind: Kind? = nil
  @Local private var search = ""
  @Local private var selected: Int64? = nil
  @Local private var editingChannel: Channel? = nil
  @Local private var deletingChannel: Channel? = nil
  @Local private var channelsOpen = false
  @Local private var hoveredChannel: Int64? = nil
  @Local private var split = UserDefaults.standard.object(forKey: "listSplit") as? Double ?? 0.5

  /// Defaults for the app; Tools/snapshot.sh passes a state to render.
  init(channelsOpen: Bool = false, selected: Int64? = nil) {
    _channelsOpen = Local(wrappedValue: channelsOpen)
    _selected = Local(wrappedValue: selected)
  }

  private var channelId: Int64? {
    if case .channel(let id) = side { id } else { nil }
  }

  /// Channel + search, before the status / kind chips.
  private var scoped: [Video] {
    model.videos.filter { v in
      (channelId == nil || v.channelId == channelId)
        && (search.isEmpty
          || [v.code, v.title, v.description, v.tags].contains { $0.localizedCaseInsensitiveContains(search) })
    }
  }

  /// Rows in display order (grouped), for ↑/↓.
  private var ordered: [Video] {
    let s = scoped.filter { (group == nil || $0.group == group) && (kind == nil || $0.kind == kind) }
    return groupOrder.flatMap { g in s.filter { $0.group == g } }
  }

  var body: some View {
    let p = Palette.forScheme(scheme)
    ZStack(alignment: .topLeading) {
      VStack(spacing: 0) {
        topBar(p)
        HRail(p: p)
        GeometryReader { geo in
          let w = geo.size.width
          HStack(spacing: 0) {
            listColumn(p).frame(width: min(max(w * split, 340), w - 380))
            Splitter(p: p) { x in split = min(max(x / w, 0.25), 0.75) } onEnd: {
              UserDefaults.standard.set(split, forKey: "listSplit")
            } reset: {
              split = 0.5
              UserDefaults.standard.set(split, forKey: "listSplit")
            }
            detail(p).frame(maxWidth: .infinity, maxHeight: .infinity)
          }
          .coordinateSpace(name: "split")
        }
      }
      if channelsOpen {
        Color.black.opacity(0.001).onTapGesture { channelsOpen = false }
        channelPanel(p).padding(.leading, 84).padding(.top, 50)
      }
    }
    .ignoresSafeArea(.container, edges: .top)
    .background(p.paper)
    .tint(p.accent)
    .sheet(item: $editingChannel) { c in
      ChannelEditor(channel: c) { deletingChannel = c }
    }
    .confirmationDialog(
      "Xoá kênh \(deletingChannel?.name ?? "")?",
      isPresented: Binding(get: { deletingChannel != nil }, set: { if !$0 { deletingChannel = nil } })
    ) {
      Button("Xoá kênh và mọi video của kênh", role: .destructive) {
        if let c = deletingChannel {
          if side == .channel(c.id) { side = .all }
          model.deleteChannel(c.id)
        }
      }
    }
    .alert("Lỗi", isPresented: Binding(get: { model.error != nil }, set: { if !$0 { model.error = nil } })) {
      Button("OK") { model.error = nil }
    } message: {
      Text(model.error ?? "")
    }
    .onReceive(NotificationCenter.default.publisher(for: NSApplication.didBecomeActiveNotification)) { _ in
      model.reload()
    }
  }

  // MARK: top bar — channel, filters, search, add: one row

  private func topBar(_ p: Palette) -> some View {
    let byKind = scoped.filter { kind == nil || $0.kind == kind }
    let byGroup = scoped.filter { group == nil || $0.group == group }
    return HStack(spacing: 6) {
      channelButton(p)
      VRail(p: p).frame(height: 22)
      Chip(title: "Tất cả", count: byKind.count, active: group == nil) { group = nil }
      ForEach(groupOrder) { g in
        Chip(title: g == .ready ? "Chờ đăng" : g.label, count: byKind.filter { $0.group == g }.count,
             color: g.color(p), active: group == g) { group = g }
      }
      VRail(p: p).frame(height: 22)
      Chip(title: "L+S", count: byGroup.count, active: kind == nil) { kind = nil }
      ForEach(Kind.allCases) { k in
        Chip(title: k.label, count: byGroup.filter { $0.kind == k }.count, active: kind == k) { kind = k }
      }
      // Empty stretch of the bar drags the window (hidden title bar).
      Color.clear.frame(minWidth: 8, maxWidth: .infinity, maxHeight: .infinity)
        .contentShape(Rectangle()).gesture(WindowDragGesture())
      HStack(spacing: 6) {
        Image(systemName: "magnifyingglass").font(.system(size: 11)).foregroundStyle(p.muted)
        TextField("Tìm…", text: $search)
          .textFieldStyle(.plain).font(.ui(12)).foregroundStyle(p.ink)
        if !search.isEmpty {
          Button { search = "" } label: { Image(systemName: "xmark.circle.fill").foregroundStyle(p.muted) }
            .buttonStyle(.plain)
        }
      }
      .padding(.horizontal, 8)
      .frame(minWidth: 110, maxWidth: 220)
      .frame(height: 32)
      .retroField(p)
      ForEach(Kind.allCases) { k in
        RetroButton(title: k.label, symbol: "plus") {
          if let c = channelId { selected = model.addVideo(channelId: c, kind: k) }
        }
        .disabled(channelId == nil)
        .help(channelId == nil ? "Chọn một kênh trước" : "Thêm \(k.label) vào kênh này")
      }
      RetroButton(symbol: "arrow.clockwise") { model.reload() }.help("Tải lại từ DB (⌘R)")
    }
    .padding(.leading, 84)  // traffic lights
    .padding(.trailing, 14)
    .frame(height: 56)
    .bg(p.menubar)
  }

  // MARK: channel dropdown (drawn here, not an NSMenu)

  private func channelButton(_ p: Palette) -> some View {
    let current = channelId.flatMap { model.channel($0) }
    return Button { channelsOpen.toggle() } label: {
      HStack(spacing: 8) {
        Text(current?.name ?? "Tất cả kênh").font(.ui(12, weight: .bold)).foregroundStyle(p.ink).lineLimit(1)
        Image(systemName: channelsOpen ? "chevron.up" : "chevron.down")
          .font(.system(size: 9, weight: .bold)).foregroundStyle(p.muted)
      }
      .padding(.horizontal, 10)
      .frame(height: 32)
      .frame(maxWidth: 220, alignment: .leading)
      .bg(channelsOpen ? p.paperDeep : p.paper)
      .overlay(Rectangle().stroke(channelsOpen ? p.accent : p.line, lineWidth: 1))
      .contentShape(Rectangle())
    }
    .buttonStyle(.plain)
    .fixedSize()
  }

  private func channelPanel(_ p: Palette) -> some View {
    let counts = statusCounts(model.videos)
    var total: [StatusGroup: Int] = [:]
    for c in counts.values { total.merge(c, uniquingKeysWith: +) }
    return VStack(alignment: .leading, spacing: 0) {
      HStack {
        SectionLabel(text: "Kênh", p: p)
        Spacer()
        ForEach(groupOrder) { g in
          Text(g == .ready ? "chờ" : g == .doing ? "làm" : "đăng").font(.ui(9, weight: .bold))
            .foregroundStyle(g.color(p)).frame(width: 42, alignment: .trailing)
        }
        Spacer().frame(width: 52)
      }
      .padding(.horizontal, 12).padding(.vertical, 8)
      HRail(p: p)
      channelRow(nil, name: "Tất cả kênh", handle: "", counts: total, p: p)
      HRail(p: p).opacity(0.5)
      ForEach(model.channels) { c in
        channelRow(c, name: c.name, handle: c.handle, counts: counts[c.id] ?? [:], p: p)
      }
      HRail(p: p)
      Button {
        channelsOpen = false
        editingChannel = Channel()
      } label: {
        Label("Thêm kênh", systemImage: "plus").font(.ui(12, weight: .semibold)).foregroundStyle(p.accent)
          .padding(.horizontal, 12).frame(maxWidth: .infinity, minHeight: 34, alignment: .leading)
          .contentShape(Rectangle())
      }
      .buttonStyle(.plain)
    }
    .frame(width: 520)
    .bg(p.paper)
    .overlay(Rectangle().stroke(p.line, lineWidth: 1))
    .background(Rectangle().fill(p.line).offset(x: 3, y: 3))
  }

  private func channelRow(_ c: Channel?, name: String, handle: String, counts: [StatusGroup: Int],
                          p: Palette) -> some View {
    let item: SidebarItem = c.map { .channel($0.id) } ?? .all
    let active = side == item
    let hovered = hoveredChannel == (c?.id ?? 0)
    return HStack(spacing: 6) {
      Image(systemName: "checkmark").font(.system(size: 10, weight: .bold)).opacity(active ? 1 : 0)
      VStack(alignment: .leading, spacing: 1) {
        Text(name).font(.ui(12, weight: active ? .bold : .regular)).lineLimit(1)
        if !handle.isEmpty { Text(handle).font(.ui(10)).foregroundStyle(p.muted).lineLimit(1) }
      }
      Spacer(minLength: 6)
      ForEach(groupOrder) { g in
        let n = counts[g] ?? 0
        Text("\(n)").font(.ui(11, weight: .bold))
          .foregroundStyle(n == 0 ? p.muted.opacity(0.4) : g.color(p))
          .frame(width: 42, alignment: .trailing)
      }
      HStack(spacing: 2) {
        if let c {
          iconButton("pencil", p) { channelsOpen = false; editingChannel = c }.help("Sửa kênh")
          if let u = URL(string: c.url), u.scheme != nil {
            iconButton("arrow.up.right.square", p) { NSWorkspace.shared.open(u) }.help("Mở kênh trên YouTube")
          }
        }
      }
      .frame(width: 52, alignment: .trailing)
      .opacity(hovered ? 1 : 0)
    }
    .foregroundStyle(p.ink)
    .padding(.horizontal, 12).padding(.vertical, 7)
    .bg(hovered ? p.paperDeep : Color.clear)
    .contentShape(Rectangle())
    .onHover { hoveredChannel = $0 ? (c?.id ?? 0) : nil }
    .onTapGesture {
      side = item
      selected = nil
      channelsOpen = false
    }
  }

  private func iconButton(_ symbol: String, _ p: Palette, _ action: @escaping () -> Void) -> some View {
    Button(action: action) {
      Image(systemName: symbol).font(.system(size: 11, weight: .semibold)).foregroundStyle(p.muted)
        .frame(width: 22, height: 22).contentShape(Rectangle())
    }
    .buttonStyle(.plain)
  }

  // MARK: video list

  private func listColumn(_ p: Palette) -> some View {
    let rows = ordered
    return Group {
      if rows.isEmpty {
        Text(model.videos.isEmpty ? "Chưa có video.\nChọn kênh rồi bấm + Long / + Short." : "Không có video khớp bộ lọc.")
          .font(.ui(12)).foregroundStyle(p.muted).multilineTextAlignment(.center)
          .frame(maxWidth: .infinity, maxHeight: .infinity)
      } else {
        ScrollViewReader { proxy in
          ScrollView {
            LazyVStack(spacing: 0, pinnedViews: [.sectionHeaders]) {
              ForEach(groupOrder) { g in
                let items = rows.filter { $0.group == g }
                if !items.isEmpty {
                  Section {
                    ForEach(items) { v in
                      VideoRow(video: v, channelName: channelId == nil ? model.channel(v.channelId)?.name : nil,
                               selected: v.id == selected, p: p)
                        .id(v.id)
                        .onTapGesture { selected = v.id }
                    }
                  } header: {
                    HStack(spacing: 6) {
                      Rectangle().fill(g.color(p)).frame(width: 7, height: 7)
                      SectionLabel(text: "\(g.label) · \(items.count)", p: p)
                      Spacer()
                    }
                    .padding(.horizontal, 12).padding(.vertical, 6)
                    .bg(p.paper)
                    .overlay(alignment: .bottom) { HRail(p: p) }
                  }
                }
              }
            }
          }
          .focusable()
          .focusEffectDisabled()
          .onKeyPress(.downArrow) { step(1, rows, proxy) }
          .onKeyPress(.upArrow) { step(-1, rows, proxy) }
        }
      }
    }
  }

  private func step(_ d: Int, _ rows: [Video], _ proxy: ScrollViewProxy) -> KeyPress.Result {
    guard !rows.isEmpty else { return .ignored }
    let i = rows.firstIndex { $0.id == selected }.map { min(max($0 + d, 0), rows.count - 1) } ?? 0
    selected = rows[i].id
    proxy.scrollTo(rows[i].id)
    return .handled
  }

  // MARK: detail

  @ViewBuilder
  private func detail(_ p: Palette) -> some View {
    if let id = selected, let v = model.videos.first(where: { $0.id == id }) {
      // Rebuilt when the DB copy changes (reload after the CLI wrote), not on our own saves.
      VideoDetail(video: v).id("\(v.id)-\(v.updatedAt)")
    } else {
      VStack(spacing: 8) {
        Image(systemName: "play.rectangle").font(.system(size: 30)).foregroundStyle(p.line)
        Text("Chọn một video").font(.ui(13, weight: .semibold)).foregroundStyle(p.ink)
        Text("↑ ↓ để chuyển video · mọi ô có nút Copy").font(.ui(11)).foregroundStyle(p.muted)
      }
      .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
  }
}

/// Draggable rail between list and detail; double-click resets to 50/50.
struct Splitter: View {
  let p: Palette
  let onDrag: (CGFloat) -> Void
  let onEnd: () -> Void
  let reset: () -> Void
  @Local private var active = false

  var body: some View {
    ZStack {
      Color.clear.frame(width: 9)
      Rectangle().fill(active ? p.accent : p.line).frame(width: active ? 3 : 1)
    }
    .contentShape(Rectangle())
    .onHover { inside in
      active = inside
      if inside { NSCursor.resizeLeftRight.push() } else { NSCursor.pop() }
    }
    .gesture(
      DragGesture(minimumDistance: 1, coordinateSpace: .named("split"))
        .onChanged { onDrag($0.location.x) }
        .onEnded { _ in onEnd() }
    )
    .onTapGesture(count: 2) { reset() }
  }
}

struct VideoRow: View {
  let video: Video
  let channelName: String?
  let selected: Bool
  let p: Palette

  var body: some View {
    let c = video.group.color(p)
    HStack(alignment: .top, spacing: 10) {
      Rectangle().fill(c).frame(width: selected ? 4 : 2)
      VStack(alignment: .leading, spacing: 3) {
        HStack(spacing: 6) {
          Text(video.kind == .long ? "LONG" : "SHORT").font(.ui(9, weight: .bold)).foregroundStyle(p.muted)
          if !video.code.isEmpty { Text(video.code).font(.ui(11, weight: .semibold)).foregroundStyle(p.sun) }
          if let channelName { Text(channelName).font(.ui(10)).foregroundStyle(p.muted).lineLimit(1) }
          Spacer(minLength: 4)
          if video.group == .doing {  // the section header already says ready / published
            Text(video.stage.label).font(.ui(10, weight: .semibold)).foregroundStyle(c)
          }
        }
        Text(video.title.isEmpty ? "(chưa có title)" : video.title)
          .font(.ui(12))
          .foregroundStyle(video.title.isEmpty ? p.muted : p.ink)
          .lineLimit(2)
          .frame(maxWidth: .infinity, alignment: .leading)
      }
      .padding(.vertical, 8)
    }
    .padding(.trailing, 12)
    .bg(selected ? p.paperDeep : Color.clear)
    .overlay(alignment: .bottom) { HRail(p: p).opacity(0.5) }
    .contentShape(Rectangle())
  }
}

// MARK: - Video editor

struct VideoDetail: View {
  @EnvironmentObject var model: AppModel
  @Environment(\.colorScheme) private var scheme
  @Local private var draft: Video
  @Local private var confirmDelete = false

  /// Channel and kind are fixed at creation; the code only while it is still empty (new video).
  private let codeEditable: Bool

  init(video: Video) {
    _draft = Local(wrappedValue: video)
    codeEditable = video.code.isEmpty
  }

  private var bundleText: String {
    [draft.title, draft.description, draft.tags].filter { !$0.isEmpty }.joined(separator: "\n\n")
  }

  var body: some View {
    let p = Palette.forScheme(scheme)
    ScrollView {
      VStack(alignment: .leading, spacing: 22) {
        header(p)
        StageStepper(stage: $draft.stage, p: p)
        if draft.stage != .published {
          RetroButton(title: "Đánh dấu đã đăng", symbol: "checkmark.seal", primary: true) {
            draft.stage = .published
            if draft.publishedAt.isEmpty { draft.publishedAt = nowStamp() }
          }
        }

        section("Metadata YouTube", p, trailing: AnyView(CopyButton(text: bundleText, label: "Copy title + mô tả + tag"))) {
          CopyField(label: "Title", text: $draft.title, limit: 100)
          CopyField(label: "Description", text: $draft.description, limit: 5000, multiline: true)
          CopyField(label: "Tags", text: $draft.tags, limit: 500)
          CopyField(label: "Bình luận ghim", text: $draft.pinnedComment, multiline: true)
        }
        section("Link", p) {
          CopyField(label: "YouTube URL", text: $draft.ytUrl, action: .openURL)
          CopyField(label: draft.kind == .short ? "Related video (long gắn vào short)" : "Video liên kết",
                    text: $draft.linkedUrl, action: .openURL)
          CopyField(label: "Ngày đăng", text: $draft.publishedAt)
        }
        section("File", p) {
          CopyField(label: "Video", text: $draft.filePath, action: .reveal)
          CopyField(label: "Thumbnail", text: $draft.thumbPath, action: .reveal)
          CopyField(label: "Kịch bản / note", text: $draft.scriptPath, action: .reveal)
        }
        section("Ghi chú", p) {
          TextEditor(text: $draft.notes)
            .font(.ui(12)).foregroundStyle(p.ink).scrollContentBackground(.hidden)
            .padding(6).frame(minHeight: 70).retroField(p)
        }
      }
      .padding(22)
      .frame(maxWidth: 820, alignment: .leading)
    }
    .onChange(of: draft) { _, new in model.save(new) }
    .confirmationDialog("Xoá video này?", isPresented: $confirmDelete) {
      Button("Xoá", role: .destructive) { model.deleteVideo(draft.id) }
    }
  }

  private func header(_ p: Palette) -> some View {
    VStack(alignment: .leading, spacing: 6) {
      HStack(spacing: 8) {
        Text(draft.kind == .long ? "LONG" : "SHORT").font(.ui(10, weight: .bold))
          .foregroundStyle(p.paperDeep).padding(.horizontal, 6).frame(height: 18).bg(p.muted)
        if codeEditable {
          TextField("Mã video (vd IX017)", text: $draft.code)
            .textFieldStyle(.plain).font(.ui(12, weight: .bold)).foregroundStyle(p.sun)
            .padding(.horizontal, 6).frame(width: 200, height: 26).retroField(p)
        } else {
          Text(draft.code).font(.ui(12, weight: .bold)).foregroundStyle(p.sun)
        }
        Text(model.channel(draft.channelId)?.name ?? "").font(.ui(11)).foregroundStyle(p.muted)
        Spacer()
        RetroButton(symbol: "trash", compact: true) { confirmDelete = true }.help("Xoá video")
      }
      Text(draft.title.isEmpty ? "(chưa có title)" : draft.title)
        .font(.ui(17, weight: .bold))
        .foregroundStyle(draft.title.isEmpty ? p.muted : p.ink)
        .textSelection(.enabled)
    }
  }

  private func section<Content: View>(
    _ title: String, _ p: Palette, trailing: AnyView? = nil, @ViewBuilder content: () -> Content
  ) -> some View {
    VStack(alignment: .leading, spacing: 12) {
      HStack {
        Text(title.uppercased()).font(.ui(11, weight: .bold)).tracking(1).foregroundStyle(p.accent)
        Spacer()
        trailing
      }
      HRail(p: p)
      content()
    }
  }
}

/// Six clickable steps; the bar fills up to the current stage in its status colour.
struct StageStepper: View {
  @Binding var stage: Stage
  let p: Palette

  var body: some View {
    let current = Stage.allCases.firstIndex(of: stage) ?? 0
    let c = stage.group.color(p)
    HStack(spacing: 4) {
      ForEach(Array(Stage.allCases.enumerated()), id: \.element) { i, s in
        Button { stage = s } label: {
          VStack(alignment: .leading, spacing: 5) {
            Rectangle().fill(i <= current ? c : p.line).frame(height: 6)
            Text(s.shortLabel)
              .font(.ui(10, weight: i == current ? .bold : .regular))
              .foregroundStyle(i == current ? c : p.muted)
              .lineLimit(1).minimumScaleFactor(0.8)
          }
          .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .frame(maxWidth: .infinity)
      }
    }
  }
}

struct CopyField: View {
  enum Action { case none, openURL, reveal }

  let label: String
  @Binding var text: String
  var limit: Int?
  var multiline = false
  var action: Action = .none
  @Environment(\.colorScheme) private var scheme

  private var expandedPath: String { (text as NSString).expandingTildeInPath }

  var body: some View {
    let p = Palette.forScheme(scheme)
    VStack(alignment: .leading, spacing: 5) {
      HStack(spacing: 8) {
        SectionLabel(text: label, p: p)
        if let limit {
          Text("\(text.count)/\(limit)").font(.ui(10))
            .foregroundStyle(text.count > limit ? p.coral : p.muted.opacity(0.7))
        }
        if action == .reveal, !text.isEmpty, !FileManager.default.fileExists(atPath: expandedPath) {
          Text("⚠ không thấy file").font(.ui(10)).foregroundStyle(p.coral)
        }
        Spacer()
        switch action {
        case .openURL:
          RetroButton(title: "Mở", symbol: "arrow.up.right.square", compact: true) {
            if let u = URL(string: text) { NSWorkspace.shared.open(u) }
          }
          .disabled(URL(string: text)?.scheme == nil)
        case .reveal:
          RetroButton(title: "Finder", symbol: "folder", compact: true) {
            NSWorkspace.shared.activateFileViewerSelecting([URL(fileURLWithPath: expandedPath)])
          }
          .disabled(text.isEmpty)
        case .none:
          EmptyView()
        }
        CopyButton(text: text)
      }
      if multiline {
        TextEditor(text: $text)
          .font(.ui(12)).foregroundStyle(p.ink).scrollContentBackground(.hidden)
          .padding(6).frame(minHeight: 90, maxHeight: 260).retroField(p)
      } else {
        TextField("", text: $text)
          .textFieldStyle(.plain).font(.ui(12)).foregroundStyle(p.ink)
          .padding(8).retroField(p)
      }
    }
  }
}

// MARK: - Channel editor

struct ChannelEditor: View {
  @EnvironmentObject var model: AppModel
  @Environment(\.dismiss) private var dismiss
  @Environment(\.colorScheme) private var scheme
  @Local private var c: Channel
  let onDelete: () -> Void

  init(channel: Channel, onDelete: @escaping () -> Void) {
    _c = Local(wrappedValue: channel)
    self.onDelete = onDelete
  }

  var body: some View {
    let p = Palette.forScheme(scheme)
    VStack(alignment: .leading, spacing: 14) {
      Text(c.id == 0 ? "KÊNH MỚI" : "SỬA KÊNH").font(.ui(13, weight: .bold)).foregroundStyle(p.accent)
      field("Tên kênh", $c.name, "Off Limits Life", p)
      field("Handle", $c.handle, "@OffLimitsLife", p)
      field("URL kênh", $c.url, "https://www.youtube.com/@…", p)
      field("Ngôn ngữ", $c.lang, "en / vi", p)
      field("Ghi chú", $c.notes, "", p)
      HStack {
        if c.id != 0 {
          RetroButton(title: "Xoá kênh", symbol: "trash") {
            dismiss()
            onDelete()
          }
        }
        Spacer()
        RetroButton(title: "Huỷ") { dismiss() }.keyboardShortcut(.cancelAction)
        RetroButton(title: c.id == 0 ? "Thêm" : "Lưu", primary: true) {
          model.saveChannel(c)
          dismiss()
        }
        .keyboardShortcut(.defaultAction)
        .disabled(c.name.trimmingCharacters(in: .whitespaces).isEmpty)
      }
    }
    .padding(22)
    .frame(width: 460)
    .bg(p.paper)
  }

  private func field(_ label: String, _ text: Binding<String>, _ hint: String, _ p: Palette) -> some View {
    VStack(alignment: .leading, spacing: 5) {
      SectionLabel(text: label, p: p)
      TextField(hint, text: text).textFieldStyle(.plain).font(.ui(12)).foregroundStyle(p.ink)
        .padding(8).retroField(p)
    }
  }
}
