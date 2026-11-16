// Copied from BBSnap/Sources/BBSnap/Theme.swift — keep the two in sync.
import SwiftUI

/// Retro Terminal palette.
/// Two schemes: Forest Phosphor (dark) and Warm Paper (light).
struct Palette {
    let paper: Color        // window background
    let paperDeep: Color    // sunken: code / fields / display
    let line: Color         // borders & rails
    let ink: Color          // normal text
    let accent: Color       // headings / cursor / accent (lime on dark, forest on light)
    let sun: Color          // links / rails / highlight
    let coral: Color        // errors / primary action
    let muted: Color        // secondary text
    let menubar: Color      // titlebar / toolbar strips

    static let dark = Palette(   // Forest Phosphor
        paper:     Color(hex: 0x0e2a22),
        paperDeep: Color(hex: 0x081d17),
        line:      Color(hex: 0x1d5445),
        ink:       Color(hex: 0xf2ecdd),
        accent:    Color(hex: 0xc9e36c),
        sun:       Color(hex: 0xe9b949),
        coral:     Color(hex: 0xd96c4b),
        muted:     Color(hex: 0xa7bcac),
        menubar:   Color(hex: 0x0a231c)
    )

    static let light = Palette(  // Warm Paper
        paper:     Color(hex: 0xf5f0e5),
        paperDeep: Color(hex: 0xe9e1cf),
        line:      Color(hex: 0xcfc4ae),
        ink:       Color(hex: 0x18362d),
        accent:    Color(hex: 0x123c32),
        sun:       Color(hex: 0xa9781a),
        coral:     Color(hex: 0xc0512f),
        muted:     Color(hex: 0x50655b),
        menubar:   Color(hex: 0xe9e1cf)
    )

    static func forScheme(_ scheme: ColorScheme) -> Palette {
        scheme == .dark ? .dark : .light
    }
}

extension Color {
    init(hex: UInt32) {
        self.init(
            .sRGB,
            red:   Double((hex >> 16) & 0xff) / 255.0,
            green: Double((hex >> 8) & 0xff) / 255.0,
            blue:  Double(hex & 0xff) / 255.0,
            opacity: 1.0
        )
    }
}

extension Font {
    /// Everything is monospace in this theme.
    static func term(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .monospaced)
    }
}
