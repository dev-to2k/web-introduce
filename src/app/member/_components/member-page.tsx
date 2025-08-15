"use client";

import { motion } from "motion/react";
import { memo, useEffect, useState } from "react";
import MemberGrid from "./member-grid";

// Memoized component để tận dụng Next.js 15 caching
const MemberPage = memo(function MemberPage() {
  // State để kiểm soát việc render
  const [mounted, setMounted] = useState(false);

  // Chỉ render một lần sau khi component được mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Không render gì khi chưa mount để tránh hydration mismatch
  // if (!mounted) return null;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8 text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Thành Viên ATQ Alliance
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Khám phá các thành viên uy tín trong liên minh ATQ với nhiều ưu đãi
          hấp dẫn và trải nghiệm giải trí đỉnh cao.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MemberGrid />
      </motion.div>
    </div>
  );
});

// Đặt displayName để tối ưu debugging
MemberPage.displayName = "MemberPage";

export default MemberPage;
