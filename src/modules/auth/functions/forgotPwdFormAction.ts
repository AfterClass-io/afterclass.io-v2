"use server";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { supabase } from "@/server/supabase";
import { db } from "@/server/db";
import { ForgotPwdFormInputs } from "../types";

export async function forgotPasswordFormAction(formData: ForgotPwdFormInputs) {
  const { email } = formData;
  const user = await db.users.findUnique({
    where: { email },
  });

  if (user && user.deprecatedPasswordDigest) {
    redirect("/account/auth/signup");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/account/auth/reset-password`,
  });
  if (error) return error;

  redirect(`/account/auth/verify?email=${email}`);
}
