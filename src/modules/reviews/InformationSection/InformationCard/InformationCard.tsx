import { informationCardTheme } from "./InformationCard.theme";
import type { ReactNode } from "react";
import { ClipboardIcon } from "@/common/components/CustomIcon";
import { InformationCardSkeleton } from "./InformationCardSkeleton";
import { InformationCardLoginButton } from "./InformationCardLoginButton";
import { InformationModal } from "./InformationModal";

export const InformationCard = ({
  courseDesc,
  children,
}: {
  courseDesc: string;
  children: ReactNode;
}) => {
  const { wrapper, header, icon, content, description } = informationCardTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <ClipboardIcon className={icon()} />
        <p>Information</p>
      </div>
      <div className={content()}>
        <div className={description()}>{courseDesc}</div>
        {children}
      </div>
    </div>
  );
};

InformationCard.Skeleton = InformationCardSkeleton;
InformationCard.LoginButton = InformationCardLoginButton;
InformationCard.Modal = InformationModal;
