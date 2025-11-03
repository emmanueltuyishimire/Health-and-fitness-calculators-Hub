
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
import { FatIntakeSchema, type FatIntakeFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function FatIntakeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<FatIntakeFormValues>({
    resolver: zodResolver(FatIntakeSchema),
    defaultValues: {
      calories: state.calorieNeeds?.toFixed(0) || '2000',
      fatPercentage: 30,
    },
  });
  
  const fatPercentage = form.watch('fatPercentage');

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('calories', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);

  function onSubmit(data: FatIntakeFormValues) {
    const calories = parseFloat(data.calories);
    const fatGrams = (calories * (data.fatPercentage / 100)) / 9;

    setResult(fatGrams);
    
    dispatch({ type: 'SET_USER_DATA', payload: { calories: data.calories, fat: data.fatPercentage } });
  }

  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Calorie Goal Not Found</AlertTitle>
          <AlertDescription>
            For best results, please <Link href="/daily-calorie-needs" className="font-semibold underline">calculate your Daily Calorie Needs</Link> first. A default value has been set.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="calories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Daily Calories</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
            <FormField
              control={form.control}
              name="fatPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Percentage of Calories from Fat: {fatPercentage}%</FormLabel>
                  <FormControl>
                    <Slider
                      min={10}
                      max={50}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Fat Intake
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Recommended Daily Fat Intake</h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)}g
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This target is based on your total calorie goal and desired percentage. Focus on healthy, unsaturated fat sources.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
