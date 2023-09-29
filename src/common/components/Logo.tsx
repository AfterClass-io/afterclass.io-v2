import { AfterclassIcon } from "./CustomIcon/AfterclassIcon";
import { AfterclassText } from "./CustomIcon/AfterclassText";

type TAfterclassIconProp = {
  hideText?: boolean;
  hideLogo?: boolean;
};

export const AfterclassLogo = ({
  hideText = false,
  hideLogo = false,
}: TAfterclassIconProp) => {
  return (
    <div className="flex h-6 items-center justify-center gap-x-3">
      {!hideLogo && <AfterclassIcon size={16} />}
      {!hideText && <AfterclassText />}
    </div>
  );
};
