"use client";

import { useEffect, useState, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { AuthCard } from "@/common/components/Auth";
import { Button } from "@/common/components/Button";

const emailResendBufferSeconds = 60;

function VerifyConfirmationNote() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <>
      <div className="flex flex-col gap-6 text-text-em-high">
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

export default function Verify() {
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

  const handleResendEmailOtp = async (e: FormEvent) => {
    e.preventDefault();
    setFormSubmittedLoading(true);

    // TODO: replace with resend otp logic
    await new Promise((r) => setTimeout(r, 2000));
    alert("Email sent!");

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
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="We emailed you a link" onSubmit={handleResendEmailOtp}>
          <Suspense fallback={<div>Loading...</div>}>
            <VerifyConfirmationNote />
            <Button
              variant="tertiary"
              type="submit"
              disabled={formSubmittedLoading || secondsToResendEmail > 0}
            >
              {buttonText()}
            </Button>
          </Suspense>
        </AuthCard>
      </section>
    </>
  );
}
