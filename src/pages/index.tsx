import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";
import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { useTheme } from "next-themes";
import { useState, useEffect, useCallback } from "react";
import { PageHead } from "@/common/components/PageHead";
import { Icon } from "@iconify-icon/react";
import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";

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
            label={"Test Label 1"}
            helperText={"Test helper text"}
            leftContent={<StarLineAltIcon size={16} />}
            rightContent={<StarLineAltIcon size={16} />}
            placeholder="Write here"
          />
          <Input
            label={"Test Label 2"}
            helperText={"Test error helper text"}
            leftContent={<StarLineAltIcon size={16} />}
            rightContent={<StarLineAltIcon size={16} />}
            placeholder="Write here"
            size={{ initial: "sm", md: "md" }}
            isError={true}
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
    </div>
  );
}
