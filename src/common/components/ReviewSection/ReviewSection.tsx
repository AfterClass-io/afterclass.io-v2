"use client";

import { PenIcon } from "@/common/components/CustomIcon";
import { ReviewItem } from "@/common/components/ReviewItem";
import { api } from "@/common/tools/trpc/react";
import { reviewSectionTheme } from "./ReviewSection.theme";
import { useSession } from "next-auth/react";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { ReviewItemSkeleton } from "@/common/components/ReviewItem/ReviewItemSkeleton";

export type ReviewSectionProps = ComponentPropsWithoutRef<"div"> & {};

export const ReviewSection = ({ className, ...props }: ReviewSectionProps) => {
  const { wrapper, header, title, icon, reviewsHeader } = reviewSectionTheme();
  const { status } = useSession();
  const isUserAuthenticated = status === "authenticated";
  const { data: reviews, isLoading } = isUserAuthenticated
    ? api.reviews.getAll.useQuery({})
    : api.reviews.getAllPublic.useQuery({});

  useEffect(() => {
    console.log(isLoading || !reviews);
  }, [isLoading]);

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
          ? [...Array(10)].map(() => <ReviewItemSkeleton />)
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
