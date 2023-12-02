import { Button } from "@/common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";

import { useHooks } from "./hooks";
import RootLayout from "./layout";

export default function App() {
  const { form, onSubmit } = useHooks();

  return (
    <RootLayout>
      <section className="flex h-full w-full flex-col items-center justify-start">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg space-y-6 "
          >
            <FormField
              control={form.control}
              name={"username"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      className="autofill:bg-input"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </RootLayout>
  );
}
