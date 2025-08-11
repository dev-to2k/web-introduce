"use client";

import { motion } from "motion/react";
import Image from "next/image";

export type NewsItem = {
  title: string;
  date?: string;
  image: string;
};

type Props = {
  items: NewsItem[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function NewsGrid({ items }: Props) {
  return (
    <motion.div
      className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((n) => (
        <motion.article
          key={n.image ?? n.title}
          variants={itemVariants}
          className="group bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden transition duration-300 ease-out hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5"
        >
          <div className="h-36 relative">
            <Image
              src={n.image}
              alt={n.title}
              fill
              className="object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            {n.date && <div className="text-slate-500 text-sm">{n.date}</div>}
            <b className="block">{n.title}</b>
            <button className="mt-2 inline-flex items-center cursor-pointer gap-1 px-3 py-2 rounded-lg bg-brand text-white font-semibold transition-all duration-200 hover:bg-brand/90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
              Xem chi tiết
            </button>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
