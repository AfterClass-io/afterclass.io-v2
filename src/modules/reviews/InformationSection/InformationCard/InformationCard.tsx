import {
  informationCardTheme,
  type InformationCardVariants,
} from "./InformationCard.theme";
import type { ReactNode } from "react";
import { Button } from "@/common/components/Button";
import { ClipboardIcon } from "@/common/components/CustomIcon";
import { InformationModal } from "./InformationModal";
import type { Courses } from "@prisma/client";
import { InformationCardSkeleton } from "./InformationCardSkeleton";

export type InformationCardProps = InformationCardVariants & {
  course: Courses;
  isLocked?: boolean;
  children: ReactNode;
};

export const InformationCard = ({
  course,
  isLocked,
  children,
}: InformationCardProps) => {
  const { wrapper, header, icon, content, description } =
    informationCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <ClipboardIcon className={icon()} />
        <p>Information</p>
      </div>
      <div className={content()}>
        <div className={description()}>{children}</div>
        {isLocked ? (
          <Button as="a" variant="link" href="/auth/login">
            Login
          </Button>
        ) : (
          <InformationModal course={course} />
        )}
      </div>
    </div>
  );
};

InformationCard.Skeleton = InformationCardSkeleton;
