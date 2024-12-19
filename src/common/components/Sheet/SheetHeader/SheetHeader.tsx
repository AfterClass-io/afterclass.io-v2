import { sheetTheme } from "@/common/components/Sheet/Sheet.theme";
import * as React from "react";

export const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { header } = sheetTheme();
  return <div className={header({ className })} {...props} />;
};
SheetHeader.displayName = "SheetHeader";
