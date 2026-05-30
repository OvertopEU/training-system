import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold-200/70", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";
