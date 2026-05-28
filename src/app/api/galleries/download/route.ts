import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { galleryPhotoId } = await request.json();
  const galleryPhoto = await prisma.clientGalleryPhoto.findUnique({ where: { id: galleryPhotoId }, include: { gallery: true } });
  if (!galleryPhoto?.gallery.downloadsEnabled) return NextResponse.json({ error: "Downloads disabled" }, { status: 403 });
  const download = await prisma.download.create({
    data: {
      galleryPhotoId,
      userId: session?.user?.id,
      ip: request.headers.get("x-forwarded-for") ?? "local"
    }
  });
  return NextResponse.json({ download, url: galleryPhoto.downloadUrl });
}
