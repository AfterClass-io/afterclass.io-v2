import { useMemo, type PropsWithChildren } from "react";
import Head from "next/head";

export interface PageHeadProps {
  name?: string;
  description?: string;
  removeTitleAppend?: boolean;
  titleAppendSeparator?: string;
}

const appName = "AfterClass";

export const PageHead = ({
  name,
  description,
  removeTitleAppend = false,
  titleAppendSeparator = "|",
  children,
}: PropsWithChildren<PageHeadProps>) => {
  const pageName = useMemo(() => {
    if (!removeTitleAppend) {
      return name ? `${name} ${titleAppendSeparator} ${appName}` : appName;
    }
    return name ?? appName;
  }, [name, removeTitleAppend, titleAppendSeparator]);

  const pageDesc = description ?? "Your app description";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{pageName}</title>
      <meta content={pageDesc} name="description" />
      <meta content={pageName} name="og:title" />
      <meta content={pageDesc} name="og:description" />
      <meta content={appName} property="og:site_name" />
      <meta content="en" property="og:locale" />
      <meta content="website" property="og:type" />
      {/* Change this color to match the background of your app */}
      {/* It'll appear in places like iOS notch area to make the app look better */}
      <meta content="#F1F1F3" name="theme-color" />
      {children}
    </Head>
  );
};
