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
  const { wrapper, header, title, icon, reviews } = reviewSectionTheme({
    size: { initial: "sm", md: "md" },
  });

  return (
    <div className={wrapper({ className })} {...props}>
      <div className={header()}>
        <div className={title()}>
          <PenIcon className={icon()} />
          <p>Reviews</p>
        </div>
      </div>
      <div className={reviews()}>{children}</div>
    </div>
  );
};
