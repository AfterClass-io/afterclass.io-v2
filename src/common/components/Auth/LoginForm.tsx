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

const AlertMessage = ({message , onClose,  isVisible}) => {
  return (
    <div
    className={`fixed top-4 right-4 bg-white text-red-600 p-4 rounded-md shadow-lg flex items-center gap-4 border border-blue-600 transition-opacity duration-500 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
      <span className = "font-bold text-red-600 "> Something went wrong!</span>
      <span className = "font-bold">{message}</span>
      <button onClick={onClose} className = "text-xl font-bold ml-4">
        &times;
      </button>
    </div>
  )
}

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);



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
    if (email === "existing@example.com") {
      setAlertMessage("Email already exists");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });

    if (result?.error) {
      setAlertMessage("Invalid email or password. Please try again");
      setIsAlertVisible(true);
    } else {
      reset();
    }
  };
  useEffect(() => {
    if (isAlertVisible) {
      const timer = setTimeout(() => {
        setIsAlertVisible(false);
        const fadeOutTimer = setTimeout(() => setAlertMessage(null), 500); // Match duration-500
        return () => clearTimeout(fadeOutTimer);
      }, 3000); // Display alert for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isAlertVisible]);

  useEffect(() => {
    const e = searchParams.get("error");
    if(e){
      setError("password", {
        type: "custom",
        message: "Invalid email or password. Please try again.",
      });
    }
    
    

  }, [searchParams, setError]);

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
        labelRight={
          <Button
            variant="link"
            as="a"
            href="/account/auth/reset-password"
            size="sm"
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
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
          {alertMessage && (
            <AlertMessage
              message={alertMessage}
              onClose={() => {
                setAlertMessage(null);
                setIsAlertVisible(false);
              }}
              isVisible={isAlertVisible}
            />
          )}
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
