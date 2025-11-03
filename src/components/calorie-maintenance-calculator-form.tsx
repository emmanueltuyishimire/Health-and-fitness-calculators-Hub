
'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Terminal } from 'lucide-react';
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
import { CalorieMaintenanceSchema, type CalorieMaintenanceFormValues } from '@/lib/definitions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from './ui/separator';

export function CalorieMaintenanceCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [maintenanceResult, setMaintenanceResult] = useState<number | null>(null);

  const form = useForm<CalorieMaintenanceFormValues>({
    resolver: zodResolver(CalorieMaintenanceSchema),
    defaultValues: {
      tdee: state.calorieNeeds?.toFixed(0) || '',
    },
  });

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('tdee', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);

  function onSubmit(data: CalorieMaintenanceFormValues) {
    const tdee = parseFloat(data.tdee);
    setMaintenanceResult(tdee);
    dispatch({ type: 'SET_USER_DATA', payload: { tdee: data.tdee } });
  }

  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>TDEE Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/tdee" className="font-semibold underline" aria-label="TDEE Calculator">calculate your TDEE</Link> first to determine your maintenance calories.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="tdee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your TDEE (Maintenance Calories)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.calorieNeeds}>Calculate Maintenance Calories</Button>
        </form>
      </Form>
      {maintenanceResult && (
        <>
            <Separator className="my-6" />
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Maintenance Calorie Goal</h3>
                <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Daily Calorie Target for Maintenance</p>
                    <p className="text-2xl font-bold text-primary">{maintenanceResult.toFixed(0)}</p>
                    <p className="text-xs text-muted-foreground">kcal/day</p>
                </div>
                <p className="text-xs text-muted-foreground pt-2 text-center md:text-left">
                    To maintain your current weight, you should aim to eat approximately <strong>{maintenanceResult.toFixed(0)} calories</strong> per day.
                </p>
            </div>
        </>
      )}
    </div>
  );
}
