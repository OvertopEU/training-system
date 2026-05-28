import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export default async function FavoritesPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/login");
  const favorites = await prisma.favorite.findMany({ where: { userId: session.user.id }, include: { galleryPhoto: { include: { photo: true, gallery: true } } } });
  return (
    <Section eyebrow="dashboard" title="Favorites">
      <div className="grid gap-4 md:grid-cols-4">
        {favorites.map((favorite) => (
          <Image key={favorite.id} src={favorite.galleryPhoto.watermarkUrl ?? favorite.galleryPhoto.photo.url} alt={favorite.galleryPhoto.photo.title ?? "Favorite photo"} width={600} height={800} className="rounded-lg border border-white/10 object-cover" />
        ))}
      </div>
    </Section>
  );
}
