import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { assertStripe } from "@/lib/stripe";

const supportedLangs = ["en", "bg", "de", "fr", "es"] as const;

export async function POST(request: Request) {
  const priceId = process.env.TRAINER_NUTRITION_PRICE_ID ?? process.env.TRAINER_DEPOSIT_PRICE_ID;

  if (!priceId) {
    return NextResponse.json({ error: "Nutrition plan price is not configured." }, { status: 500 });
  }

  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes("replace")) {
    return NextResponse.json({ error: "Stripe secret key is not configured." }, { status: 500 });
  }

  const body = (await request.json().catch(() => ({}))) as { lang?: string };
  const lang: (typeof supportedLangs)[number] = supportedLangs.includes(body.lang as (typeof supportedLangs)[number])
    ? (body.lang as (typeof supportedLangs)[number])
    : "en";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? headers().get("origin") ?? "http://localhost:3000";
  const localizedTrainerPath = lang === "en" ? "/trainer" : `/trainer?lang=${lang}`;
  const returnUrl = `${siteUrl}${localizedTrainerPath}#nutrition`;

  try {
    const session = await assertStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      allow_promotion_codes: true,
      success_url: returnUrl,
      cancel_url: returnUrl,
      metadata: {
        product: "nutrition_plan",
        lang
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Stripe checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
