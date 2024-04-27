import { Suspense } from "react";
import { AuthCard, ConfirmSignUpNote } from "@/common/components/Auth";

export default function ConfirmSignUp() {
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Thank you for your registration!">
          <Suspense fallback={<div>Loading...</div>}>
            <ConfirmSignUpNote />
          </Suspense>
        </AuthCard>
      </section>
    </>
  );
}
