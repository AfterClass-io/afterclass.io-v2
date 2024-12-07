import Image from "next/image";
import cat from "@/../public/cat.webp";
import { announcementsCarouselTheme } from "../AnnouncementCarousel.theme";

export const AnnouncementCard = ({
  announcement,
}: {
  announcement: string;
}) => {
  const { card, text } = announcementsCarouselTheme();
  return (
    <div className={card()}>
      <Image src={cat} alt="Announcement" width={384} height={192} />
      <p className={text()}>{announcement}</p>
    </div>
  );
};
