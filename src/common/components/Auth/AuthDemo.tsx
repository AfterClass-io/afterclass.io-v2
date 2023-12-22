"use client";

import { useState, type FormEvent } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Input } from "@/common/components/Input";
import { supabase } from "@/server/supabase";
import { api } from "@/common/tools/trpc/utils/api";

export const AuthDemo = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  const [email, setEmail] = useState("");
  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    console.log("reset password: ", email);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/account/auth/reset-password`,
    });
    if (error) {
      alert(error.message);
      return;
    }
    alert("Check your email for the password reset link");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {(sessionData || secretMessage) && (
        <p className="text-center text-2xl">
          {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
      )}
      <button
        className="rounded-full bg-element-secondary px-10 py-3 font-semibold text-text-on-secondary"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      Forgot password?
      <form className="flex flex-col gap-4" onSubmit={handleResetPassword}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
        <button
          className="rounded-full bg-element-secondary px-10 py-3 font-semibold text-text-on-secondary"
          type="submit"
        >
          Reset password
        </button>
      </form>
    </div>
  );
};
