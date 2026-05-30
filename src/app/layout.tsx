import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  applicationName: "TS",
  title: {
    default: "TS | Training System",
    template: "%s | TS"
  },
  description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      bg: "/trainer?lang=bg",
      de: "/trainer?lang=de",
      fr: "/trainer?lang=fr",
      es: "/trainer?lang=es"
    }
  },
  openGraph: {
    title: "TS | Training System",
    description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
    url: "/",
    siteName: "TS",
    type: "website",
    images: [
      {
        url: "/trainer/coach-boxer-cover.jpg",
        width: 1080,
        height: 1350,
        alt: "TS personal trainer boxing coach"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TS | Training System",
    description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
    images: ["/trainer/coach-boxer-cover.jpg"]
  },
  icons: {
    icon: "/trainer-favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
