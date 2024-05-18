import type { ComponentPropsWithoutRef } from "react";
import {
  type FilterToggleSectionVariants,
  filterToggleSectionTheme,
} from "./FilterToggleSection.theme";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";
import { FilterToggleSectionHeader } from "./FilterToggleSectionHeader";
import { FilterToggleSectionItems } from "./FilterToggleSectionItems";
import { FilterToggleSectionItem } from "./FilterToggleSectionItem";

export type FilterToggleSectionProps = ComponentPropsWithoutRef<"div"> &
  FilterToggleSectionVariants & {
    isLocked?: boolean;
  };

export const FilterToggleSection = ({
  isLocked,
  ...props
}: FilterToggleSectionProps) => {
  const { section } = filterToggleSectionTheme();
  if (isLocked) {
    return (
      <div className={section()} {...props}>
        <LockCtaOverlay />
        <div className="h-[150px] w-full"></div>
      </div>
    );
  }

  return (
    <div className={section()} {...props}>
      {props.children}
    </div>
  );
};

FilterToggleSection.Header = FilterToggleSectionHeader;
FilterToggleSection.Items = FilterToggleSectionItems;
FilterToggleSection.Item = FilterToggleSectionItem;
