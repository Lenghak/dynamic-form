import React from "react";

import { cn } from "@/common/libs/utils";

import {
  FormControl,
  FormLabel,
  FormMessage,
  FormItem as PrimitiveFormItem,
} from "../ui/form";

export type FormItemProps = {
  label?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, label, children, ...props }, ref) => {
    return (
      <PrimitiveFormItem
        ref={ref}
        className={cn("flex flex-col", className)}
        {...props}
      >
        {label ? <FormLabel>{label}</FormLabel> : undefined}
        <FormControl>{children}</FormControl>
        <FormMessage />
      </PrimitiveFormItem>
    );
  },
);
