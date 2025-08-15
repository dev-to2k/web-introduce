"use client";

import React from "react";

const stats = [
  {
    number: "500+",
    label: "Nhân viên",
    description: "Đội ngũ chuyên nghiệp toàn cầu",
  },
  {
    number: "50+",
    label: "Quốc gia",
    description: "Hiện diện trên toàn thế giới",
  },
  {
    number: "95%",
    label: "Hài lòng",
    description: "Tỷ lệ nhân viên hài lòng",
  },
  {
    number: "24/7",
    label: "Hỗ trợ",
    description: "Hỗ trợ nhân viên mọi lúc",
  },
];

export default function CompanyStats() {
  return (
    <div className={`rounded-xl p-6 sm:p-8 transition-all duration-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-neutral-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/30`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">
        ATQ Alliance trong số liệu
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="mb-3">
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110"
              >
                {stat.number}
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-1">
              {stat.label}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-8 p-6 rounded-lg border transition-all duration-300 bg-brand/5 dark:bg-brand/10 border-brand/20 dark:border-brand/30 shadow-md dark:shadow-lg dark:shadow-brand/20`}>
        <h3 className="text-xl font-semibold text-brand dark:text-brand mb-3 text-center">
          Tại sao chọn ATQ Alliance?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Môi trường làm việc năng động và sáng tạo</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Cơ hội thăng tiến rõ ràng và minh bạch</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Chế độ đãi ngộ cạnh tranh và hấp dẫn</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-brand/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Đào tạo và phát triển kỹ năng liên tục</span>
          </div>
        </div>
      </div>
    </div>
  );
}
