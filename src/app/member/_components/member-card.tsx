"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { memo } from "react";
import type { MemberItem } from "./member-data";

interface MemberCardProps {
  item: MemberItem;
  index: number;
}

// Memoized component để tránh re-render không cần thiết
const MemberCard = memo(function MemberCard({ item, index }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800"
    >
      <div className="relative w-full h-[193px]">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 343px"
          priority={index < 2} // Ưu tiên tải 2 hình đầu tiên
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-brand/80 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">
          {item.description}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-1 sm:px-2 text-center font-semibold text-xs sm:text-sm text-white rounded-lg bg-gradient-to-r from-brand to-indigo-600 hover:from-brand/90 hover:to-indigo-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              className="w-3 h-3 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            TRUY CẬP
          </a>
          <a
            href={item.appLink || item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-1 sm:px-2 text-center font-semibold text-xs sm:text-sm text-white rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              className="w-3 h-3 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
            TẢI APP
          </a>
        </div>
      </div>
    </motion.div>
  );
});

// Đặt displayName để tối ưu debugging
MemberCard.displayName = "MemberCard";

export default MemberCard;
