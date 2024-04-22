import { env } from "@/env.mjs";

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const supportedDomains = env.NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS.split(",");
  return (
    regex.test(email) &&
    supportedDomains.some((domain) => email.endsWith(domain))
  );
};
