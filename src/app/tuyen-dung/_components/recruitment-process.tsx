"use client";

import React from "react";

const processSteps = [
  {
    step: "01",
    title: "Nộp hồ sơ",
    description: "Gửi CV và thông tin ứng tuyển qua form hoặc email",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Sàng lọc hồ sơ",
    description: "Đội ngũ HR sẽ đánh giá và sàng lọc hồ sơ phù hợp",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Phỏng vấn",
    description: "Tham gia các vòng phỏng vấn với team lead và HR",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Đánh giá kỹ thuật",
    description: "Thực hiện bài test kỹ thuật hoặc coding challenge",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description: "Nhận offer và tham gia quy trình onboarding",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function RecruitmentProcess() {
  return (
    <div className={`rounded-xl p-8 transition-all duration-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/30`}>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
        Quy trình tuyển dụng
      </h2>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-blue-600 transform -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 bg-brand/5 dark:bg-brand/10 border border-brand/20 dark:border-brand/30 shadow-md dark:shadow-lg dark:shadow-brand/20`}>
                  <div className="text-brand transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand/50">
                  {step.step}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-blue-600 text-white rounded-lg shadow-lg shadow-brand/30">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="font-semibold">Thời gian xử lý: 1-2 tuần</span>
        </div>
      </div>
    </div>
  );
}
