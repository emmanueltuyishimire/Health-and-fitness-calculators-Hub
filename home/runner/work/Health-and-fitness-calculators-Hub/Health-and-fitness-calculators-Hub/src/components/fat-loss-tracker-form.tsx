
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
import { FatLossTrackerSchema, type FatLossTrackerFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

interface Result {
  totalWeightChange: number;
  fatMassChange: number;
  leanMassChange: number;
  bodyFatChange: number;
}

export function FatLossTrackerForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<FatLossTrackerFormValues>({
    resolver: zodResolver(FatLossTrackerSchema),
    defaultValues: {
      startingWeight: '',
      startingBodyFat: '',
      currentWeight: state.weight,
      currentBodyFat: state.bodyFat?.toFixed(1) || '',
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    form.setValue('unitSystem', state.unitSystem);
    if (state.weight) form.setValue('currentWeight', state.weight);
    if (state.bodyFat) form.setValue('currentBodyFat', state.bodyFat.toFixed(1));
  }, [state.unitSystem, state.weight, state.bodyFat, form]);

  function onSubmit(data: FatLossTrackerFormValues) {
    const startWeight = parseFloat(data.startingWeight);
    const startBf = parseFloat(data.startingBodyFat);
    const currentWeight = parseFloat(data.currentWeight);
    const currentBf = parseFloat(data.currentBodyFat);

    const startFatMass = startWeight * (startBf / 100);
    const startLeanMass = startWeight - startFatMass;

    const currentFatMass = currentWeight * (currentBf / 100);
    const currentLeanMass = currentWeight - currentFatMass;

    setResult({
      totalWeightChange: currentWeight - startWeight,
      fatMassChange: currentFatMass - startFatMass,
      leanMassChange: currentLeanMass - startLeanMass,
      bodyFatChange: currentBf - startBf,
    });
    
    dispatch({ type: 'SET_USER_DATA', payload: { weight: data.currentWeight, bodyFat: currentBf } });
  }

  const getChangeColor = (change: number) => {
    if (change < 0) return 'text-green-500';
    if (change > 0) return 'text-red-500';
    return 'text-muted-foreground';
  };

  return (
    <div>
      {(!state.weight || !state.bodyFat) && (
         <Alert className="mb-6">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Current Data Missing</AlertTitle>
            <AlertDescription>
                Some current data is missing. Use the <Link href="/body-fat" className="font-semibold underline">Body Fat Calculator</Link> to automatically fill in your current weight and body fat percentage.
            </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startingWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startingBodyFat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Starting Body Fat (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="currentWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentBodyFat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Body Fat (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Track Progress
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground text-center md:text-left">
              Your Body Recomposition Progress
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Weight</p>
                <p className={`text-2xl font-bold ${getChangeColor(result.totalWeightChange)}`}>
                  {result.totalWeightChange.toFixed(1)}
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Fat Mass</p>
                <p className={`text-2xl font-bold ${getChangeColor(result.fatMassChange)}`}>
                  {result.fatMassChange.toFixed(1)}
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Lean Mass</p>
                 <p className={`text-2xl font-bold ${getChangeColor(result.leanMassChange * -1)}`}>
                  {result.leanMassChange.toFixed(1)}
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Body Fat %</p>
                 <p className={`text-2xl font-bold ${getChangeColor(result.bodyFatChange)}`}>
                  {result.bodyFatChange.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
