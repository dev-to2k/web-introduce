"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { agencies } from "./agency-data";

// Memoized component để tận dụng Next.js 15 caching
const AgencySlider = memo(function AgencySlider() {
  return (
    <div className="relative">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
        <span className="inline-block text-brand">♦</span> THÀNH VIÊN LIÊN MINH
        OKVIP <span className="inline-block text-brand">♦</span>
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="agency-swiper"
      >
        {agencies.map((agency, index) => (
          <SwiperSlide key={agency.id}>
            <AgencyCard agency={agency} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

// Agency Card Component
interface AgencyCardProps {
  agency: (typeof agencies)[0];
  index: number;
}

const AgencyCard = memo(function AgencyCard({
  agency,
  index,
}: AgencyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden border-t-4 border-b-4 border-yellow-500 bg-gradient-to-b from-[#fdfb08] to-[#ff8800] agency-card"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 z-10"></div>

      {/* Image */}
      <div className="absolute inset-0 z-0">
        {agency.imageUrl ? (
          <Image
            src={agency.imageUrl}
            alt={agency.name}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-yellow-600 to-orange-700 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {agency.name.substring(0, 2)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 p-4 z-20 w-full">
        <h3 className="text-sm font-bold text-white mb-1">{agency.name}</h3>
        <div className="text-xs text-white/80 mb-2">{agency.role}</div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
        <div className="bg-orange-500/80 text-white text-xs font-bold py-1 px-2 rounded mb-2 inline-block">
          ĐẠI LÝ THƯƠNG HIỆU CHÍNH THỨC
        </div>
      </div>
    </motion.div>
  );
});

// Đặt displayName để tối ưu debugging
AgencySlider.displayName = "AgencySlider";
AgencyCard.displayName = "AgencyCard";

export default AgencySlider;
