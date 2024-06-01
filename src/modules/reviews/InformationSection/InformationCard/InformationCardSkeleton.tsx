import { informationCardTheme } from "./InformationCard.theme";
import { ClipboardIcon } from "@/common/components/CustomIcon";
import { Skeleton } from "@/common/components/Skeleton";

export const InformationCardSkeleton = () => {
  const { wrapper, header, icon, content, description } =
    informationCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <ClipboardIcon className={icon()} />
        <p>Information</p>
      </div>
      <div className={content()}>
        <div className={description()}>
          <Skeleton className="h-[60px] w-full" />
        </div>
      </div>
    </div>
  );
};
