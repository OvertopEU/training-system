# Trainer Payments Setup

Use this checklist to finish Stripe payments for `/trainer`.

## Current Stripe Objects

- Stripe account: `acct_1TcVwX2KgNuVVEvF`
- Deposit price: `price_1TcdGM2KgNuVVEvF950joPNX`
- Amount: `2000` minor units, `GBP 20.00`
- Production site URL: `https://training-system.org`
- Checkout route: `POST /api/trainer/checkout`
- Webhook route: `POST /api/webhooks/stripe`

## Required `.env` Values

Replace the placeholder values in `.env`:

```bash
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
TRAINER_DEPOSIT_PRICE_ID="price_1TcdGM2KgNuVVEvF950joPNX"
TRAINER_DEPOSIT_AMOUNT_CENTS="2000"
TRAINER_PAYMENT_CURRENCY="gbp"
NEXT_PUBLIC_SITE_URL="https://training-system.org"
ADMIN_EMAIL="your-admin-email@example.com"
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
EMAIL_FROM="Training System <hello@your-domain.com>"
```

## Stripe Dashboard Steps

1. Open Stripe Dashboard > Developers > API keys.
2. Copy the secret key for the same mode as the price ID.
3. Put it in `.env` as `STRIPE_SECRET_KEY`.
4. Open Stripe Dashboard > Developers > Webhooks.
5. Add endpoint:

```text
https://training-system.org/api/webhooks/stripe
```

6. Select this event:

```text
checkout.session.completed
```

7. Copy the endpoint signing secret and put it in `.env` as `STRIPE_WEBHOOK_SECRET`.

## Local Test

For local webhook testing, use Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the `whsec_...` shown by the CLI into `.env`.

Then run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/trainer
```

Submit the booking form. You should be redirected to Stripe Checkout for the `GBP 20.00` deposit.

## Verification

After payment succeeds:

- Stripe redirects back to `/trainer?...payment=success#booking`.
- The page shows the payment success message.
- Stripe sends `checkout.session.completed` to `/api/webhooks/stripe`.
- The webhook sends an admin email with the trainer booking details.

If SMTP is not configured, the app logs email output in development instead of sending a real email.
