import { FormItem, FormRender } from "@/common/components/form";
import { Button } from "@/common/components/ui/button";
import { Form, FormField } from "@/common/components/ui/form";

import { useHooks } from "./hooks";
import RootLayout from "./layout";

export default function App() {
  const { form, onSubmit, parsedData } = useHooks();

  return (
    <RootLayout>
      <section className="flex h-full w-full flex-col items-center justify-start">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-6 "
          >
            {Object.entries(parsedData).map(([key, value], index) => (
              <FormField
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem
                    label={value.label}
                    key={index}
                  >
                    <FormRender
                      type={value.type}
                      {...field}
                    />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </RootLayout>
  );
}
