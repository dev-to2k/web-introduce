"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo } from "react";
import { heroData } from "./agency-data";

// Memoized component để tận dụng Next.js 15 caching
const HeroSection = memo(function HeroSection() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/80 to-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 via-black/30 to-black/70 z-10"></div>

      {/* Image */}
      <div className="absolute inset-0 z-0">
        {heroData.imageUrl ? (
          <Image
            src={heroData.imageUrl}
            alt={heroData.title}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-red-900 to-black"></div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mr-0 sm:mr-4 mb-2 sm:mb-0">
              {heroData.title}
            </h1>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-0 sm:mr-4 mb-2 sm:mb-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-3-3m0 0l3-3m-3 3h12" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500">
              {heroData.subtitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white mt-4">
            {heroData.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
HeroSection.displayName = "HeroSection";

export default HeroSection;
