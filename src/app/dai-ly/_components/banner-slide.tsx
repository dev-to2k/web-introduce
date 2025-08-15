"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo } from "react";
import { bannerData } from "./agency-data";

// Memoized component để tận dụng Next.js 15 caching
const BannerSlide = memo(function BannerSlide() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/80 to-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10"></div>

      {/* Image */}
      <div className="absolute inset-0 z-0">
        {bannerData.imageUrl ? (
          <Image
            src={bannerData.imageUrl}
            alt={bannerData.title}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-black"></div>
        )}
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 p-8 z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 max-w-md leading-tight">
            {bannerData.title} | HỌP BÁO CHÍNH THỨC HIỆP HỘI BÓNG ĐÁ ARGENTINA
          </h2>
        </motion.div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            OKVIP
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white">
            {bannerData.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 right-4 z-20">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
BannerSlide.displayName = "BannerSlide";

export default BannerSlide;
