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
  PlusIcon,
  GithubIcon,
} from "@/common/components/CustomIcon";
import { SidebarItem } from "@/common/components/SidebarItem";
import { Logo } from "@/common/components/Logo";
import { SearchCmdk } from "@/common/components/SearchCmdk";
import { cn } from "@/common/functions";
import { env } from "@/env";

const SIDEBAR_ITEMS = [
  {
    label: "Reviews",
    icon: <StarLineAltIcon size={16} />,
    href: "/",
    exact: true,
    category: "feature",
  },
  {
    label: "Bid Analytics",
    icon: <ChartLineIcon />,
    href: "/bidding",
    category: "feature",
  },
  {
    label: "Write a Review",
    icon: <PlusIcon size={16} />,
    href: "/submit",
    category: "contribute",
  },
  {
    label: "AfterClass OSS",
    icon: <GithubIcon size={16} />,
    href: env.NEXT_PUBLIC_AC_GITHUB_LINK,
    category: "contribute",
  },
  {
    label: "Channel",
    icon: <TelegramIcon size={16} />,
    href: env.NEXT_PUBLIC_AC_CHANNEL_LINK,
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
  const SIDEBAR_CONTRIBUTE_ITEMS = SIDEBAR_ITEMS.filter(
    (item) => item.category === "contribute",
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
      {/* Contribute section, only visible on mobile */}
      <div className="block md:hidden">
        <div className="px-3 py-2 text-xs text-text-em-low">Contribute</div>
        <ul className="space-y-2">
          {SIDEBAR_CONTRIBUTE_ITEMS.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={pathname === item.href}
              external={item.href.startsWith("http") ? true : false}
            />
          ))}
        </ul>
      </div>
      <Separator.Root
        className="block h-px w-full bg-border-default md:hidden"
        decorative
        orientation="horizontal"
      />
      <div>
        <div className="px-3 py-2 text-xs text-text-em-low">Telegram</div>
        <ul className="space-y-2">
          {SIDEBAR_CHANNELS_ITEMS.map((item) => (
            <SidebarItem key={item.href} {...item} external={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};
