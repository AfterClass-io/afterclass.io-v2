import { AuthCard, LoginForm } from "@/common/components/Auth";

export default function Login() {
  return (
    <section className="flex h-full flex-shrink-0 items-start justify-center p-5 md:items-center md:py-16">
      <AuthCard title="Login">
        <LoginForm />
      </AuthCard>
    </section>
  );
}
