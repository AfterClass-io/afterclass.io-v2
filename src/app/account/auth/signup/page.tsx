import { AuthCard } from "@/common/components/Auth";
import SignupForm from "@/common/components/Auth/SignupForm";

export default function SignUp() {
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Create an account">
          <SignupForm />
        </AuthCard>
      </section>
    </>
  );
}
