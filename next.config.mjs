/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      "/blog",
      "/blog/:path*",
      "/booking",
      "/portfolio",
      "/pricing",
      "/reels",
      "/testimonials",
      "/contact",
      "/login",
      "/register",
      "/privacy",
      "/terms",
      "/behind-the-scenes"
    ].map((source) => ({
      source,
      destination: "/",
      permanent: false
    }));
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  }
};

export default nextConfig;
