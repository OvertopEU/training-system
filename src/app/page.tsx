import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Film, Sparkles } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const [featured, categories, testimonials, reels] = await Promise.all([
    prisma.portfolioItem.findMany({ where: { featured: true }, include: { category: true }, take: 6, orderBy: { order: "asc" } }),
    prisma.portfolioCategory.findMany({ take: 8 }),
    prisma.testimonial.findMany({ where: { approved: true, featured: true }, take: 3 }),
    prisma.video.findMany({ take: 3, orderBy: { createdAt: "desc" } })
  ]);

  return (
    <>
      <section className="relative z-10 grid min-h-[calc(100vh-5rem)] place-items-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(205,163,66,.24),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Image src="/logo.png" alt="Light & Glory Studio" width={300} height={300} priority className="mx-auto mb-8 drop-shadow-[0_0_40px_rgba(205,163,66,.35)]" />
          <p className="mb-4 text-xs uppercase tracking-[.55em] text-gold-200">cinematic luxury photography</p>
          <h1 className="font-display text-5xl text-white md:text-8xl">LIGHT & GLORY STUDIO</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">Moody urban editorials, premium portraits, private client galleries, and seamless booking for stories that deserve a cinematic frame.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-200 px-6 py-3 text-sm font-medium text-black shadow-gold transition hover:bg-white">Book a Session <ArrowRight size={16} /></Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-200/30 px-6 py-3 text-sm font-medium text-gold-100 transition hover:bg-gold-200 hover:text-black">View Portfolio <Camera size={16} /></Link>
          </div>
        </div>
      </section>

      <Section eyebrow="featured" title="Editorial frames with a night-lit pulse">
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.id} href="/portfolio" className="group overflow-hidden rounded-lg border border-white/10 bg-white/[.03]">
              <Image src={item.thumbnailUrl ?? item.url} alt={item.title} width={700} height={900} className="h-96 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-4"><p className="font-display text-2xl">{item.title}</p><p className="text-sm text-gold-100/70">{item.category.name}</p></div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="categories" title="Built for street, portrait, lifestyle, and urban worlds">
        <div className="grid gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/portfolio?category=${category.slug}`} className="luxury-border rounded-lg p-6 transition hover:-translate-y-1 hover:border-gold-200/50">
              <Sparkles className="mb-8 text-gold-200" />
              <h3 className="font-display text-2xl">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{category.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="studio" title="A premium process from concept to delivery">
        <div className="grid gap-8 md:grid-cols-3">
          {["Creative direction", "Secure booking and deposits", "Private delivery galleries"].map((item) => (
            <div key={item} className="border-t border-gold-200/30 pt-6">
              <h3 className="font-display text-3xl">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">Every touchpoint is designed for calm confidence: planning, payment, approvals, favorites, and full-resolution delivery.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="voices" title="Client words with afterglow">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="luxury-border rounded-lg p-6">
              <p className="text-lg leading-8 text-white/80">“{testimonial.review}”</p>
              <footer className="mt-6 text-gold-100">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section eyebrow="motion" title="Reels, previews, and behind the scenes">
        <div className="grid gap-4 md:grid-cols-3">
          {(reels.length ? reels : [1, 2, 3]).map((reel) => (
            <Link key={typeof reel === "number" ? reel : reel.id} href="/reels" className="grid aspect-[9/16] place-items-center rounded-lg border border-white/10 bg-black/55 text-gold-100 transition hover:border-gold-200/50">
              <Film size={42} />
            </Link>
          ))}
        </div>
      </Section>

      <section className="relative z-10 px-4 py-24 text-center">
        <h2 className="font-display text-5xl md:text-7xl">Ready for your frame?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">Choose your session, reserve a slot, and keep everything in one polished client portal.</p>
        <Link href="/booking" className="mt-8 inline-flex rounded-full bg-gold-200 px-7 py-3 text-black shadow-gold">Book a Session</Link>
      </section>
    </>
  );
}
