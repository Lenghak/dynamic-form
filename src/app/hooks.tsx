import { useMemo } from "react";
import { useForm } from "react-hook-form";

// importing dummy data
import { data } from "@/common/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { formDataSchema } from "@/common/types/form-data";

export const useHooks = () => {
  const parsedData = useMemo(() => {
    try {
      return formDataSchema.parse(data.form_data);
    } catch (err) {
      console.log(err);
      return {};
    }
  }, []);

  const formSchema = z.record(z.unknown());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // optional configuration for doing something onSubmit
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return { form, onSubmit, parsedData };
};
