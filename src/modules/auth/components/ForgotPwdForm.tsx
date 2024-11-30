"use client";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { supabase } from "@/server/supabase";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { env } from "@/env";
import { EnvelopeIcon } from "@/common/components/CustomIcon";

import { isUserExistsAndNotV1ElseRedirectToSignup } from "../functions";
import { type ForgotPwdFormInputs, forgotPwdFormInputsSchema } from "../types";

export const ForgotPwdForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPwdFormInputs>({
    resolver: zodResolver(forgotPwdFormInputsSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<ForgotPwdFormInputs> = async ({ email }) => {
    if (isSubmitting) return;

    const errMsg = await isUserExistsAndNotV1ElseRedirectToSignup({ email });
    if (errMsg) {
      alert(errMsg);
      reset();
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/account/auth/reset-password`,
    });
    if (error) {
      alert(error.message);
      reset();
      return;
    }

    router.push(`/account/auth/verify?email=${email}`);
  };

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("email")}
        label="School Email Address"
        contentLeft={<EnvelopeIcon size={24} />}
        placeholder="john.doe.2023@smu.edu.sg"
        type="text"
        isError={!!errors.email}
        helperText={errors.email?.message}
        autoComplete="on"
        data-test="email"
        fieldProps={{ helperTextDataTestId: "email-helper-text" }}
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
        <Button
          fullWidth
          type="submit"
          disabled={isSubmitting}
          data-test="submit"
        >
          {isSubmitting ? "Confirming your email..." : "Reset my password"}
        </Button>
      </div>
    </form>
  );
};
