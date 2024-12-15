import { Button } from "@/common/components/Button";
import { AuthCard } from "@/modules/auth/components";
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
      <div className="flex w-full flex-col gap-6 pb-3 text-text-em-high">
        <p>
          Please click on the button below to complete your sign up process.
        </p>
        <Button
          as="a"
          href={confirmationUrl}
          disabled={!confirmationUrl}
          external
          fullWidth
        >
          Confirm Sign Up
        </Button>
      </div>
    </AuthCard>
  );
}
