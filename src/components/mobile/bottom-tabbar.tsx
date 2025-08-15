"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthPopup from "../auth/auth-popup";

const items: {
  href: string;
  label: string;
  img: string;
}[] = [
  {
    href: "/",
    label: "Trang Chủ",
    img: "/images/bottom-tabbar/trangchu-20x20.png",
  },
  {
    href: "/su-kien",
    label: "Sự Kiện",
    img: "/images/bottom-tabbar/sukien-20x20.png",
  },
  {
    href: "/lien-minh",
    label: "Liên Minh",
    img: "/images/bottom-tabbar/thanhvien-20x20.png",
  },
  {
    href: "/dai-ly",
    label: "Đại Lý",
    img: "/images/bottom-tabbar/tintuc-20x20.png",
  },
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
        <div className="mx-2 mb-2 rounded-2xl bg-brand text-white border border-brand/70 shadow-2xl">
          <ul className="grid grid-cols-5 text-[11px]">
            {items.map(({ href, label, img }) => {
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
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    <span className="relative block h-5 w-5">
                      <Image
                        src={img}
                        alt={label}
                        fill
                        sizes="20px"
                        className="object-contain"
                        priority={false}
                      />
                    </span>
                    <span className="leading-none">{label}</span>
                  </Link>
                </li>
              );
            })}
            <li className="flex flex-col items-center justify-center py-2">
              <button
                onClick={handleAccountClick}
                className="flex flex-col items-center gap-1 opacity-80"
              >
                <span className="relative block h-5 w-5">
                  <Image
                    src="/images/bottom-tabbar/taikhoan-20x20.png"
                    alt="Tài khoản"
                    fill
                    sizes="20px"
                    className="object-contain"
                    priority={false}
                  />
                </span>
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
