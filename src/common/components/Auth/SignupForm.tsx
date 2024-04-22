"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";
import { signUpWithEmail } from "@/server/supabase";
import { useRouter } from "next/navigation";
import { isValidEmail } from "@/common/functions/emailValidation";

const signupFormInputsSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Please enter a valid school email address" })
      .email("Please enter a valid school email address")
      .refine(
        (e) => isValidEmail(e),
        "Please enter a valid school email address",
      ),
    password: z
      .string()
      .min(8, { message: "Passwords must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Passwords must be at least 8 characters long" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword === password) return;
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["confirmPassword"],
      message: "Passwords did not match",
    });
  });
type SignupFormInputs = z.infer<typeof signupFormInputsSchema>;

export const SignupForm = () => {
  const router = useRouter();
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isCfmPwdVisible, setIsCfmPwdVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupFormInputsSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    console.log(data);
    if (isSubmitting) return;
    try {
      const res = await signUpWithEmail(data.email, data.password);
      console.log(res);
      if (res.error) throw new Error(res.error.message);
      if (!res.data.user?.user_metadata?.email_verified) {
        router.push(`/account/auth/verify?email=${res.data.user?.email}`);
      }
      reset({ email: "", password: "", confirmPassword: "" });
    } catch (err) {
      alert(err);
    }
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
        isError={!!errors.email}
        helperText={errors.email?.message}
        autoComplete="on"
      />
      <Input
        {...register("password")}
        label="Password"
        contentLeft={<LockIcon size={24} />}
        contentRight={
          <button type="button" onClick={() => setIsPwdVisible(!isPwdVisible)}>
            {isPwdVisible ? <EyeSlashIcon size={24} /> : <EyeIcon size={24} />}
          </button>
        }
        placeholder="Enter password"
        type={isPwdVisible ? "text" : "password"}
        isError={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="on"
      />
      <Input
        {...register("confirmPassword")}
        label="Confirm Password"
        contentLeft={<LockIcon size={24} />}
        contentRight={
          <button
            type="button"
            onClick={() => setIsCfmPwdVisible(!isCfmPwdVisible)}
          >
            {isCfmPwdVisible ? (
              <EyeSlashIcon size={24} />
            ) : (
              <EyeIcon size={24} />
            )}
          </button>
        }
        placeholder="Confirm password"
        type={isCfmPwdVisible ? "text" : "password"}
        isError={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        autoComplete="on"
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
        <Button fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating an account..." : "Sign up"}
        </Button>
        <div className="flex items-center gap-1 self-stretch text-base">
          <span className="text-center font-semibold text-text-em-mid">
            Already have an account?
          </span>
          <Button variant="link" as="a" href="/account/auth/login">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};
