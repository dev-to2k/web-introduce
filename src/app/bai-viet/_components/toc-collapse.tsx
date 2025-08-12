"use client";

import Link from "next/link";
import { useState } from "react";

export type TocItem = {
  id: string;
  title: string;
};

type Props = {
  items: TocItem[];
  className?: string;
};

export default function TocCollapse({ items, className }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={
        "rounded-xl border border-slate-200 bg-white shadow-card " +
        (className ?? "")
      }
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 font-semibold text-ink"
        aria-expanded={open}
      >
        <span>Nội dung bài viết</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M5 8l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="px-3 pb-3">
          <nav aria-label="Mục lục">
            <ul className="space-y-1 text-sm">
              {items.map((it) => (
                <li key={it.id}>
                  <Link
                    href={`#${it.id}`}
                    className="block px-2 py-1 rounded-md text-slate-700 hover:text-brand hover:bg-brand/10"
                  >
                    {it.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </aside>
  );
}
