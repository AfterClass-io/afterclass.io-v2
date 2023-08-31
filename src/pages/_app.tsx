import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/common/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { type PropsWithChildren, Fragment } from "react";
import { CoreLayout } from "@/common/components/CoreLayout";
import { type NextComponentType } from "next";
import { PageHead } from "@/common/components/PageHead";
import { inter, poppins } from "@/common/fonts";

const NEXT_THEMES = Object.keys(APP_THEMES).map((key) => key);

type ComponentProps = {
  layout?: () => JSX.Element;
  subLayout?: () => JSX.Element;
} & NextComponentType;

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const Layout = (Component as ComponentProps).layout ?? CoreLayout;
  const SubLayout =
    (Component as ComponentProps)?.subLayout ??
    (({ children }: PropsWithChildren) => <Fragment>{children}</Fragment>);

  return (
    <>
      <PageHead />
      {/* This is required for fonts to work in Portal too  */}
      <style global jsx>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        attribute="class"
        defaultTheme={APP_THEMES.dark}
        themes={NEXT_THEMES}
      >
        <SessionProvider session={session}>
          <Layout>
            <SubLayout>
              <Component {...pageProps} />
            </SubLayout>
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
