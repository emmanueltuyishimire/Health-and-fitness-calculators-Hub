
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
import { BodyFatSchema, type BodyFatFormValues } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export function BodyFatCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bodyFatResult, setBodyFatResult] = useState<number | null>(null);

  const form = useForm<BodyFatFormValues>({
    resolver: zodResolver(BodyFatSchema),
    defaultValues: {
      gender: state.gender,
      height: state.height,
      waist: state.waist,
      neck: state.neck,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
    values: {
      gender: state.gender,
      height: state.height,
      waist: state.waist,
      neck: state.neck,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
  });

  const gender = form.watch('gender');

  function onSubmit(data: BodyFatFormValues) {
    const height = parseFloat(data.height);
    const waist = parseFloat(data.waist);
    const neck = parseFloat(data.neck);
    const hip = data.hip ? parseFloat(data.hip) : 0;

    let bodyFat: number;

    const toInches = (cm: number) => cm / 2.54;
    const heightIn = data.unitSystem === 'metric' ? toInches(height) : height;
    const waistIn = data.unitSystem === 'metric' ? toInches(waist) : waist;
    const neckIn = data.unitSystem === 'metric' ? toInches(neck) : neck;
    const hipIn = data.unitSystem === 'metric' ? toInches(hip) : hip;

    if (data.gender === 'male') {
      bodyFat =
        86.01 * Math.log10(waistIn - neckIn) -
        70.041 * Math.log10(heightIn) +
        36.76;
    } else {
      bodyFat =
        163.205 * Math.log10(waistIn + hipIn - neckIn) -
        97.684 * Math.log10(heightIn) -
        78.387;
    }

    const result = Math.max(0, bodyFat);
    setBodyFatResult(result);
    dispatch({
      type: 'SET_USER_DATA',
      payload: {
        gender: data.gender,
        height: data.height,
        waist: data.waist,
        neck: data.neck,
        hip: data.hip,
      },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bodyFat: result } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BodyFatFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  const handleSelectChange =
    (name: keyof BodyFatFormValues) => (value: string) => {
      form.setValue(name, value);
      dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
    };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              name="waist"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Waist ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 80"
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
              name="neck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Neck ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 38"
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className={cn(gender === 'female' ? 'block' : 'hidden')}>
              <FormField
                control={form.control}
                name="hip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Hip ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 95"
                        {...field}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Body Fat
          </Button>
        </form>
      </Form>
      {bodyFatResult !== null && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">
              Your Estimated Body Fat
            </h3>
            <p className="text-3xl font-bold text-primary">
              {bodyFatResult.toFixed(1)}%
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This estimation, based on the U.S. Navy method, is a valuable
              starting point. For a complete health assessment, consult a
              healthcare professional.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

    