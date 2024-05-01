import { type z } from "zod";
import { type reviewFormSchema } from "@/common/tools/zod/schemas";
export {
  ReviewableEnum,
  type ReviewableType,
  reviewFormSchema,
} from "@/common/tools/zod/schemas";

export type ReviewFormInputsSchema = z.infer<typeof reviewFormSchema>;
