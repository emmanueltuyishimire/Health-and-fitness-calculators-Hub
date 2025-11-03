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
  WaistToHeightRatioSchema,
  type WaistToHeightRatioFormValues,
} from '@/lib/definitions';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export function WaistToHeightRatioCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [whtrResult, setWhtrResult] = useState<{
    value: number;
    category: string;
  } | null>(null);

  const form = useForm<WaistToHeightRatioFormValues>({
    resolver: zodResolver(WaistToHeightRatioSchema),
    defaultValues: {
      height: state.height,
      waist: state.waist,
      unitSystem: state.unitSystem,
    },
    values: {
      height: state.height,
      waist: state.waist,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: WaistToHeightRatioFormValues) {
    const height = parseFloat(data.height);
    const waist = parseFloat(data.waist);

    const whtr = waist / height;

    setWhtrResult({ value: whtr, category: getWhtrCategory(whtr) });
    dispatch({
      type: 'SET_USER_DATA',
      payload: { height: data.height, waist: data.waist },
    });
    dispatch({ type: 'SET_RESULTS', payload: { waistToHeightRatio: whtr } });
  }

  function getWhtrCategory(whtr: number): string {
    if (whtr < 0.4) return 'Possibly Underweight';
    if (whtr < 0.5) return 'Healthy';
    if (whtr < 0.6) return 'Increased Risk';
    return 'High Risk';
  }

  const categoryColorClass = (category: string) => {
    switch (category) {
      case 'Possibly Underweight':
        return 'text-blue-500';
      case 'Healthy':
        return 'text-green-500';
      case 'Increased Risk':
        return 'text-yellow-500';
      case 'High Risk':
        return 'text-red-500';
      default:
        return 'text-foreground';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof WaistToHeightRatioFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            Calculate WHtR
          </Button>
        </form>
      </Form>

      {whtrResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your WHtR Result</h3>
            <p className="text-4xl font-bold text-primary">
              {whtrResult.value.toFixed(2)}
            </p>
            <p
              className={cn(
                'font-semibold text-lg',
                categoryColorClass(whtrResult.category)
              )}
            >
              Category: {whtrResult.category}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              A ratio of 0.5 or greater may indicate an increased risk of obesity-related health complications. The general advice is to keep your waist circumference less than half of your height.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
