import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteChrome } from "@/components/site-chrome";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Light & Glory Studio | Luxury Photography",
    template: "%s | Light & Glory Studio"
  },
  description: "Premium cinematic photography, private galleries, booking, reels, and editorial urban storytelling.",
  openGraph: {
    title: "Light & Glory Studio",
    description: "Luxury cinematic photography platform.",
    images: ["/logo.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
