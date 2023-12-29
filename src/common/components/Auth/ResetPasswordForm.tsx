"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { supabase } from "@/server/supabase";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";

const resetPwdFormInputsSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Passwords must be at least 8 characters long" }),
});
type ResetPwdFormInputs = z.infer<typeof resetPwdFormInputsSchema>;

export const ResetPasswordForm = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ResetPwdFormInputs>({
    resolver: zodResolver(resetPwdFormInputsSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<ResetPwdFormInputs> = async ({ password }) => {
    if (isSubmitting) return;
    const { error } = await supabase.auth.updateUser({ password });
    if (error) alert(error.message);
    reset();
  };

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("password")}
        label="New Password"
        leftContent={<LockIcon size={24} />}
        rightContent={
          <button onClick={() => setIsPwdVisible(!isPwdVisible)}>
            {isPwdVisible ? <EyeSlashIcon size={24} /> : <EyeIcon size={24} />}
          </button>
        }
        placeholder="Enter password"
        type={isPwdVisible ? "text" : "password"}
        isError={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="on"
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
        <Button fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Reset Password"}
        </Button>
      </div>
      {isSubmitSuccessful && (
        <div className="text-green-500">
          Your password has been updated successfully.
        </div>
      )}
    </form>
  );
};
