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
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-atq.png"
            alt="ATQ Alliance Logo"
            width={160}
            height={60}
            priority
            className="h-10 md:h-16 w-auto max-w-full scale-200 translate-x-16"
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
                className={`px-3 py-2 rounded-md transition-colors font-bold uppercase text-white/90 hover:text-white hover:bg-white/10 ${
                  isActive ? "bg-white/15" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="link"
            size="sm"
            className="px-3 py-2 text-lg text-white hover:text-white/80"
            onClick={() => {
              setAuthMode("login");
              setIsAuthOpen(true);
            }}
          >
            Đăng nhập
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="text-lg"
            onClick={() => {
              setAuthMode("register");
              setIsAuthOpen(true);
            }}
          >
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
                  className={`${
                    isActive ? "font-bold" : ""
                  } text-white hover:text-white/80 transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <button
              className="text-left text-white hover:text-white/80 transition-colors"
              onClick={() => {
                setAuthMode("login");
                setIsAuthOpen(true);
                setIsOpen(false);
              }}
            >
              Đăng nhập
            </button>
            <button
              className="text-left text-white hover:text-white/80 transition-colors"
              onClick={() => {
                setAuthMode("register");
                setIsAuthOpen(true);
                setIsOpen(false);
              }}
            >
              Đăng ký
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
