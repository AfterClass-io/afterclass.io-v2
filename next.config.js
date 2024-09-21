/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  async redirects() {
    return [
      {
        source: "/account/auth/verify",
        missing: [
          {
            type: "query",
            key: "email",
          },
        ],
        destination: "/not-found",
        permanent: false,
      },
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
        permanent: false,
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
        permanent: false,
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
        permanent: false,
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default config;
