"use client";
import { CustomIcon, type CustomIconProps } from "../CustomIcon";
import { NTUIcon } from "./NTUIcon";
import { NUSIcon } from "./NUSIcon";
import { SMUIcon } from "./SMUIcon";
import { type UniversityAbbreviation } from "@prisma/client";
import { Tooltip } from "@/common/components/Tooltip";

export interface SchoolIconProps extends CustomIconProps {
  school: UniversityAbbreviation;
}
const svgs = {
  SMU: SMUIcon,
  NUS: NUSIcon,
  NTU: NTUIcon,
};

export const SchoolIcon = ({ school, ...props }: SchoolIconProps) => {
  const schoolSVG = svgs[school] || SMUIcon;

  return (
    <Tooltip>
      <Tooltip.Trigger>
        <CustomIcon viewBox="0 0 63 63" fill="none" {...props}>
          {schoolSVG}
        </CustomIcon>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{school}</span>
      </Tooltip.Content>
    </Tooltip>
  );
};
