
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
import { RmrSchema, type RmrFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from './ui/separator';

export function RmrCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [rmrResult, setRmrResult] = useState<number | null>(null);

  const form = useForm<RmrFormValues>({
    resolver: zodResolver(RmrSchema),
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

  function onSubmit(data: RmrFormValues) {
    const age = parseInt(data.age, 10);
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    
    let rmr: number;

    const heightCm = data.unitSystem === 'imperial' ? height * 2.54 : height;
    const weightKg = data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    // Using Mifflin-St Jeor equation, which is standard for both BMR and RMR estimation
    if (data.gender === 'male') {
      rmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      rmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    setRmrResult(rmr);
    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        age: data.age,
        height: data.height,
        weight: data.weight,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { rmr } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof RmrFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange = (name: keyof RmrFormValues) => (value: string) => {
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
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 25" {...field} onChange={handleInputChange} />
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
          <Button type="submit" className="w-full sm:w-auto">Calculate RMR</Button>
        </form>
      </Form>
      {rmrResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your RMR Result</h3>
            <p className="text-3xl font-bold text-primary">
              {rmrResult.toFixed(0)}
            </p>
            <p className="text-muted-foreground">
              calories/day
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is the energy your body needs for basic functions while at rest.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
