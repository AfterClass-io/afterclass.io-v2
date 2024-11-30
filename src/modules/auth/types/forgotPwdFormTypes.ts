import { z } from "zod";
import { emailValidationSchema } from "@/common/tools/zod/schemas";

export const forgotPwdFormInputsSchema = z.object({
  email: emailValidationSchema,
});
export type ForgotPwdFormInputs = z.infer<typeof forgotPwdFormInputsSchema>;
