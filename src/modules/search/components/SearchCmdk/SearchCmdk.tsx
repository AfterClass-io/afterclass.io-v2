"use client";

import { type FormEvent, useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { useRouter } from "next/navigation";

import { Modal } from "@/common/components/Modal";
import { Button } from "@/common/components/Button";
import { SearchIcon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";

import { searchCmdkTheme } from "./SearchCmdk.theme";
import { SearchCmdkModalTrigger } from "./SearchCmdkModalTrigger";

export const SearchCmdk = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const router = useRouter();

  const posthog = usePostHog();

  const isFirstTimeToolTip = posthog.isFeatureEnabled(
    "onboarding_search_tooltip",
  );

  useEffect(() => {
    if (isFirstTimeToolTip) {
      const timeoutId = setTimeout(() => {
        setIsTooltipOpen(true);
      }, 10_000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const getSearchDestination = () => {
    const params = new URLSearchParams();
    params.set("q", searchTerm);
    return `/search?${params.toString()}`;
  };

  const onSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      setOpen(false);
      router.push(getSearchDestination());
    }
  };

  const handleTooltipOpenChange = () => {
    posthog.capture("onboarding_search_tooltip", {
      $set: { onboarding_search_tooltip_visited: true },
    });
    setIsTooltipOpen((prev) => !prev);
  };

  const { modal, searchIcon, content, contentForm, contentInput, closeBtn } =
    searchCmdkTheme();

  return (
    <Modal
      variant="command"
      open={open}
      onOpenChange={setOpen}
      className={modal()}
      hasCloseButton={false}
    >
      <Modal.Trigger>
        <SearchCmdkModalTrigger
          open={isTooltipOpen}
          onOpenChange={handleTooltipOpenChange}
        />
      </Modal.Trigger>
      <Modal.Content className={content()} data-test="search-cmdk-modal">
        <form onSubmit={onSearchSubmit} className={contentForm()}>
          <Input
            placeholder="Search for Professors or Courses..."
            className={contentInput()}
            type="text"
            contentLeft={<SearchIcon className={searchIcon()} />}
            wrapperProps={{ className: "border-0 h-full" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            data-test="search-cmdk-input"
          />
        </form>
        <Modal.Close asChild>
          <Button
            variant="primary"
            aria-label="close"
            size="sm"
            className={closeBtn()}
            as="a"
            href={getSearchDestination()}
            data-test="search-cmdk-submit"
            type="button"
          >
            Search
          </Button>
        </Modal.Close>
      </Modal.Content>
    </Modal>
  );
};
