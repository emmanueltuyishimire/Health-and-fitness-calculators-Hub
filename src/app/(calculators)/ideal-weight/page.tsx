'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Target } from 'lucide-react';

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
import { CalculatorCard } from '@/components/calculator-card';
import { useCalculator } from '@/context/calculator-context';
import { IdealWeightSchema, type IdealWeightFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function IdealWeightPage() {
  const { state, dispatch } = useCalculator();
  const [idealWeightResult, setIdealWeightResult] = useState<string | null>(null);

  const form = useForm<IdealWeightFormValues>({
    resolver: zodResolver(IdealWeightSchema),
    defaultValues: {
      gender: state.gender,
      height: state.height,
      unitSystem: state.unitSystem,
    },
    values: { // sync with context
      gender: state.gender,
      height: state.height,
      unitSystem: state.unitSystem,
    }
  });

  function onSubmit(data: IdealWeightFormValues) {
    const height = parseFloat(data.height);
    let idealWeightKg: number;
    
    const heightInInches = data.unitSystem === 'metric' ? height / 2.54 : height;
    const heightOver5Ft = Math.max(0, heightInInches - 60); // Inches over 5 feet

    if (data.gender === 'male') {
      idealWeightKg = 48.0 + (2.7 * heightOver5Ft);
    } else {
      idealWeightKg = 45.5 + (2.2 * heightOver5Ft);
    }

    const lowerBoundKg = idealWeightKg * 0.9;
    const upperBoundKg = idealWeightKg * 1.1;

    let resultString: string;
    if (data.unitSystem === 'metric') {
      resultString = `${lowerBoundKg.toFixed(1)} kg - ${upperBoundKg.toFixed(1)} kg`;
    } else {
      const kgToLbs = 2.20462;
      resultString = `${(lowerBoundKg * kgToLbs).toFixed(1)} lbs - ${(upperBoundKg * kgToLbs).toFixed(1)} lbs`;
    }

    setIdealWeightResult(resultString);
    dispatch({
      type: 'SET_USER_DATA',
      payload: { 
        gender: data.gender,
        height: data.height,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { idealWeight: resultString } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof IdealWeightFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange = (name: keyof IdealWeightFormValues) => (value: string) => {
    form.setValue(name, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <CalculatorCard
      icon={<Target className="h-8 w-8" />}
      title="Ideal Weight Calculator"
      description="Find your ideal weight range based on height and gender using the Hamwi formula."
      result={
        idealWeightResult && (
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Your Ideal Weight Range</h3>
            <p className="text-3xl font-bold text-primary">
              {idealWeightResult}
            </p>
            <p className="text-xs">
              This range is an estimate. Body composition (muscle vs. fat) also plays a crucial role.
            </p>
          </div>
        )
      }
    >
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
                    <Input type="number" placeholder="e.g., 175" {...field} onChange={handleInputChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">Calculate Ideal Weight</Button>
        </form>
      </Form>
    </CalculatorCard>
  );
}
