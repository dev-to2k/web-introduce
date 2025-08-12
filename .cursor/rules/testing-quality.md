---
trigger: always_on
---

### Mục tiêu kiểm thử

- Bảo vệ hành vi quan trọng, giảm hồi quy, tăng tự tin khi refactor.

### Cấp độ kiểm thử

- **Unit**: Jest + React Testing Library cho component/hàm.
- **Integration**: Kiểm thử luồng chính giữa nhiều thành phần.
- **E2E**: Playwright/Cypress cho kịch bản người dùng cốt lõi (nếu áp dụng).

### Quy ước

- Đặt cạnh file: `Component.test.tsx` hoặc trong thư mục `__tests__` gần nơi dùng.
- Tránh snapshot lớn, ưu tiên assert hành vi.
- Mock tối thiểu; khi cần, mock ranh giới (fetch, SDK) thay vì logic bên trong.

### Chất lượng & CI

- Chạy: typecheck, lint, test, build trên CI trước khi merge.
- PR thay đổi UI: đính kèm ảnh/video; cân nhắc test ảnh hưởng layout bằng visual testing (tùy dự án).
