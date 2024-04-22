import { env } from "@/env.mjs";

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const supportedDomains = [
    env.NEXT_PUBLIC_SMU_DOMAIN,
    env.NEXT_PUBLIC_NUS_DOMAIN,
    env.NEXT_PUBLIC_NTU_DOMAIN,
  ];
  return (
    regex.test(email) &&
    supportedDomains.some((domain) => email.endsWith(domain))
  );
};
