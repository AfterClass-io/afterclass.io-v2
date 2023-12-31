import {
  dialogHeaderTheme,
  type DialogHeaderVariants,
} from "./DialogHeader.theme";

export type DialogHeaderProps = DialogHeaderVariants &
  React.ComponentPropsWithoutRef<"div">;

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={dialogHeaderTheme({ className })} {...props} />
);
DialogHeader.displayName = "DialogHeader";
