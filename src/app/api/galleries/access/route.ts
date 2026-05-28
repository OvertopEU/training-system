import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { slug, password } = await request.json();
  const gallery = await prisma.clientGallery.findUnique({ where: { slug } });
  if (!gallery) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!gallery.passwordHash) return NextResponse.json({ ok: true });
  const valid = typeof password === "string" && (await bcrypt.compare(password, gallery.passwordHash));
  if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(`gallery_${gallery.slug}`, "granted", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 12 });
  return response;
}
