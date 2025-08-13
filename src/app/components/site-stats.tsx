"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import type { LucideIcon } from "lucide-react";
import { Globe2, Languages, MousePointerClick } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Stat = {
  value: number;
  label: string;
  icon: LucideIcon;
};

export default function SiteStats() {
  const stats: Stat[] = [
    { value: 368, label: "Trang Web", icon: Globe2 },
    { value: 23686, label: "Lượt truy cập", icon: MousePointerClick },
    { value: 24, label: "Ngôn Ngữ", icon: Languages },
  ];

  const renderCard = (s: Stat) => (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-card text-center">
      <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-brand/10 text-brand grid place-items-center">
        <s.icon className="h-5 w-5" aria-hidden />
      </div>
      <NumberTicker value={s.value} className="text-3xl font-bold text-brand" />
      <div className="mt-1 text-slate-500">{s.label}</div>
    </div>
  );

  return (
    <section
      aria-label="Số liệu hệ thống"
      className="max-w-screen-xl mx-auto px-4"
    >
      {/* Mobile: Swiper slider */}
      <div className="block sm:hidden rounded-xl">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          className="px-1 rounded-xl"
        >
          {stats.map((s) => (
            <SwiperSlide key={s.label}>{renderCard(s)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet/Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label}>{renderCard(s)}</div>
        ))}
      </div>
    </section>
  );
}
