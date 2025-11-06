
'use client';

import { useState } from 'react';
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
import { BmiPercentileTeenSchema, type BmiPercentileTeenFormValues } from '@/lib/definitions';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { bmiPercentileData } from '@/lib/bmi-percentile-data';
import { cn } from '@/lib/utils';

interface Result {
  bmi: number;
  percentile: number;
  category: string;
}

export function BmiPercentileTeenCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<Result | null>(null);

  const form = useForm<BmiPercentileTeenFormValues>({
    resolver: zodResolver(BmiPercentileTeenSchema),
    defaultValues: {
      gender: 'female',
      ageYears: '',
      ageMonths: '',
      height: '',
      weight: '',
      unitSystem: state.unitSystem,
    },
  });
  
  function getBmiPercentile(gender: 'male' | 'female', ageInMonths: number, bmi: number): number {
    const data = bmiPercentileData[gender];
    const ageData = data.find(d => d.age === ageInMonths);

    if (!ageData) return -1; // Age out of range

    const percentiles = [3, 5, 10, 25, 50, 75, 85, 90, 95, 97];
    const bmiValues = [ageData.p3, ageData.p5, ageData.p10, ageData.p25, ageData.p50, ageData.p75, ageData.p85, ageData.p90, ageData.p95, ageData.p97];

    if (bmi < bmiValues[0]) return percentiles[0];
    if (bmi >= bmiValues[bmiValues.length - 1]) return percentiles[percentiles.length - 1];

    for (let i = 0; i < bmiValues.length - 1; i++) {
        if (bmi >= bmiValues[i] && bmi < bmiValues[i + 1]) {
            // Linear interpolation
            const lowerBmi = bmiValues[i];
            const upperBmi = bmiValues[i + 1];
            const lowerPercentile = percentiles[i];
            const upperPercentile = percentiles[i + 1];

            const percentile = lowerPercentile + ((bmi - lowerBmi) / (upperBmi - lowerBmi)) * (upperPercentile - lowerPercentile);
            return percentile;
        }
    }

    return -1;
  }

  function getCategory(percentile: number): string {
    if (percentile < 5) return 'Underweight';
    if (percentile < 85) return 'Healthy weight';
    if (percentile < 95) return 'Overweight';
    return 'Obese';
  }
  
  const categoryColorClass = (category: string) => {
    if (category.includes('Underweight')) return 'text-blue-500';
    if (category.includes('Healthy')) return 'text-green-500';
    if (category.includes('Overweight')) return 'text-yellow-500';
    if (category.includes('Obese')) return 'text-red-500';
    return 'text-foreground';
  };

  function onSubmit(data: BmiPercentileTeenFormValues) {
    const ageYears = parseInt(data.ageYears, 10);
    const ageMonths = parseInt(data.ageMonths, 10);
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    
    const totalAgeInMonths = ageYears * 12 + ageMonths;
    if(totalAgeInMonths < 24 || totalAgeInMonths > 240) {
        form.setError('ageYears', { message: 'Age must be between 2 and 20 years.' });
        return;
    }

    let bmi: number;
    if (data.unitSystem === 'metric') {
      bmi = weight / (height / 100) ** 2;
    } else {
      bmi = (weight / height ** 2) * 703;
    }

    const percentile = getBmiPercentile(data.gender, totalAgeInMonths, bmi);
    const category = getCategory(percentile);

    setResult({ bmi, percentile, category });
    
    dispatch({ type: 'SET_USER_DATA', payload: { ...data } });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ageYears"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age (Years)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="ageMonths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age (Months)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 6" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
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
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Percentile
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4">
             <h3 className="font-semibold text-foreground text-center md:text-left">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">BMI</p>
                    <p className="text-2xl font-bold text-primary">{result.bmi.toFixed(1)}</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">BMI Percentile</p>
                    <p className="text-2xl font-bold text-primary">{result.percentile.toFixed(0)}th</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Weight Status</p>
                    <p className={cn("text-2xl font-bold", categoryColorClass(result.category))}>{result.category}</p>
                </div>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
                This means your child's BMI is higher than {result.percentile.toFixed(0)}% of other children of the same age and gender. This result is a screening tool and not a medical diagnosis. Consult a pediatrician for health advice.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
