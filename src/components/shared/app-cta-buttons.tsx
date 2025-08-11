"use client";

import { motion } from "motion/react";
type Props = {
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AppCtaButtons({ className }: Props) {
  return (
    <motion.div
      className={`flex items-center gap-3 flex-wrap ${className ?? ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center h-11 md:h-12 min-w-[168px] px-5 rounded-lg border-2 border-brand bg-brand text-white font-semibold shadow-card transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        Tải cho iOS
      </motion.button>
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center h-11 md:h-12 min-w-[168px] px-5 rounded-lg border-2 border-brand bg-white text-brand font-semibold shadow-card transition hover:bg-brand/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        Tải cho Android
      </motion.button>
    </motion.div>
  );
}
