/**
 * Zod schemas for custom validation
 */
import { env } from "@/env.mjs";
import { z } from "zod";

import { ReviewableEnum, SubmitAsEnum } from "@/modules/submit/types";

/**
 * Schema for the authentication form inputs
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

/**
 * Schema for the review submission form inputs
 */
const courseReviewFormSchema = z.object({
  value: z.string().min(1, "This field is required"),
  rating: z.coerce
    .number()
    .min(1, "Please select your rating for this course")
    .max(5, "Rating must be between 1 and 5"),
  labels: z.string().array().optional(),
  body: z.string().min(200, "Help other students by writing a longer review. "),
  tips: z.string(),
});

const professorReviewFormSchema = z.object({
  value: z.string().min(1, "Please select a professor"),
  rating: z.coerce
    .number()
    .min(1, "Please select your rating for this professor")
    .max(5, "Rating must be between 1 and 5"),
  labels: z.string().array().optional(),
  body: z.string().min(200, "Help other students by writing a longer review. "),
  tips: z.string(),
});

export const reviewFormSchema = z.discriminatedUnion("type", [
  z.object({
    [ReviewableEnum.COURSE]: courseReviewFormSchema,
    [ReviewableEnum.PROFESSOR]: professorReviewFormSchema,
    type: z.literal(ReviewableEnum.PROFESSOR),
    submitAs: z.nativeEnum(SubmitAsEnum),
  }),
  z.object({
    [ReviewableEnum.COURSE]: courseReviewFormSchema,
    [ReviewableEnum.PROFESSOR]: professorReviewFormSchema.partial(),
    type: z.literal(ReviewableEnum.COURSE),
    submitAs: z.nativeEnum(SubmitAsEnum),
  }),
]);
export type ReviewFormInputsSchema = z.infer<typeof reviewFormSchema>;
