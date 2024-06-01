"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Modal } from "@/common/components/Modal";
import { Button } from "@/common/components/Button";
import { SearchIcon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";

import { searchCmdkTheme } from "./SearchCmdk.theme";

export const SearchCmdk = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

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

  const {
    modal,
    triggerInput,
    kbd: kbdStyle,
    searchIcon,
    content,
    contentForm,
    contentInput,
    closeBtn,
  } = searchCmdkTheme();

  return (
    <Modal
      variant="command"
      open={open}
      onOpenChange={setOpen}
      className={modal()}
      hasCloseButton={false}
    >
      <Modal.Trigger asChild>
        <Input
          className={triggerInput()}
          contentLeft={<SearchIcon size={16} className={searchIcon()} />}
          contentRight={<kbd className={kbdStyle()}>/</kbd>}
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="sm"
        />
      </Modal.Trigger>
      <Modal.Content className={content()}>
        <form onSubmit={onSearchSubmit} className={contentForm()}>
          <Input
            placeholder="Search for Professors or Courses..."
            className={contentInput()}
            type="text"
            contentLeft={<SearchIcon className={searchIcon()} />}
            wrapperProps={{ className: "border-0 h-full" }}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          >
            Search
          </Button>
        </Modal.Close>
      </Modal.Content>
    </Modal>
  );
};
