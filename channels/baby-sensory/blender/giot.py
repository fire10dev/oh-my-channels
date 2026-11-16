# Linh vật "Giọt": giọt kẹo bóng biết đổi màu. Nền đen, đồ chơi bóng.
# Chạy: blender -b -P blender/giot.py -- hero|lineup|thanhlong|cast|dau|chuoi|fruits
import bpy, bmesh, math, sys
from mathutils import Vector

MODE = sys.argv[sys.argv.index("--") + 1] if "--" in sys.argv else "lineup"
OUT = "/Users/nino/Projects/FIRE10.DEV/REPO/baby-sensory-style/out/mascot/"

bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene

def hexc(h, a=1.0):
    h = h.lstrip("#"); c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c] + [a]

def mat(name, color, rough=0.18, coat=1.0, sss=0.25, emit=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = hexc(color)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Coat Weight"].default_value = coat
    b.inputs["Coat Roughness"].default_value = 0.05
    b.inputs["Subsurface Weight"].default_value = sss
    b.inputs["Subsurface Radius"].default_value = (0.4, 0.25, 0.2)
    if emit:
        b.inputs["Emission Color"].default_value = hexc(color)
        b.inputs["Emission Strength"].default_value = emit
    return m

def smooth(o, levels=2):
    for p in o.data.polygons: p.use_smooth = True
    md = o.modifiers.new("sub", "SUBSURF"); md.levels = levels; md.render_levels = levels

def sphere(name, loc, scale, m, seg=48):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=seg // 2, location=loc)
    o = bpy.context.object; o.name = name; o.scale = scale
    for p in o.data.polygons: p.use_smooth = True
    o.data.materials.append(m); return o

def curve(name, pts, m, bev=0.025, parent=None):
    cu = bpy.data.curves.new(name, "CURVE"); cu.dimensions = "3D"
    sp = cu.splines.new("NURBS"); sp.points.add(len(pts) - 1)
    for i, p in enumerate(pts): sp.points[i].co = (*p, 1)
    sp.use_endpoint_u = True; sp.order_u = 3
    cu.bevel_depth = bev; cu.bevel_resolution = 6; cu.use_fill_caps = True
    o = bpy.data.objects.new(name, cu); bpy.context.collection.objects.link(o)
    o.data.materials.append(m)
    if parent: o.parent = parent
    return o

def surf_y(x, z, off=0.0):
    # mặt trước thân; nửa dưới bị co (x*1.02, z*0.92); subsurf co vào ~1,5%
    if z < 0: x, z = x / 1.02, z / 0.92
    return -0.985 * math.sqrt(max(0.0, 1 - x * x - z * z)) - off

def heart(name, loc, size, rotz, m, parent):
    bm = bmesh.new(); vs = []
    for i in range(48):
        t = 2 * math.pi * i / 48
        x = 16 * math.sin(t) ** 3; z = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        vs.append(bm.verts.new((x / 17 * size, 0, z / 17 * size)))
    f = bm.faces.new(vs)
    ext = bmesh.ops.extrude_face_region(bm, geom=[f])
    bmesh.ops.translate(bm, vec=(0, 0.02, 0), verts=[v for v in ext["geom"] if isinstance(v, bmesh.types.BMVert)])
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o)
    o.location = loc; o.rotation_euler = (0, 0, rotz); o.data.materials.append(m)
    bev = o.modifiers.new("bev", "BEVEL"); bev.width = 0.008; bev.segments = 3
    o.parent = parent
    return o

INK = None; WHITE = None; LEAF = None
def shared():
    global INK, WHITE, LEAF
    INK = mat("ink", "#1E1420", rough=0.08, coat=1, sss=0)
    WHITE = mat("hi", "#FFFFFF", rough=0.1, coat=0, sss=0, emit=3.0)
    LEAF = mat("leaf", "#43C463", rough=0.2, coat=1, sss=0.2)

def face(root, surf, expr, cheek, ez=0.06, ex=0.34, mz=-0.28, cx=0.56, cz=-0.15, k=1.0):
    """Mặt dùng chung mọi nhân vật. surf(x, z, off) = y mặt trước thân."""
    def open_eye(sx):
        e = sphere("eye", (sx, surf(sx, ez, -0.035), ez), (0.13 * k, 0.07, 0.17 * k), INK); e.parent = root
        h = sphere("hl", (sx - 0.04 * k, surf(sx, ez, 0.03), ez + 0.07 * k), (0.045 * k, 0.02, 0.05 * k), WHITE); h.parent = root
        h2 = sphere("hl2", (sx + 0.04 * k, surf(sx, ez, 0.03), ez - 0.06 * k), (0.022 * k, 0.01, 0.022 * k), WHITE); h2.parent = root
    def arc_eye(sx):
        pts = [(sx + dx, surf(sx + dx, ez + dz, 0.0), ez + dz) for dx, dz in [(-0.12, -0.02), (-0.06, 0.05), (0, 0.075), (0.06, 0.05), (0.12, -0.02)]]
        curve("eyearc", pts, INK, 0.028, root)
    if expr == "open": open_eye(-ex); open_eye(ex)
    elif expr == "happy": arc_eye(-ex); arc_eye(ex)
    elif expr == "wink": open_eye(-ex); arc_eye(ex)
    elif expr == "oh": open_eye(-ex); open_eye(ex)
    # miệng
    if expr == "oh":
        bpy.ops.mesh.primitive_torus_add(major_radius=0.085 * k, minor_radius=0.032 * k, location=(0, surf(0, mz, 0.02), mz), rotation=(math.pi / 2, 0, 0))
        o = bpy.context.object; o.scale = (1, 1.25, 1); o.data.materials.append(INK); o.parent = root
        for p in o.data.polygons: p.use_smooth = True
    else:
        pts = [(dx, surf(dx, mz + dz, -0.005), mz + dz) for dx, dz in [(-0.15, 0.03), (-0.08, -0.04), (0, -0.065), (0.08, -0.04), (0.15, 0.03)]]
        curve("smile", pts, INK, 0.026, root)
    # má hình tim (chữ ký)
    cm = mat("cheek_" + cheek, cheek, rough=0.3, coat=0.5, sss=0)
    for sx in (-cx, cx):
        sy = surf(sx, cz, 0.0)
        ang = math.atan2(sx, -sy)  # quay tim theo pháp tuyến mặt cầu
        o = heart("cheek", (sx, sy - 0.006, cz), 0.12 * k, ang, cm, root)
        o.location = Vector(o.location) + Vector((sx, sy, cz)).normalized() * 0.01

def make_giot(x0, color, cheek, expr, rot=0.0, scale=1.0):
    root = bpy.data.objects.new("giot", None); bpy.context.collection.objects.link(root)
    # thân: cầu kéo đỉnh thành mũi giọt nước, mũi hơi cong
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32, location=(0, 0, 0))
    body = bpy.context.object; body.name = "body"
    for v in body.data.vertices:
        x, y, z = v.co
        if z > 0:
            t = z
            s = max(0.0, 1 - t ** 1.6) ** 0.9
            v.co = Vector((x * s + 0.12 * t ** 3, y * s, z * 1.55))
        else:
            v.co = Vector((x * 1.02, y * 1.0, z * 0.92))
    smooth(body, 2); body.data.materials.append(mat("body_" + color, color)); body.parent = root
    face(root, surf_y, expr, cheek)
    # mầm lá ở mũi giọt (chữ ký)
    tip = Vector((0.12, 0, 1.55))
    stem = curve("stem", [tuple(tip + Vector(p)) for p in [(0, 0, -0.08), (0.02, 0, 0.06), (-0.02, 0, 0.16)]], LEAF, 0.022, root)
    for side in (-1, 1):
        lf = sphere("leaf", tuple(tip + Vector((0.13 * side, 0, 0.2))), (0.16, 0.05, 0.07), LEAF, 32)
        lf.rotation_euler = (0, -side * 0.45, 0); lf.parent = root
    root.location = (x0, 0, 0); root.rotation_euler = (0, 0, rot); root.scale = (scale,) * 3
    return root


def grad_mat(name, c0, c1, p0=0.45, p1=0.85):
    """Vảy thanh long: hồng ở gốc → xanh lá ở chóp (theo trục Z của vật)."""
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.2; b.inputs["Coat Weight"].default_value = 1.0
    b.inputs["Coat Roughness"].default_value = 0.05; b.inputs["Subsurface Weight"].default_value = 0.2
    tc = nt.nodes.new("ShaderNodeTexCoord"); sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = p0; ramp.color_ramp.elements[0].color = hexc(c0)
    ramp.color_ramp.elements[1].position = p1; ramp.color_ramp.elements[1].color = hexc(c1)
    nt.links.new(tc.outputs["Generated"], sep.inputs[0]); nt.links.new(sep.outputs["Z"], ramp.inputs[0])
    nt.links.new(ramp.outputs["Color"], b.inputs["Base Color"])
    return m

TL_R = (1.0, 0.92, 1.22)  # bán kính thân thanh long (x, y, z)
def surf_tl(x, z, off=0.0):
    rx, ry, rz = TL_R
    return -0.985 * ry * math.sqrt(max(0.0, 1 - (x / rx) ** 2 - (z / rz) ** 2)) - off

def bract(p, n, m, length, width, parent, lay=0.55):
    """1 vảy: lá dẹt gắn ở điểm p, chĩa ra ngoài + lên trên."""
    up = Vector((0, 0, 1))
    d = (n * lay + up * 0.85).normalized()
    thin = (n - d * n.dot(d)).normalized()
    xax = thin.cross(d).normalized()
    from mathutils import Matrix
    rot = Matrix((xax, thin, d)).transposed().to_euler()
    o = sphere("bract", tuple(p + d * length * 0.8 - n * 0.06), (width, 0.045, length), m, 32)
    o.rotation_euler = rot; o.parent = parent
    return o

def make_thanhlong(x0, expr="open", rot=0.0, scale=1.0):
    root = bpy.data.objects.new("thanhlong", None); bpy.context.collection.objects.link(root)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32)
    body = bpy.context.object; body.name = "tl_body"; body.scale = TL_R
    for v in body.data.vertices:  # đáy hơi bằng, đỉnh hơi thuôn
        if v.co.z > 0: v.co.x *= 1 - 0.12 * v.co.z ** 2; v.co.y *= 1 - 0.12 * v.co.z ** 2
    smooth(body, 2); body.data.materials.append(mat("tl_body", "#FF2E8B", rough=0.16, sss=0.3)); body.parent = root
    bm_ = grad_mat("tl_bract", "#FF4FA0", "#5FD35A")
    rx, ry, rz = TL_R
    # hàng vảy: (z chuẩn hoá, số vảy, chừa mặt trước?, dài, rộng)
    rows = [(-0.74, 10, False, 0.26, 0.13), (-0.08, 8, True, 0.30, 0.13), (0.56, 9, False, 0.24, 0.12)]
    for zi, (zn, cnt, skip_front, ln, wd) in enumerate(rows):
        for i in range(cnt):
            phi = 2 * math.pi * (i + 0.5 * zi) / cnt  # 0 = mặt trước (−Y)
            if skip_front and (math.cos(phi) > 0.45): continue
            r = math.sqrt(max(0.0, 1 - zn * zn))
            p = Vector((rx * r * math.sin(phi), -ry * r * math.cos(phi), rz * zn))
            n = Vector((p.x / rx ** 2, p.y / ry ** 2, p.z / rz ** 2)).normalized()
            front = math.cos(phi) > 0.45
            bract(p, n, bm_, ln * (0.8 if front else 1), wd, root, lay=0.3 if front else 0.55)
    # vương miện lá trên đỉnh (thay mầm lá)
    top = Vector((0, 0, rz * 0.97))
    for i in range(6):
        phi = 2 * math.pi * i / 6 + 0.3
        n = Vector((math.sin(phi), -math.cos(phi), 1.4)).normalized()
        bract(top + Vector((0.18 * math.sin(phi), -0.18 * math.cos(phi), 0)), n, bm_, 0.3, 0.12, root)
    face(root, surf_tl, expr, "#FFD1E4", ez=0.1, ex=0.36, mz=-0.27, cx=0.6, cz=-0.12, k=1.1)
    root.location = (x0, 0, 0); root.rotation_euler = (0, 0, rot); root.scale = (scale,) * 3
    return root

from mathutils.bvhtree import BVHTree
def make_surf(body):
    """surf(x, z, off) bằng raycast vào thân đã subsurf (thân phải ở gốc root, không xoay/scale)."""
    bpy.context.view_layer.update()
    bvh = BVHTree.FromObject(body, bpy.context.evaluated_depsgraph_get())
    def f(x, z, off=0.0):
        hit = bvh.ray_cast(Vector((x, -10, z)), Vector((0, 1, 0)))
        return (hit[0].y if hit[0] else 0.0) - off
    return f, bvh

def leaf(name, p, d, m, length, width, parent, thick=0.04):
    """lá dẹt: gốc ở p, chĩa theo d, mặt phẳng lá vuông góc trục Z."""
    d = d.normalized()
    side = Vector((0, 0, 1)).cross(d)
    if side.length < 1e-4: side = Vector((1, 0, 0))
    side.normalize(); nrm = d.cross(side).normalized()
    from mathutils import Matrix
    rot = Matrix((side, nrm, d)).transposed().to_euler()
    o = sphere(name, tuple(p + d * length * 0.85), (width, thick, length), m, 32)
    o.rotation_euler = rot; o.parent = parent
    return o

def make_dau(x0, expr="open", rot=0.0, scale=1.0):
    root = bpy.data.objects.new("dau", None); bpy.context.collection.objects.link(root)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32)
    body = bpy.context.object; body.name = "dau_body"
    for v in body.data.vertices:
        x, y, z = v.co
        if z < 0:
            f = 1 - 0.42 * (-z) ** 1.3
            v.co = Vector((x * f * 1.05, y * f * 0.98, z * 1.25))
        else:
            v.co = Vector((x * 1.05, y * 0.98, z * 0.78))
    smooth(body, 2); body.data.materials.append(mat("dau_body", "#FF3346", rough=0.14, sss=0.3)); body.parent = root
    surf, bvh = make_surf(body)
    # hạt vàng: xoắn ốc vàng, chừa vùng mặt và đỉnh
    seed_m = mat("seed", "#FFE45C", rough=0.2, coat=1, sss=0)
    N = 140; ga = math.pi * (3 - math.sqrt(5))
    for i in range(N):
        zz = 1 - 2 * (i + 0.5) / N; r = math.sqrt(1 - zz * zz)
        dirv = Vector((r * math.cos(ga * i), r * math.sin(ga * i), zz))
        hit = bvh.ray_cast(Vector((0, 0, 0)), dirv)
        if not hit[0]: continue
        h, n = hit[0], hit[1]
        if n.dot(dirv) < 0: n = -n
        if h.z > 0.55: continue
        if h.y < -0.25 and abs(h.x) < 0.78 and -0.6 < h.z < 0.42: continue
        o = sphere("seed", tuple(h - n * 0.004), (0.035, 0.035, 0.022), seed_m, 16)
        o.rotation_euler = n.to_track_quat("Z", "Y").to_euler(); o.parent = root
    # đài lá xanh + cuống
    top = Vector((0, 0, 0.8))
    for i in range(7):
        phi = 2 * math.pi * i / 7 + 0.2
        rad = Vector((math.cos(phi), math.sin(phi), 0))
        leaf("sepal", top + rad * 0.06, rad + Vector((0, 0, -0.12)), LEAF, 0.3, 0.12, root)
    curve("stem", [(0, 0, 0.7), (0.03, 0, 0.88), (0.1, 0, 1.0)], LEAF, 0.05, root)
    face(root, surf, expr, "#FFB3C1", ez=0.12, ex=0.34, mz=-0.25, cx=0.56, cz=-0.1, k=1.0)
    root.location = (x0, 0, 0); root.rotation_euler = (0, 0, rot); root.scale = (scale,) * 3
    return root

def make_chuoi(x0, expr="open", rot=0.0, scale=1.0):
    root = bpy.data.objects.new("chuoi", None); bpy.context.collection.objects.link(root)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=40)
    body = bpy.context.object; body.name = "chuoi_body"
    RX, RY, RZ, BEND = 0.56, 0.56, 1.6, 1.05
    for v in body.data.vertices:
        x, y, z = v.co
        th = math.atan2(y, x)
        f = (1 - 0.1 * z * z) * (1 + 0.035 * math.cos(5 * th))  # thuôn 2 đầu + gờ múi chuối
        v.co = Vector((x * RX * f + BEND * z * z, y * RY * f, z * RZ))
    smooth(body, 2); body.data.materials.append(mat("chuoi_body", "#FFD93B", rough=0.2, sss=0.25)); body.parent = root
    surf, _ = make_surf(body)
    brown = mat("brown", "#4A3020", rough=0.4, coat=0.3, sss=0)
    stem_m = mat("chuoi_stem", "#9CC23E", rough=0.25, coat=1, sss=0.1)
    curve("stem", [(BEND - 0.02, 0, RZ - 0.15), (BEND + 0.06, 0, RZ + 0.1), (BEND + 0.2, 0, RZ + 0.3)], stem_m, 0.075, root)
    sphere("stemcap", (BEND + 0.2, 0, RZ + 0.31), (0.08, 0.08, 0.05), brown, 24).parent = root
    sphere("nub", (BEND, 0, -RZ + 0.02), (0.08, 0.08, 0.06), brown, 24).parent = root
    face(root, surf, expr, "#FF9F6B", ez=0.16, ex=0.23, mz=-0.15, cx=0.38, cz=-0.03, k=0.8)
    root.location = (x0, 0, 0); root.rotation_euler = (0, 0, rot); root.scale = (scale,) * 3
    return root

# ---------- cảnh ----------
shared()
if MODE == "hero":
    make_giot(0, "#FF4F9A", "#FFD1E4", "open")
    sc.render.resolution_x, sc.render.resolution_y = 1080, 1080
    cam_loc, cam_lens, cam_z = (0, -7.2, 0.9), 62, 0.3
elif MODE == "thanhlong":
    make_thanhlong(0, "open")
    sc.render.resolution_x, sc.render.resolution_y = 1080, 1080
    cam_loc, cam_lens, cam_z = (0, -7.6, 0.9), 55, 0.15
elif MODE == "dau":
    make_dau(0, "open")
    sc.render.resolution_x, sc.render.resolution_y = 1080, 1080
    cam_loc, cam_lens, cam_z = (0, -7.2, 0.9), 55, 0.1
elif MODE == "chuoi":
    make_chuoi(-0.45, "open")
    sc.render.resolution_x, sc.render.resolution_y = 1080, 1080
    cam_loc, cam_lens, cam_z = (0, -9.0, 0.9), 55, 0.15
elif MODE == "fruits":
    make_thanhlong(0, "happy", scale=1.1)
    make_dau(-3.1, "wink", rot=0.15)
    make_chuoi(2.7, "open", rot=-0.2, scale=0.85)
    sc.render.resolution_x, sc.render.resolution_y = 1920, 1080
    cam_loc, cam_lens, cam_z = (0, -13.5, 1.0), 50, 0.3
elif MODE == "cast":
    make_thanhlong(0, "happy", scale=1.15)
    make_giot(-3.0, "#FFC52E", "#FF8A5C", "open", rot=0.15, scale=0.75)
    make_giot(3.0, "#36A8FF", "#9ED6FF", "wink", rot=-0.15, scale=0.75)
    sc.render.resolution_x, sc.render.resolution_y = 1920, 1080
    cam_loc, cam_lens, cam_z = (0, -13.5, 1.0), 50, 0.3
elif MODE in ("brand-logo", "brand-banner"):
    # thương hiệu kênh Beebubeebo: logo 800² + banner 2560×1440 (vùng an toàn 1546×423 ở giữa)
    FONT = "/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf"
    BRAND = ["#FF4F9A", "#FFC52E", "#36A8FF", "#A35CFF", "#43C463", "#FF8A3D"]
    def brand_text(txt, loc, size, colors=None, color="#FFFFFF", extrude=0.12):
        """chữ bóng 3D, mặt hướng về −Y; mỗi chữ cái 1 màu theo colors (chia theo mép phải của tiền tố)."""
        font = bpy.data.fonts.load(FONT, check_existing=True)
        def mk(body):
            cu = bpy.data.curves.new("txt", "FONT"); cu.body = body; cu.font = font; cu.size = size
            cu.extrude = extrude * size; cu.bevel_depth = 0.035 * size; cu.bevel_resolution = 4
            o = bpy.data.objects.new("txt", cu); bpy.context.collection.objects.link(o); return o
        edges = []
        if colors:
            for i in range(1, len(txt)):
                t = mk(txt[:i]); bpy.context.view_layer.update()
                edges.append(max(v[0] for v in t.bound_box)); bpy.data.objects.remove(t)
        o = mk(txt); bpy.context.view_layer.update()
        bb = o.bound_box; x0, x1 = min(v[0] for v in bb), max(v[0] for v in bb)
        z0, z1 = min(v[1] for v in bb), max(v[1] for v in bb)
        bpy.context.view_layer.objects.active = o; o.select_set(True)
        bpy.ops.object.convert(target="MESH"); o.select_set(False)
        for c in (colors or [color]):
            o.data.materials.append(mat("txt_" + c, c, rough=0.12 if colors else 0.25, coat=1.0 if colors else 0.6, sss=0.15 if colors else 0))
        for p_ in o.data.polygons:
            p_.use_smooth = True
            if colors:
                k_ = sum(1 for e in edges if p_.center.x > e + 0.02 * size)
                p_.material_index = k_ % len(colors)
        o.rotation_euler = (math.pi / 2, 0, 0)
        o.location = (loc[0] - (x0 + x1) / 2, loc[1], loc[2] - (z0 + z1) / 2)
        return o
    if MODE == "brand-logo":
        make_giot(0, "#FF4F9A", "#FFD1E4", "open")
        sc.render.resolution_x, sc.render.resolution_y = 800, 800
        cam_loc, cam_lens, cam_z = (0, -7.2, 0.9), 80, 0.42
    else:
        # 1 BU = 100 px; vùng an toàn: x ±7.73, z ±2.11
        brand_text("Beebubeebo", (0, 0, 0.35), 1.6, colors=["#FF4F9A", "#FFC52E", "#36A8FF", "#A35CFF", "#43C463", "#FF8A3D", "#FF4F9A", "#FFC52E", "#36A8FF", "#A35CFF"])
        brand_text("baby sensory  -  6–12 months", (0, 0, -1.15), 0.42, color="#FFFFFF", extrude=0.05)
        make_giot(-6.45, "#FF4F9A", "#FFD1E4", "happy", rot=0.2, scale=1.15).location.z = -0.5
        make_thanhlong(6.45, "open", rot=-0.2, scale=1.0).location.z = -0.2
        make_dau(-9.4, "wink", rot=0.25, scale=1.15).location.z = 0.15
        make_chuoi(8.9, "happy", rot=-0.3, scale=0.8).location.z = -0.1
        make_giot(-11.9, "#36A8FF", "#9ED6FF", "open", rot=0.3, scale=0.9).location.z = -0.4
        make_giot(11.9, "#FFC52E", "#FF8A5C", "wink", rot=-0.3, scale=0.9).location.z = -0.4
        sc.render.resolution_x, sc.render.resolution_y = 2560, 1440
        cam_loc, cam_lens, cam_z = (0, -40, 0), 40 * 36 / 25.6, 0
else:
    items = [("#FF4F9A", "#FFD1E4", "open"), ("#FFC52E", "#FF8A5C", "happy"), ("#36A8FF", "#9ED6FF", "wink"), ("#A35CFF", "#E2C8FF", "oh")]
    for i, (c, ch, e) in enumerate(items):
        make_giot((i - 1.5) * 2.6, c, ch, e, rot=(i - 1.5) * -0.06)
    sc.render.resolution_x, sc.render.resolution_y = 1920, 1080
    cam_loc, cam_lens, cam_z = (0, -15.5, 1.0), 50, 0.35

cam = bpy.data.cameras.new("cam"); cam.lens = cam_lens
co = bpy.data.objects.new("cam", cam); sc.collection.objects.link(co); sc.camera = co
co.location = cam_loc
d = Vector((0, 0, cam_z)) - co.location; co.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()

def area(name, loc, power, size, color="#FFFFFF"):
    l = bpy.data.lights.new(name, "AREA"); l.energy = power; l.size = size; l.color = hexc(color)[:3]
    o = bpy.data.objects.new(name, l); sc.collection.objects.link(o); o.location = loc
    d = Vector((0, 0, 0.3)) - o.location; o.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
k = 1 if MODE in ("hero", "thanhlong", "dau", "chuoi") else 2.2
area("key", (-4 * k, -6 * k, 5 * k), 1400 * k * k, 5 * k)
area("fill", (5 * k, -5 * k, 0.5), 450 * k * k, 6 * k, "#DDE8FF")
area("rim", (0, 5 * k, 2.5 * k), 450 * k * k, 5 * k, "#FFE8D0")

w = bpy.data.worlds.new("w"); sc.world = w; w.use_nodes = True
w.node_tree.nodes["Background"].inputs[0].default_value = (0, 0, 0, 1)

sc.render.engine = "CYCLES"
prefs = bpy.context.preferences.addons["cycles"].preferences
try:
    prefs.compute_device_type = "METAL"; prefs.get_devices()
    for dv in prefs.devices: dv.use = True
    sc.cycles.device = "GPU"
except Exception as ex:
    print("GPU off:", ex)
sc.cycles.samples = 64; sc.cycles.use_denoising = True
sc.view_settings.view_transform = "Standard"
sc.view_settings.look = "None"
sc.render.film_transparent = False
sc.render.filepath = OUT + {"hero": "giot-hero.png", "lineup": "giot-lineup.png", "thanhlong": "thanhlong-hero.png", "cast": "cast-giot-thanhlong.png", "dau": "dau-hero.png", "chuoi": "chuoi-hero.png", "fruits": "cast-trai-cay.png", "brand-logo": "../brand/beebubeebo-logo.png", "brand-banner": "../brand/beebubeebo-banner.png"}[MODE]
bpy.ops.render.render(write_still=True)
print("WROTE", sc.render.filepath)
