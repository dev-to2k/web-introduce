export interface AlliancePartner {
  id: string;
  name: string;
  logoUrl: string;
  description?: string;
  link?: string;
}

// Dữ liệu đối tác gốc
const basePartners: AlliancePartner[] = [
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

// Tạo đủ slides cho centeredSlides hoạt động mượt mà
// Theo khuyến nghị từ bài viết Swiper.js 11+: với slidesPerView: 3 và loop + centeredSlides,
// cần ít nhất 6-10 slides để tránh lỗi transition và đảm bảo smooth animation
function createEnoughSlides(originalSlides: AlliancePartner[], minSlides: number = 9): AlliancePartner[] {
  const originalCount = originalSlides.length;
  
  // Nếu đã đủ slides thì không cần duplicate
  if (originalCount >= minSlides) {
    return originalSlides;
  }
  
  const result: AlliancePartner[] = [];
  const targetCount = Math.max(minSlides, Math.ceil(minSlides / originalCount) * originalCount);
  
  for (let i = 0; i < targetCount; i++) {
    const originalPartner = originalSlides[i % originalCount];
    const duplicateIndex = Math.floor(i / originalCount);
    
    // Tạo ID unique để tránh duplicate key trong React
    const clonedPartner: AlliancePartner = {
      ...originalPartner,
      id: duplicateIndex === 0 ? originalPartner.id : `${originalPartner.id}-dup-${duplicateIndex}`,
    };
    result.push(clonedPartner);
  }
  
  return result;
}

// Export danh sách đối tác với đủ slides cho centeredSlides
// Sử dụng 9 slides để đảm bảo smooth transition với slidesPerView: 3
export const alliancePartners: AlliancePartner[] = createEnoughSlides(basePartners, 9);

// Export danh sách gốc để tracking active partner
export const originalPartners: AlliancePartner[] = basePartners;
// Đối tác được hiển thị ở giữa
export const featuredPartner: AlliancePartner = {
  id: "8xx",
  name: "8XX",
  logoUrl: "/images/8xx.png",
  description:
    "Liên Minh OKVIP không chỉ liên minh với những nền tảng giải trí hàng đầu, mà còn mở rộng xây dựng quan hệ đối tác chiến lược với các thương hiệu danh tiếng khác.",
  link: "https://example.com/luongson",
};
