import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { PenIcon } from "@/common/components/CustomIcon";
import { reviewSectionTheme } from "./ReviewSection.theme";

export type ReviewSectionProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export const ReviewSection = ({
  className,
  children,
  ...props
}: ReviewSectionProps) => {
  const { wrapper, header, title, icon, reviewsHeader} = reviewSectionTheme();

  return (
    <div className={wrapper({ className })} {...props}>
      <div className={header()}>
        <div className={title()}>
          <PenIcon className={icon()} />
          <div className={reviewsHeader()}>Reviews</div>
        </div>
      </div>
      {children}
    </div>
  );
};
