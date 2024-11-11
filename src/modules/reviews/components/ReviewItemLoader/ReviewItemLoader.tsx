"use client";
import { useSession } from "next-auth/react";
import { InView } from "react-intersection-observer";

import { api } from "@/common/tools/trpc/react";
import {
  ReviewItem,
  ReviewItemSkeleton,
} from "@/modules/reviews/components/ReviewItem";
import { AfterclassIcon } from "@/common/components/CustomIcon";

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
      infiniteQuery = apiFn.useSuspenseInfiniteQuery(
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
      infiniteQuery = apiFn.useSuspenseInfiniteQuery(
        { slug, courseCodes },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
      break;
    }
    default: {
      const apiFn = session ? api.reviews.getAllProtected : api.reviews.getAll;
      infiniteQuery = apiFn.useSuspenseInfiniteQuery(
        {},
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
    }
  }

  const [{ pages }, allReviewsQuery] = infiniteQuery;
  const { fetchNextPage, hasNextPage } = allReviewsQuery;

  // data will be split in pages
  const toShow = pages.flatMap((page) => page.items);

  if (status === "loading") {
    return (
      <>
        {toShow.map((_, index) => (
          <ReviewItemSkeleton key={index} />
        ))}
      </>
    );
  }

  return (
    <>
      {toShow.map((review) => (
        <ReviewItem
          key={review.id}
          variant={props.variant}
          review={review}
          isLocked={!session}
        />
      ))}
      {status === "authenticated" && hasNextPage && (
        <InView
          as="div"
          className="flex w-full justify-center"
          onChange={(inView, _) => inView && fetchNextPage()}
        >
          <AfterclassIcon
            size={64}
            className="animate-[pulse_3s_ease-in-out_infinite] text-primary-default/60"
          />
        </InView>
      )}
    </>
  );
};
