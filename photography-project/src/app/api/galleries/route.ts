import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { gallerySchema } from "@/lib/validations";
import { slugify } from "@/lib/utils";
import { sendEmail } from "@/lib/email";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const galleries = await prisma.clientGallery.findMany({
    where: session.user.role === "ADMIN" ? {} : { clientEmail: session.user.email },
    include: { photos: { include: { photo: true, favorites: true, downloads: true } } },
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json(galleries);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const parsed = gallerySchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const client = await prisma.user.findUnique({ where: { email: parsed.data.clientEmail } });
  const slug = `${slugify(parsed.data.title)}-${Date.now().toString(36)}`;
  const gallery = await prisma.clientGallery.create({
    data: {
      title: parsed.data.title,
      slug,
      clientEmail: parsed.data.clientEmail,
      clientId: client?.id,
      passwordHash: parsed.data.password ? await bcrypt.hash(parsed.data.password, 12) : undefined,
      expiresAt: parsed.data.expiresAt,
      downloadsEnabled: parsed.data.downloadsEnabled
    }
  });
  await sendEmail({
    to: gallery.clientEmail,
    subject: "Your Light & Glory gallery is ready",
    html: `<p>Your private gallery is ready: <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/gallery/${gallery.slug}">${gallery.title}</a></p>`
  });
  return NextResponse.json(gallery, { status: 201 });
}
