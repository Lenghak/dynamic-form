import React from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

import { FormInputType, PrimitiveFormType } from "@/common/types";

import { FormDatePicker } from "./form-date-picker";
import { FormInput } from "./form-input";
import { FormSelect } from "./form-select";

const FormComponents = {
  text: FormInput,
  select: FormSelect,
  date: FormDatePicker,
};

export const FormRender = React.forwardRef(
  <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >({
    type,
    props,
  }: {
    type: PrimitiveFormType;
    props: ControllerRenderProps<TFieldValues, TName> & FormInputType;
  }) => {
    const id = React.useId();

    if (FormComponents[type] !== undefined)
      return React.createElement(FormComponents[type], { ...props });

    return React.createElement(
      () => <div>The component has not been created yet.</div>,
      { key: id },
    );
  },
);
