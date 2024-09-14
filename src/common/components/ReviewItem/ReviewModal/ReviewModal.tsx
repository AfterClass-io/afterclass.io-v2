"use client";

import { Modal } from "@/common/components/Modal";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { ShareIcon, ThumbUpFilledIcon } from "@/common/components/CustomIcon";
import { type Review } from "@/common/types";
import { Button } from "@/common/components/Button";

import { reviewItemTheme } from "../ReviewItem.theme";
import { RevieweeGroup } from "../RevieweeGroup";

export const ReviewModal = ({
  review,
  variant,
  children,
  seeMore = false,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
  children: React.ReactNode;
  seeMore?: boolean;
}) => {
  const {
    modalTrigger,
    modalContent,
    usernameAndTimestampWrapper,
    username,
    modalBody,
    likeAndShareWrapper,
    likeWrapper,
    shareWrapper,
    seeMoreDivider,
    seeMoreLink,
  } = reviewItemTheme({ size: { initial: "sm", md: "md" } });

  const reviewPath =
    review.reviewFor === "professor"
      ? `/professor/${review.professorSlug}`
      : `/course/${review.courseCode}`;

  return (
    <Modal overflow="inside">
      <Modal.Trigger asChild className={modalTrigger()}>
        {children}
      </Modal.Trigger>
      <Modal.Content
        className={modalContent()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Modal.Header>
          <RevieweeGroup review={review} variant={variant} />
        </Modal.Header>
        <Modal.Body>
          <div className={usernameAndTimestampWrapper()}>
            <span className={username()}>{review.username}</span>
            <span>•</span>
            <span>
              {getHumanReadableTimestampDelta(review.createdAt / 1000)}
            </span>
          </div>
          <p className={modalBody()}>{review.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <div className={likeAndShareWrapper()}>
            <div className={likeWrapper()}>
              <ThumbUpFilledIcon size={18} />
              <span>{review.likeCount}</span>
            </div>
            <div className={shareWrapper()}>
              <ShareIcon size={18} />
            </div>
          </div>
          {/* seeMore link only shown when user is from default reviews page, hidden when in professor/course pages */}
          {seeMore && (
            <>
              <hr className={seeMoreDivider()} />
              <Button
                as="a"
                variant="link"
                href={reviewPath}
                className={seeMoreLink()}
              >
                See more reviews
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
