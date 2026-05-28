import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (typeof email !== "string") return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const token = crypto.randomBytes(32).toString("hex");
    await prisma.verificationToken.create({
      data: { identifier: email, token, expires: new Date(Date.now() + 1000 * 60 * 30) }
    });
    const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/login?reset=${token}`;
    await sendEmail({ to: email, subject: "Reset your Light & Glory password", html: `<p>Reset your password: <a href="${url}">${url}</a></p>` });
  }
  return NextResponse.json({ ok: true });
}
