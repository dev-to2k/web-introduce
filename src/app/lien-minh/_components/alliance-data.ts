export interface AlliancePartner {
  id: string;
  name: string;
  logoUrl: string;
  description?: string;
  link?: string;
}

// Dữ liệu đối tác được cache và sử dụng lại
export const alliancePartners: AlliancePartner[] = [
  {
    id: "venetian",
    name: "Venetian Casino",
    logoUrl: "/images/logo-atq.png",
    link: "https://example.com/venetian",
  },
  {
    id: "luongson",
    name: "Lương Sơn",
    logoUrl: "/images/logo-atq.png",
    link: "https://example.com/luongson",
  },
  {
    id: "okpay",
    name: "OKPay",
    logoUrl: "/images/logo-atq.png",
    link: "https://example.com/okpay",
  },
  {
    id: "venetian2",
    name: "Venetian Casino",
    logoUrl: "/images/logo-atq.png",
    link: "https://example.com/venetian",
  },
  {
    id: "luongson2",
    name: "Lương Sơn",
    logoUrl: "/images/logo-atq.png",
    link: "https://example.com/luongson",
  },
];

// Đối tác được hiển thị ở giữa
export const featuredPartner: AlliancePartner = {
  id: "okpay",
  name: "OKPAY",
  logoUrl: "/images/logo-atq.png",
  description:
    "Liên Minh OKVIP không chỉ liên minh với những nền tảng giải trí hàng đầu, mà còn mở rộng xây dựng quan hệ đối tác chiến lược với các thương hiệu danh tiếng khác.",
  link: "https://example.com/okpay",
};
