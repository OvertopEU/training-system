import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const bookingSchema = z.object({
  categoryId: z.string().cuid(),
  packageId: z.string().cuid(),
  addOnIds: z.array(z.string().cuid()).default([]),
  startsAt: z.coerce.date(),
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(6),
  notes: z.string().max(2000).optional(),
  paymentOption: z.enum(["FULL", "DEPOSIT", "CASH"])
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10)
});

export const categorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).optional(),
  description: z.string().optional()
});

export const portfolioItemSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  type: z.enum(["PHOTO", "VIDEO"]),
  url: z.string().url(),
  thumbnailUrl: z.string().url().optional(),
  cloudinaryId: z.string().optional(),
  categoryId: z.string().cuid(),
  featured: z.boolean().default(false),
  order: z.number().int().default(0)
});

export const gallerySchema = z.object({
  title: z.string().min(2),
  clientEmail: z.string().email(),
  password: z.string().min(6).optional(),
  expiresAt: z.coerce.date().optional(),
  downloadsEnabled: z.boolean().default(true)
});
