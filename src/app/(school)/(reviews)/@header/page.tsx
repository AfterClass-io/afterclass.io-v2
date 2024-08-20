import { AnnouncementBanner } from "@/modules/home/AnnouncementBanner";
import { getFeatureFlag } from "@/common/tools/posthog";

export default async function HomeHeader() {
  const isEnabled = await getFeatureFlag("announcements_carousel");
  if (!isEnabled) {
    return null;
  }
  return <AnnouncementBanner />;
}
