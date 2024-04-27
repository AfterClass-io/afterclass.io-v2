import { createClient } from "@supabase/supabase-js";
import { env } from "@/env.mjs";

export enum ResendType {
  Signup = "signup",
  EmailChange = "email_change",
}

export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export const signUpWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return { data, error };
};

export const resendEmail = async (email: string, type: ResendType) => {
  const { data, error } = await supabase.auth.resend({
    type: type,
    email: email,
  });
  return { data, error };
};
