import Image from "next/image";
import { announcementsBannerTheme } from "../AnnouncementBanner.theme";

export const AnnouncementCard = ({
  announcement,
}: {
  announcement: string;
}) => {
  const { card, text } = announcementsBannerTheme();
  return (
    <div className={card()}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QAA3Uoundl2tndIYgQg250It2xZ1RE0O8g&s"
        alt="Announcement"
        width={384}
        height={192}
      />
      <p className={text()}>{announcement}</p>
    </div>
  );
};
