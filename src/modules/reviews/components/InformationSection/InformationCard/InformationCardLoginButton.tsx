"use client";

import { Button } from "@/common/components/Button";
import { usePathname } from "next/navigation";

export const InformationCardLoginButton = () => {
  const pathname = usePathname();
  return (
    <Button
      as="a"
      variant="link"
      href={{
        pathname: "/account/auth/login",
        query: { callbackUrl: pathname },
      }}
    >
      Login
    </Button>
  );
};
