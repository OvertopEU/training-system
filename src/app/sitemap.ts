import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/portfolio", "/about", "/booking", "/pricing", "/contact", "/blog", "/reels", "/behind-the-scenes", "/testimonials"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
