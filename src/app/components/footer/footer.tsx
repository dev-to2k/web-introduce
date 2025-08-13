import Image from "next/image";
import FooterAccordion from "./footer-accordion";

export default function Footer() {
  return (
    <footer
      id="ho-tro"
      className="mt-10 overflow-hidden border-t bg-ink text-slate-200 border-white/10 dark:bg-neutral-950 dark:text-slate-200 dark:border-white/10"
    >
      {/* Top: brand + links */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-12 gap-8 lg:gap-12">
        {/* Brand */}
        <div className="space-y-4 md:col-span-5 lg:col-span-4 xl:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-atq.png"
              alt="ATQ Alliance"
              width={1040}
              height={344}
              className="h-24 sm:h-36 md:h-56 lg:h-72 xl:h-80 w-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
          <div className="text-sm text-slate-300/90 dark:text-slate-300/90">
            <div className="font-medium text-white dark:text-white">
              ATQ Alliance
            </div>
            <div className="mt-1">12 Huỳnh Thúc Kháng, TP. Hồ Chí Minh</div>
            <div className="mt-1">Chơi có trách nhiệm. 18+.</div>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-3 pt-1">
            <a
              aria-label="Facebook"
              href="#"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1877F2] shadow hover:translate-y-[-2px] transition"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.88 6.49 1.88 12.06c0 5.02 3.66 9.19 8.44 10v-7.07H7.9v-2.93h2.42V9.85c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.68l-.43 2.93h-2.25V22c4.78-.81 8.44-4.98 8.44-9.94Z" />
              </svg>
            </a>
            <a
              aria-label="Telegram"
              href="#"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#229ED9] shadow hover:translate-y-[-2px] transition"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.04 15.28 8.9 18.4c.42 0 .61-.18.83-.4l2-1.93 4.14 3.03c.76.42 1.3.2 1.5-.7l2.7-12.64h.01c.24-1.1-.4-1.53-1.13-1.26L3.54 9.5c-1.08.42-1.07 1.03-.18 1.3l4.7 1.47 10.9-6.84c.51-.33.98-.15.59.18L9.04 15.28Z" />
              </svg>
            </a>
            <a
              aria-label="YouTube"
              href="#"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FF0000] shadow hover:translate-y-[-2px] transition"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2c-.3-1.3-1.3-2.3-2.6-2.6C18.9 3 12 3 12 3s-6.9 0-8.9.6C1.8 4 0.8 5 0.5 6.3 0 8.3 0 12 0 12s0 3.7.5 5.7c.3 1.3 1.3 2.3 2.6 2.6C5.1 21 12 21 12 21s6.9 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.5-2 .5-5.7.5-5.7s0-3.7-.5-5.7ZM9.6 15.5V8.5l6.5 3.5-6.5 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        {/* Mobile: Accordion */}
        <div className="md:col-span-7 sm:hidden mt-8 md:mt-12">
          <FooterAccordion
            sections={[
              {
                title: "Menu",
                items: ["Trang chủ", "Hướng dẫn", "Khuyến mãi", "Sự kiện"],
              },
              {
                title: "Sự kiện",
                items: [
                  "Việt Nam",
                  "Philippines",
                  "Thái Lan",
                  "Hàn Quốc",
                  "Brazil",
                ],
              },
              {
                title: "Đối tác",
                items: ["Sảnh Game", "Ngân hàng", "Bên thứ 3"],
              },
            ]}
          />
        </div>

        {/* Desktop & tablet: Columns */}
        <div className="md:col-span-7 hidden sm:grid sm:grid-cols-3 gap-8 mt-8 md:mt-12">
          <div>
            <div className="text-white dark:text-white font-semibold tracking-wide uppercase text-base sm:text-lg">
              Menu
            </div>
            <ul className="text-sm space-y-2 mt-3 text-slate-300/90 dark:text-slate-300/90">
              <li>Trang chủ</li>
              <li>Hướng dẫn</li>
              <li>Khuyến mãi</li>
              <li>Sự kiện</li>
            </ul>
          </div>
          <div>
            <div className="text-white dark:text-white font-semibold tracking-wide uppercase text-base sm:text-lg">
              Sự kiện
            </div>
            <ul className="text-sm space-y-2 mt-3 text-slate-300/90 dark:text-slate-300/90">
              <li>Việt Nam</li>
              <li>Philippines</li>
              <li>Thái Lan</li>
              <li>Hàn Quốc</li>
              <li>Brazil</li>
            </ul>
          </div>
          <div>
            <div className="text-white dark:text-white font-semibold tracking-wide uppercase text-base sm:text-lg">
              Đối tác
            </div>
            <ul className="text-sm space-y-2 mt-3 text-slate-300/90 dark:text-slate-300/90">
              <li>Sảnh Game</li>
              <li>Ngân hàng</li>
              <li>Bên thứ 3</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/20">
        <div className="max-w-screen-xl mx-auto px-4 py-4 text-xs text-slate-400 flex items-center justify-between gap-4">
          <div>Copyright © {new Date().getFullYear()} ATQ Alliance</div>
          <div className="hidden sm:block">
            Bảo lưu mọi quyền | Điều khoản & Chính sách
          </div>
        </div>
      </div>
    </footer>
  );
}
