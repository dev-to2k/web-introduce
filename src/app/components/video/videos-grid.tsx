"use client";

import { motion } from "motion/react";
import VideoPlayer from "./video-player";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function VideosGrid() {
  return (
    <motion.div
      className="mt-6 grid md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <VideoPlayer
          className="h-64 w-full rounded-xl shadow-card overflow-hidden"
          src="/videos/banner-video.mp4"
          poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          autoPlay
          muted
          loop
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl p-4 border border-slate-200 shadow-card dark:bg-neutral-900 dark:border-white/10"
      >
        <b className="text-slate-900 dark:text-white">
          Giới thiệu hệ sinh thái ATQ
        </b>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Khám phá các danh mục trò chơi, cộng đồng thành viên, ưu đãi và chính
          sách an toàn.
        </p>
      </motion.div>
    </motion.div>
  );
}
