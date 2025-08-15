"use client";

import React, { useState } from "react";

export default function RecruitmentForm() {
  const [formData, setFormData] = useState({
    email: "",
    content: "",
    attachment: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, attachment: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi form
    console.log("Form data:", formData);
    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm nhất.");
  };

  return (
    <div className={`rounded-xl p-6 sm:p-8 transition-all duration-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-neutral-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/30`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6">
        Đăng ký ứng tuyển
      </h2>

      <div className={`mb-6 p-4 rounded-lg border transition-all duration-300 bg-brand/5 dark:bg-brand/10 border-brand/20 dark:border-brand/30 shadow-md dark:shadow-lg dark:shadow-brand/20`}>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 text-center">
          Đăng ký để nhận thông tin tuyển dụng mới nhất và cơ hội nghề nghiệp
          hấp dẫn!{' '}
          <span className="text-brand dark:text-brand font-semibold">
            Đăng ký ngay.
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
          >
            *Hãy nhập địa chỉ email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-all duration-300 bg-brand/5 dark:bg-brand/10 border-brand/20 dark:border-brand/30`}
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
          >
            *Hãy nhập nội dung ứng tuyển
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            rows={6}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-all duration-300 resize-none bg-brand/5 dark:bg-brand/10 border-brand/20 dark:border-brand/30`}
            placeholder="Giới thiệu bản thân, kinh nghiệm và lý do ứng tuyển..."
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="attachment"
              className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
            >
              Đính kèm CV/Portfolio
            </label>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg border-2 border-dashed flex items-center justify-center transition-colors duration-300 bg-brand/5 dark:bg-brand/10 border-brand/30 dark:border-brand/40`}>
                <svg
                  className={`w-6 h-6 transition-colors duration-300 text-brand`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => document.getElementById("attachment")?.click()}
                className={`px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 bg-brand/5 dark:bg-brand/10 border border-brand/20 dark:border-brand/30 text-brand`}
              >
                Chọn file
              </button>
            </div>
            {formData.attachment && (
              <p className="text-sm text-green-600 mt-2">
                ✓ {formData.attachment.name}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-brand to-blue-600 hover:from-blue-600 hover:to-brand text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 shadow-lg shadow-brand/30`}
        >
          Gửi đăng ký →
        </button>
      </form>
    </div>
  );
}
