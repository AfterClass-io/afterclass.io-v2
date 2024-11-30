"use server";
import { redirect } from "next/navigation";

import { db } from "@/server/db";
import { type ForgotPwdFormInputs } from "../types";

export async function isUserExistsAndNotV1ElseRedirectToSignup({
  email,
}: ForgotPwdFormInputs) {
  const user = await db.users.findUnique({
    where: { email },
  });

  if (!user) {
    return "User not found";
  }

  if (user.deprecatedPasswordDigest) {
    // only v1 users have deprecatedPasswordDigest
    redirect(`/account/auth/signup?email=${email}`);
  }
}
