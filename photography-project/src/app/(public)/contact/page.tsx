import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <Section eyebrow="contact" title="Plan the image before the shutter">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 text-white/65">
          <p className="flex items-center gap-3"><Mail className="text-gold-200" /> hello@lightandglory.studio</p>
          <p className="flex items-center gap-3"><Phone className="text-gold-200" /> +44 7719 799244</p>
          <p className="flex items-center gap-3"><MapPin className="text-gold-200" /> London and destination sessions</p>
          <Link className="flex items-center gap-3 text-gold-100" href="https://www.instagram.com/light.and.glory.studio/"><Instagram /> Instagram</Link>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
