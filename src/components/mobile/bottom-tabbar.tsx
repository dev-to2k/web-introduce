"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const items: {
  href: string;
  label: string;
  img: string;
}[] = [
  {
    href: "/",
    label: "Trang Chủ",
    img: "/images/bottom-tabbar/trangchu-48x48.png",
  },
  {
    href: "/su-kien",
    label: "Sự Kiện",
    img: "/images/bottom-tabbar/sukien-48x48.png",
  },
  {
    href: "/lien-minh",
    label: "Liên Minh",
    img: "/images/bottom-tabbar/thanhvien-48x48.png",
  },
  {
    href: "/dai-ly",
    label: "Đại Lý",
    img: "/images/bottom-tabbar/tintuc-48x48.png",
  },
] as const;

export default function MobileBottomTabbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Handle account button click
  const handleAccountClick = () => {
    router.push("/dang-ky");
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
                    <span className="relative block">
                      <Image
                        src={img}
                        alt={label}
                        width={48}
                        height={48}
                        sizes="48px"
                        className="object-contain"
                        priority={false}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="flex flex-col items-center justify-center py-2">
              <button
                onClick={handleAccountClick}
                className="flex flex-col items-center gap-1 opacity-80"
              >
                <span className="relative block">
                  <Image
                    src="/images/bottom-tabbar/taikhoan-48x48.png"
                    alt="Tài khoản"
                    width={48}
                    height={48}
                    sizes="48px"
                    className="object-contain"
                    priority={false}
                  />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
