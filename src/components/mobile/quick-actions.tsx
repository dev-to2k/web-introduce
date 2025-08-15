"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

type Action = {
  href: string;
  image: string;
};

const actions: Action[] = [
  {
    href: "#login",
    image: "/images/quick-actions/dangnhap-73x73.png",
  },
  {
    href: "#register",
    image: "/images/quick-actions/dangky-73x73.png",
  },
  {
    href: "#support",
    image: "/images/quick-actions/hotro-73x73.png",
  },
  {
    href: "#promotion",
    image: "/images/quick-actions/khuyenmai-73x73.png",
  },
];

// Memoized action button component để tránh re-render không cần thiết
const ActionButton = memo(function ActionButton({ href, image }: Action) {
  return (
    <Link
      key={href}
      href={href}
      className="flex flex-col items-center gap-1 text-slate-900 dark:text-white h-[73px] w-[73px]"
    >
      <Image
        src={image}
        alt="Logo"
        width={73}
        height={73}
        quality={100}
        priority={true}
      />
    </Link>
  );
});

// Memoized QuickActionsMobile component để tận dụng Next.js 15 caching
const QuickActionsMobile = memo(function QuickActionsMobile() {
  return (
    <div className="mt-3 px-3">
      <div className="rounded-2xl bg-white/90 border border-slate-200 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:bg-neutral-800/80 dark:border-white/10">
        <div className="grid grid-cols-4 gap-3">
          {actions.map((action) => (
            <ActionButton key={action.href} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default QuickActionsMobile;
