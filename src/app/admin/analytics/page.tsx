import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
import { AdminModule } from "@/components/admin-module";

export default async function AnalyticsPage() {
  const [bookings, payments, downloads, users, completed] = await Promise.all([
    prisma.booking.count(),
    prisma.payment.findMany({ where: { status: "PAID" } }),
    prisma.download.count(),
    prisma.user.count(),
    prisma.booking.count({ where: { status: "COMPLETED" } })
  ]);
  return <AdminModule title="Analytics" stats={[
    { label: "Bookings", value: bookings },
    { label: "Revenue", value: money(payments.reduce((s, p) => s + p.amountCents, 0)) },
    { label: "Downloads", value: downloads },
    { label: "Completed", value: completed },
    { label: "User growth", value: users }
  ]} />;
}
