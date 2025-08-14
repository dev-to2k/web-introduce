"use client";

import SectionTitle from "@/components/shared/section-title";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { RenderMobile } from "../responsive/RenderAt";
import {
  SupportBullets,
  SupportChannels,
  type ChannelItem,
} from "./customer-support-animated";

type CustomerSupportFloatingProps = {
  bullets: string[];
  channels: ChannelItem[];
};

function HeadsetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2.5a1.5 1.5 0 1 1 0-3H17a1 1 0 0 0 1-1v-4a6 6 0 1 0-12 0v4a1 1 0 0 0 1 1h2.5a1.5 1.5 0 1 1 0 3H8a3 3 0 0 1-3-3v-5Z" />
    </svg>
  );
}

export default function CustomerSupportFloating({
  bullets,
  channels,
}: CustomerSupportFloatingProps) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <RenderMobile>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={dialogId}
          className="fixed right-4 bottom-20 z-40 rounded-full bg-brand text-white shadow-lg shadow-brand/30 p-4 ring-2 ring-brand/40 hover:brightness-105 active:scale-95 transition"
        >
          <HeadsetIcon className="h-6 w-6" />
          <span className="sr-only">Hỗ trợ khách hàng</span>
        </button>
      </RenderMobile>

      <RenderMobile>
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-black/50"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                id={dialogId}
                className="relative mx-auto max-w-md w-[92vw] mt-14"
                initial={{ y: 16, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 16, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl ring-1 ring-slate-200 dark:ring-white/10 overflow-hidden max-h-[calc(100dvh-8.5rem)] overflow-y-auto pb-[env(safe-area-inset-bottom)]">
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <SectionTitle
                        as="div"
                        align="left"
                        variant="default"
                        className="text-brand text-lg"
                      >
                        Hỗ Trợ Khách Hàng 24/7
                      </SectionTitle>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="h-8 w-8 inline-grid place-items-center rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10"
                        aria-label="Đóng"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden
                        >
                          <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811Z" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm">
                      ATQ cam kết hỗ trợ 24/7 với đội ngũ chuyên nghiệp qua
                      nhiều kênh:
                    </p>
                    <SupportBullets items={bullets} className="mt-2" />

                    <div className="mt-4">
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Liên hệ nhanh:{" "}
                        <a href="#" className="text-brand hover:underline">
                          Website ATQ.com
                        </a>{" "}
                        |
                        <a
                          href="tel:19006868"
                          className="text-brand hover:underline"
                        >
                          {" "}
                          Hotline: 1900 6868
                        </a>
                      </p>
                    </div>

                    <SupportChannels channels={channels} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </RenderMobile>
    </>
  );
}
