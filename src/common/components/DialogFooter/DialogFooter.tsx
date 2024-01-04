import {
  dialogFooterTheme,
  type DialogFooterVariants,
} from "./DialogFooter.theme";

export type DialogFooterProps = DialogFooterVariants &
  React.ComponentPropsWithoutRef<"div">;

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={dialogFooterTheme({ className })} {...props} />
);
DialogFooter.displayName = "DialogFooter";
