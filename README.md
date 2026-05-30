# Training System

Standalone trainer website for boxing, online fitness guidance, nutrition plans, direct WhatsApp/phone contact, and Stripe deposit checkout.

The old photography app has been moved out of the deployable Next app into `photography-project/` so the trainer deployment has no public route, layout, middleware, Prisma, admin, gallery, or booking dependency on it.

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:3000`.

## Core Routes

- `/`
- `/trainer`
- `POST /api/trainer/checkout`
- `POST /api/webhooks/stripe`

## Required Production Services

- Stripe secret key and webhook secret.
- SMTP or Resend credentials if real email notifications are needed.
- `NEXT_PUBLIC_SITE_URL` set to the production domain.

No database is required for the trainer landing page or trainer checkout route.

## Deploy

```bash
npm run build
```

The build command is intentionally `next build`; it does not run Prisma.
