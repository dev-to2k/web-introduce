"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, SVGProps } from "react";
import { useState } from "react";
import AuthPopup from "../auth/auth-popup";

const items: {
  href: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
}[] = [
  { href: "/", label: "Trang Chủ", icon: HomeIcon },
  { href: "/su-kien", label: "Sự Kiện", icon: EventsIcon },
  { href: "/ho-tro", label: "Liên Minh", icon: SupportIcon },
  { href: "/huong-dan", label: "Đại Lý", icon: GuideIcon },
] as const;

export default function MobileBottomTabbar() {
  const pathname = usePathname();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Handle account button click
  const handleAccountClick = () => {
    setAuthMode("login");
    setIsAuthOpen(true);
  };

  return (
    <>
      <nav className="fixed bottom-0 inset-x-0 z-50">
        <div className="mx-2 mb-2 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl dark:bg-neutral-900 dark:text-white dark:border-white/10">
          <ul className="grid grid-cols-5 text-[11px]">
            {items.map(({ href, label, icon: Icon }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <li
                  key={href}
                  className="flex flex-col items-center justify-center py-2"
                >
                  <Link
                    href={href}
                    className={`flex flex-col items-center gap-1 ${
                      isActive
                        ? "text-brand"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="leading-none">{label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="flex flex-col items-center justify-center py-2">
              <button
                onClick={handleAccountClick}
                className="flex flex-col items-center gap-1"
              >
                <AccountIcon className="h-5 w-5" />
                <span className="leading-none">Tài khoản</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Auth Popup */}
      <AuthPopup
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function EventsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function GuideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function AccountIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
