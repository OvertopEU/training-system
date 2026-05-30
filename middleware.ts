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

const photographyApiRoutes = [
  "/api/admin",
  "/api/bookings",
  "/api/categories",
  "/api/contact",
  "/api/galleries",
  "/api/payments",
  "/api/portfolio",
  "/api/uploads"
];

function matchesRoute(path: string, routes: string[]) {
  return routes.some((route) => path === route || path.startsWith(`${route}/`));
}

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const role = req.nextauth.token?.role;

    if (matchesRoute(path, photographyRoutes) || matchesRoute(path, photographyApiRoutes) || path.startsWith("/dashboard")) {
      return new NextResponse("Not found", { status: 404 });
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
    "/api/admin/:path*",
    "/api/bookings/:path*",
    "/api/categories/:path*",
    "/api/contact/:path*",
    "/api/galleries/:path*",
    "/api/payments/:path*",
    "/api/portfolio/:path*",
    "/api/uploads/:path*",
    "/admin/:path*",
    "/dashboard/:path*"
  ]
};
