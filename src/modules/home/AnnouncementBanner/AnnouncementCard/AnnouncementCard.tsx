import { announcementsBannerTheme } from "../AnnouncementBanner.theme";

export const AnnouncementCard = ({
  announcement,
}: {
  announcement: string;
}) => {
  const { card, image, text } = announcementsBannerTheme();
  return (
    <div className={card()}>
      <div className={image()} />
      <p className={text()}>{announcement}</p>
    </div>
  );
};
