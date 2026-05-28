import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { addMinutes } from "date-fns";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { bookingSchema } from "@/lib/validations";
import { bookingEmail, sendEmail } from "@/lib/email";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const bookings = await prisma.booking.findMany({
    where: session.user.role === "ADMIN" ? {} : { clientEmail: session.user.email },
    include: { package: true, category: true, payments: true, addOns: { include: { addOn: true } } },
    orderBy: { startsAt: "desc" }
  });
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const parsed = bookingSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const selectedPackage = await prisma.package.findUniqueOrThrow({ where: { id: parsed.data.packageId } });
  const addOns = await prisma.addOn.findMany({ where: { id: { in: parsed.data.addOnIds }, active: true } });
  const startsAt = parsed.data.startsAt;
  const endsAt = addMinutes(startsAt, selectedPackage.durationMinutes);

  const conflict = await prisma.booking.findFirst({
    where: {
      status: { in: ["PENDING", "APPROVED"] },
      startsAt: { lt: endsAt },
      endsAt: { gt: startsAt }
    }
  });
  if (conflict) return NextResponse.json({ error: "This slot is already booked" }, { status: 409 });

  const totalCents = selectedPackage.priceCents + addOns.reduce((sum, addOn) => sum + addOn.priceCents, 0);
  const booking = await prisma.booking.create({
    data: {
      userId: session?.user?.id,
      categoryId: parsed.data.categoryId,
      packageId: parsed.data.packageId,
      clientName: parsed.data.clientName,
      clientEmail: parsed.data.clientEmail,
      clientPhone: parsed.data.clientPhone,
      notes: parsed.data.notes,
      startsAt,
      endsAt,
      totalCents,
      depositCents: selectedPackage.depositCents,
      paymentOption: parsed.data.paymentOption,
      paymentStatus: parsed.data.paymentOption === "CASH" ? "PENDING" : "UNPAID",
      addOns: { create: addOns.map((addOn) => ({ addOnId: addOn.id })) }
    },
    include: { package: true, category: true, addOns: { include: { addOn: true } } }
  });

  await sendEmail({ to: booking.clientEmail, subject: "Booking request received", html: bookingEmail(booking.clientName, booking.startsAt) });
  return NextResponse.json(booking, { status: 201 });
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, status, startsAt } = await request.json();
  const existing = await prisma.booking.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (session.user.role !== "ADMIN" && existing.clientEmail !== session.user.email) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const data: { status?: "PENDING" | "APPROVED" | "REJECTED" | "COMPLETED" | "CANCELLED"; startsAt?: Date; endsAt?: Date } = {};
  if (status) data.status = status;
  if (startsAt) {
    const selectedPackage = await prisma.package.findUniqueOrThrow({ where: { id: existing.packageId } });
    data.startsAt = new Date(startsAt);
    data.endsAt = addMinutes(data.startsAt, selectedPackage.durationMinutes);
  }
  const booking = await prisma.booking.update({ where: { id }, data });
  return NextResponse.json(booking);
}
