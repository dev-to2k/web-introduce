"use client";
import {
  Gift,
  Info,
  Megaphone,
  Newspaper,
  Shield,
  Trophy,
  Zap,
} from "lucide-react";
import SectionTitle from "../../../components/shared/section-title-client";
import NewsGrid from "./news-grid";

export default function News() {
  const items = [
    {
      title: "Ra mắt tính năng nạp nhanh",
      date: "10/08/2025",
      image:
        "https://www.hlads.club/wp-content/uploads/2025/08/photo_2025-07-22_21-42-59.webp",
      slug: "ra-mat-tinh-nang-nap-nhanh",
      icon: Zap,
    },
    {
      title: "Cập nhật giải đấu mùa hè",
      date: "05/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/7.webp",
      slug: "cap-nhat-giai-dau-mua-he",
      icon: Trophy,
    },
    {
      title: "Chính sách bảo mật mới",
      date: "01/08/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/1-4.webp",
      slug: "chinh-sach-bao-mat-moi",
      icon: Shield,
    },
    {
      title: "Tin tức 4",
      date: "29/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/2-30.webp",
      slug: "tin-tuc-4",
      icon: Megaphone,
    },
    {
      title: "Tin tức 5",
      date: "27/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/22-6.webp",
      slug: "tin-tuc-5",
      icon: Gift,
    },
    {
      title: "Tin tức 6",
      date: "25/07/2025",
      image: "https://www.hlads.club/wp-content/uploads/2025/08/moiban2.webp",
      slug: "tin-tuc-6",
      icon: Info,
    },
  ];
  return (
    <section id="news" className="py-6 max-w-screen-xl mx-auto px-4">
      <SectionTitle align="center" variant="badge">
        <span className="inline-flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Tin tức
        </span>
      </SectionTitle>
      <NewsGrid items={items} />
    </section>
  );
}
