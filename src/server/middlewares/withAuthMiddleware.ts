import { type NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { type NextRequest } from "next/server";

export async function withAuthMiddleware(
  request: NextRequest | NextRequestWithAuth,
) {
  return withAuth(request as NextRequestWithAuth);
}
