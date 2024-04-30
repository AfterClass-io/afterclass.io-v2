import { Suspense } from "react";
import { AuthCard, ConfirmSignUpNote } from "@/common/components/Auth";
import { notFound } from "next/navigation";

export default function ConfirmSignUp({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const confirmationUrl = searchParams["confirmation_url"];
  if (!confirmationUrl || typeof confirmationUrl !== "string") {
    notFound();
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
