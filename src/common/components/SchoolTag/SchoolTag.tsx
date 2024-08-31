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
  const { wrapper, tagIcon, heading } = schoolTagTheme({
    size: { initial: "sm", md: "md" },
  });
  return (
    <Tag
      contentLeft={<SchoolIcon className={tagIcon()} school={school} />}
      className={wrapper()}
    >
      <Heading as="h5" className={heading()}>
        {school}
      </Heading>
    </Tag>
  );
};
