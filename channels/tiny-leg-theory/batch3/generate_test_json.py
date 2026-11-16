import json, re, subprocess

data = {
 "id": "L16vi",
 "lang": "vi",
 "title": "Chi cho bản thân sao cho bớt cảm giác có lỗi?",
 "description": "Bạn thấy tội lỗi khi mua đôi giày mới hay ly cà phê ngon? Tám cơ chế tâm lý khiến bạn khó chi tiêu cho bản thân và cách gỡ bỏ để chăm sóc chính mình.",
 "chapters": [
  {
   "title": "Vì sao tiêu tiền lại đau",
   "sources": [
    "s01"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Quẹt thẻ trả tiền bữa trưa ngon miệng, nhìn số dư lại thấy như có lỗi với tương lai.",
     "text": "VÌ SAO TIÊU TIỀN ĐAU?",
     "color": "ink",
     "actor": "wallet_worry",
     "prop": "coin_stack"
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn luôn bạn ơi. Tiền tự cày ra, nhưng não lại báo động như vừa đi cướp.",
     "text": "BÁO ĐỘNG BỊ CƯỚP",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Sao tự sắm chút tiện nghi lại thấy ích kỷ và có lỗi với gia đình thế nhỉ?",
     "text": "CÓ LỖI VỚI AI?",
     "color": "ink",
     "actor": "worried_heart",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Vì bản năng sinh tồn biến việc tự chăm sóc thành mối nguy đạo đức nghiêm trọng.",
     "text": "BẢN NĂNG SINH TỒN",
     "color": "gold",
     "actor": "think",
     "prop": "target"
    },
    {
     "speaker": "pen",
     "vo": "Làm sao tiêu tiền mình làm ra mà lòng không cắn rứt từng cơn hả Buff?",
     "text": "DỨT CƠN CẮN RỨT",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Có tám cái bẫy ngầm đang khóa ví bạn. Khởi động đi, ta sẽ bẻ gãy từng cái.",
     "text": "TÁM CÁI BẪY NGẦM",
     "color": "green",
     "actor": "point_viewer",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Vào bài tập đầu tiên đi, chứ mỗi lần quét mã là ruột gan tôi lại thắt lại.",
     "text": "HIỆP MỘT: MỞ KHÓA",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    }
   ]
  },
  {
   "title": "1. Nỗi đau trả tiền",
   "sources": [
    "s02"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Cứ mỗi lần rút ví hay mở ứng dụng ngân hàng xem số dư là tôi lại giật mình.",
     "text": "1. NỖI ĐAU TRẢ TIỀN",
     "color": "ink",
     "actor": "panic",
     "prop": "smartphone_glow"
    },
    {
     "speaker": "buff",
     "vo": "Cơn đau đó có thật. Não bộ coi tiền rời ví như vết thương thể xác.",
     "text": "NÃO COI LÀ VẾT THƯƠNG",
     "color": "gold",
     "actor": "front",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Nghĩa là mua bữa trưa ngon miệng cũng làm ví tôi nhức nhối như bị đứt tay?",
     "text": "VÍ BỊ ĐỨT TAY?",
     "color": "ink",
     "actor": "shocked",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Đúng thế. Não coi tiêu tiền là mất an toàn, nên kích hoạt cơn đau thể xác.",
     "text": "MẤT SỰ AN TOÀN",
     "color": "red",
     "actor": "point_viewer",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Nhất là những ngày cuối tháng, lại thêm áp lực phụ giúp bố mẹ ở quê.",
     "text": "GÁNH NẶNG GIA ĐÌNH",
     "color": "ink",
     "actor": "future_tired",
     "prop": "storm_cloud"
    },
    {
     "speaker": "buff",
     "vo": "Nhìn số dư sụt giảm tức thì, tạ tinh thần của bạn tăng nặng gấp đôi.",
     "text": "TẠ TINH THẦN TĂNG ĐÔI",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": "coin_stack"
    },
    {
     "speaker": "pen",
     "vo": "Làm sao để tôi không rụt rè mỗi khi mua món đồ mình thật sự cần?",
     "text": "LÀM SAO HẾT RỤT RÈ?",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Tách sẵn một khoản tiêu theo tuần. Khi đã khoanh vùng trước, bạn cứ tiêu đúng kế hoạch.",
     "text": "KHOANH VÙNG NGÂN SÁCH",
     "color": "green",
     "actor": "34",
     "prop": "target"
    },
    {
     "speaker": "pen",
     "vo": "Nghĩa là đầu tuần tách riêng một khoản, tiền đó đã có lệnh được phép tiêu?",
     "text": "CẤP PHÉP TIÊU TIỀN",
     "color": "ink",
     "actor": "think",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn. Lên giáo án từ trước thì lúc vào hiệp đẩy tạ, chẳng việc gì phải ngại.",
     "text": "HOÀN THÀNH HIỆP ĐẨY",
     "color": "green",
     "actor": "celebrate",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "pen",
     "vo": "Cấp phép trước giúp dẹp bỏ cảm giác xót xa mỗi khi thanh toán.",
     "text": "HẾT NHÓI BUỐT",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn bài. Nhưng tiền vừa nằm yên trong tài khoản, não lại bắt đầu dựng tường rào ảo.",
     "text": "TƯỜNG RÀO ẢO TƯỞNG",
     "color": "gold",
     "actor": "hand_off",
     "prop": "brain"
    }
   ]
  },
  {
   "title": "2. Túi tiền trong đầu",
   "sources": [
    "s03"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Tôi sẵn sàng bao bạn ăn lẩu, nhưng lại tiếc tiền mua chiếc áo thun mặc nhà.",
     "text": "2. TÚI TIỀN TRONG ĐẦU",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": "coin_stack"
    },
    {
     "speaker": "buff",
     "vo": "Túi tiền tâm lý kinh điển. Não tự chia ví ảo rồi áp đặt luật lệ trái ngược nhau.",
     "text": "NHỮNG CHIẾC VÍ ẢO",
     "color": "red",
     "actor": "facepalm",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Tại sao tiền ăn uống thấy bình thường, mà sắm đồ cho bản thân lại thấy hoang phí?",
     "text": "TIÊU CHUẨN KÉP",
     "color": "ink",
     "actor": "think",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Vì ăn uống được gắn nhãn ngoại giao, còn chăm chút bản thân bị coi là ích kỷ.",
     "text": "NGOẠI GIAO HAY ÍCH KỶ",
     "color": "gold",
     "actor": "point_viewer",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Dù mọi khoản tiền đều trừ từ cùng một tài khoản ngân hàng.",
     "text": "CÙNG MỘT TÀI KHOẢN",
     "color": "ink",
     "actor": "wallet_worry",
     "prop": "smartphone_glow"
    },
    {
     "speaker": "buff",
     "vo": "Tiền nào cũng là tiền, nhưng đầu bạn lại tự gán phẩm chất đạo đức cho từng đồng.",
     "text": "ĐỒNG TIỀN ĐẠO ĐỨC",
     "color": "ink",
     "actor": "arms_crossed_no",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Làm sao gỡ bỏ các ngăn vô lý để mua đồ dùng thiết yếu mà không áy náy?",
     "text": "PHÁ VỠ NGĂN VÔ LÝ",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Lập riêng mục bảo dưỡng bản thân. Quần áo thoải mái, đệm nằm êm và thức ăn tốt là phí bảo trì.",
     "text": "CHI PHÍ BẢO TRÌ",
     "color": "green",
     "actor": "34",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Coi chăm sóc là bảo trì sẽ biến nó thành chi phí vận hành chứ không phải tự thưởng?",
     "text": "CHI PHÍ VẬN HÀNH",
     "color": "ink",
     "actor": "reading",
     "prop": "laptop_file"
    },
    {
     "speaker": "buff",
     "vo": "Xe máy cần thay dầu để chạy êm, cơ thể bạn cũng cần bảo dưỡng để không gục ngã.",
     "text": "BẢO DƯỠNG CƠ THỂ",
     "color": "green",
     "actor": "sprint_start",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Xếp việc chăm sóc bản thân vào mục bảo dưỡng giúp tôi bớt cảm giác tội lỗi.",
     "text": "BỚT THẤY CÓ LỖI",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Rất chuẩn. Nhưng xem chuyện gì xảy ra khi tiền vừa chuyển vào tài khoản tiết kiệm.",
     "text": "TIẾT KIỆM ĐÓNG BĂNG",
     "color": "gold",
     "actor": "hand_off",
     "prop": "target"
    }
   ]
  },
  {
   "title": "3. Hiệu ứng sở hữu",
   "sources": [
    "s04"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Một khi tiền đã vào sổ tiết kiệm, rút ra một ít cũng thấy như mất của.",
     "text": "3. HIỆU ỨNG SỞ HỮU",
     "color": "ink",
     "actor": "panic",
     "prop": "coin_stack"
    },
    {
     "speaker": "buff",
     "vo": "Hiệu ứng sở hữu. Khi tiền nằm yên, não biến số dư thành lãnh thổ cần cố thủ.",
     "text": "CANH GIỮ LÃNH THỔ",
     "color": "gold",
     "actor": "front",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Nên con số trên màn hình biến thành tài sản bất khả xâm phạm phải giữ chặt?",
     "text": "CỐ THỦ CON SỐ",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn luôn. Tiêu tiền thấy như thất bại vì não coi số dư như chiếc cúp vô địch.",
     "text": "BẪY CÚP VÔ ĐỊCH",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": "target"
    },
    {
     "speaker": "pen",
     "vo": "Dù đã gom tiền để đổi máy tính làm việc, lúc rút ra mua tôi vẫn thấy rất xót.",
     "text": "TIẾT KIỆM RỒI LẠI XÓT",
     "color": "ink",
     "actor": "typing_focused",
     "prop": "laptop_file"
    },
    {
     "speaker": "buff",
     "vo": "Đúng thế. Bạn chỉ muốn bám vào con số đỉnh nhất, biến tiền thành hiện vật bảo tàng.",
     "text": "TIỀN TRONG BẢO TÀNG",
     "color": "red",
     "actor": "think",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Làm sao để gỡ bỏ tâm lý cố thủ và dùng tiền đúng mục đích ban đầu?",
     "text": "DÙNG ĐÚNG MỤC ĐÍCH",
     "color": "ink",
     "actor": "wallet_worry",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Đặt hạn chót cho mục tiêu tích lũy. Đủ tiền là phải giải ngân trong hai tuần.",
     "text": "HẠN CHÓT HAI TUẦN",
     "color": "green",
     "actor": "point_viewer",
     "prop": "calendar_today"
    },
    {
     "speaker": "pen",
     "vo": "Cho bản thân hai tuần mua đồ trước khi khoản tiền đó biến thành vùng cấm địa?",
     "text": "KHUNG THỜI GIAN MUA",
     "color": "ink",
     "actor": "writing",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Hạn chót ép bạn hành động. Tiền là công cụ thực chiến, không phải huân chương để ngắm.",
     "text": "CÔNG CỤ ĐỂ SỬ DỤNG",
     "color": "green",
     "actor": "celebrate",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Thời hạn rõ ràng giúp việc tiêu tiền giống như hoàn thành nhiệm vụ thay vì mất mát.",
     "text": "HOÀN THÀNH NHIỆM VỤ",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Rất chuẩn. Nhưng kể cả khi tiền đã sẵn, bạn vẫn vướng cái bóng kỳ vọng của gia đình.",
     "text": "KỲ VỌNG GIA ĐÌNH",
     "color": "gold",
     "actor": "hand_off",
     "prop": "storm_cloud"
    }
   ]
  },
  {
   "title": "4. Né tránh tội lỗi",
   "sources": [
    "s05"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Mỗi lần sắm đôi giày đi làm, tôi lại áy náy vì nghĩ nên gửi tiền về cho bố mẹ.",
     "text": "4. NÉ TRÁNH TỘI LỖI",
     "color": "ink",
     "actor": "future_tired",
     "prop": "coin_stack"
    },
    {
     "speaker": "buff",
     "vo": "Đó là né tránh tội lỗi. Bạn bỏ bê bản thân chỉ để né tránh sự cắn rứt tưởng tượng.",
     "text": "CHẠY TRỐN ÁY NÁY",
     "color": "gold",
     "actor": "34",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Từng đồng tiêu cho bản thân khiến tôi thấy như đang bớt xén phần của bố mẹ.",
     "text": "BỚT XÉN CỦA GIA ĐÌNH",
     "color": "ink",
     "actor": "worried_heart",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Não tự vẽ ra ánh mắt thất vọng, rồi bạn tự phạt mình trước khi có ai trách móc.",
     "text": "TỰ PHẠT BẢN THÂN",
     "color": "red",
     "actor": "facepalm",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Dù bố mẹ ở quê chưa từng đòi hỏi tôi phải gửi đúng khoản tiền đó về?",
     "text": "ÁP LỰC VÔ HÌNH",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Kỳ vọng vô hình luôn nặng nhất. Bạn đang tự gánh những món nợ không ai đòi.",
     "text": "MÓN NỢ KHÔNG AI ĐÒI",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": "storm_cloud"
    },
    {
     "speaker": "pen",
     "vo": "Làm sao để vừa hỗ trợ gia đình mà vẫn lo chu toàn cho đời sống bản thân?",
     "text": "CÂN BẰNG BỔN PHẬN",
     "color": "ink",
     "actor": "think",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Gửi tiền về nhà định kỳ, rồi xem chăm sóc bản thân là bảo vệ trụ cột gia đình.",
     "text": "BẢO VỆ TRỤ CỘT",
     "color": "green",
     "actor": "point_viewer",
     "prop": "calendar_today"
    },
    {
     "speaker": "pen",
     "vo": "Chăm lo sức khỏe và công cụ làm việc giúp tôi phụng dưỡng gia đình bền bỉ hơn?",
     "text": "CHỖ DỰA BỀN BỈ",
     "color": "ink",
     "actor": "small_step",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "buff",
     "vo": "Đúng bài. Bạn vắt kiệt sức mình thì gia đình cũng mất luôn tấm lưới bảo hiểm.",
     "text": "TẤM LƯỚI AN TOÀN",
     "color": "green",
     "actor": "sprint_start",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Bảo vệ trụ cột nghĩa là tự chăm lo cho mình cũng là trách nhiệm với gia đình.",
     "text": "TRÁCH NHIỆM BẢN THÂN",
     "color": "ink",
     "actor": "meditating",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn. Dù lo xong bổn phận, thói quen tằn tiện thuở nhỏ vẫn có thể giật giỏ hàng của bạn.",
     "text": "THÓI QUEN THUỞ NHỎ",
     "color": "gold",
     "actor": "hand_off",
     "prop": "low_battery"
    }
   ]
  },
  {
   "title": "5. Tâm lý thiếu thốn",
   "sources": [
    "s06"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Dù đi làm có lương, tôi vẫn đứng tần ngần chỉ để so đo chai dầu gội đầu.",
     "text": "5. TÂM LÝ THIẾU THỐN",
     "color": "ink",
     "actor": "wallet_worry",
     "prop": "paper_mountain"
    },
    {
     "speaker": "buff",
     "vo": "Tư duy thiếu thốn. Quen cảnh chắt bóp, não coi mọi khoản chi thường nhật như tình huống khẩn cấp.",
     "text": "BIẾN CỐ KHẨN CẤP",
     "color": "gold",
     "actor": "front",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Hệ thần kinh của tôi vẫn đang gồng mình chống lại nỗi sợ thiếu tiền trong quá khứ?",
     "text": "ÁP LỰC QUÁ KHỨ",
     "color": "ink",
     "actor": "panic",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Tâm lý thiếu thốn tạo góc nhìn hẹp. Não xem chai dầu gội như mối đe dọa sinh tồn.",
     "text": "GÓC NHÌN HẠN HẸP",
     "color": "red",
     "actor": "facepalm",
     "prop": "hourglass"
    },
    {
     "speaker": "pen",
     "vo": "Tôi cắn răng đi đôi giày rẻ tiền làm đau lưng, rồi tự huyễn hoặc mình biết tiết kiệm.",
     "text": "TIẾT KIỆM SAI LẦM",
     "color": "ink",
     "actor": "future_tired",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Bẫy kinh điển. Tiếc tiền mua đồ dởm rồi tháng nào cũng thay là tiết kiệm giả tạo.",
     "text": "TIẾT KIỆM ẢO",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": "coin_stack"
    },
    {
     "speaker": "pen",
     "vo": "Làm sao để bản năng nhận ra tình hình tài chính của mình đã khấm khá hơn?",
     "text": "CẬP NHẬT THỰC TẾ",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Tập nâng tạ nhẹ trước. Tuần này thử nâng cấp một món đồ dùng nhỏ để đo phản ứng.",
     "text": "BÀI KIỂM TRA NHỎ",
     "color": "green",
     "actor": "point_viewer",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Như mua khay hoa quả tươi thay vì chọn hàng dập giảm giá cuối ngày?",
     "text": "NÂNG CẤP TỪNG CHÚT",
     "color": "ink",
     "actor": "snack",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Đúng thế. Bạn sẽ thấy tài khoản vẫn an toàn và năng lượng làm việc tăng rõ rệt.",
     "text": "SỐ DƯ VẪN AN TOÀN",
     "color": "green",
     "actor": "celebrate",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "pen",
     "vo": "Thử nghiệm nhỏ giúp não nhận ra chi thêm chút đỉnh không hề làm tôi phá sản.",
     "text": "KHÔNG HỀ PHÁ SẢN",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Đúng thế. Nhưng vừa mua đồ tốt hơn, giọng nói khác lại chê bạn đang đua đòi.",
     "text": "TIẾNG NÓI ĐUA ĐÒI",
     "color": "gold",
     "actor": "hand_off",
     "prop": "target"
    }
   ]
  },
  {
   "title": "6. Tự đánh giá mình",
   "sources": [
    "s07"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Mua chiếc áo khoác tươm tất một chút, tôi liền sợ mình biến thành kẻ đua đòi.",
     "text": "6. TỰ ĐÁNH GIÁ MÌNH",
     "color": "ink",
     "actor": "shocked",
     "prop": "smartphone_glow"
    },
    {
     "speaker": "buff",
     "vo": "Tự phát tín hiệu. Bạn coi hóa đơn như phiếu bé ngoan để chứng minh mình khiêm tốn.",
     "text": "SỔ LIÊN LẠC ĐẠO ĐỨC",
     "color": "gold",
     "actor": "34",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Hóa ra tôi nghĩ co ro trong manh áo mỏng là bằng chứng của ý chí kiên cường?",
     "text": "CHỊU KHỔ LÀ ĐỨC HẠNH?",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Bạn nhầm thiếu thốn với phẩm giá. Ép mình chịu khổ vô ích không làm bạn tốt hơn.",
     "text": "CHỊU KHỔ VÔ NGHĨA",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Đúng thật. Tôi cứ nghĩ tự làm khổ mình mới là minh chứng cho tính kỷ luật.",
     "text": "KỶ LUẬT HAY KHẮC KHỔ",
     "color": "ink",
     "actor": "think",
     "prop": "dumbbell"
    },
    {
     "speaker": "buff",
     "vo": "Nhầm to. Kỷ luật là nạp năng lượng cho vận động viên, chứ không phải bỏ đói cơ bắp.",
     "text": "NẠP ĐỦ NĂNG LƯỢNG",
     "color": "green",
     "actor": "point_viewer",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Làm sao tách lòng tự trọng ra khỏi việc xem mình chịu khổ giỏi đến mức nào?",
     "text": "TÁCH BIỆT TỰ TRỌNG",
     "color": "ink",
     "actor": "nervous_wave",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Hãy kiểm tra công năng. Món đồ bảo vệ sức khỏe hay tiết kiệm thời gian là chi phí đầu tư.",
     "text": "KIỂM TRA CÔNG NĂNG",
     "color": "green",
     "actor": "sprint_start",
     "prop": "target"
    },
    {
     "speaker": "pen",
     "vo": "Mua chiếc áo ấm tử tế chỉ là trang bị cho bản thân làm việc, chứ không phải tha hóa?",
     "text": "TRANG BỊ LÀM VIỆC",
     "color": "ink",
     "actor": "reading",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chẳng ai chạy bộ bằng dép lê để tỏ ra khiêm tốn. Bạn cần giày tốt để về đích.",
     "text": "ĐẦU TƯ ĐỂ VỀ ĐÍCH",
     "color": "green",
     "actor": "celebrate",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "pen",
     "vo": "Coi đồ tốt là công cụ giúp tôi ngừng đánh đồng sự chịu khổ với đạo đức.",
     "text": "KHÔNG ĐÁNH ĐỒNG KHỔ",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn. Nhưng lúc quét mã, cảm xúc bốc đồng vẫn muốn chạy nhanh hơn lý trí của bạn.",
     "text": "CẢM XÚC VƯỢT LÝ TRÍ",
     "color": "gold",
     "actor": "hand_off",
     "prop": "alarm_clock"
    }
   ]
  },
  {
   "title": "7. Đoán mò cảm xúc",
   "sources": [
    "s08"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Vừa thấy mức giá tiền triệu là cơn giật mình ập đến trước khi tôi kịp tính toán.",
     "text": "7. ĐOÁN MÒ CẢM XÚC",
     "color": "ink",
     "actor": "panic",
     "prop": "smartphone_glow"
    },
    {
     "speaker": "buff",
     "vo": "Định kiến cảm xúc. Bạn thay phép tính giá trị bằng phản xạ sợ hãi tức thì.",
     "text": "SỢ HÃI BỘT PHÁT",
     "color": "gold",
     "actor": "front",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Thay vì hỏi món đồ giúp tiết kiệm bao nhiêu giờ, tôi lại thấy tội lỗi rồi bỏ chạy?",
     "text": "SỢ HÃI RỒI BỎ CHẠY",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": "hourglass"
    },
    {
     "speaker": "buff",
     "vo": "Não đi đường tắt lười biếng. Nỗi sợ thoáng qua đánh lừa bạn rằng món đồ đó lãng phí.",
     "text": "ĐƯỜNG TẮT LƯỜI BIẾNG",
     "color": "red",
     "actor": "hand_off",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Rồi tôi phí cả ngày nghỉ vật lộn với đồ đạc hỏng vì để nỗi lo quyết định hộ.",
     "text": "PHÍ CẢ NGÀY NGHỈ",
     "color": "ink",
     "actor": "future_tired",
     "prop": "storm_cloud"
    },
    {
     "speaker": "buff",
     "vo": "Kim la bàn cảm xúc của bạn đang lệch về nỗi sợ, thay vì hiệu quả thực tế.",
     "text": "LA BÀN BỊ LỆCH",
     "color": "red",
     "actor": "arms_crossed_no",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Làm sao để bình tĩnh tính toán giá trị thực tế thay vì cứ hoảng sợ?",
     "text": "TÍNH TOÁN LỢI ÍCH",
     "color": "ink",
     "actor": "think",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Hãy tính chi phí theo số lần dùng. Lấy giá tiền chia cho số ngày bạn sử dụng.",
     "text": "CHIA THEO SỐ NGÀY",
     "color": "green",
     "actor": "point_viewer",
     "prop": "calendar_today"
    },
    {
     "speaker": "pen",
     "vo": "Nếu chiếc đèn bàn tốt giúp bảo vệ mắt khi làm việc, tính ra mỗi ngày chỉ tốn vài nghìn?",
     "text": "VÀI NGHÌN MỖI NGÀY",
     "color": "ink",
     "actor": "typing_focused",
     "prop": "laptop_file"
    },
    {
     "speaker": "buff",
     "vo": "Biết tính toán rồi đấy. Con số rõ ràng thì nỗi sợ tự khắc bay màu.",
     "text": "SỐ LIỆU ĐUỔI NỖI SỢ",
     "color": "green",
     "actor": "celebrate",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "pen",
     "vo": "Chia chi phí theo ngày giúp dập tắt cơn hoảng sợ và để lý trí quyết định.",
     "text": "LÝ TRÍ LÊN TIẾNG",
     "color": "ink",
     "actor": "small_step",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Cắt cơn sợ rồi. Nhưng bạn vẫn tin mù quáng rằng nghỉ ngơi hôm nay là đánh cắp ngày mai.",
     "text": "NIỀM TIN ĐỘC HẠI",
     "color": "gold",
     "actor": "hand_off",
     "prop": "target"
    }
   ]
  },
  {
   "title": "8. Tổng bằng không",
   "sources": [
    "s09"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Cứ mỗi lần chi tiền đi nghỉ ngơi, tôi lại thấy như đang ăn lạm vào tương lai.",
     "text": "8. TỔNG BẰNG KHÔNG",
     "color": "ink",
     "actor": "coffee",
     "prop": "coffee_mug"
    },
    {
     "speaker": "buff",
     "vo": "Bẫy tổng bằng không. Bạn tưởng tiền nạp pin hôm nay sẽ làm ngày mai khánh kiệt.",
     "text": "ẢO TƯỞNG SẠT NGHIỆP",
     "color": "gold",
     "actor": "arms_crossed_no",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Cứ ngỡ tự cho mình một buổi chiều nghỉ ngơi là tương lai sẽ sụp đổ ngay.",
     "text": "TƯƠNG LAI SỤP ĐỔ?",
     "color": "ink",
     "actor": "worried_heart",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Phép tính độc hại. Vắt kiệt bản thân hôm nay không giúp ngày mai bạn giàu hơn.",
     "text": "PHÉP TÍNH ĐỘC HẠI",
     "color": "red",
     "actor": "facepalm",
     "prop": "storm_cloud"
    },
    {
     "speaker": "pen",
     "vo": "Thực tế là khi kiệt sức vì kiêng khem, tôi hay cáu kỉnh và làm việc kém hẳn.",
     "text": "KIỆT SỨC VÀ CÁU GẮT",
     "color": "ink",
     "actor": "future_tired",
     "prop": "low_battery"
    },
    {
     "speaker": "buff",
     "vo": "Pin cạn thì máy móc nào chạy được. Ép xác triền miên chỉ phá hỏng năng suất đường dài.",
     "text": "HẾT PIN THÌ ĐỨNG BÓNG",
     "color": "red",
     "actor": "point_viewer",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Làm sao đổi góc nhìn, xem việc nghỉ ngơi hồi phục là một khoản đầu tư?",
     "text": "NGHỈ NGƠI LÀ ĐẦU TƯ",
     "color": "ink",
     "actor": "confused_shrug",
     "prop": null
    },
    {
     "speaker": "buff",
     "vo": "Coi hồi phục là nhiên liệu thiết yếu. Động cơ cạn dầu thì không thể chạy bền.",
     "text": "NHIÊN LIỆU BẮT BUỘC",
     "color": "green",
     "actor": "sprint_start",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Khi sức khỏe và sự tập trung phục hồi, khả năng kiếm tiền của tôi sẽ tăng lên.",
     "text": "TĂNG SỨC KIẾM TIỀN",
     "color": "ink",
     "actor": "small_step",
     "prop": "checkbox_tick"
    },
    {
     "speaker": "buff",
     "vo": "Vận động viên ăn đủ mới chạy nhanh. Nhịn đói trên đường đua thì không có cúp đâu.",
     "text": "ĂN ĐỦ MỚI CHẠY BỀN",
     "color": "green",
     "actor": "celebrate",
     "prop": null
    },
    {
     "speaker": "pen",
     "vo": "Đổ đầy bình xăng giúp tôi có đủ năng lượng để tiếp tục phấn đấu lâu dài.",
     "text": "ĐỔ ĐẦY BÌNH XĂNG",
     "color": "ink",
     "actor": "think",
     "prop": "lightbulb"
    },
    {
     "speaker": "buff",
     "vo": "Hiểu toàn bộ bài tập rồi đấy. Giờ cùng chốt giáo án rèn luyện hàng ngày nào.",
     "text": "KHÓA GIÁO ÁN HÔM NAY",
     "color": "gold",
     "actor": "hand_off",
     "prop": "target"
    }
   ]
  },
  {
   "title": "Đặt lại cảm xúc",
   "sources": [
    "s10"
   ],
   "lines": [
    {
     "speaker": "pen",
     "vo": "Nhìn lại tám cái bẫy này, áy náy khi tiêu tiền chưa từng là thước đo khôn ngoan.",
     "text": "ĐẶT LẠI CẢM XÚC",
     "color": "ink",
     "actor": "reading",
     "prop": "laptop_file"
    },
    {
     "speaker": "buff",
     "vo": "Ba động tác chính: khoanh vùng tiêu vặt, coi cơ thể như cỗ máy, và ngừng tôn vinh chịu khổ.",
     "text": "BA ĐỘNG TÁC CỐT LÕI",
     "color": "gold",
     "actor": "34",
     "prop": "brain"
    },
    {
     "speaker": "pen",
     "vo": "Tiền không phải bảng điểm đạo đức, nó là nhiên liệu để cuộc sống vận hành trơn tru.",
     "text": "NHIÊN LIỆU CUỘC SỐNG",
     "color": "ink",
     "actor": "small_step",
     "prop": "coin_stack"
    },
    {
     "speaker": "buff",
     "vo": "Chuẩn. Thử thách bảy ngày: mua một món đồ nhỏ giúp cuộc sống hàng ngày tiện lợi hơn.",
     "text": "THỬ THÁCH BẢY NGÀY",
     "color": "green",
     "actor": "point_viewer",
     "prop": "calendar_today"
    },
    {
     "speaker": "pen",
     "vo": "Bữa trưa tươm tất, đôi tất êm, hay ly cà phê ngon mà không cần áy náy với ai?",
     "text": "MỘT BỮA TRƯA TƯƠM TẤT",
     "color": "ink",
     "actor": "coffee",
     "prop": "coffee_mug"
    },
    {
     "speaker": "buff",
     "vo": "Chính xác. Một hiệp đẩy chuẩn để hệ thần kinh nhận ra bạn vẫn hoàn toàn an toàn.",
     "text": "MỘT NHỊP ĐẨY CHUẨN",
     "color": "green",
     "actor": "sprint_start",
     "prop": "dumbbell"
    },
    {
     "speaker": "pen",
     "vo": "Nếu nội dung này giúp bạn nhẹ lòng hơn, hãy đăng ký kênh để rèn luyện thói quen mới.",
     "text": "ĐĂNG KÝ KÊNH NHÉ",
     "color": "ink",
     "actor": "celebrate",
     "prop": "notification_bell"
    },
    {
     "speaker": "buff",
     "vo": "Đừng coi nhu cầu cơ bản là khoản chi phạm luật. Nạp nhiên liệu đi, hẹn gặp ở hiệp sau.",
     "text": "HẸN GẶP Ở HIỆP SAU",
     "color": "gold",
     "actor": "hand_off",
     "prop": null
    }
   ]
  }
 ]
}

with open('test_output.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=1)

print("Saved test_output.json")
