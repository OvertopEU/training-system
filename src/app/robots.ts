import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/trainer"],
      disallow: [
        "/about",
        "/admin",
        "/api/admin",
        "/api/bookings",
        "/api/categories",
        "/api/contact",
        "/api/galleries",
        "/api/portfolio",
        "/api/uploads",
        "/behind-the-scenes",
        "/blog",
        "/booking",
        "/contact",
        "/dashboard",
        "/gallery",
        "/portfolio",
        "/pricing",
        "/privacy",
        "/reels",
        "/terms",
        "/testimonials"
      ]
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/sitemap.xml`
  };
}
