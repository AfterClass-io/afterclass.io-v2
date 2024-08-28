"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Separator from "@radix-ui/react-separator";

import {
  ChartLineIcon,
  StarLineAltIcon,
  TelegramIcon,
  HelpDeskIcon,
} from "@/common/components/CustomIcon";
import { SidebarItem } from "@/common/components/SidebarItem";
import { Logo } from "@/common/components/Logo";
import { SearchCmdk } from "@/common/components/SearchCmdk";
import { cn } from "@/common/functions";
import { env } from "@/env.mjs";

const SIDEBAR_ITEMS = [
  {
    label: "Reviews",
    icon: <StarLineAltIcon size={16} />,
    href: "/",
    exact: true,
    category: "feature",
  },
  {
    label: "Bid History",
    icon: <ChartLineIcon />,
    href: "/bidding",
    category: "feature",
  },
  {
    label: "Telegram",
    icon: <TelegramIcon size={16} />,
    href: env.NEXT_PUBLIC_AC_TELEGRAM_LINK,
    category: "channel",
  },
  {
    label: "Helpdesk",
    icon: <HelpDeskIcon size={16} />,
    href: env.NEXT_PUBLIC_AC_HELPDESK_LINK,
    category: "channel",
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
  const SIDEBAR_FEATURES_ITEMS = SIDEBAR_ITEMS.filter(
    (item) => item.category === "feature",
  );
  const SIDEBAR_CHANNELS_ITEMS = SIDEBAR_ITEMS.filter(
    (item) => item.category === "channel",
  );
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
          {SIDEBAR_FEATURES_ITEMS.map((item) => (
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
      <Separator.Root
        className="h-px w-full bg-border-default"
        decorative
        orientation="horizontal"
      />
      <div>
        <ul className="space-y-2">
          {SIDEBAR_CHANNELS_ITEMS.map((item) => (
            <SidebarItem key={item.href} {...item} external={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};
