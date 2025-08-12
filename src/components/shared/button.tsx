"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

export type ButtonVariant = "gradient" | "brand" | "outline" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_CLASSNAME: Record<ButtonVariant, string> = {
  gradient:
    "bg-gradient-to-r from-brand via-indigo-500 to-violet-500 text-white shadow-card hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand/40 transition-transform duration-300",
  brand:
    "bg-brand text-white shadow-card hover:bg-brand/90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition-all duration-200",
  outline:
    "border-2 border-brand/70 text-brand hover:bg-brand/10 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition-transform duration-300",
  link: "bg-transparent text-brand hover:text-indigo-600 transition-colors",
};

const SIZE_CLASSNAME: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3",
  lg: "h-11 md:h-12 min-w-[168px] px-5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonImpl(
    { className, variant = "brand", size = "md", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold",
          VARIANT_CLASSNAME[variant],
          SIZE_CLASSNAME[size],
          className
        )}
        {...props}
      />
    );
  }
);

export default Button;
