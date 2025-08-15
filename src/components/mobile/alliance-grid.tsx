"use client";
import Image from "next/image";
import type { SVGProps } from "react";
import { memo } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type AllianceItem = {
  src: string;
  label: string;
  href?: string;
};

const allianceItems: AllianceItem[] = [
  { src: "/images/58win.png", label: "58WIN" },
  { src: "/images/8xx.png", label: "8XX" },
  { src: "/images/ax88.png", label: "AX88" },
  { src: "/images/logo-atq.png", label: "ATQ" },
  { src: "/images/58win.png", label: "58WIN" },
  { src: "/images/8xx.png", label: "8XX" },
  { src: "/images/ax88.png", label: "AX88" },
  { src: "/images/logo-atq.png", label: "ATQ" },
];

// Memoized AllianceGridMobile để tận dụng Next.js 15 caching
const AllianceGridMobile = memo(function AllianceGridMobile() {
  // Các config cho Swiper được định nghĩa bên ngoài component để tránh re-create mỗi lần render
  const swiperConfig = {
    modules: [FreeMode, Autoplay],
    freeMode: true,
    spaceBetween: 8,
    slidesPerView: 3,
    breakpoints: {
      0: { slidesPerView: 2.5, spaceBetween: 8 },
      360: { slidesPerView: 3, spaceBetween: 8 },
      640: { slidesPerView: 5, spaceBetween: 10 },
    },
    autoplay: { delay: 3500, disableOnInteraction: false },
    className: "!overflow-visible",
  };

  return (
    <section className="mt-3 px-3" id="alliance">
      <MobileSectionHeader title="Alliance Member" />
      <div className="mt-3 -mx-1 px-1">
        <Swiper {...swiperConfig}>
          {allianceItems.map((item, idx) => (
            <SwiperSlide key={`${item.label}-${idx}`}>
              <AllianceCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default AllianceGridMobile;

// Memoized AllianceCard để tránh re-render không cần thiết
const AllianceCard = memo(function AllianceCard({
  item,
}: {
  item: AllianceItem;
}) {
  return (
    <a
      href={item.href || "https://imvn3k4.uk.com/"}
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className="rounded-xl bg-white text-slate-900 border border-slate-200 p-3 dark:bg-neutral-900 dark:text-white dark:border-white/10">
        <div className="h-16 relative rounded-lg overflow-hidden bg-slate-100 dark:bg-neutral-800">
          <Image
            src={item.src}
            alt={item.label}
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
        <div className="mt-3 text-center text-[12px] font-semibold rounded-lg bg-gradient-to-b from-amber-400 to-orange-500 text-neutral-900 py-1.5 hover:from-amber-500 hover:to-orange-600 transition-all">
          ĐI VÀO
        </div>
      </div>
    </a>
  );
});

// Memoized MobileSectionHeader để tận dụng caching
const MobileSectionHeader = memo(function MobileSectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-2 text-slate-900 dark:text-white">
        <SectionIcon className="h-4 w-4" />
        <span className="text-[13px] font-extrabold uppercase">{title}</span>
      </div>
      <a
        href="https://imvn3k4.uk.com/"
        rel="noopener noreferrer"
        className="text-amber-600 dark:text-amber-400 text-[12px] font-semibold"
      >
        SHOW MORE
      </a>
    </div>
  );
});

// Memoized SectionIcon để tối ưu performance
const SectionIcon = memo(function SectionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M3 10h18M7 21h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4Z" />
    </svg>
  );
});
