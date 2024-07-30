import { NoticeCardTheme,NoticeCardVariants } from "./NoticeCard.theme";
import { AfterclassIcon } from "@/common/components/CustomIcon";


export type NoticeCardProps = NoticeCardVariants & {
  title: string;
  subtitle: string;
};
export const NoticeCard = ({title, subtitle, error}: NoticeCardProps) => {
  const{
    wrapper,
    textBox,
    icon,
    icons,
    title: titleClassNames,
    subtitle: subtitleClassNames,
  } = NoticeCardTheme();
  
  return (
    <div className={wrapper()}>
      <div className={icons()}>
      <AfterclassIcon className={icon({ size: "xl" })} />
      <AfterclassIcon className={icon({ size: "lg" })} />
      <AfterclassIcon className={icon({ size: "md" })} />
        <div className={textBox()}>
          <div className={titleClassNames()}>
            {title}
          </div>
          <div className={subtitleClassNames()}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  
  );
};
