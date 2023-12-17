export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication routes used by next-auth)
     * - account/login (custom login route used by next-auth)
     * - account/create (custom sign up route used by next-auth)
     *
     * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
     */
    "/((?!api|_next/static|_next/image|favicon.ico|account/login|account/create|auth).*)",
  ],
};
