"use client";

import { useMediaQuery } from "@/hooks/use-media";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AppSectionRight() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Determine if we should show the full text or truncated version
  const shouldShowFullText = isDesktop || isExpanded;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="block max-w-full overflow-hidden"
    >
      {/* Logos row */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-80"
      >
        <Image
          src="/images/8xx.png"
          alt="8XX"
          width={64}
          height={32}
          className="h-8 w-auto object-contain shrink-0 scale-100 md:scale-100 translate-y-[2px] md:translate-y-[-4px]"
        />
        <Image
          src="/images/58win.png"
          alt="58WIN"
          width={72}
          height={32}
          className="h-8 md:h-10 w-auto object-contain shrink-0 scale-225 ml-6 md:scale-125 translate-y-[-2px] md:translate-y-[-4px]"
        />
        <Image
          src="/images/ax88.png"
          alt="AX88"
          width={64}
          height={32}
          className="h-8 w-auto object-contain shrink-0 scale-50 md:scale-100"
        />
      </motion.div>

      {/* Text paragraphs */}
      <motion.div
        variants={containerVariants}
        className="mt-3 space-y-3 text-slate-600 text-sm sm:text-base md:text-[17px] lg:text-lg leading-6 md:leading-7 lg:leading-8 text-pretty break-words max-w-full relative"
      >
        {/* First paragraph always visible */}
        <motion.p variants={itemVariants}>
          ATQ là một trong những nhà cái trực tuyến uy tín và chuyên nghiệp nhất
          hiện nay, cung cấp đa dạng sản phẩm cá cược chất lượng cao như: Thể
          Thao, Casino Trực Tuyến, Game Bài, Bắn Cá, Xổ Số và nhiều trò chơi hấp
          dẫn khác.
        </motion.p>

        {/* Conditionally show these paragraphs */}
        <div className={`${shouldShowFullText ? "block" : "hidden"}`}>
          <motion.p variants={itemVariants}>
            Với giao diện hiện đại, tốc độ nạp/rút tiền siêu nhanh cùng hệ thống
            bảo mật tối ưu, 58WIN cam kết mang đến trải nghiệm an toàn – công
            bằng – thú vị cho mọi người chơi. Đặc biệt, hàng loạt khuyến mãi hấp
            dẫn dành cho cả thành viên mới và cược thủ lâu năm luôn sẵn sàng
            nâng tầm chiến thắng của bạn.
          </motion.p>
          <motion.p variants={itemVariants}>
            Tải App 58WIN ngay hôm nay để khám phá thế giới giải trí đỉnh cao và
            nhận những ưu đãi độc quyền!
          </motion.p>
        </div>

        {/* Show "Xem thêm" button on mobile when collapsed */}
        {!isDesktop && !isExpanded && (
          <motion.button
            variants={itemVariants}
            onClick={() => setIsExpanded(true)}
            className="text-brand font-medium hover:text-indigo-600 transition-colors mt-1 flex items-center"
          >
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.button>
        )}

        {/* Show "Thu gọn" button on mobile when expanded */}
        {!isDesktop && isExpanded && (
          <motion.button
            variants={itemVariants}
            onClick={() => setIsExpanded(false)}
            className="text-brand font-medium hover:text-indigo-600 transition-colors mt-1 flex items-center"
          >
            Thu gọn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}
