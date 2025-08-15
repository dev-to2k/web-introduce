"use client";

import React, { useState } from "react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isOpen: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Ho Chi Minh City",
    type: "Full-time",
    experience: "2-5 years",
    salary: "Competitive",
    description:
      "Phát triển giao diện người dùng hiện đại và responsive cho các ứng dụng web của ATQ Alliance.",
    requirements: [
      "Thành thạo React.js, TypeScript",
      "Kinh nghiệm với Next.js và Tailwind CSS",
      "Hiểu biết về UI/UX principles",
      "Khả năng làm việc nhóm tốt",
    ],
    benefits: [
      "Lương cạnh tranh",
      "Bảo hiểm sức khỏe",
      "Đào tạo và phát triển kỹ năng",
      "Môi trường làm việc trẻ trung",
    ],
    isOpen: true,
  },
  {
    id: "2",
    title: "Backend Developer",
    department: "Engineering",
    location: "Ho Chi Minh City",
    type: "Full-time",
    experience: "3-6 years",
    salary: "Competitive",
    description:
      "Xây dựng và phát triển hệ thống backend robust, scalable cho các ứng dụng của công ty.",
    requirements: [
      "Thành thạo Node.js, Python hoặc Java",
      "Kinh nghiệm với databases (SQL/NoSQL)",
      "Hiểu biết về microservices architecture",
      "Kinh nghiệm với cloud platforms",
    ],
    benefits: [
      "Lương cạnh tranh",
      "Bảo hiểm sức khỏe",
      "Đào tạo và phát triển kỹ năng",
      "Môi trường làm việc trẻ trung",
    ],
    isOpen: true,
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Ho Chi Minh City",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Competitive",
    description:
      "Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu.",
    requirements: [
      "Thành thạo Figma, Adobe Creative Suite",
      "Portfolio thể hiện khả năng thiết kế",
      "Hiểu biết về user research",
      "Kinh nghiệm thiết kế cho web và mobile",
    ],
    benefits: [
      "Lương cạnh tranh",
      "Bảo hiểm sức khỏe",
      "Đào tạo và phát triển kỹ năng",
      "Môi trường làm việc trẻ trung",
    ],
    isOpen: true,
  },
];

export default function JobListings() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className={`rounded-xl p-6 sm:p-8 transition-all duration-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/30`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6">
        Vị trí đang tuyển dụng
      </h2>

      <div className="space-y-4">
        {jobPositions.map((job) => (
          <div
            key={job.id}
            className={`border rounded-lg transition-all duration-300 hover:shadow-lg border-slate-200 dark:border-slate-700/60 hover:border-brand/300 dark:hover:border-brand/50 hover:bg-brand/5 dark:hover:bg-neutral-900/40`}
          >
            <div
              className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 bg-neutral-50 dark:bg-neutral-900/40 hover:bg-brand/5 dark:hover:bg-neutral-900/60`}
              onClick={() => toggleJobExpansion(job.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span
                      className={`px-3 py-1 rounded-full transition-colors duration-300 bg-brand/10 dark:bg-brand/20 text-brand border border-brand/20 dark:border-brand/30`}
                    >
                      {job.department}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full transition-colors duration-300 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30`}
                    >
                      {job.location}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full transition-colors duration-300 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30`}
                    >
                      {job.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full transition-colors duration-300 bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/30`}
                    >
                      {job.experience}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {job.isOpen && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30`}
                    >
                      Đang tuyển
                    </span>
                  )}
                  <svg
                    className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                      expandedJob === job.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {expandedJob === job.id && (
              <div
                className={`p-4 sm:p-6 border-t transition-all duration-300 border-slate-200 dark:border-slate-700/60 bg-white dark:bg-neutral-900/40`}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                      Mô tả công việc:
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                      Yêu cầu:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-2">
                      Quyền lợi:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button className="bg-gradient-to-r from-brand to-blue-600 hover:from-blue-600 hover:to-brand text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand/30">
                      Ứng tuyển ngay
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
