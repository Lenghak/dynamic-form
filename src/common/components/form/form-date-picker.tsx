import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

import { cn } from "@/common/libs/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { FormControl } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const FormDatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  value,
  onChange,
  ...props
}: ControllerRenderProps<TFieldValues, TName>) => (
  <Popover>
    <PopoverTrigger asChild>
      <FormControl>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          {value ? format(value, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </FormControl>
    </PopoverTrigger>
    <PopoverContent
      className="w-auto p-0"
      align="start"
    >
      <Calendar
        mode="single"
        selected={value}
        onSelect={onChange}
        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
        initialFocus
        {...props}
      />
    </PopoverContent>
  </Popover>
);
