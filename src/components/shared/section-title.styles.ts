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
    "font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900";
  const baseBadge =
    "flex w-fit items-center uppercase gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-extrabold text-xl md:text-2xl ring-1 ring-brand/30 shadow-[0_0_28px_0_rgba(59,130,246,0.25)]";
  const base = variant === "badge" ? baseBadge : baseDefault;
  const centerBadge =
    variant === "badge" && align === "center" ? "mx-auto" : "";
  return `${base} ${alignCls} ${centerBadge} ${className}`.trim();
}
