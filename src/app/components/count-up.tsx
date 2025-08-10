"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";

type Props = {
  end: number;
  className?: string;
  decimalPlaces?: number;
};

// Backwards-compatible wrapper over MagicUI NumberTicker
export default function CountUp({ end, className, decimalPlaces = 0 }: Props) {
  return <NumberTicker value={end} decimalPlaces={decimalPlaces} className={className} />;
}
