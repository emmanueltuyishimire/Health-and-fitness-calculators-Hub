
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
import { BmrSchema, type BmrFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from './ui/separator';

export function MetabolicAgeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [metabolicAgeResult, setMetabolicAgeResult] = useState<number | null>(null);
  const [bmrResult, setBmrResult] = useState<number | null>(null);

  const form = useForm<BmrFormValues>({
    resolver: zodResolver(BmrSchema),
    defaultValues: {
      gender: state.gender,
      age: state.age,
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
    values: { // sync with context
      gender: state.gender,
      age: state.age,
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    }
  });

  function onSubmit(data: BmrFormValues) {
    const age = parseInt(data.age, 10);
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    
    let bmr: number;
    let metabolicAge: number;

    const heightCm = data.unitSystem === 'imperial' ? height * 2.54 : height;
    const weightKg = data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    if (data.gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
      metabolicAge = (10 * weightKg + 6.25 * heightCm + 5 - bmr) / 5;

    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
      metabolicAge = (10 * weightKg + 6.25 * heightCm - 161 - bmr) / 5;
    }
    
    // The raw metabolic age can be negative if BMR is very high, so we cap it at a reasonable floor.
    // It's a wellness metric, not a clinical one, so this interpretation is acceptable.
    const finalMetabolicAge = Math.max(18, metabolicAge);

    setBmrResult(bmr);
    setMetabolicAgeResult(finalMetabolicAge);

    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        age: data.age,
        height: data.height,
        weight: data.weight,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bmr, metabolicAge: finalMetabolicAge } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BmrFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange = (name: keyof BmrFormValues) => (value: string) => {
    form.setValue(name, value as 'male' | 'female');
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };
  
  return (
    <div>
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
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 35" {...field} onChange={handleInputChange} />
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
          </div>
          <Button type="submit" className="w-full sm:w-auto">Calculate Metabolic Age</Button>
        </form>
      </Form>
      {metabolicAgeResult !== null && bmrResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Metabolic Age Result</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Your Metabolic Age</p>
                    <p className="text-2xl font-bold text-primary">{metabolicAgeResult.toFixed(0)} years</p>
                </div>
                 <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Your BMR</p>
                    <p className="text-2xl font-bold text-primary">{bmrResult.toFixed(0)} kcal</p>
                </div>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
                Your metabolic age is an estimate of your metabolism's efficiency compared to the average for your chronological age. A lower number is generally better.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
