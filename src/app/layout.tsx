import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteChrome } from "@/components/site-chrome";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-display" });

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  applicationName: "Light & Glory Studio",
  title: {
    default: "Light & Glory Studio",
    template: "%s | Light & Glory Studio"
  },
  description: "Luxury urban photography, private client galleries, secure bookings, and cinematic visual storytelling.",
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/trainer?lang=en"
    }
  },
  openGraph: {
    title: "Light & Glory Studio",
    description: "Luxury urban photography, private client galleries, secure bookings, and cinematic visual storytelling.",
    url: "/",
    siteName: "Light & Glory Studio",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1400&q=80",
        width: 1400,
        height: 933,
        alt: "Luxury urban photography"
      }
    ]
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className="dark">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
