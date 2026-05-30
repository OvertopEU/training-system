"use client";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const needsSession = pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

  if (!needsSession) {
    return <>{children}</>;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
