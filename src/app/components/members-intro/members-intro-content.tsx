"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionTitleClient from "../../../components/shared/section-title-client";

export default function MembersIntroContent() {
  const items = [
    {
      key: "58win",
      title: "58WIN",
      subTitle: "SÂN CHƠI UY TÍN - THƯƠNG HIỆU TIỀN TỶ",
      img: "/images/58win.png",
      contentImg: "/images/58WIN-content.png",
      paragraphs: [
        "58WIN là điểm đến giải trí trực tuyến hợp pháp, được cấp phép bởi Isle of Man và Khu kinh tế Cagayan and Freeport, dước sự điều hành của Tập đoàn KJC – tập đoàn toàn cầu với kinh nghiệm dày dạn trong lĩnh vực công nghệ giải trí.",
        "Khác biệt nhờ giao diện trực quan, công nghệ xử lý nhanh và bảo mật chặt chẽ theo tiêu chuẩn SS 128-bit, 58WIN đảm bảo quyền riêng tư và an toàn tối đa cho người chơi trên toàn hệ thống.",
        "Toàn bộ quy trình nạp – rút tại 58WIN được tối ưu hóa bằng nền tảng kỹ thuật số hiện đại, cho phép giao dịch liền mạch chỉ trong vài giây. Đội ngũ hỗ trợ khách hàng giàu kinh nghiệm, trực chiến 24/7, luôn đồng hành và phản hồi nhanh chóng mọi yêu cầu từ phía người dùng.",
        "Hệ thống trò chơi của 58WIN mang đến trải nghiệm đa chiều.  Bên cạnh chất lượng sản phẩm, 58WIN liên tục triển khai nhiều chương trình ưu đãi độc quyền như hoàn tiền hàng ngày, thưởng tích điểm và các sự kiện.",
      ],
    },
    {
      key: "8xx",
      title: "8XX",
      subTitle: "NƠI VẬN MAY ĐÓN CHỜ",
      img: "/images/8xx.png",
      contentImg: "/images/8xx-content.png",
      paragraphs: [
        "8XX là điểm đến giải trí trực tuyến hợp pháp, được cấp phép bởi Isle of Man và Khu kinh tế Cagayan and Freeport, dước sự điều hành của Tập đoàn KJC – tập đoàn toàn cầu với kinh nghiệm dày dạn trong lĩnh vực công nghệ giải trí.",
        "Khác biệt nhờ giao diện trực quan, công nghệ xử lý nhanh và bảo mật chặt chẽ theo tiêu chuẩn SS 128-bit, 8XX đảm bảo quyền riêng tư và an toàn tối đa cho người chơi trên toàn hệ thống.",
        "Toàn bộ quy trình nạp – rút tại 8XX được tối ưu hóa bằng nền tảng kỹ thuật số hiện đại, cho phép giao dịch liền mạch chỉ trong vài giây. Đội ngũ hỗ trợ khách hàng giàu kinh nghiệm, trực chiến 24/7, luôn đồng hành và phản hồi nhanh chóng mọi yêu cầu từ phía người dùng.",
        "Hệ thống trò chơi của 8XX mang đến trải nghiệm đa chiều.  Bên cạnh chất lượng sản phẩm, 8XX liên tục triển khai nhiều chương trình ưu đãi độc quyền như hoàn tiền hàng ngày, thưởng tích điểm và các sự kiện.",
      ],
    },
    {
      key: "ax88",
      title: "AX88",
      subTitle: "CÙNG BẠN CHINH PHỤC ĐỈNH CAO",
      img: "/images/ax88.png",
      contentImg: "/images/ax88-content.png",
      paragraphs: [
        "AX88 là nhà cái được cấp phép hợp pháp bởi Isle of Man và Khu kinh tế Cagayan and Freeport, trực thuộc Tập đoàn KJC – đơn vị hàng đầu trong ngành giải trí trực tuyến toàn cầu.",
        "AX88 khẳng định vị thế bằng chất lượng dịch vụ vượt trội, giao diện dễ sử dụng và hệ thống bảo mật hiện đại chuẩn SS 128-bit, đảm bảo tuyệt đối an toàn cho mọi dữ liệu cá nhân.",
        "Hệ thống NẠP - RÚT hoàn toàn tự động, xử lý giao dịch chỉ trong vài giây. Đội ngũ chăm sóc khách hàng chuyên nghiệp, hoạt động 24/7, luôn sẵn sàng hỗ trợ người chơi mọi lúc, mọi nơi.",
        "Kho trò chơi tại AX88 vô cùng phong phú, bao gồm: Casino trực tuyến, Cá cược thể thao, Xổ số, Đá Gà, Nổ Hũ, Bắn Cá… phù hợp với mọi nhu cầu giải trí từ cơ bản đến cao cấp.",
        "AX88 còn mang đến hàng loạt chương trình khuyến mãi hấp dẫn như thưởng chào mừng, tặng trải nghiệm khi đăng ký và nạp tiền lần đầu, giúp người chơi tối ưu hóa lợi nhuận và nâng cao trải nghiệm cá cược chuyên nghiệp.",
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  // Simple fade + slide-in animation wrapper that runs on mount
  const FadeSlide = ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }, []);
    return (
      <div
        className={`${
          className ?? ""
        } transition-all duration-500 ease-out will-change-[opacity,transform] ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {children}
      </div>
    );
  };
  return (
    <section
      id="members-content"
      className=" md:py-12 space-y-6 max-w-screen-xl mx-auto px-4"
    >
      <SectionTitleClient align="center" variant="badge">
        Giới thiệu thành viên ATQ
      </SectionTitleClient>

      <div
        role="tablist"
        aria-label="Thành viên"
        className="flex items-center gap-4 md:gap-5"
        onKeyDown={(e) => {
          if (
            e.key !== "ArrowRight" &&
            e.key !== "ArrowLeft" &&
            e.key !== "Home" &&
            e.key !== "End"
          )
            return;
          e.preventDefault();
          let next = active;
          if (e.key === "ArrowRight") next = (active + 1) % items.length;
          if (e.key === "ArrowLeft")
            next = (active - 1 + items.length) % items.length;
          if (e.key === "Home") next = 0;
          if (e.key === "End") next = items.length - 1;
          setActive(next);
          const btn = tabRefs.current[next];
          if (btn) btn.focus();
        }}
      >
        {items.map((it, idx) => {
          const isActive = active === idx;
          return (
            <button
              key={it.title}
              id={`tab-${idx}`}
              role="tab"
              aria-controls={`panel-${idx}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              type="button"
              onClick={() => setActive(idx)}
              ref={(el) => {
                if (el) tabRefs.current[idx] = el;
              }}
              className={`group cursor-pointer inline-flex items-center gap-3 rounded-full px-5 py-3 transition select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40
              ${
                isActive
                  ? "bg-brand/10 text-brand shadow-card ring-1 ring-brand/30"
                  : "bg-slate-50 text-slate-700"
              }`}
            >
              <span className="w-12 h-12 rounded-full bg-white overflow-hidden grid place-items-center shadow-sm">
                <Image
                  src={it.img}
                  alt={it.title}
                  width={32}
                  height={32}
                  className="h-auto w-auto object-contain"
                />
              </span>
              <span className="whitespace-nowrap text-base font-medium">
                {it.title}
              </span>
            </button>
          );
        })}
      </div>

      {items.map(
        (it, idx) =>
          active === idx && (
            <FadeSlide key={it.key}>
              <div
                id={`panel-${idx}`}
                role="tabpanel"
                aria-labelledby={`tab-${idx}`}
                className="grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-5">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-brand/30 via-fuchsia-400/20 to-sky-400/20 blur-2xl"></div>
                    <div className="relative aspect-[16/9] p-2 md:p-4 rounded-2xl bg-white/60 backdrop-blur shadow-xl ring-1 ring-slate-200">
                      <Image
                        src={it.contentImg}
                        alt={it.title}
                        fill
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="object-contain drop-shadow-md"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="p-[1px] rounded-2xl bg-gradient-to-br from-brand/40 via-violet-300/40 to-cyan-300/40">
                    <div className="relative rounded-2xl clip-animated-border">
                      <div className="rounded-2xl p-6 md:p-8 bg-white shadow-xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-4">
                          {it.title}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-slate-900 via-slate-800 to-brand/70 bg-clip-text text-transparent">
                          {it.subTitle}
                        </h3>
                        <div className="space-y-4">
                          {it.paragraphs.map((p, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <span className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand ring-1 ring-brand/20">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.2 4.2a1 1 0 001.4 0l9-9a1 1 0 10-1.4-1.4L9 16.2z" />
                                </svg>
                              </span>
                              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                <span className="font-semibold text-brand">
                                  {it.title}
                                </span>
                                <span className="ml-1">{p}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeSlide>
          )
      )}
    </section>
  );
}
