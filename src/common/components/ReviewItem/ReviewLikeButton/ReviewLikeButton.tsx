"use client";
import { useEffect, useState } from "react";

import { api } from "@/common/tools/trpc/react";
import { Button } from "@/common/components/Button";
import { ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { useSession } from "next-auth/react";

export const MockedReviewLikeButton = ({
  reviewLikeCount,
}: {
  reviewLikeCount: number;
}) => (
  <Button
    rounded
    variant="tertiary"
    size="sm"
    iconRight={<ThumbUpFilledIcon />}
    aria-label="Like"
  >
    {reviewLikeCount}
  </Button>
);

export const ReviewLikeButton = ({ reviewId }: { reviewId: string }) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);

  const { data: hasUserVoted } = api.reviewVotes.hasUserVoted.useQuery({
    reviewId,
    userId: session?.user.id ?? "",
  });
  useEffect(() => setIsLiked(hasUserVoted ?? false), [hasUserVoted]);

  const reviewVotesCountQuery = api.reviewVotes.count.useQuery({ reviewId });

  const { mutate: likeOrUnlike, isSuccess } =
    api.reviewVotes.voteOrUnvote.useMutation({
      onSuccess: () => void reviewVotesCountQuery.refetch(),
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
      size="sm"
      iconRight={<ThumbUpFilledIcon />}
      onClick={handleLike}
      loading={reviewVotesCountQuery.isLoading}
      aria-label="Like"
    >
      {reviewVotesCountQuery.data}
    </Button>
  );
};
