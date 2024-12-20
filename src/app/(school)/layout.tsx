import { type PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const AnnouncementBanner = dynamic(
  () =>
    import("@/modules/home/components/AnnouncementBanner").then(
      (mod) => mod.AnnouncementBanner,
    ),
  {
    ssr: false,
  },
);

export default async function SchoolLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AnnouncementBanner />
      <div className="mx-auto max-w-7xl">{children}</div>
    </>
  );
}
