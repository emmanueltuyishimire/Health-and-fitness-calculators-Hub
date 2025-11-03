
'use client';

import { useState } from 'react';
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
import { FfmiSchema, type FfmiFormValues } from '@/lib/definitions';
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

interface FfmiResult {
  lbm: number;
  ffmi: number;
  normalizedFfmi: number;
}

export function FfmiCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [ffmiResult, setFfmiResult] = useState<FfmiResult | null>(null);

  const form = useForm<FfmiFormValues>({
    resolver: zodResolver(FfmiSchema),
    defaultValues: {
      gender: state.gender,
      height: state.height,
      weight: state.weight,
      bodyFat: state.bodyFat?.toFixed(1) || '',
      unitSystem: state.unitSystem,
    },
    values: { // sync with context
      gender: state.gender,
      height: state.height,
      weight: state.weight,
      bodyFat: state.bodyFat?.toFixed(1) || '',
      unitSystem: state.unitSystem,
    }
  });

  function onSubmit(data: FfmiFormValues) {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    const bodyFat = parseFloat(data.bodyFat);

    const heightM = data.unitSystem === 'imperial' ? height * 0.0254 : height / 100;
    const weightKg = data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    const fatMass = weightKg * (bodyFat / 100);
    const leanBodyMass = weightKg - fatMass;
    const ffmi = leanBodyMass / (heightM ** 2);
    const normalizedFfmi = ffmi + 6.1 * (1.8 - heightM);

    setFfmiResult({
        lbm: data.unitSystem === 'metric' ? leanBodyMass : leanBodyMass * 2.20462,
        ffmi,
        normalizedFfmi,
    });
    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        bodyFat: bodyFat,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { ffmi: normalizedFfmi, leanBodyMass: leanBodyMass } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof FfmiFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange = (name: keyof FfmiFormValues) => (value: string) => {
    form.setValue(name, value as 'male' | 'female');
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
        {!state.bodyFat && (
             <Alert className="mb-6">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Body Fat % Not Found</AlertTitle>
                <AlertDescription>
                    For an accurate FFMI, first use the <Link href="/body-fat" className="font-semibold underline" aria-label="Body Fat Calculator">Body Fat Calculator</Link>. You can also enter a manual value.
                </AlertDescription>
            </Alert>
        )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={handleSelectChange('gender')} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
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
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 175" {...field} onChange={handleInputChange} />
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
                    <Input type="number" placeholder="e.g., 70" {...field} onChange={handleInputChange} />
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
                    <Input type="number" step="0.1" placeholder="e.g., 15" {...field} onChange={handleInputChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">Calculate FFMI</Button>
        </form>
      </Form>
      {ffmiResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your FFMI Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                 <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Lean Body Mass</p>
                    <p className="font-bold text-lg text-primary">{ffmiResult.lbm.toFixed(1)} {state.unitSystem === 'metric' ? 'kg' : 'lbs'}</p>
                </div>
                 <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">FFMI</p>
                    <p className="font-bold text-lg text-primary">{ffmiResult.ffmi.toFixed(1)}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Normalized FFMI</p>
                    <p className="font-bold text-lg text-primary">{ffmiResult.normalizedFfmi.toFixed(1)}</p>
                </div>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              The normalized FFMI adjusts your score for height, allowing for a more standardized comparison.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
