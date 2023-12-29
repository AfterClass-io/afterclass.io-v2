import { AuthCard, LoginForm } from "@/common/components/Auth";

export default function Login() {
  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Login">
          <LoginForm />
        </AuthCard>
      </section>
    </>
  );
}
