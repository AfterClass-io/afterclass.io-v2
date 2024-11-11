import { Suspense } from "react";
import { AuthCard, ConfirmSignUpNote } from "@/modules/auth/components";
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
    <AuthCard title="Thank you for your registration!">
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmSignUpNote confirmationUrl={confirmationUrl} />
      </Suspense>
    </AuthCard>
  );
}
