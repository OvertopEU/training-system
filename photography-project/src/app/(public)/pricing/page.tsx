import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { money } from "@/lib/utils";
import { Section } from "@/components/section";

export const dynamic = "force-dynamic";


export default async function PricingPage() {
  const packages = await prisma.package.findMany({ where: { active: true }, orderBy: { priceCents: "asc" } });
  return (
    <Section eyebrow="pricing" title="Packages for precise visual impact">
      <div className="grid gap-4 md:grid-cols-3">
        {packages.map((pack) => (
          <div key={pack.id} className="luxury-border rounded-lg p-6">
            <h3 className="font-display text-3xl">{pack.name}</h3>
            <p className="mt-4 text-white/60">{pack.description}</p>
            <p className="mt-8 font-display text-5xl gold-text">{money(pack.priceCents)}</p>
            <p className="mt-2 text-sm text-white/55">Deposit / капаро: {money(pack.depositCents)}</p>
            <Link href="/booking" className="mt-8 inline-flex rounded-full bg-gold-200 px-5 py-3 text-sm text-black">Book</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
