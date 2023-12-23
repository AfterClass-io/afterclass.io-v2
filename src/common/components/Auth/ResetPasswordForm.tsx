"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { supabase } from "@/server/supabase";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";

type ResetPwdFormInputs = {
  password: string;
};

export const ResetPasswordForm = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ResetPwdFormInputs>({ mode: "onTouched" });
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
        label="New Password"
        leftContent={<LockIcon size={24} />}
        rightContent={
          isPwdVisible ? (
            <EyeSlashIcon
              size={24}
              onClick={() => setIsPwdVisible(!isPwdVisible)}
            />
          ) : (
            <EyeIcon size={24} onClick={() => setIsPwdVisible(!isPwdVisible)} />
          )
        }
        placeholder="Enter password"
        type={isPwdVisible ? "text" : "password"}
        isError={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="on"
        registerFormProps={register("password", {
          required: "Please enter your password",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
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
