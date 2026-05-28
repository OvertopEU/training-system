import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { assertStripe } from "@/lib/stripe";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("stripe-signature");
  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = assertStripe().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = session.metadata?.bookingId;
    if (bookingId) {
      const payment = await prisma.payment.update({
        where: { stripeCheckoutId: session.id },
        data: { status: "PAID", stripePaymentIntentId: session.payment_intent?.toString() },
        include: { booking: true }
      });
      await prisma.booking.update({ where: { id: bookingId }, data: { paymentStatus: "PAID" } });
      if (payment.booking) {
        await sendEmail({ to: payment.booking.clientEmail, subject: "Payment confirmed", html: `<p>Your Light & Glory payment has been confirmed.</p>` });
      }
    }
  }
  return NextResponse.json({ received: true });
}
