"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./section-title";

export default function Partners() {
  const logos: { src: string; alt: string }[] = [
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/ae_sexy-main-logo.png",
      alt: "AE Sexy",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/Dream-Gaming-main-logo.png",
      alt: "Dream Gaming",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/the-online-casino-product-from-wm-casino-gamingsoft.png",
      alt: "WM Casino",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/sa-baccarat-1-e1671427501846.png",
      alt: "SA Gaming",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/pragmaticplay.png-removebg-preview.png",
      alt: "Pragmatic Play",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/PGSOFT_Logo_Secondary-3.png",
      alt: "PG Soft",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/4dc1e63a-eb85-4233-b7a9-1a43861703e9.png",
      alt: "Habanero",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/logo_notborder.png",
      alt: "Jili",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/CMD368_VN.png",
      alt: "CMD368",
    },
    {
      src: "https://www.hlads.club/wp-content/uploads/2025/07/images-removebg-preview.png",
      alt: "SABA",
    },
  ];
  return (
    <section className="py-10">
      <SectionTitle align="center" variant="badge">
        Đối tác chiến lược
      </SectionTitle>
      <div className="mt-6">
        <Swiper
          className="partners-swiper"
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          freeMode={{ enabled: true, momentum: false }}
          loop
          loopAdditionalSlides={logos.length}
          spaceBetween={12}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={`${logo.src}-${idx}`}>
              <div className="group h-[60px] bg-white rounded-xl grid place-items-center transition-transform duration-300 ease-out hover:scale-105">
                <div className="relative w-full h-full px-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain transition duration-300 ease-out group-hover:scale-110 group-hover:brightness-110"
                    priority={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          :global(.partners-swiper .swiper-wrapper) {
            transition-timing-function: ease-in-out !important;
          }
        `}</style>
      </div>
    </section>
  );
}
