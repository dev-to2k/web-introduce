---
trigger: always_on
---

### App Router & RSC

- Mặc định dùng server components; chỉ đặt `'use client'` khi cần state/effect/sự kiện.
- Dùng `layout.tsx` cho khung, `page.tsx` cho nội dung route; `loading.tsx` cho skeleton, `error.tsx` cho xử lý lỗi.
- API với `route.ts` (GET/POST/PUT/DELETE); trả về `NextResponse` với status code phù hợp.

### Data Fetching & Cache

- Server components: gọi `await fetch()` trực tiếp, cấu hình `cache`, `next: { revalidate }` theo yêu cầu (SSR/SSG/ISR).
- Không fetch dữ liệu trong `useEffect` cho dữ liệu server; chỉ dùng khi thực sự cần client-side fetch.
- Tách adapters cho nguồn dữ liệu (REST/GraphQL/SDK) để dễ thay thế.

### Cấu trúc component

- Component trình bày (presentational) vs thành phần logic (container) tách biệt khi cần.
- Tên file: `kebab-case.tsx`; component `PascalCase` trùng tên file.
- Co-locate: constants, types, tests gần component.

### SEO & Metadata

- Khai báo `export const metadata` hoặc `generateMetadata()` tại route.
- Thiết lập Open Graph, Twitter Card, canonical khi cần.

### Ảnh, font, video

- Dùng `next/image` với kích thước cụ thể; ưu tiên WebP/AVIF; lazy loading mặc định.
- Dùng `next/font` để nhúng font; tránh FOUT bằng `display: swap` mặc định.
- Video: lazy load, có poster, tắt autoplay âm thanh nếu không cần.

### Dynamic import & tách mã

- `next/dynamic` cho component nặng hoặc chỉ chạy client (`{ ssr: false }` nếu cần).
- Trì hoãn (lazy) các thư viện lớn đến khi cần.

### Lỗi & biên giới lỗi

- Sử dụng `error.tsx` theo route; log lỗi phía server an toàn; không lộ stack cho client.
- Dùng guard khi nhận input/params; validate bằng Zod ở ranh giới.

### Biến môi trường

- Secrets chỉ dùng ở server; truy cập qua `process.env` tại server code.
- Không expose biến nhạy cảm sang client; nếu cần, prefix `NEXT_PUBLIC_` và cân nhắc rủi ro.
