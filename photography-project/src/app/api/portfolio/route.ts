import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { portfolioItemSchema } from "@/lib/validations";
import { cloudinary } from "@/lib/cloudinary";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const items = await prisma.portfolioItem.findMany({
    where: {
      category: category ? { slug: category } : undefined,
      featured: featured ? featured === "true" : undefined
    },
    include: { category: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }]
  });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const parsed = portfolioItemSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const item = await prisma.portfolioItem.create({ data: parsed.data });
  return NextResponse.json(item, { status: 201 });
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { id, ...data } = await request.json();
  const item = await prisma.portfolioItem.update({ where: { id }, data });
  return NextResponse.json(item);
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { id } = await request.json();
  const item = await prisma.portfolioItem.delete({ where: { id } });
  if (item.cloudinaryId) await cloudinary.uploader.destroy(item.cloudinaryId, { resource_type: item.type === "VIDEO" ? "video" : "image" });
  return NextResponse.json({ ok: true });
}
