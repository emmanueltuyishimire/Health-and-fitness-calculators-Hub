
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
import { ProteinIntakeSchema, type ProteinIntakeFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const multipliers = {
  sedentary: { fat_loss: 1.4, maintenance: 1.2, muscle_gain: 1.6 },
  lightly_active: { fat_loss: 1.6, maintenance: 1.4, muscle_gain: 1.8 },
  moderately_active: { fat_loss: 1.8, maintenance: 1.6, muscle_gain: 2.0 },
  very_active: { fat_loss: 2.2, maintenance: 1.8, muscle_gain: 2.2 },
  extra_active: { fat_loss: 2.4, maintenance: 2.0, muscle_gain: 2.4 },
};

const imperialMultipliers = {
    sedentary: { fat_loss: 0.6, maintenance: 0.5, muscle_gain: 0.7 },
    lightly_active: { fat_loss: 0.7, maintenance: 0.6, muscle_gain: 0.8 },
    moderately_active: { fat_loss: 0.8, maintenance: 0.7, muscle_gain: 0.9 },
    very_active: { fat_loss: 1.0, maintenance: 0.8, muscle_gain: 1.0 },
    extra_active: { fat_loss: 1.1, maintenance: 0.9, muscle_gain: 1.1 },
};

export function ProteinIntakeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  const form = useForm<ProteinIntakeFormValues>({
    resolver: zodResolver(ProteinIntakeSchema),
    defaultValues: {
      weight: state.weight,
      activityLevel: state.activityLevel,
      goal: 'maintenance',
      unitSystem: state.unitSystem,
    },
     values: {
      weight: state.weight,
      activityLevel: state.activityLevel,
      goal: 'maintenance',
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    if (state.weight) {
      form.setValue('weight', state.weight);
    }
    form.setValue('unitSystem', state.unitSystem);
  }, [state.weight, state.unitSystem, form]);

  function onSubmit(data: ProteinIntakeFormValues) {
    const weight = parseFloat(data.weight);
    const selectedMultipliers = data.unitSystem === 'metric' ? multipliers : imperialMultipliers;
    const baseMultiplier = selectedMultipliers[data.activityLevel][data.goal];
    
    const lowEnd = weight * baseMultiplier;
    const highEnd = data.goal === 'fat_loss' || data.goal === 'muscle_gain' ? lowEnd * 1.25 : lowEnd * 1.2;

    setResult({ low: lowEnd, high: highEnd });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="lightly_active">Lightly Active</SelectItem>
                      <SelectItem value="moderately_active">Moderately Active</SelectItem>
                      <SelectItem value="very_active">Very Active</SelectItem>
                      <SelectItem value="extra_active">Extra Active</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Goal</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fat_loss">Fat Loss</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Protein Needs
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Recommended Daily Protein Intake</h3>
            <p className="text-3xl font-bold text-primary">
              {result.low.toFixed(0)} - {result.high.toFixed(0)}g
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This range is a guideline. For optimal results, aim for the higher end if you are very active or in a significant calorie deficit.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
