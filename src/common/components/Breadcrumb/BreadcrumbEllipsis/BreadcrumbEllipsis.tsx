import * as React from "react";

import { DotsHorizontalIcon } from "@/common/components/CustomIcon";
import { breadcrumbTheme } from "../Breadcrumb.theme";

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  const { ellipsisWrapper, ellipsisIcon } = breadcrumbTheme();
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={ellipsisWrapper({ className })}
      {...props}
    >
      <DotsHorizontalIcon className={ellipsisIcon()} />
      <span className="sr-only">More</span>
    </span>
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
