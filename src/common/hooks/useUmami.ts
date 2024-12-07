"use client";

import { useCallback, useEffect, useState } from "react";

interface PageView {
  // Hostname of server
  hostname: string;
  // Browser language
  language: string;
  // Page referrer
  referrer: string;
  // Screen dimensions (eg. 1920x1080)
  screen: string;
  // Page title
  title: string;
  // Page url
  url: string;
  // Website ID (required)
  website: string;
}

type EventName = string;
type EventData = Record<string, string | number>;

// https://umami.is/docs/tracker-functions
export default function useUmami() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // this will be set to true only in the client
  }, []);

  const isUmamiAvailable = useCallback(() => {
    return isClient && typeof (window as any).umami !== "undefined";
  }, [isClient]);

  const pageView = useCallback(
    (data?: Partial<PageView>) => {
      if (!isUmamiAvailable()) {
        console.warn("UmamiProvider not found");
        return;
      }

      let fullData = {};
      (window as any).umami.track((props: PageView) => {
        fullData = {
          ...props,
          ...(data && { ...data }),
        };
        return fullData;
      });
      return fullData;
    },
    [isClient],
  );

  const event = useCallback((name: EventName, data?: EventData) => {
    if (!isUmamiAvailable()) {
      console.warn("UmamiProvider not found");
      return;
    }

    (window as any).umami?.track(name, { ...(data && { ...data }) });
    return { name, data: { ...(data && { ...data }) } };
  }, []);

  return { pageView, event };
}
