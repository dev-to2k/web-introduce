"use client";

import AuthForm from "@/components/auth/auth-form";
import { RenderDesktop, RenderMobile } from "@/components/responsive/RenderAt";
import Link from "next/link";
import { motion } from "motion/react";
import { easeOut } from "motion";

export default function LoginPage() {
  return (
    <>
      {/* Mobile layout */}
      <RenderMobile>
        <div className="min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-neutral-950 dark:text-white py-4">
          {/* Welcome + Auth actions */}
          <div className="px-4">
            <div className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1 text-slate-900 dark:border-white/10 dark:bg-neutral-900 dark:text-white">
              <span className="min-w-0 flex-1 whitespace-normal break-words text-[11px] font-medium">
                Trung tâm cá nhân
              </span>
              <div className="shrink-0 flex items-center gap-1.5">
                <Link
                  href="/dang-nhap"
                  className="inline-flex h-8 items-center justify-center rounded-lg bg-brand px-3 text-xs font-semibold text-white hover:brightness-110"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-1.5"
                  >
                    <path d="M15 3h4v18h-4" />
                    <path d="M10 17l5-5-5-5" />
                    <path d="M15 12H3" />
                  </svg>
                  Đăng nhập
                </Link>
                <Link
                  href="/dang-ky"
                  className="inline-flex h-8 items-center justify-center rounded-lg border border-brand px-3 text-xs font-semibold text-brand hover:bg-brand/10 dark:text-white dark:hover:bg-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-1.5"
                  >
                    <circle cx="12" cy="8" r="3" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>

          {/* Wallet card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="px-4 mt-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-100 to-slate-50 dark:border-white/10 dark:from-slate-700/70 dark:via-slate-600/60 dark:to-slate-500/50">
              {/* decorative waves */}
              <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-50 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,255,255,0.5),transparent_60%),radial-gradient(120%_80%_at_100%_100%,rgba(255,255,255,0.3),transparent_60%)]" />

              <div className="relative p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[12px] font-medium text-slate-800 dark:text-white/90">Ví tiền của tôi</div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-white/70">
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">0</span> Điểm
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/70 px-3 py-1.5 text-[10px] text-slate-700 shadow-sm hover:bg-white/80 dark:border-white/20 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/15">
                    Chuyển điểm
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick menu */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut, delay: 0.05 }}
            className="px-4"
          >
            <div className="mt-5 text-center text-[10px] tracking-[0.15em] text-slate-500 dark:text-white/70">
              MENU NHANH
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={listStagger}
              className="mt-2.5 grid grid-cols-4 gap-2"
            >
              {quickItems.map((item) => (
                <motion.li
                  variants={fadeItem}
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white p-2.5 border border-slate-200 dark:bg-white/5 dark:border-white/10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/90 shadow-inner">
                    {/* simple glyph */}
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-center leading-tight text-slate-800 dark:text-white/90">
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Info list */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut, delay: 0.1 }}
            className="px-4"
          >
            <div className="mt-5 rounded-xl bg-white border border-slate-200 overflow-hidden dark:bg-white/5 dark:border-white/10">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={listStagger}
                className="divide-y divide-slate-200 dark:divide-white/10"
              >
                {infoLinks.map((item) => (
                  <motion.li variants={fadeItem} key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-3.5 py-2.5 active:bg-slate-100 dark:active:bg-white/5"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:bg-neutral-800 dark:border-white/10 dark:text-white">
                          {item.icon === "download" ? (
                            // download icon
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 3v12" />
                              <path d="M7 10l5 5 5-5" />
                              <path d="M5 21h14" />
                            </svg>
                          ) : item.icon === "about" ? (
                            // user/info icon
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="8" r="3" />
                              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                          ) : (
                            // shield icon
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[13px] font-semibold tracking-wide text-slate-800 dark:text-white/90">
                          {item.label}
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-slate-400 dark:text-white/70"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </RenderMobile>

      {/* Desktop layout */}
      <RenderDesktop>
        <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-xl">
              <AuthForm initialMode="login" />
            </div>
          </div>
        </div>
      </RenderDesktop>
    </>
  );
}

const quickItems = [
  { label: "An toàn" },
  { label: "Tin nhắn" },
  { label: "Phản hồi" },
  { label: "Liên hệ" },
] as const;

const infoLinks = [
  { label: "VỀ CHÚNG TÔI", href: "#", icon: "about" },
  { label: "TẢI XUỐNG APP", href: "#", icon: "download" },
  { label: "THỎA THUẬN CHÍNH SÁCH", href: "#", icon: "policy" },
] as const;

// Animation variants
const fadeItem = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: easeOut },
  },
};

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};
