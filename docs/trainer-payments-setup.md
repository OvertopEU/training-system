# Trainer Nutrition Plan Payment Setup

Use this checklist to connect the nutrition plan checkout for `/trainer`.

## Stripe Object

- Product: nutrition plan
- Price ID env variable: `TRAINER_NUTRITION_PRICE_ID`
- Production site URL: `https://training-system.org`
- Checkout route: `POST /api/trainer/nutrition-checkout`

## Required `.env` Values

```bash
STRIPE_SECRET_KEY="sk_test_..."
TRAINER_NUTRITION_PRICE_ID="price_..."
NEXT_PUBLIC_SITE_URL="https://training-system.org"
```

## Stripe Dashboard Steps

1. Open Stripe Dashboard > Product catalog.
2. Open the nutrition plan product.
3. Copy the active Price ID.
4. Put it in `.env` and in the Vercel environment as `TRAINER_NUTRITION_PRICE_ID`.
5. Make sure `STRIPE_SECRET_KEY` is set in the same mode as the Price ID.

## Verification

1. Run the site.
2. Open `/trainer#nutrition`.
3. Click the nutrition plan payment button.
4. Stripe Checkout should open with the final price for the plan.
