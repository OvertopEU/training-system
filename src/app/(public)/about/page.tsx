import Image from "next/image";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <Section eyebrow="about" title="Luxury photography with cinematic restraint">
      <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]">
        <Image src="/logo.png" alt="Light & Glory Studio" width={520} height={520} className="rounded-lg border border-gold-200/20 bg-black shadow-gold" />
        <div className="space-y-6 text-lg leading-9 text-white/65">
          <p>Light & Glory Studio creates premium urban photography for clients who want mood, polish, and presence without visual noise.</p>
          <p>The platform behind the brand supports the full studio workflow: discovery, booking, deposits, approvals, private galleries, favorites, downloads, testimonials, reels, and publishing.</p>
        </div>
      </div>
    </Section>
  );
}
