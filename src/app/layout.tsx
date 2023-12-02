import "@/common/styles/globals.scss";

import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { CoreLayout } from "@/common/components/CoreLayout";
import ThemeProvider from "@/common/providers/ThemeProvider";
import AuthProvider from "@/common/providers/AuthProvider";
import { inter, poppins } from "@/common/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <TRPCReactProvider cookies={cookies().toString()}>
              <CoreLayout>{children}</CoreLayout>
            </TRPCReactProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
