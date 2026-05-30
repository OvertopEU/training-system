import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (!rateLimit(`contact:${ip}`, 8, 60_000)) return NextResponse.json({ error: "Too many messages" }, { status: 429 });
  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const message = await prisma.contactMessage.create({ data: parsed.data });
  const admin = process.env.ADMIN_EMAIL;
  if (admin) {
    await sendEmail({ to: admin, subject: `New contact: ${message.subject}`, html: `<p>${message.name} (${message.email})</p><p>${message.message}</p>` });
  }
  return NextResponse.json(message, { status: 201 });
}
