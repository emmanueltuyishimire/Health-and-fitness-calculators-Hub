
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

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
import { useCalculator } from '@/context/calculator-context';
import {
  BodyDensitySchema,
  type BodyDensityFormValues,
} from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

export function BodyDensityCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bodyDensityResult, setBodyDensityResult] = useState<number | null>(null);

  const form = useForm<BodyDensityFormValues>({
    resolver: zodResolver(BodyDensitySchema),
    defaultValues: {
      bodyFat: state.bodyFat?.toFixed(1) || '',
    },
  });

  useEffect(() => {
    if (state.bodyFat) {
      form.setValue('bodyFat', state.bodyFat.toFixed(1));
    }
  }, [state.bodyFat, form]);

  function onSubmit(data: BodyDensityFormValues) {
    const bodyFat = parseFloat(data.bodyFat);

    // Reverse Siri equation: Body Density = 495 / (Body Fat % + 450)
    const bodyDensity = 495 / (bodyFat + 450);

    setBodyDensityResult(bodyDensity);
    dispatch({ type: 'SET_USER_DATA', payload: { bodyFat } });
    dispatch({ type: 'SET_RESULTS', payload: { bodyDensity } });
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BodyDensityFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: parseFloat(value) } });
  };


  return (
    <div>
      {!state.bodyFat && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Body Fat % Not Found</AlertTitle>
          <AlertDescription>
            Please use the{' '}
            <Link href="/body-fat" className="font-semibold underline" aria-label="Body Fat Calculator">
              Body Fat Calculator
            </Link>{' '}
            first or enter a value manually.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="bodyFat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Fat (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="e.g., 15"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Body Density
          </Button>
        </form>
      </Form>

      {bodyDensityResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Estimated Body Density
            </h3>
            <p className="text-3xl font-bold text-primary">
              {bodyDensityResult.toFixed(4)} g/cm³
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This value represents your body's mass per unit volume. A higher
              value typically correlates with lower body fat.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
