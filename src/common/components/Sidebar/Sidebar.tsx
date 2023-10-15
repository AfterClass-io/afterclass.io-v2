import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BookLineIcon,
  DealsIcon,
  StarLineAltIcon,
} from "@/common/components/CustomIcon";
import { Icon } from "@iconify-icon/react";
import {
  SidebarItem,
  type SidebarListItem,
} from "@/common/components/SidebarItem";
import { Logo } from "@/common/components/Logo";
import { Input } from "@/common/components/Input";

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="h-full w-52 space-y-5 border-r border-r-border-elevated px-4 py-5">
      <Link href="/" className="flex items-center px-3 text-primary-default">
        <Logo />
      </Link>
      <Input
        className="w-full"
        leftContent={
          <Icon icon="uil:search" size={16} className="px-1 text-text-em-low" />
        }
        placeholder="Search"
        size="sm"
      />
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
