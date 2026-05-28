import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trainer App | Personal Boxing Coach",
  description: "Dedicated training website for fitness and boxing coaching.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
