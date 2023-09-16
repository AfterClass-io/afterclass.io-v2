import { env } from "@/env.mjs";

/**
 * @param email should be schema validated
 * @returns
 */
export function isEmailFromSupportedUniversity(email: string): boolean {
  const emailDomain = email.split("@")[1];
  const supportedDomains = env.NEXT_PUBLIC_SUPPORTED_EMAIL_DOMAINS;
  return supportedDomains.some((domain) => emailDomain?.includes(domain));
}
