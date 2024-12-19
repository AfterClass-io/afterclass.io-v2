import { sheetTheme } from "@/common/components/Sheet/Sheet.theme";
import * as React from "react";

export const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { footer } = sheetTheme();
  return <div className={footer({ className })} {...props} />;
};
SheetFooter.displayName = "SheetFooter";
