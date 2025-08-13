"use client";

import Button from "@/components/shared/button";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export type NewsItem = {
  title: string;
  date?: string;
  image: string;
  slug?: string;
  icon?: LucideIcon;
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
  const slugify = (input: string) =>
    input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  return (
    <div className="mt-6">
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((n) => (
          <motion.article
            key={n.image ?? n.title}
            variants={itemVariants}
            className="group bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden transition duration-300 ease-out hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 dark:bg-neutral-900 dark:border-white/10 dark:hover:border-white/20"
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
              {n.date && (
                <div className="text-slate-500 dark:text-slate-400 text-sm inline-flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {n.date}
                </div>
              )}
              <b className="block text-slate-900 dark:text-white">{n.title}</b>
              <Link href={`/bai-viet/${n.slug ?? slugify(n.title)}`}>
                <Button className="mt-2 gap-2" size="sm" variant="brand">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-6 text-center">
        <Link
          href="/bai-viet"
          className="text-brand font-semibold hover:underline"
        >
          <span className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
            Xem tất cả
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
