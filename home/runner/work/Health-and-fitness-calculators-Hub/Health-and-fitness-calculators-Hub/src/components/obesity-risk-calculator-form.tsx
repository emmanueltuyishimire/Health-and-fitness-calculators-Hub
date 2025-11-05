
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
import { BmiSchema, type BmiFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export function ObesityRiskCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bmiResult, setBmiResult] = useState<{ value: number; category: string } | null>(null);

  const form = useForm<BmiFormValues>({
    resolver: zodResolver(BmiSchema),
    defaultValues: {
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
    values: {
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
  });

  useEffect(() => {
    // If BMI is already in context, calculate risk immediately
    if (state.bmi) {
      setBmiResult({
        value: state.bmi,
        category: getBmiCategory(state.bmi),
      });
    }
  }, [state.bmi]);

  function onSubmit(data: BmiFormValues) {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    let bmi: number;

    if (data.unitSystem === 'metric') {
      bmi = weight / (height / 100) ** 2;
    } else {
      bmi = (weight / height ** 2) * 703;
    }

    setBmiResult({ value: bmi, category: getBmiCategory(bmi) });
    dispatch({ type: 'SET_USER_DATA', payload: { height: data.height, weight: data.weight } });
    dispatch({ type: 'SET_RESULTS', payload: { bmi } });
  }

  function getBmiCategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight (Pre-obese)';
    if (bmi < 35) return 'Obese Class I (Moderate Risk)';
    if (bmi < 40) return 'Obese Class II (High Risk)';
    return 'Obese Class III (Very High Risk)';
  }

  const categoryColorClass = (category: string) => {
    if (category.includes('Underweight')) return 'text-blue-500';
    if (category.includes('Normal')) return 'text-green-500';
    if (category.includes('Overweight')) return 'text-yellow-500';
    if (category.includes('Obese')) return 'text-red-500';
    return 'text-foreground';
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BmiFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 175"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 70"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Assess Risk
          </Button>
        </form>
      </Form>

      {bmiResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Obesity Risk Assessment</h3>
            <p className="text-4xl font-bold text-primary">
              BMI: {bmiResult.value.toFixed(1)}
            </p>
            <p
              className={cn(
                'font-semibold text-lg',
                categoryColorClass(bmiResult.category)
              )}
            >
              Category: {bmiResult.category}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This classification is based on the World Health Organization (WHO) standards for Body Mass Index.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
