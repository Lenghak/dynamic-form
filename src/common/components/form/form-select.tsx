import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { FormInputType } from "@/common/types/form-data";

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  value,
  onChange,
  ...props
}: ControllerRenderProps<TFieldValues, TName> & FormInputType) => {
  return (
    <Select
      onValueChange={onChange}
      defaultValue={value}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={props.label} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="A">A</SelectItem>
        <SelectItem value="B">B</SelectItem>
        <SelectItem value="C">C</SelectItem>
      </SelectContent>
    </Select>
  );
};
