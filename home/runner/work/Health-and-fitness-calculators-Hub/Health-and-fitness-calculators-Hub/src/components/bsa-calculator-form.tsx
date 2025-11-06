
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
import { useCalculator } from '@/context/calculator-context';
import { BsaSchema, type BsaFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';

export function BsaCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bsaResult, setBsaResult] = useState<number | null>(null);

  const form = useForm<BsaFormValues>({
    resolver: zodResolver(BsaSchema),
    defaultValues: {
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
    values: {
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: BsaFormValues) {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);

    const heightCm = data.unitSystem === 'imperial' ? height * 2.54 : height;
    const weightKg = data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    // Du Bois formula
    const bsa = 0.007184 * Math.pow(heightCm, 0.725) * Math.pow(weightKg, 0.425);

    setBsaResult(bsa);
    dispatch({
      type: 'SET_USER_DATA',
      payload: { height: data.height, weight: data.weight },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bsa } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BsaFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 175"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 70"
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
            Calculate BSA
          </Button>
        </form>
      </Form>

      {bsaResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your BSA Result</h3>
            <p className="text-3xl font-bold text-primary">
              {bsaResult.toFixed(2)} m²
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate of your total body surface area, a key metric in medicine and physiology.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
