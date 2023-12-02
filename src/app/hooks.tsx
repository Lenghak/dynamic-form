import { useForm } from "react-hook-form";

// importing dummy data
import { data } from "@/common/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const formSchema = z.object({});

export const useHooks = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // optional configuration for doing something onSubmit
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return { form, onSubmit, data };
};
