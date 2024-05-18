"use client";
import { type ComponentPropsWithoutRef } from "react";

import { PenIcon } from "@/common/components/CustomIcon";
import { ReviewItem } from "@/common/components/ReviewItem";
import { api } from "@/common/tools/trpc/react";
import { reviewSectionTheme } from "./ReviewSection.theme";
import { useSession } from "next-auth/react";
import { ReviewItemSkeleton } from "@/common/components/ReviewItem/ReviewItemSkeleton";

export type ReviewSectionProps = ComponentPropsWithoutRef<"div">;

export const ReviewSection = ({ className, ...props }: ReviewSectionProps) => {
  const { wrapper, header, title, icon, reviewsHeader } = reviewSectionTheme();
  const { status } = useSession();
  const isUserAuthenticated = status === "authenticated";
  const { data: reviews, isLoading } = isUserAuthenticated
    ? api.reviews.getAllProtected.useQuery({})
    : api.reviews.getAll.useQuery({});

  return (
    <div className={wrapper({ className })} {...props}>
      <div className={header()}>
        <div className={title()}>
          <PenIcon className={icon()} size={24} />
          <div className={reviewsHeader()}>Reviews</div>
        </div>
      </div>
      <>
        {isLoading || !reviews
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            [...Array(10)].map((_, i) => <ReviewItemSkeleton key={i} />)
          : reviews.map((review) => (
              <ReviewItem
                review={review}
                key={review.id}
                isLocked={!isUserAuthenticated}
              />
            ))}
      </>
    </div>
  );
};
