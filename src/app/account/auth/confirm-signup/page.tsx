"use client";

import { AuthCard, ConfirmSignUpNote } from "@/common/components/Auth";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmSignUp() {
  const router = useRouter();
  const currentURL = new URL(window.location.href);
  const confirmationUrl = currentURL.searchParams.get("confirmation_url");
  if (!confirmationUrl) {
    router.push("/account/auth/signup");
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
