import Image from "next/image";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";
import { GalleryPasswordForm } from "@/components/gallery-password-form";

export default async function ClientGalleryPage({ params }: { params: { slug: string } }) {
  const gallery = await prisma.clientGallery.findUnique({
    where: { slug: params.slug },
    include: { photos: { include: { photo: true, favorites: true, downloads: true }, orderBy: { order: "asc" } } }
  });
  if (!gallery || (gallery.expiresAt && gallery.expiresAt < new Date())) notFound();
  const hasAccess = !gallery.passwordHash || cookies().get(`gallery_${gallery.slug}`)?.value === "granted";
  if (!hasAccess) {
    return (
      <Section eyebrow="private gallery" title={gallery.title}>
        <GalleryPasswordForm slug={gallery.slug} />
      </Section>
    );
  }
  return (
    <Section eyebrow="private gallery" title={gallery.title}>
      <div className="mb-8 rounded-lg border border-gold-200/20 bg-black/45 p-4 text-sm text-white/60">
        Downloads are {gallery.downloadsEnabled ? "enabled" : "disabled"}. Favorites and download tracking are stored for gallery review.
      </div>
      <div className="masonry">
        {gallery.photos.map((item) => (
          <figure key={item.id} className="overflow-hidden rounded-lg border border-white/10 bg-white/[.03]">
            <Image src={item.watermarkUrl ?? item.photo.url} alt={item.photo.title ?? gallery.title} width={900} height={1200} className="h-auto w-full" />
            <figcaption className="flex items-center justify-between p-3 text-sm text-white/60">
              <span>{item.photo.title ?? "Gallery photo"}</span>
              {gallery.downloadsEnabled && item.downloadUrl ? <a className="text-gold-100" href={item.downloadUrl}>Download</a> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
