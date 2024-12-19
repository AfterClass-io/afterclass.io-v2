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
      <div className="sticky top-0 z-50">
        <AnnouncementBanner />
      </div>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </>
  );
}
