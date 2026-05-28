import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
import { AdminModule } from "@/components/admin-module";

export default async function AdminDashboardPage() {
  const [bookings, upcoming, payments, users, galleries, downloads] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { startsAt: { gte: new Date() }, status: { in: ["PENDING", "APPROVED"] } } }),
    prisma.payment.findMany({ where: { status: "PAID" } }),
    prisma.user.count(),
    prisma.clientGallery.count(),
    prisma.download.count()
  ]);
  const revenue = payments.reduce((sum, payment) => sum + payment.amountCents, 0);
  const modules = ["portfolio", "categories", "bookings", "payments", "galleries", "packages", "addons", "testimonials", "blog", "users", "availability", "videos", "contact", "analytics", "settings"];
  return (
    <>
      <AdminModule title="Studio Control Room" stats={[
        { label: "Total bookings", value: bookings },
        { label: "Upcoming", value: upcoming },
        { label: "Revenue", value: money(revenue) },
        { label: "Users", value: users }
      ]} />
      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 px-4 pb-20 sm:px-6 md:grid-cols-4 lg:px-8">
        {modules.map((module) => (
          <Link key={module} href={`/admin/${module}`} className="luxury-border rounded-lg p-5 capitalize transition hover:border-gold-200/50">{module.replace("-", " ")}</Link>
        ))}
        <div className="luxury-border rounded-lg p-5">Galleries: {galleries}</div>
        <div className="luxury-border rounded-lg p-5">Downloads: {downloads}</div>
      </section>
    </>
  );
}
