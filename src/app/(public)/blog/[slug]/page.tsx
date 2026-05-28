import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/section";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  return {
    title: post?.seoTitle ?? post?.title ?? "Blog",
    description: post?.seoDescription ?? post?.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post || post.status !== "PUBLISHED") notFound();
  return (
    <Section eyebrow={post.tags.join(" / ")} title={post.title}>
      <article className="max-w-3xl">
        <p className="text-xl leading-9 text-white/70">{post.excerpt}</p>
        <div className="mt-8 whitespace-pre-wrap leading-8 text-white/75">{post.content}</div>
      </article>
    </Section>
  );
}
