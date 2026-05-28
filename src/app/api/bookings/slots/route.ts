import { NextResponse } from "next/server";
import { addMinutes, format, parseISO, set } from "date-fns";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date");
  const packageId = searchParams.get("packageId");
  if (!dateParam || !packageId) return NextResponse.json({ error: "date and packageId are required" }, { status: 400 });

  const date = parseISO(dateParam);
  const selectedPackage = await prisma.package.findUniqueOrThrow({ where: { id: packageId } });
  const availability = await prisma.availability.findMany({ where: { dayOfWeek: date.getDay(), active: true } });
  const blocked = await prisma.blockedDate.findFirst({ where: { date: { gte: set(date, { hours: 0, minutes: 0 }), lte: set(date, { hours: 23, minutes: 59 }) } } });
  if (blocked) return NextResponse.json([]);

  const dayStart = set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  const dayEnd = set(date, { hours: 23, minutes: 59, seconds: 59, milliseconds: 0 });
  const bookings = await prisma.booking.findMany({
    where: { status: { in: ["PENDING", "APPROVED"] }, startsAt: { gte: dayStart }, endsAt: { lte: dayEnd } }
  });

  const slots = availability.flatMap((window) => {
    const [startHour, startMinute] = window.startTime.split(":").map(Number);
    const [endHour, endMinute] = window.endTime.split(":").map(Number);
    const end = set(date, { hours: endHour, minutes: endMinute, seconds: 0, milliseconds: 0 });
    const result: string[] = [];
    let cursor = set(date, { hours: startHour, minutes: startMinute, seconds: 0, milliseconds: 0 });
    while (addMinutes(cursor, selectedPackage.durationMinutes) <= end) {
      const slotEnd = addMinutes(cursor, selectedPackage.durationMinutes);
      const conflicts = bookings.some((booking) => booking.startsAt < slotEnd && booking.endsAt > cursor);
      if (!conflicts) result.push(format(cursor, "HH:mm"));
      cursor = addMinutes(cursor, window.slotMinutes);
    }
    return result;
  });
  return NextResponse.json([...new Set(slots)]);
}
