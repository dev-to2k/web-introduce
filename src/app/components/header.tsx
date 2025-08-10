"use client";
import Image from "next/image";
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
          <a
            href="#san-pham"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Sản phẩm
          </a>
          <a
            href="#uu-dai"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Khuyến mãi
          </a>
          <a
            href="#huong-dan"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Hướng dẫn
          </a>
          <a
            href="#app"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            App
          </a>
          <a
            href="#ho-tro"
            className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Hỗ trợ
          </a>
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
          <a href="#san-pham">Sản phẩm</a>
          <a href="#uu-dai">Khuyến mãi</a>
          <a href="#huong-dan">Hướng dẫn</a>
          <a href="#app">App</a>
          <a href="#ho-tro">Hỗ trợ</a>
        </div>
      </div>
    </header>
  );
}
