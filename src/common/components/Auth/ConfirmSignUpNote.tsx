"use client";

import { Button } from "@/common/components/Button";
import { useSearchParams, notFound } from "next/navigation";

export const ConfirmSignUpNote = () => {
  const searchParams = useSearchParams();
  const confirmationUrl = searchParams.get("confirmation_url");
  if (!confirmationUrl) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-6 pb-3 text-text-em-high">
      <p>Please click on the button below to complete your sign up process.</p>
      <a href={confirmationUrl}>
        <Button variant="tertiary" disabled={!confirmationUrl}>
          Confirm Sign Up
        </Button>
      </a>
    </div>
  );
};
