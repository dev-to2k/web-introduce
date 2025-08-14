"use client";

import { useMediaQuery } from "../../hooks/use-media";

type Props = {
  children: React.ReactNode;
};

export function RenderDesktop({ children }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop === null) return null;
  return isDesktop ? <>{children}</> : null;
}

export function RenderMobile({ children }: Props) {
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  if (isMobile === null) return null;
  return isMobile ? <>{children}</> : null;
}
