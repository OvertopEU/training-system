import { NextResponse } from "next/server";
import { z } from "zod";
import { assertStripe } from "@/lib/stripe";

const trainerCheckoutSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(6),
  service: z.string().min(2),
  day: z.string().min(2),
  goal: z.string().max(2000).optional()
});

function getDepositAmount() {
  const amount = Number(process.env.TRAINER_DEPOSIT_AMOUNT_CENTS);
  if (!Number.isInteger(amount) || amount < 50) {
    throw new Error("TRAINER_DEPOSIT_AMOUNT_CENTS must be configured in cents");
  }

  return amount;
}

function getLineItem(service: string) {
  const price = process.env.TRAINER_DEPOSIT_PRICE_ID;
  if (price) {
    return { price, quantity: 1 };
  }

  return {
    quantity: 1,
    price_data: {
      currency: process.env.TRAINER_PAYMENT_CURRENCY ?? "gbp",
      unit_amount: getDepositAmount(),
      product_data: {
        name: "Training System deposit",
        description: `Deposit for ${service}`
      }
    }
  };
}

export async function POST(request: Request) {
  const parsed = trainerCheckoutSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid booking details" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const customerEmail = z.string().email().safeParse(parsed.data.contact);

  const checkout = await assertStripe().checkout.sessions.create({
    mode: "payment",
    customer_email: customerEmail.success ? customerEmail.data : undefined,
    line_items: [getLineItem(parsed.data.service)],
    metadata: {
      source: "trainer",
      clientName: parsed.data.name,
      contact: parsed.data.contact,
      service: parsed.data.service,
      preferredDay: parsed.data.day,
      goal: parsed.data.goal ?? ""
    },
    success_url: `${siteUrl}/trainer?lang=bg&payment=success&session_id={CHECKOUT_SESSION_ID}#booking`,
    cancel_url: `${siteUrl}/trainer?lang=bg&payment=cancelled#booking`
  });

  return NextResponse.json({ url: checkout.url });
}
