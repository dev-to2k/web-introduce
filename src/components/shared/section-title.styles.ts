export type SectionTitleAlign = "left" | "center";
export type SectionTitleVariant = "default" | "badge";

export function getSectionTitleClasses({
  align = "center",
  variant = "default",
  className = "",
}: {
  align?: SectionTitleAlign;
  variant?: SectionTitleVariant;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center" : "text-left";
  const baseDefault =
    "font-extrabold text-3xl md:text-4xl tracking-tight text-brand dark:text-brand";
  const baseBadge = [
    "flex w-fit items-center uppercase gap-2 px-4 py-2 rounded-full",
    // Background + text + ring with dark-mode variants
    "bg-brand/10 text-brand ring-1 ring-brand/30",
    "dark:bg-white/5 dark:text-brand dark:ring-brand/40",
    // Typography
    "font-extrabold text-xl md:text-2xl",
    // Subtle glow remains visible on dark
    "shadow-[0_0_28px_0_rgba(59,130,246,0.25)] dark:shadow-[0_0_22px_0_rgba(59,130,246,0.25)]",
  ].join(" ");
  const base = variant === "badge" ? baseBadge : baseDefault;
  const centerBadge =
    variant === "badge" && align === "center" ? "mx-auto" : "";
  return `${base} ${alignCls} ${centerBadge} ${className}`.trim();
}
