
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { Separator } from '@/components/ui/separator';

type FormValues = {
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  day7: string;
  previousWeekAverage?: string;
};

export function WeightChangeTrackerForm() {
  const { state } = useCalculator();
  const [result, setResult] = useState<{
    average: number;
    change?: number;
  } | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
      day6: '',
      day7: '',
      previousWeekAverage: '',
    },
  });

  function onSubmit(data: FormValues) {
    const weights = [
      data.day1,
      data.day2,
      data.day3,
      data.day4,
      data.day5,
      data.day6,
      data.day7,
    ].map(parseFloat).filter(val => !isNaN(val));

    if (weights.length === 0) {
      form.setError('day1', { message: 'Please enter at least one weight.'});
      return;
    }

    const average = weights.reduce((sum, w) => sum + w, 0) / weights.length;
    let change: number | undefined;

    if (data.previousWeekAverage) {
      const prevAvg = parseFloat(data.previousWeekAverage);
      if (!isNaN(prevAvg)) {
        change = average - prevAvg;
      }
    }

    setResult({ average, change });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 7 }, (_, i) => (
              <FormField
                key={`day${i + 1}`}
                control={form.control}
                name={`day${i + 1}` as keyof FormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Day {i + 1}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder={`${state.unitSystem === 'metric' ? 'kg' : 'lbs'}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="previousWeekAverage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prev. Week Avg</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder={`Optional (${state.unitSystem === 'metric' ? 'kg' : 'lbs'})`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Weekly Change
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center md:text-left">
              Your Weekly Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">This Week's Average</p>
                <p className="text-2xl font-bold text-primary">
                  {result.average.toFixed(1)} {state.unitSystem === 'metric' ? 'kg' : 'lbs'}
                </p>
              </div>
              {result.change !== undefined && (
                 <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Weekly Change</p>
                    <p className={`text-2xl font-bold ${result.change > 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {result.change > 0 ? '+' : ''}{result.change.toFixed(1)} {state.unitSystem === 'metric' ? 'kg' : 'lbs'}
                    </p>
                </div>
              )}
            </div>
             <p className="text-xs text-muted-foreground pt-2 text-center md:text-left">
              Trust the weekly average, not the daily fluctuations. Your true trend is what matters for long-term success.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
