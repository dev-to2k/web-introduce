"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { alliancePartners, featuredPartner } from "./alliance-data";

// Memoized component để tận dụng Next.js 15 caching
const AllianceSlider = memo(function AllianceSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePartner, setActivePartner] = useState(alliancePartners[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActivePartner(alliancePartners[activeIndex]);
  }, [activeIndex]);

  if (!mounted) return null;

  return (
    <div className="relative py-12 sm:py-16 md:py-20 overflow-hidden alliance-bg">
      <div className="w-full relative">
        {/* Slider với vòng tròn ở giữa */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="alliance-swiper"
          >
            {alliancePartners.map((partner, idx) => (
              <SwiperSlide
                key={partner.id}
                className="alliance-slide"
                style={{ width: "400px", height: "400px" }}
              >
                {({ isActive }) => (
                  <div
                    className={`relative transition-all duration-500 ${
                      isActive
                        ? "w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] z-20"
                        : "w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] opacity-80"
                    }`}
                  >
                    {isActive ? (
                      <div className="w-full h-full rounded-full border-4 border-slate-300/30 dark:border-slate-600/30 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 dark:from-blue-500/10 dark:to-indigo-600/10 backdrop-blur-sm flex items-center justify-center p-2">
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
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full rounded-full alliance-logo-placeholder">
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
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full rounded-full alliance-logo-placeholder">
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
          className="text-center mt-8 md:mt-12 relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {activePartner.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
            {activePartner.description || featuredPartner.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
AllianceSlider.displayName = "AllianceSlider";

export default AllianceSlider;
