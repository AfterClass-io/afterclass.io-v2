"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AuthCard, VerificationEmailForm } from "@/common/components/Auth";
import { useRouter } from "next/navigation";

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  if (!email) {
    router.push("/account/auth/signup");
    return;
  }
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="We emailed you a link">
          <Suspense fallback={<div>Loading...</div>}>
            <VerificationEmailForm email={email} />
          </Suspense>
        </AuthCard>
      </section>
    </>
  );
}
