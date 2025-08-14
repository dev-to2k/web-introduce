"use client";
import Button from "@/components/shared/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/theme/theme-toggle";
import { RenderMobile } from "./responsive/RenderAt";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { href: string; label: string; isActive?: boolean }[] = [
    { href: "/", label: "Trang Chủ", isActive: true },
    { href: "/su-kien", label: "Sự Kiện", isActive: false },
    { href: "/ho-tro", label: "Liên Minh", isActive: false },
    { href: "/huong-dan", label: "Đại Lý", isActive: false },
    { href: "/app", label: "Tuyển dụng", isActive: false },
  ];

  return (
    <header
      className={`sticky z-40 w-full border-b bg-white/80 backdrop-blur border-slate-200 dark:bg-neutral-900/80 dark:border-white/10 top-8`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-atq.png"
            alt="ATQ Alliance Logo"
            width={160}
            height={60}
            priority
            className="h-10 md:h-16 w-auto max-w-full"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 dark:text-slate-200 text-lg">
          {navLinks.map(({ href, label, isActive }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand transition-colors font-bold uppercase
                ${
                  isActive ? "text-brand" : "text-slate-700 dark:text-slate-200"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="link" size="sm" className="px-3 py-2 text-lg">
            Đăng nhập
          </Button>
          <Button variant="gradient" size="sm" className="text-lg">
            Đăng ký
          </Button>
        </div>
        <RenderMobile>
          <button
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Mở menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </RenderMobile>
      </div>
      <RenderMobile>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } px-4 pb-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-neutral-900`}
        >
          <div className="flex flex-col gap-3 font-semibold text-slate-700 dark:text-slate-200 py-3">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </RenderMobile>
    </header>
  );
}
