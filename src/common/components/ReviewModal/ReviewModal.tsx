import { Modal } from "@/common/components/Modal";
import { type Review } from "@/common/components/ReviewItem";
import { ProfileSchool } from "@/common/components/ReviewItem/ProfileSchool";
import { ReviewBody } from "@/common/components/ReviewItem/ReviewBody";
import ReviewHeader from "@/common/components/ReviewItem/ReviewHeader";
import { reviewModalTheme } from "@/common/components/ReviewModal/ReviewModal.theme";
import { getHumanReadableTimestampDelta } from "@/common/functions";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ReviewModal = ({
  review,
  variant,
  seeMore = false,
}: {
  review: Review;
  variant: "home" | "professor" | "course";
  seeMore?: boolean;
}) => {
  const {
    wrapper,
    modalTrigger,
    modalBody,
    modalContent,
    usernameAndTimestampWrapper,
    username,
    body,
    likeAndShareWrapper,
    likeWrapper,
    likeIcon,
    shareWrapper,
    shareIcon,
    seeMoreWrapper,
    seeMoreLink,
  } = reviewModalTheme();

  return (
    <Modal overflow="inside">
      <Modal.Trigger asChild className={modalTrigger()}>
        <div className={wrapper()}>
          <ReviewHeader review={review} variant={variant} />
          <ReviewBody isDetailed={variant !== "home"} review={review} />
        </div>
      </Modal.Trigger>
      <Modal.Content className={modalContent()}>
        <Modal.Header>
          <ProfileSchool
            courseCode={review.courseCode}
            reviewedUniversityId={review.reviewedUniversityId}
          />
        </Modal.Header>
        <Modal.Body className={modalBody()}>
          <div>
            <div className={usernameAndTimestampWrapper()}>
              <span className={username()}>{review.username}</span>
              <span>•</span>
              <span>
                {getHumanReadableTimestampDelta(review.createdAt / 1000)}
              </span>
            </div>
            <p className={body()}>{review.body}</p>
            <div className={likeAndShareWrapper()}>
              <div className={likeWrapper()}>
                <Icon className={likeIcon()} icon="mingcute:thumb-up-2-fill" />
                <span>{review.likeCount}</span>
              </div>
              <div className={shareWrapper()}>
                <Icon className={shareIcon()} icon="majesticons:share" />
              </div>
            </div>
          </div>
          {/* seeMore link only shown when user is from default reviews page, hidden when in professor/course pages */}
          {seeMore && (
            <div className={seeMoreWrapper()}>
              <div className={seeMoreLink()}>
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
