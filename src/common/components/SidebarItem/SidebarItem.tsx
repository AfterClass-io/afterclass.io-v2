import Link from "next/link";

export const SidebarItem = ({
  label,
  icon,
  href,
  external = false,
  active,
}: SidebarListItem) => {
  const SidebarLink = external ? "a" : Link;
  return (
    <li className="rounded-md bg-gradient-to-r from-element-secondary">
      <SidebarLink
        href={href}
        className={
          "flex items-center gap-x-3 rounded-md bg-bg-base px-3 py-2 transition duration-200 ease-in-out hover:bg-transparent" +
          (active ? " bg-gradient-to-r from-element-secondary" : "")
        }
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </SidebarLink>
    </li>
  );
};

export type SidebarListItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  external?: boolean;
};
