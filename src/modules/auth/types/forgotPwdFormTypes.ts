import { z } from "zod";
import { emailValidationSchema } from "@/common/tools/zod/schemas";

export const forgotPwdFormInputsSchema = z.object({
  email: emailValidationSchema,
});
export type ForgotPwdFormInputs = z.infer<typeof forgotPwdFormInputsSchema>;

export enum ForgotPwdFormActionReturnType {
  USER_NOT_FOUND = "user not found",
  USER_ON_V1 = "user on v1",
  USER_ON_V2 = "user on v2",
}
