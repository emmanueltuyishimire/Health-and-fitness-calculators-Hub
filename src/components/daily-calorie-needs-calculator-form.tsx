
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
import { TdeeSchema, type TdeeFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from './ui/separator';

const activityLevels = {
  sedentary: { label: 'Sedentary (little or no exercise)', value: 1.2 },
  lightly_active: { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375 },
  moderately_active: { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55 },
  very_active: { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725 },
  extra_active: { label: 'Extra active (very hard exercise/sports & physical job)', value: 1.9 },
};

export function DailyCalorieNeedsCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [tdeeResult, setTdeeResult] = useState<Record<string, number> | null>(null);

  const form = useForm<TdeeFormValues>({
    resolver: zodResolver(TdeeSchema),
    defaultValues: {
      bmr: state.bmr?.toFixed(0) || '',
      activityLevel: state.activityLevel,
    },
  });

  useEffect(() => {
    if (state.bmr) {
      form.setValue('bmr', state.bmr.toFixed(0));
    }
  }, [state.bmr, form]);

  function onSubmit(data: TdeeFormValues) {
    const bmr = parseFloat(data.bmr);
    const multiplier = activityLevels[data.activityLevel].value;
    const maintenance = bmr * multiplier;

    setTdeeResult({
      maintenance,
      mildWeightLoss: maintenance - 250,
      weightLoss: maintenance - 500,
      extremeWeightLoss: maintenance - 1000,
      mildWeightGain: maintenance + 250,
      weightGain: maintenance + 500,
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { activityLevel: data.activityLevel } });
    dispatch({ type: 'SET_RESULTS', payload: { calorieNeeds: maintenance } });
  }

  const handleSelectChange = (name: keyof TdeeFormValues) => (value: string) => {
    form.setValue(name, value as TdeeFormValues['activityLevel']);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      {!state.bmr && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>BMR Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/bmr" className="font-semibold underline" aria-label="BMR Calculator">calculate your BMR</Link> first to estimate your TDEE.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="bmr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your BMR (calories/day)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} disabled />
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
                  <Select onValueChange={handleSelectChange('activityLevel')} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(activityLevels).map(([key, { label }]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.bmr}>Calculate Daily Needs</Button>
        </form>
      </Form>
      {tdeeResult && (
        <>
            <Separator className="my-6" />
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Calorie Goals</h3>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
                    <p className="text-sm font-semibold text-primary">Maintenance</p>
                    <p className="text-3xl font-bold text-primary">{tdeeResult.maintenance.toFixed(0)}</p>
                    <p className="text-xs text-primary/80">calories/day</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-center mb-2">Fat Loss</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span>Mild (-0.5 lb/week)</span><span className="font-semibold">{tdeeResult.mildWeightLoss.toFixed(0)}</span></div>
                            <div className="flex justify-between"><span>Weight Loss (-1 lb/week)</span><span className="font-semibold">{tdeeResult.weightLoss.toFixed(0)}</span></div>
                             <div className="flex justify-between"><span>Extreme (-2 lb/week)</span><span className="font-semibold">{tdeeResult.extremeWeightLoss.toFixed(0)}</span></div>
                        </div>
                    </div>
                     <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-center mb-2">Weight Gain</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span>Mild (+0.5 lb/week)</span><span className="font-semibold">{tdeeResult.mildWeightGain.toFixed(0)}</span></div>
                            <div className="flex justify-between"><span>Weight Gain (+1 lb/week)</span><span className="font-semibold">{tdeeResult.weightGain.toFixed(0)}</span></div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                    These are estimates based on the TDEE formula. Weight loss of 1-2 lbs per week is generally considered a safe and sustainable rate.
                </p>
            </div>
        </>
      )}
    </div>
  );
}
