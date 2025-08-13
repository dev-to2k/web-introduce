"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// Icons (kept local to client to avoid passing non-serializable components)
const IconHeadset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2.5a1.5 1.5 0 1 1 0-3H17a1 1 0 0 0 1-1v-4a6 6 0 1 0-12 0v4a1 1 0 0 0 1 1h2.5a1.5 1.5 0 1 1 0 3H8a3 3 0 0 1-3-3v-5Z" />
  </svg>
);

const IconTelegram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M9.03 14.8 8.8 18.5c.36 0 .52-.16.71-.35l1.7-1.63 3.52 2.58c.65.36 1.12.17 1.3-.6l2.35-11.02.01-.01c.21-.97-.35-1.35-.98-1.11L3.7 9.14c-.95.37-.93.91-.16 1.15l4.1 1.28 9.5-6.01c.45-.29.86-.13.52.16l-8.63 7.08Z" />
  </svg>
);

const IconFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V8.6c0-.9.24-1.5 1.5-1.5h1.7V4.4c-.84-.1-1.68-.2-2.52-.2-2.5 0-4.18 1.52-4.18 4.3V11H7v3h2.99v8h3.51Z" />
  </svg>
);

const IconYoutube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M22 8.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.8C16.8 5.1 12 5.1 12 5.1h0s-4.8 0-7.1.3c-.4 0-1.3 0-2.1.8-.6.6-.8 2-.8 2S1.7 9.8 1.7 11.4v1.1c0 1.6.3 3.2.3 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7 .3 7 .3s4.8 0 7.1-.3c.4 0 1.3 0 2.1-.8.6-.6.8-2 .8-2s.3-1.6.3-3.2v-1.1c0-1.6-.3-3.2-.3-3.2ZM10.1 14.6V8.9l5.6 2.9-5.6 2.8Z" />
  </svg>
);

export function SupportImage() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-[320px] md:h-[380px]">
        <div className="relative h-full w-full p-2 md:p-4">
          <Image
            src="/images/ATQ-CSKH.png"
            alt="Dịch vụ hỗ trợ khách hàng ATQ"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SupportBullets({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <motion.ul
      className={`space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((b) => (
        <motion.li key={b} variants={itemVariants}>
          {b}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export type ChannelItem = {
  key: string;
  label: string;
  href: string;
  color: string;
  ring: string;
  icon: "headset" | "telegram" | "facebook" | "youtube";
};

const iconMap: Record<
  ChannelItem["icon"],
  (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  headset: IconHeadset,
  telegram: IconTelegram,
  facebook: IconFacebook,
  youtube: IconYoutube,
};

export function SupportChannels({ channels }: { channels: ChannelItem[] }) {
  return (
    <motion.div
      className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {channels.map(({ key, label, href, color, ring, icon }) => {
        const Icon = iconMap[icon];
        return (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl p-4 bg-white ring-1 ring-slate-200 hover:shadow-card transition border border-slate-100 text-center dark:bg-neutral-900 dark:ring-white/10 dark:border-white/10"
            aria-label={label}
            variants={itemVariants}
          >
            <div
              className={`mx-auto h-12 w-12 rounded-full grid place-items-center ring-1 ${ring}`}
            >
              <Icon className={`h-6 w-6 ${color} drop-shadow-sm`} />
            </div>
            <div className="mt-2 font-semibold text-slate-900 dark:text-white group-hover:text-brand transition">
              {label}
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
