# Light & Glory Studio

A production-ready full-stack luxury photography platform built with Next.js 14 App Router, TypeScript, TailwindCSS, Prisma, PostgreSQL, NextAuth, Stripe, Cloudinary, and email delivery.

## Features

- Cinematic public website with portfolio, pricing, booking, blog, reels, testimonials, contact, privacy, and terms pages.
- Credentials authentication with bcrypt password hashing, JWT sessions, and role-based admin/user routing.
- Full Prisma/PostgreSQL schema for users, sessions, bookings, payments, packages, add-ons, portfolio media, categories, private galleries, favorites, downloads, testimonials, blog, availability, blocked dates, settings, invoices, and notifications.
- Real API routes for registration, password reset token email, booking creation/update/reschedule/cancel status, available slots, Stripe checkout, Stripe webhook verification, refunds, portfolio/category CRUD, Cloudinary upload signatures, client galleries, contact submissions, and admin analytics/settings.
- Admin dashboard modules for portfolio, categories, bookings, payments, galleries, packages, add-ons, testimonials, blog, users, availability, videos/reels, analytics, and site settings.
- User dashboard for bookings, galleries, favorites, and profile settings.
- Cloudinary-ready secure upload signatures and automatic portfolio media cleanup on delete.
- Resend or SMTP email support with development console fallback.
- SEO metadata, sitemap, robots.txt, favicon, OpenGraph, responsive dark luxury design, animated particles, interactive cursor, and smooth motion.

## Quick Start

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Open `http://localhost:3000`.

## Seeded Admin

Set these in `.env` before seeding, or use the defaults:

```bash
ADMIN_EMAIL="admin@lightandglory.studio"
ADMIN_PASSWORD="ChangeMe123!"
```

## Required Production Services

- PostgreSQL database via `DATABASE_URL`.
- Stripe keys and webhook secret for online full/deposit payments.
- Cloudinary credentials for image/video uploads.
- Resend API key or SMTP credentials for real transactional emails.
- `NEXTAUTH_SECRET` must be a strong random value.

## Core Routes

- Public: `/`, `/portfolio`, `/about`, `/booking`, `/pricing`, `/contact`, `/blog`, `/reels`, `/behind-the-scenes`, `/testimonials`, `/login`, `/register`.
- User: `/dashboard`, `/dashboard/bookings`, `/dashboard/galleries`, `/dashboard/favorites`, `/dashboard/profile`.
- Client galleries: `/gallery/[slug]`.
- Admin: `/admin` and all management modules under `/admin/*`.

## API Routes

- `POST /api/auth/register`
- `POST /api/auth/reset-password`
- `GET|POST|PATCH /api/bookings`
- `GET /api/bookings/slots`
- `POST /api/payments/checkout`
- `POST /api/payments/refund`
- `POST /api/webhooks/stripe`
- `GET|POST|PATCH|DELETE /api/portfolio`
- `GET|POST|DELETE /api/categories`
- `GET|POST /api/galleries`
- `POST /api/galleries/access`
- `POST|DELETE /api/galleries/favorite`
- `POST /api/galleries/download`
- `POST /api/uploads/signature`
- `POST /api/contact`
- `GET /api/admin/analytics`
- `GET|POST /api/admin/settings`

## Deployment Notes

Configure Stripe to send events to `/api/webhooks/stripe`, set `NEXT_PUBLIC_SITE_URL` to the production domain, run `prisma migrate deploy`, and seed only when creating the first environment.

For the trainer checkout setup, see `docs/trainer-payments-setup.md`.
