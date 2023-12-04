import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.record(z.string().or(z.record(z.string())));

export const useHooks = () => {
  // default value for controlled components
  const defaultValues = useMemo(() => {
    const obj: Record<string, string | Record<string, string>> = {};

    // try {
    //   const parsedData = formDataSchema.parse(data.form_data);

    //   Object.entries(parsedData).forEach(([key, value]) => {
    //     if (primitiveFormTypeEnum.safeParse(value.type).success) {
    //       obj[key as string] = "";
    //     } else obj[key] = createDynamicObject(value, "");
    //   });

    //   return obj;

    //   //
    // } catch (err) {
    //   console.log(err);
    //   return {};
    // }

    return obj;
  }, []);

  // console.log(defaultValues);

  // form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  return { form, defaultValues };
};
