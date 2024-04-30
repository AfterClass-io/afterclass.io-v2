import { z } from "zod";

export enum ReviewableEnum {
  COURSE = "course",
  PROFESSOR = "professor",
}
export type ReviewableType = `${ReviewableEnum}`;

const courseReviewFormSchema = z.object({
  value: z.string().min(1, "This field is required"),
  rating: z.coerce.number().positive().min(1).max(5),
  labels: z.array(z.string()),
  body: z.string().min(200, "Help other students by writing a longer review. "),
  tips: z.string(),
});

const professorReviewFormSchema = z.object({
  value: z.string().min(1, "Please select a professor"),
  rating: z.coerce.number().positive().min(1).max(5),
  labels: z.array(z.string()),
  body: z.string().min(200, "Help other students by writing a longer review. "),
  tips: z.string(),
});

export const reviewFormSchema = z.discriminatedUnion("type", [
  z.object({
    [ReviewableEnum.COURSE]: courseReviewFormSchema,
    [ReviewableEnum.PROFESSOR]: professorReviewFormSchema,
    type: z.literal(ReviewableEnum.PROFESSOR),
  }),
  z.object({
    [ReviewableEnum.COURSE]: courseReviewFormSchema,
    [ReviewableEnum.PROFESSOR]: professorReviewFormSchema.partial(),
    type: z.literal(ReviewableEnum.COURSE),
  }),
]);

export type ReviewFormInputsSchema = z.infer<typeof reviewFormSchema>;
