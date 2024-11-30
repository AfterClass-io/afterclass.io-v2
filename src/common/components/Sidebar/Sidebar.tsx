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
  StatisticsTableIcon,
} from "@/common/components/CustomIcon";
import { SidebarItem } from "@/common/components/SidebarItem";
import { Logo } from "@/common/components/Logo";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";
import { cn } from "@/common/functions";
import { env } from "@/env";

export type SidebarItemType = {
  label: string;
  icon: React.ReactNode;
  href: string;
  exact?: boolean;
  external?: boolean;
  showOnMobile?: boolean;
};

type SidebarCategoryType = {
  main: SidebarItemType[]; // Ensure "main" is always required
  [key: string]: SidebarItemType[];
};

const SIDEBAR_CATEGORY_ITEMS: SidebarCategoryType = {
  main: [
    {
      label: "Reviews",
      icon: <StarLineAltIcon size={16} />,
      href: "/",
      exact: true,
    },
    {
      label: "Bid Analytics",
      icon: <ChartLineIcon />,
      href: "/bidding",
    },
    // Development-only links
    ...(process.env.NODE_ENV === "development" ? [] : []),
  ],
  contribute: [
    {
      label: "Write a Review",
      icon: <PlusIcon size={16} />,
      href: "/submit",
      showOnMobile: false,
    },
    {
      label: "AfterClass OSS",
      icon: <GithubIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_GITHUB_LINK,
      showOnMobile: false,
    },
  ],
  telegram: [
    {
      label: "Channel",
      icon: <TelegramIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_CHANNEL_LINK,
    },
    {
      label: "Helpdesk",
      icon: <HelpDeskIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_HELPDESK_LINK,
    },
  ],
  site: [
    {
      label: "Statistics",
      icon: <StatisticsTableIcon size={16} />,
      href: "/statistics",
      external: true,
    },
  ],
};

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

  const { main: SIDEBAR_MAIN_ITEMS, ...rest } = SIDEBAR_CATEGORY_ITEMS;
  const SIDEBAR_OTHER_ITEMS = rest;

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
          {SIDEBAR_MAIN_ITEMS.map((item) => (
            <SidebarItem
              key={item.href}
              data-test={`sidebar-${item.label.replace(/\s/g, "-").toLowerCase()}`}
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
      {/* Other Sections */}
      {Object.entries(SIDEBAR_OTHER_ITEMS).map(([category, items]) => {
        const isMobileOnly = items.some((item) => item.showOnMobile === false);
        return (
          <React.Fragment key={category}>
            <Separator.Root
              className={cn(
                isMobileOnly ? "block md:hidden" : "",
                "h-px w-full bg-border-default",
              )}
              decorative
              orientation="horizontal"
            />
            <div>
              <div
                className={cn(
                  isMobileOnly ? "block md:hidden" : "",
                  "px-3 py-2 text-xs text-text-em-low",
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
              <ul
                className={cn(
                  isMobileOnly ? "block md:hidden" : "",
                  "space-y-2",
                )}
              >
                {items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    {...item}
                    active={pathname === item.href}
                    external={item.href.startsWith("http")}
                    data-umami-event={`sidebar-${item.label
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                  />
                ))}
              </ul>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
