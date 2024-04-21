import type { ComponentPropsWithoutRef } from "react";
import {
  type FilterToggleSectionVariants,
  filterToggleSectionTheme,
} from "./FilterToggleSection.theme";
import {
  FilterToggleSectionItem,
  type FilterItem,
} from "./FilterToggleSectionItem";
import { LockCtaOverlay } from "@/common/components/LockCtaOverlay";

export type FilterToggleSectionProps = ComponentPropsWithoutRef<"div"> &
  FilterToggleSectionVariants & {
    title: string;
    filterItems: FilterItem[];
    isLocked?: boolean;
  };

export const FilterToggleSection = ({
  title,
  filterItems,
  isLocked,
  ...props
}: FilterToggleSectionProps) => {
  const { section, sectionTitle, container } = filterToggleSectionTheme();
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
      <p className={sectionTitle()}>{title}</p>
      <div className={container()}>
        {filterItems.map((item, index) => (
          <FilterToggleSectionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
