import "@/common/styles/globals.scss";

import type { Metadata, Viewport } from "next";

import { TRPCReactProvider } from "@/common/tools/trpc/react";
import { CoreLayout } from "@/common/components/CoreLayout";
import ThemeProvider from "@/common/providers/ThemeProvider";
import AuthProvider from "@/common/providers/AuthProvider";
import TooltipProvider from "@/common/providers/TooltipProvider";
import { inter, poppins } from "@/common/fonts";
import { env } from "@/env";
import { CSPostHogProvider } from "@/common/providers/analytics/providers";
import dynamic from "next/dynamic";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <CSPostHogProvider>
        <body>
          <PostHogPageView />
          <ThemeProvider>
            <AuthProvider>
              <TRPCReactProvider>
                <TooltipProvider>
                  <CoreLayout>{children}</CoreLayout>
                </TooltipProvider>
              </TRPCReactProvider>
            </AuthProvider>
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
