import { CustomIcon, type CustomIconProps } from "./CustomIcon";

export const ChevronDownIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon viewBox="0 0 16 16" {...props}>
      <path
        d="M4.94 6L8 9.05334L11.06 6L12 6.94L8 10.94L4 6.94L4.94 6Z"
        fill="currentColor"
      />
    </CustomIcon>
  );
};
