"use client";

import { useState, useEffect, Suspense } from "react";
import { AuthCard, ConfirmSignUpNote } from "@/common/components/Auth";
import { useRouter } from "next/navigation";

export default function ConfirmSignUp() {
  const router = useRouter();
  const [confirmationUrl, setConfirmationUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentURL = new URL(window.location.href);
      const urlParam = currentURL.searchParams.get("confirmation_url");
      if (urlParam) {
        setConfirmationUrl(urlParam);
      } else {
        router.push("/account/auth/signup");
      }
    }
  }, [router, confirmationUrl]);
  if (!confirmationUrl) {
    return;
  }
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Thank you for your registration!">
          <Suspense fallback={<div>Loading...</div>}>
            <ConfirmSignUpNote confirmationUrl={confirmationUrl} />
          </Suspense>
        </AuthCard>
      </section>
    </>
  );
}
