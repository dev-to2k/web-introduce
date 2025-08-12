"use client";

import Button from "@/components/shared/button";
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
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button variant="brand" size="lg" className="border-2 border-brand">
          Tải cho iOS
        </Button>
      </motion.div>
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button variant="outline" size="lg" className="bg-white">
          Tải cho Android
        </Button>
      </motion.div>
    </motion.div>
  );
}
