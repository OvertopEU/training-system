import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { categorySchema } from "@/lib/validations";
import { slugify } from "@/lib/utils";

export async function GET() {
  const categories = await prisma.portfolioCategory.findMany({ include: { _count: { select: { items: true, bookings: true } } }, orderBy: { name: "asc" } });
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const parsed = categorySchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const category = await prisma.portfolioCategory.create({
    data: { ...parsed.data, slug: parsed.data.slug ? slugify(parsed.data.slug) : slugify(parsed.data.name) }
  });
  return NextResponse.json(category, { status: 201 });
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { id } = await request.json();
  await prisma.portfolioCategory.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
