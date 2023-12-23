"use client";

import { useState, FormEvent } from "react";

import { Button } from "@/common/components/Button";
import { EnvelopeIcon } from "@/common/components/CustomIcon/EnvelopeIcon";
import { LockIcon } from "@/common/components/CustomIcon/LockIcon";
import { Input } from "@/common/components/Input";
import { EyeIcon } from "@/common/components/CustomIcon/EyeIcon";
import { EyeSlashIcon } from "@/common/components/CustomIcon/EyeSlashIcon";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cfmPwd, setCfmPwd] = useState("");
  const [formSubmittedLoading, setFormSubmittedLoading] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [cfmPwdErrorMsg, setCfmPwdErrorMsg] = useState("");
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isCfmPwdVisible, setIsCfmPwdVisible] = useState(false);

  const validatePassword = (pwd: string) => {
    console.log("validatePassword", pwd, pwd.length);
    pwd.length < 8
      ? setPwdErrorMsg("Password must be at least 8 characters long")
      : setPwdErrorMsg("");
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith("smu.edu.sg");
  const validateEmail = (email: string) => {
    isValidEmail(email)
      ? setEmailErrorMsg("")
      : setEmailErrorMsg("Please enter a valid school email address");
  };

  const validateConfirmPassword = (cfmPwd: string) => {
    cfmPwd !== pwd
      ? setCfmPwdErrorMsg("Passwords do not match")
      : setCfmPwdErrorMsg("");
  };

  const handleCreateAccountAndSignin = async (ev: FormEvent) => {
    ev.preventDefault();
    if (formSubmittedLoading) return;
    setFormSubmittedLoading(true);

    // TODO: replace with create account logic
    await new Promise((r) => setTimeout(r, 2000));
    !!emailErrorMsg || !!pwdErrorMsg || !!cfmPwdErrorMsg
      ? alert("error creating account!")
      : alert("account created!");

    setFormSubmittedLoading(false);
  };

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleCreateAccountAndSignin}
    >
      <Input
        label={"School Email Address"}
        leftContent={<EnvelopeIcon size={24} />}
        placeholder="john.doe.2023@smu.edu.sg"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        onBlur={() => validateEmail(email)}
        isError={!!emailErrorMsg}
        helperText={emailErrorMsg}
        autoComplete="on"
      />
      <Input
        label={"Password"}
        leftContent={<LockIcon size={24} />}
        rightContent={
          isPwdVisible ? (
            <EyeSlashIcon
              size={24}
              onClick={() => setIsPwdVisible(!isPwdVisible)}
            />
          ) : (
            <EyeIcon size={24} onClick={() => setIsPwdVisible(!isPwdVisible)} />
          )
        }
        placeholder="Enter password"
        type={isPwdVisible ? "text" : "password"}
        value={pwd}
        onChange={(ev) => {
          setPwd(ev.target.value);
          !!pwdErrorMsg && validatePassword(ev.target.value);
        }}
        onBlur={() => validatePassword(pwd)}
        isError={!!pwdErrorMsg}
        helperText={pwdErrorMsg}
        autoComplete="on"
      />
      <Input
        label={"Confirm Password"}
        leftContent={<LockIcon size={24} />}
        rightContent={
          isCfmPwdVisible ? (
            <EyeSlashIcon
              size={24}
              onClick={() => setIsCfmPwdVisible(!isCfmPwdVisible)}
            />
          ) : (
            <EyeIcon
              size={24}
              onClick={() => setIsCfmPwdVisible(!isCfmPwdVisible)}
            />
          )
        }
        placeholder="Confirm password"
        type={isCfmPwdVisible ? "text" : "password"}
        value={cfmPwd}
        onChange={(ev) => {
          setCfmPwd(ev.target.value);
          validateConfirmPassword(ev.target.value);
        }}
        isError={!!cfmPwdErrorMsg}
        helperText={cfmPwdErrorMsg}
        autoComplete="on"
      />
      <div className="flex w-full flex-col items-start gap-2 self-stretch pt-3">
        <Button fullWidth type="submit" disabled={formSubmittedLoading}>
          {formSubmittedLoading ? "Creating an account..." : "Sign up"}
        </Button>
        <div className="flex items-center gap-1 self-stretch text-base">
          <span className="text-center font-semibold text-text-em-mid">
            {"Already have an account?"}
          </span>
          <Button variant="link" as="a" href="/account/auth/login">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
