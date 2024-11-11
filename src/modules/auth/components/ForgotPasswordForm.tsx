"use client";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { supabase } from "@/server/supabase";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { emailValidationSchema } from "@/common/tools/zod/schemas";
import { env } from "@/env";
import { EnvelopeIcon } from "@/common/components/CustomIcon";

const forgotPwdFormInputsSchema = z.object({
  email: emailValidationSchema,
});
type forgotPwdFormInputs = z.infer<typeof forgotPwdFormInputsSchema>;

export const ForgotPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<forgotPwdFormInputs>({
    resolver: zodResolver(forgotPwdFormInputsSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<forgotPwdFormInputs> = async ({ email }) => {
    if (isSubmitting) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${env.NEXT_PUBLIC_SITE_URL}/account/auth/reset-password`,
    });
    if (error) {
      alert(error.message);
      reset();
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
