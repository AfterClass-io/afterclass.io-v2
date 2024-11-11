import Heading from "@/common/components/Heading";
import { AnnouncementCard } from "./AnnouncementCard";
import { announcementsBannerTheme } from "./AnnouncementCarousel.theme";

export const AnnouncementCarousel = () => {
  const { wrapper, announcements, heading, divider } =
    announcementsBannerTheme();
  return (
    <div className={wrapper()}>
      <Heading as="h1" className={heading()}>
        Announcements
      </Heading>
      <div className={announcements()}>
        <AnnouncementCard announcement="Announcement 1" />
        <AnnouncementCard announcement="Announcement 2" />
        <AnnouncementCard announcement="Announcement 3" />
      </div>
      <hr className={divider()} />
    </div>
  );
};
