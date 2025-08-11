"use client";
import type { ReactNode } from "react";
import { getSectionTitleClasses } from "./section-title.styles";

export type SectionTitleClientProps = {
  children: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3" | "div";
  className?: string;
  variant?: "default" | "badge";
};

export default function SectionTitleClient({
  children,
  align = "center",
  as = "h2",
  className = "",
  variant = "default",
}: SectionTitleClientProps) {
  const Tag = as as any;
  return (
    <Tag className={getSectionTitleClasses({ align, variant, className })}>
      {children}
    </Tag>
  );
}
