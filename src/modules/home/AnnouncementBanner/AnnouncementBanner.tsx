import Heading from "@/common/components/Heading";
import { AnnouncementCard } from "./AnnouncementCard";

export const AnnouncementBanner = () => {
  return (
    <div className="flex w-[75rem] flex-col items-start gap-4">
      <Heading as="h1" className="text-sm font-semibold text-text-em-high">
        Announcements
      </Heading>
      <div className="flex items-start gap-6 self-stretch">
        <AnnouncementCard announcement="Announcement 1" />
        <AnnouncementCard announcement="Announcement 2" />
        <AnnouncementCard announcement="Announcement 3" />
      </div>
      <hr className="my-4" />
    </div>
  );
};
