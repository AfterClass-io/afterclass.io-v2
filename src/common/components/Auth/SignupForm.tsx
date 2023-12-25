"use client";

import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";

type SignupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupForm = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isCfmPwdVisible, setIsCfmPwdVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInputs>({ mode: "onTouched" });
  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    if (isSubmitting) return;

    // TODO: replace with create account logic
    console.log(data);
    await new Promise((r) => setTimeout(r, 2000));
    !!errors.email || !!errors.password || !!errors.confirmPassword
      ? alert("error creating account!")
      : alert("account created!");

    reset({ password: "", confirmPassword: "" });
  };

  const isValidEmail = (email: string) =>
    // TODO: replace with supported school email validation logic
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith("smu.edu.sg");

  useEffect(() => {
    console.log(isPwdVisible);
  }, [isPwdVisible]);

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
          validate: (email) =>
            isValidEmail(email) || "Please enter a valid school email address",
        })}
      />
      <Input
        label="Password"
        leftContent={<LockIcon size={24} />}
        rightContent={
          <button type="button" onClick={() => setIsPwdVisible(!isPwdVisible)}>
            {isPwdVisible ? <EyeSlashIcon size={24} /> : <EyeIcon size={24} />}
          </button>
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
      <Input
        label="Confirm Password"
        leftContent={<LockIcon size={24} />}
        rightContent={
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
        registerFormProps={register("confirmPassword", {
          required: "Please confirm your password",
          validate: (cfmPwd: string, formValues: SignupFormInputs) =>
            cfmPwd === formValues.password || "Passwords do not match",
        })}
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
