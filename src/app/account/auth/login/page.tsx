import { AuthCard } from "@/common/components/Auth";
import LoginForm from "@/common/components/Auth/LoginForm";

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
