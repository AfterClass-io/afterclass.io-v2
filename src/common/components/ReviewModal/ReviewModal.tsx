import { Modal } from "@/common/components/Modal";
import { type Review, reviewItemTheme } from "@/common/components/ReviewItem";
import { ProfileSchool } from "@/common/components/ReviewItem/ProfileSchool";
import { ReviewBody } from "@/common/components/ReviewItem/ReviewBody";
import ReviewHeader from "@/common/components/ReviewItem/ReviewHeader";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React from "react";

const ReviewModal = ({
  review,
  variant,
  seeMore = false,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
  seeMore?: boolean;
}) => {
  const { wrapper } = reviewItemTheme();

  return (
    <Modal overflow="inside">
      <Modal.Trigger asChild className="w-[45rem]">
        <div className={wrapper()}>
          <ReviewHeader review={review} variant={variant} />
          <ReviewBody isDetailed={variant !== "home"} review={review} />
        </div>
      </Modal.Trigger>
      <Modal.Content className="min-w-[600px]">
        <Modal.Header>
          <ProfileSchool
            courseCode={review.courseCode}
            reviewedUniversityId={review.reviewedUniversityId}
          />
        </Modal.Header>
        <Modal.Body className="space-y-8">
          <div>
            <div className="space-x-2 pb-[18px]">
              <span className="text-lg font-medium">{review.username}</span>
              <span>•</span>
              <span>
                {getHumanReadableTimestampDelta(review.createdAt / 1000)}
              </span>
            </div>
            <p className="pb-[16px]">{review.body}</p>
            <div className="flex gap-x-6">
              <div className="flex w-fit items-center justify-center gap-x-1">
                <Icon
                  className="h-fit w-[18px]"
                  icon="mingcute:thumb-up-2-fill"
                />
                <span>{review.likeCount}</span>
              </div>
              <div className="flex w-fit items-center justify-center">
                <Icon className="h-fit w-[18px]" icon="majesticons:share" />
              </div>
            </div>
          </div>
          {/* seeMore link only shown when user is from default reviews page, hidden when in professor/course pages */}
          {seeMore && (
            <div className="w-full border-t border-border-default pt-3">
              <div className="flex h-10 items-center text-primary-default">
                {/* TODO: link to respective prof/course page */}
                {/* can use review.professorName for professors and review.courseCode for courses */}
                See more reviews
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ReviewModal;
