"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { CinematicShell } from "@/components/cinematic-shell";

const photoNav = [
  ["Portfolio", "/portfolio"],
  ["Booking", "/booking"],
  ["Pricing", "/pricing"],
  ["Reels", "/reels"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

const whatsappUrl = "https://api.whatsapp.com/send?phone=447719799244";
const whatsappDisplay = "+44 7719 799244";
const phoneUrl = "tel:+447719799244";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTrainerArea = pathname === "/trainer" || pathname.startsWith("/trainer/");

  if (isTrainerArea) {
    return <main>{children}</main>;
  }

  return (
    <>
      <CinematicShell />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-gold-300/10 bg-black/55 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Light & Glory Studio" width={48} height={48} className="rounded-full" priority />
            <span className="hidden font-display text-lg tracking-[.22em] text-white sm:block">LIGHT & GLORY</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {photoNav.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-gold-200">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-white/70 transition hover:text-white">
              Login
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
              className="hidden items-center gap-2 rounded-full border border-gold-200/30 px-4 py-2 text-sm text-gold-100 transition hover:bg-gold-200 hover:text-black sm:inline-flex"
            >
              <MessageCircle size={18} />
              WhatsApp
            </Link>
            <Link href="/booking" className="rounded-full border border-gold-200/40 px-4 py-2 text-sm text-gold-100 shadow-gold transition hover:bg-gold-200 hover:text-black">
              Book
            </Link>
          </div>
        </nav>
      </header>
      <main className="pt-20">{children}</main>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-medium text-black shadow-[0_16px_50px_rgba(0,0,0,.45)] transition hover:bg-white"
      >
        <MessageCircle size={18} />
        <span>WhatsApp {whatsappDisplay}</span>
      </Link>
      <footer className="border-t border-gold-300/10 bg-black px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr_1fr]">
          <Image src="/logo.png" alt="Light & Glory Studio" width={130} height={130} />
          <div>
            <p className="font-display text-2xl tracking-[.2em]">LIGHT & GLORY STUDIO</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">Cinematic urban photography, private client galleries, secure bookings, payments, and editorial visual storytelling.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: {whatsappDisplay}</Link>
            <Link href={phoneUrl}>Call: {whatsappDisplay}</Link>
            <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/light.and.glory.studio/"}>Instagram</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
