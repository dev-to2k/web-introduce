"use client";

import { motion } from "motion/react";
import Image from "next/image";

export type SecurityCard = {
  title: string;
  src: string;
};

type Props = {
  items: SecurityCard[];
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function SecurityGrid({ items }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((card) => (
        <motion.div key={card.title} variants={itemVariants} className="relative aspect-square group">
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
            className="object-cover rounded-xl shadow-card transition duration-300 ease-out group-hover:scale-[1.015]"
            priority={false}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
