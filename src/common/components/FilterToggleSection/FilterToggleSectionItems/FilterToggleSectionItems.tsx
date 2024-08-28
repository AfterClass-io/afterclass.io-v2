import { type ReactNode, ComponentPropsWithoutRef } from "react";
import { FilterToggleSectionItemsSkeleton } from "../FilterToggleSectionSkeleton";
import { filterToggleSectionTheme } from "../FilterToggleSection.theme";

export const FilterToggleSectionItems = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
}) => {
  const { className, ...rest } = props;
  const { container } = filterToggleSectionTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={container({ className })} {...rest}>
      {children}
    </div>
  );
};

FilterToggleSectionItems.Skeleton = FilterToggleSectionItemsSkeleton;
