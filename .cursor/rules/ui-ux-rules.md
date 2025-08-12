---
trigger: always_on
---

### Tailwind CSS

- Utility-first; hạn chế CSS tùy chỉnh trong `globals.css` trừ khi dùng biến/tokens.
- Dùng thang đo nhất quán (spacing, fontSize, colors). Không tự ý số lẻ khác hệ thống.
- Tránh class quá dài: tách thành biến `cn()` hoặc component con khi cần.
- Trạng thái (hover/focus/disabled) đầy đủ; hỗ trợ dark mode nếu dự án dùng.

### shadcn/ui & Radix UI

- Sử dụng component đã chuẩn hóa; không chỉnh sửa thẳng thư viện, mở rộng thông qua wrapper.
- Giữ accessibility mặc định của Radix; không loại bỏ aria/role quan trọng.
- Chủ đề (theme) dựa trên CSS variables; thay đổi qua tokens, không hard-code màu.

### Khả năng tiếp cận (A11y)

- Alt text bắt buộc cho ảnh; tiêu đề rõ ràng cho section/landmark.
- Hỗ trợ bàn phím: focus ring, thứ tự tab hợp lý.
- Độ tương phản màu đạt tiêu chuẩn WCAG AA.

### Responsive & Layout

- Mobile-first; breakpoint theo Tailwind mặc định.
- Dùng container/độ rộng tối đa nhất quán; tránh layout thay đổi giật cục.
- Skeleton/loading states cho nội dung chậm.

### Nội dung & i18n (nếu áp dụng)

- Tách copy ra constants hoặc tệp nội dung; không hard-code rải rác.
- Tránh nối chuỗi thủ công; dùng template rõ ràng để dễ dịch.
