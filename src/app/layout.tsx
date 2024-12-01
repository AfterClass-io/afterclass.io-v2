import "@/common/styles/globals.scss";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { getAll } from "@vercel/edge-config";
import dynamic from "next/dynamic";

import { TRPCReactProvider } from "@/common/tools/trpc/react";
import { CoreLayout } from "@/common/components/CoreLayout";
import ThemeProvider from "@/common/providers/ThemeProvider";
import AuthProvider from "@/common/providers/AuthProvider";
import TooltipProvider from "@/common/providers/TooltipProvider";
import { inter, poppins } from "@/common/fonts";
import { env } from "@/env";
import { CSPostHogProvider } from "@/common/providers/analytics/providers";
import EdgeConfigProvider from "@/common/providers/EdgeConfigProvider";
import { edgeConfigSchema } from "@/server/ecfg/config";

const PostHogPageView = dynamic(
  () => import("@/common/providers/analytics/PostHogPageView"),
  {
    ssr: false,
  },
);

const appName = "AfterClass";
const appDesc = [
  "Read 12,000+ reviews of courses and professors.",
  "Buy/sell course material. Personalized internship matching.",
  "Break classroom barriers. - Our one-stop-shop connection community.",
].join(" ");

export const viewport: Viewport = {
  themeColor: [
    // see `src\common\tools\tailwind\themes`
    { media: "(prefers-color-scheme: light)", color: "#F1F1F3" },
    { media: "(prefers-color-scheme: dark)", color: "#131316" },
  ],
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : env.NEXTAUTH_URL,
  ),
  title: appName,
  description: appDesc,
  openGraph: {
    title: appName,
    siteName: appName,
    description: appDesc,
    // images: [
    //   {
    //     url: "https://nextjs.org/og.png",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://nextjs.org/og-alt.png",
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // * FUTURE NOTE *
  // if edge requests count nears the threshold,
  // we should consider caching the edge config & revalidate every 24h
  const edgeConfigRaw = await getAll();
  const validateEcfg = edgeConfigSchema.safeParse(edgeConfigRaw);
  let edgeConfig;
  if (validateEcfg.success) {
    edgeConfig = validateEcfg.data;
  } else {
    console.warn(
      "Failed to parse edge config:\n",
      validateEcfg.error.message,
      "\n\n",
      "Received config:\n",
      edgeConfigRaw,
    );
    // used strictly as a fallback if edge config
    // somehow returns an unexpected format
    edgeConfig = (await import("@/server/ecfg/config.json")).default;
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <CSPostHogProvider>
        <body>
          <PostHogPageView />
          <ThemeProvider>
            <AuthProvider>
              <TRPCReactProvider>
                <TooltipProvider>
                  <EdgeConfigProvider edgeConfig={edgeConfig}>
                    <CoreLayout>{children}</CoreLayout>
                  </EdgeConfigProvider>
                </TooltipProvider>
              </TRPCReactProvider>
            </AuthProvider>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
      <Script
        defer
        src="/statistics/script.js"
        data-website-id="b4f3137b-00dd-489c-9c68-8586950ab450"
        data-domains="afterclass.io,new.afterclass.io"
      />
      <Analytics />
    </html>
  );
}
