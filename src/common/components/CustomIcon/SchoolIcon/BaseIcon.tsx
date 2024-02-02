import { CustomIcon, type CustomIconProps } from "../CustomIcon";
import { NTUIcon } from "@/common/components/CustomIcon/SchoolIcon/NTUIcon";
import { NUSIcon } from "@/common/components/CustomIcon/SchoolIcon/NUSIcon";
import { SMUIcon } from "@/common/components/CustomIcon/SchoolIcon/SMUIcon";

export interface SchoolIconProps extends CustomIconProps {
  school: "NTU" | "SMU" | "NUS";
}
const svgs = {
  SMU: SMUIcon,
  NUS: NUSIcon,
  NTU: NTUIcon,
};

export const SchoolIcon = ({ school, ...props }: SchoolIconProps) => {
  const schoolSVG = svgs[school] || SMUIcon;

  return (
    <CustomIcon viewBox="0 0 63 63" fill="none" {...props}>
      {schoolSVG}
    </CustomIcon>
  );
};
