"use client";
import { useSession } from "next-auth/react";

import { api } from "@/common/tools/trpc/react";
import { ReviewItem, ReviewItemSkeleton } from "@/common/components/ReviewItem";
import { Button } from "@/common/components/Button";

export const ReviewItemLoaderCourse = ({
  code,
  slugs,
}: {
  code: string;
  slugs?: string[];
}) => {
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return null;
  }

  const apiFn = session
    ? api.reviews.getByCourseCodeProtected
    : api.reviews.getByCourseCode;
  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    apiFn.useInfiniteQuery(
      { code, slugs },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    );

  if (isLoading) {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <ReviewItemSkeleton key={i} />
        ))}
      </>
    );
  }

  // data will be split in pages
  const toShow = data?.pages.flatMap((page) => page.items);

  return (
    <>
      {toShow?.map((review) => (
        <ReviewItem
          key={review.id}
          variant="course"
          review={review}
          isLocked={!session}
        />
      ))}
      {hasNextPage && (
        <Button
          fullWidth
          variant="primary"
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
        >
          See more
        </Button>
      )}
    </>
  );
};
