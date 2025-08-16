"use client";

import { RenderDesktop, RenderMobile } from "@/components/responsive/RenderAt";
import { cn } from "@/lib/utils";
import {
  Calendar,
  ChevronRight,
  Heart,
  Newspaper,
  Play,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Category = "news" | "video" | "charity";

type EventItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  category: Category;
  excerpt: string;
  href?: string;
};

const ALL_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "MEGA LIVE – Trao thưởng lớn 15/08",
    date: "2025-08-01",
    image: "https://images.okvip66.com/images/okvip/20250815224212_884144.png",
    category: "news",
    excerpt:
      "Sự kiện Mega Live với hàng loạt phần quà giá trị, xe điện, xe máy và nhiều ưu đãi.",
    href: "https://imvn3k4.uk.com/",
  },
  {
    id: "e2",
    title: "OKVIP DAY - MEGA LIVE 15/08 TẶNG XE ĐIỆN, XÂY TƯƠNG LAI XANH",
    date: "2025-07-15",
    image: "https://images.okvip66.com/images/okvip/20250806133326_902486.jpg",
    category: "news",
    excerpt: "OKVIP DAY - MEGA LIVE 15/08 TẶNG XE ĐIỆN, XÂY TƯƠNG LAI XANH",
  },
  {
    id: "e3",
    title: "OKVIP TRAO THƯỞNG THÀNH CÔNG SH125i TRONG PHIÊN MEGA LIVE 15/07",
    date: "2025-06-20",
    image: "https://images.okvip66.com/images/okvip/20250806133326_902486.jpg",
    category: "news",
    excerpt: "OKVIP TRAO THƯỞNG THÀNH CÔNG SH125i TRONG PHIÊN MEGA LIVE 15/07",
  },
  {
    id: "v1",
    title: "BÙNG NỔ MEGA LIVE 15/07 RINH XE SANG, NHẬN QUÀ XỊN",
    date: "2025-07-16",
    image: "https://images.okvip66.com/images/okvip/20250716230839_461334.jpg",
    category: "video",
    excerpt: "BÙNG NỔ MEGA LIVE 15/07 RINH XE SANG, NHẬN QUÀ XỊN",
  },
  {
    id: "c1",
    title: "78win KÝ KẾT ĐẠI SỨ THƯƠNG HIỆU CÙNG STEVEN GERRARD",
    date: "2025-05-10",
    image: "https://images.okvip66.com/images/okvip/20250716230839_461334.jpg",
    category: "charity",
    excerpt: "78win KÝ KẾT ĐẠI SỨ THƯƠNG HIỆU CÙNG STEVEN GERRARD",
  },
];

const CATEGORIES: { key: Category; label: string; icon: ReactNode }[] = [
  { key: "news", label: "Tin tức", icon: <Newspaper className="h-4 w-4" /> },
  { key: "video", label: "Video", icon: <PlayCircle className="h-4 w-4" /> },
  {
    key: "charity",
    label: "Thiện nguyện",
    icon: <Heart className="h-4 w-4" />,
  },
];

export default function EventsPage() {
  const [active, setActive] = useState<Category>("news");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const list = ALL_EVENTS.filter((e) => e.category === active);
    if (!query) return list;
    const q = query.toLowerCase();
    return list.filter((e) => e.title.toLowerCase().includes(q));
  }, [active, query]);

  const feature = filtered[0] ?? ALL_EVENTS.find((e) => e.category === active)!;
  const rest = filtered.slice(1);
  // Desktop right list: ensure 4 items. Prefer same category; fallback to others. Respect query if any.
  const list4Base = rest.slice(0, 4);
  const filterByQuery = (it: EventItem) =>
    !query || it.title.toLowerCase().includes(query.toLowerCase());
  const sameCatPool = ALL_EVENTS.filter(
    (e) =>
      e.category === active &&
      e.id !== feature.id &&
      !list4Base.some((x) => x.id === e.id) &&
      filterByQuery(e)
  );
  const otherPool = ALL_EVENTS.filter(
    (e) =>
      e.category !== active &&
      e.id !== feature.id &&
      !list4Base.some((x) => x.id === e.id) &&
      filterByQuery(e)
  );
  const list4 = [...list4Base, ...sameCatPool, ...otherPool].slice(0, 4);

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 md:py-10">
      {/* Desktop: flex layout */}
      <RenderDesktop>
        <div className="flex items-stretch gap-5 lg:gap-6">
          {/* Left nav */}
          <aside className="self-start flex-none w-52">
            <nav className="space-y-2 sticky top-[calc(var(--topbar-h,0px)+var(--header-h,64px)+16px)]">
              {CATEGORIES.map((c, i) => (
                <Reveal key={c.key} delay={i * 40}>
                  <button
                    onClick={() => setActive(c.key)}
                    className={cn(
                      "w-full flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition border",
                      active === c.key
                        ? "bg-brand text-white border-brand"
                        : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50 dark:bg-neutral-900 dark:text-white dark:border-white/10 dark:hover:bg-white/5"
                    )}
                  >
                    <span className="shrink-0">{c.icon}</span>
                    <span>{c.label}</span>
                  </button>
                </Reveal>
              ))}
              <Reveal>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40 dark:border-white/15 dark:bg-neutral-900 dark:text-white"
                />
              </Reveal>
            </nav>
          </aside>

          {/* Main feature */}
          <main className="flex-1 basis-0">
            <Reveal className="h-full">
              <FeatureCard item={feature} />
            </Reveal>
          </main>

          {/* Right list (4 items + CTA) */}
          <aside className="self-start flex-1 basis-0">
            <div className="space-y-5">
              {list4.map((e, i) => (
                <Reveal key={e.id} delay={i * 40}>
                  <CompactCard item={e} />
                </Reveal>
              ))}
              <Reveal delay={list4.length * 40}>
                <Link href="#" className="block">
                  <div className="rounded-lg bg-slate-900/80 text-white border border-slate-700/60 dark:bg-neutral-800 dark:border-white/10 px-4 py-3 font-semibold flex items-center justify-center gap-2">
                    <span>Xem nhiều hơn</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>
      </RenderDesktop>

      {/* Mobile: stacked */}
      <RenderMobile>
        <div className="space-y-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-sm font-semibold border inline-flex items-center gap-2",
                  active === c.key
                    ? "bg-brand text-white border-brand"
                    : "bg-white text-slate-800 border-slate-200 dark:bg-neutral-900 dark:text-white dark:border-white/10"
                )}
              >
                <span className="shrink-0">{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Tìm kiếm sự kiện..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40 dark:border-white/15 dark:bg-neutral-900 dark:text-white"
          />

          <Reveal>
            <FeatureCard item={feature} />
          </Reveal>

          <div className="space-y-3">
            {list4.map((e, i) => (
              <Reveal key={e.id} delay={60 + i * 40}>
                <CompactCard item={e} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={list4.length * 40 + 80}>
            <Link href="#" className="block">
              <div className="rounded-lg bg-slate-900/80 text-white border border-slate-700/60 dark:bg-neutral-800 dark:border-white/10 px-4 py-3 font-semibold flex items-center justify-center gap-2">
                <span>Xem nhiều hơn</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          </Reveal>
        </div>
      </RenderMobile>
    </section>
  );
}

function FeatureCard({ item }: { item: EventItem }) {
  return (
    <article className="rounded-2xl bg-white border border-slate-200 dark:bg-neutral-900 dark:border-white/10 overflow-hidden shadow-xl h-full">
      <div className="relative h-[220px] sm:h-[300px] md:h-[360px] p-4">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-3 left-3 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg inline-flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {item.date}
        </div>
        {item.category === "video" && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-12 w-12 rounded-full bg-black/50 text-white grid place-items-center">
              <Play className="h-6 w-6" />
            </div>
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
          {item.title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {item.excerpt}
        </p>
        <div className="mt-4">
          <Link
            href={item.href ?? "#"}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-white px-4 py-2 font-semibold hover:bg-brand/90 transition"
          >
            Xem đầy đủ
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function CompactCard({ item }: { item: EventItem }) {
  return (
    <Link
      href={item.href ?? "#"}
      target={item.href ? "_blank" : undefined}
      rel={item.href ? "noopener noreferrer" : undefined}
      className="block"
    >
      <div className="rounded-2xl bg-white border border-slate-200 dark:bg-neutral-900 dark:border-white/10 overflow-hidden hover:shadow-lg transition min-h-[120px]">
        <div className="flex min-h-[120px]">
          <div className="shrink-0 w-24 md:w-32 lg:w-36 h-16 md:h-20 lg:h-24 p-2 flex items-center justify-center my-auto">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={192}
                height={96}
                sizes="(max-width: 768px) 30vw, 192px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="py-2 pr-3 pl-1 md:p-3 flex-1">
            <h3 className="font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 uppercase">
              {item.title}
            </h3>
            <p className="mt-1 text-[11px] md:text-xs text-slate-500 leading-normal line-clamp-2">
              {item.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
