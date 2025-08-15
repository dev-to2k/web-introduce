"use client";

import CompanyStats from "./company-stats";
import JobListings from "./job-listings";
import RecruitmentForm from "./recruitment-form";
import RecruitmentInfo from "./recruitment-info";
import RecruitmentProcess from "./recruitment-process";

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Cơ hội nghề nghiệp tại{' '}
            <span className="bg-gradient-to-r from-brand to-blue-600 bg-clip-text text-transparent">
              ATQ Alliance
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Tham gia đội ngũ chuyên nghiệp, sáng tạo và đam mê công nghệ. Chúng
            tôi đang tìm kiếm những tài năng xuất sắc để cùng xây dựng tương
            lai.
          </p>
        </div>

        {/* Company Stats Section */}
        <div className="mb-12">
          <CompanyStats />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Section - Thông tin tuyển dụng */}
          <div className="lg:col-span-2">
            <RecruitmentInfo />
          </div>

          {/* Right Section - Form đăng ký */}
          <div className="lg:col-span-1">
            <RecruitmentForm />
          </div>
        </div>

        {/* Recruitment Process Section */}
        <div className="mb-12">
          <RecruitmentProcess />
        </div>

        {/* Job Listings Section */}
        <div className="mb-12">
          <JobListings />
        </div>
      </div>
    </div>
  );
}
