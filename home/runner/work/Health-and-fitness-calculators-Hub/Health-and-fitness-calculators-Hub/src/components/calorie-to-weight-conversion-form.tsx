
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';

const CalorieConversionSchema = z.object({
  calories: z.string().min(1, { message: 'Calories are required.' }),
});

type FormValues = z.infer<typeof CalorieConversionSchema>;

export function CalorieToWeightConversionForm() {
  const [result, setResult] = useState<{ lbs: number; kg: number } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(CalorieConversionSchema),
    defaultValues: {
      calories: '3500',
    },
  });

  function onSubmit(data: FormValues) {
    const calories = parseFloat(data.calories);

    const lbs = calories / 3500;
    const kg = lbs * 0.453592;

    setResult({ lbs, kg });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calories to Convert</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Convert
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center md:text-left">
              Equivalent Weight
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Pounds (lbs)</p>
                <p className="text-2xl font-bold text-primary">
                  {result.lbs.toFixed(2)}
                </p>
              </div>
               <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Kilograms (kg)</p>
                <p className="text-2xl font-bold text-primary">
                  {result.kg.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
