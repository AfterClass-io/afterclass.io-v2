"use client";

import { Suspense } from "react";
import { AuthCard, VerificationEmailForm } from "@/common/components/Auth";

export default function Verify() {
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="We emailed you a link">
          <Suspense fallback={<div>Loading...</div>}>
            <VerificationEmailForm />
          </Suspense>
        </AuthCard>
      </section>
    </>
  );
}
