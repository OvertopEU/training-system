import { PrismaClient, MediaType, PostStatus, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { slugify } from "../src/lib/utils";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@lightandglory.studio";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: Role.ADMIN },
    create: {
      name: "Light & Glory Admin",
      email: adminEmail,
      role: Role.ADMIN,
      passwordHash: await bcrypt.hash(adminPassword, 12),
      emailVerified: new Date()
    }
  });

  const categories = [
    ["Street Photography 🚧", "Cinematic city stories shaped by shadow and gold."],
    ["Portraits 👨‍🚀", "Editorial identity portraits with a futuristic edge."],
    ["Lifestyle 👽", "Premium moments, motion, styling, and atmosphere."],
    ["Urban 🪐", "Moody architecture, neon textures, and night ambience."]
  ];

  for (const [name, description] of categories) {
    await prisma.portfolioCategory.upsert({
      where: { slug: slugify(name) },
      update: { description },
      create: { name, slug: slugify(name), description }
    });
  }

  const packages = [
    ["Essential Session", "A focused cinematic shoot with professional edits.", 25000, 7500, 60],
    ["Signature Session", "A complete editorial session with location direction.", 55000, 15000, 120],
    ["Glory Session", "A premium campaign-style experience with extended delivery.", 120000, 30000, 240]
  ] as const;

  for (const [name, description, priceCents, depositCents, durationMinutes] of packages) {
    await prisma.package.upsert({
      where: { slug: slugify(name) },
      update: { description, priceCents, depositCents, durationMinutes },
      create: { name, slug: slugify(name), description, priceCents, depositCents, durationMinutes }
    });
  }

  for (const addon of [
    { name: "Rush Delivery", description: "Final edits delivered within 72 hours.", priceCents: 9000 },
    { name: "Extra Edited Images", description: "Ten additional high-resolution selects.", priceCents: 12000 },
    { name: "Vertical Reel Cut", description: "A cinematic social reel from the session.", priceCents: 18000 }
  ]) {
    const exists = await prisma.addOn.findFirst({ where: { name: addon.name } });
    if (!exists) await prisma.addOn.create({ data: addon });
  }

  const firstCategory = await prisma.portfolioCategory.findFirstOrThrow();
  const media = [
    ["Midnight Geometry", "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"],
    ["Golden Crossing", "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=80"],
    ["After Hours Portrait", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"],
    ["Urban Orbit", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"]
  ];

  for (const [index, item] of media.entries()) {
    const [title, url] = item;
    const exists = await prisma.portfolioItem.findFirst({ where: { title } });
    if (!exists) {
      await prisma.portfolioItem.create({
        data: {
          title,
          description: "Seed editorial frame for the Light & Glory visual system.",
          type: MediaType.PHOTO,
          url,
          thumbnailUrl: url,
          featured: index < 3,
          order: index,
          categoryId: firstCategory.id
        }
      });
    }
  }

  for (const testimonial of [
    { name: "Amara V.", rating: 5, review: "The session felt like a film set. Every frame had presence.", approved: true, featured: true },
    { name: "Noah K.", rating: 5, review: "Luxury, calm direction, and images that looked unreal in the best way.", approved: true, featured: true }
  ]) {
    const exists = await prisma.testimonial.findFirst({ where: { name: testimonial.name } });
    if (!exists) await prisma.testimonial.create({ data: testimonial });
  }

  await prisma.blogPost.upsert({
    where: { slug: "cinematic-urban-photography-guide" },
    update: {},
    create: {
      title: "Cinematic Urban Photography Guide",
      slug: "cinematic-urban-photography-guide",
      excerpt: "How night light, styling, and location rhythm create premium city portraits.",
      content: "A Light & Glory session is planned around location, texture, movement, wardrobe, and the final mood of the edit.",
      tags: ["urban", "editorial", "portrait"],
      status: PostStatus.PUBLISHED,
      featured: true,
      publishedAt: new Date()
    }
  });

  for (const dayOfWeek of [1, 2, 3, 4, 5, 6]) {
    await prisma.availability.upsert({
      where: { dayOfWeek_startTime_endTime: { dayOfWeek, startTime: "10:00", endTime: "18:00" } },
      update: { active: true, slotMinutes: 90 },
      create: { dayOfWeek, startTime: "10:00", endTime: "18:00", slotMinutes: 90 }
    });
  }

  await prisma.adminSetting.upsert({
    where: { key: "brand" },
    update: { value: { name: "LIGHT & GLORY STUDIO", currency: "GBP", depositLabel: "Deposit / капаро" } },
    create: { key: "brand", value: { name: "LIGHT & GLORY STUDIO", currency: "GBP", depositLabel: "Deposit / капаро" } }
  });
}

main()
  .finally(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
