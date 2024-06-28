"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BookLineIcon,
  ChartLineIcon,
  DealsIcon,
  StarLineAltIcon,
} from "@/common/components/CustomIcon";
import { SidebarItem } from "@/common/components/SidebarItem";
import { Logo } from "@/common/components/Logo";
import { SearchCmdk } from "@/common/components/SearchCmdk";
import { cn } from "@/common/functions";

const SIDEBAR_ITEMS = [
  {
    label: "Reviews",
    icon: <StarLineAltIcon size={16} />,
    href: "/",
    exact: true,
  },
  {
    label: "Bid History",
    icon: <ChartLineIcon />,
    href: "/bidding",
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
  
  // Development-only links
  ...(process.env.NODE_ENV === "development" ? [] : []),
];

export type SidebarItemType = (typeof SIDEBAR_ITEMS)[number];

export interface SidebarProps extends ComponentPropsWithoutRef<"div"> {
  hideSearch?: boolean;
  hideLogo?: boolean;
}

export const Sidebar = ({
  hideSearch = false,
  hideLogo = false,
  ...props
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      {...props}
      className={cn("w-52 space-y-5 px-4 py-5", props?.className)}
    >
      {!hideLogo && (
        <Link href="/" className="flex items-center px-3 text-primary-default">
          <Logo />
        </Link>
      )}
      {!hideSearch && <SearchCmdk />}
      <div>
        <ul className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={
                item.exact
                  ? pathname === item.href
                  : pathname?.startsWith(item.href) // pathname is null in storybook context
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
