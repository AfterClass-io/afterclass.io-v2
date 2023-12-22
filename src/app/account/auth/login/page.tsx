"use client";

import { useEffect, useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { AuthCard } from "@/common/components/Auth";
import { Button } from "@/common/components/Button";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { Input } from "@/common/components/Input";

export default function Login() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [formSubmittedLoading, setFormSubmittedLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const e = searchParams.get("error");
    e && setError("Invalid email or password. Please try again.");
  }, [searchParams]);

  const signin = async (ev: FormEvent) => {
    ev.preventDefault();
    if (formSubmittedLoading) return;
    setFormSubmittedLoading(true);
    await signIn("credentials", {
      email: email,
      password: pwd,
      callbackUrl: searchParams.get("callbackUrl") || "/reviews",
    });
    setPwd("");
    setFormSubmittedLoading(false);
  };

  return (
    <>
      <section className="flex h-full flex-shrink-0 items-center justify-center py-16">
        <AuthCard title="Login" onSubmit={signin}>
          <Input
            label={"School Email Address"}
            leftContent={<EnvelopeIcon size={24} />}
            placeholder="john.doe.2023@smu.edu.sg"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            autoComplete="on"
          />
          <Input
            label={"Password"}
            leftContent={<LockIcon size={24} />}
            placeholder="Enter password"
            type="password"
            value={pwd}
            onChange={(ev) => setPwd(ev.target.value)}
            autoComplete="on"
            isError={!!error}
            helperText={error}
          />
          <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
            <Button fullWidth onClick={signin} disabled={formSubmittedLoading}>
              {formSubmittedLoading ? "Signing in..." : "Login"}
            </Button>
            <div className="flex items-center gap-1 self-stretch text-base">
              <span className="text-center font-semibold text-text-em-mid">
                {"Don't have an account?"}
              </span>
              <Button variant="link" as="a" href="/account/auth/signup">
                Create an account
              </Button>
            </div>
          </div>
        </AuthCard>
      </section>
    </>
  );
}
