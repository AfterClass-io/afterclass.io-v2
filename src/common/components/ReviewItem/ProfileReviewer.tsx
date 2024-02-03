import { reviewItemTheme, type ReviewItemVariants } from "./ReviewItem.theme";

export type ProfileReviewerProps = ReviewItemVariants & {
  name: string;
};

export const ProfileReviewer = ({ name }: ProfileReviewerProps) => {
  const { profileContainer, profileName, profileIcon } = reviewItemTheme();
  return (
    <div className={profileContainer()}>
      <div className={profileIcon()}>
        <div className="h-4 w-4 rounded-full bg-cyan-800"></div>
      </div>
      <div className={profileName()}>{name}</div>
    </div>
  );
};
