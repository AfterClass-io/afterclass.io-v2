import { AuthCard, SignupForm } from "@/common/components/Auth";

export default function SignUp() {
  return (
    <section className="flex h-full flex-shrink-0 items-start justify-center p-5 md:items-center md:py-16">
      <AuthCard title="Create an account">
        <SignupForm />
      </AuthCard>
    </section>
  );
}
