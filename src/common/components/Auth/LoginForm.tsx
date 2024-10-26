"use client";

import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";

import { Button } from "@/common/components/Button";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { Input } from "@/common/components/Input";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormInputsSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter a valid school email address" })
    .email("Please enter a valid school email address"),
  password: z
    .string()
    .min(8, { message: "Passwords must be at least 8 characters long" }),
});
type LoginFormInputs = z.infer<typeof loginFormInputsSchema>;

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormInputsSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    if (isSubmitting) return;
    await signIn("credentials", {
      email,
      password,
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });
    reset();
  };

  useEffect(() => {
    const e = searchParams.get("error");
    e &&
      setError("password", {
        type: "custom",
        message: "Invalid email or password. Please try again.",
      });
  }, [searchParams, setError]);

  return (
    <form
      className="flex w-full flex-col gap-4 md:gap-6"
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
        data-test="email"
        fieldProps={{ helperTextDataTestId: "email-helper-text" }}
      />
      <Input
        {...register("password")}
        label="Password"
        labelRight={
          <Button
            variant="link"
            as="a"
            href="/account/auth/reset-password"
            isResponsive
            className="md:text-sm"
            data-test="forget"
          >
            Forgot password?
          </Button>
        }
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
        data-test="password"
        fieldProps={{ helperTextDataTestId: "password-helper-text" }}
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
        <Button
          fullWidth
          type="submit"
          disabled={isSubmitting}
          isResponsive
          data-test="submit"
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>
        <div className="flex items-center gap-1 self-stretch text-xs md:text-base">
          <span className="text-center font-semibold text-text-em-mid">
            {"Don't have an account?"}
          </span>
          <Button
            variant="link"
            as="a"
            href="/account/auth/signup"
            isResponsive
            data-test="register"
          >
            Create an account
          </Button>
        </div>
      </div>
    </form>
  );
};
