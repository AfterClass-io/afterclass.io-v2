import "@/common/styles/globals.scss";

import { cookies } from "next/headers";
// import { type PropsWithChildren, Fragment } from "react";

import { CoreLayout } from "@/common/components/CoreLayout";
// import { inter, poppins } from "@/common/fonts";
import { TRPCReactProvider } from "@/trpc/react";
import ThemeProvider from "@/common/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* This is required for fonts to work in Portal too  */}
        {/* <style global jsx>{`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style> */}
        <ThemeProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <CoreLayout>{children}</CoreLayout>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
