"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import cookies from "js-cookie";

import { env } from "@/env.mjs";

if (typeof window !== "undefined") {
  const flags = cookies.get("ph.bootstrap");

  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bootstrap: flags ? JSON.parse(flags) : undefined,
  });
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
