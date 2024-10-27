import { Button, ButtonLinkOrAnchorProps } from "@/common/components/Button";
import { type SidebarItemType } from "@/common/components/Sidebar/Sidebar";
import { cn } from "@/common/functions";

export type SidebarListItem = SidebarItemType &
  ButtonLinkOrAnchorProps & {
    active?: boolean;
    external?: boolean;
  };

export const SidebarItem = ({
  label,
  icon,
  href,
  external = false,
  active,
  ...prop
}: SidebarListItem) => {
  return (
    <li>
      <Button
        as="a"
        variant="ghost"
        href={href}
        target={external ? "_blank" : undefined}
        external={external}
        iconLeft={icon}
        fullWidth
        className={cn(
          "flex",
          "items-center",
          "justify-start",
          "gap-x-3",
          "border",
          "border-transparent",
          "px-3",
          "py-2",
          "text-sm",
          "font-semibold",
          "text-text-em-mid",
          "hover:text-text-em-high",
          "hover:bg-border-elevated",
          active &&
            "border-border-default bg-surface-elevated text-text-em-high",
        )}
        {...prop}
      >
        {label}
      </Button>
    </li>
  );
};
