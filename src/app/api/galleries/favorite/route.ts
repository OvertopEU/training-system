import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { galleryPhotoId } = await request.json();
  const favorite = await prisma.favorite.upsert({
    where: { userId_galleryPhotoId: { userId: session.user.id, galleryPhotoId } },
    update: {},
    create: { userId: session.user.id, galleryPhotoId }
  });
  return NextResponse.json(favorite);
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { galleryPhotoId } = await request.json();
  await prisma.favorite.delete({ where: { userId_galleryPhotoId: { userId: session.user.id, galleryPhotoId } } });
  return NextResponse.json({ ok: true });
}
