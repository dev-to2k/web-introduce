"use client";

import SectionTitle from "@/components/shared/section-title";
import { cn } from "@/lib/utils";
import { Calendar, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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
    image: "/images/58WIN-content.png",
    category: "news",
    excerpt:
      "Sự kiện Mega Live với hàng loạt phần quà giá trị, xe điện, xe máy và nhiều ưu đãi.",
    href: "https://imvn3k4.uk.com/",
  },
  {
    id: "e2",
    title: "Bùng nổ Mega Live 15/07 – Rinh xe sang",
    date: "2025-07-15",
    image: "/images/8xx-content.png",
    category: "news",
    excerpt:
      "Tham gia phát sóng trực tiếp, nhận quà hấp dẫn cho toàn bộ người chơi.",
  },
  {
    id: "e3",
    title: "Ký kết đại sứ thương hiệu",
    date: "2025-06-20",
    image: "/images/ATQ-CSKH.png",
    category: "news",
    excerpt: "Đánh dấu cột mốc hợp tác chiến lược cùng đại sứ thương hiệu.",
  },
  {
    id: "v1",
    title: "Recap Mega Live – Highlights",
    date: "2025-07-16",
    image: "/images/8xx-content.png",
    category: "video",
    excerpt: "Video tổng hợp điểm nhấn từ sự kiện trực tuyến.",
  },
  {
    id: "c1",
    title: "Thiện nguyện – Trao yêu thương",
    date: "2025-05-10",
    image: "/images/ATQ-CSKH.png",
    category: "charity",
    excerpt: "Hành trình gắn kết cộng đồng và sẻ chia giá trị.",
  },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "news", label: "Tin tức" },
  { key: "video", label: "Video" },
  { key: "charity", label: "Thiện nguyện" },
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
  const stickyCompact = rest[0];
  const restTail = rest.slice(1);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-6 md:py-10">
      <div className="mb-6 md:mb-8">
        <SectionTitle align="center" variant="badge">
          Sự kiện – ATQ
        </SectionTitle>
      </div>

      {/* Desktop: 3 columns */}
      <div className="hidden md:grid md:grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* Left nav */}
        <aside className="md:col-span-2 self-start">
          <nav className="space-y-2 sticky top-[calc(var(--topbar-h,0px)+var(--header-h,64px)+16px)]">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl font-semibold transition border",
                  active === c.key
                    ? "bg-brand text-white border-brand"
                    : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50 dark:bg-neutral-900 dark:text-white dark:border-white/10 dark:hover:bg-white/5"
                )}
              >
                {c.label}
              </button>
            ))}
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40 dark:border-white/15 dark:bg-neutral-900 dark:text-white"
            />
          </nav>
        </aside>

        {/* Main feature */}
        <main className="md:col-span-7">
          <FeatureCard item={feature} />
        </main>

        {/* Right list */}
        <aside className="md:col-span-3 self-start">
          <div className="lg:sticky lg:top-[calc(var(--topbar-h,0px)+var(--header-h,64px)+16px)]">
            <div className="space-y-4 overflow-y-auto pr-1 max-h-[calc(100vh-(var(--topbar-h,0px)+var(--header-h,64px)+32px))]">
              {stickyCompact && (
                <div className="sticky top-0 z-10">
                  <CompactCard key={stickyCompact.id} item={stickyCompact} />
                </div>
              )}
              {restTail.map((e) => (
                <CompactCard key={e.id} item={e} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden space-y-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-sm font-semibold border",
                active === c.key
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-slate-800 border-slate-200 dark:bg-neutral-900 dark:text-white dark:border-white/10"
              )}
            >
              {c.label}
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

        <FeatureCard item={feature} />

        <div className="space-y-3">
          {rest.map((e) => (
            <CompactCard key={e.id} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }: { item: EventItem }) {
  return (
    <article className="rounded-2xl bg-white border border-slate-200 dark:bg-neutral-900 dark:border-white/10 overflow-hidden shadow-xl">
      <div className="relative h-[220px] sm:h-[300px] md:h-[360px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority
        />
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
      <div className="rounded-xl bg-white border border-slate-200 dark:bg-neutral-900 dark:border-white/10 overflow-hidden hover:shadow-lg transition">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative aspect-[16/10] col-span-1">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 col-span-2">
            <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 line-clamp-2">
              {item.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
