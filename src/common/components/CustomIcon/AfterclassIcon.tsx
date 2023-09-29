import { AfterclassLogo } from "./AfterclassLogo";
import { AfterclassText } from "./AfterclassText";

type TAfterclassIconProp = {
  hideText?: boolean;
  hideLogo?: boolean;
};

export const AfterclassIcon = ({
  hideText = false,
  hideLogo = false,
}: TAfterclassIconProp) => {
  return (
    <div className="flex h-6 items-center justify-center gap-x-3">
      {!hideLogo && <AfterclassLogo size={16} />}
      {!hideText && <AfterclassText />}
    </div>
  );
};
