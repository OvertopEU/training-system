import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail({
  to,
  subject,
  html
}: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const from = process.env.EMAIL_FROM ?? "Training System <hello@training-system.org>";
  if (resend) {
    return resend.emails.send({ from, to, subject, html });
  }

  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
    });
    return transporter.sendMail({ from, to, subject, html });
  }

  console.log(`[email:dev] ${subject} -> ${Array.isArray(to) ? to.join(", ") : to}`);
  return { id: "dev-email" };
}

export function bookingEmail(name: string, startsAt: Date) {
  return `<div style="background:#050505;color:#fff;padding:32px;font-family:Arial"><h1 style="color:#86efac">Training System</h1><p>Hello ${name}, your booking request for ${startsAt.toLocaleString()} has been received.</p></div>`;
}
