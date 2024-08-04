import { AuthCard, ResetPasswordForm } from "@/common/components/Auth";

export default function ResetPassword() {
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //   // handle event / session with new auth state
  //   });
  // }, []);

  return (
    <AuthCard title="Reset Password">
      <ResetPasswordForm />
    </AuthCard>
  );
}
