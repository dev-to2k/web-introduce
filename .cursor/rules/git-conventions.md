---
trigger: always_on
---

### Nhánh (branch)

- feature/<tên-ngắn-gọn>: Tính năng mới (ví dụ: `feature/news-slider`).
- fix/<tên-ngắn-gọn>: Sửa lỗi.
- refactor/<tên-ngắn-gọn>: Cải tổ không đổi hành vi.
- chore/<tên-ngắn-gọn>: Việc vặt, cấu hình, nâng cấp phụ thuộc.
- docs/<tên-ngắn-gọn>, test/<tên-ngắn-gọn>: Tài liệu, kiểm thử.

### Commit message (Conventional Commits)

- Cú pháp: `type(scope): mô tả ngắn gọn`
- Loại: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `perf`, `build`, `ci`.
- Ví dụ: `feat(news): add grid layout and preload images`
- Thân commit (nếu cần): nêu lý do, giải pháp, tác động.
- Footer: tham chiếu issue/ticket (VD: `Refs #123`).

### Pull Request

- Nhỏ, tập trung 1 mục tiêu; mô tả rõ thay đổi, ảnh/chụp màn hình cho UI.
- Check-list trước khi mở PR:
  - [ ] Typecheck, lint, format đã pass
  - [ ] Build chạy OK
  - [ ] Cập nhật docs/metadata nếu ảnh hưởng SEO/UI
  - [ ] Ảnh/video minh họa nếu thay đổi giao diện
- Yêu cầu tối thiểu 1 review; không tự merge nếu còn ý kiến mở.

### Tag/Release

- Tạo phiên bản dựa trên `feat`/`fix` theo SemVer.
- Sinh changelog tự động từ Conventional Commits khi có thể.
