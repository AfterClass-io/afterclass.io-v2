export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication routes)
     * - account/login (login route use by next-auth)
     * - account/create (sign up route use by next-auth)
     *
     * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
     */
    "/((?!api|_next/static|_next/image|favicon.ico|account/login|account/create|auth).*)",
  ],
};
