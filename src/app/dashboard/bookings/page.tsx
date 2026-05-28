import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
import { Section } from "@/components/section";

export default async function MyBookingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");
  const bookings = await prisma.booking.findMany({ where: { clientEmail: session.user.email }, include: { package: true, category: true }, orderBy: { startsAt: "desc" } });
  return (
    <Section eyebrow="dashboard" title="My Bookings">
      <div className="space-y-3">
        {bookings.map((booking) => (
          <div key={booking.id} className="luxury-border rounded-lg p-5">
            <div className="flex flex-wrap justify-between gap-3">
              <div><p className="font-display text-2xl">{booking.package.name}</p><p className="text-sm text-white/55">{booking.category.name} · {booking.startsAt.toLocaleString()}</p></div>
              <div className="text-right"><p className="text-gold-100">{money(booking.totalCents)}</p><p className="text-sm text-white/55">{booking.status} · {booking.paymentStatus}</p></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
