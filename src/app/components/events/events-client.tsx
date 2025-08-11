"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "motion/react";

export type VideoItem = {
  id: string; // YouTube video ID
  title: string;
  channel?: string;
};

type Props = {
  items: VideoItem[];
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const listContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

const listItemVariants = itemVariants;

export default function EventsClient({ items }: Props) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((v) => v.title.toLowerCase().includes(q));
  }, [items, query]);

  const active = filtered[activeIdx] ?? filtered[0] ?? items[0];

  return (
    <motion.div
      className="grid md:grid-cols-12 gap-6 items-start md:items-stretch"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left: Main video */}
      <motion.div variants={itemVariants} className="md:col-span-8">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-card border border-slate-200 bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${active.id}`}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* Right: Sidebar list */}
      <motion.div variants={itemVariants} className="md:col-span-4 h-full min-h-0">
        <div className="bg-white rounded-xl border border-slate-200 shadow-card p-4 h-full flex flex-col min-h-0">
          <div className="flex items-center gap-6">
            <b className="text-slate-800">THIỆN NGUYỆN</b>
            <span className="text-slate-400">TIN TỨC</span>
            <span className="text-slate-400">SỰ KIỆN</span>
          </div>
          <div className="mt-2 h-0.5 w-24 bg-brand/80 rounded-full" />

          <input
            type="text"
            placeholder="Tìm kiếm video..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(0);
            }}
            className="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40"
          />

          <motion.div
            className="mt-4 space-y-3 pr-1 md:flex-1 md:min-h-0 md:overflow-y-auto"
            variants={listContainerVariants}
          >
            {filtered.map((v, idx) => (
              <motion.button
                key={v.id}
                onClick={() => setActiveIdx(idx)}
                className={`w-full flex items-center gap-3 rounded-lg border p-2 text-left transition shadow-sm ${
                  idx === activeIdx
                    ? "border-brand/60 ring-1 ring-brand/30 bg-brand/5"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
                variants={listItemVariants}
              >
                <div className="h-14 w-24 relative shrink-0 rounded">
                  <Image
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover rounded"
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium text-slate-800">
                    {v.title}
                  </div>
                  {v.channel && (
                    <div className="text-xs text-slate-500 truncate">
                      {v.channel}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}

            {filtered.length === 0 && (
              <div className="text-sm text-slate-500">Không tìm thấy video phù hợp.</div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
