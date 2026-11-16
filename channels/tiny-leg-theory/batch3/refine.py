import json, subprocess

with open('test_output.json') as f:
    d = json.load(f)

# Apply further tightenings
replacements = {
    "Quẹt thẻ trả tiền bữa trưa ngon miệng, nhìn số dư lại thấy như có lỗi với tương lai.": "Quẹt thẻ trả bữa trưa ngon miệng, nhìn số dư lại thấy có lỗi với tương lai.",
    "Cứ mỗi lần rút ví hay mở ứng dụng ngân hàng xem số dư là tôi lại giật mình.": "Mỗi lần rút ví hay mở ứng dụng xem số dư là tôi lại thót tim.",
    "Túi tiền tâm lý kinh điển. Não tự chia ví ảo rồi áp đặt luật lệ trái ngược nhau.": "Túi tiền tâm lý. Não tự chia ví ảo rồi áp đặt luật lệ trái ngược nhau.",
    "Lập riêng mục bảo dưỡng bản thân. Quần áo thoải mái, đệm nằm êm và thức ăn tốt là phí bảo trì.": "Lập mục bảo dưỡng bản thân. Quần áo thoải mái, đệm êm và thức ăn sạch là phí bảo trì.",
    "Coi chăm sóc là bảo trì sẽ biến nó thành chi phí vận hành chứ không phải tự thưởng?": "Coi chăm sóc là bảo trì sẽ biến nó thành phí vận hành thay vì tự thưởng?",
    "Xe máy cần thay dầu để chạy êm, cơ thể bạn cũng cần bảo dưỡng để không gục ngã.": "Xe máy cần thay nhớt để chạy, cơ thể cũng cần bảo dưỡng để không gục ngã.",
    "Dù đã gom tiền để đổi máy tính làm việc, lúc rút ra mua tôi vẫn thấy rất xót.": "Dù gom tiền đổi máy tính làm việc, lúc rút ra mua tôi vẫn thấy rất xót.",
    "Rất chuẩn. Nhưng kể cả khi tiền đã sẵn, bạn vẫn vướng cái bóng kỳ vọng của gia đình.": "Rất chuẩn. Nhưng tiền đã sẵn thì bạn vẫn vướng bóng kỳ vọng từ gia đình.",
    "Mỗi lần sắm đôi giày đi làm, tôi lại áy náy vì nghĩ nên gửi tiền về cho bố mẹ.": "Mỗi lần sắm đôi giày đi làm, tôi lại áy náy vì nghĩ nên gửi tiền về nhà.",
    "Đó là né tránh tội lỗi. Bạn bỏ bê bản thân chỉ để né tránh sự cắn rứt tưởng tượng.": "Đó là né tránh tội lỗi. Bạn bỏ bê bản thân chỉ để né sự cắn rứt tưởng tượng.",
    "Não tự vẽ ra ánh mắt thất vọng, rồi bạn tự phạt mình trước khi có ai trách móc.": "Não tự vẽ ra ánh mắt thất vọng, rồi bạn tự phạt mình trước khi ai trách.",
    "Gửi tiền về nhà định kỳ, rồi xem chăm sóc bản thân là bảo vệ trụ cột gia đình.": "Gửi tiền về nhà trước, rồi xem chăm sóc bản thân là bảo vệ trụ cột gia đình.",
    "Chuẩn. Dù lo xong bổn phận, thói quen tằn tiện thuở nhỏ vẫn có thể giật giỏ hàng của bạn.": "Chuẩn. Lo xong bổn phận rồi, thói quen tằn tiện thuở nhỏ vẫn có thể giật giỏ hàng bạn.",
    "Tư duy thiếu thốn. Quen cảnh chắt bóp, não coi mọi khoản chi thường nhật như tình huống khẩn cấp.": "Tư duy thiếu thốn. Quen cảnh chắt bóp, não coi mọi khoản chi thường ngày như việc khẩn cấp.",
    "Tâm lý thiếu thốn tạo góc nhìn hẹp. Não xem chai dầu gội như mối đe dọa sinh tồn.": "Thiếu thốn tạo góc nhìn hẹp. Não coi chai dầu gội như đe dọa sinh tồn.",
    "Tôi cắn răng đi đôi giày rẻ tiền làm đau lưng, rồi tự huyễn hoặc mình biết tiết kiệm.": "Tôi cắn răng đi đôi giày rẻ làm đau lưng, rồi tự huyễn hoặc mình biết tiết kiệm.",
    "Tập nâng tạ nhẹ trước. Tuần này thử nâng cấp một món đồ dùng nhỏ để đo phản ứng.": "Nâng tạ nhẹ trước. Tuần này thử nâng cấp một món đồ nhỏ để đo phản ứng.",
    "Nhầm to. Kỷ luật là nạp năng lượng cho vận động viên, chứ không phải bỏ đói cơ bắp.": "Nhầm to. Kỷ luật là tiếp sức cho vận động viên, không phải bỏ đói cơ bắp.",
    "Hãy kiểm tra công năng. Món đồ bảo vệ sức khỏe hay tiết kiệm thời gian là chi phí đầu tư.": "Kiểm tra công năng đi. Món đồ bảo vệ sức khỏe hay tiết kiệm thời gian là khoản đầu tư.",
    "Mua chiếc áo ấm tử tế chỉ là trang bị cho bản thân làm việc, chứ không phải tha hóa?": "Mua chiếc áo ấm chỉ là trang bị cho mình làm việc, chứ không phải tha hóa?",
    "Chẳng ai chạy bộ bằng dép lê để tỏ ra khiêm tốn. Bạn cần giày tốt để về đích.": "Chẳng ai chạy bằng dép lê để tỏ ra khiêm tốn. Cần giày tốt để về đích.",
    "Thay vì hỏi món đồ giúp tiết kiệm bao nhiêu giờ, tôi lại thấy tội lỗi rồi bỏ chạy?": "Thay vì hỏi đồ dùng tiết kiệm bao nhiêu giờ, tôi lại thấy tội lỗi rồi bỏ chạy?",
    "Não đi đường tắt lười biếng. Nỗi sợ thoáng qua đánh lừa bạn rằng món đồ đó lãng phí.": "Não đi đường tắt. Nỗi sợ thoáng qua đánh lừa rằng món đồ đó rất lãng phí.",
    "Rồi tôi phí cả ngày nghỉ vật lộn với đồ đạc hỏng vì để nỗi lo quyết định hộ.": "Rồi tôi phí cả ngày nghỉ vật lộn với đồ hỏng vì để nỗi lo quyết định hộ.",
    "Nếu chiếc đèn bàn tốt giúp bảo vệ mắt khi làm việc, tính ra mỗi ngày chỉ tốn vài nghìn?": "Nếu chiếc đèn tốt bảo vệ mắt khi làm việc, tính ra mỗi ngày chỉ tốn vài nghìn?",
    "Cắt cơn sợ rồi. Nhưng bạn vẫn tin mù quáng rằng nghỉ ngơi hôm nay là đánh cắp ngày mai.": "Cắt cơn sợ rồi. Nhưng bạn vẫn tin rằng nghỉ ngơi hôm nay là đánh cắp ngày mai.",
    "Pin cạn thì máy móc nào chạy được. Ép xác triền miên chỉ phá hỏng năng suất đường dài.": "Pin cạn thì máy nào chạy được. Ép xác triền miên chỉ phá hỏng năng suất đường dài.",
    "Ba động tác chính: khoanh vùng tiêu vặt, coi cơ thể như cỗ máy, và ngừng tôn vinh chịu khổ.": "Ba động tác chính: khoanh vùng tiêu vặt, coi cơ thể như cỗ máy, và ngừng chịu khổ vô ích.",
    "Bữa trưa tươm tất, đôi tất êm, hay ly cà phê ngon mà không cần áy náy với ai?": "Bữa trưa tươm tất, đôi tất êm, hay ly cà phê mà không cần áy náy với ai?",
    "Nếu nội dung này giúp bạn nhẹ lòng hơn, hãy đăng ký kênh để rèn luyện thói quen mới.": "Nếu thấy nhẹ lòng hơn, hãy đăng ký kênh để rèn thói quen mới cùng chúng tôi.",
    "Đừng coi nhu cầu cơ bản là khoản chi phạm luật. Nạp nhiên liệu đi, hẹn gặp ở hiệp sau.": "Đừng coi nhu cầu cơ bản là phạm luật. Nạp nhiên liệu đi, hẹn gặp ở hiệp sau."
}

for c in d['chapters']:
    for l in c['lines']:
        if l['vo'] in replacements:
            l['vo'] = replacements[l['vo']]

with open('test_output.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=1)

words = sum(len(l['vo'].split()) for c in d['chapters'] for l in c['lines'])
print('New total words:', words)

