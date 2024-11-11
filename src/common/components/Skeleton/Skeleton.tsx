import { skeletonTheme } from "./Skeleton.theme";

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={skeletonTheme({ className })} {...props} />
);
