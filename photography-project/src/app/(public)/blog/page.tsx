import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export const dynamic = "force-dynamic";


export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({ where: { status: "PUBLISHED" }, orderBy: { publishedAt: "desc" } });
  return (
    <Section eyebrow="blog" title="Studio notes and cinematic field guides">
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="luxury-border rounded-lg p-6">
            <p className="text-xs uppercase tracking-[.3em] text-gold-200">{post.tags.join(" / ")}</p>
            <h3 className="mt-5 font-display text-3xl">{post.title}</h3>
            <p className="mt-4 text-white/60">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-gold-100">Read</Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
