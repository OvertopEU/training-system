import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export default async function UserDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");
  const [bookings, galleries, favorites] = await Promise.all([
    prisma.booking.count({ where: { clientEmail: session.user.email } }),
    prisma.clientGallery.count({ where: { clientEmail: session.user.email } }),
    prisma.favorite.count({ where: { userId: session.user.id } })
  ]);
  return (
    <Section eyebrow="dashboard" title={`Welcome${session.user.name ? `, ${session.user.name}` : ""}`}>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["My Bookings", bookings, "/dashboard/bookings"],
          ["My Galleries", galleries, "/dashboard/galleries"],
          ["Favorites", favorites, "/dashboard/favorites"],
          ["Profile Settings", "Edit", "/dashboard/profile"]
        ].map(([label, value, href]) => (
          <Link key={href} href={href.toString()} className="luxury-border rounded-lg p-6 transition hover:border-gold-200/50">
            <p className="text-sm text-white/50">{label}</p>
            <p className="mt-4 font-display text-4xl gold-text">{value}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
