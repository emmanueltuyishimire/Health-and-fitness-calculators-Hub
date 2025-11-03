
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
import { Vo2MaxSchema, type Vo2MaxFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from './ui/separator';

export function Vo2MaxCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [vo2MaxResult, setVo2MaxResult] = useState<number | null>(null);

  const form = useForm<Vo2MaxFormValues>({
    resolver: zodResolver(Vo2MaxSchema),
    defaultValues: {
      gender: state.gender,
      age: state.age,
      restingHeartRate: '',
    },
    values: { // sync with context
      gender: state.gender,
      age: state.age,
      restingHeartRate: '',
    }
  });

  function onSubmit(data: Vo2MaxFormValues) {
    const age = parseInt(data.age, 10);
    const rhr = parseInt(data.restingHeartRate, 10);
    
    // Max Heart Rate (MHR) estimation
    const mhr = 220 - age;

    // Uth-Sørensen-Overgaard-Pedersen estimation
    const vo2Max = 15.3 * (mhr / rhr);

    setVo2MaxResult(vo2Max);
    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        age: data.age,
        restingHeartRate: data.restingHeartRate,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { vo2Max } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof Vo2MaxFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange = (name: keyof Vo2MaxFormValues) => (value: string) => {
    form.setValue(name, value as 'male' | 'female');
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };
  
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
              name="restingHeartRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resting Heart Rate</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 60" {...field} onChange={handleInputChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">Estimate VO2 Max</Button>
        </form>
      </Form>
      {vo2MaxResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Estimated VO2 Max</h3>
            <p className="text-3xl font-bold text-primary">
              {vo2MaxResult.toFixed(1)}
            </p>
            <p className="text-muted-foreground">
              mL/kg/min
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimate of your maximal oxygen uptake. Compare it to the norms for your age and gender to gauge your fitness level.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
