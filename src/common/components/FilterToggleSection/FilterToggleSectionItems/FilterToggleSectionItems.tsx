import { type ReactNode } from "react";
import { FilterToggleSectionItemsSkeleton } from "../FilterToggleSectionSkeleton";
import { filterToggleSectionTheme } from "../FilterToggleSection.theme";

export const FilterToggleSectionItems = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { container } = filterToggleSectionTheme();
  return <div className={container()}>{children}</div>;
};

FilterToggleSectionItems.Skeleton = FilterToggleSectionItemsSkeleton;
