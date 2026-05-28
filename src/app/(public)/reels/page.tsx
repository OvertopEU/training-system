import { Film } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export default async function ReelsPage() {
  const videos = await prisma.video.findMany({ orderBy: { createdAt: "desc" } });
  const entries = videos.length ? videos.map((video) => ({ kind: "video" as const, video })) : Array.from({ length: 8 }, (_, index) => ({ kind: "placeholder" as const, index }));
  return (
    <Section eyebrow="reels" title="Vertical motion, previews, and social cuts">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {entries.map((entry) => (
          <div key={entry.kind === "video" ? entry.video.id : entry.index} className="grid aspect-[9/16] place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/[.03]">
            {entry.kind === "video" ? <video src={entry.video.url} poster={entry.video.thumbnailUrl ?? undefined} controls className="h-full w-full object-cover" /> : <Film className="text-gold-200" size={42} />}
          </div>
        ))}
      </div>
    </Section>
  );
}
