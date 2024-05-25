import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { z } from "zod";
import { randomBytes, randomUUID } from "crypto";
import bcrypt from "bcrypt";
import { env } from "@/env.mjs";
import { signInWithEmail } from "./supabase";
import { emailValidationSchema } from "@/common/tools/zod/schemas";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties not defined in `DefaultSession["user"]`
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: SupabaseAdapter({
    url: env.NEXT_PUBLIC_SUPABASE_URL,
    secret: env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "School Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: { email: { type: "text" }, password: { type: "password" } },
      async authorize(credentials) {
        const Credential = z.object({
          email: emailValidationSchema,
          password: z.string(),
        });
        const c = Credential.safeParse(credentials);
        if (!c.success) {
          console.log("auth.ts:72 ~ authorize ~ error:", c.error);
          return null;
        }
        const emailDomain = c.data.email.split("@")[1];

        const user = await db.users.findUnique({
          where: { email: c.data.email },
        });

        if (
          user &&
          user.deprecatedPasswordDigest &&
          bcrypt.compareSync(
            c.data.password,
            user.deprecatedPasswordDigest ?? "",
          )
        ) {
          console.log(`User ${user.id} logged in with v1 credentials.`);
          return user;
        }

        const { data, error } = await signInWithEmail(
          c.data.email,
          c.data.password,
        );
        if (error) {
          console.log(
            "auth.ts:80 ~ authorize ~ error:",
            `${error.name}: ${error.message}`,
          );
          return null;
        }

        if (data.user) {
          if (!user) {
            // user signed into supabase successfully, but user doesn't exist in our database
            const uniOfThisEmail = await db.universities.findFirst({
              include: {
                domains: true,
              },
              where: {
                domains: {
                  some: {
                    domain: {
                      equals: emailDomain,
                    },
                  },
                },
              },
            });

            if (!uniOfThisEmail) {
              console.error(
                `Unexpected email domain '${emailDomain}'.\n` +
                  "\tUser has signed up with this email but the domain is not associated with any university. " +
                  "\tPlease check the database for the domain and add it to the universities table if necessary",
              );
              return null;
            }

            return await db.users.create({
              data: {
                id: data.user.id,
                email: data.user.email ?? c.data.email,
                username: "",
                isVerified: data.user.user_metadata?.isVerified ?? false,
                universityId: uniOfThisEmail.id,
              },
            });
          }
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error.
          // The user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  pages: {
    signIn: "/account/auth/login",
    error: "/account/auth/error", // Error code passed in query string as `?error=`
    verifyRequest: "/account/auth/verify", // Used for check email message
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
