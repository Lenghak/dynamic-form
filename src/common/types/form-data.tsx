import * as z from "zod";

export const primitiveFormTypeSchema = z.enum(["text", "select", "date"]);
export const relationFormTypeSchema = z.enum(["one_to_one", "one_to_many"]);
export const relationDisplayTypeSchema = z.enum(["table"]);

export const formTypeSchema = z.union([
  primitiveFormTypeSchema,
  relationFormTypeSchema,
]);

export const eventTypeSchema = z.object({
  on: z.string(),
  url: z.string(),
  params: z.array(z.unknown()),
  placeholder: z.string(),
});

export const defaultFormItemSchema = z.object({
  type: formTypeSchema,
  label: z.string(),
  event_on: z.array(z.unknown()),
});

export const primitiveFormItemSchema = z.object({
  type: primitiveFormTypeSchema,
  placeholder: z.string(),
  max: z.number(),
});

export const relationFormItemSchema = z.object({
  type: relationFormTypeSchema,
  display: relationDisplayTypeSchema,
  items: z.record(primitiveFormItemSchema),
});

export const formItemSchemaCond = z.discriminatedUnion("type", [
  primitiveFormItemSchema,
  relationFormItemSchema,
]);

export const formInputSchema = z.intersection(
  formItemSchemaCond,
  defaultFormItemSchema,
);

export const formDataSchema = z.record(formInputSchema);

export type PrimitiveFormType = z.infer<typeof primitiveFormTypeSchema>;
export type PrimitiveFormItemType = z.infer<typeof primitiveFormItemSchema>;

export type FormFieldType = z.infer<typeof formTypeSchema>;
export type FormInputType = z.infer<typeof formInputSchema>;
export type FormDataType = z.infer<typeof formDataSchema>;
