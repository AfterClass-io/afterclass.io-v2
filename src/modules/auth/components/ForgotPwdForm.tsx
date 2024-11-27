"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/common/components/Input";
import { Button } from "@/common/components/Button";
import { EnvelopeIcon } from "@/common/components/CustomIcon";

import { forgotPasswordFormAction } from "../functions";
import { ForgotPwdFormInputs, forgotPwdFormInputsSchema } from "../types";

export const ForgotPwdForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPwdFormInputs>({
    resolver: zodResolver(forgotPwdFormInputsSchema),
    mode: "onTouched",
  });

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(async (data) => {
        const errMsg = await forgotPasswordFormAction(data);
        if (errMsg) alert(errMsg);
        reset();
      })}
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
