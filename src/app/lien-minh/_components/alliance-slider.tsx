"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { alliancePartners } from "./alliance-data";

// Memoized component để tận dụng Next.js 15 caching
const AllianceSlider = memo(function AllianceSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Danh sách 3 đối tác thật (không placeholder)
  const partners = alliancePartners;

  // Nhân đôi mảng khi chỉ có 3 phần tử để loop mượt hơn với slidesPerView=3
  const viewItems = useMemo(() => {
    if (partners.length <= 3) return [...partners, ...partners];
    return partners;
  }, [partners]);

  // Memoize đối tác đang active (theo index thực, mod theo số lượng base)
  const activePartner = useMemo(() => {
    return partners[activeIndex % partners.length] || partners[0];
  }, [activeIndex, partners]);

  // Tối ưu hóa callback functions
  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="w-full relative">
        {/* Slider với vòng tròn ở giữa */}
        <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] relative">
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={32}
            loop={true}
            loopAdditionalSlides={3}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            className="alliance-swiper h-full"
            initialSlide={1} // Bắt đầu ở item giữa khi có 3 phần tử
          >
            {viewItems.map((partner, idx) => (
              <SwiperSlide
                key={`${partner.id}-${idx}`}
                className="alliance-slide group flex items-center justify-center"
              >
                {({ isActive }) => (
                  <div
                    className={`relative transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] z-20"
                        : "w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] opacity-80 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    {isActive ? (
                      <div className="w-full h-full rounded-full border-3 border-slate-300/50 dark:border-slate-600/50 flex items-center justify-center transition-all duration-300 hover:border-blue-400/60 dark:hover:border-blue-300/60">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100/80 via-indigo-100/60 to-blue-200/40 dark:from-blue-500/20 dark:via-indigo-600/20 dark:to-blue-700/20 backdrop-blur-sm flex items-center justify-center p-1.5 transition-all duration-300 shadow-lg dark:shadow-blue-500/20 hover:shadow-xl dark:hover:shadow-blue-400/30">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                          >
                            {partner.logoUrl ? (
                              <div className="alliance-logo-container">
                                <Image
                                  src={partner.logoUrl}
                                  alt={partner.name}
                                  fill
                                  className="object-contain"
                                  priority={isActive}
                                  sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold text-base transition-colors duration-300 text-center px-2">
                                {partner.name}
                              </div>
                            )}
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {partner.logoUrl ? (
                          <div className="alliance-logo-container">
                            <Image
                              src={partner.logoUrl}
                              alt={partner.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-medium text-xs transition-colors duration-300 text-center px-1">
                            {partner.name.substring(0, 2)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tiêu đề đối tác hiện tại */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-6 md:mt-8 relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-300">
            {activePartner.name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300 leading-relaxed">
            {activePartner.description || ""}
          </p>
        </motion.div>
      </div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
AllianceSlider.displayName = "AllianceSlider";

export default AllianceSlider;
