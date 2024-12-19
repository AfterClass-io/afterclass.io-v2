"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/common/components/Sidebar";
import { Logo } from "@/common/components/Logo";
import {
  ChartLineIcon,
  GithubIcon,
  HelpDeskIcon,
  PlusIcon,
  StarLineAltIcon,
  StatisticsTableIcon,
  TelegramIcon,
} from "@/common/components/CustomIcon";
import { env } from "@/env";
import { Button } from "@/common/components/Button";
import { toTitleCase } from "@/common/functions";
import Link from "next/link";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";

type SidebarItemType = {
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

const { main: SIDEBAR_MAIN_ITEMS, ...SIDEBAR_OTHER_ITEMS } =
  SIDEBAR_CATEGORY_ITEMS;

export const AppSidebar = () => {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Link href="/" className="flex items-center px-3 text-primary-default">
          <Logo />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SearchCmdk />
              {SIDEBAR_MAIN_ITEMS.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Button
                      as="a"
                      variant="ghost"
                      href={item.href}
                      iconLeft={item.icon}
                      fullWidth
                      className="flex items-center justify-start gap-x-3 border border-transparent px-3 py-2 text-sm font-semibold text-text-em-mid hover:bg-border-elevated hover:text-text-em-high"
                    >
                      {item.label}
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {Object.entries(SIDEBAR_OTHER_ITEMS).map(([key, items]) => (
          <SidebarGroup key={key}>
            <SidebarGroupLabel>{toTitleCase(key)}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Button
                        as="a"
                        variant="ghost"
                        href={item.href}
                        iconLeft={item.icon}
                        fullWidth
                        className="flex items-center justify-start gap-x-3 border border-transparent px-3 py-2 text-sm font-semibold text-text-em-mid hover:bg-border-elevated hover:text-text-em-high"
                      >
                        {item.label}
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};
