import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState, useEffect, useCallback, FormEvent } from "react";
import { Icon } from "@iconify-icon/react";

import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { PageHead } from "@/common/components/PageHead";
import { Input } from "@/common/components/Input";
import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { supabase } from "@/server/supabase";
import { api } from "@/utils/api";
import { env } from "@/env.mjs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleTheme = useCallback(() => {
    if (theme === APP_THEMES.light) setTheme(APP_THEMES.dark);
    if (theme === APP_THEMES.dark) setTheme(APP_THEMES.light);
  }, [setTheme, theme]);

  return (
    <>
      <PageHead name="AfterClass" />
      <section className="flex h-full flex-col items-center space-y-6 p-6">
        <div className="font-display font-semibold text-primary-default">
          AfterClass
        </div>
        {isMounted && (
          <button
            className="mx-auto flex items-center gap-2 rounded-md bg-primary-default p-3 text-text-on-primary"
            // data-theme="light"
            onClick={handleToggleTheme}
          >
            <Icon icon="uil:chart-line" width={16} />
            <StarLineAltIcon size={16} />
            <span>Toggle theme: Current {theme}</span>
          </button>
        )}
        <div className="mx-auto flex w-fit flex-col items-center justify-center gap-3 rounded-md bg-bg-alt p-6">
          <span>tRPC Auth showcase</span>
          <span>
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </span>
          <AuthShowcase />
        </div>
        <div className="space-y-4">
          <Input
            leftContent={<StarLineAltIcon />}
            rightContent={<StarLineAltIcon />}
            placeholder="Write here"
          />
          <Input
            leftContent={<StarLineAltIcon size={16} />}
            rightContent={<StarLineAltIcon size={16} />}
            placeholder="Write here"
            size={{ initial: "sm", md: "md" }}
          />
        </div>
      </section>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  const [email, setEmail] = useState("");
  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    console.log("reset password: ", email);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/account/reset-password`,
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
        <p className="text-center text-2xl text-white">
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
}
