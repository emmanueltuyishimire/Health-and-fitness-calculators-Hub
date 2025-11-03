'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calculator } from 'lucide-react';
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
import { CalculatorCard } from '@/components/calculator-card';
import { useCalculator } from '@/context/calculator-context';
import { CalorieNeedsSchema, type CalorieNeedsFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const activityLevels = {
  sedentary: { label: 'Sedentary (little or no exercise)', value: 1.2 },
  lightly_active: { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375 },
  moderately_active: { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55 },
  very_active: { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725 },
  extra_active: { label: 'Extra active (very hard exercise/sports & physical job)', value: 1.9 },
};

export default function CalorieNeedsPage() {
  const { state, dispatch } = useCalculator();
  const [calorieNeedsResult, setCalorieNeedsResult] = useState<Record<string, number> | null>(null);

  const form = useForm<CalorieNeedsFormValues>({
    resolver: zodResolver(CalorieNeedsSchema),
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

  function onSubmit(data: CalorieNeedsFormValues) {
    const bmr = parseFloat(data.bmr);
    const multiplier = activityLevels[data.activityLevel].value;
    const maintenance = bmr * multiplier;

    setCalorieNeedsResult({
      maintenance,
      mildWeightLoss: maintenance - 250,
      weightLoss: maintenance - 500,
      mildWeightGain: maintenance + 250,
      weightGain: maintenance + 500,
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { activityLevel: data.activityLevel } });
    dispatch({ type: 'SET_RESULTS', payload: { calorieNeeds: maintenance, tdee: String(maintenance) } });
  }

  const handleSelectChange = (name: keyof CalorieNeedsFormValues) => (value: string) => {
    form.setValue(name, value as CalorieNeedsFormValues['activityLevel']);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <CalculatorCard
      icon={<Calculator className="h-8 w-8" />}
      title="Daily Calorie Needs Calculator"
      description="Estimate your daily calorie needs for weight maintenance, loss, or gain based on your BMR and activity level. This is also known as your TDEE."
      result={
        calorieNeedsResult && (
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Your Daily Calorie Needs</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Maintenance</p>
                    <p className="font-bold text-lg text-primary">{calorieNeedsResult.maintenance.toFixed(0)}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Weight Loss (0.5 lb/week)</p>
                    <p className="font-bold text-lg text-yellow-600">{calorieNeedsResult.weightLoss.toFixed(0)}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Mild Weight Loss (0.25 lb/week)</p>
                    <p className="font-bold text-lg text-yellow-500">{calorieNeedsResult.mildWeightLoss.toFixed(0)}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Weight Gain (0.5 lb/week)</p>
                    <p className="font-bold text-lg text-red-500">{calorieNeedsResult.weightGain.toFixed(0)}</p>
                </div>
            </div>
             <p className="text-xs">These are estimates. Consult a professional for personalized advice.</p>
          </div>
        )
      }
    >
      {!state.bmr && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>BMR Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/bmr" className="font-semibold underline">calculate your BMR</Link> first to estimate your daily calorie needs.
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
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.bmr}>Calculate Calorie Needs</Button>
        </form>
      </Form>
    </CalculatorCard>
  );
}
