import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { type TextareaVariants, textareaTheme } from "./Textarea.theme";

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  TextareaVariants & {
    placeholder?: string;
    wrapperProps?: ComponentPropsWithoutRef<"div">;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { placeholder = "Input", size = "md", wrapperProps, className, ...props },
    ref,
  ) => {
    const { wrapper, textarea } = textareaTheme();
    return (
      <div
        className={wrapper({
          className: wrapperProps?.className,
          size,
        })}
        {...wrapperProps}
      >
        <textarea
          placeholder={placeholder}
          className={textarea({ className, size })}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
