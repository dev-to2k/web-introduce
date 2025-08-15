"use client";

import { motion } from "motion/react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AppSectionLeft() {
  const qrs = [
    { src: "/images/8xx-qr-code.png", alt: "QR 8XX", title: "QR 8XX" },
    { src: "/images/58win-qr-code.png", alt: "QR 58WIN", title: "QR 58WIN" },
    { src: "/images/ax88-qr-code.png", alt: "QR AX88", title: "QR AX88" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="block"
    >
      {/* Phone mockup */}
      <motion.div
        variants={itemVariants}
        className="relative h-[320px] md:h-[380px]"
      >
        {/* Glow background */}
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full bg-blue-500/20 dark:bg-blue-400/15 blur-3xl" />
        </motion.div>

        {/* Device entrance + gentle float */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -6, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.02, rotate: 1.5 }}
          className="relative h-full w-full"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative h-full w-full p-2 md:p-4"
          >
            <Image
              src="/images/lienminh-58win-mockup.png"
              alt="Mockup ứng dụng 58WIN"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain drop-shadow-[0_20px_40px_rgba(2,6,23,0.35)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* QR + Buttons */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-3 gap-3 justify-items-center md:flex md:items-end md:gap-5 md:flex-wrap"
      >
        {qrs.map((q) => (
          <motion.div
            key={q.alt}
            variants={itemVariants}
            className="flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-3"
          >
            <a
              href="https://imvn3k4.uk.com/"
              rel="noopener noreferrer"
              className="w-24 aspect-square bg-white p-2 rounded-xl border border-slate-200 shadow-card grid place-items-center hover:ring-2 hover:ring-brand/40 transition"
              aria-label={`Mở liên kết tải ứng dụng từ ${q.title}`}
            >
              <Image
                src={q.src}
                alt={q.alt}
                width={80}
                height={80}
                className="h-auto w-auto object-contain"
              />
            </a>
            <div className="text-xs md:text-sm text-slate-600 mt-1 md:mt-0">
              <div className="font-semibold text-slate-900 dark:text-white">
                {q.title}
              </div>
              <div>Quét để tải</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
