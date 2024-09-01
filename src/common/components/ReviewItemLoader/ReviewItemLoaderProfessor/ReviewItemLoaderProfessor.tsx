"use client";
import { useSession } from "next-auth/react";

import { api } from "@/common/tools/trpc/react";
import { ReviewItem, ReviewItemSkeleton } from "@/common/components/ReviewItem";
import { Button } from "@/common/components/Button";

export const ReviewItemLoaderProfessor = ({
  slug,
  courseCodes,
}: {
  slug: string;
  courseCodes?: string[];
}) => {
  const { data: session, status } = useSession();

  const apiFn = session
    ? api.reviews.getByProfSlugProtected
    : api.reviews.getByProfSlug;
  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    apiFn.useInfiniteQuery(
      { slug, courseCodes },
      { getNextPageParam: (lastPage) => lastPage.nextCursor },
    );

  if (isLoading) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return [...Array(5)].map((_, i) => <ReviewItemSkeleton key={i} />);
  }

  // data will be split in pages
  const toShow = data?.pages.flatMap((page) => page.items);

  return (
    <>
      {toShow?.map((review) => (
        <ReviewItem
          key={review.id}
          variant="professor"
          review={review}
          isLocked={!session}
        />
      ))}
      {status === "authenticated" && hasNextPage && (
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
