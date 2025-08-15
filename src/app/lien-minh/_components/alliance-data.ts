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
    id: "ax88",
    name: "AX88",
    logoUrl: "/images/ax88.png",
    link: "https://example.com/okpay",
    description:
      "Nền tảng giải trí trực tuyến hàng đầu với công nghệ tiên tiến và trải nghiệm người dùng xuất sắc.",
  },
  {
    id: "8xx",
    name: "8XX",
    logoUrl: "/images/8xx.png",
    link: "https://example.com/luongson",
    description:
      "Liên Minh OKVIP không chỉ liên minh với những nền tảng giải trí hàng đầu, mà còn mở rộng xây dựng quan hệ đối tác chiến lược với các thương hiệu danh tiếng khác.",
  },
  {
    id: "58win",
    name: "58WIN",
    logoUrl: "/images/58win.png",
    link: "https://example.com/venetian",
    description:
      "Thương hiệu giải trí uy tín với hệ thống bảo mật cao cấp và dịch vụ khách hàng 24/7.",
  },
];
// Đối tác được hiển thị ở giữa
export const featuredPartner: AlliancePartner = {
  id: "8xx",
  name: "8XX",
  logoUrl: "/images/8xx.png",
  description:
    "Liên Minh OKVIP không chỉ liên minh với những nền tảng giải trí hàng đầu, mà còn mở rộng xây dựng quan hệ đối tác chiến lược với các thương hiệu danh tiếng khác.",
  link: "https://example.com/luongson",
};
