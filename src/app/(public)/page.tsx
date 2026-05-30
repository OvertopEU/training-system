import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";

export const metadata = {
  title: "Light & Glory Studio",
  description: "Luxury urban photography, private client galleries, secure bookings, and cinematic visual storytelling.",
  openGraph: {
    title: "Light & Glory Studio",
    description: "Luxury urban photography, private client galleries, secure bookings, and cinematic visual storytelling.",
    type: "website",
    images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1400&q=80"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Light & Glory Studio",
    description: "Luxury urban photography, private client galleries, secure bookings, and cinematic visual storytelling.",
    images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1400&q=80"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function PhotographyHomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury photography"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[.4em] text-gold-200">Light & Glory Studio</p>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Cinematic urban photography with private gallery, booking, and editorial polish.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
              Luxury photography for brands, editorial stories, and clients who want mood, light, and atmosphere without noise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/portfolio" className="inline-flex items-center rounded-full bg-gold-200 px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-300">
                View portfolio
              </Link>
              <Link href="/booking" className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:border-gold-200 hover:text-gold-100">
                Book a session
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="portfolio" title="Featured work">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Editorial portraits", "Cinematic light, atmosphere, and carefully directed presence."],
            ["Brand stories", "Visual campaigns shaped for social, web, and premium presentation."],
            ["Private galleries", "Secure client delivery, favorites, downloads, and polished handoff."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[.04] p-6">
              <p className="font-display text-3xl text-white">{title}</p>
              <p className="mt-4 text-sm leading-7 text-white/65">{text}</p>
            </article>
          ))}
        </div>
        <Link href="/portfolio" className="mt-8 inline-flex rounded-full border border-gold-200/40 px-5 py-3 text-sm text-gold-100 transition hover:bg-gold-200 hover:text-black">
          Open portfolio
        </Link>
      </Section>

      <Section eyebrow="about" title="Photography with cinematic clarity">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[.32em] text-gold-200">studio</p>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Light & Glory creates editorial portraits, brand campaigns, and private client galleries that feel polished, intimate and cinematic.
            </p>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[.32em] text-gold-200">services</p>
            <ul className="grid gap-4 text-white/80 sm:grid-cols-2">
              <li>Branding photography</li>
              <li>Private client galleries</li>
              <li>Editorial stories</li>
              <li>Event and lifestyle imagery</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
