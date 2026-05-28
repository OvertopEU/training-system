import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "gold",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "gold" | "ghost" | "dark" }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-gold-200 disabled:opacity-50",
        variant === "gold" && "bg-gold-200 text-black shadow-gold hover:bg-white",
        variant === "ghost" && "border border-gold-200/30 text-gold-100 hover:bg-gold-200 hover:text-black",
        variant === "dark" && "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
