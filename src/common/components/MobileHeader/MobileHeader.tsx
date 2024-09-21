"use client";

import { Button } from "@/common/components/Button";
import { AfterclassIcon, PlusIcon } from "@/common/components/CustomIcon";
import { Sidebar } from "@/common/components/Sidebar";
import { cn } from "@/common/functions";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { useState, type ComponentPropsWithoutRef } from "react";

export interface MobileHeaderProps extends ComponentPropsWithoutRef<"header"> {
  isLoggedIn: boolean;
}

export const MobileHeader = ({ isLoggedIn, ...props }: MobileHeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header
        {...props}
        className={cn(
          "bg-surface-base",
          "border-b border-border-default",
          "h-14 px-2",
          "flex items-center justify-between",
          props?.className,
        )}
      >
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            iconLeft={<Icon icon="uil:bars" width="100%" height="100%" />}
            aria-label="menu"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          />
          <Link href="/" className="text-primary-default">
            <AfterclassIcon size={20} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Icon
            icon="charm:search"
            width={20}
            className="text-text-on-tertiary"
            onClick={() =>
              // hack to activate search command modal
              // due to hooks on <SearchCmdk/> somehow being loaded
              // despite parent component being 'hidden'
              document.dispatchEvent(new KeyboardEvent("keydown", { key: "/" }))
            }
          />

          {isLoggedIn ? (
            <Button
              variant="secondary"
              size="sm"
              as="a"
              href="/submit"
              iconLeft={<PlusIcon />}
            >
              Write a review
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              as="a"
              href="/account/auth/login"
            >
              Login
            </Button>
          )}
        </div>
      </header>

      {/* Mobile sidebar */}
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 top-14 z-header-sidebar bg-bg-base/90",
          "opacity-0 transition-opacity duration-500 ease-in-out",
          isSidebarOpen && "opacity-100",
          !isSidebarOpen && "pointer-events-none",
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "absolute bottom-0 left-0 top-14 z-header-sidebar",
          "-translate-x-full transition-transform duration-500 ease-in-out",
          "border-r border-border-default bg-surface-base",
          isSidebarOpen && "translate-x-0",
        )}
      >
        <Sidebar
          hideSearch
          hideLogo
          className="relative max-w-[240px] border-none"
          onClickCapture={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};
