"use client";

import React from "react";

export default function RecruitmentInfo() {
  return (
    <div className={`rounded-xl p-6 sm:p-8 transition-all duration-300 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/30`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-6">
        Cơ hội nghề nghiệp
      </h2>

      <div className="space-y-4 sm:space-y-6 text-slate-700 dark:text-slate-200">
        <p className="text-base sm:text-lg leading-relaxed">
          ATQ Alliance là nơi tập trung những tài năng trẻ, sáng tạo và đam mê
          công nghệ. Chúng tôi tin rằng mỗi thành viên đều có thể đóng góp giá
          trị độc đáo cho sự phát triển của tổ chức.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Với môi trường làm việc năng động, chúng tôi khuyến khích sự đổi mới
          và học hỏi liên tục. Mỗi ý kiến đóng góp từ nhân viên đều được đánh
          giá cao và có thể nhận được những phần thưởng xứng đáng.
        </p>

        <div className={`p-4 sm:p-6 rounded-lg border-l-4 border-brand transition-all duration-300 bg-brand/5 dark:bg-brand/10 shadow-md dark:shadow-lg dark:shadow-brand/20`}>
          <h3 className="text-lg sm:text-xl font-semibold text-brand dark:text-brand mb-3">
            Chính sách phát triển
          </h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-200">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand rounded-full shadow-sm shadow-brand/50"></span>
              Đào tạo và phát triển kỹ năng chuyên môn
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand rounded-full shadow-sm shadow-brand/50"></span>
              Cơ hội thăng tiến rõ ràng và minh bạch
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand rounded-full shadow-sm shadow-brand/50"></span>
              Môi trường làm việc quốc tế, đa văn hóa
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand rounded-full shadow-sm shadow-brand/50"></span>
              Chế độ đãi ngộ cạnh tranh và hấp dẫn
            </li>
          </ul>
        </div>

        <p className="text-base sm:text-lg leading-relaxed">
          Chúng tôi luôn tìm kiếm những cá nhân có tầm nhìn, sẵn sàng thách thức
          bản thân và đóng góp vào sự thành công của ATQ Alliance. Hãy để chúng
          tôi biết bạn có thể mang lại gì cho tổ chức!
        </p>

        <div className="text-center py-4">
          <p className="text-xl font-semibold text-slate-800 dark:text-white">
            Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại ATQ Alliance!
          </p>
        </div>
      </div>
    </div>
  );
}
