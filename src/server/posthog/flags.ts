import { cookies } from "next/headers";
import { env } from "@/env";
import { PostHogClient } from "./client";
import { getServerAuthSession } from "@/server/auth";

/**
 * Wrapper around PostHogClient.isFeatureEnabled for node.js (server-side)
 * see https://posthog.com/docs/feature-flags/common-questions
 * @param name user to be identified, should be returned on authentication
 * @returns boolean indicating if the feature is enabled
 */
export async function getFeatureFlag(name: string) {
  const session = await getServerAuthSession();
  const cookieStore = cookies();

  // posthog stores the distinct_id in a cookie with the key `ph_${POSTHOG_KEY}_posthog`
  // see https://posthog.com/docs/libraries/js#persistence
  const phCookieKey = `ph_${env.NEXT_PUBLIC_POSTHOG_KEY}_posthog`;
  const phCookie = cookieStore.get(phCookieKey);

  let distinct_id: string;
  if (session?.user?.id) {
    distinct_id = session.user.id;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  } else if (phCookie && JSON.parse(phCookie.value).distinct_id) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    distinct_id = JSON.parse(phCookie.value).distinct_id as string;
  } else {
    // unlikely to happen, only if the user is not logged in and the cookie is not set
    distinct_id = crypto.randomUUID();
  }

  const posthog = PostHogClient();
  const flag = !!(await posthog.isFeatureEnabled(name, distinct_id));
  await posthog.shutdown();

  return flag;
}
