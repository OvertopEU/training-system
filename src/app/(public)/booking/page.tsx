import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";
import { BookingForm } from "@/components/booking-form";

export default async function BookingPage() {
  const [categories, packages, addOns] = await Promise.all([
    prisma.portfolioCategory.findMany(),
    prisma.package.findMany({ where: { active: true }, orderBy: { priceCents: "asc" } }),
    prisma.addOn.findMany({ where: { active: true } })
  ]);
  return (
    <Section eyebrow="booking" title="Reserve a cinematic session">
      <BookingForm categories={categories} packages={packages} addOns={addOns} />
    </Section>
  );
}
