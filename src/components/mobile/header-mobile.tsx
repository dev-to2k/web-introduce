"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AuthPopup from "../auth/auth-popup";
import ThemeToggle from "../theme/theme-toggle";
import MobileSidebar from "./sidebar/mobile-sidebar";

export default function MobileHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Keep CSS var --header-h in sync for sections that depend on header height (e.g., Hero)
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
    const onResize = () => setVar();
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Add shadow when scrolled to emphasize sticky state
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky z-40 inset-x-0 border-b bg-brand text-white border-brand/30 top-[var(--topbar-h,0px)] ${
          isScrolled
            ? "shadow-sm dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : ""
        }`}
      >
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-atq.png"
              alt="ATQ Alliance Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Language"
              className="h-8 w-8 grid place-items-center rounded-full bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                <path d="M3 12h18M12 3c2.5 2.7 2.5 14.3 0 18M12 3c-2.5 2.7-2.5 14.3 0 18" />
              </svg>
            </button>
            <ThemeToggle />
            <button
              aria-label="Hotline"
              className="h-8 w-8 grid place-items-center rounded-full bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
            </button>
            <button
              aria-label="Menu"
              className="h-8 w-8 grid place-items-center rounded-full bg-white/10"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLoginClick={() => {
          setAuthMode("login");
          setIsAuthOpen(true);
        }}
        onRegisterClick={() => {
          setAuthMode("register");
          setIsAuthOpen(true);
        }}
      />

      {/* Auth Popup */}
      <AuthPopup
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
