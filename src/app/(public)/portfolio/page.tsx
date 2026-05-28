import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";
import { PortfolioGrid } from "@/components/portfolio-grid";

export default async function PortfolioPage() {
  const [items, categories] = await Promise.all([
    prisma.portfolioItem.findMany({ include: { category: true }, orderBy: [{ order: "asc" }, { createdAt: "desc" }] }),
    prisma.portfolioCategory.findMany({ orderBy: { name: "asc" } })
  ]);
  return (
    <Section eyebrow="portfolio" title="Masonry gallery, video, lightbox, and category filtering">
      <PortfolioGrid items={items} categories={categories} />
    </Section>
  );
}
