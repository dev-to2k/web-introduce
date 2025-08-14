"use client";

import SectionTitle from "@/components/shared/section-title";
import SectionTitleClient from "@/components/shared/section-title-client";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { RenderMobile } from "../responsive/RenderAt";

type EventItem = {
  id: string;
  image: string;
  overlayText: string;
  date: string;
  title: string;
  href: string;
};

const events: EventItem[] = [
  {
    id: "1",
    image: "/images/58WIN-content.png",
    overlayText: "ĐĂNG KÝ TÀI KHOẢN NHẬN THƯỞNG CHÀO MỪNG",
    date: "2025/05/21",
    title: "ĐĂNG KÝ NHẬN THƯỞNG",
    href: "https://imvn3k4.uk.com/",
  },
  {
    id: "2",
    image: "/images/8xx-content.png",
    overlayText: "TẢI APP VỀ NGAY PHẦN THƯỞNG LIỀN TAY",
    date: "2025/05/13",
    title: "TẢI APP NHẬN THƯỞNG",
    href: "https://imvn3k4.uk.com/",
  },
  {
    id: "3",
    image: "/images/ATQ-CSKH.png",
    overlayText: "ĐIỂM DANH CÓ THƯỞNG TÍCH LŨY MỖI NGÀY",
    date: "2025/04/23",
    title: "ĐIỂM DANH MỖI NGÀY",
    href: "https://imvn3k4.uk.com/",
  },
];

export default function HotEvents() {
  return (
    <section id="events" className="py-8 max-w-screen-xl mx-auto px-4">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <SectionTitle variant="badge" className="mb-4 text-sm">
            SỰ KIỆN NỔI BẬT
          </SectionTitle>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Khám phá những sự kiện nổi bật và nhận thưởng hấp dẫn từ ATQ
            Alliance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <EventCard event={event} isDesktop />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <RenderMobile>
        <div className="flex items-center justify-between mb-4">
          <SectionTitleClient
            variant="badge"
            align="left"
            className="text-xs sm:text-sm"
          >
            SỰ KIỆN NỔI BẬT
          </SectionTitleClient>
          <Link
            href="https://imvn3k4.uk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand dark:text-brand text-sm font-semibold flex items-center gap-1"
          >
            XEM THÊM
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <EventCard event={event} isDesktop={false} />
            </motion.div>
          ))}
        </div>
      </RenderMobile>
    </section>
  );
}

function EventCard({
  event,
  isDesktop,
}: {
  event: EventItem;
  isDesktop: boolean;
}) {
  return (
    <Link
      href={event.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={isDesktop ? "400px" : "100vw"}
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="p-4 md:p-6">
              <p className="text-white text-sm md:text-base font-bold leading-tight max-w-[60%]">
                {event.overlayText}
              </p>
            </div>
          </div>

          {/* Date Badge */}
          <div className="absolute top-3 right-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {event.date}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <div className="space-y-3">
            <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand transition-colors">
              {event.title}
            </h3>
            <div className="bg-brand text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-brand/90 transition-colors">
              Xem thêm
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
