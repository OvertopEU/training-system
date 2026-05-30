import type React from "react";
import Link from "next/link";

export function AdminModule({
  title,
  stats,
  actions
}: {
  title: string;
  stats: { label: string; value: string | number }[];
  actions?: { label: string; href: string }[];
}) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[.4em] text-gold-200">admin</p>
          <h1 className="mt-3 font-display text-5xl">{title}</h1>
        </div>
        <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">Dashboard</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="luxury-border rounded-lg p-5">
            <p className="text-sm text-white/50">{stat.label}</p>
            <p className="mt-3 font-display text-4xl gold-text">{stat.value}</p>
          </div>
        ))}
      </div>
      {actions ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Link key={action.href} href={action.href} className="rounded-full bg-gold-200 px-5 py-3 text-sm text-black">{action.label}</Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
