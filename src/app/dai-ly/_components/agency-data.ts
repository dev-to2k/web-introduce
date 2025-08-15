export interface Agency {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  link?: string;
}

// Dữ liệu đại lý được cache và sử dụng lại
export const agencies: Agency[] = [
  {
    id: "agency1",
    name: "LIÊN MINH OKVIP",
    role: "HỢP TÁC THƯƠNG HIỆU CÙNG LUIS SUAREZ",
    imageUrl: "/images/dai-ly/agency1.png",
    link: "https://example.com/agency1",
  },
  {
    id: "agency2",
    name: "THÀNH VIÊN LIÊN MINH OKVIP",
    role: "HỢP TÁC THƯƠNG HIỆU CÙNG JOHN TERRY",
    imageUrl: "/images/dai-ly/agency2.png",
    link: "https://example.com/agency2",
  },
  {
    id: "agency3",
    name: "THÀNH VIÊN LIÊN MINH OKVIP",
    role: "HỢP TÁC THƯƠNG HIỆU CÙNG RONALDINHO",
    imageUrl: "/images/dai-ly/agency3.png",
    link: "https://example.com/agency3",
  },
];

// Dữ liệu cho hero section
export const heroData = {
  title: "MB66",
  subtitle: "RONALDINHO",
  description: "ĐẠI SỨ THƯƠNG HIỆU ĐỘC QUYỀN",
  imageUrl: "/images/dai-ly/hero-ronaldinho.png",
  link: "https://example.com/ronaldinho",
};

// Dữ liệu cho banner slide
export const bannerData = {
  title: "OKVIP",
  subtitle: "KÝ HỢP ĐỒNG THƯƠNG HIỆU VỚI AFA",
  imageUrl: "/images/dai-ly/banner-afa.png",
  link: "https://example.com/afa",
};
