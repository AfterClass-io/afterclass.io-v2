import { PageHead } from "@/common/components/PageHead";
import { AuthCard } from "@/common/components/Auth";
import { Input } from "@/common/components/Input";
import { useState, useEffect, MouseEvent } from "react";
import { supabase } from "@/server/supabase";

export default function ResetPassword() {
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("event: ", event);
    });
  }, []);

  const [pwd, setPwd] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleResetPassword = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("new password: ", pwd);
    setFormSuccess(false);

    const { error } = await supabase.auth.updateUser({ password: pwd });
    if (error) {
      alert(error.message);
      return;
    }

    // reset form
    setPwd("");
    setFormSuccess(true);
  };

  return (
    <>
      <PageHead name="AfterClass" />
      <section className="flex h-full flex-col items-center space-y-6 p-6">
        <AuthCard title="Reset Password">
          <div className="grid gap-4">
            <Input
              id="password"
              name="password"
              // type="password"
              value={pwd}
              onChange={(ev) => setPwd(ev.target.value)}
            />
            <button
              className="w-full rounded-md bg-primary-default p-2 text-text-on-primary"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
          {formSuccess && (
            <div className="text-green-500">
              Your password has been updated successfully.
            </div>
          )}
        </AuthCard>
      </section>
    </>
  );
}
