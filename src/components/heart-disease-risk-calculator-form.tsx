
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
import { HeartDiseaseRiskSchema, type HeartDiseaseRiskFormValues } from '@/lib/definitions';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export function HeartDiseaseRiskCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [riskResult, setRiskResult] = useState<{
    bmi: number;
    category: string;
  } | null>(null);

  const form = useForm<HeartDiseaseRiskFormValues>({
    resolver: zodResolver(HeartDiseaseRiskSchema),
    defaultValues: {
      bmi: state.bmi?.toFixed(1) || '',
    },
  });
  
  useEffect(() => {
      if (state.bmi) {
          form.setValue('bmi', state.bmi.toFixed(1));
      }
  }, [state.bmi, form]);

  function onSubmit(data: HeartDiseaseRiskFormValues) {
    const bmi = parseFloat(data.bmi);

    setRiskResult({ bmi, category: getRiskCategory(bmi) });
    dispatch({ type: 'SET_RESULTS', payload: { bmi } });
  }

  function getRiskCategory(bmi: number): string {
    if (bmi < 18.5) return 'Low Risk (but check for underweight risks)';
    if (bmi < 25) return 'Average / Healthy';
    if (bmi < 30) return 'Increased Risk';
    if (bmi < 35) return 'High Risk (Obese Class I)';
    if (bmi < 40) return 'Very High Risk (Obese Class II)';
    return 'Extremely High Risk (Obese Class III)';
  }

  const categoryColorClass = (category: string) => {
    if (category.includes('Average')) return 'text-green-500';
    if (category.includes('Increased')) return 'text-yellow-500';
    if (category.includes('High')) return 'text-red-500';
    return 'text-foreground';
  };

  return (
    <div>
      {!state.bmi && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>BMI Not Found</AlertTitle>
          <AlertDescription>
            Please <Link href="/bmi" className="font-semibold underline">calculate your BMI</Link> first to assess your risk.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="bmi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your BMI</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="e.g., 24.5"
                      {...field}
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

      {riskResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Heart Disease Risk (BMI-Based)</h3>
            <p className="text-4xl font-bold text-primary">
              BMI: {riskResult.bmi.toFixed(1)}
            </p>
            <p
              className={cn(
                'font-semibold text-lg',
                categoryColorClass(riskResult.category)
              )}
            >
              Category: {riskResult.category}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This classification is based on general population data linking BMI to cardiovascular health risks. It is not a medical diagnosis.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
