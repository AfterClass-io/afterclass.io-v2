"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify-icon/react";

import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { Button } from "@/common/components/Button";
import { Input } from "@/common/components/Input";
import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { api } from "@/common/tools/trpc/utils/api";

export default function Home() {
  // create university
  // api.university.createUniversity.useQuery({
  //   name: "SMU",
  //   siteUrl: "https://www.smu.edu.sg",
  // });
  // Get all universities
  const universities = api.university.getAllUniversities.useQuery();

  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleTheme = useCallback(() => {
    if (theme === APP_THEMES.light) setTheme(APP_THEMES.dark);
    if (theme === APP_THEMES.dark) setTheme(APP_THEMES.light);
  }, [setTheme, theme]);

  return (
    <>
      <section className="flex h-full flex-col items-center space-y-6 p-6">
        <div className="font-display font-semibold text-primary-default">
          AfterClass
        </div>
        {isMounted && (
          <button
            className="mx-auto flex items-center gap-2 rounded-md bg-primary-default p-3 text-text-on-primary"
            // data-theme="light"
            onClick={handleToggleTheme}
          >
            <Icon icon="uil:chart-line" width={16} />
            <StarLineAltIcon size={16} />
            <span>Toggle theme: Current {theme}</span>
          </button>
        )}
        <div className="mx-auto flex w-fit flex-col items-center justify-center gap-3 rounded-md bg-bg-alt p-6">
          <span>tRPC Auth showcase</span>
          <span>
            {universities.data
              ? universities.data.map((university) => (
                  <div key={university.id}>Hello from {university.name}!</div>
                ))
              : "Loading tRPC query..."}
          </span>
        </div>
        <div className="space-y-4">
          <Input
            label={"Test Label 1"}
            helperText={"Test helper text"}
            contentLeft={<StarLineAltIcon size={16} />}
            contentRight={<StarLineAltIcon size={16} />}
            placeholder="Write here"
          />
          <Input
            label={"Test Label 2"}
            helperText={"Test error helper text"}
            contentLeft={<StarLineAltIcon size={16} />}
            contentRight={<StarLineAltIcon size={16} />}
            placeholder="Write here"
            size={{ initial: "sm", md: "md" }}
            isError={true}
          />
        </div>
        <div className="space-y-4">
          <Button fullWidth>Full width</Button>
          <div className="flex gap-3">
            <Button>Primary</Button>
            <Button size="sm" iconLeft={<StarLineAltIcon />}>
              Small
            </Button>
            <Button aria-label="star" iconLeft={<StarLineAltIcon />} />
            <Button
              size="sm"
              aria-label="star"
              iconLeft={<StarLineAltIcon />}
            />
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">Secondary</Button>
            <Button
              variant="secondary"
              size="sm"
              iconRight={<StarLineAltIcon />}
            >
              Small
            </Button>
          </div>
          <div className="flex gap-3">
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="tertiary" size="sm">
              Small
            </Button>
          </div>
          <div className="flex gap-3">
            <Button variant="success">Success</Button>
            <Button variant="success" size="sm">
              Small
            </Button>
          </div>
          <div className="flex gap-3">
            <Button variant="danger">Danger</Button>
            <Button variant="danger" size="sm">
              Small
            </Button>
          </div>
          <div className="flex gap-3">
            <Button
              variant="link"
              iconLeft={<Icon icon="lucide:arrow-up-right" />}
              iconRight={<Icon icon="lucide:arrow-up-right" />}
              as="a"
              external
              href="https://example.com"
            >
              Example.com
            </Button>
            <Button variant="link" size="sm" as="a" href="/login">
              Login
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
