"use client";
import { useEffect, useRef } from "react";

export default function Topbar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--topbar-h", `${h}px`);
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
  return (
    <div
      ref={ref}
      className="text-slate-200 text-xs bg-ink dark:bg-neutral-950 sticky top-0 inset-x-0 z-50"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between min-w-0">
        <span className="truncate max-w-[70%] text-slate-200/90 dark:text-slate-300/90">
          CSKH 24/7 • Hotline: 1900 0000
        </span>
        <span className="shrink-0 text-slate-200/90 dark:text-slate-300/90">
          VN | EN
        </span>
      </div>
    </div>
  );
}
