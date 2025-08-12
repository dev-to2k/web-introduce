---
trigger: always_on
---

### Mục tiêu & Phạm vi

- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Radix UI.
- **Tiêu chí**: Dễ bảo trì, hiệu năng cao, an toàn, nhất quán giao diện.

### Nguyên tắc chung

- **Ưu tiên RSC**: Dùng React Server Components; chỉ thêm `'use client'` khi cần tương tác trình duyệt.
- **Tách biệt server/client**: Logic truy xuất dữ liệu, secrets, SDK server chạy ở server components/route handlers.
- **Module hóa**: Tách nhỏ component, tái sử dụng, tránh trùng lặp.
- **Đặt tên rõ ràng**: `kebab-case` cho thư mục/file, `PascalCase` cho component, biến/hàm mô tả ý nghĩa.
- **Kiểm tra sớm**: Guard clauses cho lỗi/điều kiện không hợp lệ, return sớm.

### Cấu trúc thư mục (định hướng)

- `src/app/`: App Router (`layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `route.ts`).
- `src/app/components/` và phân nhóm tính năng (ví dụ: `news`, `events`, `security`).
- **Cộng trú**: Test (`*.test.ts(x)`), kiểu (`*.types.ts`), hằng số (`*.constants.ts`) đặt cạnh file chính khi hợp lý.
- **Import**: Ưu tiên đường dẫn tương đối ngắn; chỉ dùng alias nếu đã cấu hình rõ trong `tsconfig.json`.

### Chất lượng mã

- **TypeScript strict**: Không tắt kiểm tra kiểu; tránh `any`.
- **ESLint + Prettier**: Tuân thủ linter/formatter; không commit khi lỗi lint.
- **Doc ngắn gọn**: Viết JSDoc cho hàm/phần phức tạp; không chú thích điều hiển nhiên.

### Dữ liệu & API

- Dùng `async` server components hoặc `route.ts` để fetch; cấu hình cache (`revalidate`, `cache`) phù hợp use case.
- **Validation**: Zod cho input/output ở ranh giới (API, form).
- **Lỗi**: Trả về mã trạng thái đúng; thông điệp lỗi an toàn, không lộ chi tiết hệ thống.

### Ảnh, font, SEO

- Dùng `next/image` với `width/height`; tối ưu kích thước, WebP nếu có.
- Dùng `next/font` để tải font; tránh tải qua CSS bên ngoài.
- Khai báo `export const metadata` cho SEO, Open Graph.

### Release & vận hành

- Nhánh nhỏ, PR nhỏ; review bắt buộc.
- Tự động kiểm tra: typecheck, lint, build, test trước khi merge.
- Nhật ký thay đổi theo Conventional Commits.
