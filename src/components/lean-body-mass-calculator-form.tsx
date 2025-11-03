
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
import {
  LeanBodyMassSchema,
  type LeanBodyMassFormValues,
} from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from './ui/separator';

export function LeanBodyMassCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [lbmResult, setLbmResult] = useState<{ value: number; unit: string } | null>(null);

  const form = useForm<LeanBodyMassFormValues>({
    resolver: zodResolver(LeanBodyMassSchema),
    defaultValues: {
      gender: state.gender,
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
    values: {
      gender: state.gender,
      height: state.height,
      weight: state.weight,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: LeanBodyMassFormValues) {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);
    let lbm: number;

    const heightCm = data.unitSystem === 'imperial' ? height * 2.54 : height;
    const weightKg = data.unitSystem === 'imperial' ? weight * 0.453592 : weight;

    if (data.gender === 'male') {
        lbm = (0.407 * weightKg) + (0.267 * heightCm) - 19.2;
    } else { // female
        lbm = (0.252 * weightKg) + (0.473 * heightCm) - 48.3;
    }

    const resultUnit = data.unitSystem === 'metric' ? 'kg' : 'lbs';
    const resultValue = data.unitSystem === 'metric' ? lbm : lbm * 2.20462;

    setLbmResult({ value: resultValue, unit: resultUnit });
    dispatch({
      type: 'SET_USER_DATA',
      payload: {
        gender: data.gender,
        height: data.height,
        weight: data.weight,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { leanBodyMass: resultValue } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof LeanBodyMassFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange =
    (name: keyof LeanBodyMassFormValues) => (value: string) => {
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
                  <Select
                    onValueChange={handleSelectChange('gender')}
                    value={field.value}
                  >
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
                  <FormLabel>
                    Height ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
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
                  <FormLabel>
                    Weight ({state.unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </FormLabel>
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
            Calculate Lean Body Mass
          </Button>
        </form>
      </Form>

      {lbmResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Estimated Lean Body Mass
            </h3>
            <p className="text-3xl font-bold text-primary">
              {lbmResult.value.toFixed(1)} {lbmResult.unit}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is the estimated weight of your body minus fat, using the
              Boer formula.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
