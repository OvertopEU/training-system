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
  description: "Персонални тренировки по бокс, онлайн фитнес насоки, хранителни режими и записване.",
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/trainer?lang=en"
    }
  },
  openGraph: {
    title: "TS | Training System",
    description: "Персонални тренировки по бокс, онлайн фитнес насоки, хранителни режими и записване.",
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
    description: "Персонални тренировки по бокс, онлайн фитнес насоки, хранителни режими и записване.",
    images: ["/trainer/coach-boxer-cover.jpg"]
  },
  icons: {
    icon: "/trainer-favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className="dark">
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        <main>{children}</main>
      </body>
    </html>
  );
}
