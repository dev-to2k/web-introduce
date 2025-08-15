"use client";
import { useEffect, useMemo, useState, type SVGProps } from "react";

type Props = {
  className?: string;
};

export default function ThemeToggle({ className }: Props) {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Sync initial state from DOM/localStorage/media query
  useEffect(() => {
    try {
      const root = document.documentElement;
      const saved = window.localStorage.getItem("theme");
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      const initial = saved ? saved === "dark" : prefersDark;
      if (initial) root.classList.add("dark");
      else root.classList.remove("dark");
      root.setAttribute("data-theme", initial ? "dark" : "light");
      setIsDark(initial);
    } catch {}
  }, []);

  const label = useMemo(() => (isDark ? "Dark" : "Light"), [isDark]);

  const onToggle = () => {
    const next = !isDark;
    const root = document.documentElement;
    if (next) root.classList.add("dark");
    else root.classList.remove("dark");
    root.setAttribute("data-theme", next ? "dark" : "light");
    try {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
        isDark
          ? "bg-neutral-900 text-white border-white/20 hover:bg-neutral-800"
          : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
      } ${className ?? ""}`}
      suppressHydrationWarning
    >
      <span aria-hidden className="inline-flex items-center justify-center">
        {isDark ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        )}
      </span>
      <span className="hidden sm:inline" suppressHydrationWarning>
        {label}
      </span>
    </button>
  );
}

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}
