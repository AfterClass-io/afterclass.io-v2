import {
  dialogFooterTheme,
  type DialogFooterVariants,
} from "./DialogFooter.theme";

export type DialogFooterProps = DialogFooterVariants &
  React.ComponentPropsWithoutRef<"div">;

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { dialogFooter } = dialogFooterTheme();
  return <div className={dialogFooter({ className })} {...props} />;
};
DialogFooter.displayName = "DialogFooter";
