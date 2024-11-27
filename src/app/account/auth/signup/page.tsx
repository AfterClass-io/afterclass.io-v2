import {
  AuthCard,
  SignupForm,
  SignupModalV1User,
} from "@/modules/auth/components";

export default function SignUp({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const existingV1UserEmail = searchParams.email;

  return (
    <>
      {existingV1UserEmail && <SignupModalV1User />}
      <AuthCard title="Create an account">
        <SignupForm />
      </AuthCard>
    </>
  );
}
