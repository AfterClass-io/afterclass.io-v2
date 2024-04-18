import * as React from "react";

import { SlashIcon } from "@/common/components/CustomIcon";
import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => {
  const { separator } = breadcrumbTheme();
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={separator({ className })}
      {...props}
    >
      {children ?? <SlashIcon />}
    </li>
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
