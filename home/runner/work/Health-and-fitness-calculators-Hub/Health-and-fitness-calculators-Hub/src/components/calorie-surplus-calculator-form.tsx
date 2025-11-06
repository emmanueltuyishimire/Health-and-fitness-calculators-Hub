
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
import { CalorieSurplusSchema, type CalorieSurplusFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const surplusLevels = {
  mild: { label: 'Mild Surplus (10%)', value: 0.10 },
  standard: { label: 'Standard Surplus (15%)', value: 0.15 },
  aggressive: { label: 'Aggressive Surplus (20%)', value: 0.20 },
};

export function CalorieSurplusCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [surplusResult, setSurplusResult] = useState<Record<string, number> | null>(null);

  const form = useForm<CalorieSurplusFormValues>({
    resolver: zodResolver(CalorieSurplusSchema),
    defaultValues: {
      tdee: state.calorieNeeds?.toFixed(0) || '',
      surplus: 'standard',
    },
  });

  useEffect(() => {
    if (state.calorieNeeds) {
      form.setValue('tdee', state.calorieNeeds.toFixed(0));
    }
  }, [state.calorieNeeds, form]);

  function onSubmit(data: CalorieSurplusFormValues) {
    const tdee = parseFloat(data.tdee);
    const surplusPercentage = surplusLevels[data.surplus].value;
    const surplusAmount = tdee * surplusPercentage;
    const targetCalories = tdee + surplusAmount;

    setSurplusResult({
      tdee,
      surplusAmount,
      targetCalories,
      weeklyGain: (surplusAmount * 7) / 3500, // lbs
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { tdee: data.tdee, surplus: data.surplus } });
  }

  const handleSelectChange = (name: keyof CalorieSurplusFormValues) => (value: string) => {
    form.setValue(name, value as CalorieSurplusFormValues['surplus']);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      {!state.calorieNeeds && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>TDEE Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/tdee" className="font-semibold underline" aria-label="TDEE Calculator">calculate your TDEE</Link> first to determine your calorie surplus.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="tdee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your TDEE (calories/day)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surplus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight Gain Goal</FormLabel>
                  <Select onValueChange={handleSelectChange('surplus')} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your surplus level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(surplusLevels).map(([key, { label }]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto" disabled={!state.calorieNeeds}>Calculate Surplus</Button>
        </form>
      </Form>
      {surplusResult && (
        <>
            <Separator className="my-6" />
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center md:text-left">Your Calorie Surplus Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Daily Calorie Target</p>
                        <p className="text-2xl font-bold text-primary">{surplusResult.targetCalories.toFixed(0)}</p>
                        <p className="text-xs text-muted-foreground">kcal/day</p>
                    </div>
                     <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Est. Weekly Gain</p>
                        <p className="text-2xl font-bold text-primary">{surplusResult.weeklyGain.toFixed(1)}</p>
                        <p className="text-xs text-muted-foreground">{state.unitSystem === 'metric' ? 'kg/week' : 'lbs/week'}</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2 text-center md:text-left">
                    You should aim to eat approximately <strong>{surplusResult.targetCalories.toFixed(0)} calories</strong> per day to achieve a weekly gain of about <strong>{surplusResult.weeklyGain.toFixed(1)} {state.unitSystem === 'metric' ? 'kg' : 'lbs'}</strong>.
                </p>
            </div>
        </>
      )}
    </div>
  );
}
