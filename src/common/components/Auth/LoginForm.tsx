"use client";

import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/common/components/Button";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { Input } from "@/common/components/Input";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({ mode: "onTouched" });
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    if (isSubmitting) return;
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: searchParams.get("callbackUrl") || "/reviews",
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
  }, [searchParams]);

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="School Email Address"
        leftContent={<EnvelopeIcon size={24} />}
        placeholder="john.doe.2023@smu.edu.sg"
        isError={!!errors.email}
        helperText={errors.email?.message}
        autoComplete="on"
        registerFormProps={register("email", {
          required: "Please enter a valid school email address",
        })}
      />
      <Input
        label="Password"
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
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>
        <div className="flex items-center gap-1 self-stretch text-base">
          <span className="text-center font-semibold text-text-em-mid">
            {"Don't have an account?"}
          </span>
          <Button variant="link" as="a" href="/account/auth/signup">
            Create an account
          </Button>
        </div>
      </div>
    </form>
  );
};
