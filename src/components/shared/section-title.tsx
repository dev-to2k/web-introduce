import type { ElementType, ReactNode } from "react";
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
  const Tag = as as ElementType;
  const classes = getSectionTitleClasses({ align, variant, className });
  return (
    <Tag className={classes}>
      <span className="dark:text-white">{children}</span>
    </Tag>
  );
}
