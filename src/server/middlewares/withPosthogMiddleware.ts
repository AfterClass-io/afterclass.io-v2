import type { NextRequest, NextResponse } from "next/server";

import { env } from "@/env.mjs";

export async function withPosthogMiddleware({
  request,
  response,
}: {
  request: NextRequest;
  response: NextResponse;
}) {
  const ph_project_api_key = env.NEXT_PUBLIC_POSTHOG_KEY;
  const ph_cookie_key = `ph_${ph_project_api_key}_posthog`;
  const cookie = request.cookies.get(ph_cookie_key);

  let distinct_id: string;
  if (cookie) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    distinct_id = JSON.parse(cookie.value).distinct_id as string;
  } else {
    distinct_id = crypto.randomUUID();
  }

  const ph_request = await fetch(`${env.NEXT_PUBLIC_POSTHOG_HOST}/decide?v=3`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: ph_project_api_key,
      distinct_id: distinct_id,
    }),
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await ph_request.json();

  // https://posthog.com/docs/feature-flags/bootstrapping#bootstrapping-with-a-distinct-id
  response.cookies.set(
    "ph.bootstrap",
    JSON.stringify({
      distinctID: distinct_id,
      isIdentifiedID: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      featureFlags: data.featureFlags,
    }),
  );
  return response;
}
