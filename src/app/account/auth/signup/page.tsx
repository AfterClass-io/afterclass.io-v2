import { emailValidationSchema } from "@/common/tools/zod/schemas";
import {
  AuthCard,
  SignupForm,
  SignupModalV1User,
} from "@/modules/auth/components";

export default function SignUp({
  searchParams,
}: {
  searchParams: { email: string | string[] | undefined };
}) {
  const { success: isValidEmail, data: v1Email } =
    emailValidationSchema.safeParse(searchParams.email);

  return (
    <>
      {isValidEmail && <SignupModalV1User />}
      <AuthCard title="Create an account">
        <SignupForm defaultEmail={v1Email} />
      </AuthCard>
    </>
  );
}
