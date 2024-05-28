import {
  informationCardTheme,
  type InformationCardVariants,
} from "./InformationCard.theme";
import type { ReactNode } from "react";
import { Button } from "@/common/components/Button";
import { ClipboardIcon } from "@/common/components/CustomIcon";

export type InformationCardProps = InformationCardVariants & {
  isLocked?: boolean;
  children: ReactNode;
};

export const InformationCard = ({
  isLocked,
  children,
}: InformationCardProps) => {
  const { wrapper, header, icon, content, description } = informationCardTheme();
  return (
    <div className={wrapper()}>
      <div className={header()}>
        <ClipboardIcon className={icon()} />
        <p>Information</p>
      </div>
      <div className={content()}>
        <div className={description()}>{children}</div>
        {isLocked ? (
          <Button variant="link">Login</Button>
        ) : (
          // TODO: Open information modal
          <Button variant="link">See more</Button>
        )}
      </div>
    </div>
  );
};
