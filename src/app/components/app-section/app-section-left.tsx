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
        <div className="relative h-full w-full p-2 md:p-4">
          <Image
            src="/images/lienminh-58win-mockup.png"
            alt="Mockup ứng dụng 58WIN"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-contain"
            priority
          />
        </div>
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
              <div className="font-semibold text-slate-900">{q.title}</div>
              <div>Quét để tải</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
