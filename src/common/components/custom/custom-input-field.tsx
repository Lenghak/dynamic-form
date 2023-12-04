"use client";

import React from "react";
import { ControllerRenderProps } from "react-hook-form";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";

import { Input } from "../ui/input";

import { DefaultInputProps } from "@/common/types/form";

export const CustomInputField = React.forwardRef<
  HTMLInputElement,
  DefaultInputProps & ControllerRenderProps
>(({ label, ...props }, ref) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          {...props}
          ref={ref}
        />
      </FormControl>

      <FormMessage />
    </FormItem>
  );
});
