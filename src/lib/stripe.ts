import Stripe from "stripe";

export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2025-02-24.acacia" })
  : null;

export function assertStripe() {
  if (!stripe) throw new Error("STRIPE_SECRET_KEY is not configured");
  return stripe;
}
