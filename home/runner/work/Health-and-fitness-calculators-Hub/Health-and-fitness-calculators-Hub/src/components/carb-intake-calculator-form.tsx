
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
import { CarbIntakeSchema, type CarbIntakeFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const multipliers = {
  light: { low: 3, high: 5 },
  moderate: { low: 5, high: 7 },
  high: { low: 6, high: 10 },
  very_high: { low: 8, high: 12 },
};

const imperialMultipliers = {
    light: { low: 1.4, high: 2.3 },
    moderate: { low: 2.3, high: 3.2 },
    high: { low: 2.7, high: 4.5 },
    very_high: { low: 3.6, high: 5.5 },
};

export function CarbIntakeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  const form = useForm<CarbIntakeFormValues>({
    resolver: zodResolver(CarbIntakeSchema),
    defaultValues: {
      weight: state.weight,
      activityLevel: 'moderate',
      unitSystem: state.unitSystem,
    },
     values: {
      weight: state.weight,
      activityLevel: 'moderate',
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    if (state.weight) {
      form.setValue('weight', state.weight);
    }
    form.setValue('unitSystem', state.unitSystem);
  }, [state.weight, state.unitSystem, form]);

  function onSubmit(data: CarbIntakeFormValues) {
    const weight = parseFloat(data.weight);
    const selectedMultipliers = data.unitSystem === 'metric' ? multipliers : imperialMultipliers;
    const { low, high } = selectedMultipliers[data.activityLevel];
    
    const lowEnd = weight * low;
    const highEnd = weight * high;

    setResult({ low: lowEnd, high: highEnd });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
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
                  <FormLabel>Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">Light Activity</SelectItem>
                      <SelectItem value="moderate">Moderate Activity (~1hr/day)</SelectItem>
                      <SelectItem value="high">High Activity (1-3hrs/day)</SelectItem>
                      <SelectItem value="very_high">Very High Activity (4-5+ hrs/day)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Carb Needs
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Recommended Daily Carb Intake</h3>
            <p className="text-3xl font-bold text-primary">
              {result.low.toFixed(0)} - {result.high.toFixed(0)}g
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This range is based on sports nutrition guidelines for fueling performance. Your optimal intake may vary based on your specific daily activities and goals.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
