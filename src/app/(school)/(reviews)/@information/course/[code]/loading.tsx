import { Skeleton } from "@/common/components/Skeleton";
import { InformationCard } from "@/modules/reviews/InformationSection/InformationCard";

export default function Loading() {
  return (
    <div className="flex gap-6">
      <div className="w-2/3">
        <InformationCard>
          <Skeleton className="h-[60px] w-full" />
        </InformationCard>
      </div>
      <div className="w-1/3">TODO: course detail</div>
    </div>
  );
}
