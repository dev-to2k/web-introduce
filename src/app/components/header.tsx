"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-atq.png"
            alt="ATQ Alliance Logo"
            width={128}
            height={36}
            priority
            className="h-9 w-auto scale-200"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 font-semibold text-slate-700">
          <Link
            href="#san-pham"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Trang Chủ
          </Link>
          <Link
            href="#uu-dai"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Sự Kiện
          </Link>
          <Link
            href="#huong-dan"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Đại Lý
          </Link>
          <Link
            href="#app"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Tuyển dụng
          </Link>
          <Link
            href="#ho-tro"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Khuyến Mãi
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-3 py-2 font-semibold text-brand hover:text-indigo-600 transition-colors">
            Đăng nhập
          </button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand to-indigo-500 text-white font-semibold shadow-card hover:shadow-lg hover:-translate-y-0.5 transition">
            Đăng ký
          </button>
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
          <Link href="#san-pham">Trang Chủ</Link>
          <Link href="#uu-dai">Sự kiện</Link>
          <Link href="#huong-dan">Đại lý</Link>
          <Link href="#app">Tuyển dụng</Link>
          <Link href="#ho-tro">Khuyến mãi</Link>
        </div>
      </div>
    </header>
  );
}
