
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
import { StepsToCaloriesSchema, type StepsToCaloriesFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';

export function StepsToCaloriesCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<StepsToCaloriesFormValues>({
    resolver: zodResolver(StepsToCaloriesSchema),
    defaultValues: {
      weight: state.weight || '',
      steps: '10000',
      unitSystem: state.unitSystem,
    },
  });
  
  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    if(state.weight) {
        form.setValue('weight', state.weight);
    }
  }, [state.unitSystem, state.weight, form]);

  function onSubmit(data: StepsToCaloriesFormValues) {
    const weight = parseFloat(data.weight);
    const steps = parseInt(data.steps, 10);

    const metValue = 3.5; // MET value for walking
    const weightKg =
      data.unitSystem === 'imperial' ? weight * 0.453592 : weight;
      
    // Assume average 100 steps per minute to estimate duration
    const durationMinutes = steps / 100; 

    // Formula: Calories/min = (MET * 3.5 * weight in kg) / 200
    const caloriesBurned = ((metValue * 3.5 * weightKg) / 200) * durationMinutes;

    setResult(caloriesBurned);

    dispatch({
      type: 'SET_USER_DATA',
      payload: { weight: data.weight, steps: data.steps },
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="steps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Steps</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Calorie Burn
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Estimated Calories Burned from Steps
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)} kcal
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate based on your body weight and an average walking pace. Actual results may vary based on speed, incline, and individual fitness level.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
