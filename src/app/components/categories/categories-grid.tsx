"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Placeholder from "../placeholder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Category = { label: string };

type Props = {
  cats: Category[];
  imageMap: Record<string, string>;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CategoriesGrid({ cats, imageMap }: Props) {
  return (
    <>
      {/* Mobile: Swiper slider */}
      <div className="mt-6 block sm:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          {cats.map((c) => (
            <SwiperSlide key={c.label}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative aspect-square group"
              >
                {imageMap[c.label] ? (
                  <Image
                    src={imageMap[c.label]}
                    alt={c.label}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                    priority={false}
                  />
                ) : (
                  <Placeholder
                    label={c.label}
                    width={220}
                    height={140}
                    className="w-full h-full"
                  />
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop and tablet: grid */}
      <motion.div
        className="mt-6 hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cats.map((c) => (
          <motion.div
            key={c.label}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative h-36 group"
          >
            {imageMap[c.label] ? (
              <Image
                src={imageMap[c.label]}
                alt={c.label}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                className="object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                priority={false}
              />
            ) : (
              <Placeholder
                label={c.label}
                width={220}
                height={140}
                className="w-full h-full"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
