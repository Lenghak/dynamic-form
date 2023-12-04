import * as z from "zod";

// standalone field
export const primitiveFormTypeEnum = z.enum([
  "text",
  "email",
  "password",
  "phone",
  "number",
  "date",
  "select",
  "checkbox",
  "radio",
  "slider",
]);

// field that has relations
export const relationFormTypeEnum = z.enum(["one_to_one", "one_to_many"]);

// relation field's display type
export const relationDisplayTypeEnum = z.enum(["table"]);

// the combination of form type including relation types
export const formTypeEnum = z.union([
  primitiveFormTypeEnum,
  relationFormTypeEnum,
]);

//

// event on schema
export const inputEventSchema = z.array(
  z.object({
    on: z.string(),
    url: z.string(),
    params: z.array(z.unknown()),
    placeholder: z.string(),
  }),
);

// default input schema
export const defaultInputSchema = z.object({
  type: formTypeEnum,
  label: z.string(),
  event_on: inputEventSchema,
  options: z.array(z.record(z.string())).optional(),
});

//
export const primitiveInputSchema = z.object({
  type: primitiveFormTypeEnum,
  placeholder: z.string(),

  // add validation options here
  // add styles options here
});

export const relationInputSchema = z.object({
  type: relationFormTypeEnum,
  display: relationDisplayTypeEnum,
  items: z.record(primitiveInputSchema),
});

// union the primitive and the relation based on the type
export const formInputCondition = z.discriminatedUnion("type", [
  primitiveInputSchema,
  relationInputSchema,
]);

export const formInputSchema = formInputCondition;

// types
export type DefaultInputProps = z.infer<typeof defaultInputSchema>;

export type FormInputData = z.infer<typeof formInputSchema>;
