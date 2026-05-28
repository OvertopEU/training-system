import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const [totalBookings, upcomingBookings, pendingPayments, completedSessions, users, downloads, payments, popularPackage, popularCategory] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { startsAt: { gte: new Date() }, status: { in: ["PENDING", "APPROVED"] } } }),
    prisma.payment.count({ where: { status: { in: ["PENDING", "UNPAID"] } } }),
    prisma.booking.count({ where: { status: "COMPLETED" } }),
    prisma.user.count(),
    prisma.download.count(),
    prisma.payment.findMany({ where: { status: "PAID" }, select: { amountCents: true } }),
    prisma.booking.groupBy({ by: ["packageId"], _count: true, orderBy: { _count: { packageId: "desc" } }, take: 1 }),
    prisma.booking.groupBy({ by: ["categoryId"], _count: true, orderBy: { _count: { categoryId: "desc" } }, take: 1 })
  ]);
  return NextResponse.json({
    totalBookings,
    upcomingBookings,
    revenueCents: payments.reduce((sum, payment) => sum + payment.amountCents, 0),
    pendingPayments,
    completedSessions,
    galleryDownloads: downloads,
    userGrowth: users,
    mostBookedPackageId: popularPackage[0]?.packageId ?? null,
    mostViewedCategoryId: popularCategory[0]?.categoryId ?? null
  });
}
