
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
import { WeeklyWorkoutLoadSchema, type WeeklyWorkoutLoadFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';

export function WeeklyWorkoutLoadCalculatorForm() {
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<WeeklyWorkoutLoadFormValues>({
    resolver: zodResolver(WeeklyWorkoutLoadSchema),
    defaultValues: {
      sessionsPerWeek: '4',
      durationPerSession: '60',
      averageRpe: '7',
    },
  });

  function onSubmit(data: WeeklyWorkoutLoadFormValues) {
    const sessions = parseInt(data.sessionsPerWeek, 10);
    const duration = parseInt(data.durationPerSession, 10);
    const rpe = parseInt(data.averageRpe, 10);

    const weeklyLoad = sessions * duration * rpe;

    setResult(weeklyLoad);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="sessionsPerWeek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sessions / Week</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="durationPerSession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avg. Duration (min)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="averageRpe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avg. RPE (1-10)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Weekly Load
          </Button>
        </form>
      </Form>

      {result !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Estimated Weekly Workout Load
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This number represents your total training load for the week in arbitrary units (AU). Track this value over time to ensure you are progressively overloading.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
