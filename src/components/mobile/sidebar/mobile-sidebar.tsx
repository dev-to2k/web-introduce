"use client";

import Button from "@/components/shared/button";
import ThemeToggle from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
  onLoginClick,
  onRegisterClick,
}: MobileSidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle animation
  useEffect(() => {
    if (!sidebarRef.current || !overlayRef.current) return;

    if (isOpen) {
      // Animate overlay
      overlayRef.current.classList.remove("hidden");
      // Force reflow
      void overlayRef.current.offsetWidth;
      overlayRef.current.classList.remove("opacity-0");

      // Animate sidebar
      sidebarRef.current.classList.remove("hidden");
      // Force reflow
      void sidebarRef.current.offsetWidth;
      sidebarRef.current.classList.remove("translate-x-full");
    } else {
      // Animate overlay out
      if (overlayRef.current) {
        overlayRef.current.classList.add("opacity-0");
      }

      // Animate sidebar out
      if (sidebarRef.current) {
        sidebarRef.current.classList.add("translate-x-full");
      }

      // Hide after animation completes
      setTimeout(() => {
        if (overlayRef.current && sidebarRef.current) {
          overlayRef.current.classList.add("hidden");
          sidebarRef.current.classList.add("hidden");
        }
      }, 300);
    }
  }, [isOpen]);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Trang Chủ" },
    { href: "/su-kien", label: "Sự Kiện" },
    { href: "/lien-minh", label: "Liên Minh" },
    { href: "/dai-ly", label: "Đại Lý" },
    { href: "/tuyen-dung", label: "Tuyển dụng" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white dark:bg-neutral-900 shadow-xl transition-transform duration-300 ease-out hidden translate-x-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-atq.png"
              alt="ATQ Alliance Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Đóng menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-2 rounded-md font-semibold transition-colors",
                      isActive
                        ? "bg-slate-100 dark:bg-white/10 text-brand"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-brand"
                    )}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="px-4">
          <div className="h-px bg-slate-200 dark:bg-white/10"></div>
        </div>

        {/* Auth Buttons */}
        <div className="p-4 space-y-3">
          <Button
            variant="link"
            className="w-full justify-center"
            onClick={() => {
              onLoginClick();
              onClose();
            }}
          >
            Đăng nhập
          </Button>
          <Button
            variant="gradient"
            className="w-full justify-center"
            onClick={() => {
              onRegisterClick();
              onClose();
            }}
          >
            Đăng ký
          </Button>
        </div>

        {/* Settings */}
        <div className="p-4 mt-auto border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Chế độ tối
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
