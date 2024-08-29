import { type SidebarItemType } from "@/common/components/Sidebar/Sidebar";
import { cn } from "@/common/functions";
import Link from "next/link";

export type SidebarListItem = SidebarItemType & {
  active?: boolean;
  external?: boolean;
};

export const SidebarItem = ({
  label,
  icon,
  href,
  external = false,
  active,
}: SidebarListItem) => {
  const SidebarLink = external ? "a" : Link;
  return (
    <li>
      <SidebarLink
        href={href}
        target={external ? "_blank" : undefined}
        className={cn(
          "flex items-center gap-x-3 rounded-lg px-3 py-2 transition duration-200 ease-in-out",
          "hover:bg-surface-elevated",
          "border border-transparent",
          "text-sm font-semibold",
          "text-text-em-mid hover:text-text-em-high",
          active &&
            "border-border-default bg-surface-elevated text-text-em-high",
        )}
      >
        {icon}
        <span>{label}</span>
      </SidebarLink>
    </li>
  );
};
