# Training System

Standalone trainer website for boxing, online fitness guidance, nutrition plans, and direct WhatsApp/phone contact.

The old photography app has been moved out of the deployable Next app into `photography-project/` so the trainer deployment has no public route, layout, middleware, Prisma, admin, gallery, or booking dependency on it.

There is only one active application in this repository now: the root Next app under `src/`. The previous standalone `trainer-app/` duplicate was removed to avoid stale trainer pages or split Codex context.

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

## Required Production Services

- SMTP or Resend credentials if real email notifications are needed.
- `NEXT_PUBLIC_SITE_URL` set to the production domain.

No database is required for the trainer landing page.

## Deploy

```bash
npm run build
```

The build command is intentionally `next build`; it does not run Prisma.
