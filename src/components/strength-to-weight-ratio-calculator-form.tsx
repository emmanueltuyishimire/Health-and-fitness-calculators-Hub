
'use client';

import { useState, useEffect } from 'react';
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
import { useCalculator } from '@/context/calculator-context';
import { StrengthToWeightRatioSchema, type StrengthToWeightRatioFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function StrengthToWeightRatioCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<StrengthToWeightRatioFormValues>({
    resolver: zodResolver(StrengthToWeightRatioSchema),
    defaultValues: {
      bodyWeight: state.weight,
      liftedWeight: state.oneRepMax?.toFixed(1) || '',
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    if(state.weight) form.setValue('bodyWeight', state.weight);
    if(state.oneRepMax) form.setValue('liftedWeight', state.oneRepMax.toFixed(1));
  }, [state.unitSystem, state.weight, state.oneRepMax, form]);

  function onSubmit(data: StrengthToWeightRatioFormValues) {
    const bodyWeight = parseFloat(data.bodyWeight);
    const liftedWeight = parseFloat(data.liftedWeight);

    if (bodyWeight <= 0) {
        form.setError('bodyWeight', { message: 'Body weight must be positive.'});
        return;
    }

    const ratio = liftedWeight / bodyWeight;

    setResult(ratio);
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
    dispatch({ type: 'SET_RESULTS', payload: { strengthToWeightRatio: ratio } });
  }

  return (
    <div>
      {(!state.weight || !state.oneRepMax) && (
         <Alert className="mb-6">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Missing Data</AlertTitle>
            <AlertDescription>
                For best results, first use the <Link href="/body-fat" className="font-semibold underline">Body Fat Calculator</Link> to set your weight, and then the <Link href="/one-rep-max" className="font-semibold underline">1RM Calculator</Link> to set your lifted weight.
            </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="bodyWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="liftedWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight Lifted ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Ratio
          </Button>
        </form>
      </Form>

      {result !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Strength-to-Weight Ratio
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This means you can lift {result.toFixed(2)} times your body weight for this exercise.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
