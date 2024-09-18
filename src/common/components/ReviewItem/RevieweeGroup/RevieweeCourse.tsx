import { Tooltip } from "@/common/components/Tooltip";
import { Button } from "@/common/components/Button";
import { profileTheme } from "@/common/components/Profile";

export const RevieweeCourse = ({
  courseCode,
  courseName,
}: {
  courseCode: string;
  courseName: string;
}) => {
  const { name: profileNameClass } = profileTheme();
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button
          variant="link"
          as="a"
          href={`/course/${courseCode}`}
          className={profileNameClass({
            class: "hover:text-primary-default hover:no-underline",
          })}
          aria-label="course"
        >
          {courseCode}
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <span>{courseName}</span>
      </Tooltip.Content>
    </Tooltip>
  );
};
