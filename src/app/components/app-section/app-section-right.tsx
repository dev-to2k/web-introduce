"use client";

import { motion } from "motion/react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AppSectionRight() {
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
        className="mt-3 space-y-3 text-slate-600 text-sm sm:text-base md:text-[17px] lg:text-lg leading-6 md:leading-7 lg:leading-8 text-pretty break-words max-w-full"
      >
        <motion.p variants={itemVariants}>
          ATQ là một trong những nhà cái trực tuyến uy tín và chuyên nghiệp nhất
          hiện nay, cung cấp đa dạng sản phẩm cá cược chất lượng cao như: Thể
          Thao, Casino Trực Tuyến, Game Bài, Bắn Cá, Xổ Số và nhiều trò chơi hấp
          dẫn khác.
        </motion.p>
        <motion.p variants={itemVariants}>
          Với giao diện hiện đại, tốc độ nạp/rút tiền siêu nhanh cùng hệ thống
          bảo mật tối ưu, 58WIN cam kết mang đến trải nghiệm an toàn – công bằng
          – thú vị cho mọi người chơi. Đặc biệt, hàng loạt khuyến mãi hấp dẫn
          dành cho cả thành viên mới và cược thủ lâu năm luôn sẵn sàng nâng tầm
          chiến thắng của bạn.
        </motion.p>
        <motion.p variants={itemVariants}>
          Tải App 58WIN ngay hôm nay để khám phá thế giới giải trí đỉnh cao và
          nhận những ưu đãi độc quyền!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
