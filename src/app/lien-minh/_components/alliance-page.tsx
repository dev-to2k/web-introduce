"use client";

import { motion } from "motion/react";
import { memo, useEffect, useState } from "react";
import AllianceSlider from "./alliance-slider";

// Memoized component để tận dụng Next.js 15 caching
const AlliancePage = memo(function AlliancePage() {
  // State để kiểm soát việc render
  const [mounted, setMounted] = useState(false);

  // Chỉ render một lần sau khi component được mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-[calc(100vh-var(--topbar-h,0px)-var(--header-h,0px))] bg-black/90 dark:bg-black/80 px-4 py-6 sm:py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8 text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
          <span className="inline-block">
            <span className="inline-block text-brand">♦</span> ĐỐI TÁC CHIẾN
            LƯỢC <span className="inline-block text-brand">♦</span>
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <AllianceSlider />
      </motion.div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
AlliancePage.displayName = "AlliancePage";

export default AlliancePage;
