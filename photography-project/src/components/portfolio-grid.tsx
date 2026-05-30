"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioCategory, PortfolioItem } from "@prisma/client";

export function PortfolioGrid({
  items,
  categories
}: {
  items: (PortfolioItem & { category: PortfolioCategory })[];
  categories: PortfolioCategory[];
}) {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const filtered = useMemo(() => (active === "all" ? items : items.filter((item) => item.category.slug === active)), [active, items]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {["all", ...categories.map((category) => category.slug)].map((slug) => (
          <button
            key={slug}
            onClick={() => setActive(slug)}
            className={`rounded-full border px-4 py-2 text-sm transition ${active === slug ? "border-gold-200 bg-gold-200 text-black" : "border-white/10 text-white/70 hover:border-gold-200/60 hover:text-gold-100"}`}
          >
            {slug === "all" ? "All" : categories.find((category) => category.slug === slug)?.name}
          </button>
        ))}
      </div>
      <div className="masonry">
        {filtered.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            onClick={() => setLightbox(item)}
            className="group block w-full overflow-hidden rounded-lg border border-white/10 bg-white/[.03] text-left"
          >
            <Image src={item.thumbnailUrl ?? item.url} alt={item.title} width={900} height={1200} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110" />
            <div className="p-4">
              <p className="font-display text-2xl text-white">{item.title}</p>
              <p className="mt-1 text-sm text-gold-100/70">{item.category.name}</p>
            </div>
          </motion.button>
        ))}
      </div>
      {lightbox ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur" onClick={() => setLightbox(null)}>
          <div className="max-h-[88vh] max-w-5xl overflow-hidden rounded-lg border border-gold-200/30 bg-black">
            {lightbox.type === "VIDEO" ? (
              <video src={lightbox.url} controls autoPlay className="max-h-[78vh] w-full" />
            ) : (
              <Image src={lightbox.url} alt={lightbox.title} width={1600} height={1200} className="max-h-[78vh] w-auto object-contain" />
            )}
            <div className="p-4">
              <p className="font-display text-2xl">{lightbox.title}</p>
              <p className="text-sm text-white/60">{lightbox.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
