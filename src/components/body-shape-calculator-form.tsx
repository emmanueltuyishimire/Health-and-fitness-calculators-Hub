
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
  BodyShapeSchema,
  type BodyShapeFormValues,
} from '@/lib/definitions';
import { Separator } from './ui/separator';

export function BodyShapeCalculatorForm() {
  const { state, dispatch } = useCalculator();
  const [bodyShapeResult, setBodyShapeResult] = useState<string | null>(null);

  const form = useForm<BodyShapeFormValues>({
    resolver: zodResolver(BodyShapeSchema),
    defaultValues: {
      bust: state.bust,
      waist: state.waist,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
    values: {
      bust: state.bust,
      waist: state.waist,
      hip: state.hip,
      unitSystem: state.unitSystem,
    },
  });

  function onSubmit(data: BodyShapeFormValues) {
    const bust = parseFloat(data.bust);
    const waist = parseFloat(data.waist);
    const hip = parseFloat(data.hip);

    let shape = '';

    const isHourglass = (bust - hip) / bust < 0.05 && (hip - bust) / hip < 0.05 && (bust - waist) / bust >= 0.25 && (hip - waist) / hip >= 0.25;
    const isPear = (hip - bust) / hip > 0.05;
    const isInvertedTriangle = (bust - hip) / bust > 0.05;

    if (isHourglass) {
        shape = 'Hourglass';
    } else if (isPear) {
        shape = 'Triangle (Pear)';
    } else if (isInvertedTriangle) {
        shape = 'Inverted Triangle';
    } else {
        shape = 'Rectangle';
    }

    setBodyShapeResult(shape);
    dispatch({
      type: 'SET_USER_DATA',
      payload: { bust: data.bust, waist: data.waist, hip: data.hip },
    });
    dispatch({ type: 'SET_RESULTS', payload: { bodyShape: shape } });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    form.setValue(name as keyof BodyShapeFormValues, value);
    dispatch({ type: 'SET_USER_DATA', payload: { [name]: value } });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="bust"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Bust ({state.unitSystem === 'metric' ? 'cm' : 'in'})
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 90"
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
          <Button type="submit" className="w-full sm:w-auto">
            Calculate Body Shape
          </Button>
        </form>
      </Form>

      {bodyShapeResult && (
        <>
          <Separator className="my-6" />
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-foreground">Your Estimated Body Shape</h3>
            <p className="text-4xl font-bold text-primary">
              {bodyShapeResult}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
              This is an estimation based on the ratios of your measurements. Many people have characteristics of multiple shapes.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
