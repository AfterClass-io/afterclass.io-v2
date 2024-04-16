import { CustomIcon, type CustomIconProps } from "./CustomIcon";

export const DotFilledIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <path
        d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
        fill="currentColor"
      ></path>
    </CustomIcon>
  );
};
