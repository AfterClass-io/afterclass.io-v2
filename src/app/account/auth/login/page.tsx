import { Suspense } from "react";

import { AuthCard, LoginForm } from "@/modules/auth/components";

export default function Login() {
  return (
    <AuthCard title="Login">
      {/*
          //! suspense required for useSearchParams
          see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
      */}
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
