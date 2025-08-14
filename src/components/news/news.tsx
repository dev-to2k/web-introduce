"use client";
import Button from "@/components/shared/button";
import {
  ArrowRight,
  CalendarDays,
  Gift,
  Info,
  Megaphone,
  Shield,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../shared/section-title-client";
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
  const slugify = (input: string) =>
    input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  return (
    <section id="news" className="py-6 max-w-screen-xl mx-auto px-4">
      <SectionTitle
        align="center"
        variant="badge"
        className="text-xs sm:text-sm"
      >
        Tin tức - HOT
      </SectionTitle>
      {/* Mobile slider: 1 item per slide */}
      <div className="md:hidden mt-4 -mx-1 px-1">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="!overflow-visible"
        >
          {items.map((n) => (
            <SwiperSlide key={n.slug ?? n.title}>
              <article className="group bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden transition duration-300 ease-out hover:shadow-lg hover:border-slate-300 dark:bg-neutral-900 dark:border-white/10">
                <div className="h-44 relative">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                    sizes="100vw"
                  />
                </div>
                <div className="p-4">
                  {n.date && (
                    <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm inline-flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {n.date}
                    </div>
                  )}
                  <b className="block text-slate-900 dark:text-white text-base sm:text-lg leading-6">
                    {n.title}
                  </b>
                  <Link href={`/bai-viet/${n.slug ?? slugify(n.title)}`}>
                    <Button className="mt-2 gap-2" size="sm" variant="brand">
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop/tablet grid */}
      <div className="hidden md:block">
        <NewsGrid items={items} />
      </div>
    </section>
  );
}
