import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { assertStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const { bookingId } = await request.json();
  const booking = await prisma.booking.findUnique({ where: { id: bookingId }, include: { package: true } });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  if (booking.paymentOption === "CASH") return NextResponse.json({ error: "Cash bookings do not need checkout" }, { status: 400 });

  const amount = booking.paymentOption === "DEPOSIT" ? booking.depositCents : booking.totalCents;
  const stripe = assertStripe();
  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: booking.clientEmail,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: amount,
          product_data: { name: `${booking.package.name} - ${booking.paymentOption.toLowerCase()} payment` }
        }
      }
    ],
    metadata: { bookingId: booking.id },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/dashboard/bookings?paid=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/dashboard/bookings?cancelled=1`
  });

  await prisma.payment.create({
    data: {
      bookingId: booking.id,
      amountCents: amount,
      option: booking.paymentOption,
      stripeCheckoutId: checkout.id
    }
  });

  return NextResponse.json({ url: checkout.url });
}
