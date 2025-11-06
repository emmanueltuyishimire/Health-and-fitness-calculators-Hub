
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
import { WaterIntakeSchema, type WaterIntakeFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const activityModifiers = {
  sedentary: 0,
  lightly_active: 12,
  moderately_active: 24,
  very_active: 36,
};

export function WaterIntakeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<{ oz: number; liters: number } | null>(null);

  const form = useForm<WaterIntakeFormValues>({
    resolver: zodResolver(WaterIntakeSchema),
    defaultValues: {
      weight: state.weight,
      activityLevel: 'lightly_active',
      unitSystem: state.unitSystem,
    },
     values: {
      weight: state.weight,
      activityLevel: 'lightly_active',
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    if (state.weight) {
      form.setValue('weight', state.weight);
    }
    form.setValue('unitSystem', state.unitSystem);
  }, [state.weight, state.unitSystem, form]);

  function onSubmit(data: WaterIntakeFormValues) {
    const weight = parseFloat(data.weight);
    const weightInLbs = data.unitSystem === 'metric' ? weight * 2.20462 : weight;
    
    // Base intake: 2/3 of body weight in ounces
    const baseIntakeOz = weightInLbs * (2 / 3);
    
    // Add water for activity
    const activityWaterOz = activityModifiers[data.activityLevel];
    const totalIntakeOz = baseIntakeOz + activityWaterOz;
    const totalIntakeLiters = totalIntakeOz * 0.0295735;

    setResult({ oz: totalIntakeOz, liters: totalIntakeLiters });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
    dispatch({ type: 'SET_RESULTS', payload: { waterIntake: totalIntakeLiters } });
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
                      <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                      <SelectItem value="lightly_active">Lightly Active (exercise 1-2 days/wk)</SelectItem>
                      <SelectItem value="moderately_active">Moderately Active (exercise 3-4 days/wk)</SelectItem>
                      <SelectItem value="very_active">Very Active (exercise 5-7 days/wk)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Water Needs
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Recommended Daily Water Intake</h3>
            <p className="text-3xl font-bold text-primary">
              {result.liters.toFixed(1)} Liters / {result.oz.toFixed(0)} oz
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate. Your needs may vary based on climate and personal factors. Listen to your body and drink when you're thirsty.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
