import type React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-xs uppercase tracking-[.4em] text-gold-200">{eyebrow}</p> : null}
        <h2 className="font-display text-4xl text-white md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
