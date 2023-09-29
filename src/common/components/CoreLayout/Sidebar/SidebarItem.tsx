import Link from "next/link";
import { type SidebarListItem } from "./types";

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
        className={
          "flex items-center gap-x-3 rounded-md px-3 py-2 hover:bg-gradient-to-r hover:from-element-secondary" +
          (active ? " bg-gradient-to-r from-element-secondary" : "")
        }
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </SidebarLink>
    </li>
  );
};
