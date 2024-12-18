import { AnnouncementCarousel } from "@/modules/home/components/AnnouncementCarousel";
import { getFeatureFlag } from "@/server/posthog";

export default async function HomeHeader() {
  const isEnabled = await getFeatureFlag("announcements_carousel");
  if (!isEnabled) {
    return null;
  }
  return <AnnouncementCarousel />;
}
