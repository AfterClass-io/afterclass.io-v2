import { Skeleton } from "@/common/components/Skeleton";
import { InformationCard } from "@/modules/reviews/InformationSection/InformationCard";

export default function Loading() {
  return (
    <div className="w-full">
      <InformationCard>
        <Skeleton className="h-[60px] w-full" />
      </InformationCard>
    </div>
  );
}
