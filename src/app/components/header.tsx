"use client";
import Button from "@/components/shared/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      // Đặt biến CSS toàn cục để các section (Hero) có thể dùng
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(() => setVar());
    ro.observe(el);
    const onResize = () => setVar();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  const navLinks: { href: string; label: string; isActive?: boolean }[] = [
    { href: "#san-pham", label: "Trang Chủ", isActive: true },
    { href: "#uu-dai", label: "Sự Kiện", isActive: false },
    { href: "#ho-tro", label: "Liên Minh", isActive: false },
    { href: "#huong-dan", label: "Đại Lý", isActive: false },
    { href: "#app", label: "Tuyển dụng", isActive: false },
  ];
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-atq.png"
            alt="ATQ Alliance Logo"
            width={160}
            height={60}
            priority
            className="h-10 md:h-16 w-auto max-w-full"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-lg">
          {navLinks.map(({ href, label, isActive }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors font-bold uppercase
                ${isActive ? "text-brand" : "text-slate-700"}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="link" size="sm" className="px-3 py-2 text-lg">
            Đăng nhập
          </Button>
          <Button variant="gradient" size="sm" className="text-lg">
            Đăng ký
          </Button>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
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
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "" : "hidden"
        } px-4 pb-3 border-t border-slate-200 bg-white`}
      >
        <div className="flex flex-col gap-3 font-semibold text-slate-700 py-3">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
