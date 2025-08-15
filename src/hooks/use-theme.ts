"use client";
import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Prefer SSR-safe, synchronous read from DOM set by ThemeScript
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "dark" || attr === "light") return attr;
    }
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved as Theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Đồng bộ theme giữa các instance của hook (và giữa các tab)
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
        setTheme(e.newValue as Theme);
      }
    };
    const onThemeChange = (e: Event) => {
      const detail = (e as CustomEvent<Theme>).detail;
      if (detail === "dark" || detail === "light") setTheme(detail);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("theme-change", onThemeChange as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("theme-change", onThemeChange as EventListener);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement.classList;
    if (theme === "dark") root.add("dark");
    else root.remove("dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      // Phát event để các component khác cập nhật ngay
      window.dispatchEvent(new CustomEvent<Theme>("theme-change", { detail: next }));
      // Lưu localStorage để đồng bộ giữa các tab
      window.localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, setTheme, toggle } as const;
}
