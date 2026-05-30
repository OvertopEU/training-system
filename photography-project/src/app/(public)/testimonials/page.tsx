import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export const dynamic = "force-dynamic";


export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({ where: { approved: true }, orderBy: { createdAt: "desc" } });
  return (
    <Section eyebrow="testimonials" title="Proof in the client experience">
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.id} className="luxury-border rounded-lg p-6">
            <p className="text-lg leading-8">“{testimonial.review}”</p>
            <footer className="mt-5 text-gold-100">{testimonial.name} · {testimonial.rating}/5</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
