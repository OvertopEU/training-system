import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn("min-h-32 w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold-200/70", className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
