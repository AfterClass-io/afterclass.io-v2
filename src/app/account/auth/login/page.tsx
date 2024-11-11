import { AuthCard, LoginForm } from "@/modules/auth/components";
import { Suspense } from "react";

export default function Login() {
  return (
    <AuthCard title="Login">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
