"use client";

import { AuthCard, ResetPasswordForm } from "@/common/components/Auth";

export default function ResetPassword() {
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //   // handle event / session with new auth state
  //   });
  // }, []);

  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Reset Password">
          <ResetPasswordForm />
        </AuthCard>
      </section>
    </>
  );
}
