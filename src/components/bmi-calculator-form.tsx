// src/components/bmi-calculator-form.tsx
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
import { BmiSchema, type BmiFormValues } from '@/lib/definitions';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

export function BmiCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bmiResult, setBmiResult] = useState<{
    value: number;
    category: string;
  } | null>(null);

  const form = useForm<BmiFormValues>({
    resolver: zodResolver(BmiSchema),
    defaultValues: {
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
    values: {
      // ensures form syncs with context changes (e.g. unit system)
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: BmiFormValues) {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    let bmi: number;

    if (data.unitSystem === 'metric') {
      // weight in kg, height in cm -> m
      bmi = weight / (height / 100) ** 2;
    } else {
      // weight in lbs, height in in
      bmi = (weight / height ** 2) * 703;
    }

    setBmiResult({ value: bmi, category: getBmiCategory(bmi) });
    dispatch({
      type: 'SET_USER_DATA',
      payload: { height: data.height, weight: data.weight },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bmi } });
  }

  function getBmiCategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BmiFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const categoryColorClass = (category: string) => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-500';
      case 'Normal weight':
        return 'text-green-500';
      case 'Overweight':
        return 'text-yellow-500';
      case 'Obese':
        return 'text-red-500';
      default:
        return 'text-foreground';
    }
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
            Calculate BMI
          </Button>
        </form>
      </Form>

      {bmiResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your BMI Result</h3>
            <p className="text-4xl font-bold text-primary">
              {bmiResult.value.toFixed(1)}
            </p>
            <p
              className={cn(
                'font-semibold text-lg',
                categoryColorClass(bmiResult.category)
              )}
            >
              Category: {bmiResult.category}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              Based on the World Health Organization's recommended body weight
              based on height for men and women.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
