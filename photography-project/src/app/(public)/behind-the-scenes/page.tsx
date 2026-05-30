import { Section } from "@/components/section";

export default function BehindTheScenesPage() {
  return (
    <Section eyebrow="bts" title="Behind the scenes">
      <div className="grid gap-4 md:grid-cols-3">
        {["Location scouting", "Lighting direction", "Edit delivery"].map((item) => (
          <div key={item} className="luxury-border rounded-lg p-6">
            <h3 className="font-display text-3xl">{item}</h3>
            <p className="mt-4 text-white/60">A quiet look at the process that creates the final cinematic image.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
