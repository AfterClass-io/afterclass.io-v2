import Image from "next/image";
import cat from "@/../public/cat.webp";
import { announcementsBannerTheme } from "../AnnouncementCarousel.theme";

export const AnnouncementCard = ({
  announcement,
}: {
  announcement: string;
}) => {
  const { card, text } = announcementsBannerTheme();
  return (
    <div className={card()}>
      <Image src={cat} alt="Announcement" width={384} height={192} />
      <p className={text()}>{announcement}</p>
    </div>
  );
};
