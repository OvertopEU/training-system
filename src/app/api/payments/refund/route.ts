import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { assertStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { paymentId } = await request.json();
  const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
  if (!payment?.stripePaymentIntentId) return NextResponse.json({ error: "Refundable payment not found" }, { status: 404 });
  const refund = await assertStripe().refunds.create({ payment_intent: payment.stripePaymentIntentId });
  await prisma.payment.update({ where: { id: payment.id }, data: { status: "REFUNDED", refundedAt: new Date() } });
  return NextResponse.json(refund);
}
