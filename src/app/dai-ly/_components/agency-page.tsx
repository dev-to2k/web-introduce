"use client";

import { motion } from "motion/react";
import { memo, useEffect, useState } from "react";
import AgencySlider from "./agency-slider";
import BannerSlide from "./banner-slide";
import HeroSection from "./hero-section";

// Memoized component để tận dụng Next.js 15 caching
const AgencyPage = memo(function AgencyPage() {
  // State để kiểm soát việc render
  const [mounted, setMounted] = useState(false);

  // Chỉ render một lần sau khi component được mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-[calc(100vh-var(--topbar-h,0px)-var(--header-h,0px))] bg-gradient-to-b from-black to-gray-900">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
        <div className="w-full lg:w-1/2">
          {/* Hero Section - Bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-2 sm:p-4"
          >
            <HeroSection />
          </motion.div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-1/2">
          {/* Banner Slide - Bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-2 sm:p-4"
          >
            <BannerSlide />
          </motion.div>

          {/* Agency Slider - Phía dưới */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-8 lg:mt-16 px-2 sm:px-4 pb-4 sm:pb-8 lg:pb-16"
          >
            <AgencySlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
AgencyPage.displayName = "AgencyPage";

export default AgencyPage;
