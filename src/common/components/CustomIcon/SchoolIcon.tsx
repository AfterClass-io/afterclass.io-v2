import { CustomIcon, type CustomIconProps } from "./CustomIcon";
import { NTUIcon, NUSIcon, SMUIcon } from "@/common/components/CustomIcon";

export interface SchoolIconProps extends CustomIconProps {
  school: "NTU" | "SMU" | "NUS";
}

export const SchoolIcon = (props: SchoolIconProps) => {
  const { school, ...CustomIconProps } = props;
  const svgs = {
    SMU: SMUIcon,
    NUS: NUSIcon,
    NTU: NTUIcon,
  };
  const schoolSVG = svgs[school] || SMUIcon;

  return (
    <CustomIcon viewBox="0 0 63 63" fill="none" {...CustomIconProps}>
      {schoolSVG}
    </CustomIcon>
  );
};
