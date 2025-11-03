
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
import { WalkingRunningCaloriesSchema, type WalkingRunningCaloriesFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const activities = [
  { label: 'Walking, 3.5 mph, brisk pace', met: 3.8 },
  { label: 'Walking, 4.5 mph, very brisk', met: 5.0 },
  { label: 'Running, 5 mph (12 min/mile)', met: 8.3 },
  { label: 'Running, 6 mph (10 min/mile)', met: 9.8 },
  { label: 'Running, 7 mph (8.5 min/mile)', met: 11.0 },
  { label: 'Running, 8 mph (7.5 min/mile)', met: 11.8 },
  { label: 'Running, 10 mph (6 min/mile)', met: 14.5 },
];

export function WalkingRunningCaloriesCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<number | null>(null);

  const form = useForm<WalkingRunningCaloriesFormValues>({
    resolver: zodResolver(WalkingRunningCaloriesSchema),
    defaultValues: {
      weight: state.weight,
      activity: 'Running, 6 mph (10 min/mile)',
      duration: '30',
      unitSystem: state.unitSystem,
    },
    values: {
      weight: state.weight,
      activity: 'Running, 6 mph (10 min/mile)',
      duration: '30',
      unitSystem: state.unitSystem,
    },
  });
  
  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    if(state.weight) {
        form.setValue('weight', state.weight);
    }
  }, [state.unitSystem, state.weight, form]);

  function onSubmit(data: WalkingRunningCaloriesFormValues) {
    const weight = parseFloat(data.weight);
    const duration = parseFloat(data.duration);
    const activityData = activities.find(
      (activity) => activity.label === data.activity
    );

    if (!activityData) {
      form.setError('activity', { message: 'Please select a valid activity.' });
      return;
    }

    const metValue = activityData.met;
    const weightKg =
      data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    // Formula: Calories/min = (MET * 3.5 * weight in kg) / 200
    const caloriesBurned = ((metValue * 3.5 * weightKg) / 200) * duration;

    setResult(caloriesBurned);

    dispatch({
      type: 'SET_USER_DATA',
      payload: { weight: data.weight, activity: data.activity, duration: data.duration },
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
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
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
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity</FormLabel>
                   <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {activities.map((activity) => (
                        <SelectItem key={activity.label} value={activity.label}>{activity.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              Estimated Calories Burned
            </h3>
            <p className="text-3xl font-bold text-primary">
              {result.toFixed(0)} kcal
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate based on the MET value of the selected
              activity and your body weight. Actual results may vary.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
