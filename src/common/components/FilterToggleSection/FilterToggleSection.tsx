import type { ReactNode, ComponentPropsWithoutRef } from "react";
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
  FilterToggleSectionVariants &
  (
    | {
        isLocked: true;
      }
    | {
        isLocked?: false;
        header: ReactNode;
        filterItems: FilterItem[];
      }
  );

export const FilterToggleSection = (props: FilterToggleSectionProps) => {
  const { section, sectionHeader, container } = filterToggleSectionTheme();
  if (props.isLocked) {
    return (
      <div className={section()} {...props}>
        <LockCtaOverlay />
        <div className="h-[150px] w-full"></div>
      </div>
    );
  }

  const { header, filterItems, ...rest } = props;

  return (
    <div className={section()} {...rest}>
      <div className={sectionHeader()}>{header}</div>
      <div className={container()}>
        {filterItems.map((item, index) => (
          <FilterToggleSectionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
