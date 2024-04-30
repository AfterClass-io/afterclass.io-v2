import {
  SchoolIcon,
  type SchoolIconProps,
} from "@/common/components/CustomIcon";
import Heading from "@/common/components/Heading";
import { Tag } from "@/common/components/Tag";
import { schoolTagTheme } from "./SchoolTag.theme";

export const SchoolTag = ({
  school,
}: {
  school: SchoolIconProps["school"];
}) => {
  const { tagIcon, heading } = schoolTagTheme();
  return (
    <Tag contentLeft={<SchoolIcon className={tagIcon()} school={school} />}>
      <Heading as="h5" className={heading()}>
        {school}
      </Heading>
    </Tag>
  );
};
