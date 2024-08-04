import { AuthCard, LoginForm } from "@/common/components/Auth";
import { Suspense } from "react";

export default function Login() {
  return (
    <section className="flex h-full flex-shrink-0 items-start justify-center p-5 md:items-center md:py-16">
      <AuthCard title="Login">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </AuthCard>
    </section>
  );
}
