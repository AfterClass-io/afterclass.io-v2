"use client";

import {
  type FieldValues,
  FormProvider,
  type UseFormReturn,
} from "react-hook-form";

import { FormItem } from "./FormItem";
import { FormLabel } from "./FormLabel";
import { FormControl } from "./FormControl";
import { FormDescription } from "./FormDescription";
import { FormMessage } from "./FormMessage";
import { FormField } from "./FormField";

import { useFormField } from "./hook";

interface FormProps<TFieldValues>
  extends UseFormReturn<
    TFieldValues extends FieldValues ? TFieldValues : FieldValues
  > {
  children: React.ReactNode;
}

export const Form = <TFieldValues,>({
  children,
  ...formMethods
}: FormProps<TFieldValues>) => {
  return <FormProvider {...formMethods}>{children}</FormProvider>;
};

Form.Item = FormItem;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Description = FormDescription;
Form.Message = FormMessage;
Form.Field = FormField;
Form.useFormField = useFormField;
