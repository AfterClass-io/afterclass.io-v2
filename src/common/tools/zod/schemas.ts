import { env } from "@/env.mjs";
import { z } from "zod";

/**
 * Zod schemas for custom validation
 */

export const emailValidationSchema = z
  .string()
  .min(1, {
    message: "Email is required",
  })
  .email("Please enter a valid email address")
  .refine(
    (email) =>
      env.NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS.some((domain) =>
        email.endsWith(domain),
      ),
    `Unsupported email domain, please choose from: ${env.NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS.join(", ")}`,
  );
