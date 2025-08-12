---
trigger: always_on
---

### Hiệu năng

- Ưu tiên RSC để giảm JS client; chỉ hydrate phần cần tương tác.
- Dùng `next/dynamic` và lazy load cho thành phần nặng/thư viện lớn.
- Tối ưu ảnh: `next/image`, kích thước phù hợp, `priority` cho ảnh above-the-fold.
- Giảm số request: prefetch route, gộp call khi hợp lý; tránh re-render không cần thiết.
- Theo dõi: đo lường bằng Web Vitals; tối ưu TTFB/CLS/LCP.

### Bảo mật

- Không bao giờ commit secrets; dùng biến môi trường và secret manager.
- Validate & sanitize input; tránh XSS bằng cách không render HTML không tin cậy.
- Bật HTTP headers an toàn ở edge/proxy (CSP, X-Frame-Options, HSTS) nếu hạ tầng cho phép.
- Kiểm soát quyền truy cập API; tránh lộ thông tin hệ thống trong thông báo lỗi.
