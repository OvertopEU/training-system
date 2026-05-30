import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const photographyRoutes = [
  "/about",
  "/behind-the-scenes",
  "/blog",
  "/booking",
  "/contact",
  "/gallery",
  "/portfolio",
  "/pricing",
  "/privacy",
  "/reels",
  "/terms",
  "/testimonials"
];

function isPhotographyRoute(path: string) {
  return photographyRoutes.some((route) => path === route || path.startsWith(`${route}/`));
}

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const role = req.nextauth.token?.role;

    if (isPhotographyRoute(path)) {
      return NextResponse.redirect(new URL("/trainer", req.url));
    }

    if (path.startsWith("/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        if (path.startsWith("/admin") || path.startsWith("/dashboard")) return Boolean(token);
        return true;
      }
    }
  }
);

export const config = {
  matcher: [
    "/about/:path*",
    "/behind-the-scenes/:path*",
    "/blog/:path*",
    "/booking/:path*",
    "/contact/:path*",
    "/gallery/:path*",
    "/portfolio/:path*",
    "/pricing/:path*",
    "/privacy/:path*",
    "/reels/:path*",
    "/terms/:path*",
    "/testimonials/:path*",
    "/admin/:path*",
    "/dashboard/:path*"
  ]
};
