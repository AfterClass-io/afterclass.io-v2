"use client";

import { Button } from "@/common/components/Button";
import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";
import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { Icon } from "@iconify-icon/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export const ComponentsPage = () => {
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
    <div className="space-y-10 p-5 sm:p-10">
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
      <div className="space-y-4">
        <Button fullWidth>Full width</Button>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button size="sm" iconLeft={<StarLineAltIcon />}>
            Small
          </Button>
          <Button aria-label="star" iconLeft={<StarLineAltIcon />} />
          <Button size="sm" aria-label="star" iconLeft={<StarLineAltIcon />} />
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" size="sm" iconRight={<StarLineAltIcon />}>
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
      <div className="space-y-4">
        <Input
          label={"Test Label 1"}
          helperText={"Test helper text"}
          leftContent={<StarLineAltIcon size={16} />}
          rightContent={<StarLineAltIcon size={16} />}
          placeholder="Write here"
        />
        <Input
          label={"Test Label 2"}
          helperText={"Test error helper text"}
          leftContent={<StarLineAltIcon size={16} />}
          rightContent={<StarLineAltIcon size={16} />}
          placeholder="Write here"
          size={{ initial: "sm", md: "md" }}
          isError={true}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
