import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import validator from "validator";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
    SUPABASE_SERVICE_ROLE_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string(),
    NEXT_PUBLIC_SITE_URL: z
      .optional(z.string())
      .transform((str) => {
        let url =
          str ??
          // Automatically set by Vercel as system environment variable
          // NEXT_PUBLIC_VERCEL_URL doesn't include `https`
          // https://vercel.com/docs/projects/environment-variables/system-environment-variables
          process.env.NEXT_PUBLIC_VERCEL_URL ??
          "http://localhost:3000/";
        // Make sure to include `https://` when using NEXT_PUBLIC_VERCEL_URL
        url = url.startsWith("http") ? url : `https://${url}`;
        return url;
      })
      .pipe(z.string().url()),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string(),
    NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS: z
      .string()
      .transform((value) => value.split(","))
      .pipe(
        z
          .string()
          .array()
          .superRefine((val, ctx) => {
            val.map((v) => {
              if (!validator.isFQDN(v)) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  message: `Invalid FQDN: ${v}`,
                  fatal: true,
                });
                return z.NEVER;
              }
            });
          }),
      ),
    NEXT_PUBLIC_AC_CHANNEL_LINK: z.string().url(),
    NEXT_PUBLIC_AC_HELPDESK_LINK: z.string().url(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? process.env.VERCEL_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS:
      process.env.NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS,
    NEXT_PUBLIC_AC_CHANNEL_LINK: process.env.NEXT_PUBLIC_AC_CHANNEL_LINK,
    NEXT_PUBLIC_AC_HELPDESK_LINK: process.env.NEXT_PUBLIC_AC_HELPDESK_LINK,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
