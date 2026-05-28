import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export const dynamic = "force-dynamic";


export default async function MyGalleriesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");
  const galleries = await prisma.clientGallery.findMany({ where: { clientEmail: session.user.email }, include: { _count: { select: { photos: true } } } });
  return (
    <Section eyebrow="dashboard" title="My Galleries">
      <div className="grid gap-4 md:grid-cols-3">
        {galleries.map((gallery) => (
          <Link key={gallery.id} href={`/gallery/${gallery.slug}`} className="luxury-border rounded-lg p-6">
            <h3 className="font-display text-3xl">{gallery.title}</h3>
            <p className="mt-4 text-white/55">{gallery._count.photos} photos · downloads {gallery.downloadsEnabled ? "enabled" : "disabled"}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
