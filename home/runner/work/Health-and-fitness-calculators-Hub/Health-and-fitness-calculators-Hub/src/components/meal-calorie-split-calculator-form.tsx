
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
import { MealCalorieSplitSchema, type MealCalorieSplitFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function MealCalorieSplitCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<MealCalorieSplitFormValues>({
    resolver: zodResolver(MealCalorieSplitSchema),
    defaultValues: {
      calories: state.calorieNeeds?.toFixed(0) || '2000',
      meals: '4',
    },
  });

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('calories', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);

  function onSubmit(data: MealCalorieSplitFormValues) {
    const calories = parseFloat(data.calories);
    const meals = parseInt(data.meals, 10);
    const caloriesPerMeal = calories / meals;

    setResult(caloriesPerMeal);
    
    dispatch({ type: 'SET_USER_DATA', payload: { calories: data.calories, meals: data.meals } });
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
            <FormField
              control={form.control}
              name="meals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Meals</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Split Calories
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Calories Per Meal</h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)} kcal
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an even split. You can adjust meal sizes based on your preference and schedule, as long as your total daily intake is met.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
