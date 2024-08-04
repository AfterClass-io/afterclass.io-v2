"use client";
import { Tooltip } from "@/common/components/Tooltip";

export default function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
}
