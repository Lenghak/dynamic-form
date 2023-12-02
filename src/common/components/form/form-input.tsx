import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl } from "../ui/form";
import { Input } from "../ui/input";

import { FormInputType } from "@/common/types/form-data";

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerRenderProps<TFieldValues, TName> & FormInputType) => {
  return (
    <FormControl>
      <Input {...props} />
    </FormControl>
  );
};
