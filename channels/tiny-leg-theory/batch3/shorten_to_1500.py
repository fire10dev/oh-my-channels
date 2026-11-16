import json

with open('test_output.json') as f:
    d = json.load(f)

# Let's map lines to punchier, natural spoken Vietnamese versions
# Target: ~13-15 words per line, natural tone
shortened = {
    # Ch 0
    "Quẹt thẻ trả bữa trưa ngon miệng, nhìn số dư lại thấy có lỗi với tương lai.":
        "Quẹt thẻ trả bữa trưa ngon, nhìn số dư lại thấy có lỗi với tương lai.",
    "Chuẩn luôn bạn ơi. Tiền tự cày ra, nhưng não lại báo động như vừa đi cướp.":
        "Chuẩn luôn bạn. Tiền tự cày ra, nhưng não báo động như vừa đi cướp.",
    "Sao tự sắm chút tiện nghi lại thấy ích kỷ và có lỗi với gia đình thế nhỉ?":
        "Sao tự sắm chút tiện nghi lại thấy ích kỷ và có lỗi với gia đình?",
    "Vì bản năng sinh tồn biến việc tự chăm sóc thành mối nguy đạo đức nghiêm trọng.":
        "Bản năng sinh tồn biến việc tự chăm sóc thành mối nguy đạo đức nghiêm trọng.",
    "Làm sao tiêu tiền mình làm ra mà lòng không cắn rứt từng cơn hả Buff?":
        "Làm sao tiêu tiền mình làm ra mà lòng không cắn rứt hả Buff?",
    "Có tám cái bẫy ngầm đang khóa ví bạn. Khởi động đi, ta sẽ bẻ gãy từng cái.":
        "Có tám cái bẫy ngầm khóa ví bạn. Khởi động đi, ta bẻ gãy từng cái.",
    "Vào bài tập đầu tiên đi, chứ mỗi lần quét mã là ruột gan tôi lại thắt lại.":
        "Vào bài đầu tiên đi, chứ mỗi lần quét mã là ruột gan tôi thắt lại.",

    # Ch 1
    "Mỗi lần rút ví hay mở ứng dụng xem số dư là tôi lại thót tim.":
        "Mỗi lần rút ví hay mở ứng dụng xem số dư là tôi thót tim.",
    "Cơn đau đó có thật. Não bộ coi tiền rời ví như vết thương thể xác.":
        "Cơn đau đó có thật. Não coi tiền rời ví như vết thương thể xác.",
    "Nghĩa là mua bữa trưa ngon miệng cũng làm ví tôi nhức nhối như bị đứt tay?":
        "Nghĩa là mua bữa trưa ngon cũng làm ví nhức nhối như đứt tay?",
    "Đúng thế. Não coi tiêu tiền là mất an toàn, nên kích hoạt cơn đau thể xác.":
        "Đúng thế. Não coi tiêu tiền là mất an toàn, kích hoạt cơn đau thể xác.",
    "Nhất là những ngày cuối tháng, lại thêm áp lực phụ giúp bố mẹ ở quê.":
        "Nhất là ngày cuối tháng, lại thêm áp lực phụ giúp bố mẹ ở quê.",
    "Nhìn số dư sụt giảm tức thì, tạ tinh thần của bạn tăng nặng gấp đôi.":
        "Nhìn số dư sụt giảm, mức tạ tinh thần của bạn tăng nặng gấp đôi.",
    "Làm sao để tôi không rụt rè mỗi khi mua món đồ mình thật sự cần?":
        "Làm sao để tôi không rụt rè khi mua món đồ mình thật sự cần?",
    "Tách sẵn một khoản tiêu theo tuần. Khi đã khoanh vùng trước, bạn cứ tiêu đúng kế hoạch.":
        "Tách riêng khoản tiêu theo tuần. Khoanh vùng trước thì bạn cứ tiêu đúng kế hoạch.",
    "Nghĩa là đầu tuần tách riêng một khoản, tiền đó đã có lệnh được phép tiêu?":
        "Nghĩa là đầu tuần tách riêng khoản đó, tiền đã có lệnh được phép tiêu?",
    "Chuẩn. Lên giáo án từ trước thì lúc vào hiệp đẩy tạ, chẳng việc gì phải ngại.":
        "Chuẩn. Lên giáo án trước thì vào hiệp đẩy tạ, chẳng việc gì phải ngại.",
    "Cấp phép trước giúp dẹp bỏ cảm giác xót xa mỗi khi thanh toán.":
        "Cấp phép trước giúp dẹp bỏ cảm giác xót xa khi thanh toán.",
    "Chuẩn bài. Nhưng tiền vừa nằm yên trong tài khoản, não lại bắt đầu dựng tường rào ảo.":
        "Chuẩn bài. Nhưng tiền nằm yên trong tài khoản, não lại dựng tường rào ảo.",

    # Ch 2
    "Tôi sẵn sàng bao bạn ăn lẩu, nhưng lại tiếc tiền mua chiếc áo thun mặc nhà.":
        "Tôi sẵn sàng bao bạn ăn lẩu, nhưng lại tiếc tiền mua áo thun mặc nhà.",
    "Túi tiền tâm lý. Não tự chia ví ảo rồi áp đặt luật lệ trái ngược nhau.":
        "Túi tiền tâm lý. Não tự chia ví ảo rồi áp đặt luật lệ trái ngược.",
    "Tại sao tiền ăn uống thấy bình thường, mà sắm đồ cho bản thân lại thấy hoang phí?":
        "Sao tiền ăn uống thấy bình thường, mà sắm đồ cho mình lại thấy hoang phí?",
    "Vì ăn uống được gắn nhãn ngoại giao, còn chăm chút bản thân bị coi là ích kỷ.":
        "Vì ăn uống gắn nhãn ngoại giao, còn chăm chút bản thân bị coi là ích kỷ.",
    "Dù mọi khoản tiền đều trừ từ cùng một tài khoản ngân hàng.":
        "Dù mọi khoản tiền đều trừ từ cùng một tài khoản ngân hàng.",
    "Tiền nào cũng là tiền, nhưng đầu bạn lại tự gán phẩm chất đạo đức cho từng đồng.":
        "Tiền nào cũng là tiền, nhưng đầu bạn tự gán đạo đức cho từng đồng.",
    "Làm sao gỡ bỏ các ngăn vô lý để mua đồ dùng thiết yếu mà không áy náy?":
        "Làm sao gỡ ngăn vô lý để mua đồ thiết yếu mà không áy náy?",
    "Lập mục bảo dưỡng bản thân. Quần áo thoải mái, đệm êm và thức ăn sạch là phí bảo trì.":
        "Lập mục bảo dưỡng bản thân. Quần áo tốt, đệm êm và đồ ăn sạch là phí bảo trì.",
    "Coi chăm sóc là bảo trì sẽ biến nó thành phí vận hành thay vì tự thưởng?":
        "Coi chăm sóc là bảo trì biến nó thành phí vận hành thay vì tự thưởng?",
    "Xe máy cần thay nhớt để chạy, cơ thể cũng cần bảo dưỡng để không gục ngã.":
        "Xe máy cần thay nhớt để chạy, cơ thể cũng cần bảo dưỡng để không gục ngã.",
    "Xếp việc chăm sóc bản thân vào mục bảo dưỡng giúp tôi bớt cảm giác tội lỗi.":
        "Xếp việc chăm sóc mình vào mục bảo dưỡng giúp tôi bớt cảm giác tội lỗi.",
    "Rất chuẩn. Nhưng xem chuyện gì xảy ra khi tiền vừa chuyển vào tài khoản tiết kiệm.":
        "Rất chuẩn. Nhưng xem chuyện gì xảy ra khi tiền chuyển vào tài khoản tiết kiệm.",

    # Ch 3
    "Một khi tiền đã vào sổ tiết kiệm, rút ra một ít cũng thấy như mất của.":
        "Tiền đã vào sổ tiết kiệm, rút ra một ít cũng thấy như mất của.",
    "Hiệu ứng sở hữu. Khi tiền nằm yên, não biến số dư thành lãnh thổ cần cố thủ.":
        "Hiệu ứng sở hữu. Khi tiền nằm yên, não biến số dư thành lãnh thổ cố thủ.",
    "Nên con số trên màn hình biến thành tài sản bất khả xâm phạm phải giữ chặt?":
        "Nên con số trên màn hình biến thành tài sản bất khả xâm phạm phải giữ?",
    "Chuẩn luôn. Tiêu tiền thấy như thất bại vì não coi số dư như chiếc cúp vô địch.":
        "Chuẩn luôn. Tiêu tiền thấy như thất bại vì não coi số dư như cúp vô địch.",
    "Dù gom tiền đổi máy tính làm việc, lúc rút ra mua tôi vẫn thấy rất xót.":
        "Dù gom tiền đổi máy tính làm việc, lúc rút ra mua tôi vẫn rất xót.",
    "Đúng thế. Bạn chỉ muốn bám vào con số đỉnh nhất, biến tiền thành hiện vật bảo tàng.":
        "Đúng thế. Bạn bám vào con số cao nhất, biến tiền thành hiện vật bảo tàng.",
    "Làm sao để gỡ bỏ tâm lý cố thủ và dùng tiền đúng mục đích ban đầu?":
        "Làm sao gỡ bỏ tâm lý cố thủ để dùng tiền đúng mục đích ban đầu?",
    "Đặt hạn chót cho mục tiêu tích lũy. Đủ tiền là phải giải ngân trong hai tuần.":
        "Đặt hạn chót cho mục tiêu tích lũy. Đủ tiền là giải ngân trong hai tuần.",
    "Cho bản thân hai tuần mua đồ trước khi khoản tiền đó biến thành vùng cấm địa?":
        "Cho bản thân hai tuần mua đồ trước khi tiền biến thành vùng cấm địa?",
    "Hạn chót ép bạn hành động. Tiền là công cụ thực chiến, không phải huân chương để ngắm.":
        "Hạn chót ép bạn hành động. Tiền là công cụ thực chiến, không phải huân chương để ngắm.",
    "Thời hạn rõ ràng giúp việc tiêu tiền giống như hoàn thành nhiệm vụ thay vì mất mát.":
        "Thời hạn rõ ràng giúp việc tiêu tiền như hoàn thành nhiệm vụ thay vì mất mát.",
    "Rất chuẩn. Nhưng tiền đã sẵn thì bạn vẫn vướng bóng kỳ vọng từ gia đình.":
        "Rất chuẩn. Nhưng tiền đã sẵn, bạn vẫn vướng cái bóng kỳ vọng từ gia đình.",

    # Ch 4
    "Mỗi lần sắm đôi giày đi làm, tôi lại áy náy vì nghĩ nên gửi tiền về nhà.":
        "Mỗi lần sắm đôi giày đi làm, tôi lại áy náy vì nghĩ nên gửi về nhà.",
    "Đó là né tránh tội lỗi. Bạn bỏ bê bản thân chỉ để né sự cắn rứt tưởng tượng.":
        "Đó là né tránh tội lỗi. Bỏ bê bản thân chỉ để né sự cắn rứt tưởng tượng.",
    "Từng đồng tiêu cho bản thân khiến tôi thấy như đang bớt xén phần của bố mẹ.":
        "Từng đồng tiêu cho bản thân khiến tôi thấy như bớt xén phần của bố mẹ.",
    "Não tự vẽ ra ánh mắt thất vọng, rồi bạn tự phạt mình trước khi ai trách.":
        "Não tự vẽ ra ánh mắt thất vọng, rồi bạn tự phạt mình trước khi ai trách.",
    "Dù bố mẹ ở quê chưa từng đòi hỏi tôi phải gửi đúng khoản tiền đó về?":
        "Dù bố mẹ ở quê chưa từng đòi tôi phải gửi đúng khoản tiền đó về?",
    "Kỳ vọng vô hình luôn nặng nhất. Bạn đang tự gánh những món nợ không ai đòi.":
        "Kỳ vọng vô hình luôn nặng nhất. Bạn đang tự gánh món nợ không ai đòi.",
    "Làm sao để vừa hỗ trợ gia đình mà vẫn lo chu toàn cho đời sống bản thân?":
        "Làm sao để vừa hỗ trợ gia đình mà vẫn lo chu toàn đời sống bản thân?",
    "Gửi tiền về nhà trước, rồi xem chăm sóc bản thân là bảo vệ trụ cột gia đình.":
        "Gửi tiền về nhà trước, rồi xem chăm sóc bản thân là bảo vệ trụ cột gia đình.",
    "Chăm lo sức khỏe và công cụ làm việc giúp tôi phụng dưỡng gia đình bền bỉ hơn?":
        "Chăm sóc sức khỏe và công cụ làm việc giúp tôi phụng dưỡng gia đình bền hơn?",
    "Đúng bài. Bạn vắt kiệt sức mình thì gia đình cũng mất luôn tấm lưới bảo hiểm.":
        "Đúng bài. Bạn vắt kiệt sức mình thì gia đình mất luôn tấm lưới an toàn.",
    "Bảo vệ trụ cột nghĩa là tự chăm lo cho mình cũng là trách nhiệm với gia đình.":
        "Bảo vệ trụ cột nghĩa là chăm sóc mình cũng là trách nhiệm với gia đình.",
    "Chuẩn. Lo xong bổn phận rồi, thói quen tằn tiện thuở nhỏ vẫn có thể giật giỏ hàng bạn.":
        "Chuẩn. Lo xong bổn phận, thói quen tằn tiện thuở nhỏ vẫn có thể giật giỏ hàng bạn.",

    # Ch 5
    "Dù đi làm có lương, tôi vẫn đứng tần ngần chỉ để so đo chai dầu gội đầu.":
        "Dù đi làm có lương, tôi vẫn đứng tần ngần so đo chai dầu gội đầu.",
    "Tư duy thiếu thốn. Quen cảnh chắt bóp, não coi mọi khoản chi thường ngày như việc khẩn cấp.":
        "Tư duy thiếu thốn. Quen chắt bóp, não coi khoản chi thường ngày như việc khẩn cấp.",
    "Hệ thần kinh của tôi vẫn đang gồng mình chống lại nỗi sợ thiếu tiền trong quá khứ?":
        "Hệ thần kinh của tôi vẫn đang gồng mình chống lại nỗi sợ thiếu tiền quá khứ?",
    "Thiếu thốn tạo góc nhìn hẹp. Não xem chai dầu gội như đe dọa sinh tồn.":
        "Thiếu thốn tạo góc nhìn hẹp. Não xem chai dầu gội như đe dọa sinh tồn.",
    "Tôi cắn răng đi đôi giày rẻ làm đau lưng, rồi tự huyễn hoặc mình biết tiết kiệm.":
        "Tôi cắn răng đi đôi giày rẻ làm đau lưng, rồi nghĩ mình biết tiết kiệm.",
    "Bẫy kinh điển. Tiếc tiền mua đồ dởm rồi tháng nào cũng thay là tiết kiệm giả tạo.":
        "Bẫy kinh điển. Tiếc tiền mua đồ dởm rồi tháng nào cũng thay là tiết kiệm ảo.",
    "Làm sao để bản năng nhận ra tình hình tài chính của mình đã khấm khá hơn?":
        "Làm sao để bản năng nhận ra tài chính của mình đã khấm khá hơn?",
    "Nâng tạ nhẹ trước. Tuần này thử nâng cấp một món đồ nhỏ để đo phản ứng.":
        "Nâng tạ nhẹ trước. Tuần này thử nâng cấp một món đồ nhỏ để đo phản ứng.",
    "Như mua khay hoa quả tươi thay vì chọn hàng dập giảm giá cuối ngày?":
        "Như mua khay hoa quả tươi thay vì chọn hàng dập giảm giá cuối ngày?",
    "Đúng thế. Bạn sẽ thấy tài khoản vẫn an toàn và năng lượng làm việc tăng rõ rệt.":
        "Đúng thế. Bạn sẽ thấy tài khoản vẫn an toàn, năng lượng làm việc tăng rõ.",
    "Thử nghiệm nhỏ giúp não nhận ra chi thêm chút đỉnh không hề làm tôi phá sản.":
        "Thử nghiệm nhỏ giúp não nhận ra chi thêm chút tiền không làm tôi phá sản.",
    "Đúng thế. Nhưng vừa mua đồ tốt hơn, giọng nói khác lại chê bạn đang đua đòi.":
        "Đúng thế. Nhưng vừa mua đồ tốt hơn, giọng nói khác lại bảo bạn đua đòi.",

    # Ch 6
    "Mua chiếc áo khoác tươm tất một chút, tôi liền sợ mình biến thành kẻ đua đòi.":
        "Mua chiếc áo khoác tươm tất một chút, tôi sợ mình biến thành kẻ đua đòi.",
    "Tự phát tín hiệu. Bạn coi hóa đơn như phiếu bé ngoan để chứng minh mình khiêm tốn.":
        "Tự phát tín hiệu. Bạn coi hóa đơn như phiếu bé ngoan để chứng minh khiêm tốn.",
    "Hóa ra tôi nghĩ co ro trong manh áo mỏng là bằng chứng của ý chí kiên cường?":
        "Hóa ra tôi nghĩ co ro trong áo mỏng là bằng chứng của ý chí kiên cường?",
    "Bạn nhầm thiếu thốn với phẩm giá. Ép mình chịu khổ vô ích không làm bạn tốt hơn.":
        "Nhầm thiếu thốn với phẩm giá. Ép mình chịu khổ vô ích không làm bạn tốt hơn.",
    "Đúng thật. Tôi cứ nghĩ tự làm khổ mình mới là minh chứng cho tính kỷ luật.":
        "Đúng thật. Tôi cứ nghĩ tự làm khổ mình mới là minh chứng cho tính kỷ luật.",
    "Nhầm to. Kỷ luật là tiếp sức cho vận động viên, không phải bỏ đói cơ bắp.":
        "Nhầm to. Kỷ luật là tiếp sức cho vận động viên, không phải bỏ đói cơ bắp.",
    "Làm sao tách lòng tự trọng ra khỏi việc xem mình chịu khổ giỏi đến mức nào?":
        "Làm sao tách tự trọng ra khỏi việc xem mình chịu khổ giỏi đến mức nào?",
    "Kiểm tra công năng đi. Món đồ bảo vệ sức khỏe hay tiết kiệm thời gian là khoản đầu tư.":
        "Kiểm tra công năng đi. Đồ bảo vệ sức khỏe hay tiết kiệm thời gian là khoản đầu tư.",
    "Mua chiếc áo ấm chỉ là trang bị cho mình làm việc, chứ không phải tha hóa?":
        "Mua chiếc áo ấm chỉ là trang bị làm việc, chứ không phải tha hóa?",
    "Chẳng ai chạy bằng dép lê để tỏ ra khiêm tốn. Cần giày tốt để về đích.":
        "Chẳng ai chạy bằng dép lê để tỏ ra khiêm tốn. Cần giày tốt để về đích.",
    "Coi đồ tốt là công cụ giúp tôi ngừng đánh đồng sự chịu khổ với đạo đức.":
        "Coi đồ tốt là công cụ giúp tôi ngừng đánh đồng chịu khổ với đạo đức.",
    "Chuẩn. Nhưng lúc quét mã, cảm xúc bốc đồng vẫn muốn chạy nhanh hơn lý trí của bạn.":
        "Chuẩn. Lúc quét mã, cảm xúc bốc đồng vẫn muốn chạy nhanh hơn lý trí bạn.",

    # Ch 7
    "Vừa thấy mức giá tiền triệu là cơn giật mình ập đến trước khi tôi kịp tính toán.":
        "Vừa thấy mức giá tiền triệu là giật mình ập đến trước khi kịp tính toán.",
    "Định kiến cảm xúc. Bạn thay phép tính giá trị bằng phản xạ sợ hãi tức thì.":
        "Định kiến cảm xúc. Bạn thay phép tính giá trị bằng phản xạ sợ hãi tức thì.",
    "Thay vì hỏi đồ dùng tiết kiệm bao nhiêu giờ, tôi lại thấy tội lỗi rồi bỏ chạy?":
        "Thay vì hỏi đồ dùng tiết kiệm bao nhiêu giờ, tôi thấy tội lỗi rồi bỏ chạy?",
    "Não đi đường tắt. Nỗi sợ thoáng qua đánh lừa rằng món đồ đó rất lãng phí.":
        "Não đi đường tắt. Nỗi sợ thoáng qua đánh lừa rằng món đồ đó rất lãng phí.",
    "Rồi tôi phí cả ngày nghỉ vật lộn với đồ hỏng vì để nỗi lo quyết định hộ.":
        "Rồi tôi phí cả ngày nghỉ vật lộn với đồ hỏng vì để nỗi lo quyết định hộ.",
    "Kim la bàn cảm xúc của bạn đang lệch về nỗi sợ, thay vì hiệu quả thực tế.":
        "Kim la bàn cảm xúc của bạn đang lệch về nỗi sợ thay vì hiệu quả thực tế.",
    "Làm sao để bình tĩnh tính toán giá trị thực tế thay vì cứ hoảng sợ?":
        "Làm sao bình tĩnh tính toán giá trị thực tế thay vì cứ hoảng sợ?",
    "Hãy tính chi phí theo số lần dùng. Lấy giá tiền chia cho số ngày bạn sử dụng.":
        "Tính chi phí theo số lần dùng. Lấy giá tiền chia cho số ngày bạn sử dụng.",
    "Nếu chiếc đèn tốt bảo vệ mắt khi làm việc, tính ra mỗi ngày chỉ tốn vài nghìn?":
        "Nếu chiếc đèn tốt bảo vệ mắt khi làm việc, tính ra mỗi ngày chỉ tốn vài nghìn?",
    "Biết tính toán rồi đấy. Con số rõ ràng thì nỗi sợ tự khắc bay màu.":
        "Biết tính toán rồi đấy. Con số rõ ràng thì nỗi sợ tự khắc bay màu.",
    "Chia chi phí theo ngày giúp dập tắt cơn hoảng sợ và để lý trí quyết định.":
        "Chia chi phí theo ngày giúp dập tắt hoảng sợ và để lý trí quyết định.",
    "Cắt cơn sợ rồi. Nhưng bạn vẫn tin rằng nghỉ ngơi hôm nay là đánh cắp ngày mai.":
        "Cắt cơn sợ rồi. Nhưng bạn vẫn tin nghỉ ngơi hôm nay là đánh cắp ngày mai.",

    # Ch 8
    "Cứ mỗi lần chi tiền đi nghỉ ngơi, tôi lại thấy như đang ăn lạm vào tương lai.":
        "Cứ mỗi lần chi tiền nghỉ ngơi, tôi lại thấy như đang ăn lạm vào tương lai.",
    "Bẫy tổng bằng không. Bạn tưởng tiền nạp pin hôm nay sẽ làm ngày mai khánh kiệt.":
        "Bẫy tổng bằng không. Bạn tưởng nạp pin hôm nay sẽ làm ngày mai khánh kiệt.",
    "Cứ ngỡ tự cho mình một buổi chiều nghỉ ngơi là tương lai sẽ sụp đổ ngay.":
        "Cứ ngỡ cho mình một buổi chiều nghỉ ngơi là tương lai sẽ sụp đổ ngay.",
    "Phép tính độc hại. Vắt kiệt bản thân hôm nay không giúp ngày mai bạn giàu hơn.":
        "Phép tính độc hại. Vắt kiệt mình hôm nay không giúp ngày mai bạn giàu hơn.",
    "Thực tế là khi kiệt sức vì kiêng khem, tôi hay cáu kỉnh và làm việc kém hẳn.":
        "Thực tế là khi kiệt sức vì kiêng khem, tôi hay cáu và làm việc kém hẳn.",
    "Pin cạn thì máy nào chạy được. Ép xác triền miên chỉ phá hỏng năng suất đường dài.":
        "Pin cạn thì máy nào chạy được. Ép xác chỉ phá hỏng năng suất đường dài.",
    "Làm sao đổi góc nhìn, xem việc nghỉ ngơi hồi phục là một khoản đầu tư?":
        "Làm sao đổi góc nhìn, xem việc nghỉ ngơi hồi phục là khoản đầu tư?",
    "Coi hồi phục là nhiên liệu thiết yếu. Động cơ cạn dầu thì không thể chạy bền.":
        "Coi hồi phục là nhiên liệu thiết yếu. Động cơ cạn dầu không thể chạy bền.",
    "Khi sức khỏe và sự tập trung phục hồi, khả năng kiếm tiền của tôi sẽ tăng lên.":
        "Khi sức khỏe và tập trung phục hồi, khả năng kiếm tiền của tôi sẽ tăng lên.",
    "Vận động viên ăn đủ mới chạy nhanh. Nhịn đói trên đường đua thì không có cúp đâu.":
        "Vận động viên ăn đủ mới chạy nhanh. Nhịn đói trên đường đua không có cúp đâu.",
    "Đổ đầy bình xăng giúp tôi có đủ năng lượng để tiếp tục phấn đấu lâu dài.":
        "Đổ đầy bình xăng giúp tôi có đủ năng lượng tiếp tục phấn đấu lâu dài.",
    "Hiểu toàn bộ bài tập rồi đấy. Giờ cùng chốt giáo án rèn luyện hàng ngày nào.":
        "Hiểu toàn bộ bài tập rồi đấy. Giờ cùng chốt giáo án rèn luyện hàng ngày nào.",

    # Ch 9
    "Nhìn lại tám cái bẫy này, áy náy khi tiêu tiền chưa từng là thước đo khôn ngoan.":
        "Nhìn lại tám cái bẫy này, áy náy khi tiêu tiền chưa từng là thước đo khôn ngoan.",
    "Ba động tác chính: khoanh vùng tiêu vặt, coi cơ thể như cỗ máy, và ngừng chịu khổ vô ích.":
        "Ba động tác chính: khoanh vùng tiêu vặt, coi cơ thể như cỗ máy, ngừng chịu khổ vô ích.",
    "Tiền không phải bảng điểm đạo đức, nó là nhiên liệu để cuộc sống vận hành trơn tru.":
        "Tiền không phải bảng điểm đạo đức, nó là nhiên liệu giúp cuộc sống trơn tru.",
    "Chuẩn. Thử thách bảy ngày: mua một món đồ nhỏ giúp cuộc sống hàng ngày tiện lợi hơn.":
        "Chuẩn. Thử thách bảy ngày: mua món đồ nhỏ giúp cuộc sống hàng ngày tiện lợi hơn.",
    "Bữa trưa tươm tất, đôi tất êm, hay ly cà phê mà không cần áy náy với ai?":
        "Bữa trưa tươm tất, đôi tất êm, hay ly cà phê không cần áy náy với ai?",
    "Chính xác. Một hiệp đẩy chuẩn để hệ thần kinh nhận ra bạn vẫn hoàn toàn an toàn.":
        "Chính xác. Một hiệp đẩy chuẩn để hệ thần kinh nhận ra bạn hoàn toàn an toàn.",
    "Nếu thấy nhẹ lòng hơn, hãy đăng ký kênh để rèn thói quen mới cùng chúng tôi.":
        "Nếu thấy nhẹ lòng hơn, hãy đăng ký kênh để rèn thói quen mới cùng chúng tôi.",
    "Đừng coi nhu cầu cơ bản là phạm luật. Nạp nhiên liệu đi, hẹn gặp ở hiệp sau.":
        "Đừng coi nhu cầu cơ bản là phạm luật. Nạp nhiên liệu đi, hẹn gặp ở hiệp sau."
}

for c in d['chapters']:
    for l in c['lines']:
        if l['vo'] in shortened:
            l['vo'] = shortened[l['vo']]

with open('test_output_1500.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)

words = sum(len(l['vo'].split()) for c in d['chapters'] for l in c['lines'])
print('New total words:', words)

