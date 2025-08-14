"use client";

import { motion } from "motion/react";
import Image from "next/image";

export type TruyCapItem = {
  src: string;
  alt: string;
};

type Props = {
  items: TruyCapItem[];
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TruyCapGrid({ items }: Props) {
  if (!items?.length) return null;
  return (
    <motion.div
      className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((it) => (
        <motion.figure
          key={it.src}
          variants={itemVariants}
          className="group relative flex items-center justify-center h-40 sm:h-44 md:h-48 border border-slate-200 bg-white shadow-card px-2 sm:px-3 transition duration-300 ease-out hover:shadow-md hover:border-slate-300"
        >
          <Image
            src={it.src}
            alt={it.alt}
            fill
            className="object-contain transition duration-300 ease-out group-hover:brightness-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            priority={false}
          />
          <figcaption className="sr-only">{it.alt}</figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}
