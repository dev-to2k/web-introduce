"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  end: number;
  durationMs?: number; // default 1500ms
  className?: string;
  locale?: string; // e.g. 'en-US' for comma grouping
};

export default function CountUp({ end, durationMs = 1500, className, locale = "en-US" }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  // Use IntersectionObserver to start animating when visible
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        observer.disconnect();

        const start = performance.now();
        const from = 0;
        const to = end;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          const current = Math.round(from + (to - from) * eased);
          setValue(current);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, durationMs]);

  const display = useMemo(() => new Intl.NumberFormat(locale).format(value), [value, locale]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
