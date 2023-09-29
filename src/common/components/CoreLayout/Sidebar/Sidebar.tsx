import React from "react";
import {
  AfterclassIcon,
  BookLineIcon,
  DealsIcon,
  StarLineAltIcon,
} from "../../CustomIcon";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { SidebarItem } from "./SidebarItem";
import { useRouter } from "next/router";
import { type SidebarListItem } from "./types";

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="h-full w-60 space-y-6 border-r border-r-border-elevated px-4 py-5">
      <Link href="/" className="flex items-center px-3 text-primary-default">
        <AfterclassIcon />
      </Link>
      {/* TODO: insert searchbar here */}
      <div className="rounded-md border border-border-elevated px-3 py-2">
        Search
      </div>
      <div>
        <ul className="space-y-2">
          {SidebarList.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={router.pathname.startsWith(item.href)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const SidebarList: SidebarListItem[] = [
  {
    label: "Reviews",
    icon: <StarLineAltIcon size={16} />,
    href: "/reviews",
  },
  {
    label: "Bidding Price",
    icon: <Icon icon="uil:chart-line" width={16} />,
    href: "/bidding-price",
  },
  {
    label: "Marketplace",
    icon: <BookLineIcon size={16} />,
    href: "/marketplace",
  },
  {
    label: "Deals",
    icon: <DealsIcon size={16} />,
    href: "/deals",
  },
];
