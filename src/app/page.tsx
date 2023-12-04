"use client";

import { CustomInputField } from "@/common/components/custom";
import { Button } from "@/common/components/ui/button";
import { Form, FormField } from "@/common/components/ui/form";

import { useHooks } from "@/common/hooks";

import RootLayout from "./layout";

export default function ProfileForm() {
  // ...
  const { form, defaultValues } = useHooks();

  // 2. Define a submit handler.
  function onSubmit(values: unknown) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <RootLayout>
      <section className="mx-auto max-w-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {Object.entries(defaultValues).map(([key], index) => (
              <FormField
                key={index}
                control={form.control}
                name={key}
                render={({ field }) => (
                  <CustomInputField
                    label={key}
                    type="text"
                    event_on={[]}
                    {...field}
                  />
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
