"use client";
import { useSession } from "next-auth/react";

import { api } from "@/common/tools/trpc/react";
import { Button } from "@/common/components/Button";
import { ReviewItem, ReviewItemSkeleton } from "@/common/components/ReviewItem";

export type ReviewItemLoaderHomeProps = {
  variant: "home";
};

export type ReviewItemLoaderCourseProps = {
  variant: "course";
  code: string;
  slugs?: string[];
};

export type ReviewItemLoaderProfessorProps = {
  variant: "professor";
  slug: string;
  courseCodes?: string[];
};

export type ReviewItemLoaderProps =
  | ReviewItemLoaderHomeProps
  | ReviewItemLoaderCourseProps
  | ReviewItemLoaderProfessorProps;

export const ReviewItemLoader = (props: ReviewItemLoaderProps) => {
  const { data: session, status } = useSession();

  let infiniteQuery;
  switch (props.variant) {
    case "course": {
      const { code, slugs } = props;
      const apiFn = session
        ? api.reviews.getByCourseCodeProtected
        : api.reviews.getByCourseCode;
      infiniteQuery = apiFn.useInfiniteQuery(
        { code, slugs },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
      break;
    }
    case "professor": {
      const { slug, courseCodes } = props;
      const apiFn = session
        ? api.reviews.getByProfSlugProtected
        : api.reviews.getByProfSlug;
      infiniteQuery = apiFn.useInfiniteQuery(
        { slug, courseCodes },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
      break;
    }
    default: {
      const apiFn = session ? api.reviews.getAllProtected : api.reviews.getAll;
      infiniteQuery = apiFn.useInfiniteQuery(
        {},
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
    }
  }

  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    infiniteQuery;

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
          variant={props.variant}
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
