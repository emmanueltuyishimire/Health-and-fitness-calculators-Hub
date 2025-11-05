
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { BodyFatZoneSchema, type BodyFatZoneFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const getZone = (gender: 'male' | 'female', age: number, bfp: number): string => {
    // Using ACE standards for simplicity
    if (gender === 'female') {
        if (bfp < 14) return 'Athlete';
        if (bfp <= 24) return 'Fitness';
        if (bfp <= 31) return 'Acceptable';
        return 'Obese';
    } else { // male
        if (bfp < 6) return 'Athlete';
        if (bfp <= 17) return 'Fitness';
        if (bfp <= 24) return 'Acceptable';
        return 'Obese';
    }
};

const categoryColorClass = (category: string) => {
    if (category.includes('Athlete') || category.includes('Fitness')) return 'text-green-500';
    if (category.includes('Acceptable')) return 'text-yellow-500';
    if (category.includes('Obese')) return 'text-red-500';
    return 'text-foreground';
  };

export function BodyFatZoneClassifierForm() {
  const { state, dispatch } = useCalculator();
  const [result, setResult] = useState<string | null>(null);

  const form = useForm<BodyFatZoneFormValues>({
    resolver: zodResolver(BodyFatZoneSchema),
    defaultValues: {
      gender: state.gender,
      age: state.age,
      bodyFat: state.bodyFat?.toFixed(1) || '',
    },
  });

  useEffect(() => {
    if (state.gender) form.setValue('gender', state.gender);
    if (state.age) form.setValue('age', state.age);
    if (state.bodyFat) form.setValue('bodyFat', state.bodyFat.toFixed(1));
  }, [state.gender, state.age, state.bodyFat, form]);

  function onSubmit(data: BodyFatZoneFormValues) {
    const age = parseInt(data.age, 10);
    const bodyFat = parseFloat(data.bodyFat);
    const zone = getZone(data.gender, age, bodyFat);
    setResult(zone);

    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        age: data.age,
        bodyFat,
      },
    });
  }

  return (
    <div>
      {!state.bodyFat && (
        <Alert className="mb-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Body Fat % Not Found</AlertTitle>
          <AlertDescription>
            For an accurate classification, please use the{' '}
            <Link href="/body-fat" className="font-semibold underline">
              Body Fat Percentage Calculator
            </Link>{' '}
            first or enter your body fat value manually.
          </AlertDescription>
        </Alert>
      )}
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
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bodyFat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Fat (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Classify My Body Fat
          </Button>
        </form>
      </Form>

      {result && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Body Fat Health Zone</h3>
            <p className={cn('text-3xl font-bold', categoryColorClass(result))}>
              {result}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This classification is based on guidelines from the American Council on Exercise (ACE) and varies by age and gender.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
