"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/common/components/Button";
import { resendEmail, ResendType } from "@/server/supabase";
import { useSearchParams, notFound } from "next/navigation";

const emailResendBufferSeconds = 60;

function EmailConfirmationNote({ email }: { email: string }) {
  return (
    <>
      <div className="flex flex-col gap-6 pb-3 text-text-em-high">
        <p>
          You’re almost there! We’ve sent a verification email to
          <br />
          <b>{email}</b>.
        </p>
        <p>
          Please click on the link in that email to verify your account within
          <br />
          20 minutes.
        </p>
      </div>
    </>
  );
}

export const VerificationEmailForm = () => {
  const [secondsToResendEmail, setSecondsToResendEmail] = useState(
    emailResendBufferSeconds,
  );
  const [formSubmittedLoading, setFormSubmittedLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      secondsToResendEmail > 0 &&
        setSecondsToResendEmail(secondsToResendEmail - 1);
    }, 1000);
  }, [secondsToResendEmail]);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  if (!email) {
    notFound();
  }
  const handleResendEmailOtp = async (e: FormEvent) => {
    e.preventDefault();
    setFormSubmittedLoading(true);
    const res = await resendEmail(email, ResendType.SIGNUP);
    if (res.error) {
      alert(res.error.message);
    } else {
      alert("Email sent! Please check your inbox");
    }
    setSecondsToResendEmail(emailResendBufferSeconds);
    setFormSubmittedLoading(false);
  };

  const buttonText = () => {
    if (formSubmittedLoading) return "Resending email...";
    if (secondsToResendEmail > 0)
      return `Resend email in ${secondsToResendEmail}s`;
    return "Resend email";
  };

  return (
    <form onSubmit={handleResendEmailOtp}>
      <EmailConfirmationNote email={email} />
      <Button
        variant="tertiary"
        type="submit"
        disabled={formSubmittedLoading || secondsToResendEmail > 0}
      >
        {buttonText()}
      </Button>
    </form>
  );
};
