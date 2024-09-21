"use client";
import { useEffect, useState } from "react";

import { api } from "@/common/tools/trpc/react";
import { Button } from "@/common/components/Button";
import type {
  ButtonBaseProps,
  ButtonProps,
  ButtonVariants,
} from "@/common/components/Button";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { useSession } from "next-auth/react";

export type ReviewLikeButtonProps = ButtonProps &
  ButtonBaseProps &
  Omit<ButtonVariants, "hasIcon" | "iconOnly">;

export const MockedReviewLikeButton = ({
  reviewLikeCount,
  ...props
}: {
  reviewLikeCount: number;
} & ReviewLikeButtonProps) => (
  <Button
    rounded
    variant="tertiary"
    iconRight={<ThumbUpFilledIcon />}
    aria-label="Like"
    {...props}
  >
    {reviewLikeCount}
  </Button>
);

export const ReviewLikeButton = ({
  reviewId,
  ...props
}: { reviewId: string } & ReviewLikeButtonProps) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);

  const hasUserVotedQuery = api.reviewVotes.getUserVote.useQuery({
    reviewId,
    userId: session?.user.id ?? "",
  });
  useEffect(
    () => setIsLiked(!!hasUserVotedQuery.data),
    [hasUserVotedQuery.data],
  );

  const reviewVotesCountQuery = api.reviewVotes.count.useQuery({ reviewId });

  const { mutate: likeOrUnlike, isSuccess } =
    api.reviewVotes.voteOrUnvote.useMutation({
      onSuccess: () => {
        void reviewVotesCountQuery.refetch();
        void hasUserVotedQuery.refetch();
      },
    });

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!session) return;
    likeOrUnlike({ reviewId, userId: session.user.id });
  };
  useEffect(() => {
    if (isSuccess) setIsLiked((prev) => !prev);
  }, [isSuccess]);

  return (
    <Button
      rounded
      variant={isLiked ? "secondary" : "tertiary"}
      iconRight={<ThumbUpFilledIcon />}
      onClick={handleLike}
      loading={reviewVotesCountQuery.isLoading}
      aria-label="Like"
      isResponsive
      {...props}
    >
      {reviewVotesCountQuery.data}
    </Button>
  );
};
