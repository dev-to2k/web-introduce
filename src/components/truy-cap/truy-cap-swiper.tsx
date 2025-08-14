"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { TruyCapItem } from "./truy-cap-grid";

type Props = {
  items: TruyCapItem[];
};

export default function TruyCapSwiper({ items }: Props) {
  if (!items?.length) return null;
  const shouldLoop = items.length > 1;
  return (
    <div className="mt-6 flex justify-center">
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor
        loop={shouldLoop}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        className="w-[280px] sm:w-[360px] md:w-[420px]"
      >
        {items.map((it) => (
          <SwiperSlide key={it.src} className="rounded-2xl overflow-hidden">
            <figure className="relative flex items-center justify-center h-64 sm:h-72 md:h-80 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card px-2 sm:px-3 select-none">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
                priority={false}
              />
              <figcaption className="sr-only">{it.alt}</figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
