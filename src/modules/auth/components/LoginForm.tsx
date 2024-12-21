"use client";

import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/common/components/Button";
import { Input } from "@/common/components/Input";
import { Form } from "@/common/components/Form";
import {
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
} from "@/common/components/CustomIcon";
import { emailValidationSchema } from "@/common/tools/zod/schemas";
import useUmami from "@/common/hooks/useUmami";

const loginFormInputsSchema = z.object({
  email: emailValidationSchema,
  password: z
    .string()
    .min(8, { message: "Passwords must be at least 8 characters long" }),
});
type LoginFormInputs = z.infer<typeof loginFormInputsSchema>;

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const router = useRouter();
  const umami = useUmami();

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormInputsSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    console.log(window.location.hash);
    if (!window.location.hash.startsWith("#")) return;

    const params = new URLSearchParams(window.location.hash.substring(1));
    const supabaseErrorDescription = params.get("error_description");
    if (!supabaseErrorDescription) return;

    // TODO: use a better way to display error messages
    form.setError("password", {
      type: "custom",
      message: supabaseErrorDescription,
    });

    // why does this effect depend on searchParams?
    // this is a quick hack to watch for changes in the url fragment as
    // next does not provide a way to watch for changes in the url fragment.
    // the searchParams is somehow conveniently updated when url fragment is updated,
    // which triggers this effect
    // see https://github.com/orgs/supabase/discussions/12939
    // see https://github.com/vercel/next.js/discussions/49465
  }, [searchParams]);

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";
    const signinResp = await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
      redirect: false,
    });

    if (!signinResp) {
      console.warn("Sign in returned null");
      return;
    }

    if (signinResp.error) {
      form.setError("password", {
        type: "custom",
        message: "Invalid email or password. Please try again.",
      });
      return;
    }

    umami.identify({ email });
    router.push(signinResp.url ?? callbackUrl);
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4 md:gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>School Email Address</Form.Label>
              <Form.Control>
                <Input
                  {...field}
                  disabled={form.formState.isSubmitting}
                  contentLeft={<EnvelopeIcon size={24} />}
                  placeholder="john.doe.2023@smu.edu.sg"
                  autoComplete="on"
                  tabIndex={1}
                  data-test="email"
                />
              </Form.Control>
              <Form.Message data-test="email-helper-text" />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.Item>
              <Form.Label className="flex items-center justify-between">
                <span>Password</span>
                <Button
                  variant="link"
                  as="a"
                  href="/account/auth/forgot"
                  isResponsive
                  className="md:text-sm"
                  tabIndex={5}
                  data-test="forget"
                >
                  Forgot password?
                </Button>
              </Form.Label>
              <Form.Control>
                <Input
                  {...field}
                  disabled={form.formState.isSubmitting}
                  contentLeft={<LockIcon size={24} />}
                  contentRight={
                    <button
                      type="button"
                      onClick={() => setIsPwdVisible(!isPwdVisible)}
                      tabIndex={4}
                    >
                      {isPwdVisible ? (
                        <EyeSlashIcon size={24} />
                      ) : (
                        <EyeIcon size={24} />
                      )}
                    </button>
                  }
                  placeholder="Enter password"
                  type={isPwdVisible ? "text" : "password"}
                  autoComplete="on"
                  tabIndex={2}
                  data-test="password"
                />
              </Form.Control>
              <Form.Message data-test="password-helper-text" />
            </Form.Item>
          )}
        />
        <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
          <Button
            fullWidth
            type="submit"
            disabled={form.formState.isSubmitting}
            isResponsive
            tabIndex={3}
            data-test="submit"
          >
            {form.formState.isSubmitting ? "Signing in..." : "Login"}
          </Button>
          <div className="flex items-center gap-1 self-stretch text-xs md:text-base">
            <span className="text-center font-semibold text-text-em-mid">
              {"Don't have an account?"}
            </span>
            <Button
              type="button"
              variant="link"
              as="a"
              href="/account/auth/signup"
              isResponsive
              tabIndex={6}
              data-test="register"
            >
              Create an account
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
