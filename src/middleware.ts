export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - account/auth (routes used for auth)
     * - not-found (404 page)
     * - professor (professor page)
     * - course (course page)
     * - search (search page)
     *
     * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
     */
    "/submit",
  ],
};
