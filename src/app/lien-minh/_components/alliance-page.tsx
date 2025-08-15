"use client";

import { motion } from "motion/react";
import { memo, useEffect, useState } from "react";
import ThemeToggle from "../../../components/theme/theme-toggle";
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
    <div className="w-full min-h-[calc(100vh-var(--topbar-h,0px)-var(--header-h,0px))] bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-black/95 dark:via-slate-900/90 dark:to-black/80 transition-colors duration-500">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle className="shadow-lg backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20 dark:border-slate-600/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 sm:mb-6 text-center pt-8 sm:pt-10"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-2 tracking-tight transition-colors duration-300">
          <span className="inline-block">
            <span className="inline-block text-blue-600 dark:text-blue-400">
              ♦
            </span>{" "}
            ĐỐI TÁC CHIẾN LƯỢC{" "}
            <span className="inline-block text-blue-600 dark:text-blue-400">
              ♦
            </span>
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 transition-colors duration-300">
          Xây dựng mối quan hệ đối tác bền vững và cùng phát triển
        </p>
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
