"use server";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { supabase } from "@/server/supabase";
import { db } from "@/server/db";
import { ForgotPwdFormInputs } from "../types";

export async function forgotPasswordFormAction({ email }: ForgotPwdFormInputs) {
  const user = await db.users.findUnique({
    where: { email },
  });

  if (!user) {
    return "User not found";
  }

  if (user.deprecatedPasswordDigest) {
    redirect(`/account/auth/signup?email=${email}`);
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/account/auth/reset-password`,
  });
  if (error) return error.message;

  redirect(`/account/auth/verify?email=${email}`);
}
