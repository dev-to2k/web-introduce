import type { ReactNode } from "react";
import { getSectionTitleClasses } from "./section-title.styles";

export type SectionTitleProps = {
  children: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3" | "div";
  className?: string;
  variant?: "default" | "badge";
};

export default function SectionTitle({
  children,
  align = "center",
  as = "h2",
  className = "",
  variant = "default",
}: SectionTitleProps) {
  const Tag = as as any;
  const classes = getSectionTitleClasses({ align, variant, className });
  return <Tag className={classes}>{children}</Tag>;
}
