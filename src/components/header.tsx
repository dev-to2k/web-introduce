"use client";
import Button from "@/components/shared/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "../components/theme/theme-toggle";
import AuthPopup from "./auth/auth-popup";
import { RenderMobile } from "./responsive/RenderAt";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) {
        document.documentElement.style.setProperty("--header-h", `${h}px`);
      }
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  // Memoize navigation links to prevent unnecessary re-renders
  const navLinks = useMemo(
    () => [
      { href: "/", label: "Trang Chủ" },
      { href: "/su-kien", label: "Sự Kiện" },
      { href: "/lien-minh", label: "Liên Minh" },
      { href: "/dai-ly", label: "Đại Lý" },
      { href: "/tuyen-dung", label: "Tuyển dụng" },
    ],
    []
  );

  // Helper function to check if a link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky z-40 w-full border-b bg-brand text-white backdrop-blur border-brand/30 top-[var(--topbar-h,0px)]`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo-atq.png"
            alt="ATQ Alliance Logo"
            width={160}
            height={60}
            priority
            className="h-10 md:h-16 w-auto max-w-full scale-200 translate-x-16 transition-transform duration-300 group-hover:drop-shadow-lg scale-[2.5]"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-white text-lg translate-x-12">
          {navLinks.map(({ href, label }) => {
            const isActive = isLinkActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-4 py-3 rounded-xl transition-all duration-300 font-bold uppercase text-white/90 hover:text-white group overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-white/20 to-white/10 shadow-lg shadow-white/20 backdrop-blur-sm"
                    : "hover:bg-gradient-to-r hover:from-white/15 hover:to-white/5 hover:shadow-lg hover:shadow-white/10"
                }`}
              >
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5 ${
                    isActive ? "from-white/20 to-white/10" : ""
                  }`}
                />

                {/* Text with glow effect */}
                <span
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] scale-110"
                      : "group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] group-hover:scale-105"
                  }`}
                >
                  {label}
                </span>

                {/* Bottom border animation */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/60 to-white/40 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="link"
            size="sm"
            className="relative px-4 py-2.5 text-lg text-white hover:text-white group overflow-hidden transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
            onClick={() => {
              setAuthMode("login");
              setIsAuthOpen(true);
            }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              Đăng nhập
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5" />
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="relative text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group overflow-hidden"
            onClick={() => {
              setAuthMode("register");
              setIsAuthOpen(true);
            }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
              Đăng ký
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
        <RenderMobile>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
            aria-label="Mở menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300"
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
          } px-4 pb-3 border-t border-brand/30 bg-brand text-white`}
        >
          <div className="flex flex-col gap-3 font-semibold text-white py-3">
            {navLinks.map(({ href, label }) => {
              const isActive = isLinkActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-white/20 to-white/10 shadow-lg shadow-white/20 font-bold"
                      : "hover:bg-gradient-to-r hover:from-white/15 hover:to-white/5 hover:shadow-lg hover:shadow-white/10"
                  } text-white hover:text-white/90`}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5 ${
                      isActive ? "from-white/20 to-white/10" : ""
                    }`}
                  />
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] scale-110"
                        : "group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] group-hover:scale-105"
                    }`}
                  >
                    {label}
                  </span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/60 to-white/40 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <button
              className="relative text-left px-4 py-3 rounded-xl text-white hover:text-white/90 transition-all duration-300 group overflow-hidden hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
              onClick={() => {
                setAuthMode("login");
                setIsAuthOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                Đăng nhập
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5" />
            </button>
            <button
              className="relative text-left px-4 py-3 rounded-xl text-white hover:text-white/90 transition-all duration-300 group overflow-hidden hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
              onClick={() => {
                setAuthMode("register");
                setIsAuthOpen(true);
                setIsOpen(false);
              }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                Đăng ký
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/10 group-hover:to-white/5" />
            </button>
          </div>
        </div>
      </RenderMobile>

      {/* Auth Popup */}
      <AuthPopup
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
}
