"use client";

import * as z from "zod";
import { categorySchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const AddCategory = () => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: "",
    },
  });
  //On Submit Fn
  function onSubmit(values: z.infer<typeof categorySchema>) {
    console.log(values);
  }

  return (
    <section>
      <h2 className="text-center text-3xl font-semibold mb-6">Add Category</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter A Title .." className="focus-visible:ring-transparent" {...field} />
                </FormControl>
                <FormDescription>
                  This is your category display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="block mx-auto">Submit</Button>
        </form>
      </Form>
    </section>
  );
};
export default AddCategory;

