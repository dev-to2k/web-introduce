"use client";
import Script from "next/script";

export default function ThemeScript() {
  return (
    <Script id="theme-script">
      {`
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var root = document.documentElement;
    var cls = root.classList;
    if (isDark) cls.add('dark'); else cls.remove('dark');
    // Also set a data-theme attr for CSS if needed
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  } catch (e) {}
})();
      `}
    </Script>
  );
}
