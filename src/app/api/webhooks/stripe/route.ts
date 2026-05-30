import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { assertStripe } from "@/lib/stripe";
import { sendEmail } from "@/lib/email";

function escapeHtml(value: string | null | undefined) {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    const isTrainerPayment = session.metadata?.source === "trainer";

    if (isTrainerPayment) {
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        await sendEmail({
          to: adminEmail,
          subject: "Training payment confirmed",
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.5">
              <h2>Training deposit paid</h2>
              <p><strong>Name:</strong> ${escapeHtml(session.metadata?.clientName || "Unknown")}</p>
              <p><strong>Contact:</strong> ${escapeHtml(session.metadata?.contact || session.customer_details?.email || "Unknown")}</p>
              <p><strong>Service:</strong> ${escapeHtml(session.metadata?.service || "Unknown")}</p>
              <p><strong>Preferred day:</strong> ${escapeHtml(session.metadata?.preferredDay || "Unknown")}</p>
              <p><strong>Goal:</strong> ${escapeHtml(session.metadata?.goal)}</p>
              <p><strong>Stripe session:</strong> ${escapeHtml(session.id)}</p>
            </div>
          `
        });
      }
    }

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
